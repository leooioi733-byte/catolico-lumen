import type { LessonUnit } from "./lesson-types";

// Unidades 61 a 76 (16 unidades de 3 lições cada = 48 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_4_UNITS: LessonUnit[] = [
  {
    id: "joao-batista",
    title: "São João Batista, o Precursor",
    emoji: "🏜️",
    lessons: [
      {
        id: "precursor-deserto",
        title: "Preparai o caminho do Senhor",
        emoji: "🗣️",
        xp: 20,
        teachings: [
          {
            title: "Maior entre os nascidos de mulher",
            text: "Filho de Zacarias e Isabel, santificado ainda no ventre na Visitação de Maria, João Batista encerra a linha dos profetas do Antigo Testamento e aponta diretamente para Cristo presente.",
            example: "Rezar no Advento pedindo o coração simples e direto de São João Batista.",
            source: "Lc 1,41; Mt 11,11 · CIC 523, 717-720",
          },
          {
            title: "Conversão concreta do coração",
            text: "No Jordão, João batizava para o arrependimento e respondia a soldados, cobradores de impostos e multidões com passos concretos: repartir quem tem duas túnicas, não extorquir, ser justo.",
            example:
              "Traduzir o arrependimento em uma atitude justa concreta já no ambiente de trabalho hoje.",
            source: "Lc 3,7-14 · CIC 535, 1430",
          },
          {
            title: "Ele deve crescer e eu diminuir",
            text: "João nunca quis reter os discípulos para si mesmo: ao ver Jesus passar, disse aos seus seguidores: 'Eis o Cordeiro de Deus!', alegrando-se como amigo do Noivo.",
            example:
              "Ao servir na catequese ou pastoral, apontar sempre para Jesus em vez de buscar aplauso pessoal.",
            source: "Jo 1,29; 3,29-30 · CIC 523, 719",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a frase célebre com que João Batista apontou Jesus aos discípulos no rio Jordão?",
            options: [
              "Construam aqui três tendas",
              "Eis o Cordeiro de Deus, aquele que tira o pecado do mundo!",
              "Sigam apenas a mim no deserto",
              "Esperem mais quinhentos anos",
            ],
            answer: 1,
            explanation:
              "João Batista inaugura o reconhecimento de Jesus como Cordeiro pascal redentor (Jo 1,29; CIC 523, 608).",
          },
          {
            prompt: "Como João Batista explicou sua relação com Jesus aos próprios discípulos?",
            options: [
              "Importa que Ele cresça e que eu diminua",
              "Eu sou o Messias prometido",
              "Nossa competição apenas começou",
              "Não escutem o que Jesus ensina",
            ],
            answer: 0,
            explanation:
              "Com humildade exemplar, João se alegra como amigo do Esposo conduzindo todos a Cristo (Jo 3,29-30; CIC 719).",
          },
          {
            prompt: "Que frutos de conversão João pediu às pessoas no Jordão?",
            options: [
              "Apenas mudar de roupa",
              "Partilha com quem tem necessidade, justiça e honestidade no próprio ofício",
              "Abandonar a família para sempre",
              "Pagar impostos duplos",
            ],
            answer: 1,
            explanation:
              "O batismo de penitência de João preparava o coração para o Reino por meio da justiça concreta e da esmola (Lc 3,10-14; CIC 535).",
          },
        ],
      },
      {
        id: "joao-martir-verdade",
        title: "O martírio pela verdade",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Falar a verdade com coragem diante dos poderosos",
            text: "João Batista não mudou a moral de Deus para agradar ao rei Herodes Antipas: alertou com clareza que a união ilícita com Herodíades não era lícita.",
            example:
              "Defender o bem com firmeza e respeito mesmo diante de quem tem influência ou poder.",
            source: "Mc 6,17-20 · CIC 1615, 2473",
          },
          {
            title: "Dúvida humilde que se dirige a Jesus",
            text: "Preso na fortaleza de Maquero, João mandou perguntar a Jesus: 'És tu aquele que há de vir?'. Jesus respondeu mostrando os sinais do Reino: cegos veem, pobres recebem a boa nova.",
            example:
              "Levar nossas dúvidas sinceras diretamente a Jesus na oração e nos Evangelhos.",
            source: "Mt 11,2-6 · CIC 548, 2734",
          },
          {
            title: "Precursor até na morte",
            text: "Ao entregar a vida pela verdade e justiça, João antecedeu o próprio sacrifício de Cristo como testemunha fiel da Lei nova.",
            example:
              "Celebrar o nascimento (24 de junho) e o martírio (29 de agosto) de São João Batista pedindo retidão.",
            source: "Mc 6,21-29 · CIC 523, 2473",
          },
        ],
        questions: [
          {
            prompt: "Por qual razão João Batista foi preso e morto por Herodes?",
            options: [
              "Por liderar uma rebelião armada",
              "Por testemunhar a verdade moral sobre a aliança matrimonial diante do rei",
              "Por recusar pagar impostos",
              "Por tentar fugir para Roma",
            ],
            answer: 1,
            explanation:
              "João pagou com a vida a fidelidade à verdade da lei de Deus sobre o matrimônio diante de Herodes (Mc 6,18; CIC 1615, 2473).",
          },
          {
            prompt: "Como Jesus respondeu aos discípulos enviados por João da prisão?",
            options: [
              "Não respondeu nada",
              "Mostrou os sinais messiânicos realizados: cegos veem, doentes são curados e pobres evangelizados",
              "Disse que não conhecia João",
              "Mandou um exército libertá-lo",
            ],
            answer: 1,
            explanation:
              "Jesus remete às profecias de Isaías cumpridas em suas obras de misericórdia (Mt 11,4-5; CIC 548).",
          },
          {
            prompt: "O que significa que o batismo de João era distinto do Batismo cristão?",
            options: [
              "O batismo de João era rito preparatório de penitência; Cristo batiza no Espírito Santo para vida nova",
              "Ambos davam o sacramento da Crisma",
              "João não usava água",
              "Não havia diferença alguma",
            ],
            answer: 0,
            explanation:
              "João mesmo anunciou que Jesus batizaria no Espírito Santo e no fogo, inaugurando o sacramento da regeneração (Mt 3,11; CIC 1223).",
          },
        ],
      },
      {
        id: "benedictus-zacarias",
        title: "O Cântico de Zacarias (Benedictus)",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "Purificação pelo silêncio até louvar",
            text: "Zacarias inicialmente duvidou do anúncio do anjo e ficou mudo por nove meses. Ao nascer João, sua língua soltou-se não para reclamar, mas para bendizer a Deus.",
            example:
              "Usar momentos de silêncio e espera para amadurecer a confiança em Deus em vez de reclamar.",
            source: "Lc 1,20.64 · CIC 2619, 2639",
          },
          {
            title: "Sol nascente que vem do alto",
            text: "No Benedictus, Zacarias exalta a ternura misericordiosa de Deus que nos visita como o Sol nascente, iluminando os que estão nas trevas e guiando nossos passos no caminho da paz.",
            example:
              "Rezar o Benedictus ao iniciar a manhã pedindo paz para a família e para o mundo.",
            source: "Lc 1,68-79 · CIC 717, 1174",
          },
          {
            title: "Oração diária da Igreja nas Laudes",
            text: "Todos os dias pela manhã, a Igreja inteira reza o Cântico de Zacarias nas Laudes, celebrando a vitória da luz de Cristo sobre a noite.",
            example: "Acolher cada amanhecer como visita nova da misericórdia de Deus.",
            source: "Lc 1,78-79 · CIC 1174, 2619",
          },
        ],
        questions: [
          {
            prompt: "Qual é o tema central do Cântico de Zacarias (Benedictus) em Lucas 1?",
            options: [
              "A derrota dos profetas antigos",
              "O louvor a Deus fiel à aliança que visita e redime seu povo como Sol nascente de paz",
              "Regras sobre construções",
              "Queixas pela demora do Messias",
            ],
            answer: 1,
            explanation:
              "O Benedictus bendiz a fidelidade misericordiosa de Deus que cumpre as promessas feitas a Abraão e Davi (Lc 1,68-79; CIC 717).",
          },
          {
            prompt: "Em qual hora da Liturgia das Horas a Igreja reza diariamente o Benedictus?",
            options: [
              "Nas Laudes (oração da manhã)",
              "Somente na Sexta-feira Santa",
              "Apenas uma vez por ano no Natal",
              "Nunca na liturgia",
            ],
            answer: 0,
            explanation:
              "Assim como o Magnificat é rezado nas Vésperas, o Benedictus é o cântico evangélico das Laudes da manhã (CIC 1174, 2619).",
          },
          {
            prompt: "Quem é 'o Sol nascente que nos vem visitar' cantado por Zacarias?",
            options: [
              "O próprio Jesus Cristo, Luz do mundo",
              "O imperador romano",
              "O profeta Jonas",
              "O astro solar físico",
            ],
            answer: 0,
            explanation:
              "Cristo é a Luz que dissipa as trevas da morte e dirige nossos passos no caminho da paz (Lc 1,78-79; CIC 717).",
          },
        ],
      },
    ],
  },
  {
    id: "evangelho-mateus",
    title: "O Evangelho Segundo São Mateus",
    emoji: "📖",
    lessons: [
      {
        id: "mateus-novo-moises",
        title: "Jesus, o Emanuel e o Novo Moisés",
        emoji: "⛰️",
        xp: 20,
        teachings: [
          {
            title: "De publicano a apóstolo e evangelista",
            text: "Mateus (também chamado Levi) trabalhava na coletoria de impostos quando Jesus o chamou: 'Segue-me!'. Ele deixou tudo, deu um banquete com Jesus e escreveu o primeiro Evangelho do cânon.",
            example:
              "Responder prontamente ao convite de Jesus, convidando também nossos amigos para conhecê-lo.",
            source: "Mt 9,9-13 · CIC 120, 545",
          },
          {
            title: "Cinco grandes discursos sobre o Reino",
            text: "Mateus organiza os ensinamentos de Jesus em cinco grandes discursos — começando no Sermão da Montanha — mostrando Cristo como o Novo Moisés que traz a plenitude da Lei.",
            example:
              "Ler os capítulos 5 a 7 de Mateus devagar para conhecer o programa de vida do discípulo.",
            source: "Mt 5,1; 28,20 · CIC 578, 1965",
          },
          {
            title: "Do começo ao fim: Deus conosco",
            text: "Mateus abre proclamando o Emanuel ('Deus conosco') e fecha com a promessa de Jesus ressuscitado: 'Eis que estou convosco todos os dias até o fim dos tempos'.",
            example:
              "Atravessar dias solitários lembrando da promessa fiel de Jesus: 'Estou convosco todos os dias'.",
            source: "Mt 1,23; 28,20 · CIC 450, 730",
          },
        ],
        questions: [
          {
            prompt: "Qual era a ocupação de Mateus antes de ser chamado por Jesus?",
            options: [
              "Carpinteiro em Nazaré",
              "Coletor de impostos (publicano) em Cafarnaum",
              "Sacerdote do templo",
              "Soldado romano",
            ],
            answer: 1,
            explanation:
              "Jesus chamou o publicano Mateus, mostrando que a misericórdia convida pecadores a uma vida nova (Mt 9,9; CIC 545).",
          },
          {
            prompt: "Que promessa encerra o Evangelho de São Mateus em 28,20?",
            options: [
              "Que Jesus só voltaria mil anos depois sem estar presente",
              "'Eis que estou convosco todos os dias, até o fim dos tempos'",
              "Que os discípulos não precisariam pregar",
              "Que Pedro ficaria sozinho em Jerusalém",
            ],
            answer: 1,
            explanation:
              "O Emanuel do início de Mateus confirma no final sua presença contínua junto à Igreja em missão (CIC 730, 849).",
          },
          {
            prompt: "Por que Mateus destaca tantas citações do Antigo Testamento em seu Evangelho?",
            options: [
              "Para mostrar que Jesus cumpre plenamente as promessas e profecias feitas a Israel",
              "Para substituir o Evangelho pelo Êxodo",
              "Para esconder a Ressurreição",
              "Para ensinar apenas história antiga",
            ],
            answer: 0,
            explanation:
              "Escrevendo especialmente para leitores de origem judaica, Mateus mostra Jesus como o Messias prometido que cumpre as Escrituras (CIC 128, 577).",
          },
        ],
      },
      {
        id: "mateus-igreja-pedro",
        title: "Sobre esta pedra edificarei a minha Igreja",
        emoji: "🗝️",
        xp: 20,
        teachings: [
          {
            title: "Tu és o Cristo, Filho do Deus vivo",
            text: "Em Cesareia de Filipe, Simão Pedro professou a fé em Jesus como Messias e Filho de Deus. Jesus declarou que essa revelação veio diretamente do Pai do céu.",
            example:
              "Renovar com convicção pessoal a resposta de Pedro: 'Senhor, tu és o Cristo, o Filho do Deus vivo!'.",
            source: "Mt 16,13-17 · CIC 440, 552",
          },
          {
            title: "A rocha e as chaves do Reino",
            text: "Jesus deu a Simão o novo nome de Pedro (Cefas = Pedra), prometendo edificar sobre ele a sua Igreja e confiar-lhe as chaves do Reino, poder continuado nos bispos de Roma, os Papas.",
            example:
              "Rezar pelas intenções do Papa, sinal visível de unidade da Igreja católica no mundo.",
            source: "Mt 16,18-19 · CIC 552-553, 881",
          },
          {
            title: "Onde dois ou três estão reunidos em meu nome",
            text: "No discurso comunitário de Mateus 18, Jesus garante sua presença na oração em comum e ensina o perdão contínuo e a correção fraterna dentro da Igreja.",
            example: "Valorizar a oração em conjunto com a família ou pequeno grupo paroquial.",
            source: "Mt 18,15-22 · CIC 1348, 1444",
          },
        ],
        questions: [
          {
            prompt:
              "Qual evangelista traz a promessa explícita de Jesus a Pedro sobre 'a pedra e as chaves do Reino'?",
            options: [
              "São Mateus (capítulo 16)",
              "São Marcos",
              "O livro do Apocalipse",
              "A Carta a Filemom",
            ],
            answer: 0,
            explanation:
              "Mateus 16,16-19 registra a profissão de fé de Pedro e a promessa de Cristo sobre a Igreja e as chaves do Reino (CIC 552-553).",
          },
          {
            prompt:
              "O que significa a autoridade de 'ligar e desligar' confiada por Cristo a Pedro e aos Apóstolos?",
            options: [
              "Apenas amarrar barcos no lago",
              "Poder de absolver pecados, pronunciar juízos doutrinais e tomar decisões disciplinares na Igreja",
              "Controlar leis civis do império",
              "Fechar as portas do templo aos gentios",
            ],
            answer: 1,
            explanation:
              "O poder das chaves implica a autoridade pastoral de governar a casa de Deus e reconciliar os pecadores com Deus e a Igreja (CIC 553, 1444).",
          },
          {
            prompt: "De onde Pedro recebeu a luz para confessar que Jesus é o Filho de Deus vivo?",
            options: [
              "De rumores da multidão",
              "Da revelação graciosa do Pai que está nos céus",
              "De cálculos humanos apenas",
              "Dos fariseus",
            ],
            answer: 1,
            explanation:
              "A fé verdadeira é dom sobrenatural revelado pelo Pai no Espírito Santo (Mt 16,17; CIC 153, 442).",
          },
        ],
      },
      {
        id: "mateus-missao-universal",
        title: "Ide e fazei discípulos de todas as nações",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "Os magos e a abertura a todos os povos",
            text: "Logo na infância de Jesus, os magos vindos do Oriente mostram que a luz de Belém atrai todas as nações, não só um pequeno grupo.",
            example: "Rezar pelas missões em países onde poucos conhecem o Evangelho.",
            source: "Mt 2,1-12 · CIC 528",
          },
          {
            title: "O mandato missionário batismal",
            text: "Na Galileia, o Ressuscitado envia os Onze: fazer discípulos de todas as nações, batizando em nome do Pai e do Filho e do Espírito Santo, e ensinando a guardar tudo o que ordenou.",
            example: "Dar testemunho claro da fé cristã na própria família e círculo de amigos.",
            source: "Mt 28,18-20 · CIC 849, 1223",
          },
          {
            title: "Misericórdia como critério do Reino",
            text: "Antes da Paixão, Mateus 25 mostra o critério do juízo final: alimentar, acolher, vestir e visitar os pequeninos nos quais Cristo se oculta.",
            example: "Ver o rosto de Jesus em quem pede ajuda perto de nossa casa ou paróquia.",
            source: "Mt 25,31-46 · CIC 678, 2447",
          },
        ],
        questions: [
          {
            prompt: "Qual fórmula sacramental está presente no mandato final de Mateus 28,19?",
            options: [
              "Batizar em nome do Pai, e do Filho, e do Espírito Santo",
              "Apenas ungir com cinzas",
              "Construir uma sinagoga em cada vila",
              "Guardar silêncio sobre a Ressurreição",
            ],
            answer: 0,
            explanation:
              "Cristo confiou aos Apóstolos a missão universal e a fórmula trinitária do Batismo cristão (Mt 28,19; CIC 232, 1223).",
          },
          {
            prompt: "Que gesto dos Magos em Mateus 2 antecipa o alcance universal do Evangelho?",
            options: [
              "Sábios de nações pagãs vêm adorar o Menino Jesus guiados pela estrela",
              "Eles voltaram sem ver o menino",
              "Pediram segredo absoluto",
              "Entregaram armas a Herodes",
            ],
            answer: 0,
            explanation:
              "A adoração dos Magos anuncia que as nações pagãs são chamadas à salvação em Cristo (CIC 528).",
          },
          {
            prompt: "O que une o anúncio do Evangelho ao cuidado dos pobres em São Mateus?",
            options: [
              "Cristo ordena ensinar tudo o que mandou e identifica consigo os pequeninos necessitados",
              "São temas separados sem relação",
              "A caridade só começou depois do século V",
              "Os pobres não podem ser discípulos",
            ],
            answer: 0,
            explanation:
              "A fé trinitária de Mateus 28 caminha inseparavelmente com a caridade concreta de Mateus 25 (CIC 849, 2447).",
          },
        ],
      },
    ],
  },
  {
    id: "evangelho-marcos",
    title: "O Evangelho Segundo São Marcos",
    emoji: "🦁",
    lessons: [
      {
        id: "marcos-ritmo-acao",
        title: "Marcos: Jesus em ação e compaixão",
        emoji: "⚡",
        xp: 20,
        teachings: [
          {
            title: "O Evangelho mais breve e direto, ligado a Pedro",
            text: "Discípulo e intérprete de São Pedro, Marcos escreveu o Evangelho mais curto e dinâmico, mostrando desde a primeira linha: 'Princípio do Evangelho de Jesus Cristo, Filho de Deus'.",
            example:
              "Ler o Evangelho de Marcos inteiro em alguns dias para ter uma visão viva dos passos de Jesus.",
            source: "Mc 1,1 · CIC 120, 125",
          },
          {
            title: "Jesus toca, cura e se compadece",
            text: "Marcos registra muitos detalhes humanos de Jesus: seu olhar de amor ao jovem rico, sua indignação diante da dureza de coração e seu toque compassivo no leproso.",
            example:
              "Imitar a atenção concreta de Jesus olhando nos olhos de quem conversa conosco.",
            source: "Mc 1,40-42; 10,21 · CIC 470, 547",
          },
          {
            title: "Rezar de madrugada na solidão",
            text: "Apesar das multidões que o procuravam, Jesus levantava-se de madrugada para um lugar deserto a fim de orar em intimidade com o Pai.",
            example: "Não deixar a agenda cheia roubar o tempo diário de silêncio com Deus.",
            source: "Mc 1,35 · CIC 2602",
          },
        ],
        questions: [
          {
            prompt:
              "Com a pregação de qual apóstolo o Evangelho de São Marcos está tradicionalmente ligado?",
            options: [
              "São Pedro, de quem Marcos foi discípulo e intérprete",
              "São Judas Tadeu",
              "São Matias apenas",
              "São Lucas",
            ],
            answer: 0,
            explanation:
              "A Tradição apostólica atesta que Marcos recolheu fielmente a pregação viva de São Pedro em Roma (CIC 120, 125).",
          },
          {
            prompt: "O que Jesus fazia de madrugada antes de sair pelas aldeias em Marcos 1,35?",
            options: [
              "Retirava-se a um lugar deserto para orar ao Pai",
              "Escrevia decretos civis",
              "Dormia até o entardecer",
              "Evitava falar com os discípulos",
            ],
            answer: 0,
            explanation:
              "Os momentos intensos de missão de Jesus sempre brotavam de sua oração filial no silêncio com o Pai (CIC 2602).",
          },
          {
            prompt: "Que traço marcante Marcos destaca nos gestos de Jesus?",
            options: [
              "Distância fria das pessoas doentes",
              "Compaixão humana concreta: toca o leproso, abraça crianças e olha com amor",
              "Desprezo pelas multidões famintas",
              "Discursos longos sem milagres",
            ],
            answer: 1,
            explanation:
              "Marcos preserva traços vivos e humanos do coração compassivo de Jesus diante da dor humana (CIC 470, 547).",
          },
        ],
      },
      {
        id: "marcos-cruz-centuriao",
        title: "O segredo messiânico e a confissão aos pés da Cruz",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Por que Jesus pedia silêncio antes da Cruz",
            text: "Em Marcos, Jesus muitas vezes pede que não o proclamem como Messias político antes da hora, pois muitos esperavam um conquistador guerreiro e só na Cruz se entende quem Ele é.",
            example:
              "Não buscar em Deus apenas sucesso terreno fácil; aprender o caminho humilde da Cruz.",
            source: "Mc 8,29-33 · CIC 540, 554",
          },
          {
            title: "Tomar a própria cruz e servir",
            text: "Jesus ensina com clareza: 'O Filho do Homem não veio para ser servido, mas para servir e dar a sua vida'. O primeiro lugar no Reino pertence a quem serve a todos.",
            example:
              "Trocar disputas por destaque na comunidade pela disposição discreta de ajudar.",
            source: "Mc 8,34; 10,43-45 · CIC 618, 1551",
          },
          {
            title: "Verdadeiramente este homem era Filho de Deus!",
            text: "No fim de Marcos, nenhum discípulo ainda compreendera tudo — é um centurião romano, olhando Jesus morrer na Cruz, quem faz a profissão plena de fé: 'Verdadeiramente este homem era Filho de Deus!'.",
            example:
              "Reconhecer na entrega silenciosa de Cristo na Cruz a prova maior de sua divindade e amor.",
            source: "Mc 15,39 · CIC 444, 616",
          },
        ],
        questions: [
          {
            prompt:
              "Quem pronuncia em Marcos 15,39 a confissão plena de fé 'Verdadeiramente este homem era Filho de Deus'?",
            options: [
              "O sumo sacerdote",
              "O centurião romano ao ver como Jesus morreu na Cruz",
              "O rei Herodes",
              "Os vendilhões do templo",
            ],
            answer: 1,
            explanation:
              "Em Marcos, o mistério da filiação divina de Jesus se revela plenamente diante de sua entrega na Cruz, na boca de um pagão (CIC 444).",
          },
          {
            prompt: "Por que Jesus pediu tantas vezes segredo sobre seus milagres antes da Paixão?",
            options: [
              "Porque não tinha certeza de quem era",
              "Para evitar que o entendessem como um Messias político-militar fora do caminho da Cruz",
              "Por medo da multidão",
              "Para esconder o amor do Pai para sempre",
            ],
            answer: 1,
            explanation:
              "A identidade messiânica de Jesus só é compreendida sem distorções à luz de sua Paixão e Ressurreição (CIC 439, 554).",
          },
          {
            prompt: "Qual é o critério da verdadeira grandeza no Reino segundo Marcos 10,43-45?",
            options: [
              "Mandar nos outros com autoridade dura",
              "Tornar-se servo de todos, à imitação de Cristo que dá a vida em resgate",
              "Acumular elogios públicos",
              "Evitar todo sacrifício",
            ],
            answer: 1,
            explanation:
              "Jesus redefine toda autoridade e grandeza cristã em termos de serviço humilde (CIC 608, 1551).",
          },
        ],
      },
      {
        id: "marcos-fe-pequenos",
        title: "Marcos: fé simples que move montanhas",
        emoji: "🌊",
        xp: 20,
        teachings: [
          {
            title: "Eu creio, mas ajuda a minha falta de fé!",
            text: "Um pai desesperado pelo filho doente clamou a Jesus em Marcos 9: 'Eu creio, ajuda a minha incredulidade!'. Jesus acolhe até a fé frágil que pede crescimento.",
            example:
              "Quando a fé parecer pequena ou cansada, fazer essa mesma prece sincera a Jesus.",
            source: "Mc 9,23-24 · CIC 162, 2616",
          },
          {
            title: "A oferta da viúva pobre",
            text: "Sentado diante do tesouro do Templo, Jesus elogiou a viúva que deu duas moedinhas — tudo o que tinha para viver — muito mais que os ricos que davam do supérfluo.",
            example:
              "Lembrar que Deus mede nossos gestos de amor pela generosidade do coração, não pelo tamanho financeiro.",
            source: "Mc 12,41-44 · CIC 2447, 2544",
          },
          {
            title: "Acolher o Reino como uma criança",
            text: "Jesus abraçou as crianças e ensinou que ninguém entra no Reino sem acolhê-lo com a confiança simples e desarmada de uma criança.",
            example:
              "Aproximar-se de Deus na oração sem poses complicadas, como filho amado diante do Pai.",
            source: "Mc 10,13-16 · CIC 526, 2785",
          },
        ],
        questions: [
          {
            prompt:
              "Por que Jesus elogiou a oferta de duas pequenas moedas da viúva pobre em Marcos 12?",
            options: [
              "Porque o templo precisava apenas de moedas de cobre",
              "Porque enquanto outros deram do que sobrava, ela deu tudo o que tinha com total confiança",
              "Porque ela queria aparecer diante dos escribas",
              "Porque dinheiro grande é sempre pecado",
            ],
            answer: 1,
            explanation:
              "Deus avalia a doação pela medida do amor e entrega interior do coração (Mc 12,43-44; CIC 2544).",
          },
          {
            prompt:
              "O que nos ensina o grito do pai em Marcos 9,24 ('Eu creio, ajuda a minha falta de fé')?",
            options: [
              "Que dúvidas sinceras devem ser afastadas da oração",
              "Que Jesus acolhe a fé imperfeita quando pedimos humildemente que Ele a fortaleça",
              "Que não precisamos crer para rezar",
              "Que pais não podem rezar pelos filhos",
            ],
            answer: 1,
            explanation:
              "A oração cristã pede continuamente o crescimento e a perseverança do dom da fé (CIC 162, 2616).",
          },
          {
            prompt: "O que significa acolher o Reino de Deus 'como uma criança'?",
            options: [
              "Deixar de pensar e estudar",
              "Recebê-lo com confiança humilde, simplicidade e dependência amorosa de Deus",
              "Fazer birra nas celebrações",
              "Desprezar os adultos",
            ],
            answer: 1,
            explanation:
              "A infância espiritual é humildade filial que recebe o Reino como dom gratuito, não como conquista orgulhosa (CIC 526, 2785).",
          },
        ],
      },
    ],
  },
  {
    id: "evangelho-lucas",
    title: "O Evangelho Segundo São Lucas",
    emoji: "❤️",
    lessons: [
      {
        id: "lucas-evangelho-misericordia",
        title: "Lucas: o Evangelho da misericórdia e dos pobres",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Médico e companheiro de São Paulo",
            text: "Lucas investigou cuidadosamente os testemunhos desde a origem para oferecer uma narrativa ordenada. Seu Evangelho destaca de modo singular a compaixão de Jesus e a alegria.",
            example:
              "Ler Lucas 1 e 2 no tempo do Natal e Lucas 15 nos momentos em que precisar lembrar da ternura de Deus.",
            source: "Lc 1,1-4; 4,18 · CIC 120, 544",
          },
          {
            title: "Anunciar a Boa Nova aos pobres e pecadores",
            text: "Na sinagoga de Nazaré, Jesus abriu o rolo de Isaías e proclamou o ano da graça do Senhor: liberdade aos cativos, vista aos cegos e alegria aos pobres.",
            example:
              "Aproximar-se com respeito de quem costuma ser esquecido ou julgado na comunidade.",
            source: "Lc 4,16-21 · CIC 544, 2443",
          },
          {
            title: "As mulheres discípulas e a graça de Maria",
            text: "Lucas traz os belos cânticos da infância (Magnificat, Benedictus, Nunc Dimittis) e valoriza o papel das mulheres que seguiam e sustentavam Jesus com gratidão.",
            example:
              "Agradecer a fidelidade das mães, avós e catequistas que transmitem a fé na Igreja.",
            source: "Lc 8,1-3; 10,38-42 · CIC 491, 2619",
          },
        ],
        questions: [
          {
            prompt: "Qual é o grande tema transversal que caracteriza o Evangelho de São Lucas?",
            options: [
              "A exclusão dos estrangeiros",
              "A misericórdia universal de Deus voltada especialmente aos pobres, pecadores arrependidos e pequenos",
              "Apenas genealogias militares",
              "A negação dos milagres",
            ],
            answer: 1,
            explanation:
              "Lucas é conhecido como o Evangelho da misericórdia, da oração e da ternura salvadora aberta a todos (CIC 544-545, 2600).",
          },
          {
            prompt:
              "Qual passagem de Isaías Jesus leu na sinagoga de Nazaré para apresentar sua missão?",
            options: [
              "O Espírito do Senhor está sobre mim porque me ungiu para evangelizar os pobres (Is 61)",
              "A torre de Babel",
              "A queda de Jericó",
              "Os provérbios sobre o comércio",
            ],
            answer: 0,
            explanation:
              "Em Lucas 4,18-21, Jesus declara que a unção profética de Isaías se cumpre hoje nele em favor dos pobres e oprimidos (CIC 436, 544).",
          },
          {
            prompt:
              "Que cânticos litúrgicos da Igreja provêm exclusivamente dos capítulos iniciais de São Lucas?",
            options: [
              "Salmos 1 e 2",
              "Magnificat, Benedictus, Glória dos Anjos e Nunc Dimittis",
              "Cântico de Moisés e de Débora",
              "Hinos de Filipenses",
            ],
            answer: 1,
            explanation:
              "Os quatro grandes cânticos de Lucas 1–2 alimentam diariamente a Liturgia das Horas e a Santa Missa (CIC 2619).",
          },
        ],
      },
      {
        id: "lucas-oracao-espirito",
        title: "Lucas: Jesus em oração e a ação do Espírito",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Jesus ora antes de cada grande decisão",
            text: "Em Lucas, Jesus aparece em oração no Batismo, antes de escolher os Doze Apóstolos, na Transfiguração, ao ensinar o Pai-Nosso e na Cruz perdoando os algozes.",
            example:
              "Antes de escolhas importantes de estudo, namoro ou trabalho, tirar um tempo tranquilo para rezar.",
            source: "Lc 6,12; 9,28-29; 23,34 · CIC 2600-2605",
          },
          {
            title: "O Pai dará o Espírito Santo a quem pedir",
            text: "Ao comparar o Pai do céu com pais humanos que dão coisas boas aos filhos, Jesus conclui em Lucas 11,13: quanto mais o Pai dará o Espírito Santo aos que lhe pedirem!",
            example:
              "Pedir todos os dias a luz do Espírito Santo para saber amar e decidir com sabedoria.",
            source: "Lc 11,9-13 · CIC 2609, 2671",
          },
          {
            title: "O Espírito conduz da Encarnação aos Atos dos Apóstolos",
            text: "Lucas escreveu dois volumes (o Evangelho e Atos dos Apóstolos) mostrando o mesmo Espírito Santo agindo primeiro em Jesus e depois na Igreja em missão.",
            example:
              "Ler Lucas e Atos em sequência percebendo a continuidade da obra de Jesus na Igreja hoje.",
            source: "Lc 4,1.14; At 1,8 · CIC 688, 731",
          },
        ],
        questions: [
          {
            prompt: "O que São Lucas destaca nos momentos decisivos da vida pública de Jesus?",
            options: [
              "Que Jesus agia por impulso sem rezar",
              "Que Jesus permanecia em oração ao Pai antes de escolher os Doze, na Transfiguração e na Cruz",
              "Que Jesus rezava apenas em Jerusalém",
              "Que os apóstolos nunca viram Jesus rezar",
            ],
            answer: 1,
            explanation:
              "São Lucas mostra a oração filial de Jesus precedendo todos os passos salvíficos de sua missão (CIC 2600).",
          },
          {
            prompt:
              "Qual é o maior dom que o Pai promete dar a quem pede com confiança em Lucas 11,13?",
            options: [
              "Ouro em abundância",
              "O Espírito Santo",
              "Fama política",
              "Ausência de qualquer trabalho",
            ],
            answer: 1,
            explanation:
              "Jesus assegura que o Pai celeste dá o dom por excelência — o Espírito Santo — a todos os que lho pedem (CIC 2609, 2671).",
          },
          {
            prompt:
              "Que outro livro do Novo Testamento foi escrito pelo mesmo autor São Lucas como continuação?",
            options: [
              "Os Atos dos Apóstolos",
              "O livro do Apocalipse",
              "A Carta aos Hebreus",
              "A Primeira Carta de Pedro",
            ],
            answer: 0,
            explanation:
              "Lucas compôs a obra em duas partes: a vida e obra de Jesus (Evangelho) e a missão da Igreja guiada pelo Espírito (Atos) (CIC 120, 731).",
          },
        ],
      },
      {
        id: "lucas-fariseu-publicano",
        title: "O fariseu, o publicano e os dez leprosos",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "Orar com humildade, não comparando méritos",
            text: "Na parábola do fariseu e do publicano, o primeiro exibia suas obras desprezando os outros; o publicano batia no peito dizendo: 'Ó Deus, tem piedade de mim, pecador!'. Este voltou justificado.",
            example:
              "Nunca usar nossas boas obras ou orações para olhar de cima quem ainda está distante da Igreja.",
            source: "Lc 18,9-14 · CIC 2559, 2613",
          },
          {
            title: "A gratidão do leproso que voltou para agradecer",
            text: "Dos dez leprosos curados, apenas um — e ainda por cima um estrangeiro samaritano — voltou glorificando a Deus em alta voz e prostrando-se aos pés de Jesus.",
            example:
              "Lembrar de agradecer a Deus pelas respostas às orações com o mesmo fervor com que pedimos.",
            source: "Lc 17,11-19 · CIC 2637-2638",
          },
          {
            title: "O pobre Lázaro à porta do rico indiferente",
            text: "Na parábola do rico e de Lázaro, o erro fatal do rico não foi apenas ter dinheiro, mas passar todo dia pela porta sem enxergar a fome do irmão caído ali.",
            example:
              "Treinar os olhos para notar as necessidades das pessoas concretas que passam à nossa porta.",
            source: "Lc 16,19-31 · CIC 2446, 2463",
          },
        ],
        questions: [
          {
            prompt:
              "Por que a oração do publicano em Lucas 18 agradou a Deus mais que a do fariseu?",
            options: [
              "Porque o publicano não jejuava",
              "Porque o publicano reconheceu humildemente seu pecado e confiou na misericórdia, sem desprezar os outros",
              "Porque Deus não gosta de quem ajuda os pobres",
              "Porque o fariseu rezava em voz baixa",
            ],
            answer: 1,
            explanation:
              "Quem se humilha diante de Deus na verdade do próprio coração abre espaço para a graça que justifica (Lc 18,14; CIC 2559, 2613).",
          },
          {
            prompt:
              "O que Jesus destacou na atitude do único leproso curado que voltou para agradecer?",
            options: [
              "Sua gratidão e fé aberta à salvação integral, mesmo sendo estrangeiro",
              "Que os outros nove não haviam sido curados",
              "Que ele não precisava mais falar com ninguém",
              "Que ele voltou para pagar dinheiro",
            ],
            answer: 0,
            explanation:
              "A ação de graças reconhece o dom de Deus e conduz a uma fé mais profunda no Salvador (Lc 17,19; CIC 2637).",
          },
          {
            prompt: "Qual foi o grave pecado do homem rico na parábola do pobre Lázaro (Lc 16)?",
            options: [
              "Trabalhar no campo",
              "A indiferença egoísta diante do pobre faminto à sua própria porta",
              "Receber amigos em casa",
              "Não saber o nome de Abraão",
            ],
            answer: 1,
            explanation:
              "A cegueira egoísta diante da miséria próxima fere gravemente a caridade e a justiça (CIC 2446, 2463).",
          },
        ],
      },
    ],
  },
  {
    id: "evangelho-joao",
    title: "O Evangelho Segundo São João",
    emoji: "🦅",
    lessons: [
      {
        id: "prologo-joao-verbo",
        title: "No princípio era o Verbo: o Prólogo de João",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "A Palavra eterna estava junto de Deus e era Deus",
            text: "Enquanto Mateus e Lucas iniciam com a infância em Belém, São João remonta à eternidade: o Verbo (Logos), Filho unigênito, sempre existiu com o Pai e por Ele tudo foi criado.",
            example:
              "Ler João 1,1-18 na época do Natal maravilhando-se com a grandeza divina do Menino na manjedoura.",
            source: "Jo 1,1-5 · CIC 241, 291",
          },
          {
            title: "O Verbo se fez carne e habitou entre nós",
            text: "Aquele que é a Luz verdadeira entrou na história humana, armando sua tenda entre nós para que, acolhendo-o pela fé, nos tornemos filhos de Deus.",
            example:
              "Acolher Jesus no coração todos os dias recebendo de sua plenitude graça sobre graça.",
            source: "Jo 1,12-16 · CIC 456, 461",
          },
          {
            title: "Ninguém jamais viu a Deus; o Filho o revelou",
            text: "Olhando para o modo como Jesus ama, perdoa e cura, vemos o rosto verdadeiro de Deus Pai: quem vê Jesus, vê o Pai.",
            example:
              "Quando surgir uma imagem dura ou assustadora de Deus, voltar ao rosto de Jesus nos Evangelhos.",
            source: "Jo 1,18; 14,9 · CIC 240, 473",
          },
        ],
        questions: [
          {
            prompt:
              "O que o Prólogo de São João (Jo 1,1-14) afirma sobre o Verbo (Jesus) antes da Encarnação?",
            options: [
              "Que começou a existir somente em Belém",
              "Que existia desde a eternidade junto do Pai, era Deus e tudo foi feito por meio dele",
              "Que era apenas um profeta humano comum",
              "Que não participou da criação",
            ],
            answer: 1,
            explanation:
              "João proclama a preexistência eterna e a plena divindade do Filho, Verbo criador que se fez carne por nós (CIC 241, 291, 461).",
          },
          {
            prompt: "Que dom recebe quem acolhe o Verbo pela fé segundo João 1,12?",
            options: [
              "Imunidade a todas as doenças",
              "O poder de se tornar filho de Deus",
              "Riquezas materiais imediatas",
              "Conhecimento de todo o futuro político",
            ],
            answer: 1,
            explanation:
              "O Filho único de Deus encarnou-se para nos tornar filhos adotivos no Espírito Santo (Jo 1,12; CIC 460).",
          },
          {
            prompt: "Quem revela perfeitamente quem é o Pai invisível segundo João 1,18?",
            options: [
              "O Filho unigênito, que está no seio do Pai",
              "Apenas as estrelas do céu",
              "Qualquer filósofo antigo",
              "Nenhum mensageiro",
            ],
            answer: 0,
            explanation:
              "Em Jesus Cristo, o Filho unigênito feito homem revela em plenitude o rosto amoroso do Pai (CIC 151, 240).",
          },
        ],
      },
      {
        id: "eu-sou-jesus",
        title: "Os 'Eu Sou' de Jesus no Evangelho de João",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Luz do mundo, Bom Pastor e Porta das ovelhas",
            text: "Em João, Jesus usa grandes imagens precedidas por 'Eu Sou' (evocando o Nome divino revelado a Moisés): Pão da Vida, Luz do Mundo, Porta e Bom Pastor que dá a vida pelas ovelhas.",
            example:
              "Escolher um dos títulos 'Eu Sou' de Jesus para meditar durante a semana na oração pessoal.",
            source: "Jo 8,12; 10,9-11 · CIC 206, 754",
          },
          {
            title: "Eu sou o Caminho, a Verdade e a Vida",
            text: "Jesus não apenas aponta um caminho externo: Ele próprio é o Caminho para o Pai, a Verdade que liberta da ilusão e a Vida eterna comunicada pela graça.",
            example:
              "Buscar em Jesus a verdade nas decisões difíceis em vez de seguir apenas opiniões passageiras.",
            source: "Jo 14,6 · CIC 459, 2466",
          },
          {
            title: "A Videira verdadeira e os ramos",
            text: "'Sem mim nada podeis fazer': permanecendo unidos a Cristo como o ramo à videira pela oração, Palavra e Eucaristia, damos frutos duradouros de amor.",
            example:
              "Lembrar no início de cada tarefa importante que sem a graça de Jesus nosso esforço espiritual seca.",
            source: "Jo 15,1-8 · CIC 755, 2074",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Os 'Eu Sou' de Jesus em São João",
            instruction:
              "Ligue cada afirmação 'Eu Sou' de Jesus ao dom que ela significa para o cristão.",
            pairs: [
              {
                id: "js1",
                left: "Pão da Vida",
                right: "Alimento eucarístico que sustenta a vida eterna",
              },
              {
                id: "js2",
                left: "Luz do Mundo",
                right: "Claridade que dissipa as trevas do pecado",
              },
              {
                id: "js3",
                left: "Bom Pastor",
                right: "Aquele que conhece e dá a vida pelo rebanho",
              },
              {
                id: "js4",
                left: "Videira Verdadeira",
                right: "Seiva da graça sem a qual nada podemos fazer",
              },
            ],
            explanation:
              "As afirmações 'Eu Sou' de Jesus revelam que Ele mesmo é nossa salvação, alimento, luz e fonte de comunhão com o Pai (CIC 459, 754-755).",
            source: "Jo 6; 8; 10; 15 · CIC 459, 754-755",
          },
        ],
        questions: [
          {
            prompt: "O que significa a imagem da Videira e dos Ramos em João 15?",
            options: [
              "Que podemos dar frutos espirituais sozinhos sem a graça",
              "Que só permanecendo unidos a Cristo pela fé e caridade produzimos frutos duradouros",
              "Que a agricultura é a única profissão cristã",
              "Que a oração não influencia a vida prática",
            ],
            answer: 1,
            explanation:
              "Separados de Cristo nada podemos fazer na ordem da salvação; unidos a Ele damos muito fruto (Jo 15,5; CIC 2074).",
          },
          {
            prompt: "Qual é o gesto supremo do Bom Pastor segundo João 10,11?",
            options: [
              "Fugir quando o lobo aparece",
              "Dar a própria vida pelas suas ovelhas",
              "Contar as ovelhas apenas de longe",
              "Cobrar imposto pelo pasto",
            ],
            answer: 1,
            explanation:
              "Diferente do mercenário, Jesus Bom Pastor conhece cada ovelha pelo nome e entrega livremente a vida por elas (CIC 608, 754).",
          },
          {
            prompt:
              "O que a fórmula 'Eu Sou' nos lábios de Jesus também evoca da revelação a Moisés?",
            options: [
              "O nome eterno e divino de Deus ('Eu Sou aquele que é')",
              "Apenas uma saudação comum da Galileia",
              "O nome de um monte",
              "Um título militar romano",
            ],
            answer: 0,
            explanation:
              "Quando Jesus diz 'Antes que Abraão existisse, Eu Sou' (Jo 8,58), assume o nome divino revelado na sarça ardente (CIC 206, 590).",
          },
        ],
      },
      {
        id: "joao-hora-gloria",
        title: "A 'Hora' de Jesus e a fé do discípulo amado",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "A Cruz como elevação e glória do amor",
            text: "No Evangelho de João, a 'Hora' de Jesus é a sua Páscoa: Paixão, Morte, Ressurreição e Ascensão. Na Cruz, Jesus não é humilhado sem sentido: é exaltado no amor que atrai todos a si.",
            example:
              "Olhar para a Cruz com gratidão, vendo nela a maior prova do quanto somos amados por Deus.",
            source: "Jo 12,32; 13,1 · CIC 607, 662",
          },
          {
            title: "Sopro do Espírito e perdão na noite da Páscoa",
            text: "Na tarde mesma do domingo da Ressurreição, Jesus apareceu aos discípulos reunidos, desejou-lhes a paz, soprou sobre eles o Espírito Santo e conferiu o poder de perdoar pecados.",
            example:
              "Acolher a paz de Cristo ressuscitado e agradecer o dom da Confissão nascido na Páscoa.",
            source: "Jo 20,19-23 · CIC 730, 1441",
          },
          {
            title: "Tu sabes que eu te amo: a restauração de Pedro",
            text: "À beira do lago de Tiberíades, Jesus perguntou três vezes a Pedro 'Tu me amas?', restaurando sua tripla negação e confiando-lhe o cuidado do rebanho: 'Apascenta as minhas ovelhas'.",
            example:
              "Mesmo após tropeços sérios, responder com humildade ao amor de Cristo que confia em nós novamente.",
            source: "Jo 21,15-17 · CIC 553, 881",
          },
        ],
        questions: [
          {
            prompt:
              "Que sacramento Jesus instituiu na noite da Páscoa em João 20,22-23 ao soprar sobre os Apóstolos?",
            options: [
              "O sacramento da Reconciliação (Confissão)",
              "Apenas o matrimônio",
              "Somente o jejum semanal",
              "O dízimo do templo",
            ],
            answer: 0,
            explanation:
              "Ao soprar o Espírito Santo dizendo 'A quem perdoardes os pecados, serão perdoados', Cristo instituiu o ministério sacramental do perdão (CIC 1441).",
          },
          {
            prompt:
              "Por que Jesus perguntou três vezes a Simão Pedro 'Tu me amas?' após a Ressurreição?",
            options: [
              "Porque Jesus havia esquecido o nome dele",
              "Para curar sua tríplice negação e confirmá-lo na missão de pastorear a Igreja pelo amor",
              "Para afastá-lo dos outros apóstolos",
              "Para testar sua memória",
            ],
            answer: 1,
            explanation:
              "Com infinita delicadeza, o Ressuscitado reconcilia Pedro por meio de uma tripla confissão de amor antes de confirmar seu primado pastoral (CIC 553, 1429).",
          },
          {
            prompt:
              "Como Jesus respondeu ao apóstolo Tomé em João 20,29 após sua profissão 'Meu Senhor e meu Deus'?",
            options: [
              "'Felizes os que creram sem terem visto'",
              "'Saia deste grupo para sempre'",
              "'Ninguém nunca mais crerá em mim'",
              "'Esconda as minhas chagas'",
            ],
            answer: 0,
            explanation:
              "A bem-aventurança dirigida aos que creem sem ver abre a alegria da fé para todas as gerações da Igreja (CIC 164, 644).",
          },
        ],
      },
    ],
  },
  {
    id: "discurso-despedida",
    title: "O Discurso da Última Ceia (Jo 13–17)",
    emoji: "🍷",
    lessons: [
      {
        id: "mandamento-novo-amar",
        title: "O mandamento novo e a casa do Pai",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Amai-vos uns aos outros como eu vos amei",
            text: "Na Última Ceia, Jesus dá o mandamento novo: a medida não é apenas amar como a si mesmo, mas amar como Ele nos amou — até lavar os pés e entregar a vida. Esse amor torna reconhecíveis os seus discípulos.",
            example:
              "Resolver um conflito em casa dando o primeiro passo no perdão, à maneira de Jesus.",
            source: "Jo 13,34-35 · CIC 1823, 1970",
          },
          {
            title: "Não se perturbe o vosso coração",
            text: "Vendo os apóstolos abatidos pela partida iminente, Jesus os consolou: 'Na casa de meu Pai há muitas moradas; vou preparar-vos um lugar'.",
            example:
              "Quando a ansiedade apertar, repetir devagar: 'Não se perturbe o vosso coração; credes em Deus, crede também em mim'.",
            source: "Jo 14,1-3 · CIC 1025, 2795",
          },
          {
            title: "A alegria plena na amizade com Jesus",
            text: "'Já não vos chamo servos, mas amigos': Jesus partilhou tudo o que ouviu do Pai para que a sua alegria permaneça em nós e nossa alegria seja completa.",
            example:
              "Conversar com Jesus na oração não só como quem cumpre obrigação, mas como amigo que confia.",
            source: "Jo 15,11.15 · CIC 1820, 2606",
          },
        ],
        questions: [
          {
            prompt: "O que torna 'novo' o mandamento do amor em João 13,34?",
            options: [
              "Nunca ninguém antes havia falado em amar o próximo",
              "A medida nova do amor é Cristo mesmo: 'como eu vos amei'",
              "Só vale para os onze apóstolos presentes",
              "Dispensa amar os inimigos",
            ],
            answer: 1,
            explanation:
              "Jesus coloca seu próprio amor redentor, gratuito e até a cruz como modelo e fonte do amor mútuo cristão (CIC 1823, 1970).",
          },
          {
            prompt:
              "Pelo que todos reconhecerão que somos verdadeiros discípulos de Jesus segundo João 13,35?",
            options: [
              "Pela riqueza das roupas",
              "Se tivermos amor uns pelos outros",
              "Pela quantidade de debates vencidos",
              "Pelo isolamento social",
            ],
            answer: 1,
            explanation:
              "A caridade fraterna visível é o sinal distintivo por excelência da comunidade cristã no mundo (CIC 1823, 2044).",
          },
          {
            prompt: "Por que Jesus passou a chamar os discípulos de 'amigos' em João 15,15?",
            options: [
              "Porque revelou a eles tudo o que ouviu do Pai com intimidade e amor",
              "Porque os dispensou da missão",
              "Porque não precisavam mais obedecer",
              "Para evitar a cruz",
            ],
            answer: 0,
            explanation:
              "Cristo eleva seus discípulos à amizade com Deus comunicando os segredos do coração do Pai (CIC 426, 2606).",
          },
        ],
      },
      {
        id: "promessa-paraclito",
        title: "A promessa do Espírito Santo Paráclito",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Outro Paráclito: Defensor e Consolador",
            text: "Jesus prometeu não deixar os discípulos órfãos: pediria ao Pai que enviasse o Espírito da Verdade — outro Paráclito (Consolador e Advogado) — para permanecer conosco para sempre.",
            example:
              "Invocar o Espírito Santo como amigo fiel sempre que se sentir sozinho ou sem forças.",
            source: "Jo 14,16-18 · CIC 692, 729",
          },
          {
            title: "Recordar e guiar à verdade plena",
            text: "O Espírito Santo não inventa outro Evangelho diferente de Cristo: Ele faz recordar tudo o que Jesus disse e guia a Igreja na compreensão profunda da verdade.",
            example:
              "Pedir ao Espírito que faça lembrar uma palavra de Jesus na hora exata de uma decisão.",
            source: "Jo 14,26; 16,13 · CIC 91, 729",
          },
          {
            title: "A paz que o mundo não pode dar",
            text: "Jesus deixou um legado especial na Ceia: 'Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá'. Essa paz convive até com as lutas externas.",
            example:
              "Ser portador da paz de Cristo em casa, evitando alimentar brigas e ressentimentos.",
            source: "Jo 14,27; 16,33 · CIC 2305",
          },
        ],
        questions: [
          {
            prompt: "O que significa o título 'Paráclito' dado ao Espírito Santo em João 14–16?",
            options: [
              "Juiz severo",
              "Aquele que é chamado para junto de nós: Consolador, Advogado e Defensor",
              "Um anjo passageiro",
              "Apenas um vento natural",
            ],
            answer: 1,
            explanation:
              "Paráclito exprime o Espírito enviado pelo Pai em nome de Jesus para consolar, ensinar e sustentar os fiéis (CIC 692).",
          },
          {
            prompt: "Qual é a ação do Espírito da Verdade em relação aos ensinamentos de Jesus?",
            options: [
              "Substituir os Evangelhos por novidades contrárias",
              "Fazer recordar tudo o que Jesus disse e conduzir a Igreja à compreensão plena da verdade",
              "Apagar a memória dos Apóstolos",
              "Falar apenas em segredo sem a Igreja",
            ],
            answer: 1,
            explanation:
              "O Espírito recorda e atualiza na Igreja a única Palavra revelada por Cristo (Jo 14,26; CIC 91, 729).",
          },
          {
            prompt: "Como é a paz que Jesus promete na Última Ceia?",
            options: [
              "Ausência artificial de qualquer problema material",
              "Uma paz profunda no Espírito que o mundo não pode dar nem tirar mesmo nas tribulações",
              "Acomodação com a injustiça",
              "Apenas descanso de férias",
            ],
            answer: 1,
            explanation:
              "A paz de Cristo nasce da reconciliação com Deus e permanece firme no coração mesmo quando o mundo agita ao redor (CIC 2305).",
          },
        ],
      },
      {
        id: "oracao-sacerdotal-jo17",
        title: "A Oração Sacerdotal de Jesus (João 17)",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "Conhecer o único Deus verdadeiro e Jesus Cristo",
            text: "Na grande oração de João 17, Jesus define a vida eterna: conhecer íntima e amorosamente o Pai e Aquele que Ele enviou, Jesus Cristo.",
            example:
              "Estudar a fé não como matéria fria de prova, mas para conhecer e amar mais a Pessoa de Jesus.",
            source: "Jo 17,3 · CIC 426, 2604",
          },
          {
            title: "Para que todos sejam um como nós somos um",
            text: "Jesus rezou não só pelos Apóstolos presentes, mas por todos os que creriam pela palavra deles — inclusive nós hoje! — pedindo a unidade na verdade e no amor.",
            example:
              "Lembrar com emoção que Jesus rezou nominalmente por nós na Última Ceia e evitar divisões na paróquia.",
            source: "Jo 17,20-23 · CIC 820, 2748",
          },
          {
            title: "No mundo, sem ser do mundo",
            text: "Jesus não pediu ao Pai que tirasse seus discípulos do mundo, mas que os guardasse do Maligno e os consagrasse na verdade para serem enviados em missão.",
            example:
              "Conviver com alegria na escola, família e trabalho mantendo os valores cristãos sem se fechar numa bolha.",
            source: "Jo 17,15-18 · CIC 2604, 2851",
          },
        ],
        questions: [
          {
            prompt:
              "Como Jesus define 'a vida eterna' no início de sua Oração Sacerdotal em João 17,3?",
            options: [
              "Viver para sempre sem se relacionar com ninguém",
              "Conhecer a ti, único Deus verdadeiro, e a Jesus Cristo, a quem enviaste",
              "Acumular saberes científicos apenas",
              "Fugir de todo sofrimento",
            ],
            answer: 1,
            explanation:
              "A vida eterna começa já pela comunhão viva e pessoal de conhecimento e amor com o Pai e o Filho (Jo 17,3; CIC 426, 1721).",
          },
          {
            prompt:
              "O que Jesus pediu ao Pai quanto à permanência dos discípulos no mundo (Jo 17,15)?",
            options: [
              "Que fossem tirados imediatamente da terra",
              "Não pediu que os tirasse do mundo, mas que os guardasse do Maligno e os santificasse na verdade",
              "Que se isolassem em ilhas desertas",
              "Que imitassem o egoísmo do mundo",
            ],
            answer: 1,
            explanation:
              "Os cristãos são enviados ao mundo como testemunhas protegidas pela graça de Deus contra o mal (CIC 2604, 2851).",
          },
          {
            prompt: "Por quem Jesus rezou em João 17,20 além dos onze Apóstolos?",
            options: [
              "Apenas pelos habitantes de Belém",
              "Por todos os que haveriam de crer nele por meio da palavra dos Apóstolos ao longo da história",
              "Somente pelos reis de Israel",
              "Por ninguém mais",
            ],
            answer: 1,
            explanation:
              "A oração sacerdotal de Jesus abraça todos os futuros crentes da Igreja de todos os tempos (CIC 2748).",
          },
        ],
      },
    ],
  },
  {
    id: "parabolas-misericordia",
    title: "Parábolas da Vigilância e do Banquete",
    emoji: "🕯️",
    lessons: [
      {
        id: "dez-virgens-vigilancia",
        title: "As dez virgens e as lâmpadas acesas",
        emoji: "🪔",
        xp: 20,
        teachings: [
          {
            title: "Levar óleo de reserva para a espera",
            text: "Na parábola das dez virgens (Mt 25), cinco previdentes levaram óleo extra para as lâmpadas enquanto o noivo demorava; as cinco imprudentes deixaram a luz apagar.",
            example:
              "Alimentar a fé todo dia com oração e sacramentos, não só na última hora de emergência.",
            source: "Mt 25,1-13 · CIC 672, 2612",
          },
          {
            title: "Há coisas que ninguém pode viver por nós",
            text: "Quando o noivo chegou, as previdentes não puderam transferir seu próprio óleo: a conversão pessoal, a caridade e a amizade com Deus são escolhas intransferíveis.",
            example:
              "Assumir a própria caminhada de fé pessoal, sem depender apenas da fé dos pais ou amigos.",
            source: "Mt 25,8-9 · CIC 1021, 1825",
          },
          {
            title: "Vigilância alegre na espera do Esposo",
            text: "Vigiar na Bíblia não é ficar tenso de medo, mas manter o coração acordado no amor esperando Cristo que vem ao nosso encontro.",
            example:
              "Terminar o dia em paz com Deus e com os irmãos, de coração pronto para encontrá-lo.",
            source: "Lc 12,35-37 · CIC 672, 2612",
          },
        ],
        questions: [
          {
            prompt: "O que simboliza o 'óleo' nas lâmpadas das virgens prudentes em Mateus 25?",
            options: [
              "Dinheiro guardado no banco",
              "A vida interior de fé viva, caridade e graça mantida no coração",
              "Conhecimento apenas teórico",
              "Perfumes luxuosos",
            ],
            answer: 1,
            explanation:
              "O óleo simboliza a caridade ativa e a vida de graça que mantêm a fé acesa para o encontro com Cristo (CIC 672, 2612).",
          },
          {
            prompt: "Por que as virgens prudentes disseram que não podiam dar seu óleo às outras?",
            options: [
              "Por egoísmo mesquinho",
              "Para ensinar que a conversão pessoal e a fidelidade interior são intransferíveis na hora final",
              "Porque o noivo proibiu a caridade",
              "Porque o óleo havia acabado para todas",
            ],
            answer: 1,
            explanation:
              "Cada pessoa responde pessoalmente por sua fé e amor diante de Deus (Mt 25,8-9; CIC 1021).",
          },
          {
            prompt: "Qual é o convite final dessa parábola em Mateus 25,13?",
            options: [
              "Dormir sem preocupação",
              "Vigiai, porque não sabeis o dia nem a hora",
              "Cancelar as festas",
              "Vender todas as lâmpadas",
            ],
            answer: 1,
            explanation:
              "Jesus convida a uma vigilância fiel que transforma cada dia presente em espera amorosa do Senhor (CIC 672).",
          },
        ],
      },
      {
        id: "parabola-talentos",
        title: "A parábola dos talentos: fidelidade criativa",
        emoji: "🪙",
        xp: 20,
        teachings: [
          {
            title: "Cada um recebe dons segundo sua capacidade",
            text: "O senhor que partiu em viagem confiou cinco, dois e um talento aos seus servos. Deus distribui dons diferentes a cada pessoa, esperando resposta fiel, não comparação invejosa.",
            example:
              "Descobrir o que você sabe fazer bem e usá-lo para servir, sem invejar quem tem outros dons.",
            source: "Mt 25,14-30 · CIC 1936-1937",
          },
          {
            title: "O erro do servo que enterrou o talento por medo",
            text: "Quem recebeu um talento não o perdeu em vícios: simplesmente o enterrou com medo duro do senhor. A omissão preguiçosa e o medo paralisante desperdiçam a graça.",
            example:
              "Superar a timidez excessiva ou o medo de errar para colaborar em algo útil na comunidade.",
            source: "Mt 25,24-28 · CIC 1853, 1937",
          },
          {
            title: "Entra na alegria do teu Senhor!",
            text: "Tanto o servo dos cinco quanto o dos dois talentos ouviram exatamente o mesmo elogio: Deus recompensa a fidelidade no pouco com a alegria plena do seu Reino.",
            example:
              "Ser fiel nas pequenas responsabilidades confiadas hoje — na família, estudos ou pastoral.",
            source: "Mt 25,21.23 · CIC 1720, 2008",
          },
        ],
        questions: [
          {
            prompt: "Por que o senhor repreendeu o terceiro servo na parábola dos talentos?",
            options: [
              "Porque ele recebeu menos que os outros",
              "Porque por medo e preguiça enterrou o dom recebido sem fazê-lo frutificar",
              "Porque ele perdeu tudo tentando ajudar os pobres",
              "Porque trabalhou rápido demais",
            ],
            answer: 1,
            explanation:
              "Enterrar o talento simboliza desperdiçar por omissão e medo as graças e capacidades confiadas por Deus (Mt 25,24-26; CIC 1937).",
          },
          {
            prompt: "O que significa receber 'cinco, dois e um talento' segundo o Catecismo?",
            options: [
              "Que Deus ama uns mais do que outros",
              "Que a diversidade de talentos estimula a solidariedade, a humildade e o serviço mútuo",
              "Que quem recebe um dom menor não precisa fazer nada",
              "Que apenas ricos entram no céu",
            ],
            answer: 1,
            explanation:
              "As diferenças de dons integram o plano de Deus para que uns precisem dos outros e pratiquem a caridade (CIC 1936-1937).",
          },
          {
            prompt: "Que elogio receberam igualmente os dois primeiros servos fiéis?",
            options: [
              "'Servo bom e fiel, foste fiel no pouco, entra na alegria do teu senhor'",
              "'Você é melhor que seu colega'",
              "'Agora pode descansar sem amar ninguém'",
              "'Volte daqui a cem anos'",
            ],
            answer: 0,
            explanation:
              "Deus não exige igualdade numérica de resultados, mas fidelidade generosa ao que confiou a cada um (Mt 25,21-23; CIC 2008).",
          },
        ],
      },
      {
        id: "grande-banquete-convite",
        title: "O banquete das núpcias e a veste nupcial",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Todos são convidados ao banquete do Reino",
            text: "Quando os primeiros convidados deram desculpas ligadas a negócios e propriedades para não ir à festa, o rei mandou chamar pelas ruas pobres, cegos, coxos e estrangeiros.",
            example:
              "Não deixar que a correria do trabalho ou lazer nos faça recusar o convite semanal da Missa.",
            source: "Lc 14,15-24 · CIC 545, 1402",
          },
          {
            title: "A veste nupcial da graça e da caridade",
            text: "Em Mateus 22, o convite gratuito pede também resposta de conversão: a 'veste nupcial' simboliza a vida nova da graça batismal e da caridade.",
            example:
              "Acolher o convite gratuito de Deus buscando viver de modo coerente com o Evangelho.",
            source: "Mt 22,11-14 · CIC 1405, 1996",
          },
          {
            title: "Convidar quem não pode retribuir",
            text: "Antes dessa parábola, Jesus ensinou em Lucas 14: quando fizeres um banquete, convida pobres e necessitados que não têm como te pagar de volta!",
            example: "Praticar hospitalidade generosa sem esperar retorno ou interesse social.",
            source: "Lc 14,12-14 · CIC 2447",
          },
        ],
        questions: [
          {
            prompt:
              "O que representam as desculpas dos primeiros convidados na parábola do Grande Banquete?",
            options: [
              "Impedimentos médicos graves",
              "Preocupações terrenas e apego a bens que fecham o coração ao chamado de Deus",
              "Falta de convite claro",
              "Humildade verdadeira",
            ],
            answer: 1,
            explanation:
              "Terras, bois e interesses próprios representam a distração espiritual que adia a resposta ao convite de Cristo (Lc 14,18-20; CIC 545).",
          },
          {
            prompt: "O que simboliza a 'veste nupcial' na versão de Mateus 22?",
            options: [
              "Roupas caras de festa",
              "A graça santificante, a fé viva e as obras de caridade que revestem o convertido",
              "Um uniforme militar",
              "Uma exigência impossível aos pobres",
            ],
            answer: 1,
            explanation:
              "A entrada gratuita no Reino convida à transformação interior revestida de Cristo e da caridade (CIC 1405, 1996).",
          },
          {
            prompt: "Para quem o rei ordenou levar o convite depois que os primeiros recusaram?",
            options: [
              "Somente para nobres vizinhos",
              "Para todos pelas encruzilhadas: pobres, aleijados, cegos, maus e bons",
              "Para ninguém",
              "Apenas para os soldados do palácio",
            ],
            answer: 1,
            explanation:
              "A misericórdia de Deus estende o convite da salvação universalmente a todos sem distinção social (Lc 14,21-23; CIC 545).",
          },
        ],
      },
    ],
  },
  {
    id: "encontros-jesus",
    title: "Encontros que Transformam (Zaqueu, Nicodemos, Samaritana)",
    emoji: "💧",
    lessons: [
      {
        id: "nicodemos-nascer-alto",
        title: "Nicodemos: nascer de novo da água e do Espírito",
        emoji: "🌬️",
        xp: 20,
        teachings: [
          {
            title: "Procurar Jesus na noite das dúvidas",
            text: "Fariseu e mestre respeitado, Nicodemos foi procurar Jesus de noite com sinceridade. Jesus não zombou de sua timidez inicial, mas abriu-lhe o mistério da vida nova.",
            example:
              "Não ter vergonha de buscar respostas sérias para dúvidas de fé conversando com um sacerdote ou estudando.",
            source: "Jo 3,1-3 · CIC 155, 1215",
          },
          {
            title: "Nascer da água e do Espírito",
            text: "Jesus revelou que ninguém entra no Reino sem nascer de novo 'da água e do Espírito Santo'. Desde os primeiros séculos, a Igreja lê aqui o sacramento do Batismo.",
            example:
              "Agradecer aos pais e padrinhos pela graça do Batismo que nos fez nascer como filhos de Deus.",
            source: "Jo 3,5 · CIC 1215, 1257",
          },
          {
            title: "Tanto amou Deus o mundo que entregou seu Filho",
            text: "Na conversa com Nicodemos surge João 3,16: Deus não enviou o Filho para condenar o mundo, mas para que o mundo seja salvo por Ele. Mais tarde, Nicodemos defendeu Jesus e ajudou a sepultá-lo.",
            example:
              "Meditar João 3,16 quando sentir medo de Deus, lembrando o amor infinito do Pai.",
            source: "Jo 3,16-17; 19,39 · CIC 458, 604",
          },
        ],
        questions: [
          {
            prompt:
              "A qual sacramento Jesus se refere ao dizer a Nicodemos 'quem não nascer da água e do Espírito'?",
            options: ["O Batismo", "O Matrimônio", "A Unção dos Enfermos", "Apenas o jejum"],
            answer: 0,
            explanation:
              "Nascer da água e do Espírito é a regeneração batismal que nos introduz na vida divina e no Reino (Jo 3,5; CIC 1215).",
          },
          {
            prompt: "Qual é a afirmação central de João 3,16-17 no diálogo com Nicodemos?",
            options: [
              "Que Deus enviou seu Filho por amor infinito para salvar o mundo, não para condená-lo",
              "Que Deus salva apenas os mestres da Lei",
              "Que ninguém pode mudar na idade adulta",
              "Que a fé dispensa o Batismo",
            ],
            answer: 0,
            explanation:
              "O envio do Filho unigênito manifesta o amor redentor de Deus Pai por toda a humanidade (CIC 458, 604).",
          },
          {
            prompt: "Como evoluiu o discipulado tímido de Nicodemos ao longo do Evangelho de João?",
            options: [
              "Ele traiu Jesus por dinheiro",
              "Passou a defender Jesus diante do Sinédrio e levou perfumes para seu sepultamento",
              "Nunca mais ouviu falar de Jesus",
              "Tornou-se inimigo dos apóstolos",
            ],
            answer: 1,
            explanation:
              "A semente plantada na noite cresceu até Nicodemos honrar corajosamente o corpo de Jesus na Sexta-feira Santa (Jo 7,50; 19,39; CIC 1257).",
          },
        ],
      },
      {
        id: "samaritana-agua-viva",
        title: "A mulher samaritana: adorar em espírito e verdade",
        emoji: "🏺",
        xp: 20,
        teachings: [
          {
            title: "Jesus quebra preconceitos junto ao poço",
            text: "Cansado da viagem ao meio-dia, Jesus pediu água a uma mulher samaritana marcada por uma vida afetiva ferida. Sem julgamento duro, Ele a escutou com verdade e respeito.",
            example:
              "Conversar com acolhimento respeitoso com pessoas que se sentem rejeitadas ou distantes da Igreja.",
            source: "Jo 4,4-10 · CIC 545, 2560",
          },
          {
            title: "Tenho sede de ti: a água viva que jorra para a vida eterna",
            text: "Jesus revelou que o pedido 'Dá-me de beber' nasce da sede de Deus pela nossa amizade: Ele mesmo oferece a água viva do Espírito que sacia a sede mais funda do coração.",
            example:
              "Quando buscar satisfação exagerada em compras ou distrações, reconhecer a sede mais funda que só Deus sacia.",
            source: "Jo 4,13-14 · CIC 694, 2560",
          },
          {
            title: "Adorar o Pai em espírito e verdade",
            text: "A verdadeira adoração não fica presa a um só monte geográfico, mas nasce no Espírito Santo e na verdade de Cristo, tornando a mulher missionária na própria cidade.",
            example: "Contar com simplicidade a um conhecido o bem que Jesus fez em sua vida.",
            source: "Jo 4,23-30 · CIC 1179, 2561",
          },
        ],
        questions: [
          {
            prompt: "O que simboliza a 'água viva' prometida por Jesus à mulher samaritana?",
            options: [
              "Apenas água mineral de melhor sabor",
              "O dom do Espírito Santo que sacia a sede espiritual e jorra para a vida eterna",
              "Um novo poço construído em Samaria",
              "Água das chuvas de inverno",
            ],
            answer: 1,
            explanation:
              "Na tradição bíblica e joanina, a água viva é símbolo da graça do Espírito Santo dada por Cristo (Jo 4,14; 7,38; CIC 694, 2560).",
          },
          {
            prompt:
              "Segundo o Catecismo, o que revela o pedido de Jesus 'Dá-me de beber' junto ao poço?",
            options: [
              "Que Deus tem sede de que o homem tenha sede dele e o encontre na oração",
              "Que Jesus não tinha poder para buscar água",
              "Que samaritanos eram superiores aos judeus",
              "Que a oração é inútil",
            ],
            answer: 0,
            explanation:
              "No encontro com a samaritana, o Catecismo destaca que Deus primeiro nos procura e tem sede da nossa resposta na oração (CIC 2560).",
          },
          {
            prompt: "O que a mulher samaritana fez logo após reconhecer Jesus como o Messias?",
            options: [
              "Escondeu o encontro por vergonha",
              "Deixou o cântaro, correu à cidade e anunciou Jesus aos moradores",
              "Voltou ao poço apenas no ano seguinte",
              "Pediu que Jesus fosse embora",
            ],
            answer: 1,
            explanation:
              "O encontro verdadeiro com Cristo transforma até quem se sentia excluído em testemunha alegre do Evangelho (Jo 4,28-30; CIC 2561).",
          },
        ],
      },
      {
        id: "zaqueu-conversao-reparacao",
        title: "Zaqueu: desce depressa e devolve com justiça",
        emoji: "🌳",
        xp: 20,
        teachings: [
          {
            title: "Subir no sicômoro para ver quem é Jesus",
            text: "Chefe dos publicanos em Jericó e rico por extorsões, Zaqueu venceu o respeito humano e subiu numa árvore só para ver Jesus passar.",
            example: "Não deixar o medo do que os outros vão pensar impedir você de buscar Jesus.",
            source: "Lc 19,1-4 · CIC 545, 1430",
          },
          {
            title: "Hoje devo hospedar-me em tua casa",
            text: "Jesus olhou para cima, chamou Zaqueu pelo nome e convidou-se para entrar na casa dele. A graça de Deus sempre toma a iniciativa antes mesmo de termos tudo resolvido.",
            example:
              "Abrir as portas da própria casa — rotina, família e coração — à visita de Cristo.",
            source: "Lc 19,5-7 · CIC 545, 2560",
          },
          {
            title: "Conversão visível que repara injustiças",
            text: "Acolhido por Jesus, Zaqueu anunciou: dou metade dos bens aos pobres e devolvo quatro vezes mais a quem defraudei. O arrependimento sincero procura reparar o mal feito.",
            example:
              "Quando prejudicar alguém, não ficar só no pedido de desculpa: consertar o prejuízo sempre que possível.",
            source: "Lc 19,8-10 · CIC 1459, 2412",
          },
        ],
        questions: [
          {
            prompt:
              "Qual atitude de Zaqueu mostra a autenticidade de sua conversão ao acolher Jesus?",
            options: [
              "Apenas chorar sem mudar os negócios injustos",
              "Repartir metade dos bens aos pobres e restituir quatro vezes mais a quem havia prejudicado",
              "Cobrar mais impostos para dar esmola",
              "Esconder o dinheiro fora da cidade",
            ],
            answer: 1,
            explanation:
              "O arrependimento verdadeiro inclui o dever de justiça e restituição sempre que se lesou o próximo (Lc 19,8; CIC 1459, 2412).",
          },
          {
            prompt: "Qual foi a frase final de Jesus na casa de Zaqueu sobre sua missão?",
            options: [
              "'O Filho do Homem veio procurar e salvar o que estava perdido'",
              "'Ricos nunca podem entrar na sua própria casa'",
              "'A árvore deve ser cortada'",
              "'Só os perfeitos merecem visita'",
            ],
            answer: 0,
            explanation:
              "O encontro com Zaqueu resume a missão salvadora de Cristo junto a todos os pecadores que abrem o coração (Lc 19,10; CIC 545).",
          },
          {
            prompt: "Como Jesus tratou Zaqueu diante da murmuração da multidão?",
            options: [
              "Ignorou Zaqueu para agradar à multidão",
              "Chamou-o pelo nome e entrou em sua casa, despertando conversão imediata",
              "Exigiu que primeiro pagasse à multidão antes de olhar para ele",
              "Mandou-o sair da árvore envergonhado",
            ],
            answer: 1,
            explanation:
              "O olhar acolhedor e pessoal de Cristo precede e desperta a resposta generosa de conversão (CIC 545, 1996).",
          },
        ],
      },
    ],
  },
  {
    id: "carta-romanos",
    title: "Carta aos Romanos: Graça e Justificação",
    emoji: "✝️",
    lessons: [
      {
        id: "romanos-justificacao-graca",
        title: "Justificados gratuitamente pela graça na fé",
        emoji: "🎁",
        xp: 20,
        teachings: [
          {
            title: "Todos pecaram e precisam da graça de Cristo",
            text: "Em Romanos 1–3, São Paulo mostra que nem a filosofia pagã nem o cumprimento externo da Lei salvam o homem por mérito próprio: todos precisamos da misericórdia trazida por Cristo.",
            example:
              "Abandonar qualquer orgulho espiritual de achar que merecemos o céu pelo nosso próprio esforço sozinho.",
            source: "Rm 3,23-24 · CIC 1987-1992",
          },
          {
            title: "O que significa 'justificação'",
            text: "Justificação não é apenas Deus fingir que não vê o pecado: é a graça do Espírito Santo que apaga o pecado e renova interiormente o ser humano, tornando-o justo e amigo de Deus.",
            example:
              "Receber a Confissão e a Comunhão com assombro agradecido diante do dom gratuito de Deus.",
            source: "Rm 5,1-5 · CIC 1989, 1992",
          },
          {
            title: "Batizados na morte e ressurreição de Jesus",
            text: "Em Romanos 6, Paulo explica que pelo Batismo somos mergulhados na morte de Cristo para caminharmos numa vida nova, livres da escravidão do pecado.",
            example:
              "Dizer 'não' ao pecado lembrando quem você é pelo Batismo: vivo para Deus em Cristo.",
            source: "Rm 6,3-11 · CIC 1214, 1265",
          },
        ],
        questions: [
          {
            prompt:
              "Segundo a Carta aos Romanos e o Catecismo, como somos justificados diante de Deus?",
            options: [
              "Pelas nossas forças humanas isoladas sem necessidade de Cristo",
              "Gratuitamente pela graça de Deus, por meio da fé viva na redenção realizada em Jesus Cristo",
              "Apenas por descendência familiar",
              "Pelo cumprimento de ritos antigos de animais",
            ],
            answer: 1,
            explanation:
              "A justificação é obra gratuita da graça de Deus em Cristo, acolhida pela fé e pelo Batismo (Rm 3,24; CIC 1987, 1992).",
          },
          {
            prompt: "O que o Batismo opera no cristão segundo Romanos 6,3-4?",
            options: [
              "Apenas registra o nome na secretaria",
              "Une-nos à morte e ressurreição de Cristo para vivermos uma vida nova",
              "Dá licença para continuar no pecado",
              "Substitui a esperança da ressurreição futura",
            ],
            answer: 1,
            explanation:
              "O Batismo significa e realiza a morte do homem velho ao pecado e o nascimento para a vida nova em Cristo (CIC 1214, 1262).",
          },
          {
            prompt: "Por que Romanos 5,5 afirma que a esperança não decepciona?",
            options: [
              "Porque o amor de Deus foi derramado em nossos corações pelo Espírito Santo que nos foi dado",
              "Porque nada de difícil acontece aos batizados",
              "Porque o dinheiro resolve os conflitos",
              "Porque ninguém precisa de conversão",
            ],
            answer: 0,
            explanation:
              "O Espírito Santo infundido em nossos corações garante o amor fiel do Pai e sustenta a esperança cristã (CIC 1820, 1996).",
          },
        ],
      },
      {
        id: "romanos-8-filhos-espirito",
        title: "Romanos 8: Filhos no Espírito e nada nos separa do amor",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Não recebestes um espírito de escravos, mas de filhos (Abbá)",
            text: "Guiados pelo Espírito de Deus, não vivemos sob terror servil, mas clamamos com intimidade 'Abbá, Pai!'. Somos filhos adotivos e co-herdeiros com Cristo.",
            example: "Rezar hoje chamando Deus de 'Pai' com confiança simples de filho amado.",
            source: "Rm 8,14-17 · CIC 1303, 2777",
          },
          {
            title: "O Espírito vem em socorro da nossa fraqueza na oração",
            text: "Quando não sabemos como rezar como convém na dor ou cansaço, o próprio Espírito intercede em nós com gemidos inefáveis segundo a vontade de Deus.",
            example:
              "Quando faltar palavras para orar em uma crise, confiar que o Espírito reza em você no silêncio.",
            source: "Rm 8,26-27 · CIC 2650, 2766",
          },
          {
            title: "Quem nos separará do amor de Cristo?",
            text: "No fim de Romanos 8, Paulo canta: nem tribulação, nem angústia, nem morte nem vida poderão separar-nos do amor de Deus manifestado em Jesus Cristo.",
            example:
              "Ler Romanos 8,31-39 nos dias de medo para lembrar que somos mais que vencedores por Aquele que nos amou.",
            source: "Rm 8,31-39 · CIC 313, 1820",
          },
        ],
        questions: [
          {
            prompt:
              "Que palavra aramaica de carinho filial o Espírito Santo nos faz clamar em Romanos 8,15?",
            options: ["Maranatha", "Abbá (Pai querido)", "Hosana", "Aleluia"],
            answer: 1,
            explanation:
              "O Espírito do Filho faz ecoar em nosso coração a mesma confiança filial de Jesus chamando Deus de Abbá, Pai (CIC 1303, 2777).",
          },
          {
            prompt:
              "Como o Espírito Santo nos ajuda quando não sabemos o que pedir na oração (Rm 8,26)?",
            options: [
              "Intercede por nós junto a Deus com gemidos inefáveis em nossa fraqueza",
              "Manda parar de rezar até aprender teologia",
              "Substitui toda oração vocal",
              "Afasta-se até passarmos a crise",
            ],
            answer: 0,
            explanation:
              "O Espírito Santo é o mestre interior da oração que acode à nossa fragilidade e nos alinha à vontade do Pai (CIC 2650, 2670).",
          },
          {
            prompt: "Qual certeza consoladora encerra Romanos 8?",
            options: [
              "Que o cristão jamais enfrentará provações",
              "Que nada — nem morte, nem vida, nem angústia — pode nos separar do amor de Deus em Cristo",
              "Que só os fortes chegam ao fim",
              "Que a criação não será renovada",
            ],
            answer: 1,
            explanation:
              "Em tudo Deus coopera para o bem dos que o amam, e nada rompe a fidelidade do amor de Cristo por nós (Rm 8,28.38-39; CIC 313).",
          },
        ],
      },
      {
        id: "romanos-12-culto-vida",
        title: "Romanos 12: Sacrifício vivo e vencer o mal com o bem",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Oferecer a própria vida como culto agradável",
            text: "Em Romanos 12,1-2, Paulo pede: oferecei vossos corpos — toda a vida concreta — como sacrifício vivo, santo e agradável a Deus, sem vos amoldar aos esquemas deste mundo.",
            example:
              "Dedicar estudo, trabalho, descanso e relacionamentos a Deus como continuação da Santa Missa.",
            source: "Rm 12,1-2 · CIC 901, 2031",
          },
          {
            title: "Alegria na esperança, paciência na tribulação",
            text: "Paulo dá um roteiro prático de caridade comunitária: amar sem fingimento, alegrar-se com quem se alegra, chorar com quem chora, perseverar na oração e hospedar com prontidão.",
            example:
              "Acompanhar de verdade tanto as alegrias quanto os lutos dos irmãos da comunidade.",
            source: "Rm 12,9-15 · CIC 1829, 2447",
          },
          {
            title: "Não te deixes vencer pelo mal, vence o mal com o bem",
            text: "Em vez de pagar injúria com injúria, Paulo ensina a responder com bondade, deixando espaço à justiça de Deus e buscando a paz com todos enquanto depender de nós.",
            example:
              "Responder a uma grosseria no trânsito ou no trabalho com calma em vez de alimentar a briga.",
            source: "Rm 12,17-21 · CIC 2303, 2844",
          },
        ],
        questions: [
          {
            prompt:
              "O que significa 'não vos conformeis com este mundo, mas transformai-vos pela renovação da mente' (Rm 12,2)?",
            options: [
              "Odiar a cultura e as pessoas ao redor",
              "Não copiar critérios egoístas contrários ao Evangelho, discernindo a vontade boa de Deus",
              "Mudar apenas o estilo de roupa",
              "Parar de conversar com vizinhos",
            ],
            answer: 1,
            explanation:
              "A conversão transforma nossos critérios e escolhas segundo Cristo, em vez de seguir automaticamente modas injustas (CIC 1785, 2031).",
          },
          {
            prompt: "Qual é a regra cristã diante das ofensas em Romanos 12,21?",
            options: [
              "Devolver o mal em dobro para impor respeito",
              "Não se deixar vencer pelo mal, mas vencer o mal com o bem",
              "Guardar rancor em silêncio",
              "Cortar toda justiça na sociedade",
            ],
            answer: 1,
            explanation:
              "A caridade vence a espiral do ódio respondendo ao mal com a força desarmada do bem e do perdão (CIC 2303, 2844).",
          },
          {
            prompt:
              "Qual o sentido cristão de 'oferecer os corpos como sacrifício vivo' em Romanos 12,1?",
            options: [
              "Prejudicar a própria saúde",
              "Consagrar toda a existência concreta — ações, trabalho, corpo e coração — ao serviço de Deus",
              "Voltar aos sacrifícios antigos de animais",
              "Viver apenas de emoções internas",
            ],
            answer: 1,
            explanation:
              "Todo batizado exerce seu sacerdócio comum oferecendo a Deus sua vida cotidiana em união com o sacrifício de Cristo (CIC 901, 2100).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-corintios",
    title: "Cartas aos Coríntios: Cruz e Ressurreição",
    emoji: "🌅",
    lessons: [
      {
        id: "sabedoria-da-cruz",
        title: "A sabedoria da Cruz e a unidade da comunidade",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Acaso Cristo está dividido?",
            text: "Em Corinto, os cristãos formavam panelinhas dizendo 'Eu sou de Paulo', 'Eu sou de Apolo', 'Eu sou de Pedro'. Paulo lembra que só Cristo foi crucificado por nós.",
            example:
              "Evitar rivalidades entre grupos, movimentos ou pastorais dentro da própria paróquia.",
            source: "1Cor 1,10-13 · CIC 814, 817",
          },
          {
            title: "Loucura para o mundo, força de Deus",
            text: "Para a lógica mundana do poder e da fama, um Messias crucificado parece fracasso; para os que creem, a Cruz revela a sabedoria e o amor invencível de Deus.",
            example:
              "Aceitar que o sucesso cristão passa muitas vezes pelo serviço escondido e humilde.",
            source: "1Cor 1,18-25 · CIC 618, 2015",
          },
          {
            title: "Deus escolheu o que é fraco para confundir os fortes",
            text: "Para que ninguém se glorie diante de Deus, Ele costuma realizar grandes obras por meio de pessoas comuns e humildes.",
            example: "Nunca pensar que suas fragilidades impedem Deus de agir por meio de você.",
            source: "1Cor 1,27-31 · CIC 271, 2559",
          },
        ],
        questions: [
          {
            prompt:
              "Qual problema comunitário São Paulo corrige logo no capítulo 1 de 1 Coríntios?",
            options: [
              "Excesso de caridade com os pobres",
              "Divisões e partidarismos em torno de pregadores humanos",
              "Cantar salmos em conjunto",
              "Rezar pelo bispo",
            ],
            answer: 1,
            explanation:
              "Paulo lembra que todos fomos batizados em Cristo e devemos permanecer unidos no mesmo espírito e parecer (1Cor 1,10-13; CIC 817).",
          },
          {
            prompt: "Por que São Paulo chama a pregação da Cruz de 'poder e sabedoria de Deus'?",
            options: [
              "Porque o mundo valoriza a cruz como símbolo de fama",
              "Porque nela Deus vence o pecado pelo amor humilde e redentor que supera os cálculos humanos",
              "Porque proíbe usar a inteligência",
              "Porque a Ressurreição não importa",
            ],
            answer: 1,
            explanation:
              "Na fraqueza aparente da Cruz manifesta-se a onipotência do amor misericordioso de Deus (1Cor 1,24-25; CIC 271, 616).",
          },
          {
            prompt: "O que significa 'quem se gloria, glorie-se no Senhor' (1Cor 1,31)?",
            options: [
              "Reconhecer com gratidão que toda graça, santidade e redenção vêm de Cristo",
              "Exibir nossas conquistas para superar os outros",
              "Nunca agradecer elogios",
              "Desprezar os talentos alheios",
            ],
            answer: 0,
            explanation:
              "Cristo tornou-se para nós sabedoria, justiça, santificação e redenção, eliminando toda vaidade humana (CIC 1992, 2011).",
          },
        ],
      },
      {
        id: "ressurreicao-corintios-15",
        title: "1 Coríntios 15: Se Cristo não ressuscitou, vã é a fé",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "Transmiti o que eu mesmo recebi",
            text: "Em 1 Coríntios 15,3-8, Paulo cita a confissão de fé mais antiga registrada: Cristo morreu pelos nossos pecados, foi sepultado, ressuscitou ao terceiro dia e apareceu a Cefas, aos Doze e a mais de quinhentos irmãos.",
            example:
              "Apoiar a própria fé no testemunho histórico e apostólico vivo da Igreja desde o início.",
            source: "1Cor 15,3-8 · CIC 186, 639",
          },
          {
            title: "Cristo, primícia dos que morreram",
            text: "Se Cristo não ressuscitou, nossa fé seria vazia; mas Ele ressuscitou de fato, tornando-se as primícias da nossa própria ressurreição no último dia.",
            example: "Enfrentar a velhice e o luto com esperança firme na vitória pascal de Jesus.",
            source: "1Cor 15,14.20 · CIC 651-655, 991",
          },
          {
            title: "Corpo semeado na fraqueza, ressuscitado na glória",
            text: "Como a semente morre na terra e brota transformada, nosso corpo mortal será transfigurado pelo poder de Deus para participar da vida gloriosa de Cristo.",
            example: "Cuidar do corpo com dignidade lembrando que ele é chamado à glória eterna.",
            source: "1Cor 15,42-55 · CIC 997-1000",
          },
        ],
        questions: [
          {
            prompt:
              "Segundo São Paulo em 1 Coríntios 15,14, o que aconteceria com a fé cristã sem a Ressurreição de Jesus?",
            options: [
              "Continuaria exatamente igual como filosofia moral",
              "A pregação e a fé seriam vãs e sem fundamento salvador",
              "Teria ainda mais força",
              "Não mudaria o sentido da Eucaristia",
            ],
            answer: 1,
            explanation:
              "A Ressurreição real de Cristo é a verdade culminante da fé sem a qual toda a esperança cristã desmoronaria (CIC 638, 651).",
          },
          {
            prompt:
              "Que imagem natural Paulo utiliza em 1 Coríntios 15 para ajudar a imaginar a ressurreição do corpo?",
            options: [
              "Uma semente lançada à terra que dá origem a um corpo novo e glorioso pela ação de Deus",
              "Uma sombra que some no ar",
              "Uma estátua de mármore parada",
              "Trocar de alma por outra pessoa",
            ],
            answer: 0,
            explanation:
              "Assim como da semente surge a planta transformada, o mesmo corpo humano ressuscitará transformado e espiritualizado em Cristo (CIC 999-1000).",
          },
          {
            prompt:
              "Que frase expressa em 1 Coríntios 15,3 a fidelidade de Paulo à Tradição apostólica?",
            options: [
              "'Inventei uma nova doutrina ontem'",
              "'Transmiti-vos antes de tudo o que eu mesmo recebi'",
              "'Cada cidade crie o seu credo'",
              "'Não escutem os outros apóstolos'",
            ],
            answer: 1,
            explanation:
              "Paulo transmite fielmente o depósito apostólico comum que recebeu na comunhão da Igreja (CIC 78, 639).",
          },
        ],
      },
      {
        id: "tesouro-vasos-barro",
        title: "2 Coríntios: Tesouro em vasos de barro e reconciliação",
        emoji: "🏺",
        xp: 20,
        teachings: [
          {
            title: "Trazemos esse tesouro em vasos de barro",
            text: "Em 2 Coríntios 4,7, Paulo compara nossa humanidade frágil a vasos de barro que carregam o tesouro imenso do Evangelho — para que fique claro que o poder extraordinário vem de Deus.",
            example:
              "Não desanimar com suas limitações: Deus usa até nossas rachaduras para deixar brilhar sua luz.",
            source: "2Cor 4,7-10 · CIC 827, 2685",
          },
          {
            title: "Na fraqueza manifesta-se a força",
            text: "Ao rezar três vezes pedindo que um espinho difícil fosse retirado, Paulo ouviu do Senhor: 'Basta-te a minha graça, pois na fraqueza a minha força se manifesta plenamente'.",
            example:
              "Quando uma limitação física ou emocional não desaparece logo, apoiar-se ainda mais na graça de Deus.",
            source: "2Cor 12,7-10 · CIC 1996, 2736",
          },
          {
            title: "Embaixadores da reconciliação",
            text: "Deus nos reconciliou consigo por Cristo e confiou à Igreja o ministério da reconciliação: 'Em nome de Cristo, suplicamo-vos: deixai-vos reconciliar com Deus!'.",
            example: "Ajudar pessoas próximas a reencontrar a paz com Deus e com seus familiares.",
            source: "2Cor 5,18-20 · CIC 1442, 1468",
          },
        ],
        questions: [
          {
            prompt:
              "Por que São Paulo diz que trazemos o tesouro do Evangelho em 'vasos de barro' (2Cor 4,7)?",
            options: [
              "Porque ele fabricava cerâmicas",
              "Para que fique claro que a força extraordinária vem de Deus e não da fragilidade humana",
              "Porque o Evangelho não tem valor",
              "Para esconder a fé dos outros",
            ],
            answer: 1,
            explanation:
              "A fraqueza humana do apóstolo e do cristão manifesta ainda mais a ação gratuita da graça de Deus (CIC 827, 2685).",
          },
          {
            prompt:
              "Qual resposta Jesus deu a São Paulo quando este pediu alívio para seu 'espinho na carne'?",
            options: [
              "'Você não rezou o suficiente'",
              "'Basta-te a minha graça, porque na fraqueza é que se revela a força'",
              "'Deixe de ser apóstolo'",
              "'Resolva sozinho sem ajuda'",
            ],
            answer: 1,
            explanation:
              "A oração não muda necessariamente todas as provações externas, mas transforma quem reza pela suficiência da graça (CIC 2736).",
          },
          {
            prompt: "Como 2 Coríntios 5,17 descreve quem está unido a Cristo?",
            options: [
              "Uma nova criatura: as coisas antigas passaram e tudo se fez novo",
              "Alguém igual ao que era sem esperança",
              "Um observador neutro",
              "Alguém incapaz de perdoar",
            ],
            answer: 0,
            explanation:
              "A graça batismal e a reconciliação fazem do fiel uma nova criação em Cristo Jesus (CIC 1265, 1999).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-prisao",
    title: "Cartas da Prisão: Filipenses, Colossenses e Filêmon",
    emoji: "✉️",
    lessons: [
      {
        id: "filipenses-alegria-kenosis",
        title: "Filipenses: o hino da humildade de Cristo e a alegria",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Esvaziou-se a si mesmo tomando a forma de servo",
            text: "Preso pelo Evangelho, Paulo cita o hino antigo de Filipenses 2,6-11: sendo de condição divina, Cristo assumiu a condição de servo, obedeceu até a morte de cruz e foi exaltado pelo Pai.",
            example:
              "Imitar os sentimentos de Cristo abrindo mão de teimosias e orgulho nas relações de casa.",
            source: "Fl 2,5-11 · CIC 449, 461, 602",
          },
          {
            title: "Alegrai-vos sempre no Senhor!",
            text: "Mesmo escrevendo da prisão sem saber se viveria ou morreria, Paulo transborda gratidão: 'Para mim o viver é Cristo'. Sua alegria não dependia das grades.",
            example: "Cultivar gratidão na oração antes de fazer listas de queixas.",
            source: "Fl 1,21; 4,4-7 · CIC 1820, 2637",
          },
          {
            title: "Tudo posso naquele que me fortalece",
            text: "Paulo aprendeu a viver tanto na abundância quanto na escassez porque sua força vinha de Cristo, não das circunstâncias externas.",
            example:
              "Confiar nessa promessa quando uma tarefa difícil exigir paciência e constância.",
            source: "Fl 4,11-13 · CIC 1808, 2015",
          },
        ],
        questions: [
          {
            prompt: "O que o hino cristológico de Filipenses 2,6-11 celebra sobre Jesus?",
            options: [
              "Que Jesus buscou poder político sobre Roma",
              "Seu rebaixamento humilde até a cruz e sua glorificação pelo Pai como Senhor de tudo",
              "Que Ele nunca teve natureza divina",
              "Que a humildade não agrada a Deus",
            ],
            answer: 1,
            explanation:
              "O hino proclama o esvaziamento amoroso do Filho feito servo e obediente até a cruz, exaltado como Kyrios (Senhor) (CIC 449, 602).",
          },
          {
            prompt:
              "Em que circunstância São Paulo escreveu a Carta aos Filipenses cheia de exortações à alegria?",
            options: [
              "Durante um banquete em palácio",
              "Estando preso por causa do Evangelho",
              "Em férias na ilha de Creta",
              "Antes de sua conversão",
            ],
            answer: 1,
            explanation:
              "Mesmo acorrentado, Paulo testemunha a paz profunda e a alegria que nascem da comunhão viva com Cristo (Fl 4,4-7; CIC 1820).",
          },
          {
            prompt: "Qual atitude Filipenses 2,3-5 recomenda nas relações comunitárias?",
            options: [
              "Competição para ver quem aparece mais",
              "Humildade de estimar os outros e buscar o bem comum, tendo os mesmos sentimentos de Cristo",
              "Ignorar os problemas dos outros",
              "Fazer tudo por vaidade",
            ],
            answer: 1,
            explanation:
              "A unidade fraterna alimenta-se da humildade e do serviço que imitam a kénosis (entrega) de Jesus (CIC 1825, 2559).",
          },
        ],
      },
      {
        id: "colossenses-primado-cristo",
        title: "Colossenses: Cristo, imagem do Deus invisível",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Tudo foi criado por Ele e para Ele",
            text: "Em Colossenses 1,15-20, Paulo proclama a grandeza cósmica de Cristo: Ele é a imagem do Deus invisível, primogênito de toda criatura e Cabeça da Igreja.",
            example:
              "Olhar para todo o universo — ciência, arte e natureza — sabendo que Cristo é seu sentido último.",
            source: "Cl 1,15-20 · CIC 291, 792",
          },
          {
            title: "Revestir-se de compaixão, bondade e perdão",
            text: "Porque ressuscitamos com Cristo, Paulo convida a buscar as coisas do alto revestindo-se de misericórdia, humildade, mansidão e, acima de tudo, do amor que une perfeitamente.",
            example: "Praticar hoje um gesto paciente e bondoso inspirado pelo Evangelho.",
            source: "Cl 3,1-14 · CIC 1694, 1825",
          },
          {
            title: "Fazer tudo em nome do Senhor Jesus",
            text: "Qualquer trabalho, palavra ou serviço feito em nome de Jesus e com gratidão ao Pai adquire valor de culto e alegria.",
            example:
              "Trabalhar nos estudos ou no emprego com dedicação como quem serve ao próprio Senhor.",
            source: "Cl 3,17.23 · CIC 2427, 2637",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é o título e a posição de Cristo na Igreja e na criação segundo Colossenses 1,15-18?",
            options: [
              "Um anjo entre muitos",
              "Imagem do Deus invisível, por quem tudo foi criado, e Cabeça do Corpo que é a Igreja",
              "Apenas um mestre local da Galileia",
              "Um símbolo distante sem ação hoje",
            ],
            answer: 1,
            explanation:
              "Cristo ocupa o primado absoluto sobre a criação e sobre a nova criação que é a Igreja, seu Corpo (CIC 291, 792).",
          },
          {
            prompt:
              "Segundo Colossenses 3,14, qual virtude amarra e aperfeiçoa todas as outras como um vínculo?",
            options: ["A caridade (amor)", "A pressa", "A desconfiança", "A fama"],
            answer: 0,
            explanation:
              "Sobre todas as virtudes revesti-vos da caridade, que é o vínculo da perfeição cristã (Cl 3,14; CIC 1827).",
          },
          {
            prompt:
              "O que significa fazer todas as coisas 'como para o Senhor e não para os homens' (Cl 3,23)?",
            options: [
              "Desprezar os chefes e colegas",
              "Agir com dedicação, honestidade e retidão interior mesmo quando ninguém está olhando",
              "Trabalhar só aos domingos",
              "Abandonar a família",
            ],
            answer: 1,
            explanation:
              "A fé purifica o trabalho cotidiano transformando o esforço honesto em oferta amorosa a Cristo (CIC 2427).",
          },
        ],
      },
      {
        id: "filemon-irmao-amado",
        title: "Carta a Filêmon: não mais escravo, mas irmão amado",
        emoji: "🤝",
        xp: 20,
        teachings: [
          {
            title: "Onésimo renascido na fé",
            text: "Onésimo era um escravo fugido de Filêmon que encontrou Paulo na prisão e se tornou cristão. Paulo envia-o de volta com esta carta comovente pedindo perdão e acolhida.",
            example:
              "Mediar reconciliações com delicadeza e respeito quando pessoas próximas estão brigadas.",
            source: "Fm 1,8-12 · CIC 1931, 2414",
          },
          {
            title: "Transformar estruturas sociais por dentro pelo Evangelho",
            text: "Sem incitar guerras sangrentas, Paulo planta a semente que desmonta a escravidão pela raiz: receba Onésimo não mais como escravo, mas acima de escravo, como irmão amado!",
            example:
              "Tratar toda pessoa que presta serviço ou trabalha conosco com dignidade fraterna igual à nossa.",
            source: "Fm 1,15-16 · CIC 1931, 2414",
          },
          {
            title: "Em Cristo não há mais barreiras de desprezo",
            text: "A fraternidade batismal muda o olhar sobre classes sociais, origens e passados errados: quem se converte em Cristo ganha dignidade de filho e irmão.",
            example: "Dar nova chance a quem errou no passado e busca recomeçar honestamente.",
            source: "Gl 3,28; Fm 1,17 · CIC 791, 1935",
          },
        ],
        questions: [
          {
            prompt: "Qual é o pedido central da breve Carta de São Paulo a Filêmon?",
            options: [
              "Que Filêmon castigue severamente o fugitivo Onésimo",
              "Que acolha Onésimo de volta com perdão, não mais como escravo, mas como irmão amado em Cristo",
              "Que venda todos os seus bens imediatamente",
              "Que feche a igreja em sua casa",
            ],
            answer: 1,
            explanation:
              "A fraternidade em Cristo supera a desigualdade da escravidão e pede reconciliação e respeito à dignidade pessoal (Fm 1,16; CIC 1931, 2414).",
          },
          {
            prompt: "Como a Igreja vê a escravidão e toda exploração humana à luz do Evangelho?",
            options: [
              "Como algo indiferente à fé",
              "Como grave ofensa contra o 7º Mandamento e a dignidade da pessoa humana criada à imagem de Deus",
              "Como instituição cristã permanente",
              "Como necessária para a economia",
            ],
            answer: 1,
            explanation:
              "O Catecismo condena a escravidão e qualquer comércio ou submissão indigna de seres humanos como violação da dignidade pessoal (CIC 2414).",
          },
          {
            prompt:
              "Que gesto concreto de amizade Paulo oferece em garantia por Onésimo em Filêmon 1,18?",
            options: [
              "Oferece-se para pagar do próprio bolso qualquer dívida ou prejuízo passado de Onésimo",
              "Pede dinheiro emprestado ao governador",
              "Exige que Filêmon dê dinheiro a Roma",
              "Foge da prisão",
            ],
            answer: 0,
            explanation:
              "Paulo assume pessoalmente o débito de Onésimo, imitando Cristo que paga por nós e nos reconcilia com o Pai (Fm 1,17-19; CIC 1931).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-tessalonicenses",
    title: "Cartas aos Tessalonicenses e Gálatas",
    emoji: "🕊️",
    lessons: [
      {
        id: "galatas-liberdade-crista",
        title: "Gálatas: liberdade para amar e frutos do Espírito",
        emoji: "🍇",
        xp: 20,
        teachings: [
          {
            title: "Foi para a liberdade que Cristo nos libertou",
            text: "Em Gálatas, Paulo recorda que a salvação é dom gratuito de Cristo na fé, não compra por rituais antigos. Mas a liberdade cristã não é pretexto para o egoísmo: serve para amar!",
            example:
              "Usar nossa liberdade de escolha não só para 'fazer o que dá vontade', mas para escolher o bem.",
            source: "Gl 5,1.13 · CIC 1731-1740",
          },
          {
            title: "Já não sou eu quem vive, é Cristo que vive em mim",
            text: "Em Gálatas 2,20, Paulo resume a vida mística do batizado: unido à entrega pessoal do Filho de Deus que me amou e se entregou por mim.",
            example:
              "Lembrar antes das decisões do dia: Jesus entregou-se pessoalmente por mim por amor.",
            source: "Gl 2,20 · CIC 521, 1694",
          },
          {
            title: "Os frutos do Espírito Santo no cotidiano",
            text: "Enquanto as obras egoístas geram inimizade, inveja e divisão, quem caminha no Espírito produz amor, alegria, paz, paciência, afabilidade, bondade, fidelidade, mansidão e domínio de si.",
            example:
              "Escolher um dos nove frutos do Espírito (como paciência ou mansidão) para pedir e praticar nesta semana.",
            source: "Gl 5,22-23 · CIC 1832",
          },
        ],
        questions: [
          {
            prompt:
              "Para qual finalidade Cristo nos deu a verdadeira liberdade segundo Gálatas 5,13?",
            options: [
              "Para satisfazer qualquer impulso egoísta sem regras",
              "Para servirmos uns aos outros pela caridade",
              "Para desprezar os mandamentos morais",
              "Para viver isolados da comunidade",
            ],
            answer: 1,
            explanation:
              "Quanto mais praticamos o bem no amor, mais livres nos tornamos em Cristo; a liberdade cresce a serviço do bem (CIC 1731, 1733).",
          },
          {
            prompt:
              "Qual lista em Gálatas 5,22-23 mostra os sinais de quem caminha guiado pelo Espírito Santo?",
            options: [
              "Orgulho, competição e discórdia",
              "Amor, alegria, paz, paciência, bondade, fidelidade, mansidão e autodomínio",
              "Riqueza, fama e silêncio frio",
              "Medo, dúvida e isolamento",
            ],
            answer: 1,
            explanation:
              "Os frutos do Espírito são perfeições que o Espírito Santo forma em nós como primícias da glória eterna (CIC 1832).",
          },
          {
            prompt:
              "O que significa 'Na plenitude dos tempos, Deus enviou seu Filho, nascido de mulher' (Gl 4,4)?",
            options: [
              "Que Cristo veio no momento preparado por Deus para nos dar a adoção filial no Espírito",
              "Que Jesus era apenas um anjo",
              "Que Maria não foi sua mãe verdadeira",
              "Que a história humana já havia terminado",
            ],
            answer: 0,
            explanation:
              "A Encarnação do Filho nascido de Maria inaugura a adoção filial de todos os crentes pelo Espírito Santo (CIC 422, 484).",
          },
        ],
      },
      {
        id: "tessalonicenses-trabalho-esperanca",
        title: "Tessalonicenses: orar sempre e esperar com serenidade",
        emoji: "⏳",
        xp: 20,
        teachings: [
          {
            title: "Orai sem cessar e dai graças em tudo",
            text: "Na primeira carta escrita por Paulo (1 Tessalonicenses), encontramos três pérolas curtas: 'Estai sempre alegres, orai sem cessar, em tudo dai graças'.",
            example:
              "Transformar pequenas esperas — no ônibus ou na fila — em orações breves de agradecimento.",
            source: "1Ts 5,16-18 · CIC 2638, 2742",
          },
          {
            title: "Não se entristecer como quem não tem esperança",
            text: "Preocupados com os cristãos que já tinham morrido antes da vinda de Cristo, os tessalonicenses foram consolados por Paulo: como Jesus morreu e ressuscitou, também reunirá os que dormem nele.",
            example:
              "Consolar amigos enlutados com presença amorosa e palavras de esperança na ressurreição.",
            source: "1Ts 4,13-18 · CIC 1001, 1681",
          },
          {
            title: "Vigilância serena unida ao trabalho honesto",
            text: "Em 2 Tessalonicenses, alguns pararam de trabalhar esperando o fim do mundo iminente. Paulo corrige com firmeza: quem não quer trabalhar, também não coma; sigam trabalhando em paz.",
            example:
              "Unir a esperança espiritual ao cumprimento fiel das obrigações diárias de casa e trabalho.",
            source: "2Ts 3,10-13 · CIC 2427-2428",
          },
        ],
        questions: [
          {
            prompt:
              "Que consolo São Paulo oferece aos cristãos que choram a morte de entes queridos em 1 Tessalonicenses 4?",
            options: [
              "Que a morte é o fim absoluto da pessoa",
              "Que crendo na morte e Ressurreição de Jesus, esperamos reencontrá-los para sempre com o Senhor",
              "Que não devemos sentir saudade humana",
              "Que apenas quem estiver vivo verá Cristo",
            ],
            answer: 1,
            explanation:
              "A fé pascal sustenta os que choram, lembrando que Cristo trará consigo para a vida eterna os que nele morreram (CIC 1001, 1681).",
          },
          {
            prompt: "Qual erro de comportamento São Paulo corrigiu em 2 Tessalonicenses 3?",
            options: [
              "Trabalhar com honestidade todos os dias",
              "Abandonar o trabalho na ociosidade sob pretexto da vinda próxima de Cristo",
              "Rezar pelos enfermos",
              "Ajudar os vizinhos",
            ],
            answer: 1,
            explanation:
              "A expectativa cristã da volta do Senhor nunca justifica ociosidade nem descuido dos deveres terrenos (CIC 674, 2427).",
          },
          {
            prompt: "Como é possível cumprir o conselho 'orai sem cessar' (1Ts 5,17)?",
            options: [
              "Parando de dormir e comer",
              "Mantendo o coração unido a Deus em momentos fixos de oração e jaculatórias ao longo do dia",
              "Falando sem parar no trabalho",
              "Vivendo isolado no deserto",
            ],
            answer: 1,
            explanation:
              "Como ensinam os Santos Padres e o Catecismo, oração constante nasce de um coração habitado por Deus e ritmado por tempos diários de prece (CIC 2742-2745).",
          },
        ],
      },
      {
        id: "discernir-tudo-reter-bem",
        title: "Examinar tudo e reter o que é bom",
        emoji: "🧭",
        xp: 20,
        teachings: [
          {
            title: "Não apagueis o Espírito; examinai tudo",
            text: "Em 1 Tessalonicenses 5,19-22, Paulo ensina equilíbrio precioso: não desprezar os dons do Espírito por cinismo frio, mas também não acreditar em tudo sem discernimento — reter o que é bom!",
            example:
              "Antes de seguir qualquer vídeo ou mensagem religiosa na internet, conferir se está em paz com o Evangelho e a Igreja.",
            source: "1Ts 5,19-22 · CIC 801, 2005",
          },
          {
            title: "Santificação integral de espírito, alma e corpo",
            text: "Paulo pede que o próprio Deus da paz nos santifique inteiramente, preservando todo o nosso ser — pensamentos, afetos e corpo — para a vinda de Cristo.",
            example: "Cuidar em harmonia da saúde do corpo, da paz da mente e da vida espiritual.",
            source: "1Ts 5,23 · CIC 362-367",
          },
          {
            title: "Fiel é Aquele que vos chama",
            text: "Não estamos sozinhos nessa caminhada: o mesmo Deus que nos chamou pela fé é fiel e realizará sua obra de santidade em nós.",
            example: "Terminar o dia confiando seus esforços e fraquezas à fidelidade de Deus.",
            source: "1Ts 5,24 · CIC 2015",
          },
        ],
        questions: [
          {
            prompt:
              "Qual critério equilibrado São Paulo propõe em 1 Tessalonicenses 5,19-21 sobre dons e ensinamentos?",
            options: [
              "Aceitar qualquer novidade sem pensar",
              "Não apagar o Espírito, examinar tudo com discernimento e reter o que é bom",
              "Rejeitar toda oração comunitária",
              "Acreditar apenas em sonhos",
            ],
            answer: 1,
            explanation:
              "Os carismas e ensinamentos são acolhidos com abertura ao Espírito e discernimento na comunhão da Igreja (CIC 801).",
          },
          {
            prompt:
              "O que significa a bênção de Paulo pedindo a santificação de 'espírito, alma e corpo' (1Ts 5,23)?",
            options: [
              "Que o ser humano tem três almas diferentes",
              "Que toda a pessoa humana — em sua unidade espiritual e corporal — é chamada à santidade",
              "Que o corpo não será salvo",
              "Que só a mente pertence a Deus",
            ],
            answer: 1,
            explanation:
              "O ser humano é unidade substancial de corpo e alma espiritual, chamado inteiro à santificação em Cristo (CIC 362-367).",
          },
          {
            prompt:
              "Qual garantia sustenta nossa caminhada de santificação em 1 Tessalonicenses 5,24?",
            options: [
              "A perfeição humana sem falhas",
              "'Fiel é Aquele que vos chama; Ele mesmo o realizará'",
              "A sorte histórica",
              "A força isolada da vontade",
            ],
            answer: 1,
            explanation:
              "A santificação é fruto da fidelidade gratuita de Deus à qual respondemos com nossa cooperação livre (CIC 2001, 2015).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-pastorais",
    title: "Cartas Pastorais: Timóteo e Tito",
    emoji: "🧭",
    lessons: [
      {
        id: "timoteo-reavivar-dom",
        title: "1 e 2 Timóteo: reavivar o dom de Deus",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "Fé transmitida na família (Loide e Eunice)",
            text: "Paulo recorda com ternura a fé sincera que habitou primeiro na avó Loide e na mãe Eunice de Timóteo. A família é sementeira preciosa das vocações e da fé.",
            example:
              "Agradecer aos avós, pais ou catequistas que primeiro nos ensinaram o Sinal da Cruz e as orações.",
            source: "2Tm 1,5 · CIC 1656, 2225",
          },
          {
            title: "Reavivar a chama e não ter espírito de timidez",
            text: "Deus não nos deu um espírito de medo e covardia, mas de força, amor e sabedoria. Paulo incentiva Timóteo a reavivar o dom recebido pela imposição das mãos.",
            example: "Não deixar o comodismo apagar o entusiasmo dos primeiros passos na fé.",
            source: "2Tm 1,6-7 · CIC 1538, 1808",
          },
          {
            title: "A Escritura útil para ensinar e educar para toda boa obra",
            text: "Toda Escritura é inspirada por Deus e prepara o cristão para viver o bem com equilíbrio, caridade e mansidão.",
            example:
              "Ler ao menos um trecho breve da Bíblia toda semana para manter a mente iluminada.",
            source: "2Tm 3,14-17 · CIC 105, 131",
          },
        ],
        questions: [
          {
            prompt: "Que três dons caracterizam o Espírito que Deus nos deu segundo 2 Timóteo 1,7?",
            options: [
              "Medo, silêncio e dúvida",
              "Força (coragem), amor e sabedoria (sobriedade)",
              "Orgulho, poder e riqueza",
              "Pressa, ira e competição",
            ],
            answer: 1,
            explanation:
              "O Espírito de Cristo liberta da covardia e comunica fortaleza, caridade e discernimento equilibrado (CIC 1808, 1831).",
          },
          {
            prompt: "Como Timóteo recebeu inicialmente a fé e o conhecimento das Escrituras?",
            options: [
              "Em família, por meio de sua avó Loide e sua mãe Eunice",
              "Apenas em bibliotecas romanas",
              "Sozinho numa ilha",
              "Por um edito do imperador",
            ],
            answer: 0,
            explanation:
              "A transmissão familiar da fé — a Igreja doméstica — prepara o terreno para o serviço na Igreja (2Tm 1,5; CIC 1656, 2225).",
          },
          {
            prompt:
              "Que rito sacramental aparece em 2 Timóteo 1,6 para transmitir o ministério ordenado?",
            options: [
              "Um sorteio anual",
              "A imposição das mãos conferindo o dom de Deus ao ministro",
              "Apenas uma assinatura em papel",
              "Uma viagem marítima",
            ],
            answer: 1,
            explanation:
              "A imposição das mãos acompanha a oração de ordenação na sucessão apostólica do sacramento da Ordem (CIC 1538, 1558).",
          },
        ],
      },
      {
        id: "combati-bom-combate",
        title: "Combati o bom combate e guardei a fé",
        emoji: "🏁",
        xp: 20,
        teachings: [
          {
            title: "Um só Deus e um só Mediador: Cristo Jesus",
            text: "Em 1 Timóteo 2,1-6, Paulo pede orações por todos os homens e autoridades, pois Deus quer que todos sejam salvos, havendo um só Deus e um só Mediador, Jesus Cristo homem.",
            example:
              "Rezar também por quem governa nossa cidade e país, pedindo justiça e paz para todos.",
            source: "1Tm 2,1-6 · CIC 480, 2635",
          },
          {
            title: "A Igreja, coluna e sustentáculo da verdade",
            text: "Paulo escreve para orientar como se portar na casa de Deus, que é a Igreja do Deus vivo, coluna e alicerce firme da verdade.",
            example:
              "Apoiar-se na fé segura da Igreja para não ser levado por modas espirituais confusas.",
            source: "1Tm 3,15 · CIC 171, 756",
          },
          {
            title: "Terminei a corrida, guardei a fé",
            text: "Já perto do martírio em Roma, Paulo escreve palavras serenas em 2 Timóteo 4,7-8: combati o bom combate, completei a carreira, guardei a fé; aguarda-me a coroa da justiça.",
            example: "Pedir a graça da perseverança fiel até o fim da vida, passo a passo.",
            source: "2Tm 4,6-8 · CIC 162, 1020",
          },
        ],
        questions: [
          {
            prompt: "O que Deus deseja para todos os seres humanos segundo 1 Timóteo 2,4?",
            options: [
              "Que apenas um pequeno país se salve",
              "Que todos sejam salvos e cheguem ao conhecimento da verdade",
              "Que ninguém ore pelos governantes",
              "Que os pecadores não sejam acolhidos",
            ],
            answer: 1,
            explanation:
              "A vontade salvífica universal de Deus envia a Igreja em oração e missão por toda a humanidade (CIC 851, 2635).",
          },
          {
            prompt: "Como 1 Timóteo 3,15 define a Igreja do Deus vivo?",
            options: [
              "Uma associação opcional sem verdade definida",
              "Coluna e sustentáculo firme da verdade",
              "Um edifício apenas do século primeiro",
              "Um grupo rival dos Apóstolos",
            ],
            answer: 1,
            explanation:
              "A Igreja guarda, transmite e defende com fidelidade apostólica a verdade recebida de Cristo (CIC 171, 756).",
          },
          {
            prompt: "Qual é o sentido de 'combati o bom combate, guardei a fé' em 2 Timóteo 4,7?",
            options: [
              "Vencer guerras militares terrestres",
              "Perseverar fiel ao Evangelho e à caridade através das provas até o encontro com Cristo",
              "Guardar a Bíblia trancada sem ler",
              "Desistir antes do fim",
            ],
            answer: 1,
            explanation:
              "A vida cristã é um bom combate de fé, paciência e fidelidade coroado pelo Senhor justo juiz (CIC 162, 2015).",
          },
        ],
      },
      {
        id: "tito-graca-educa",
        title: "Carta a Tito: a graça que educa para o bem",
        emoji: "🌱",
        xp: 20,
        teachings: [
          {
            title: "Organizar a comunidade em Creta com pastores idôneos",
            text: "Paulo deixou Tito na ilha de Creta para constituir presbíteros em cada cidade. Desde a época apostólica, a Igreja organiza-se visivelmente com pastores ordenados.",
            example:
              "Rezar pelos padres e diáconos da própria diocese, valorizando seu serviço diário.",
            source: "Tt 1,5-9 · CIC 1562, 1577",
          },
          {
            title: "A graça de Deus se manifestou educando-nos",
            text: "Em Tito 2,11-14 (lido na Missa da Noite de Natal), a graça salvadora educa-nos a renunciar à impiedade e viver neste mundo com sobriedade, justiça e piedade.",
            example:
              "Viver a fé como educação diária do coração em todas as idades — jovens, adultos e idosos.",
            source: "Tt 2,11-14 · CIC 458, 1809",
          },
          {
            title: "Salvos pelo banho do renascimento no Espírito",
            text: "Tito 3,5 recorda que fomos salvos não por obras orgulhosas, mas pela misericórdia de Deus através do banho da regeneração (Batismo) e renovação no Espírito Santo.",
            example: "Acolher cada novo batizado na paróquia com alegria e oração.",
            source: "Tt 3,4-7 · CIC 1215, 1996",
          },
        ],
        questions: [
          {
            prompt: "Para que Paulo confiou a Tito a missão em Creta segundo Tito 1,5?",
            options: [
              "Para fechar todas as comunidades",
              "Para organizar o que faltava e constituir presbíteros em cada cidade",
              "Para cobrar impostos romanos",
              "Para proibir casamentos",
            ],
            answer: 1,
            explanation:
              "As comunidades apostólicas estruturavam-se desde cedo mediante a ordenação de presbíteros em comunhão com os Apóstolos (CIC 1562).",
          },
          {
            prompt: "Que três virtudes Tito 2,12 afirma que a graça de Deus nos educa a viver?",
            options: [
              "Riqueza, fama e rapidez",
              "Sobriedade (temperança), justiça e piedade diante de Deus",
              "Orgulho, medo e silêncio frio",
              "Rivalidade, pressa e indiferença",
            ],
            answer: 1,
            explanation:
              "A graça manifestada em Cristo educa toda a vida moral: equilíbrio consigo, justiça com o próximo e piedade para com Deus (CIC 1809, 2002).",
          },
          {
            prompt:
              "A qual sacramento alude Tito 3,5 ao falar de 'banho da regeneração e renovação no Espírito Santo'?",
            options: ["Ao Batismo", "À Ordem", "À Unção dos Enfermos", "Às bênçãos de casas"],
            answer: 0,
            explanation:
              "O Batismo é chamado banho da regeneração porque realiza o novo nascimento espiritual na misericórdia de Deus (CIC 1215).",
          },
        ],
      },
    ],
  },
  {
    id: "carta-hebreus",
    title: "Carta aos Hebreus: Cristo Sumo Sacerdote",
    emoji: "⛪",
    lessons: [
      {
        id: "cristo-sumo-sacerdote",
        title: "Um Sumo Sacerdote compassivo e eterno",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Ele se compadece de nossas fraquezas",
            text: "A Carta aos Hebreus mostra que Jesus é o verdadeiro Sumo Sacerdote: provado em tudo como nós exceto no pecado, Ele compreende nossa fragilidade e convida a nos aproximar com confiança do trono da graça.",
            example:
              "Ir até Jesus nos momentos de fraqueza sem medo, sabendo que Ele conhece nossas lutas humanas.",
            source: "Hb 4,14-16 · CIC 473, 1544",
          },
          {
            title: "Sacrifício único oferecido de uma vez por todas",
            text: "Os antigos sacerdotes repetiam sacrifícios de animais todo ano; Cristo entrou uma vez por todas no santuário do céu oferecendo a si mesmo por amor.",
            example:
              "Entender que a Santa Missa não mata Jesus de novo: torna presente hoje aquele único sacrifício redentor.",
            source: "Hb 9,11-14; 10,12 · CIC 614, 1366",
          },
          {
            title: "Sempre vivo para interceder por nós",
            text: "Porque ressuscitou e permanece eternamente, o sacerdócio de Jesus nunca acaba: Ele intercede continuamente por nós junto ao Pai.",
            example:
              "Confiar nossas necessidades a Jesus na Missa, sabendo que Ele apresenta nossas preces ao Pai.",
            source: "Hb 7,24-25 · CIC 662, 1545",
          },
        ],
        questions: [
          {
            prompt: "Qual é o tema central da Carta aos Hebreus sobre a pessoa e missão de Jesus?",
            options: [
              "A construção de um terceiro templo de pedra",
              "Cristo como único e eterno Sumo Sacerdote da Nova Aliança, solidário com nossas fraquezas",
              "A substituição dos Evangelhos por leis agrícolas",
              "Que não há mais oração na Igreja",
            ],
            answer: 1,
            explanation:
              "Hebreus apresenta Cristo como único Sumo Sacerdote cuja oferta única abre o acesso definitivo ao Pai (CIC 614, 1544-1545).",
          },
          {
            prompt: "A Santa Missa repete um novo sacrifício diferente da Cruz?",
            options: [
              "Sim, Jesus morre fisicamente outra vez",
              "Não; o sacrifício da Cruz é único de uma vez por todas, e a Eucaristia o torna sacramentalmente presente hoje",
              "Sim, a Missa é separada da Cruz",
              "Não, a Missa é apenas uma palestra",
            ],
            answer: 1,
            explanation:
              "É o mesmo único sacrifício de Cristo no Calvário tornado presente de modo incruento no altar da Igreja (Hb 10,12; CIC 1366-1367).",
          },
          {
            prompt:
              "Por que podemos nos aproximar com confiança do trono da graça segundo Hebreus 4,16?",
            options: [
              "Porque somos perfeitos sem defeitos",
              "Porque temos em Jesus um Sumo Sacerdote misericordioso que conhece e compadece-se das nossas fraquezas",
              "Porque os pecados não importam",
              "Porque pagamos taxas ao templo",
            ],
            answer: 1,
            explanation:
              "A humanidade santa de Cristo garante misericórdia e auxílio oportuno a quem busca a Deus com confiança (CIC 473, 2632).",
          },
        ],
      },
      {
        id: "fe-hebreus-11",
        title: "Hebreus 11: a grande nuvem de testemunhas da fé",
        emoji: "☁️",
        xp: 20,
        teachings: [
          {
            title: "A fé é garantia do que se espera",
            text: "Hebreus 11,1 define a fé de modo inesquecível: é a posse antecipada dos bens que se esperam e a certeza das realidades que não se veem.",
            example:
              "Viver já hoje escolhas guiadas pela esperança do céu, não apenas pelo imediato visível.",
            source: "Hb 11,1 · CIC 146, 1814",
          },
          {
            title: "Os antigos caminharam como peregrinos rumo à pátria definitiva",
            text: "Abel, Noé, Abraão, Sara, Moisés e tantos outros caminharam pela fé reconhecendo que somos peregrinos e estrangeiros rumo a uma cidade cujo arquiteto é Deus.",
            example:
              "Evitar apegar o coração de modo absoluto a bens terrenos, lembrando nossa peregrinação ao céu.",
            source: "Hb 11,13-16 · CIC 144-147, 1024",
          },
          {
            title: "Fixos os olhos em Jesus, autor e consumador da fé",
            text: "Cercados por essa grande nuvem de testemunhas, corremos com perseverança a corrida da vida mantendo o olhar fixo em Jesus.",
            example:
              "Quando bater o cansaço, olhar para Jesus e para o exemplo dos santos que completaram o caminho.",
            source: "Hb 12,1-2 · CIC 828, 2683",
          },
        ],
        questions: [
          {
            prompt: "Como Hebreus 11,1 descreve a fé?",
            options: [
              "Apenas um palpite sem fundamento",
              "Garantia firme das coisas que se esperam e prova das realidades invisíveis",
              "Crença apenas no que tocamos com as mãos",
              "Ausência de esperança",
            ],
            answer: 1,
            explanation:
              "A fé abre o coração às promessas futuras de Deus e torna reais as verdades invisíveis do Reino (CIC 146, 1814).",
          },
          {
            prompt:
              "Por que os patriarcas se consideravam 'peregrinos e estrangeiros na terra' (Hb 11,13)?",
            options: [
              "Porque não gostavam da natureza",
              "Porque seu coração desejava a pátria celeste definitiva preparada por Deus",
              "Porque perderam todos os mapas",
              "Porque proibiam construir casas",
            ],
            answer: 1,
            explanation:
              "A esperança cristã reconhece que nossa pátria definitiva é o céu em comunhão eterna com Deus (CIC 1024, 1818).",
          },
          {
            prompt: "Para quem Hebreus 12,2 manda fixar os olhos durante a corrida da vida?",
            options: [
              "Em Jesus, autor e consumador da fé",
              "Nos aplausos da plateia",
              "Nos erros dos colegas",
              "Nas dificuldades do passado",
            ],
            answer: 0,
            explanation:
              "Olhar para Jesus que venceu a cruz sustenta nossa constância para não desanimarmos no caminho (Hb 12,2-3; CIC 2683).",
          },
        ],
      },
      {
        id: "jesus-ontem-hoje-sempre",
        title: "Jesus Cristo é o mesmo ontem, hoje e sempre",
        emoji: "♾️",
        xp: 20,
        teachings: [
          {
            title: "Fidelidade que não muda com as modas",
            text: "Enquanto opiniões culturais mudam rapidamente a cada década, Hebreus 13,8 proclama: 'Jesus Cristo é o mesmo ontem, hoje e pelos séculos!'.",
            example:
              "Encontrar estabilidade interior na amizade com Cristo em meio a tempos agitados.",
            source: "Hb 13,8 · CIC 134, 426",
          },
          {
            title: "Não esqueçais a hospitalidade e a partilha",
            text: "O último capítulo de Hebreus traduz a fé elevada em gestos muito concretos: amar os irmãos, acolher hóspedes com carinho, lembrar dos presos e honrar o matrimônio.",
            example: "Receber bem quem visita nossa casa e cuidar da fidelidade familiar.",
            source: "Hb 13,1-5 · CIC 1615, 2447",
          },
          {
            title: "Louvor e serviço que agradam a Deus",
            text: "Não temos aqui cidade permanente, mas buscamos a futura — e por isso oferecemos a Deus um sacrifício contínuo de louvor e não esquecemos a beneficência e a comunhão.",
            example:
              "Unir o louvor dos lábios na oração ao gesto concreto de solidariedade nesta semana.",
            source: "Hb 13,14-16 · CIC 2100, 2639",
          },
        ],
        questions: [
          {
            prompt: "Qual certeza sobre Cristo aparece em Hebreus 13,8?",
            options: [
              "Que seu Evangelho precisa ser trocado todo século",
              "Que Jesus Cristo é o mesmo ontem, hoje e para sempre",
              "Que Ele só agiu no século I",
              "Que sua palavra depende das tendências passageiras",
            ],
            answer: 1,
            explanation:
              "A verdade e o amor de Cristo permanecem firmes e atuais em todas as épocas da história (Hb 13,8; CIC 134).",
          },
          {
            prompt:
              "Que sacrifícios espirituais Hebreus 13,15-16 exorta os cristãos a oferecer continuamente?",
            options: [
              "O louvor que confessa o Nome de Deus e a prática do bem e da partilha",
              "Sacrifícios de touros no templo",
              "Votos de não ajudar os pobres",
              "Disputas sem fim",
            ],
            answer: 0,
            explanation:
              "A adoração cristã une o sacrifício de louvor em Cristo às obras concretas de misericórdia (CIC 2100, 2639).",
          },
          {
            prompt: "Que virtudes práticas de convivência Hebreus 13,1-5 recomenda?",
            options: [
              "Egoísmo e avareza",
              "Amor fraterno, hospitalidade, cuidado com os presos/sofredores, respeito ao matrimônio e desapego do dinheiro",
              "Fuga de todas as amizades",
              "Inveja dos líderes",
            ],
            answer: 1,
            explanation:
              "A fé cristã madura manifesta-se na hospitalidade, na fidelidade conjugal e na liberdade diante do dinheiro (CIC 1615, 2447).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-pedro-joao",
    title: "Cartas de São Pedro, São João e São Judas",
    emoji: "🗝️",
    lessons: [
      {
        id: "pedro-pedras-vivas",
        title: "1 Pedro: pedras vivas e sacerdócio santo",
        emoji: "🪨",
        xp: 20,
        teachings: [
          {
            title: "Pedras vivas edificadas sobre Cristo",
            text: "São Pedro chama os batizados de 'pedras vivas' que, unidas a Cristo pedra angular, formam um edifício espiritual, um sacerdócio santo e um povo adquirido para louvar a Deus.",
            example: "Sentir-se parte ativa da paróquia, não mero visitante eventual de domingo.",
            source: "1Pd 2,4-9 · CIC 756, 784, 1268",
          },
          {
            title: "Sede santos porque Eu sou santo",
            text: "Resgatados não com ouro ou prata perecíveis, mas pelo sangue precioso de Cristo Cordeiro sem mancha, somos chamados à santidade em toda a nossa conduta.",
            example: "Valorizar a própria vida pelo alto preço que Cristo pagou por nós na Cruz.",
            source: "1Pd 1,15-19 · CIC 608, 2013",
          },
          {
            title: "Lançai sobre Ele toda a vossa preocupação",
            text: "Pedro orienta a revestir-se de humildade uns para com os outros e lançar sobre Deus toda ansiedade, pois Ele mesmo cuida de nós, enquanto resistimos firmes na fé.",
            example: "Entregar explicitamente na oração noturna as preocupações que tiram o sono.",
            source: "1Pd 5,5-9 · CIC 305, 2559",
          },
        ],
        questions: [
          {
            prompt:
              "Que imagem São Pedro usa em 1 Pedro 2,5 para descrever os fiéis unidos a Cristo na Igreja?",
            options: [
              "Ilhas isoladas no oceano",
              "Pedras vivas que formam um templo espiritual e sacerdócio santo",
              "Espectadores silenciosos",
              "Soldados mercenários",
            ],
            answer: 1,
            explanation:
              "Batizados em Cristo, formamos juntos a casa espiritual edificada sobre Ele como pedra angular (1Pd 2,4-5; CIC 756, 784).",
          },
          {
            prompt: "Por qual preço fomos resgatados segundo 1 Pedro 1,18-19?",
            options: [
              "Pelo sangue precioso de Cristo, Cordeiro sem defeito e sem mancha",
              "Por moedas de prata e ouro",
              "Por sacrifícios de animais no Egito",
              "Por acordos humanos",
            ],
            answer: 0,
            explanation:
              "A redenção realiza-se pelo dom precioso da vida e sangue de Cristo entregue por amor (CIC 608, 613).",
          },
          {
            prompt: "Que atitude diante das preocupações 1 Pedro 5,7 nos convida a ter?",
            options: [
              "Carregar tudo sozinho com desespero",
              "Lançar sobre Deus toda preocupação, porque Ele cuida de nós",
              "Ignorar responsabilidades reais",
              "Fugir de quem amamos",
            ],
            answer: 1,
            explanation:
              "A confiança filial na Providência permite entregar a Deus as ansiedades mantendo vigilância e firmeza na fé (CIC 305).",
          },
        ],
      },
      {
        id: "joao-cartas-deus-amor",
        title: "Cartas de São João: Deus é Amor e luz",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Deus é Luz e não há trevas nele",
            text: "Em 1 João 1,5-9, o apóstolo ensina que se dissermos não ter pecado enganamos a nós mesmos; mas se confessarmos nossos pecados, Deus é fiel e justo para nos perdoar e purificar.",
            example:
              "Reconhecer erros sem justificativas defensivas para experimentar a limpeza da Confissão.",
            source: "1Jo 1,5-9 · CIC 1455, 1847",
          },
          {
            title: "Quem não ama o irmão que vê, não ama a Deus",
            text: "São João desmascara qualquer espiritualidade falsa: é impossível dizer 'eu amo a Deus' odiando o irmão que está bem ao nosso lado.",
            example:
              "Acompanhar a piedade religiosa com paciência, respeito e ajuda concreta em casa.",
            source: "1Jo 4,20-21 · CIC 1829, 2083",
          },
          {
            title: "Não amar só de palavra e língua, mas em obras e verdade",
            text: "Se alguém tem bens do mundo e fecha o coração diante do irmão necessitado, como permaneceria nele o amor de Deus? A caridade mede-se na verdade das atitudes.",
            example:
              "Transformar compaixão sentida diante de quem precisa em ajuda real e discreta.",
            source: "1Jo 3,17-18 · CIC 2447",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a afirmação de 1 João 1,8-9 sobre reconhecer ou negar os próprios pecados?",
            options: [
              "Quem diz que não tem pecado engana-se a si mesmo; se confessarmos, Deus fiel perdoa e purifica",
              "Os cristãos jamais precisam pedir perdão",
              "Confessar os pecados diminui a fé",
              "Pecados não precisam ser reconhecidos",
            ],
            answer: 0,
            explanation:
              "O reconhecimento humilde do pecado diante de Deus e da Igreja abre o coração à graça purificadora de Cristo (CIC 1455, 1847).",
          },
          {
            prompt: "Como São João testa a sinceridade de quem diz amar a Deus?",
            options: [
              "Pelo número de viagens feitas",
              "Pelo amor concreto ao irmão visível em obras e verdade",
              "Pela altura da voz nas canções",
              "Pelo isolamento social",
            ],
            answer: 1,
            explanation:
              "O amor a Deus e o amor concreto ao próximo são inseparáveis segundo 1 João 4,20-21 (CIC 1829, 2083).",
          },
          {
            prompt:
              "O que significa a frase 'Vede que amor nos deu o Pai: sermos chamados filhos de Deus, e nós o somos!' (1Jo 3,1)?",
            options: [
              "Que a filiação divina é apenas um apelido simbólico",
              "Que pela graça somos realmente elevados à condição de filhos amados de Deus",
              "Que já não precisamos crescer na caridade",
              "Que apenas João era filho",
            ],
            answer: 1,
            explanation:
              "Pela graça batismal tornamo-nos verdadeiramente participantes da natureza divina e filhos adotivos no Filho (CIC 460, 1265).",
          },
        ],
      },
      {
        id: "pedro2-judas-fidelidade",
        title: "2 Pedro e São Judas: crescer na graça e guardar a fé",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Participantes da natureza divina",
            text: "Em 2 Pedro 1,4, o apóstolo proclama a vocação altíssima do cristão: pela graça de Cristo tornamo-nos 'participantes da natureza divina', unindo à fé a virtude, o domínio de si, a paciência e o amor.",
            example:
              "Crescer passo a passo nas virtudes com a mesma dedicação que colocamos no trabalho ou estudo.",
            source: "2Pd 1,3-8 · CIC 460, 1996",
          },
          {
            title: "Mil anos para Deus são como um dia",
            text: "Diante dos que zombavam da demora da vinda de Cristo, Pedro explicou que Deus não tarda por esquecimento: Ele tem paciência, desejando que todos tenham tempo para se converter!",
            example:
              "Usar o tempo presente com gratidão para a conversão própria e para rezar pelos outros.",
            source: "2Pd 3,8-9 · CIC 671, 1040",
          },
          {
            title: "Combater pela fé entregue aos santos uma vez por todas",
            text: "A breve Carta de São Judas exorta a permanecer na fé apostólica recebida, orando no Espírito Santo, conservando-se no amor de Deus e acolhendo quem duvida com misericórdia.",
            example:
              "Estudar as bases da fé católica e dialogar com paciência com quem tem dúvidas sinceras.",
            source: "Jd 1,3.20-23 · CIC 171, 857",
          },
        ],
        questions: [
          {
            prompt:
              "Que expressão extraordinária 2 Pedro 1,4 usa sobre a elevação do cristão pela graça?",
            options: [
              "Simples empregados de passagem",
              "Participantes da natureza divina",
              "Seres iguais aos anjos sem corpo",
              "Observadores distantes de Deus",
            ],
            answer: 1,
            explanation:
              "Pela Encarnação do Filho e pelo dom do Espírito, somos elevados pela graça a participar da vida íntima da Trindade (CIC 460, 1996).",
          },
          {
            prompt:
              "Por que a vinda gloriosa de Cristo ainda não aconteceu imediatamente segundo 2 Pedro 3,9?",
            options: [
              "Porque Deus esqueceu a promessa",
              "Por paciência misericordiosa de Deus, que não quer que ninguém se perca mas chegue à conversão",
              "Por falta de poder divino",
              "Porque o mundo acabou sem percebermos",
            ],
            answer: 1,
            explanation:
              "O tempo da Igreja é tempo de paciência divina e oportunidade missionária de salvação para todos (CIC 671, 1040).",
          },
          {
            prompt:
              "Qual equilíbrio a Carta de São Judas recomenda no trato com quem tem dúvidas na fé?",
            options: [
              "Guardar a fé recebida dos Apóstolos e tratar os vacilantes com misericórdia",
              "Zombar de quem faz perguntas",
              "Mudar o Credo a cada semana",
              "Desprezar a oração no Espírito",
            ],
            answer: 0,
            explanation:
              "Fidelidade firme à fé apostólica e caridade paciente caminham juntas no anúncio cristão (Jd 1,3.22; CIC 171, 857).",
          },
        ],
      },
    ],
  },
  {
    id: "livro-apocalipse",
    title: "O Livro do Apocalipse: Esperança na Vitória de Cristo",
    emoji: "📜",
    lessons: [
      {
        id: "apocalipse-sentido-esperanca",
        title: "O sentido do Apocalipse: consolação para a Igreja perseguida",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "Apocalipse significa 'revelação', não livro de pânico",
            text: "Escrito por João na ilha de Patmos durante perseguições, o Apocalipse não serve para adivinhar datas secretas com medo, mas para revelar quem governa a história: Cristo ressuscitado!",
            example:
              "Ler o Apocalipse como livro de esperança cristã e não como roteiro de terror.",
            source: "Ap 1,1-8 · CIC 113, 672",
          },
          {
            title: "Cristo caminha no meio das sete igrejas",
            text: "Nas sete cartas iniciais (Ap 2–3), Jesus conhece de perto as lutas, qualidades e quedas de cada comunidade, chamando ao arrependimento — 'retoma teu primeiro amor!' — e prometendo vitória.",
            example:
              "Pedir a Jesus que reavive em nós 'o primeiro amor' pelo Evangelho e pelos sacramentos.",
            source: "Ap 2,4; 3,20 · CIC 756, 1428",
          },
          {
            title: "Alfa e Ômega, o Primeiro e o Último",
            text: "Jesus assegura: 'Não temas! Eu sou o Primeiro e o Último, estive morto mas vivo pelos séculos e tenho as chaves da morte'.",
            example: "Confiar o início e o fim de nossa vida nas mãos de Jesus, Senhor do tempo.",
            source: "Ap 1,17-18 · CIC 206, 653",
          },
        ],
        questions: [
          {
            prompt: "Qual é o objetivo principal do livro do Apocalipse na Sagrada Escritura?",
            options: [
              "Espalhar pânico e datas exatas do fim do mundo",
              "Consolar e fortalecer a esperança da Igreja nas provações, revelando que Cristo já venceu",
              "Ensinar astrologia antiga",
              "Substituir os Evangelhos",
            ],
            answer: 1,
            explanation:
              "O Apocalipse revela o sentido profundo da história sob o senhorio do Cordeiro vencedor, animando à perseverança fiel (CIC 672, 1137).",
          },
          {
            prompt: "Que correção amorosa Jesus dirige à comunidade de Éfeso em Apocalipse 2,4?",
            options: [
              "'Deixaste o teu primeiro amor — lembra-te de onde caíste e converte-te'",
              "'Você trabalhou demais pelos pobres'",
              "'Pare de ler as Escrituras'",
              "'Feche as portas aos visitantes'",
            ],
            answer: 0,
            explanation:
              "Mesmo comunidades ativas precisam renovar continuamente o fervor da caridade primeira para com Cristo (CIC 1428).",
          },
          {
            prompt: "O que simbolizam as letras gregas Alfa e Ômega aplicadas a Cristo?",
            options: [
              "Apenas iniciais de dois profetas",
              "Que Cristo é o Princípio e o Fim de toda a criação e história",
              "Nomes de duas cidades gregas",
              "Símbolos exclusivos de música",
            ],
            answer: 1,
            explanation:
              "Alfa (primeira letra) e Ômega (última) proclamam a eternidade divina e o senhorio de Deus e de Cristo sobre tudo (CIC 206, 1169).",
          },
        ],
      },
      {
        id: "cordeiro-liturgia-celeste",
        title: "O Cordeiro vitorioso e a liturgia do céu",
        emoji: "🐑",
        xp: 20,
        teachings: [
          {
            title: "A Missa une a terra ao culto do céu",
            text: "Os capítulos 4 e 5 do Apocalipse descrevem o louvor eterno diante do trono de Deus: os anjos e os santos proclamam 'Santo, Santo, Santo' e adoram o Cordeiro imolado e vivo.",
            example:
              "Na Santa Missa, ao cantar o 'Santo', lembrar que entramos na liturgia do céu descrita no Apocalipse.",
            source: "Ap 4,8; 5,6-12 · CIC 1137-1139",
          },
          {
            title: "Venceu por meio do Cordeiro que foi imolado",
            text: "João ouviu anunciar o 'Leão de Judá', mas ao olhar viu um Cordeiro de pé como que imolado! A força de Deus vence não pela brutalidade, mas pelo amor sacrificial.",
            example:
              "Responder às tensões do dia com a força mansa do Cordeiro, não com agressividade.",
            source: "Ap 5,5-9 · CIC 608, 1137",
          },
          {
            title: "As orações dos santos sobem como incenso",
            text: "No santuário celeste, taças de ouro cheias de incenso representam as orações dos fiéis apresentadas diante de Deus. Nenhuma prece sincera se perde!",
            example:
              "Valorizar cada oração simples rezada em casa, sabendo que sobe até o trono de Deus.",
            source: "Ap 5,8; 8,3-4 · CIC 956, 2642",
          },
        ],
        questions: [
          {
            prompt: "Que conexão existe entre a Santa Missa e os capítulos 4 e 5 do Apocalipse?",
            options: [
              "Nenhuma ligação",
              "A liturgia terrestre da Igreja participa do louvor eterno do céu diante de Deus e do Cordeiro",
              "O Apocalipse proíbe cânticos na igreja",
              "Só anjos podem cantar o Santo",
            ],
            answer: 1,
            explanation:
              "O Catecismo ensina que o Apocalipse revela a liturgia celeste na qual toda celebração da Igreja toma parte (CIC 1137-1139).",
          },
          {
            prompt: "Que paradoxo surpreendente João vê em Apocalipse 5,5-6?",
            options: [
              "Anunciam o Leão vencedor da tribo de Judá, e ele vê um Cordeiro de pé como que imolado",
              "Vê um exército romano vitorioso",
              "Vê o livro fechado para sempre",
              "Não há ninguém digno no céu",
            ],
            answer: 0,
            explanation:
              "Cristo vence o mal e abre a história não pela violência, mas entregando-se como Cordeiro pascal (CIC 608, 1137).",
          },
          {
            prompt: "O que simboliza o incenso oferecido no altar de ouro em Apocalipse 5,8 e 8,3?",
            options: [
              "Apenas fumaça decorativa",
              "As orações dos santos e de todo o povo fiel que sobem à presença de Deus",
              "O fim das súplicas",
              "Um costume exclusivamente civil",
            ],
            answer: 1,
            explanation:
              "A oração dos fiéis na terra une-se à intercessão celeste dos santos como perfume agradável a Deus (CIC 956, 2642).",
          },
        ],
      },
      {
        id: "nova-jerusalem-vem-senhor",
        title: "A Nova Jerusalém e o clamor 'Vem, Senhor Jesus!'",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "A mulher vestida de sol e a vitória sobre o dragão",
            text: "Em Apocalipse 12, a Igreja vê tanto o povo de Deus como a Virgem Maria gerando o Messias protegido por Deus diante da serpente antiga, vencida pelo sangue do Cordeiro.",
            example: "Recorrer à intercessão de Maria nos momentos de tentação e luta espiritual.",
            source: "Ap 12,1-11 · CIC 966, 972",
          },
          {
            title: "A cidade onde Deus mesmo é a luz",
            text: "Na Jerusalém celeste não haverá noite nem templo separado, porque o Senhor Deus e o Cordeiro são o seu Templo e a sua luz para sempre.",
            example:
              "Olhar para a comunhão eterna com a Trindade como a maior beleza que espera por nós.",
            source: "Ap 21,22-25 · CIC 1025, 1044",
          },
          {
            title: "O Espírito e a Esposa dizem: Vem!",
            text: "A Bíblia inteira fecha com um convite aberto e uma oração alegre: quem tem sede venha receber de graça a água da vida — Amém, vem, Senhor Jesus!",
            example:
              "Terminar o dia ou a oração com esperança viva: 'Vem, Senhor Jesus, à minha casa e ao meu coração!'.",
            source: "Ap 22,17-20 · CIC 671, 2817",
          },
        ],
        questions: [
          {
            prompt: "Por que não há templo físico na Nova Jerusalém descrita em Apocalipse 21,22?",
            options: [
              "Porque as pessoas esqueceram a oração",
              "Porque o próprio Senhor Deus Todo-Poderoso e o Cordeiro são o seu Templo e comunhão direta",
              "Porque não havia pedras",
              "Porque os santos não estarão lá",
            ],
            answer: 1,
            explanation:
              "Na visão beatífica do céu, toda mediação simbólica cede lugar à comunhão direta e eterna com Deus e o Cordeiro (CIC 1023, 1044).",
          },
          {
            prompt:
              "Como o livro do Apocalipse e toda a Bíblia se encerram em Apocalipse 22,17-20?",
            options: [
              "Com uma lista de proibições",
              "Com o convite gratuito à água da vida e a prece confiante: 'Amém! Vem, Senhor Jesus!'",
              "Com uma ameaça sem perdão",
              "Com o esquecimento da criação",
            ],
            answer: 1,
            explanation:
              "A Escritura culmina na esperança nupcial da Igreja que anseia pelo encontro definitivo com Cristo (CIC 671, 2817).",
          },
          {
            prompt: "Pelo que os mártires e fiéis vencem o acusador em Apocalipse 12,11?",
            options: [
              "Pela força política do império",
              "Pelo sangue do Cordeiro e pela palavra do seu testemunho fiel",
              "Por estratégias secretas de guerra",
              "Por riquezas escondidas",
            ],
            answer: 1,
            explanation:
              "A vitória espiritual nasce da graça redentora de Cristo e da fidelidade testemunhada até o fim (CIC 2473).",
          },
        ],
      },
    ],
  },
];
