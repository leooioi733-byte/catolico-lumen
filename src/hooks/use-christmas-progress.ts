import { useCallback, useEffect, useState } from "react";
import {
  CHRISTMAS_CHANGED_EVENT,
  CHRISTMAS_CHAPTERS,
  CHRISTMAS_STORAGE_KEY,
  applyChristmasCompletion,
  christmasProgressPercent,
  emptyChristmasProgress,
  nextChristmasChapter,
  parseChristmasProgress,
  type ChristmasProgress,
} from "@/lib/christmas";

function readChristmasStorage(): ChristmasProgress {
  try {
    return parseChristmasProgress(localStorage.getItem(CHRISTMAS_STORAGE_KEY));
  } catch {
    return emptyChristmasProgress();
  }
}

export function useChristmasProgress() {
  const [progress, setProgress] = useState<ChristmasProgress>(emptyChristmasProgress);
  const [ready, setReady] = useState(false);

  const sync = useCallback(() => {
    setProgress(readChristmasStorage());
  }, []);

  useEffect(() => {
    sync();
    setReady(true);

    const onStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === CHRISTMAS_STORAGE_KEY) sync();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(CHRISTMAS_CHANGED_EVENT, sync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(CHRISTMAS_CHANGED_EVENT, sync);
    };
  }, [sync]);

  const completeChapter = useCallback((chapterId: string) => {
    const current = readChristmasStorage();
    const next = applyChristmasCompletion(current, chapterId);
    try {
      localStorage.setItem(CHRISTMAS_STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(CHRISTMAS_CHANGED_EVENT));
    } catch {
      // Progress remains active in current state even if storage is restricted
    }
    setProgress(next);
  }, []);

  const completedCount = progress.completed.length;
  const totalCount = CHRISTMAS_CHAPTERS.length;
  const percent = christmasProgressPercent(progress.completed);
  const nextChapter = nextChristmasChapter(progress.completed);

  return {
    progress,
    ready,
    completedCount,
    totalCount,
    percent,
    nextChapter,
    isJourneyComplete: completedCount >= totalCount,
    completeChapter,
  };
}
