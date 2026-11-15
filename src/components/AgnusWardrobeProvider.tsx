import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useBibleProgress } from "@/components/BibleProgressProvider";
import { useLocalProfile } from "@/hooks/use-local-profile";
import { useStreak } from "@/hooks/use-streak";
import {
  AGNUS_ACCESSORIES,
  AGNUS_CARE_CHANGED_EVENT,
  AGNUS_CARE_STORAGE_KEY,
  AGNUS_SCENARIOS,
  DEFAULT_AGNUS_ACCESSORY_ID,
  DEFAULT_AGNUS_SCENARIO_ID,
  applyCareElapsedTime,
  computeJourneyPercent,
  defaultAgnusCareState,
  getAgnusAccessory,
  getAgnusScenario,
  getNextLockedReward,
  getUnlockedAccessoryIds,
  getUnlockedScenarioIds,
  parseAgnusCareState,
  performCareAction,
  performPropInteraction,
  type AgnusAccessory,
  type AgnusCareState,
  type AgnusRoomId,
  type AgnusScenario,
  type CareActionId,
  type CareActionResult,
  type HabitatProgressMetrics,
  type StagePropDef,
  type UnlockStatus,
} from "@/lib/agnus-habitat";
import { getReadingStats } from "@/lib/bible-progress";
import {
  CHRISTMAS_CHANGED_EVENT,
  CHRISTMAS_STORAGE_KEY,
  christmasProgressPercent,
  parseChristmasProgress,
} from "@/lib/christmas";
import {
  AGNUS_NAME,
  AGNUS_OUTFITS,
  AGNUS_WARDROBE_CHANGED_EVENT,
  AGNUS_WARDROBE_STORAGE_KEY,
  DEFAULT_AGNUS_OUTFIT_ID,
  acknowledgeAgnusCelebrations,
  emptyAgnusWardrobe,
  evaluateAgnusWardrobe,
  getAgnusOutfit,
  getNextUnlockableOutfit,
  getPendingCelebrationOutfits,
  parseAgnusWardrobe,
  type AgnusOutfit,
  type AgnusProgressMetrics,
  type AgnusWardrobeState,
  type RequirementProgress,
} from "@/lib/mascot";
import {
  PROFILE_CHANGED_EVENT,
  PROFILE_STORAGE_KEY,
  parseProfile,
  sanitizeMascotName,
} from "@/lib/profile";
import { PROGRESS_CHANGED_EVENT, PROGRESS_STORAGE_KEY, parseProgress } from "@/lib/progress";
import { getLearningStats } from "@/lib/statistics";

type AgnusWardrobeContextValue = {
  outfits: readonly AgnusOutfit[];
  accessories: readonly AgnusAccessory[];
  scenarios: readonly AgnusScenario[];
  wardrobe: AgnusWardrobeState;
  metrics: AgnusProgressMetrics;
  habitatMetrics: HabitatProgressMetrics;
  mascotName: string;
  equippedOutfit: AgnusOutfit;
  equippedAccessory: AgnusAccessory;
  equippedScenario: AgnusScenario;
  unlockedIds: readonly string[];
  unlockedAccessoryIds: readonly string[];
  unlockedScenarioIds: readonly string[];
  pendingCelebrations: readonly AgnusOutfit[];
  nextTrackUnlock: { outfit: AgnusOutfit; progress: RequirementProgress } | null;
  nextBibleUnlock: { outfit: AgnusOutfit; progress: RequirementProgress } | null;
  nextChristmasUnlock: { outfit: AgnusOutfit; progress: RequirementProgress } | null;
  nextAnyUnlock: { outfit: AgnusOutfit; progress: RequirementProgress } | null;
  nextAccessoryUnlock: { item: AgnusAccessory; progress: UnlockStatus } | null;
  nextScenarioUnlock: { item: AgnusScenario; progress: UnlockStatus } | null;
  careState: AgnusCareState;
  isUnlocked: (outfitId: string) => boolean;
  isAccessoryUnlocked: (accessoryId: string) => boolean;
  isScenarioUnlocked: (scenarioId: string) => boolean;
  equipOutfit: (outfitId: string) => boolean;
  equipAccessory: (accessoryId: string) => boolean;
  equipScenario: (scenarioId: string) => boolean;
  saveMascotName: (name: string) => boolean;
  changeRoom: (roomId: AgnusRoomId) => void;
  runCareAction: (action: CareActionId) => CareActionResult;
  runPropInteraction: (prop: StagePropDef) => CareActionResult;
  dismissCelebration: (outfitId: string) => void;
  dismissAllCelebrations: () => void;
};

const EMPTY_METRICS: AgnusProgressMetrics = {
  trackPercent: 0,
  biblePercent: 0,
  christmasPercent: 0,
  streakDays: 0,
};

