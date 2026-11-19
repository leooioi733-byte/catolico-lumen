export type BiblicalMapId = "old" | "new";

export interface MapLandmark {
  id: string;
  label: string;
  region: string;
  description: string;
  xPercent: number;
  yPercent: number;
}

export interface BiblicalMapEntry {
  id: BiblicalMapId;
  buttonLabel: string;
  buttonSubtitle: string;
  badge: string;
  title: string;
  period: string;
  summary: string;
  details: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  landmarks: readonly MapLandmark[];
}

export const OLD_TESTAMENT_MAP: BiblicalMapEntry = {
  id: "old",
  buttonLabel: "Antigo Testamento",
  buttonSubtitle: "1º mapa · Origens, Êxodo e Reino",
  badge: "1º Mapa · Antigo Testamento",
  title: "Mundo do Antigo Testamento",
  period: "Patriarcas, Êxodo, Monarquia e Exílio",
  summary: "Do Egito e Monte Sinai até Canaã, Assíria e Babilônia ao longo do Crescente Fértil.",
  details:
    "Acompanha os principais cenários da história de Israel: a saída do Egito pelo Mar Vermelho, a caminhada pelo Sinai rumo a Canaã e as grandes potências da Mesopotâmia entre os rios Tigre e Eufrates.",
  image: "/assets/aistudio/Polish_20261118_215503778_0d8fa0d8.jpg",
  width: 720,
  height: 500,
  alt: "Mapa colorido do Mundo do Antigo Testamento mostrando Egito, Gósen, Monte Sinai, Canaã, Jerusalém, Síria, Harã, Assíria, Nínive, Mesopotâmia, Babilônia, Ur, Elão, Mar Mediterrâneo, Mar Vermelho e Golfo Pérsico.",
  landmarks: [
    {
      id: "jerusalem-at",
      label: "Jerusalém (Salém)",
      region: "Canaã",
      description:
        "Cidade em Canaã ligada a Melquisedeque, conquistada pelo rei Davi e sede do Templo construído por Salomão.",
      xPercent: 42.5,
      yPercent: 66.2,
    },
    {
      id: "egito-gosen",
      label: "Egito e Gósen",
      region: "Vale do Nilo",
      description:
        "Região onde os filhos de Jacó se estabeleceram e de onde Moisés conduziu o povo na travessia do Êxodo.",
      xPercent: 31.2,
      yPercent: 82,
    },
    {
      id: "monte-sinai",
      label: "Monte Sinai (Horebe)",
      region: "Península do Sinai",
      description:
        "Monte sagrado onde Deus selou a Aliança com Israel e entregou as Tábuas da Lei a Moisés.",
      xPercent: 39.8,
      yPercent: 88.5,
    },
    {
      id: "hara",
      label: "Harã (Padã-Arã)",
      region: "Norte da Mesopotâmia",
      description:
        "Parada marcante na jornada de Abraão e terra de onde vieram Rebeca, Raquel e Lia.",
      xPercent: 50.2,
      yPercent: 36.2,
    },
    {
      id: "babilonia",
      label: "Babilônia e Babel",
      region: "Mesopotâmia",
      description:
        "Margens do rio Eufrates ligadas aos relatos de Babel e ao Exílio do povo de Judá.",
      xPercent: 72.2,
      yPercent: 53,
    },
    {
      id: "ninive-assiria",
      label: "Nínive e Assíria",
      region: "Rio Tigre",
      description:
        "Capital assíria à beira do rio Tigre para onde o profeta Jonas foi enviado a pregar a conversão.",
      xPercent: 63.8,
      yPercent: 36.8,
    },
    {
      id: "ur",
      label: "Ur (Mesopotâmia)",
      region: "Sul da Babilônia",
      description:
        "Antiga cidade próxima ao Golfo Pérsico tradicionalmente associada às origens da família de Abraão.",
      xPercent: 80.5,
      yPercent: 60.2,
    },
  ],
};

export const NEW_TESTAMENT_MAP: BiblicalMapEntry = {
  id: "new",
  buttonLabel: "Novo Testamento",
  buttonSubtitle: "2º mapa · Evangelhos e Atos",
  badge: "2º Mapa · Novo Testamento",
  title: "Mundo do Novo Testamento",
  period: "Vida de Jesus e Missões Apostólicas",
  summary:
    "Fronteiras do Império Romano ao redor do Mar Mediterrâneo, da Judeia e Antioquia até Grécia, Roma e Espanha.",
  details:
    "Apresenta o cenário geográfico dos Evangelhos, de Atos dos Apóstolos e das Cartas Apostólicas, unindo a Judeia, a Síria, a Ásia Menor, a Macedônia, a Grécia e a capital Roma.",
  image: "/assets/aistudio/Polish_20261118_215739376_586ba62b.jpg",
  width: 720,
  height: 559,
  alt: "Mapa colorido do Mundo do Novo Testamento destacando o Império Romano, Judeia, Jerusalém, Antioquia, Tarso, Éfeso, Ásia Menor, Grécia, Atenas, Corinto, Roma, Egito, Alexandria, Cartago e Espanha.",
  landmarks: [
    {
      id: "jerusalem-nt",
      label: "Judeia e Jerusalém",
      region: "Terra Santa",
      description:
        "Coração dos Evangelhos e de Pentecostes, onde Jesus consumou sua Paixão, Morte e Ressurreição.",
      xPercent: 82.6,
      yPercent: 67.2,
    },
    {
      id: "antioquia-tarso",
      label: "Antioquia e Tarso",
      region: "Síria e Cilícia",
      description:
        "Cidade natal de São Paulo (Tarso) e comunidade de Antioquia, onde os discípulos foram chamados cristãos pela primeira vez.",
      xPercent: 81.2,
      yPercent: 54,
    },
    {
      id: "efeso-asia",
      label: "Éfeso e Ásia Menor",
      region: "Anatólia",
      description:
        "Grande polo missionário de São Paulo e de São João, reunindo comunidades citadas nas Cartas e no Apocalipse.",
      xPercent: 66.2,
      yPercent: 53.5,
    },
    {
      id: "grecia",
      label: "Atenas e Corinto",
      region: "Grécia e Macedônia",
      description:
        "Cidades evangelizadas na segunda viagem missionária de Paulo, destinatárias de importantes cartas às primeiras Igrejas.",
      xPercent: 58.6,
      yPercent: 57.5,
    },
    {
      id: "roma",
      label: "Roma",
      region: "Itália",
      description:
        "Capital do Império Romano, onde São Pedro e São Paulo anunciaram o Evangelho e deram o testemunho do martírio.",
      xPercent: 38.6,
      yPercent: 47.2,
    },
    {
      id: "alexandria",
      label: "Alexandria",
      region: "Egito",
      description:
        "Importante cidade mediterrânea no delta do Nilo, ligada à tradição cristã primitiva de São Marcos.",
      xPercent: 74.8,
      yPercent: 74.5,
    },
    {
      id: "espanha",
      label: "Espanha",
      region: "Ocidente Romano",
      description:
        "Região mais ocidental do Império Romano citada por São Paulo em Romanos 15 como horizonte missionário.",
      xPercent: 10.5,
      yPercent: 46.5,
    },
  ],
};

export const BIBLICAL_MAPS: readonly [BiblicalMapEntry, BiblicalMapEntry] = [
  OLD_TESTAMENT_MAP,
  NEW_TESTAMENT_MAP,
];

export function getBiblicalMap(id: BiblicalMapId): BiblicalMapEntry {
  return id === "new" ? NEW_TESTAMENT_MAP : OLD_TESTAMENT_MAP;
}
