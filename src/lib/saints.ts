export type SaintCategory =
  | "Virgem Maria e Anjos"
  | "Santos do Brasil"
  | "Doutores da Igreja"
  | "Apóstolos"
  | "Mártires"
  | "Jovens e Estudantes"
  | "Espiritualidade";

export interface DevotionSaint {
  id: string;
  name: string;
  title: string;
  feastDay: string;
  category: SaintCategory;
  quote: string;
  summary: string;
}

export const SAINT_CATEGORIES: readonly ("Todos" | SaintCategory)[] = [
  "Todos",
  "Virgem Maria e Anjos",
  "Santos do Brasil",
  "Doutores da Igreja",
  "Apóstolos",
  "Mártires",
  "Jovens e Estudantes",
  "Espiritualidade",
] as const;

export const DEVOTION_SAINTS: readonly DevotionSaint[] = [
  {
    id: "nossa-senhora-aparecida",
    name: "Nossa Senhora Aparecida",
    title: "Rainha e Padroeira do Brasil",
    feastDay: "12 de outubro",
    category: "Virgem Maria e Anjos",
    quote: "Fazei tudo o que Ele vos disser.",
    summary:
      "Mãe de Jesus venerada no Brasil desde o encontro da imagem no rio Paraíba do Sul em 1717.",
  },
  {
    id: "nossa-senhora-fatima",
    name: "Nossa Senhora de Fátima",
    title: "Mãe da Paz e do Rosário",
    feastDay: "13 de maio",
    category: "Virgem Maria e Anjos",
    quote: "Rezem o Terço todos os dias para alcançar a paz.",
    summary:
      "Invocação mariana ligada às aparições aos três pastorinhos em 1917, chamando à oração e conversão.",
  },
  {
    id: "sao-jose",
    name: "São José",
    title: "Esposo de Maria e Padroeiro da Igreja",
    feastDay: "19 de março",
    category: "Virgem Maria e Anjos",
    quote: "Homem justo que guardou Jesus e Maria no silêncio e no trabalho.",
    summary:
      "Pai adotivo de Jesus em Nazaré, exemplo de fidelidade, ternura, trabalho digno e confiança em Deus.",
  },
  {
    id: "sao-miguel-arcanjo",
    name: "São Miguel Arcanjo",
    title: "Príncipe da Milícia Celeste",
    feastDay: "29 de setembro",
    category: "Virgem Maria e Anjos",
    quote: "Quem como Deus?",
    summary:
      "Arcanjo defensor do povo de Deus na luta espiritual e protetor da Igreja contra todo mal.",
  },
  {
    id: "sao-gabriel-arcanjo",
    name: "São Gabriel Arcanjo",
    title: "Mensageiro da Encarnação",
    feastDay: "29 de setembro",
    category: "Virgem Maria e Anjos",
    quote: "Ave, cheia de graça, o Senhor é contigo!",
    summary:
      "Arcanjo que anunciou a Zacarias o nascimento de João Batista e à Virgem Maria o nascimento de Jesus.",
  },
  {
    id: "sao-rafael-arcanjo",
    name: "São Rafael Arcanjo",
    title: "Medicina de Deus e Guia dos Viajantes",
    feastDay: "29 de setembro",
    category: "Virgem Maria e Anjos",
    quote: "Bendizei a Deus diante de todos os viventes.",
    summary:
      "Arcanjo que acompanhou e protegeu Tobias em sua jornada, trazendo cura à sua família.",
  },
  {
    id: "santa-dulce-dos-pobres",
    name: "Santa Dulce dos Pobres",
    title: "Anjo Bom da Bahia",
    feastDay: "13 de agosto",
    category: "Santos do Brasil",
    quote: "No amor e na fé encontraremos as forças para a nossa missão.",
    summary:
      "Primeira santa nascida no Brasil, dedicou toda a vida ao acolhimento dos doentes e pobres em Salvador.",
  },
  {
    id: "sao-frei-galvao",
    name: "Santo Antônio de Sant'Ana Galvão",
    title: "Primeiro Santo nascido no Brasil",
    feastDay: "25 de outubro",
    category: "Santos do Brasil",
    quote: "Virgem Santíssima, depois do parto permanecestes intacta.",
    summary:
      "Frade franciscano paulista do século XVIII, construtor do Mosteiro da Luz e homem de caridade e paz.",
  },
  {
    id: "santa-paulina",
    name: "Santa Paulina",
    title: "Mãe dos Doentes e Abandonados",
    feastDay: "9 de julho",
    category: "Santos do Brasil",
    quote: "Nunca desanimeis, embora venham ventos contrários.",
    summary:
      "Fundadora em Santa Catarina da primeira congregação religiosa brasileira, servindo com simplicidade e coragem.",
  },
  {
    id: "sao-jose-de-anchieta",
    name: "São José de Anchieta",
    title: "Apóstolo do Brasil",
    feastDay: "9 de junho",
    category: "Santos do Brasil",
    quote: "Tudo por amor de Deus e salvação das almas.",
    summary:
      "Missionário jesuíta catequista dos povos originários, escritor da primeira gramática tupi e cofundador de São Paulo.",
  },
  {
    id: "santos-martires-uruaçu",
    name: "Santos Mártires de Cunhaú e Uruaçu",
    title: "Protomártires do Brasil",
    feastDay: "3 de outubro",
    category: "Santos do Brasil",
    quote: "Permanecer fiéis à Eucaristia até o fim.",
    summary:
      "Grupo de sacerdotes e fiéis leigos no Rio Grande do Norte que deram a vida defendendo a fé e a Missa em 1645.",
  },
  {
    id: "santa-teresinha",
    name: "Santa Teresinha do Menino Jesus",
    title: "Doutora da Igreja · Pequena Via",
    feastDay: "1 de outubro",
    category: "Doutores da Igreja",
    quote: "Quero passar o meu céu fazendo o bem sobre a terra.",
    summary:
      "Carmelita francesa que ensinou o caminho da infância espiritual: amar a Deus nas pequenas coisas diárias.",
  },
  {
    id: "santa-teresa-avila",
    name: "Santa Teresa d'Ávila",
    title: "Doutora da Igreja · Mestra de Oração",
    feastDay: "15 de outubro",
    category: "Doutores da Igreja",
    quote: "Nada te perturbe, nada te espante; só Deus basta.",
    summary:
      "Reformadora do Carmelo e autora de obras clássicas sobre a oração como trato de amizade com Cristo.",
  },
  {
    id: "sao-tomas-de-aquino",
    name: "São Tomás de Aquino",
    title: "Doutor Angélico",
    feastDay: "28 de janeiro",
    category: "Doutores da Igreja",
    quote: "Contemplar e transmitir aos outros o que se contemplou.",
    summary:
      "Frade dominicano e grande teólogo da Suma Teológica e dos hinos eucarísticos como o Tantum Ergo.",
  },
  {
    id: "santo-agostinho",
    name: "Santo Agostinho de Hipona",
    title: "Doutor da Graça",
    feastDay: "28 de agosto",
    category: "Doutores da Igreja",
    quote: "Tarde te amei, ó Beleza tão antiga e tão nova!",
    summary:
      "Bispo e autor das Confissões, testemunha da busca sincera pela verdade e do encontro transformador com Deus.",
  },
  {
    id: "santa-catarina-siena",
    name: "Santa Catarina de Siena",
    title: "Doutora da Igreja · Amiga da Unidade",
    feastDay: "29 de abril",
    category: "Doutores da Igreja",
    quote: "Se fordes o que deveis ser, ateareis fogo no mundo inteiro.",
    summary:
      "Leiga dominicana do século XIV que aconselhou papas e trabalhou incansavelmente pela unidade da Igreja.",
  },
  {
    id: "sao-joao-da-cruz",
    name: "São João da Cruz",
    title: "Doutor Místico",
    feastDay: "14 de dezembro",
    category: "Doutores da Igreja",
    quote: "No entardecer da vida seremos julgados pelo amor.",
    summary:
      "Carmelita e poeta espanhol que guiou tantas almas através da noite escura rumo à união com Deus.",
  },
  {
    id: "sao-francisco-de-sales",
    name: "São Francisco de Sales",
    title: "Doutor da Amabilidade",
    feastDay: "24 de janeiro",
    category: "Doutores da Igreja",
    quote: "Nada pela força, tudo pelo amor.",
    summary:
      "Bispo de Genebra que mostrou na Filoteia como viver uma fé profunda no meio da família e do trabalho.",
  },
  {
    id: "santo-afonso-ligorio",
    name: "Santo Afonso Maria de Ligório",
    title: "Doutor da Oração e da Moral",
    feastDay: "1 de agosto",
    category: "Doutores da Igreja",
    quote: "Quem reza se salva; quem não reza se perde.",
    summary:
      "Fundador dos Redentoristas, pregador da misericórdia de Deus e autor de belas orações a Jesus e Maria.",
  },
  {
    id: "santa-hildegarda",
    name: "Santa Hildegarda de Bingen",
    title: "Doutora da Igreja · Harmonia da Criação",
    feastDay: "17 de setembro",
    category: "Doutores da Igreja",
    quote: "A alma é uma sinfonia que responde à voz de Deus.",
    summary:
      "Abadessa beneditina, compositora sacra, mística e estudiosa da medicina e das maravilhas da criação.",
  },
  {
    id: "sao-bernardo-claraval",
    name: "São Bernardo de Claraval",
    title: "Doutor Melífluo",
    feastDay: "20 de agosto",
    category: "Doutores da Igreja",
    quote: "Nos perigos, nas angústias, nas dúvidas, olha para a Estrela, invoca Maria!",
    summary:
      "Monge cisterciense conhecido pela pregação inflamada do amor a Cristo e pela terna devoção mariana.",
  },
  {
    id: "sao-jeromino",
    name: "São Jerônimo",
    title: "Doutor das Sagradas Escrituras",
    feastDay: "30 de setembro",
    category: "Doutores da Igreja",
    quote: "Ignorar as Escrituras é ignorar a Cristo.",
    summary:
      "Tradutor da Bíblia para o latim (Vulgata), dedicou sua vida ao estudo apaixonado da Palavra de Deus.",
  },
  {
    id: "sao-pedro-apostolo",
    name: "São Pedro Apóstolo",
    title: "Rocha da Igreja e Primeiro Papa",
    feastDay: "29 de junho",
    category: "Apóstolos",
    quote: "Senhor, a quem iremos? Tu tens palavras de vida eterna.",
    summary:
      "Pescador da Galileia chamado por Jesus para confirmar os irmãos na fé, deu seu testemunho final em Roma.",
  },
  {
    id: "sao-paulo-apostolo",
    name: "São Paulo Apóstolo",
    title: "Apóstolo dos Gentios",
    feastDay: "29 de junho",
    category: "Apóstolos",
    quote: "Já não sou eu quem vive, mas é Cristo que vive em mim.",
    summary:
      "Convertido no caminho de Damasco, levou o Evangelho pelo Mediterrâneo e escreveu grandes cartas do Novo Testamento.",
  },
  {
    id: "sao-joao-evangelista",
    name: "São João Evangelista",
    title: "O Discípulo Amado",
    feastDay: "27 de dezembro",
    category: "Apóstolos",
    quote: "Deus é amor; quem permanece no amor permanece em Deus.",
    summary:
      "Apóstolo que permaneceu aos pés da Cruz com Maria, autor do quarto Evangelho, das Cartas e do Apocalipse.",
  },
  {
    id: "sao-judas-tadeu",
    name: "São Judas Tadeu",
    title: "Apóstolo das Causas Difíceis",
    feastDay: "28 de outubro",
    category: "Apóstolos",
    quote: "Conservai-vos no amor de Deus, esperando a misericórdia de Jesus.",
    summary:
      "Apóstolo fiel que pregou na Mesopotâmia e é muito invocado pelos cristãos nos momentos mais desafiadores.",
  },
  {
    id: "santa-maria-madalena",
    name: "Santa Maria Madalena",
    title: "Apóstola dos Apóstolos",
    feastDay: "22 de julho",
    category: "Apóstolos",
    quote: "Eu vi o Senhor!",
    summary:
      "Discípula fiel de Jesus na Galileia e junto à Cruz, foi a primeira testemunha enviada a anunciar a Ressurreição.",
  },
  {
    id: "sao-mateus-evangelista",
    name: "São Mateus",
    title: "Apóstolo e Evangelista",
    feastDay: "21 de setembro",
    category: "Apóstolos",
    quote: "Segue-me! Ele levantou-se e O seguiu.",
    summary:
      "Coletor de impostos que deixou tudo ao chamado de Jesus e escreveu o primeiro Evangelho.",
  },
  {
    id: "sao-tiago-maior",
    name: "São Tiago Maior",
    title: "Apóstolo Peregrino",
    feastDay: "25 de julho",
    category: "Apóstolos",
    quote: "Testemunhar Cristo até os confins da terra.",
    summary:
      "Irmão de João, primeiro apóstolo mártir e referência espiritual para milhões de peregrinos rumo a Compostela.",
  },
  {
    id: "santa-rita-cassia",
    name: "Santa Rita de Cássia",
    title: "Santa dos Impossíveis e da Reconciliação",
    feastDay: "22 de maio",
    category: "Espiritualidade",
    quote: "Senhor, dá-me paciência e paz no perdão.",
    summary:
      "Esposa, mãe, viúva e religiosa agostiniana que transformou dores familiares em perdão e caridade heroica.",
  },
  {
    id: "sao-jorge",
    name: "São Jorge",
    title: "Mártir da Coragem Cristã",
    feastDay: "23 de abril",
    category: "Mártires",
    quote: "Nenhum poder terreno me afastará da verdade de Cristo.",
    summary:
      "Soldado cristão que preferiu perder o cargo e a vida no século IV a renegar sua fidelidade ao Senhor.",
  },
  {
    id: "sao-sebastiao",
    name: "São Sebastião",
    title: "Defensor da Fé em Roma",
    feastDay: "20 de janeiro",
    category: "Mártires",
    quote: "Sede firmes e confortai os irmãos na provação.",
    summary:
      "Oficial romano que usou sua posição para amparar cristãos presos e deu a vida em testemunho do Evangelho.",
  },
  {
    id: "santa-luzia",
    name: "Santa Luzia",
    title: "Mártir da Luz e da Pureza",
    feastDay: "13 de dezembro",
    category: "Mártires",
    quote: "O templo do Espírito Santo é um coração fiel.",
    summary:
      "Jovem cristã de Siracusa que entregou seus bens aos pobres e testemunhou Cristo com firmeza luminosa.",
  },
  {
    id: "santa-cecilia",
    name: "Santa Cecília",
    title: "Padroeira da Música Sacra",
    feastDay: "22 de novembro",
    category: "Mártires",
    quote: "Cantava no seu coração só para o Senhor.",
    summary:
      "Mártir romana cujo louvor constante a Deus inspirou gerações de músicos, corais e liturgistas.",
  },
  {
    id: "sao-expedito",
    name: "São Expedito",
    title: "Mártir da Decisão Rápida",
    feastDay: "19 de abril",
    category: "Mártires",
    quote: "Hoje! Não deixe para amanhã a conversão do coração.",
    summary:
      "Comandante romano convertido que respondeu imediatamente ao chamado de Deus sem adiar sua mudança de vida.",
  },
  {
    id: "sao-maximiliano-kolbe",
    name: "São Maximiliano Maria Kolbe",
    title: "Mártir da Caridade",
    feastDay: "14 de agosto",
    category: "Mártires",
    quote: "Só o amor cria.",
    summary:
      "Frade franciscano que entregou voluntariamente sua vida em Auschwitz no lugar de um pai de família.",
  },
  {
    id: "santa-joana-darc",
    name: "Santa Joana d'Arc",
    title: "Padroeira da Coragem na Juventude",
    feastDay: "30 de maio",
    category: "Mártires",
    quote: "Não tenho medo; nasci para isto.",
    summary:
      "Jovem camponesa francesa guiada pela oração, cuja fé inabalável sustentou sua missão até o martírio.",
  },
  {
    id: "sao-carlo-acutis",
    name: "São Carlo Acutis",
    title: "Padroeiro da Juventude e da Evangelização Digital",
    feastDay: "12 de outubro",
    category: "Jovens e Estudantes",
    quote: "A Eucaristia é a minha autoestrada para o Céu.",
    summary:
      "Jovem italiano apaixonado pela Missa diária, pelo Terço e por usar a tecnologia para anunciar Jesus.",
  },
  {
    id: "sao-domingos-savio",
    name: "São Domingos Sávio",
    title: "Jovem Discípulo de Dom Bosco",
    feastDay: "6 de maio",
    category: "Jovens e Estudantes",
    quote: "Antes morrer do que pecar!",
    summary:
      "Adolescente alegre do Oratório de Dom Bosco que alcançou alta santidade na amizade, nos estudos e na oração.",
  },
  {
    id: "sao-tarcisio",
    name: "São Tarcísio",
    title: "Mártir da Eucaristia e dos Coroinhas",
    feastDay: "15 de agosto",
    category: "Jovens e Estudantes",
    quote: "Guardar Jesus Eucarístico com toda a vida.",
    summary:
      "Jovem acólito de Roma que deu a vida protegendo as hóstias consagradas levadas aos cristãos encarcerados.",
  },
  {
    id: "sao-luis-gonzaga",
    name: "São Luís Gonzaga",
    title: "Padroeiro da Juventude Católica",
    feastDay: "21 de junho",
    category: "Jovens e Estudantes",
    quote: "De que serve tudo o que não leva à eternidade?",
    summary:
      "Jovem jesuíta que renunciou a privilégios nobres e morreu servindo os enfermos durante uma peste em Roma.",
  },
  {
    id: "sao-joao-bosco",
    name: "São João Bosco (Dom Bosco)",
    title: "Pai e Mestre da Juventude",
    feastDay: "31 de janeiro",
    category: "Jovens e Estudantes",
    quote: "Basta que sejais jovens para que eu vos ame muito.",
    summary:
      "Sacerdote italiano fundador dos Salesianos, educador cheio de alegria, confiança em Maria Auxiliadora e fé prática.",
  },
  {
    id: "sao-francisco-assis",
    name: "São Francisco de Assis",
    title: "Pobrezinho de Assis · Amigo da Criação",
    feastDay: "4 de outubro",
    category: "Espiritualidade",
    quote: "Senhor, fazei-me instrumento de vossa paz.",
    summary:
      "Fundador dos Franciscanos que abraçou a pobreza evangélica, renovou o presépio e cantou o Cântico das Criaturas.",
  },
  {
    id: "santa-clara-assis",
    name: "Santa Clara de Assis",
    title: "Irmã Pobre e Adoradora da Eucaristia",
    feastDay: "11 de agosto",
    category: "Espiritualidade",
    quote: "Olha cada dia para o espelho que é Cristo.",
    summary:
      "Primeira discípula de São Francisco e fundadora das Clarissas, viveu em profunda alegria contemplativa.",
  },
  {
    id: "santo-antonio-padua",
    name: "Santo Antônio de Pádua",
    title: "Pregador Evangélico e Amigo dos Pobres",
    feastDay: "13 de junho",
    category: "Espiritualidade",
    quote: "As palavras falam, mas são as obras que ensinam.",
    summary:
      "Frade franciscano nascido em Lisboa, profundo conhecedor da Bíblia e muito querido nas festas e devoções populares.",
  },
  {
    id: "sao-padre-pio",
    name: "São Padre Pio de Pietrelcina",
    title: "Apóstolo do Confessionário e da Oração",
    feastDay: "23 de setembro",
    category: "Espiritualidade",
    quote: "Reza, espera e não te preocupes.",
    summary:
      "Frade capuchinho que passava horas celebrando a Missa, confessando fiéis e intercedendo pelos que sofrem.",
  },
  {
    id: "sao-bento-nursia",
    name: "São Bento de Núrsia",
    title: "Pai do Monaquismo Ocidental",
    feastDay: "11 de julho",
    category: "Espiritualidade",
    quote: "Ora et labora — reza e trabalha, nada antepondo a Cristo.",
    summary:
      "Autor da Regra Beneditina e inspirador da Medalha de São Bento, ensinando equilíbrio, hospitalidade e paz.",
  },
  {
    id: "sao-joao-paulo-ii",
    name: "São João Paulo II",
    title: "Papa Peregrino da Esperança",
    feastDay: "22 de outubro",
    category: "Espiritualidade",
    quote: "Não tenhais medo! Abri as portas a Cristo!",
    summary:
      "Papa polonês que visitou o Brasil diversas vezes, criou a Jornada Mundial da Juventude e os Mistérios Luminosos.",
  },
  {
    id: "santa-faustina",
    name: "Santa Faustina Kowalska",
    title: "Secretária da Divina Misericórdia",
    feastDay: "5 de outubro",
    category: "Espiritualidade",
    quote: "Jesus, eu confio em Vós!",
    summary:
      "Religiosa polonesa que recebeu e difundiu a devoção ao Terço e ao Domingo da Divina Misericórdia.",
  },
  {
    id: "santa-teresa-calcuta",
    name: "Santa Teresa de Calcutá",
    title: "Missionária da Caridade",
    feastDay: "5 de setembro",
    category: "Espiritualidade",
    quote: "Fazer pequenas coisas com grande amor.",
    summary:
      "Religiosa que serviu Jesus nos mais pobres entre os pobres, testemunhando o valor sagrado de cada pessoa.",
  },
  {
    id: "sao-vicente-paulo",
    name: "São Vicente de Paulo",
    title: "Pai da Caridade Organizada",
    feastDay: "27 de setembro",
    category: "Espiritualidade",
    quote: "Amemos a Deus à custa do suor de nossos braços.",
    summary:
      "Sacerdote francês fundador das Obras Vicentinas, ensinando a reconhecer o próprio Cristo em quem passa necessidade.",
  },
  {
    id: "santo-inacio-loyola",
    name: "Santo Inácio de Loyola",
    title: "Mestre do Discernimento Espiritual",
    feastDay: "31 de julho",
    category: "Espiritualidade",
    quote: "Ad maiorem Dei gloriam — para a maior glória de Deus.",
    summary:
      "Fundador da Companhia de Jesus e autor dos Exercícios Espirituais para buscar e encontrar Deus em todas as coisas.",
  },
  {
    id: "santa-monica",
    name: "Santa Mônica",
    title: "Mãe da Oração Perseverante",
    feastDay: "27 de agosto",
    category: "Espiritualidade",
    quote: "Nada está longe de Deus quando se confia na oração.",
    summary:
      "Mãe de Santo Agostinho que rezou com lágrimas e paciência durante anos pela conversão de sua família.",
  },
  {
    id: "santa-edwiges",
    name: "Santa Edwiges",
    title: "Protetora dos Endividados e Necessitados",
    feastDay: "16 de outubro",
    category: "Espiritualidade",
    quote: "A verdadeira nobreza está em socorrer o irmão em dificuldade.",
    summary:
      "Duquesa da Silésia que usou sua fortuna para quitar dívidas de famílias pobres e amparar prisioneiros.",
  },
] as const;

export function isKnownSaintId(id: unknown): id is string {
  return typeof id === "string" && DEVOTION_SAINTS.some((saint) => saint.id === id);
}

export function getDevotionSaint(id: string | null | undefined): DevotionSaint | null {
  if (!id) return null;
  return DEVOTION_SAINTS.find((saint) => saint.id === id) ?? null;
}

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function searchSaints(
  query: string,
  category: "Todos" | SaintCategory = "Todos",
): DevotionSaint[] {
  const normalizedQuery = normalizeSearch(query);
  return DEVOTION_SAINTS.filter((saint) => {
    if (category !== "Todos" && saint.category !== category) return false;
    if (!normalizedQuery) return true;
    const haystack = normalizeSearch(
      `${saint.name} ${saint.title} ${saint.feastDay} ${saint.category} ${saint.summary}`,
    );
    return haystack.includes(normalizedQuery);
  });
}
