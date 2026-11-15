import type { LucideIcon } from "lucide-react";

export type MuseumCategory =
  | "devocoes"
  | "lugares"
  | "arte"
  | "santos"
  | "papas"
  | "concilios"
  | "igrejas"
  | "objetos-liturgicos"
  | "vestimentas"
  | "simbolos"
  | "reliquias"
  | "ordens"
  | "arte-sacra";

export type MuseumIllustrationId =
  | "reliquary"
  | "sanctuary-crown"
  | "grotto"
  | "tilma"
  | "basilica-dome"
  | "good-shepherd"
  | "pieta"
  | "saint-francis"
  | "saint-therese"
  | "saint-aquinas"
  | "pope-keys"
  | "pope-gregory"
  | "pope-jp2"
  | "council-nicea"
  | "council-trent"
  | "council-vatican2"
  | "church-lateran"
  | "church-notre-dame"
  | "church-san-marco"
  | "chalice-paten"
  | "monstrance"
  | "thurible"
  | "chasuble-stole"
  | "mitre-crosier"
  | "alb-cincture"
  | "chi-rho"
  | "ichthys"
  | "alpha-omega"
  | "shroud-turin"
  | "true-cross"
  | "cathedra-peter"
  | "order-benedictine"
  | "order-franciscan"
  | "order-jesuit"
  | "sistine-ceiling"
  | "pantocrator"
  | "last-supper";

export interface MuseumExhibit {
  id: string;
  title: string;
  category: MuseumCategory;
  date: string;
  year: number;
  location: string;
  summary: string;
  paragraphs: string[];
  context: string;
  illustration?: MuseumIllustrationId;
  image: {
    url: string;
    alt: string;
    caption: string;
    author: string;
    license: string;
    sourceUrl: string;
    licenseUrl: string;
  };
  sources: { title: string; url: string }[];
}

export interface MuseumCategoryOption {
  id: MuseumCategory | "todos";
  label: string;
  icon: LucideIcon;
}
