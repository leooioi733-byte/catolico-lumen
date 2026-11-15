import type { LessonActivity, Question } from "@/lib/lesson-types";

export type ChristmasIllustrationId =
  | "profecias"
  | "anunciacao"
  | "visitacao"
  | "belem"
  | "presepio"
  | "pastores"
  | "reis-magos"
  | "encarnacao"
  | "significado-natal"
  | "tradicoes";

export type ChristmasReference = {
  label: string;
  passage: string;
  bookSlug?: string;
  chapter?: number;
};

export type ChristmasChapter = {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  illustration: ChristmasIllustrationId;
  illustrationCaption: string;
  biblicalContext: string;
  explanation: readonly [string, string];
  curiosity: string;
  references: readonly ChristmasReference[];
  activity: LessonActivity;
  questions: readonly Question[];
};

export const CHRISTMAS_STORAGE_KEY = "lumen-christmas-progress";
export const CHRISTMAS_CHANGED_EVENT = "lumen-christmas-changed";

export type ChristmasProgress = {
  completed: string[];
  lastChapterId: string | null;
};

export const CHRISTMAS_CHAPTERS: readonly ChristmasChapter[] = [
  {
    id: "anuncio-messias",
    order: 1,
    title: "O anúncio do nascimento de Jesus",
    subtitle: "As profecias e a esperança de Israel pelo Emanuel",
    illustration: "profecias",
    illustrationCaption: "Estrela de Belém anunciando o cumprimento das antigas profecias",
    biblicalContext:
      "Séculos antes de Belém, o povo de Israel vivia momentos de exílio e provação, sustentado pela promessa de Deus de enviar um Salvador da linhagem de Davi. Os profetas Isaías e Miqueias anunciaram não apenas o sinal de uma virgem que daria à luz o Emanuel — 'Deus conosco' —, mas até a pequena cidade onde o Messias nasceria.",
    explanation: [
      "O Natal não começou de repente na noite de Belém: ele foi preparado por Deus ao longo de toda a História da Salvação. Desde a promessa feita no Gênesis até as vozes dos profetas, Deus educou o coração humano para esperar um Salvador que traria justiça, paz e reconciliação definitiva.",
      "Na tradição católica, o Tempo do Advento revive essa santa expectativa. Olhar para as profecias nos ensina que Deus é fiel à Sua palavra e age no tempo certo, preparando os acontecimentos com sabedoria e amor.",
    ],
    curiosity:
      "O nome 'Emanuel', anunciado pelo profeta Isaías (Is 7,14), vem do hebraico 'Immanu El' e significa literalmente 'Deus conosco'. O Evangelho de São Mateus retoma essa profecia logo no primeiro capítulo para mostrar que Jesus é a realização plena dessa promessa.",
    references: [
      {
        label: "Isaías 7,14",
        passage: "A virgem conceberá e dará à luz um filho, e lhe porá o nome de Emanuel.",
        bookSlug: "isaias",
        chapter: 7,
      },
      {
        label: "Isaías 9,5",
        passage:
          "Um menino nos nasceu, um filho nos foi dado... Conselheiro admirável, Príncipe da paz.",
        bookSlug: "isaias",
        chapter: 9,
      },
      {
        label: "Miqueias 5,1",
        passage: "De ti, Belém Efrata, sairá aquele que há de governar Israel.",
        bookSlug: "miqueias",
        chapter: 5,
      },
      {
        label: "CIC 522",
        passage:
          "A vinda do Filho de Deus à terra é um acontecimento tão imenso que Deus quis prepará-lo durante séculos.",
      },
    ],
    activity: {
      type: "match",
      title: "Associe cada profecia ao seu anúncio",
      instruction: "Ligue o livro profético ao detalhe que ele revelou sobre o Messias.",
      pairs: [
        { id: "p1", left: "Isaías 7,14", right: "O Salvador se chamará Emanuel (Deus conosco)" },
        { id: "p2", left: "Miqueias 5,1", right: "O Messias nascerá na pequena Belém" },
        { id: "p3", left: "Isaías 9,5", right: "O Menino será chamado Príncipe da Paz" },
      ],
      explanation:
        "Isaías anunciou o Emanuel e o Príncipe da Paz, enquanto Miqueias indicou Belém como o lugar do nascimento do Messias.",
      source: "Is 7,14; Is 9,5; Mq 5,1; CIC 522",
    },
    questions: [
      {
        prompt: "O que significa o título profético 'Emanuel', dado ao Salvador prometido?",
        options: ["Rei dos exércitos", "Deus conosco", "Sacerdote eterno"],
        answer: 1,
        explanation:
          "Emanuel significa 'Deus conosco' (Is 7,14; Mt 1,23), revelando que em Jesus Deus veio habitar no meio do seu povo.",
      },
      {
        prompt: "Qual profeta indicou séculos antes que o Messias nasceria em Belém?",
        options: ["Miqueias", "Jonas", "Amós"],
        answer: 0,
        explanation:
          "Em Miqueias 5,1, Deus revela que de Belém Efrata — pequena entre os clãs de Judá — sairia o futuro governador de Israel.",
      },
    ],
  },
  {
    id: "anunciacao-maria",
    order: 2,
    title: "A Anunciação do Anjo Gabriel a Maria",
    subtitle: "O 'Sim' confiante que abriu caminho à Encarnação",
    illustration: "anunciacao",
    illustrationCaption: "O Arcanjo Gabriel visita Maria em Nazaré levando a mensagem de Deus",
    biblicalContext:
      "Em Nazaré, uma pequena aldeia da Galileia, o Arcanjo Gabriel foi enviado por Deus a uma jovem virgem chamada Maria, prometida em casamento a José, da casa de Davi. O anjo a saudou de modo singular: 'Alegra-te, cheia de graça, o Senhor está contigo!' (Lc 1,28).",
    explanation: [
      "Ao ouvir que conceberia pelo poder do Espírito Santo e daria à luz o Filho do Altíssimo, Maria perguntou com humildade como isso se daria, e depois pronunciou seu 'Fiat' — 'Faça-se em mim segundo a tua palavra' (Lc 1,38). Nesse instante, por obra do Espírito Santo, o Filho de Deus se encarnou em seu seio.",
      "A Igreja ensina que Deus não impôs sua vontade à força: Ele pediu a livre colaboração de Maria. Por isso, Santo Irineu chamou Maria de 'Nova Eva', pois onde Eva desobedeceu, Maria acolheu com fé o plano salvífico de Deus.",
    ],
    curiosity:
      "A oração do 'Angelus' (rezada tradicionalmente às 6h, 12h e 18h) recorda exatamente o diálogo entre o Arcanjo Gabriel e Maria na Anunciação, proclamando: 'E o Verbo se fez carne e habitou entre nós'.",
    references: [
      {
        label: "Lucas 1,26-38",
        passage: "Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra.",
        bookSlug: "lucas",
        chapter: 1,
      },
      {
        label: "CIC 484-494",
        passage:
          "A Anunciação a Maria inaugura a 'plenitude dos tempos', e Maria responde com a obediência da fé.",
      },
    ],
    activity: {
      type: "match",
      title: "Momentos da Anunciação",
      instruction: "Conecte cada palavra do Evangelho de Lucas ao seu significado.",
      pairs: [
        {
          id: "a1",
          left: "Cheia de graça",
          right: "Saudação única que revela a santidade de Maria",
        },
        {
          id: "a2",
          left: "O Espírito Santo virá sobre ti",
          right: "Jesus é concebido pela ação divina, não humana",
        },
        { id: "a3", left: "Faça-se em mim", right: "O 'Sim' livre e confiante de Maria a Deus" },
      ],
      explanation:
        "A Anunciação une a iniciativa amorosa de Deus, a ação do Espírito Santo e o consentimento livre da fé de Maria.",
      source: "Lc 1,26-38; CIC 484-494",
    },
    questions: [
      {
        prompt: "Qual foi o anjo enviado por Deus a Maria em Nazaré?",
        options: ["Arcanjo Miguel", "Arcanjo Rafael", "Arcanjo Gabriel"],
        answer: 2,
        explanation:
          "São Lucas narra que Deus enviou o anjo Gabriel à cidade de Nazaré para anunciar a concepção de Jesus (Lc 1,26).",
      },
      {
        prompt: "O que expressa o 'Faça-se em mim segundo a tua palavra' de Maria?",
        options: [
          "Dúvida diante do pedido de Deus",
          "Obediência da fé e entrega livre ao plano de Deus",
          "Pedido de adiamento da promessa",
        ],
        answer: 1,
        explanation:
          "Pelo seu 'Sim' (Fiat), Maria acolheu plenamente a vontade de Deus, tornando-se Mãe do Salvador e modelo para todos os cristãos.",
      },
    ],
  },
  {
    id: "visita-isabel",
    order: 3,
    title: "A visita de Maria a Isabel",
    subtitle: "O encontro da caridade, da alegria e do Magnificat",
    illustration: "visitacao",
    illustrationCaption: "Maria e Isabel se encontram na Judeia em ação de graças a Deus",
    biblicalContext:
      "Logo após a Anunciação, sabendo pelo anjo que sua parenta Isabel já estava no sexto mês de gestação de João Batista, Maria partiu 'às pressas' para a região montanhosa da Judeia. Ao ouvir a saudação de Maria, a criança saltou de alegria no ventre de Isabel, que ficou cheia do Espírito Santo.",
    explanation: [
      "A Visitação mostra que quem traz Jesus no coração não se fecha em si mesmo, mas sai ao encontro para servir. Maria permaneceu cerca de três meses ajudando sua prima idosa, revelando uma fé traduzida em caridade concreta.",
      "Em resposta à bênção de Isabel — 'Bendita és tu entre as mulheres e bendito é o fruto do teu ventre' —, Maria entoou o Magnificat, um cântico de louvor onde reconhece que Deus olha para os humildes e cumpre suas promessas.",
    ],
    curiosity:
      "As palavras de Isabel ('Bendita és tu entre as mulheres e bendito é o fruto do teu ventre') formam, junto com a saudação do Anjo Gabriel, a primeira metade da oração da Ave-Maria que rezamos todos os dias.",
    references: [
      {
        label: "Lucas 1,39-56",
        passage: "A minha alma engrandece o Senhor, e o meu espírito exulta em Deus, meu Salvador.",
        bookSlug: "lucas",
        chapter: 1,
      },
      {
        label: "CIC 717",
        passage:
          "João Batista, cheio do Espírito Santo desde o seio materno, saúda a vinda do Messias por meio de Maria.",
      },
    ],
    activity: {
      type: "classify",
      title: "Quem disse ou viveu na Visitação?",
      instruction: "Classifique cada atitude entre Maria e Santa Isabel.",
      categories: ["Maria", "Santa Isabel"],
      items: [
        { id: "v1", text: "Partiu às pressas para servir nas montanhas da Judeia", category: 0 },
        {
          id: "v2",
          text: "Exclamou: 'Donde me vem a honra de que venha a mim a mãe do meu Senhor?'",
          category: 1,
        },
        { id: "v3", text: "Proclamou o cântico do Magnificat em louvor a Deus", category: 0 },
        {
          id: "v4",
          text: "Sentiu seu filho João exultar no ventre ao ouvir a saudação",
          category: 1,
        },
      ],
      explanation:
        "Maria serve com alegria e louva a Deus no Magnificat; Isabel, iluminada pelo Espírito Santo, reconhece Maria como a Mãe do Senhor.",
      source: "Lc 1,39-56; CIC 717",
    },
    questions: [
      {
        prompt: "O que aconteceu quando Maria saudou Isabel?",
        options: [
          "Isabel estava dormindo e não ouviu",
          "João Batista saltou de alegria no ventre de Isabel",
          "As duas viajaram imediatamente para o Egito",
        ],
        answer: 1,
        explanation:
          "Ao som da saudação de Maria, João Batista exultou no seio de Isabel, que reconheceu a presença do Senhor (Lc 1,41-44).",
      },
      {
        prompt: "Qual famoso cântico bíblico Maria entoou na casa de Isabel?",
        options: ["Magnificat", "Salmo 50", "Te Deum"],
        answer: 0,
        explanation:
          "O Magnificat ('A minha alma engrandece o Senhor', Lc 1,46-55) é rezado todos os dias na liturgia da Igreja durante as Vésperas.",
      },
    ],
  },
  {
    id: "viagem-belem",
    order: 4,
    title: "A viagem de Maria e José a Belém",
    subtitle: "Confiança na Providência ao longo do caminho até a Cidade de Davi",
    illustration: "belem",
    illustrationCaption: "Maria e José caminhando rumo às colinas de Belém sob a luz da estrela",
    biblicalContext:
      "Nos dias próximos ao parto, o imperador César Augusto decretou um recenseamento em todo o império. Como São José era da casa e da família de Davi, subiu com Maria, sua esposa grávida, de Nazaré, na Galileia, até Belém, na Judeia — uma jornada de cerca de 140 quilômetros por caminhos montanhosos.",
    explanation: [
      "Aos olhos do mundo, a viagem parecia apenas uma exigência política de Roma. Mas pela fé, vemos a Providência Divina conduzindo os acontecimentos para cumprir a profecia de Miqueias: o Messias devia nascer em Belém, cujo nome significa 'Casa do Pão'.",
      "Ao chegarem, a cidade estava cheia por causa do alistamento e não havia lugar para eles na hospedaria. Mesmo diante do cansaço e da falta de acolhida, José e Maria permaneceram unidos em paz, confiando que Deus cuidaria do Menino.",
    ],
    curiosity:
      "Em hebraico, Belém ('Beit Lechem') significa literalmente 'Casa do Pão'. Os Padres da Igreja admiravam essa coincidência providencial: Aquele que diria 'Eu sou o Pão vivo descido do céu' quis nascer justamente na Casa do Pão e ser colocado em uma manjedoura (onde se coloca alimento).",
    references: [
      {
        label: "Lucas 2,1-5",
        passage:
          "José também subiu da Galileia, da cidade de Nazaré, para a Judeia, à cidade de Davi, chamada Belém.",
        bookSlug: "lucas",
        chapter: 2,
      },
      {
        label: "Mateus 1,18-25",
        passage: "José acolheu Maria com justiça e fé, dando ao Menino o nome de Jesus.",
        bookSlug: "mateus",
        chapter: 1,
      },
    ],
    activity: {
      type: "match",
      title: "Sentidos do caminho até Belém",
      instruction: "Associe cada elemento da jornada ao seu sentido espiritual e histórico.",
      pairs: [
        {
          id: "b1",
          left: "Recenseamento de Augusto",
          right: "Fato histórico que levou o casal a Belém",
        },
        {
          id: "b2",
          left: "Belém (Beit Lechem)",
          right: "Significa 'Casa do Pão', cidade do rei Davi",
        },
        { id: "b3", left: "São José", right: "Guardião fiel que protegeu Maria e o Menino" },
      ],
      explanation:
        "Deus se valeu até de um decreto imperial para cumprir Sua promessa em Belém, contando com a fidelidade de José e Maria.",
      source: "Lc 2,1-5; Mt 1,18-25",
    },
    questions: [
      {
        prompt: "Por que José e Maria viajaram de Nazaré até Belém?",
        options: [
          "Para visitar parentes em Jerusalém",
          "Por causa do recenseamento decretado por César Augusto",
          "Para fugir de uma tempestade na Galileia",
        ],
        answer: 1,
        explanation:
          "São Lucas explica que José subiu para se alistar em Belém, cidade de Davi, cumprindo o decreto imperial (Lc 2,1-5).",
      },
      {
        prompt: "O que significa literalmente o nome 'Belém'?",
        options: ["Cidade das Flores", "Monte da Aliança", "Casa do Pão"],
        answer: 2,
        explanation:
          "Belém significa 'Casa do Pão', um sinal profundo ligado a Jesus, o Pão da Vida dado ao mundo.",
      },
    ],
  },
  {
    id: "nascimento-jesus",
    order: 5,
    title: "O nascimento de Jesus",
    subtitle: "A Noite Santa na manjedoura de Belém",
    illustration: "presepio",
    illustrationCaption:
      "Presépio com Maria, José e o Menino Jesus na manjedoura sob a Estrela de Belém",
    biblicalContext:
      "Enquanto estavam em Belém, completaram-se os dias para o parto. Maria 'deu à luz o seu filho primogênito, envolveu-o em faixas e reclinou-o numa manjedoura, porque não havia lugar para eles na hospedaria' (Lc 2,7).",
    explanation: [
      "O Filho eterno de Deus não nasceu em um palácio cercado de poder, mas na pobreza e no silêncio de uma gruta que servia de abrigo aos animais. A manjedoura torna-se o primeiro trono do Rei da Paz, mostrando que a grandeza de Deus se revela no amor humilde.",
      "Ao contemplar Maria e José junto ao Menino Jesus, o cristão descobre que ninguém é pequeno demais para receber a Deus. Na noite de Natal, a luz vence as trevas e a humanidade ganha uma nova esperança.",
    ],
    curiosity:
      "Na tradição antiga, desde o século II (registrada por São Justino Mártir e conservada na Basílica da Natividade em Belém), sabe-se que Jesus nasceu em uma gruta escavada na rocha onde os moradores abrigavam animais.",
    references: [
      {
        label: "Lucas 2,6-7",
        passage:
          "Deu à luz o seu filho primogênito, envolveu-o em faixas e deitou-o numa manjedoura.",
        bookSlug: "lucas",
        chapter: 2,
      },
      {
        label: "CIC 525",
        passage:
          "Jesus nasceu na humildade de um estábulo, no seio de uma família pobre; simples pastores são as primeiras testemunhas.",
      },
    ],
    activity: {
      type: "match",
      title: "Sinais da Noite de Belém",
      instruction: "Relacione cada detalhe do nascimento de Jesus ao seu significado.",
      pairs: [
        {
          id: "n1",
          left: "Manjedoura",
          right: "Berço humilde que prefigura Jesus como alimento espiritual",
        },
        { id: "n2", left: "Faixas de pano", right: "Cuidado terno de Maria com o recém-nascido" },
        {
          id: "n3",
          left: "Sem lugar na hospedaria",
          right: "Deus que vem pobre para acolher a todos",
        },
      ],
      explanation:
        "Cada gesto narrado por São Lucas revela a ternura materna de Maria e a humildade salvífica do Filho de Deus.",
      source: "Lc 2,6-7; CIC 525",
    },
    questions: [
      {
        prompt: "Onde Maria colocou o Menino Jesus logo após o nascimento?",
        options: ["Num berço de ouro", "Numa manjedoura", "No pátio do Templo"],
        answer: 1,
        explanation:
          "Como não havia lugar na hospedaria, Maria envolveu Jesus em faixas e o reclinou numa manjedoura (Lc 2,7).",
      },
      {
        prompt: "O que o nascimento pobre de Jesus revela sobre Deus?",
        options: [
          "Que Ele se aproxima dos humildes e não se impõe pela força",
          "Que Ele se afastou da história humana",
          "Que apenas reis podem conhecê-Lo",
        ],
        answer: 0,
        explanation:
          "Como recorda o Catecismo (CIC 525), Jesus entrou no mundo pela porta da humildade e da pobreza para estar perto de todos.",
      },
    ],
  },
  {
    id: "visita-pastores",
    order: 6,
    title: "A visita dos pastores",
    subtitle: "Os humildes são os primeiros a ouvir o canto dos anjos",
    illustration: "pastores",
    illustrationCaption: "Anjos anunciam a boa nova aos pastores que vigiavam seus rebanhos",
    biblicalContext:
      "Naquela mesma região havia pastores que passavam a noite nos campos, vigiando seus rebanhos. Um anjo do Senhor apareceu-lhes envolto em glória e anunciou: 'Hoje, na cidade de Davi, nasceu para vós um Salvador, que é o Cristo Senhor' (Lc 2,11). Logo uma multidão de anjos louvou a Deus cantando: 'Glória a Deus nas alturas e paz na terra aos homens por Ele amados'.",
    explanation: [
      "Na sociedade da época, os pastores eram trabalhadores simples e muitas vezes marginalizados. Foi justamente a eles que o céu confiou o primeiro anúncio público do Natal, mostrando que o coração vigilante e humilde reconhece Deus com rapidez.",
      "Os pastores foram apressadamente a Belém, encontraram Maria, José e o Menino na manjedoura, e voltaram glorificando a Deus e contando o que tinham visto. Assim se tornaram os primeiros missionários do Natal.",
    ],
    curiosity:
      "O canto dos anjos aos pastores ('Glória a Deus nas alturas e paz na terra...') deu origem ao hino 'Glória', cantado com alegria em todas as Missas dominicais e solenidades da Igreja Católica!",
    references: [
      {
        label: "Lucas 2,8-20",
        passage: "Foram às pressas e encontraram Maria e José, e o menino deitado na manjedoura.",
        bookSlug: "lucas",
        chapter: 2,
      },
      {
        label: "CIC 525",
        passage: "Simples pastores são as primeiras testemunhas do acontecimento de Belém.",
      },
    ],
    activity: {
      type: "classify",
      title: "A ordem dos acontecimentos nos campos de Belém",
      instruction: "Separe o que aconteceu nos campos da visita na gruta de Belém.",
      categories: ["Nos campos com os anjos", "Na gruta em Belém"],
      items: [
        { id: "ps1", text: "O anjo anunciou: 'Nasceu para vós um Salvador'", category: 0 },
        { id: "ps2", text: "Encontraram Maria, José e o Menino na manjedoura", category: 1 },
        { id: "ps3", text: "Coros celestes cantaram 'Glória a Deus nas alturas'", category: 0 },
        { id: "ps4", text: "Contaram a todos o sinal recebido e glorificaram a Deus", category: 1 },
      ],
      explanation:
        "Primeiro os pastores receberam o anúncio luminoso dos anjos nos campos; em seguida partiram para adorar o Menino e anunciar a boa notícia.",
      source: "Lc 2,8-20; CIC 525",
    },
    questions: [
      {
        prompt: "Qual sinal o anjo deu aos pastores para reconhecerem o Salvador?",
        options: [
          "Um menino vestido de púrpura num palácio",
          "Um recém-nascido envolto em faixas e deitado numa manjedoura",
          "Uma coluna de fogo sobre Jerusalém",
        ],
        answer: 1,
        explanation:
          "O sinal anunciado pelo anjo foi justamente a humildade de um recém-nascido envolto em faixas numa manjedoura (Lc 2,12).",
      },
      {
        prompt: "Qual hino da Santa Missa nasceu das palavras cantadas pelos anjos aos pastores?",
        options: ["O Glória", "O Credo", "O Cordeiro de Deus"],
        answer: 0,
        explanation:
          "As palavras iniciais do hino 'Glória a Deus nas alturas' vêm diretamente de Lucas 2,14.",
      },
    ],
  },
  {
    id: "visita-reis-magos",
    order: 7,
    title: "A visita dos Reis Magos",
    subtitle: "A Estrela de Belém e a Epifania de Cristo a todas as nações",
    illustration: "reis-magos",
    illustrationCaption: "Os Reis Magos guiados pela Estrela de Belém com ouro, incenso e mirra",
    biblicalContext:
      "Sábios vindos do Oriente observaram o surgimento de uma estrela extraordinária e partiram em longa busca pelo Rei recém-nascido. Guiados pela Estrela de Belém, chegaram até a casa onde estava o Menino com Maria, Sua mãe, prostraram-se em adoração e ofereceram-Lhe ouro, incenso e mirra (Mt 2,1-11).",
    explanation: [
      "A Igreja celebra esse acontecimento na Solenidade da Epifania ('manifestação'): enquanto os pastores representavam os humildes de Israel, os Magos representam todos os povos da terra chamados a conhecer a luz de Cristo.",
      "Cada presente possui um profundo sentido teológico reconhecido pelos Padres da Igreja: o **ouro** reconhece Jesus como Rei; o **incenso** O adora como verdadeiro Deus; e a **mirra** (usada para ungir corpos) prefigura Sua entrega redentora como verdadeiro homem.",
    ],
    curiosity:
      "A tradição cristã chamou os três Magos de Gaspar, Melchior e Baltasar. Em muitas famílias católicas, há o costume de abençoar as portas das casas na Epifania escrevendo com giz o ano e as iniciais 'C + M + B', que lembram os nomes tradicionais dos Magos e a bênção latina 'Christus Mansionem Benedicat' (Cristo abençoe esta casa).",
    references: [
      {
        label: "Mateus 2,1-12",
        passage: "Vimos a sua estrela no Oriente e viemos adorá-lo.",
        bookSlug: "mateus",
        chapter: 2,
      },
      {
        label: "CIC 528",
        passage:
          "A Epifania é a manifestação de Jesus como Messias de Israel, Filho de Deus e Salvador do mundo.",
      },
    ],
    activity: {
      type: "match",
      title: "Os presentes dos Reis Magos",
      instruction: "Ligue cada dom oferecido ao Menino Jesus ao mistério que ele simboliza.",
      pairs: [
        { id: "r1", left: "Ouro", right: "Realeza universal de Cristo, o Rei dos reis" },
        {
          id: "r2",
          left: "Incenso",
          right: "Divindade de Jesus, verdadeiro Deus digno de adoração",
        },
        { id: "r3", left: "Mirra", right: "Humanidade de Cristo e Sua entrega redentora na Cruz" },
      ],
      explanation:
        "Com ouro, incenso e mirra, os Magos confessaram que o Menino de Belém é Rei, Deus verdadeiro e Salvador que dará a vida por nós.",
      source: "Mt 2,1-12; CIC 528",
    },
    questions: [
      {
        prompt: "O que simboliza o incenso oferecido pelos Magos a Jesus?",
        options: [
          "Sua divindade como verdadeiro Deus",
          "Sua riqueza material",
          "Sua profissão em Nazaré",
        ],
        answer: 0,
        explanation:
          "O incenso, usado no culto divino, proclama que aquele Menino é o próprio Deus digno de adoração.",
      },
      {
        prompt: "Qual é o significado da palavra 'Epifania' celebrada na visita dos Magos?",
        options: [
          "Ocultamento no deserto",
          "Manifestação de Cristo a todos os povos",
          "Fim do ano civil",
        ],
        answer: 1,
        explanation:
          "Epifania significa 'manifestação': nos Magos, todas as nações reconhecem e adoram o Salvador.",
      },
    ],
  },
  {
    id: "significado-encarnacao",
    order: 8,
    title: "O significado da Encarnação",
    subtitle: "'E o Verbo se fez carne e habitou entre nós'",
    illustration: "encarnacao",
    illustrationCaption: "O mistério da Encarnação: a luz eterna de Deus unida à nossa humanidade",
    biblicalContext:
      "O Evangelho de São João resume o coração do Natal sem narrar a manjedoura, indo direto à sua profundidade eterna: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus... E o Verbo se fez carne e habitou entre nós' (Jo 1,1.14). São Paulo também ensina que Cristo, sendo de condição divina, assumiu a condição de servo (Fl 2,6-7).",
    explanation: [
      "Encarnação significa literalmente 'fazer-se carne'. A Igreja ensina no Credo que Jesus Cristo é uma única Pessoa divina com duas naturezas completas e sem mistura: Ele é verdadeiro Deus e verdadeiro homem. Ele não deixou de ser Deus ao nascer de Maria, nem apenas fingiu ser humano.",
      "Por que Deus se fez homem? O Catecismo (CIC 456-460) explica quatro razões luminosas: para nos salvar reconciliando-nos com Deus; para que conhecêssemos o amor de Deus; para ser nosso modelo de santidade; e para nos tornar participantes da natureza divina.",
    ],
    curiosity:
      "Na Santa Missa, quando recitamos o Credo, toda a assembleia inclina profundamente a cabeça (e nos dias da Anunciação e do Natal se ajoelha) ao proclamar: 'E se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem', em sinal de reverência diante desse mistério central.",
    references: [
      {
        label: "João 1,1-14",
        passage: "E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade.",
        bookSlug: "joao",
        chapter: 1,
      },
      {
        label: "Filipenses 2,6-7",
        passage:
          "Esvaziou-se a si mesmo, assumindo a condição de servo e tornando-se semelhante aos homens.",
        bookSlug: "filipenses",
        chapter: 2,
      },
      {
        label: "CIC 456-464",
        passage: "O Filho de Deus assumiu uma natureza humana para nela realizar a nossa salvação.",
      },
    ],
    activity: {
      type: "classify",
      title: "Verdadeiro Deus e verdadeiro homem",
      instruction: "Identifique o que a fé católica ensina sobre a Encarnação de Jesus.",
      categories: ["Verdade da fé católica", "Compreensão equivocada"],
      items: [
        { id: "e1", text: "Jesus é verdadeiro Deus e verdadeiro homem", category: 0 },
        { id: "e2", text: "Deus apenas assumiu uma aparência humana passageira", category: 1 },
        {
          id: "e3",
          text: "O Filho de Deus se encarnou para nos salvar e revelar o amor do Pai",
          category: 0,
        },
        { id: "e4", text: "Ao nascer em Belém, Jesus deixou de ser Deus", category: 1 },
      ],
      explanation:
        "Sem deixar de ser Deus, o Verbo assumiu plenamente a nossa natureza humana para nos salvar por dentro da nossa própria história.",
      source: "Jo 1,14; Fl 2,6-7; CIC 456-464",
    },
    questions: [
      {
        prompt: "O que significa afirmar que Jesus Cristo é o Verbo Encarnado?",
        options: [
          "Que Ele é apenas um grande profeta humano",
          "Que o Filho eterno de Deus assumiu verdadeira natureza humana sem deixar de ser Deus",
          "Que Ele é um anjo enviado temporariamente",
        ],
        answer: 1,
        explanation:
          "Na Encarnação, o Filho de Deus une à Sua Pessoa divina uma natureza humana verdadeira (corpo e alma), tornando-Se verdadeiro Deus e verdadeiro homem.",
      },
      {
        prompt: "Qual é o propósito principal da Encarnação segundo o Catecismo?",
        options: [
          "Nos salvar, revelar o amor de Deus, ser nosso modelo e nos unir à vida divina",
          "Apenas criar uma data comemorativa anual",
          "Substituir os mandamentos pela indiferença",
        ],
        answer: 0,
        explanation:
          "O Catecismo (CIC 457-460) resume esses quatro frutos da vinda de Cristo à carne por nós e para nossa salvação.",
      },
    ],
  },
  {
    id: "significado-cristao-natal",
    order: 9,
    title: "O verdadeiro significado cristão do Natal",
    subtitle: "Celebrar Cristo como o dom maior do Pai ao mundo",
    illustration: "significado-natal",
    illustrationCaption: "A luz do Natal cristão que irradia paz, gratidão e caridade fraterna",
    biblicalContext:
      "Na Missa da Noite de Natal, a Igreja proclama as palavras de São Paulo a Tito: 'Manifestou-se a graça de Deus, fonte de salvação para todos os homens' (Tt 2,11). E no Evangelho, os anjos anunciam paz àqueles a quem Deus ama.",
    explanation: [
      "Em meio a luzes comerciais, compras e pressa, o coração cristão é convidado a recordar quem está no centro da festa: Jesus Cristo. Sem Cristo, o Natal perde sua alma; com Cristo, cada encontro em família, cada gesto de perdão e cada partilha ganham sentido eterno.",
      "Celebrar verdadeiramente o Natal significa abrir espaço na 'hospedaria' do próprio coração: rezar com gratidão, reconciliar-se através do sacramento da Confissão, acolher os que sofrem ou estão sós e levar a paz de Belém ao dia a dia.",
    ],
    curiosity:
      "Na liturgia católica, o Natal não dura apenas um dia! O Tempo do Natal vai da Vigília de 24 de dezembro até a Festa do Batismo do Senhor, convidando os fiéis a saborear com calma a alegria do nascimento de Jesus.",
    references: [
      {
        label: "Tito 2,11-14",
        passage:
          "Manifestou-se a graça de Deus, ensinando-nos a viver com sobriedade, justiça e piedade.",
        bookSlug: "tito",
        chapter: 2,
      },
      {
        label: "1 João 4,9",
        passage:
          "Nisto se manifestou o amor de Deus entre nós: Deus enviou o seu Filho único ao mundo para que vivamos por meio dele.",
        bookSlug: "1-joao",
        chapter: 4,
      },
      {
        label: "CIC 526",
        passage: "Tornar-se criança em relação a Deus é a condição para entrar no Reino.",
      },
    ],
    activity: {
      type: "classify",
      title: "Viver o Natal com espírito cristão",
      instruction: "Separe atitudes que colocam Jesus no centro do Natal de hábitos que o afastam.",
      categories: ["Espírito cristão do Natal", "Esquecimento do sentido do Natal"],
      items: [
        { id: "s1", text: "Participar da Santa Missa e agradecer a Deus por Jesus", category: 0 },
        { id: "s2", text: "Reduzir a festa apenas a consumo, pressa e ostentação", category: 1 },
        { id: "s3", text: "Perdoar ofensas e partilhar com quem precisa", category: 0 },
        { id: "s4", text: "Deixar de lado a oração e os mais necessitados", category: 1 },
      ],
      explanation:
        "O verdadeiro Natal nasce quando acolhemos Jesus na oração, na Eucaristia, no perdão e na caridade concreta com o próximo.",
      source: "Tt 2,11-14; 1Jo 4,9; CIC 526",
    },
    questions: [
      {
        prompt: "O que coloca Jesus Cristo verdadeiramente no centro do Natal?",
        options: [
          "Apenas trocar presentes caros",
          "A fé grata na Encarnação, a oração, a reconciliação e a caridade fraterna",
          "Ignorar a celebração litúrgica da Igreja",
        ],
        answer: 1,
        explanation:
          "Viver o Natal cristão é unir adoração diante do Presépio, participação nos sacramentos e amor concreto aos irmãos.",
      },
      {
        prompt: "Quanto tempo dura o Tempo do Natal no calendário litúrgico católico?",
        options: [
          "Apenas na manhã de 25 de dezembro",
          "Do Natal até a Festa do Batismo do Senhor",
          "Somente durante a véspera",
        ],
        answer: 1,
        explanation:
          "A Igreja celebra o Tempo do Natal por várias semanas, passando pela Sagrada Família, Santa Maria Mãe de Deus, Epifania e Batismo do Senhor.",
      },
    ],
  },
  {
    id: "tradicoes-natalinas",
    order: 10,
    title: "As tradições natalinas católicas",
    subtitle: "O Presépio, a Missa do Galo, a Coroa do Advento e os símbolos da luz",
    illustration: "tradicoes",
    illustrationCaption:
      "O Presépio de Greccio e os símbolos católicos que celebram a luz de Cristo",
    biblicalContext:
      "Desde os primeiros séculos, os cristãos buscaram sinais visíveis para contemplar o mistério do Evangelho: a luz que brilha nas trevas (Jo 1,5), o pão colocado na manjedoura (Lc 2,7) e a vigília alegre da noite santa.",
    explanation: [
      "Entre as tradições mais queridas está o **Presépio**, difundido por São Francisco de Assis em 1223, na vila italiana de Greccio, para que o povo pudesse contemplar com os próprios olhos a pobreza e a ternura do nascimento de Jesus. Outra prática marcante é a **Missa da Noite (Missa do Galo)**, celebrada à meia-noite para acolher a Luz que nasce.",
      "Também a **Coroa do Advento** (com quatro velas que se acendem domingo a domingo preparando o Natal) e o **pinheiro verde** (sinal da vida eterna que não murcha no inverno, iluminado por luzes que lembram Cristo, Luz do mundo) ajudam as famílias a transformar a casa em uma pequena igreja doméstica.",
    ],
    curiosity:
      "Em Greccio, no Natal de 1223, São Francisco não usou estátuas: ele montou uma manjedoura com feno, levou um boi e um jumento reais e celebrou a Santa Missa ali mesmo, unindo o mistério de Belém à Eucaristia!",
    references: [
      {
        label: "Lucas 2,7",
        passage: "Envolveu-o em faixas e reclinou-o numa manjedoura.",
        bookSlug: "lucas",
        chapter: 2,
      },
      {
        label: "João 8,12",
        passage:
          "Eu sou a luz do mundo; quem me segue não andará nas trevas, mas terá a luz da vida.",
        bookSlug: "joao",
        chapter: 8,
      },
      {
        label: "CIC 1171",
        passage:
          "O ano litúrgico desdobra todo o mistério de Cristo, da Encarnação à glorificação.",
      },
    ],
    activity: {
      type: "match",
      title: "Símbolos e tradições católicas do Natal",
      instruction: "Associe cada tradição católica à sua origem ou significado cristão.",
      pairs: [
        {
          id: "t1",
          left: "Presépio",
          right: "Iniciado por São Francisco em Greccio (1223) para contemplar Belém",
        },
        {
          id: "t2",
          left: "Missa do Galo",
          right: "Celebração solene da Noite de Natal acolhendo Cristo, nossa Luz",
        },
        {
          id: "t3",
          left: "Coroa do Advento",
          right: "Quatro velas que marcam a caminhada de preparação até o Natal",
        },
        {
          id: "t4",
          left: "Árvore iluminada",
          right: "Verde da vida eterna e luzes que apontam para Jesus",
        },
      ],
      explanation:
        "As tradições natalinas católicas são catequeses vivas dentro do lar, ajudando crianças e adultos a contemplar o mistério da Encarnação.",
      source: "Lc 2,7; Jo 8,12; CIC 1171",
    },
    questions: [
      {
        prompt: "Quem iniciou a tradição popular do Presépio no Natal de 1223 em Greccio?",
        options: ["São Bento", "São Francisco de Assis", "Santo Tomás de Aquino"],
        answer: 1,
        explanation:
          "São Francisco de Assis criou o primeiro presépio vivo em Greccio em 1223 para ajudar os fiéis a contemplar a humildade do Menino Jesus.",
      },
      {
        prompt: "Qual é o significado cristão da Coroa do Advento com suas quatro velas?",
        options: [
          "Contagem das quatro semanas de preparação espiritual para o Natal",
          "Lembrança das quatro estações agrícolas",
          "Decoração exclusiva para depois do Ano-Novo",
        ],
        answer: 0,
        explanation:
          "Cada vela acesa nos quatro domingos do Advento simboliza a luz de Cristo que se aproxima cada vez mais de nós.",
      },
    ],
  },
];

