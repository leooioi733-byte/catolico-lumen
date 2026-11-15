import { describe, expect, it } from "vitest";
import { CATECHESIS_EXPANSION_UNITS } from "@/lib/lesson-catechesis";
import { PRAYERS, getPrayer } from "@/lib/prayers";

describe("novos conteúdos de catequese", () => {
  it("inclui as cinco novas unidades pedidas com exemplos, ilustrações e atividades interativas", () => {
    expect(CATECHESIS_EXPANSION_UNITS.map((u) => u.id)).toEqual([
      "dez-mandamentos",
      "sete-sacramentos",
      "cinco-mandamentos-igreja",
      "sete-dons-espirito",
      "sete-pecados-capitais",
    ]);

    for (const unit of CATECHESIS_EXPANSION_UNITS) {
      for (const lesson of unit.lessons) {
        expect(lesson.activities?.length).toBeGreaterThanOrEqual(1);
        for (const teaching of lesson.teachings) {
          expect(teaching.example?.trim().length).toBeGreaterThan(10);
          expect(teaching.illustration).toBeTruthy();
        }
      }
    }
  });
});

describe("orações ampliadas (Ave José e Latim)", () => {
  it("contém a oração Ave José com explicação", () => {
    const aveJose = getPrayer("ave-jose");
    expect(aveJose).toBeDefined();
    expect(aveJose?.title).toBe("Ave José");
    expect(aveJose?.text).toContain("homem justo");
    expect(aveJose?.explanation?.length).toBeGreaterThan(30);
  });

  it("contém orações em latim com tradução para português e explicação", () => {
    const latin = PRAYERS.filter((p) => p.category === "latin");
    expect(latin.length).toBeGreaterThanOrEqual(8);
    for (const prayer of latin) {
      expect(prayer.latinText?.trim().length).toBeGreaterThan(10);
      expect(prayer.text.trim().length).toBeGreaterThan(10);
      expect(prayer.explanation?.trim().length).toBeGreaterThan(30);
    }
  });
});
