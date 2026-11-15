import type { MuseumExhibit, MuseumIllustrationId } from "./museum-types";

function illustratedImage(alt: string, caption: string, sourceUrl: string) {
  return {
    url: "",
    alt,
    caption,
    author: "Acervo ilustrado Lumen",
    license: "Ilustração didática original",
    licenseUrl: sourceUrl,
    sourceUrl,
  };
}

function exhibit(
  data: Omit<MuseumExhibit, "image"> & {
    illustration: MuseumIllustrationId;
    alt: string;
    caption: string;
    sourceUrl: string;
  },
): MuseumExhibit {
  const { alt, caption, sourceUrl, ...rest } = data;
  return {
    ...rest,
    image: illustratedImage(alt, caption, sourceUrl),
  };
}

export const EXPANDED_MUSEUM_EXHIBITS: MuseumExhibit[] = [
  // 1. Santos e santas
  exhibit({
    id: "sao-francisco-assis",
    title: "São Francisco de Assis",
    category: "santos",
    date: "1181/1182 – 1226",
    year: 1226,
    location: "Assis, Itália",
    summary:
      "O 'Pobrezinho de Assis', que renovou a Igreja pela pobreza evangélica, pela paz e pelo amor à criação.",
    paragraphs: [
      "Nascido em família rica de comerciantes, Francisco renunciou à herança diante do bispo de Assis para seguir literalmente o Evangelho, cuidando dos leprosos e reconstruindo pequenas igrejas em ruínas.",
      "Em 1223, em Greccio, celebrou o Natal com um presépio vivo para ajudar o povo a contemplar a humildade da Encarnação. Compôs o Cântico das Criaturas e recebeu os estigmas no monte Alverne em 1224.",
    ],
    context:
      "A ilustração simboliza São Francisco com a cruz Tau, sinal de conversão e paz que ele adotava como assinatura.",
    illustration: "saint-francis",
    alt: "Ilustração devocional de São Francisco de Assis com auréola e cruz dourada",
    caption: "Ilustração temática de São Francisco de Assis.",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100127.html",
    sources: [
      {
        title: "Catequese de Bento XVI sobre São Francisco de Assis",
        url: "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100127.html",
      },
    ],
  }),
  exhibit({
    id: "santa-teresinha",
    title: "Santa Teresinha do Menino Jesus",
    category: "santos",
    date: "1873 – 1897",
    year: 1897,
    location: "Lisieux, França",
    summary:
      "Carmelita que ensinou a 'Pequena Via' da confiança em Deus nas coisas simples do cotidiano.",
    paragraphs: [
      "Teresa Martin entrou no Carmelo de Lisieux aos 15 anos e viveu apenas até os 24. Sem grandes obras externas, escreveu 'História de uma Alma', mostrando que a santidade está ao alcance de todos por meio dos pequenos gestos feitos com grande amor.",
      "Foi canonizada em 1925, declarada Padroeira das Missões em 1927 e Doutora da Igreja por São João Paulo II em 1997.",
    ],
    context:
      "As rosas na ilustração recordam sua promessa de fazer cair 'uma chuva de rosas' — graças de amor — após sua morte.",
    illustration: "saint-therese",
    alt: "Ilustração de rosas e cruz representando Santa Teresinha do Menino Jesus",
    caption: "Ilustração simbólica da 'chuva de rosas' de Santa Teresinha.",
    sourceUrl:
      "https://www.vatican.va/content/john-paul-ii/pt/apost_letters/1997/documents/hf_jp-ii_apl_19101997_divini-amoris.html",
    sources: [
      {
        title: "Carta Apostólica Divini Amoris Scientia — São João Paulo II",
        url: "https://www.vatican.va/content/john-paul-ii/pt/apost_letters/1997/documents/hf_jp-ii_apl_19101997_divini-amoris.html",
      },
    ],
  }),
  exhibit({
    id: "santo-tomas-aquino",
    title: "Santo Tomás de Aquino",
    category: "santos",
    date: "c. 1225 – 1274",
    year: 1274,
    location: "Roccasecca e Nápoles, Itália",
    summary:
      "Frade dominicano e Doutor da Igreja que uniu fé e razão na Suma Teológica e compôs hinos eucarísticos.",
    paragraphs: [
      "Tomás ingressou na Ordem dos Pregadores e ensinou em Paris e na Itália. Em obras como a Suma Teológica, dialogou com a filosofia para mostrar que a fé cristã e a razão humana vêm do mesmo Deus e não se contradizem.",
      "A pedido do Papa Urbano IV, compôs em 1264 os hinos do ofício de Corpus Christi, como o 'Tantum Ergo' e o 'Pange Lingua', cantados até hoje.",
    ],
    context:
      "Na iconografia tradicional, o livro aberto e o sol no peito simbolizam a clareza de sua doutrina colocada a serviço de Cristo.",
    illustration: "saint-aquinas",
    alt: "Ilustração de um livro aberto iluminado por um sol dourado, emblema de Santo Tomás de Aquino",
    caption: "Ilustração do livro e do sol, símbolos de Santo Tomás de Aquino.",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100602.html",
    sources: [
      {
        title: "Catequese de Bento XVI sobre Santo Tomás de Aquino",
        url: "https://www.vatican.va/content/benedict-xvi/pt/audiences/2010/documents/hf_ben-xvi_aud_20100602.html",
      },
    ],
  }),

  // 2. Papas
  exhibit({
    id: "sao-pedro-papa",
    title: "São Pedro Apóstolo (Primeiro Papa)",
    category: "papas",
    date: "Século I (martírio c. 64–67)",
    year: 64,
    location: "Betsaida / Roma",
    summary:
      "Pescador da Galileia escolhido por Jesus como rocha de unidade da Igreja e pastor de seu rebanho.",
    paragraphs: [
      "Simão recebeu de Jesus o nome de Cefas (Pedro, pedra): 'Sobre esta pedra edificarei a minha Igreja, e eu te darei as chaves do Reino dos Céus' (Mt 16,18-19). Após a Ressurreição, Jesus lhe confiou três vezes o pastoreio de suas ovelhas (Jo 21,15-17).",
      "Segundo o testemunho antigo da Igreja de Roma, Pedro deu ali o testemunho supremo do martírio sob o imperador Nero, sendo sepultado na colina do Vaticano.",
    ],
    context:
      "As chaves cruzadas tornaram-se o emblema do ministério petrino: o serviço do Papa à unidade na fé.",
    illustration: "pope-keys",
    alt: "Ilustração das chaves cruzadas e cruz papal, símbolo do ministério de São Pedro",
    caption: "As chaves do Reino e a cruz papal.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c3_811-870_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 880-882)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c3_811-870_po.html",
      },
    ],
  }),
  exhibit({
    id: "sao-gregorio-magno",
    title: "São Gregório Magno",
    category: "papas",
    date: "Pontificado: 590 – 604",
    year: 590,
    location: "Roma, Itália",
    summary:
      "Papa que se intitulou 'Servo dos servos de Deus', organizou a liturgia e enviou missionários à Inglaterra.",
    paragraphs: [
      "Monge beneditino antes de ser eleito Papa em tempos difíceis de peste e invasões, Gregório I cuidou dos pobres de Roma, reformou a administração dos bens da Igreja para servir aos necessitados e escreveu a influente 'Regra Pastoral'.",
      "A tradição associa seu nome à organização do canto litúrgico romano, conhecido como canto gregoriano, e à missão de Santo Agostinho de Cantuária.",
    ],
    context:
      "O título 'Servo dos servos de Deus' é usado até hoje pelos Papas em documentos solenes.",
    illustration: "pope-gregory",
    alt: "Ilustração das chaves papais e da cruz pontifícia em homenagem a São Gregório Magno",
    caption: "Emblema pontifício representando São Gregório Magno.",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080528.html",
    sources: [
      {
        title: "Catequese de Bento XVI sobre São Gregório Magno",
        url: "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080528.html",
      },
    ],
  }),
  exhibit({
    id: "sao-joao-paulo-ii",
    title: "São João Paulo II",
    category: "papas",
    date: "Pontificado: 1978 – 2005",
    year: 1978,
    location: "Wadowice, Polônia / Vaticano",
    summary:
      "Karol Wojtyła, peregrino em todos os continentes, fundador das Jornadas Mundiais da Juventude.",
    paragraphs: [
      "Primeiro Papa não italiano em mais de quatro séculos, João Paulo II realizou 104 viagens apostólicas fora da Itália, incluindo diversas visitas ao Brasil, incentivando os fiéis com o lema 'Não tenhais medo! Abri as portas a Cristo'.",
      "Promulgou o Catecismo da Igreja Católica em 1992, instituiu os Mistérios Luminosos do Rosário em 2002 e foi canonizado em 2014.",
    ],
    context:
      "A cruz papal de três hastes e as chaves lembram o serviço universal de cada Sucessor de Pedro.",
    illustration: "pope-jp2",
    alt: "Ilustração do brasão simbólico papal para São João Paulo II",
    caption: "Emblema do ministério petrino.",
    sourceUrl: "https://www.vatican.va/content/john-paul-ii/pt.html",
    sources: [
      {
        title: "Santa Sé — Pontificado de São João Paulo II",
        url: "https://www.vatican.va/content/john-paul-ii/pt.html",
      },
    ],
  }),

  // 3. Concílios da Igreja
  exhibit({
    id: "concilio-niceia",
    title: "Primeiro Concílio de Niceia",
    category: "concilios",
    date: "325 d.C.",
    year: 325,
    location: "Niceia (atual Iznik, Turquia)",
    summary:
      "Primeiro concílio ecumênico da Igreja, que afirmou a plena divindade de Jesus Cristo no Credo.",
    paragraphs: [
      "Convocado diante da controvérsia ariana, que negava ser o Filho igual ao Pai em divindade, cerca de trezentos bispos reuniram-se em Niceia para testemunhar a fé recebida dos Apóstolos.",
      "O concílio proclamou que Jesus Cristo é 'gerado, não criado, consubstancial ao Pai' (homoousios), base do Credo Niceno-Constantinopolitano rezado até hoje nas Missas dominicais.",
    ],
    context:
      "Um concílio ecumênico reúne os bispos do mundo inteiro em comunhão com o Papa para discernir questões de fé e disciplina.",
    illustration: "council-nicea",
    alt: "Ilustração de pergaminho conciliar com a cruz e selos dourados",
    caption: "Representação simbólica das atas do Concílio de Niceia.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c1_198-421_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 242, 465)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c1_198-421_po.html",
      },
    ],
  }),
  exhibit({
    id: "concilio-trento",
    title: "Concílio de Trento",
    category: "concilios",
    date: "1545 – 1563",
    year: 1545,
    location: "Trento, Itália",
    summary:
      "Concílio da reforma católica que esclareceu a doutrina sobre os sacramentos, a graça e a formação do clero.",
    paragraphs: [
      "Diante das divisões da Reforma Protestante no século XVI, o Concílio de Trento reuniu-se em três períodos durante dezoito anos. Reafirmou o cânon completo dos 73 livros da Bíblia, os sete sacramentos e a relação entre Escritura e Tradição.",
      "Também promoveu profunda renovação pastoral, instituindo os seminários para a formação espiritual e teológica dos padres e impulsionando o Catecismo Romano.",
    ],
    context:
      "Os decretos conciliares moldaram a vida paroquial, a catequese e a liturgia católica por quatro séculos.",
    illustration: "council-trent",
    alt: "Ilustração de documento conciliar com selos e cruz dourada representando Trento",
    caption: "Representação dos decretos do Concílio de Trento.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p1s1c2_50-141_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 120, 1376)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p1s1c2_50-141_po.html",
      },
    ],
  }),
  exhibit({
    id: "concilio-vaticano-ii",
    title: "Concílio Vaticano II",
    category: "concilios",
    date: "1962 – 1965",
    year: 1962,
    location: "Basílica de São Pedro, Vaticano",
    summary:
      "Convocado por São João XXIII e concluído por São Paulo VI, renovou a liturgia e destacou o chamado universal à santidade.",
    paragraphs: [
      "Com mais de dois mil padres conciliares de todos os continentes, o Concílio Vaticano II produziu dezesseis documentos fundamentais, entre eles quatro constituições sobre a Liturgia (Sacrosanctum Concilium), a Igreja (Lumen Gentium), a Revelação (Dei Verbum) e a Igreja no mundo (Gaudium et Spes).",
      "Permitiu a celebração da Missa nas línguas faladas pelo povo para favorecer a participação consciente e recordou que todos os batizados — leigos, religiosos e clero — são chamados à santidade.",
    ],
    context: "Foi um concílio pastoral de renovação em fidelidade à Tradição viva da Igreja.",
    illustration: "council-vatican2",
    alt: "Ilustração conciliar representando os documentos do Concílio Vaticano II",
    caption: "Ilustração simbólica das constituições do Vaticano II.",
    sourceUrl: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/index_po.htm",
    sources: [
      {
        title: "Documentos do Concílio Vaticano II — Santa Sé",
        url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/index_po.htm",
      },
    ],
  }),

  // 4. Igrejas históricas
  exhibit({
    id: "sao-joao-latrao",
    title: "Arquibasílica de São João de Latrão",
    category: "igrejas",
    date: "Consagrada em 324 d.C.",
    year: 324,
    location: "Roma, Itália",
    summary: "A catedral do Papa como Bispo de Roma, chamada 'Mãe e Cabeça de todas as igrejas'.",
    paragraphs: [
      "Muitos pensam que a catedral do Papa é São Pedro, mas a catedral de Roma é a Arquibasílica do Santíssimo Salvador e dos Santos João Batista e João Evangelista em Latrão, doada pelo imperador Constantino no século IV.",
      "Em sua fachada lê-se a inscrição latina que a reconhece como mãe e cabeça de todas as igrejas da cidade e do mundo. Sua festa de dedicação é celebrada em toda a Igreja Católica no dia 9 de novembro.",
    ],
    context: "A ilustração destaca a arquitetura basilical romana com frontão e cúpula.",
    illustration: "church-lateran",
    alt: "Ilustração arquitetônica de basílica romana representando São João de Latrão",
    caption: "Ilustração arquitetônica da Basílica de Latrão.",
    sourceUrl: "https://www.vatican.va/various/basiliche/san_giovanni/index_en.htm",
    sources: [
      {
        title: "Basílica Papal de São João de Latrão — Santa Sé",
        url: "https://www.vatican.va/various/basiliche/san_giovanni/index_en.htm",
      },
    ],
  }),
  exhibit({
    id: "notre-dame-paris",
    title: "Catedral de Notre-Dame de Paris",
    category: "igrejas",
    date: "Construída entre 1163 e 1345",
    year: 1163,
    location: "Île de la Cité, Paris, França",
    summary:
      "Obra-prima do gótico medieval dedicada a Nossa Senhora, guardiã de relíquias e da fé francesa.",
    paragraphs: [
      "Com suas duas torres, arcobotantes e famosas rosáceas coloridas, a Catedral de Notre-Dame simboliza o esforço medieval de traduzir em pedra e luz a beleza da Jerusalém Celeste.",
      "Após o grave incêndio de abril de 2019, foi restaurada com precisão artesanal para voltar a acolher as celebrações litúrgicas e peregrinos.",
    ],
    context:
      "As grandes rosáceas góticas funcionavam como uma 'Bíblia de luz', ensinando a história da salvação pelos vitrais.",
    illustration: "church-notre-dame",
    alt: "Ilustração da fachada gótica com duas torres e rosácea central da Catedral de Notre-Dame",
    caption: "Ilustração da fachada gótica de Notre-Dame de Paris.",
    sourceUrl: "https://www.notredamedeparis.fr/en/discover/architecture/",
    sources: [
      {
        title: "Arquitetura da Catedral de Notre-Dame de Paris",
        url: "https://www.notredamedeparis.fr/en/discover/architecture/",
      },
    ],
  }),
  exhibit({
    id: "basilica-sao-marcos",
    title: "Basílica de São Marcos",
    category: "igrejas",
    date: "Século XI (consagrada em 1094)",
    year: 1094,
    location: "Veneza, Itália",
    summary:
      "Catedral veneziana célebre por suas cinco cúpulas e milhares de metros quadrados de mosaicos dourados.",
    paragraphs: [
      "Erguida para guardar as relíquias do evangelista São Marcos, a basílica une a tradição ocidental à arte bizantina, formando uma cruz grega coroada por cúpulas revestidas de mosaicos em folha de ouro.",
      "Os mosaicos narram desde o Gênesis até Pentecostes e a vida de Cristo, lembrando que a liturgia terrestre participa do esplendor do céu.",
    ],
    context: "A catedral foi por séculos o coração cívico e espiritual de Veneza.",
    illustration: "church-san-marco",
    alt: "Ilustração de cúpula dourada e fachada basilical representando a Basílica de São Marcos",
    caption: "Ilustração inspirada na Basílica de São Marcos.",
    sourceUrl: "https://www.basilicasanmarco.it/en/",
    sources: [
      { title: "Basílica de São Marcos, Veneza", url: "https://www.basilicasanmarco.it/en/" },
    ],
  }),

  // 5. Objetos litúrgicos
  exhibit({
    id: "calice-e-patena",
    title: "Cálice e Patena",
    category: "objetos-liturgicos",
    date: "Tradição apostólica até hoje",
    year: 33,
    location: "Altars católicos em todo o mundo",
    summary:
      "Vasos sagrados usados na Missa para o vinho e o pão que se tornam o Sangue e o Corpo de Cristo.",
    paragraphs: [
      "O cálice é a taça sagrada onde se coloca o vinho com uma gota de água; a patena é o pequeno prato onde repousa a hóstia grande que será consagrada.",
      "Por conterem o Corpo e o Sangue de Cristo, são confeccionados em materiais nobres e duradouros (geralmente dourados no interior) e dedicados exclusivamente ao culto divino.",
    ],
    context: "Na celebração, após a comunhão, os vasos sagrados são purificados com respeito.",
    illustration: "chalice-paten",
    alt: "Ilustração de um cálice dourado e uma hóstia branca marcada com cruz",
    caption: "Cálice e hóstia sobre a patena.",
    sourceUrl:
      "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
    sources: [
      {
        title: "Instrução Geral do Missal Romano (§§ 327-334)",
        url: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
      },
    ],
  }),
  exhibit({
    id: "ostensorio",
    title: "Ostensório (Custódia)",
    category: "objetos-liturgicos",
    date: "Uso difundido a partir do século XIII",
    year: 1264,
    location: "Adoração Eucarística e Corpus Christi",
    summary:
      "Peça sagrada com raios dourados usada para expor a Hóstia Consagrada à adoração dos fiéis.",
    paragraphs: [
      "Do latim 'ostendere' (mostrar), o ostensório traz ao centro uma janela circular chamada lúnula, onde se coloca o Santíssimo Sacramento após a Missa para momentos de adoração e para a bênção solene.",
      "Sua forma mais conhecida irradia feixes dourados ao redor do centro, lembrando Cristo como 'Sol da Justiça' e luz do mundo.",
    ],
    context:
      "Na Adoração Eucarística, não adoramos o metal dourado, mas o próprio Jesus presente na Hóstia consagrada.",
    illustration: "monstrance",
    alt: "Ilustração de um ostensório dourado com raios ao redor da Hóstia central",
    caption: "Ilustração de ostensório eucarístico.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c1_1322-1419_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 1378-1380)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c1_1322-1419_po.html",
      },
    ],
  }),
  exhibit({
    id: "turibulo-e-naveta",
    title: "Turíbulo e Naveta",
    category: "objetos-liturgicos",
    date: "Uso litúrgico desde a Antiguidade cristã",
    year: 400,
    location: "Liturgia solene da Igreja",
    summary: "Vaso suspenso por correntes usado para queimar incenso nas celebrações solenes.",
    paragraphs: [
      "O turíbulo abriga brasas acesas sobre as quais o sacerdote coloca grãos de incenso retirados da naveta (pequeno recipiente em forma de barco). Ao balançar nas correntes, espalha fumaça perfumada.",
      "Na liturgia, a fumaça que sobe simboliza a oração dos fiéis elevando-se a Deus (Sl 141,2) e reverencia o altar, o Evangelho, o pão e o vinho, e a própria assembleia.",
    ],
    context:
      "Incensar também a assembleia lembra que cada batizado é templo vivo do Espírito Santo.",
    illustration: "thurible",
    alt: "Ilustração de um turíbulo dourado suspenso por correntes com fios de incenso",
    caption: "Turíbulo litúrgico e fumaça de incenso.",
    sourceUrl:
      "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
    sources: [
      {
        title: "Instrução Geral do Missal Romano (§§ 276-277)",
        url: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
      },
    ],
  }),

  // 6. Vestimentas religiosas
  exhibit({
    id: "casula-e-estola",
    title: "Casula e Estola",
    category: "vestimentas",
    date: "Raízes na indumentária romana antiga",
    year: 350,
    location: "Celebração da Santa Missa",
    summary:
      "As vestes próprias do sacerdote na Missa, cuja cor acompanha o tempo do ano litúrgico.",
    paragraphs: [
      "A estola é a faixa colocada sobre os ombros, sinal do ministério ordenado e do jugo suave de Cristo. Por cima dela, na Missa, o padre veste a casula, amplo manto que simboliza a caridade que tudo envolve.",
      "Suas cores falam à assembleia: branco (alegria, Páscoa, Natal), verde (Tempo Comum, esperança), roxo (Advento, Quaresma, penitência) e vermelho (Espírito Santo, mártires e Paixão).",
    ],
    context:
      "As vestes litúrgicas lembram que o ministro não age em nome próprio, mas na pessoa de Cristo.",
    illustration: "chasuble-stole",
    alt: "Ilustração de uma casula grená adornada com cruz dourada",
    caption: "Casula litúrgica com orfrés dourado.",
    sourceUrl:
      "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
    sources: [
      {
        title: "Instrução Geral do Missal Romano (§§ 337-346)",
        url: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
      },
    ],
  }),
  exhibit({
    id: "mitra-e-baculo",
    title: "Mitra e Báculo Episcopal",
    category: "vestimentas",
    date: "Tradição episcopal desde a Idade Média",
    year: 1000,
    location: "Ministério dos Bispos",
    summary: "Insígnias do bispo que recordam sua missão de ensinar a fé e pastorear o rebanho.",
    paragraphs: [
      "A mitra é o chapéu litúrgico alto com duas pontas (chamadas cornos) e duas fitas atrás, simbolizando o Antigo e o Novo Testamento que o bispo deve conhecer e ensinar.",
      "O báculo tem forma de cajado de pastor, lembrando que a autoridade episcopal não é poder mundano, mas cuidado vigilante pelas ovelhas de Cristo.",
    ],
    context: "O bispo retira a mitra durante os momentos de oração solene e na Oração Eucarística.",
    illustration: "mitre-crosier",
    alt: "Ilustração de uma mitra branca com cruz dourada ao lado de um báculo pastoral",
    caption: "Mitra e báculo, insígnias do bispo.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c3_1533-1666_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 1555-1561)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c3_1533-1666_po.html",
      },
    ],
  }),
  exhibit({
    id: "alba-e-cingulo",
    title: "Alba e Cíngulo",
    category: "vestimentas",
    date: "Tradição batismal antiga",
    year: 300,
    location: "Liturgia católica",
    summary:
      "Túnica branca que recorda a veste pura do Batismo, cingida na cintura pelo cordão chamado cíngulo.",
    paragraphs: [
      "A alba (do latim 'albus', branco) é a veste básica usada por todos os ministros ordenados e frequentemente também por acólitos e ministros instituídos. Sua cor branca remete à veste batismal e à pureza de coração.",
      "O cíngulo é o cordão que ajusta a alba à cintura, simbolizando vigilância, castidade e prontidão para servir ao Senhor.",
    ],
    context:
      "Antes de vestir os paramentos, muitos sacerdotes rezam breves orações pedindo purificação interior.",
    illustration: "alb-cincture",
    alt: "Ilustração da túnica branca (alba) ajustada por um cordão dourado (cíngulo)",
    caption: "Alba branca e cíngulo litúrgico.",
    sourceUrl:
      "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
    sources: [
      {
        title: "Instrução Geral do Missal Romano (§ 336)",
        url: "https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html",
      },
    ],
  }),

  // 7. Símbolos católicos
  exhibit({
    id: "simbolo-chi-rho",
    title: "Cristograma Chi-Rho (XP)",
    category: "simbolos",
    date: "Séculos III–IV em diante",
    year: 312,
    location: "Catacumbas e basílicas antigas",
    summary:
      "Monograma formado pelas duas primeiras letras gregas do nome de Cristo: Chi (X) e Rho (P).",
    paragraphs: [
      "Em grego, Cristo escreve-se ΧΡΙΣΤΟΣ (Christós). Ao sobrepor o X e o P, os primeiros cristãos criaram um sinal discreto e profundo que confessava Jesus como o Ungido de Deus.",
      "O Chi-Rho aparece gravado em lápides das catacumbas, altares, vestes e moedas cristãs desde a antiguidade.",
    ],
    context:
      "Apesar de parecerem as letras X e P do nosso alfabeto, trata-se das letras gregas X (kh) e P (r).",
    illustration: "chi-rho",
    alt: "Ilustração do cristograma Chi-Rho formado pelas letras gregas X e P sobrepostas",
    caption: "Monograma Chi-Rho (Christós).",
    sourceUrl:
      "https://www.catacombeditalia.va/content/archeologiasacra/en/christian-catacombs.html",
    sources: [
      {
        title: "Símbolos cristãos antigos — Arqueologia Sacra",
        url: "https://www.catacombeditalia.va/content/archeologiasacra/en/christian-catacombs.html",
      },
    ],
  }),
  exhibit({
    id: "simbolo-ichthys",
    title: "Ichthys (O Peixe Cristão)",
    category: "simbolos",
    date: "Séculos I–III",
    year: 150,
    location: "Roma e mundo mediterrâneo antigo",
    summary:
      "Emblema primitivo em forma de peixe cujas letras gregas resumem uma profissão de fé em Jesus.",
    paragraphs: [
      "A palavra grega para peixe é ΙΧΘΥΣ (Ichthys). Os primeiros cristãos usaram-na como acróstico: Iesous Christós Theou Yios Soter — 'Jesus Cristo, Filho de Deus, Salvador'.",
      "Além do acróstico, o peixe lembrava a multiplicação dos pães e peixes, as refeições de Jesus ressuscitado com os discípulos e as águas do Batismo.",
    ],
    context: "Foi um dos símbolos mais queridos dos primeiros séculos para reconhecer a fé cristã.",
    illustration: "ichthys",
    alt: "Ilustração do símbolo do peixe cristão com a palavra grega ΙΧΘΥΣ",
    caption: "Ichthys: Jesus Cristo, Filho de Deus, Salvador.",
    sourceUrl:
      "https://www.catacombeditalia.va/content/archeologiasacra/en/christian-catacombs.html",
    sources: [
      {
        title: "Catacumbas cristãs — Pontifícia Comissão de Arqueologia Sacra",
        url: "https://www.catacombeditalia.va/content/archeologiasacra/en/christian-catacombs.html",
      },
    ],
  }),
  exhibit({
    id: "simbolo-alfa-omega",
    title: "Alfa e Ômega (Α e Ω)",
    category: "simbolos",
    date: "Século I (Apocalipse)",
    year: 95,
    location: "Círio Pascal e altares cristãos",
    summary:
      "Primeira e última letras do alfabeto grego, indicando que Cristo é o princípio e o fim de tudo.",
    paragraphs: [
      "No livro do Apocalipse, Deus declara: 'Eu sou o Alfa e o Ômega, o primeiro e o último, o princípio e o fim' (Ap 22,13). A Igreja grava essas letras na cruz do Círio Pascal na Vigília da Páscoa.",
      "Ao contemplar o Alfa e o Ômega junto ao ano em curso no Círio, lembramos que todo o tempo e toda a história pertencem a Cristo.",
    ],
    context:
      "Muito presente em altares, evangeliários e no Círio Pascal aceso durante todo o Tempo Pascal e nos batismos.",
    illustration: "alpha-omega",
    alt: "Ilustração da cruz acompanhada das letras gregas Alfa e Ômega",
    caption: "Alfa e Ômega com a cruz de Cristo.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c1_198-421_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 280, 1168)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c1_198-421_po.html",
      },
    ],
  }),

  // 8. Relíquias
  exhibit({
    id: "santo-sudario",
    title: "O Santo Sudário de Turim",
    category: "reliquias",
    date: "Documentado na França em 1353; em Turim desde 1578",
    year: 1578,
    location: "Catedral de São João Batista, Turim, Itália",
    summary:
      "Tecido de linho venerado como sinal da Paixão de Cristo, guardado e exposto periodicamente em Turim.",
    paragraphs: [
      "O Sudário apresenta a marca frontal e dorsal de um homem flagelado e crucificado, coincidindo com os detalhes narrados nos Evangelhos sobre a Paixão de Jesus.",
      "A Igreja não impõe como dogma sua autenticidade histórica ou científica, mas o venera há séculos como um extraordinário ícone silencioso que ajuda os fiéis a meditar a morte e a ressurreição do Senhor.",
    ],
    context:
      "Os papas têm chamado o Sudário de 'espelho do Evangelho': a fé católica funda-se na Palavra e na Ressurreição, não apenas em exames materiais.",
    illustration: "shroud-turin",
    alt: "Ilustração reverente de um tecido de linho com a silhueta serena do rosto e corpo",
    caption: "Ilustração simbólica do Santo Sudário.",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/speeches/2010/may/documents/hf_ben-xvi_spe_20100502_meditazione-torino.html",
    sources: [
      {
        title: "Meditação de Bento XVI diante do Santo Sudário (2010)",
        url: "https://www.vatican.va/content/benedict-xvi/pt/speeches/2010/may/documents/hf_ben-xvi_spe_20100502_meditazione-torino.html",
      },
    ],
  }),
  exhibit({
    id: "reliquias-vera-cruz",
    title: "Relíquias da Vera Cruz",
    category: "reliquias",
    date: "Descoberta tradicional no século IV (Santa Helena)",
    year: 326,
    location: "Jerusalém / Basílica da Santa Cruz, Roma",
    summary:
      "Fragmentos venerados da madeira da Cruz de Cristo, ligados ao testemunho antigo de Santa Helena.",
    paragraphs: [
      "No século IV, Santa Helena, mãe do imperador Constantino, peregrinou a Jerusalém, onde a tradição cristã reconheceu o madeiro da Cruz no Calvário. Pequenos fragmentos foram levados a Roma e a igrejas de todo o mundo.",
      "Na teologia católica, venerar relíquias (de primeira classe, ligadas a Cristo ou aos santos) não é superstição: é honrar o amor de Deus que atuou na história real e concreta.",
    ],
    context:
      "O culto às relíquias dirige nossa oração a Deus, nunca atribuindo poder mágico a um fragmento material.",
    illustration: "true-cross",
    alt: "Ilustração de um relicário em forma de cruz emoldurado em ouro",
    caption: "Ilustração simbólica de relicário da Santa Cruz.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c4_1667-1690_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§ 1674)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p2s2c4_1667-1690_po.html",
      },
    ],
  }),
  exhibit({
    id: "catedra-sao-pedro",
    title: "Cátedra de São Pedro",
    category: "reliquias",
    date: "Tradição dos primeiros séculos; relicário de Bernini (1666)",
    year: 1666,
    location: "Basílica de São Pedro, Vaticano",
    summary:
      "Antiga cadeira de madeira conservada no altar-mor da Basílica de São Pedro como sinal da missão de ensinar.",
    paragraphs: [
      "No fundo da nave central da Basílica de São Pedro, o grande monumento em bronze dourado de Gian Lorenzo Bernini guarda uma antiga cátedra (cadeira) de carvalho revestida de marfim, ligada pela tradição ao ensino do Apóstolo em Roma.",
      "A Igreja celebra em 22 de fevereiro a Festa da Cátedra de São Pedro, agradecendo a Deus pelo ministério de unidade e ensino confiado a Pedro e seus sucessores.",
    ],
    context:
      "A palavra 'cátedra' (de onde vem 'catedral') significa assento do mestre; simboliza a autoridade pastoral de servir na verdade.",
    illustration: "cathedra-peter",
    alt: "Ilustração simbólica das chaves e cruz da Cátedra de São Pedro",
    caption: "Símbolo do ensino pastoral na Cátedra de São Pedro.",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/audiences/2006/documents/hf_ben-xvi_aud_20060222.html",
    sources: [
      {
        title: "Audiência de Bento XVI sobre a Cátedra de São Pedro",
        url: "https://www.vatican.va/content/benedict-xvi/pt/audiences/2006/documents/hf_ben-xvi_aud_20060222.html",
      },
    ],
  }),

  // 9. Ordens religiosas
  exhibit({
    id: "ordem-beneditina",
    title: "Ordem de São Bento (Beneditinos)",
    category: "ordens",
    date: "Fundada c. 529",
    year: 529,
    location: "Montecassino, Itália",
    summary: "Pioneira da vida monástica ocidental sob o lema 'Ora et labora' (Reza e trabalha).",
    paragraphs: [
      "São Bento de Núrsia escreveu uma Regra sábia e equilibrada que unia a oração dos salmos (Liturgia das Horas), a leitura orante da Bíblia (Lectio Divina) e o trabalho manual diário.",
      "Durante os séculos difíceis após a queda do Império Romano, os mosteiros beneditinos preservaram manuscritos bíblicos e clássicos, acolheram peregrinos e evangelizaram a Europa.",
    ],
    context:
      "A Cruz e a Medalha de São Bento lembram a força da fé e o lema beneditino 'Pax' (Paz).",
    illustration: "order-benedictine",
    alt: "Ilustração da medalha e cruz de São Bento com a inscrição PAX",
    caption: "Símbolo da tradição beneditina ('Ora et labora').",
    sourceUrl:
      "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080409.html",
    sources: [
      {
        title: "Catequese de Bento XVI sobre São Bento de Núrsia",
        url: "https://www.vatican.va/content/benedict-xvi/pt/audiences/2008/documents/hf_ben-xvi_aud_20080409.html",
      },
    ],
  }),
  exhibit({
    id: "ordem-franciscana",
    title: "Ordem dos Frades Menores (Franciscanos)",
    category: "ordens",
    date: "Regra aprovada em 1209 / 1223",
    year: 1209,
    location: "Assis, Itália",
    summary:
      "Família religiosa mendicante dedicada à fraternidade, aos pobres e à pregação itinerante do Evangelho.",
    paragraphs: [
      "Ao contrário dos mosteiros isolados, os franciscanos surgiram como 'irmãos menores' que viviam no meio do povo, nas cidades e aldeias, sustentando-se pelo trabalho e pela partilha e servindo os doentes e marginalizados.",
      "Junto a Santa Clara de Assis (Clarissas) e à Ordem Franciscana Secular, formam uma das maiores famílias espirituais da Igreja, presentes também no Brasil desde o início da evangelização.",
    ],
    context:
      "A cruz em forma de T (Tau), citada em Ezequiel 9,4, é o sinal distintivo usado pelos franciscanos.",
    illustration: "order-franciscan",
    alt: "Ilustração da cruz Tau franciscana em grená com detalhe dourado",
    caption: "O Tau franciscano.",
    sourceUrl: "https://www.ofm.org/en/history.html",
    sources: [
      { title: "História da Ordem dos Frades Menores", url: "https://www.ofm.org/en/history.html" },
    ],
  }),
  exhibit({
    id: "companhia-de-jesus",
    title: "Companhia de Jesus (Jesuítas)",
    category: "ordens",
    date: "Aprovada em 1540",
    year: 1540,
    location: "Roma (fundada por Santo Inácio de Loyola)",
    summary:
      "Ordem missionária e educativa famosa pelos Exercícios Espirituais e pela presença no Brasil desde 1549.",
    paragraphs: [
      "Fundada por Santo Inácio de Loyola e seus companheiros, entre eles São Francisco Xavier, a Companhia de Jesus assumiu o lema 'Ad maiorem Dei gloriam' (Para a maior glória de Deus), unindo vida espiritual profunda e ação missionária.",
      "No Brasil colonial, padres jesuítas como Manoel da Nóbrega e São José de Anchieta fundaram colégios, aprenderam a língua tupi e atuaram na evangelização e educação.",
    ],
    context: "O monograma IHS significa as três primeiras letras de Jesus (IHΣOYΣ) em grego.",
    illustration: "order-jesuit",
    alt: "Ilustração do emblema IHS com cruz dourada sobre círculo grená, símbolo da Companhia de Jesus",
    caption: "Monograma IHS da Companhia de Jesus.",
    sourceUrl: "https://www.jesuits.global/about-us/history/",
    sources: [
      {
        title: "História da Companhia de Jesus",
        url: "https://www.jesuits.global/about-us/history/",
      },
    ],
  }),

  // 10. Arte sacra
  exhibit({
    id: "teto-capela-sistina",
    title: "Afrescos da Capela Sistina",
    category: "arte-sacra",
    date: "1508 – 1512 (teto) e 1536 – 1541 (Juízo Final)",
    year: 1512,
    location: "Museus do Vaticano",
    summary:
      "Obra monumental de Michelangelo que narra em afrescos a Criação, a Queda, os profetas e o Juízo Final.",
    paragraphs: [
      "Pintado por Michelangelo Buonarroti sob encomenda do Papa Júlio II, o teto da Capela Sistina apresenta nove cenas do livro do Gênesis — entre elas a célebre Criação de Adão — cercadas por profetas e sibilas.",
      "Décadas depois, o artista pintou o Juízo Final na parede do altar. Hoje a capela acolhe o conclave para a eleição de cada novo Papa.",
    ],
    context:
      "Na arte sacra, cenas bíblicas pintadas traduzem a teologia da criação e da redenção em beleza visível.",
    illustration: "sistine-ceiling",
    alt: "Ilustração estilizada das mãos que se aproximam na Criação de Adão em moldura dourada",
    caption: "Ilustração evocando a Criação de Adão na Capela Sistina.",
    sourceUrl:
      "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina.html",
    sources: [
      {
        title: "Capela Sistina — Museus do Vaticano",
        url: "https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/cappella-sistina.html",
      },
    ],
  }),
  exhibit({
    id: "cristo-pantocrator",
    title: "Cristo Pantocrator (Ícone Bizantino)",
    category: "arte-sacra",
    date: "Tradição iconográfica desde o século VI",
    year: 550,
    location: "Igrejas do Oriente e do Ocidente",
    summary:
      "Ícone de Cristo 'Todo-Poderoso' que abençoa com a mão direita e sustenta o Evangelho aberto na esquerda.",
    paragraphs: [
      "A palavra grega Pantocrator significa 'Senhor de todas as coisas'. Nos ícones antigos, como o do Mosteiro de Santa Catarina no Sinai, a auréola de Jesus traz inscrita uma cruz com as letras gregas Ο ΩΝ ('Aquele que é', o nome de Deus em Ex 3,14).",
      "Os dois dedos estendidos da mão que abençoa recordam as duas naturezas de Cristo — verdadeiro Deus e verdadeiro homem — e o livro mostra sua Palavra viva.",
    ],
    context:
      "Na tradição cristã, um ícone é uma janela de oração, escrito em cores e ouro segundo regras teológicas precisas.",
    illustration: "pantocrator",
    alt: "Ilustração iconográfica de auréola crucífera em moldura dourada representando Cristo Pantocrator",
    caption: "Emblema iconográfico do Cristo Pantocrator.",
    sourceUrl: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c2_422-682_po.html",
    sources: [
      {
        title: "Catecismo da Igreja Católica (§§ 476-477, 1159-1162)",
        url: "https://www.vatican.va/archive/cathechism_po/index_new/p1s2c2_422-682_po.html",
      },
    ],
  }),
  exhibit({
    id: "a-ultima-ceia",
    title: "A Última Ceia (Cenáculo de Milão)",
    category: "arte-sacra",
    date: "1495 – 1498",
    year: 1498,
    location: "Convento de Santa Maria delle Grazie, Milão, Itália",
    summary:
      "Pintura mural de Leonardo da Vinci retratando o instante em que Jesus anuncia a traição e institui a Ceia.",
    paragraphs: [
      "Leonardo organizou os doze Apóstolos em quatro grupos de três ao redor de Cristo sereno ao centro, capturando a emoção humana diante das palavras: 'Um de vós me trairá' (Mt 26,21).",
      "A obra fica no refeitório dos frades dominicanos, convidando quem se senta à mesa a recordar a entrega de Jesus na Eucaristia.",
    ],
    context:
      "A pintura é uma leitura artística do século XV com trajes e arquitetura renascentistas para tornar o Evangelho próximo ao espectador.",
    illustration: "last-supper",
    alt: "Ilustração estilizada da mesa da Última Ceia com Cristo ao centro e os discípulos",
    caption: "Ilustração composicional inspirada na Última Ceia.",
    sourceUrl: "https://cenacolovinciano.org/en/",
    sources: [
      { title: "Museo del Cenacolo Vinciano, Milão", url: "https://cenacolovinciano.org/en/" },
    ],
  }),
];