const KNOWN_CHAPTER_IDS = new Set(CHRISTMAS_CHAPTERS.map((chapter) => chapter.id));

export function emptyChristmasProgress(): ChristmasProgress {
  return { completed: [], lastChapterId: null };
}

export function parseChristmasProgress(raw: string | null): ChristmasProgress {
  if (!raw) return emptyChristmasProgress();
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return emptyChristmasProgress();
    }
    const data = parsed as Record<string, unknown>;
    const rawCompleted = Array.isArray(data["completed"]) ? data["completed"] : [];
    const seen = new Set<string>();
    const completed: string[] = [];
    for (const item of rawCompleted) {
      if (typeof item === "string" && KNOWN_CHAPTER_IDS.has(item) && !seen.has(item)) {
        seen.add(item);
        completed.push(item);
      }
    }
    const lastChapterId =
      typeof data["lastChapterId"] === "string" && KNOWN_CHAPTER_IDS.has(data["lastChapterId"])
        ? data["lastChapterId"]
        : null;
    return { completed, lastChapterId };
  } catch {
    return emptyChristmasProgress();
  }
}

export function applyChristmasCompletion(
  progress: ChristmasProgress,
  chapterId: string,
): ChristmasProgress {
  if (!KNOWN_CHAPTER_IDS.has(chapterId)) return progress;
  const completed = progress.completed.includes(chapterId)
    ? progress.completed
    : [...progress.completed, chapterId];
  return {
    completed,
    lastChapterId: chapterId,
  };
}

export function getChristmasChapter(id: string): ChristmasChapter | undefined {
  return CHRISTMAS_CHAPTERS.find((chapter) => chapter.id === id);
}

export function nextChristmasChapter(completed: readonly string[]): ChristmasChapter | undefined {
  const done = new Set(completed);
  return CHRISTMAS_CHAPTERS.find((chapter) => !done.has(chapter.id));
}

export function getAdjacentChristmasChapters(id: string): {
  previous: ChristmasChapter | undefined;
  next: ChristmasChapter | undefined;
} {
  const index = CHRISTMAS_CHAPTERS.findIndex((chapter) => chapter.id === id);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? CHRISTMAS_CHAPTERS[index - 1] : undefined,
    next: index < CHRISTMAS_CHAPTERS.length - 1 ? CHRISTMAS_CHAPTERS[index + 1] : undefined,
  };
}

export function christmasProgressPercent(completed: readonly string[]): number {
  const valid = new Set(completed.filter((id) => KNOWN_CHAPTER_IDS.has(id)));
  if (CHRISTMAS_CHAPTERS.length === 0) return 0;
  return Math.round((valid.size / CHRISTMAS_CHAPTERS.length) * 100);
}