const EMPTY_HABITAT_METRICS: HabitatProgressMetrics = {
  trackPercent: 0,
  biblePercent: 0,
  christmasPercent: 0,
  journeyPercent: 0,
};

const AgnusWardrobeContext = createContext<AgnusWardrobeContextValue>({
  outfits: AGNUS_OUTFITS,
  accessories: AGNUS_ACCESSORIES,
  scenarios: AGNUS_SCENARIOS,
  wardrobe: emptyAgnusWardrobe(),
  metrics: EMPTY_METRICS,
  habitatMetrics: EMPTY_HABITAT_METRICS,
  mascotName: AGNUS_NAME,
  equippedOutfit: getAgnusOutfit(DEFAULT_AGNUS_OUTFIT_ID),
  equippedAccessory: getAgnusAccessory(DEFAULT_AGNUS_ACCESSORY_ID),
  equippedScenario: getAgnusScenario(DEFAULT_AGNUS_SCENARIO_ID),
  unlockedIds: [DEFAULT_AGNUS_OUTFIT_ID],
  unlockedAccessoryIds: [DEFAULT_AGNUS_ACCESSORY_ID],
  unlockedScenarioIds: [DEFAULT_AGNUS_SCENARIO_ID],
  pendingCelebrations: [],
  nextTrackUnlock: null,
  nextBibleUnlock: null,
  nextChristmasUnlock: null,
  nextAnyUnlock: null,
  nextAccessoryUnlock: null,
  nextScenarioUnlock: null,
  careState: defaultAgnusCareState(),
  isUnlocked: (id) => id === DEFAULT_AGNUS_OUTFIT_ID,
  isAccessoryUnlocked: (id) => id === DEFAULT_AGNUS_ACCESSORY_ID,
  isScenarioUnlocked: (id) => id === DEFAULT_AGNUS_SCENARIO_ID,
  equipOutfit: () => false,
  equipAccessory: () => false,
  equipScenario: () => false,
  saveMascotName: () => false,
  changeRoom: () => {},
  runCareAction: () => performCareAction(defaultAgnusCareState(), "pet"),
  runPropInteraction: (prop) => performPropInteraction(defaultAgnusCareState(), prop),
  dismissCelebration: () => {},
  dismissAllCelebrations: () => {},
});

function readWardrobeStorage(): AgnusWardrobeState {
  try {
    return parseAgnusWardrobe(localStorage.getItem(AGNUS_WARDROBE_STORAGE_KEY));
  } catch {
    return emptyAgnusWardrobe();
  }
}

function writeWardrobeStorage(state: AgnusWardrobeState) {
  try {
    localStorage.setItem(AGNUS_WARDROBE_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(AGNUS_WARDROBE_CHANGED_EVENT));
  } catch {
    /* Storage may be unavailable in private contexts. */
  }
}

function readCareStorage(): AgnusCareState {
  try {
    const parsed = parseAgnusCareState(localStorage.getItem(AGNUS_CARE_STORAGE_KEY));
    return applyCareElapsedTime(parsed);
  } catch {
    return defaultAgnusCareState();
  }
}

function writeCareStorage(state: AgnusCareState) {
  try {
    localStorage.setItem(AGNUS_CARE_STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(AGNUS_CARE_CHANGED_EVENT));
  } catch {
    /* Storage may be unavailable in private contexts. */
  }
}

function patchProfileStorage(patch: Record<string, unknown>): boolean {
  try {
    const latestProfile = parseProfile(localStorage.getItem(PROFILE_STORAGE_KEY));
    const nextProfile = parseProfile(JSON.stringify({ ...latestProfile, ...patch }));
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(nextProfile));
    window.dispatchEvent(new Event(PROFILE_CHANGED_EVENT));
    return true;
  } catch {
    return false;
  }
}

export function AgnusWardrobeProvider({ children }: { children: ReactNode }) {
  const { profile } = useLocalProfile();
  const { progress: bibleProgress } = useBibleProgress();
  const { streak } = useStreak();

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedChristmas, setCompletedChristmas] = useState<string[]>([]);
  const [wardrobe, setWardrobe] = useState<AgnusWardrobeState>(() => emptyAgnusWardrobe());
  const [careState, setCareState] = useState<AgnusCareState>(() => defaultAgnusCareState());
  const [mounted, setMounted] = useState(false);

  // Sync learning track, Christmas journey, wardrobe, and care habitat from localStorage cleanly after mount (SSR-safe)
  useEffect(() => {
    const readExternalProgress = () => {
      try {
        setCompletedLessons(parseProgress(localStorage.getItem(PROGRESS_STORAGE_KEY)).completed);
        setCompletedChristmas(
          parseChristmasProgress(localStorage.getItem(CHRISTMAS_STORAGE_KEY)).completed,
        );
        setWardrobe(readWardrobeStorage());
        setCareState(readCareStorage());
      } catch {
        /* Keep safe defaults. */
      }
    };

    readExternalProgress();
    setMounted(true);

    const onStorage = (event: StorageEvent) => {
      if (
        event.key === null ||
        event.key === PROGRESS_STORAGE_KEY ||
        event.key === CHRISTMAS_STORAGE_KEY ||
        event.key === AGNUS_WARDROBE_STORAGE_KEY ||
        event.key === AGNUS_CARE_STORAGE_KEY
      ) {
        readExternalProgress();
      }
    };

    const onWardrobeEvent = () => setWardrobe(readWardrobeStorage());
    const onCareEvent = () => setCareState(readCareStorage());

    window.addEventListener("storage", onStorage);
    window.addEventListener(PROGRESS_CHANGED_EVENT, readExternalProgress);
    window.addEventListener(CHRISTMAS_CHANGED_EVENT, readExternalProgress);
    window.addEventListener(AGNUS_WARDROBE_CHANGED_EVENT, onWardrobeEvent);
    window.addEventListener(AGNUS_CARE_CHANGED_EVENT, onCareEvent);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(PROGRESS_CHANGED_EVENT, readExternalProgress);
      window.removeEventListener(CHRISTMAS_CHANGED_EVENT, readExternalProgress);
      window.removeEventListener(AGNUS_WARDROBE_CHANGED_EVENT, onWardrobeEvent);
      window.removeEventListener(AGNUS_CARE_CHANGED_EVENT, onCareEvent);
    };
  }, []);

  const streakDays = Math.max(streak.current, streak.best);
  const metrics = useMemo<AgnusProgressMetrics>(() => {
    const track = getLearningStats(completedLessons);
    const bible = getReadingStats(bibleProgress);
    const christmasPercent = christmasProgressPercent(completedChristmas);
    return {
      trackPercent: track.percent,
      biblePercent: bible.percent,
      christmasPercent,
      streakDays,
    };
  }, [completedLessons, bibleProgress, completedChristmas, streakDays]);

  const habitatMetrics = useMemo<HabitatProgressMetrics>(
    () => ({
      trackPercent: metrics.trackPercent,
      biblePercent: metrics.biblePercent,
      christmasPercent: metrics.christmasPercent,
      journeyPercent: computeJourneyPercent(metrics.trackPercent, metrics.biblePercent),
    }),
    [metrics],
  );

  // Permanently record newly unlocked outfits whenever progress crosses a requirement threshold
  useEffect(() => {
    if (!mounted) return;
    setWardrobe((current) => {
      const result = evaluateAgnusWardrobe(current, metrics);
      if (!result.changed) return current;
      writeWardrobeStorage(result.state);
      return result.state;
    });
  }, [mounted, metrics]);

  const unlockedAccessoryIds = useMemo(
    () => getUnlockedAccessoryIds(habitatMetrics),
    [habitatMetrics],
  );
  const unlockedScenarioIds = useMemo(
    () => getUnlockedScenarioIds(habitatMetrics),
    [habitatMetrics],
  );

  const isUnlocked = useCallback(
    (outfitId: string) => wardrobe.unlockedIds.includes(outfitId),
    [wardrobe.unlockedIds],
  );
  const isAccessoryUnlocked = useCallback(
    (accessoryId: string) => unlockedAccessoryIds.includes(accessoryId),
    [unlockedAccessoryIds],
  );
  const isScenarioUnlocked = useCallback(
    (scenarioId: string) => unlockedScenarioIds.includes(scenarioId),
    [unlockedScenarioIds],
  );

  const equippedOutfit = useMemo(() => {
    const candidate = profile.mascotOutfit;
    if (wardrobe.unlockedIds.includes(candidate)) {
      return getAgnusOutfit(candidate);
    }
    return getAgnusOutfit(DEFAULT_AGNUS_OUTFIT_ID);
  }, [profile.mascotOutfit, wardrobe.unlockedIds]);

  const equippedAccessory = useMemo(() => {
    const candidate = profile.mascotAccessory;
    if (unlockedAccessoryIds.includes(candidate)) {
      return getAgnusAccessory(candidate);
    }
    return getAgnusAccessory(DEFAULT_AGNUS_ACCESSORY_ID);
  }, [profile.mascotAccessory, unlockedAccessoryIds]);

  const equippedScenario = useMemo(() => {
    const candidate = profile.mascotScenario;
    if (unlockedScenarioIds.includes(candidate)) {
      return getAgnusScenario(candidate);
    }
    return getAgnusScenario(DEFAULT_AGNUS_SCENARIO_ID);
  }, [profile.mascotScenario, unlockedScenarioIds]);

  const mascotName = profile.mascotName || AGNUS_NAME;

  const equipOutfit = useCallback(
    (outfitId: string) => {
      if (!wardrobe.unlockedIds.includes(outfitId)) return false;
      return patchProfileStorage({ mascotOutfit: outfitId });
    },
    [wardrobe.unlockedIds],
  );

  const equipAccessory = useCallback(
    (accessoryId: string) => {
      if (!unlockedAccessoryIds.includes(accessoryId)) return false;
      return patchProfileStorage({ mascotAccessory: accessoryId });
    },
    [unlockedAccessoryIds],
  );

  const equipScenario = useCallback(
    (scenarioId: string) => {
      if (!unlockedScenarioIds.includes(scenarioId)) return false;
      return patchProfileStorage({ mascotScenario: scenarioId });
    },
    [unlockedScenarioIds],
  );

  const saveMascotName = useCallback(
    (rawName: string) => patchProfileStorage({ mascotName: sanitizeMascotName(rawName) }),
    [],
  );

  const changeRoom = useCallback((roomId: AgnusRoomId) => {
    setCareState((current) => {
      const next: AgnusCareState = {
        ...current,
        currentRoom: roomId,
        lastUpdatedAt: new Date().toISOString(),
      };
      writeCareStorage(next);
      return next;
    });
  }, []);

  const runCareAction = useCallback(
    (action: CareActionId) => {
      const result = performCareAction(careState, action);
      setCareState(result.state);
      writeCareStorage(result.state);
      return result;
    },
    [careState],
  );

  const runPropInteraction = useCallback(
    (prop: StagePropDef) => {
      const result = performPropInteraction(careState, prop);
      setCareState(result.state);
      writeCareStorage(result.state);
      return result;
    },
    [careState],
  );

  const dismissCelebration = useCallback((outfitId: string) => {
    setWardrobe((current) => {
      const next = acknowledgeAgnusCelebrations(current, [outfitId]);
      if (next !== current) writeWardrobeStorage(next);
      return next;
    });
  }, []);

  const dismissAllCelebrations = useCallback(() => {
    setWardrobe((current) => {
      const pending = getPendingCelebrationOutfits(current).map((item) => item.id);
      if (pending.length === 0) return current;
      const next = acknowledgeAgnusCelebrations(current, pending);
      writeWardrobeStorage(next);
      return next;
    });
  }, []);

  const pendingCelebrations = useMemo(
    () => (mounted ? getPendingCelebrationOutfits(wardrobe) : []),
    [mounted, wardrobe],
  );

  const nextTrackUnlock = useMemo(
    () => getNextUnlockableOutfit(wardrobe, metrics, "track-percent"),
    [wardrobe, metrics],
  );

  const nextBibleUnlock = useMemo(
    () => getNextUnlockableOutfit(wardrobe, metrics, "bible-percent"),
    [wardrobe, metrics],
  );

  const nextChristmasUnlock = useMemo(
    () => getNextUnlockableOutfit(wardrobe, metrics, "christmas-percent"),
    [wardrobe, metrics],
  );

  const nextAnyUnlock = useMemo(
    () => getNextUnlockableOutfit(wardrobe, metrics),
    [wardrobe, metrics],
  );

  const nextAccessoryUnlock = useMemo(
    () => getNextLockedReward(AGNUS_ACCESSORIES, unlockedAccessoryIds, habitatMetrics),
    [unlockedAccessoryIds, habitatMetrics],
  );

  const nextScenarioUnlock = useMemo(
    () => getNextLockedReward(AGNUS_SCENARIOS, unlockedScenarioIds, habitatMetrics),
    [unlockedScenarioIds, habitatMetrics],
  );

  return (
    <AgnusWardrobeContext.Provider
      value={{
        outfits: AGNUS_OUTFITS,
        accessories: AGNUS_ACCESSORIES,
        scenarios: AGNUS_SCENARIOS,
        wardrobe,
        metrics,
        habitatMetrics,
        mascotName,
        equippedOutfit,
        equippedAccessory,
        equippedScenario,
        unlockedIds: wardrobe.unlockedIds,
        unlockedAccessoryIds,
        unlockedScenarioIds,
        pendingCelebrations,
        nextTrackUnlock,
        nextBibleUnlock,
        nextChristmasUnlock,
        nextAnyUnlock,
        nextAccessoryUnlock,
        nextScenarioUnlock,
        careState,
        isUnlocked,
        isAccessoryUnlocked,
        isScenarioUnlocked,
        equipOutfit,
        equipAccessory,
        equipScenario,
        saveMascotName,
        changeRoom,
        runCareAction,
        runPropInteraction,
        dismissCelebration,
        dismissAllCelebrations,
      }}
    >
      {children}
    </AgnusWardrobeContext.Provider>
  );
}

export function useAgnusWardrobe() {
  return useContext(AgnusWardrobeContext);
}
