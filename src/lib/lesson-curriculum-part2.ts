import type { LessonUnit } from "./lesson-types";

// Unidades 30 a 44 (15 unidades de 3 lições cada = 45 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_2_UNITS: LessonUnit[] = [
  {
    id: "obras-misericordia",
    title: "As Obras de Misericórdia",
    emoji: "🤝",
    lessons: [
      {
        id: "obras-corporais",
        title: "Obras de misericórdia corporais",
        emoji: "🥖",
        xp: 20,
        teachings: [
          {
            title: "Ver Cristo em quem tem fome ou sede",
            text: "Em Mateus 25, Jesus se identifica pessoalmente com quem precisa de ajuda: dar de comer a quem tem fome, dar de beber a quem tem sede e vestir os nus são gestos feitos ao próprio Senhor.",
            example:
              "Separar alimentos ou roupas em bom estado para doar mensalmente à pastoral social ou a abrigos.",
            source: "Mt 25,35-40 · CIC 2447",
          },
          {
            title: "Acolher o estrangeiro e cuidar dos enfermos",
            text: "Dar pousada aos peregrinos, visitar os doentes e assistir os encarcerados mostram que nenhum ser humano deve ser descartado por fragilidade, origem ou erro passado.",
            example:
              "Visitar um idoso ou doente da vizinhança para levar conversa, companhia e auxílio prático.",
            source: "Mt 25,35-36 · CIC 2447",
          },
          {
            title: "Sepultar os mortos com respeito cristão",
            text: "A sétima obra corporal é sepultar os mortos com dignidade, honrando o corpo que foi templo do Espírito Santo e consolando as famílias na esperança da ressurreição.",
            example:
              "Participar da missa de corpo presente ou sétimo dia apoiando a família enlutada com oração.",
            source: "Tb 1,17-19 · CIC 2300, 2447",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Obras corporais e Obras espirituais",
            instruction:
              "Classifique cada gesto de caridade entre obra corporal e obra espiritual.",
            categories: ["Obra de misericórdia corporal", "Obra de misericórdia espiritual"],
            items: [
              { id: "om1", text: "Dar alimento a quem passa fome", category: 0 },
              { id: "om2", text: "Consolar quem está triste ou aflito", category: 1 },
              { id: "om3", text: "Visitar um enfermo no hospital", category: 0 },
              { id: "om4", text: "Rezar pelos vivos e pelos falecidos", category: 1 },
            ],
            explanation:
              "As obras corporais socorrem o próximo em suas necessidades materiais e as espirituais cuidam da alma e do coração (CIC 2447).",
            source: "Mt 25,31-46 · CIC 2447",
          },
        ],
        questions: [
          {
            prompt:
              "Qual texto do Evangelho fundamenta diretamente as obras de misericórdia corporais?",
            options: [
              "A multiplicação dos peixes no deserto",
              "O juízo final em Mateus 25 ('tudo o que fizestes a um destes pequeninos, foi a mim')",
              "A pesca milagrosa em Lucas 5",
              "A entrada em Jericó",
            ],
            answer: 1,
            explanation:
              "Em Mateus 25,31-46, Cristo declara identificar-se com os famintos, sedentos, estrangeiros, nus, doentes e presos (CIC 2447).",
          },
          {
            prompt: "Qual destas atitudes pertence às obras de misericórdia corporais?",
            options: [
              "Dar bom conselho",
              "Vestir os nus e visitar os enfermos",
              "Instruir os que não sabem",
              "Suportar com paciência as injúrias",
            ],
            answer: 1,
            explanation:
              "Alimentar, dar de beber, vestir, acolher, visitar doentes e presos e sepultar os mortos são as sete obras corporais (CIC 2447).",
          },
          {
            prompt: "Por que sepultar os mortos é considerada uma obra de misericórdia na Igreja?",
            options: [
              "Por simples formalidade civil",
              "Por respeito ao corpo que foi templo do Espírito e pela fé na ressurreição",
              "Para evitar falar sobre a eternidade",
              "Apenas para pessoas famosas",
            ],
            answer: 1,
            explanation:
              "O respeito aos corpos dos falecidos honra a dignidade humana e a esperança cristã da ressurreição (CIC 2300, 2447).",
          },
        ],
      },
      {
        id: "obras-espirituais",
        title: "Obras de misericórdia espirituais",
        emoji: "💬",
        xp: 20,
        teachings: [
          {
            title: "Aconselhar, ensinar e corrigir com mansidão",
            text: "Dar bom conselho, ensinar os que ignoram e corrigir os que erram ajudam o irmão a crescer na verdade. Toda orientação cristã deve nascer do amor, nunca da humilhação.",
            example:
              "Ajudar um colega com paciência nos estudos ou orientar um amigo em particular com respeito.",
            source: "Gl 6,1-2 · CIC 1829, 2447",
          },
          {
            title: "Consolar os aflitos e sofrer com paciência as injúrias",
            text: "Estar junto de quem sofre tristeza e suportar com paciência as provocações ou defeitos alheios trazem a paz do Evangelho ao ambiente familiar e comunitário.",
            example: "Escutar um amigo que desabafa sem tentar apressar ou diminuir a dor dele.",
            source: "1Ts 5,14 · CIC 2447",
          },
          {
            title: "Perdoar as ofensas e rezar por vivos e falecidos",
            text: "Perdoar de coração e interceder na oração pelos vivos e pelos mortos são obras espirituais acessíveis a qualquer cristão em qualquer idade.",
            example:
              "Antes de dormir, rezar uma Ave-Maria por alguém com quem teve dificuldade durante o dia.",
            source: "Mt 6,14; 2Mc 12,46 · CIC 2447, 2844",
          },
        ],
        questions: [
          {
            prompt: "Como devemos praticar a obra espiritual de 'corrigir quem erra'?",
            options: [
              "Expondo a pessoa em público para que sinta vergonha",
              "Com espírito de mansidão, caridade e desejo sincero do bem do irmão",
              "Com gritos e ameaças",
              "Fingindo nunca ter defeitos",
            ],
            answer: 1,
            explanation:
              "São Paulo ensina a corrigir com espírito de mansidão, cuidando também de nós mesmos e carregando os fardos uns dos outros (Gl 6,1-2; CIC 2447).",
          },
          {
            prompt: "Qual das opções reúne apenas obras de misericórdia espirituais?",
            options: [
              "Dar de comer e dar pousada",
              "Consolar os aflitos, perdoar as ofensas e rezar pelos vivos e falecidos",
              "Vestir os nus e sepultar os mortos",
              "Dar de beber e construir casas",
            ],
            answer: 1,
            explanation:
              "Aconselhar, ensinar, corrigir, consolar, perdoar, suportar com paciência e rezar compõem as sete obras espirituais (CIC 2447).",
          },
          {
            prompt: "Quem pode praticar as obras de misericórdia espirituais?",
            options: [
              "Somente padres e bispos",
              "Todo cristão, mesmo sem grandes recursos financeiros",
              "Apenas teólogos formados",
              "Somente pessoas idosas",
            ],
            answer: 1,
            explanation:
              "Todo discípulo de Cristo pode praticar a misericórdia no cuidado do coração, do perdão e da oração fraterna (CIC 2447).",
          },
        ],
      },
      {
        id: "perdao-reconciliacao-fraterna",
        title: "Corrigir com caridade e perdoar sempre",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Setenta vezes sete: um perdão sem medida",
            text: "Quando Pedro perguntou se bastava perdoar sete vezes, Jesus respondeu: 'Setenta vezes sete'. Porque Deus nos perdoou uma dívida impagável, somos chamados a perdoar sem contar.",
            example: "Decidir não alimentar rancor revivendo ofensas antigas a cada discussão.",
            source: "Mt 18,21-35 · CIC 2842-2845",
          },
          {
            title: "Perdoar não significa aprovar a injustiça",
            text: "Perdoar é renunciar à vingança e entregar a justiça a Deus, mantendo limites prudentes se alguém ainda oferece risco real, enquanto rezamos pelo bem do outro.",
            example:
              "Conversar com calma sobre limites saudáveis sem desejar o mal à pessoa que feriu.",
            source: "Rm 12,17-21 · CIC 2843",
          },
          {
            title: "Correção fraterna em particular primeiro",
            text: "Em Mateus 18,15, Jesus ensina a conversar a sós primeiro quando um irmão erra conosco, buscando ganhar o irmão e não vencer uma discussão.",
            example:
              "Em vez de reclamar de alguém para terceiros, conversar diretamente e com respeito.",
            source: "Mt 18,15-17 · CIC 1829, 2477",
          },
        ],
        questions: [
          {
            prompt: "O que significa a resposta de Jesus 'perdoar setenta vezes sete'?",
            options: [
              "Anotar em um caderno até a 490ª vez para depois vingar-se",
              "Ter um coração sempre disposto ao perdão sem limites de vingança",
              "Esquecer a diferença entre o bem e o mal",
              "Perdoar apenas sete pessoas por ano",
            ],
            answer: 1,
            explanation:
              "O número simbólico indica um perdão sem cálculo mesquinho, nascido da misericórdia que recebemos de Deus (Mt 18,22; CIC 2845).",
          },
          {
            prompt:
              "Qual é o primeiro passo ensinado por Jesus em Mateus 18,15 diante do erro de um irmão?",
            options: [
              "Contar imediatamente para toda a comunidade",
              "Ir e corrigi-lo em particular, a sós com ele",
              "Cortar relações sem explicação",
              "Publicar críticas em praça pública",
            ],
            answer: 1,
            explanation:
              "A correção fraterna começa no diálogo reservado e caridoso visando recuperar a paz e o irmão (Mt 18,15; CIC 2477).",
          },
          {
            prompt: "Perdoar alguém exige fingir que o mal praticado foi bom?",
            options: [
              "Sim, é obrigatório achar o erro bom",
              "Não; perdoar é renunciar ao ódio e à vingança sem negar a verdade nem os limites justos",
              "Sim, nunca se pode pedir reparação justa",
              "Não, basta apenas não falar mais com ninguém",
            ],
            answer: 1,
            explanation:
              "O perdão cristão vence o ressentimento com a graça do Espírito, sem negar a verdade moral ou a prudência (CIC 2843).",
          },
        ],
      },
    ],
  },
  {
    id: "pai-nosso",
    title: "A Oração do Pai-Nosso",
    emoji: "🙏",
    lessons: [
      {
        id: "pai-nosso-gloria",
        title: "Pai nosso, santificado nome, vosso Reino",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Ousar chamar Deus de Pai nosso",
            text: "Jesus nos ensinou a chamar Deus de 'Pai nosso'. O 'nosso' lembra que nenhum cristão reza isolado: ao falar com o Pai, carregamos conosco todos os irmãos.",
            example:
              "Ao iniciar o Pai-Nosso, lembrar de pessoas com quem você convive hoje e incluí-las na oração.",
            source: "Mt 6,9 · CIC 2777-2801",
          },
          {
            title: "Santificado seja o vosso nome",
            text: "O nome de Deus já é santo em si mesmo; ao pedir que seja santificado, pedimos que seja conhecido, respeitado e glorificado por meio de nossa vida coerente.",
            example:
              "Viver de modo que nossa conduta honre o nome cristão que trazemos pelo Batismo.",
            source: "Ez 36,23 · CIC 2807-2815",
          },
          {
            title: "Venha o vosso Reino, seja feita a vossa vontade",
            text: "Pedimos o crescimento do Reino de justiça, paz e alegria no Espírito Santo aqui na terra, unindo nossa vontade à do Pai como Jesus no Getsêmani.",
            example: "Rezar 'seja feita a vossa vontade' antes de tomar decisões importantes.",
            source: "Mt 6,10 · CIC 2816-2827",
          },
        ],
        questions: [
          {
            prompt: "Por que dizemos 'Pai nosso' e não apenas 'Pai meu' na Oração do Senhor?",
            options: [
              "Porque é proibido rezar sozinho no quarto",
              "Porque somos filhos no Filho e rezamos em comunhão com toda a Igreja e a humanidade",
              "Porque Deus não conhece cada pessoa pelo nome",
              "Por simples regra gramatical antiga",
            ],
            answer: 1,
            explanation:
              "O adjetivo 'nosso' expressa a comunhão fraterna da nova família de filhos de Deus em Cristo (CIC 2786-2793).",
          },
          {
            prompt: "O que pedimos ao rezar 'Santificado seja o vosso nome'?",
            options: [
              "Que Deus se torne mais santo do que já é",
              "Que Deus seja reconhecido, amado e santificado em nós e no mundo",
              "Que ninguém pronuncie a palavra Deus",
              "Que nunca haja cânticos na igreja",
            ],
            answer: 1,
            explanation:
              "Pedimos que a santidade de Deus resplandeça em nossa vida e seja adorada por todos os povos (CIC 2807-2815).",
          },
          {
            prompt: "Como os três primeiros pedidos do Pai-Nosso orientam nossa oração?",
            options: [
              "Começam colocando a glória de Deus Pai, seu Reino e sua vontade em primeiro lugar",
              "Pedem apenas riquezas materiais",
              "Falam só dos nossos defeitos",
              "Substituem todos os Salmos",
            ],
            answer: 0,
            explanation:
              "A oração do Senhor educa o coração: primeiro adoramos a glória do Pai, depois apresentamos nossas necessidades (CIC 2803-2804).",
          },
        ],
      },
      {
        id: "pao-perdao",
        title: "Pão de cada dia e perdão das ofensas",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "O pão nosso de cada dia",
            text: "Pedimos com confiança filial tanto o alimento material necessário para viver com dignidade e partilhar com os pobres quanto o Pão da Palavra e da Eucaristia.",
            example:
              "Fazer uma breve oração de agradecimento antes das refeições lembrando de quem não tem o suficiente.",
            source: "Mt 6,11 · CIC 2828-2837",
          },
          {
            title: "Cada dia: viver na confiança presente",
            text: "Pedir o pão 'de cada dia' ensina a sobriedade que não acumula por ganância nem se desespera pelo amanhã, confiando na fidelidade cotidiana do Pai.",
            example: "Agradecer o sustento de hoje sem desperdiçar alimentos ou recursos.",
            source: "Ex 16,19-21 · CIC 2837",
          },
          {
            title: "Perdoai-nos assim como nós perdoamos",
            text: "Esse é o único pedido com uma condição exigente: a misericórdia de Deus não pode penetrar num coração fechado que se recusa a perdoar o próximo.",
            example:
              "Sempre que rezar essa frase do Pai-Nosso, verificar se há alguém que precisamos liberar do ressentimento.",
            source: "Mt 6,12.14-15 · CIC 2838-2845",
          },
        ],
        questions: [
          {
            prompt: "A que se refere o pedido 'O pão nosso de cada dia nos dai hoje'?",
            options: [
              "Apenas a pães de trigo na padaria",
              "Ao alimento material necessário e também ao Pão da Vida — a Palavra e a Eucaristia",
              "Somente à riqueza para o futuro distante",
              "Apenas ao maná do Egito antigo",
            ],
            answer: 1,
            explanation:
              "O pedido abraça as necessidades materiais de toda a família humana e o alimento espiritual da Palavra e da Eucaristia (CIC 2830-2837).",
          },
          {
            prompt:
              "Por que o pedido do perdão no Pai-Nosso está ligado ao 'assim como nós perdoamos'?",
            options: [
              "Porque nossa misericórdia para com os irmãos abre o coração para acolher o perdão de Deus",
              "Porque merecemos o céu sem a graça de Deus",
              "Porque Deus não perdoa quem se confessa",
              "Para proibir a justiça civil",
            ],
            answer: 0,
            explanation:
              "O fluxo da misericórdia não pode penetrar num coração endurecido pela recusa de perdoar (Mt 6,14-15; CIC 2840).",
          },
          {
            prompt: "Que atitude contraria o sentido solidário de pedir 'o pão nosso'?",
            options: [
              "Trabalhar com honestidade",
              "A indiferença diante da fome e da miséria dos irmãos",
              "Agradecer antes das refeições",
              "Comungar na Missa dominical",
            ],
            answer: 1,
            explanation:
              "Pedir 'o pão nosso' compromete quem reza com a justiça e a partilha com os famintos (CIC 2831).",
          },
        ],
      },
      {
        id: "tentacao-mal",
        title: "Não nos deixeis cair em tentação, livrai do mal",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Deus não nos induz ao pecado",
            text: "Deus nunca deseja que pequemos. Nesse pedido, suplicamos que Ele não nos deixe entrar no caminho que conduz ao pecado e nos dê discernimento e força na hora da prova.",
            example:
              "Evitar situações, companhias ou conteúdos que sabemos enfraquecer nossa fidelidade.",
            source: "Tg 1,13; 1Cor 10,13 · CIC 2846-2849",
          },
          {
            title: "Vigilância do coração",
            text: "Vencer a tentação começa na vigilância interior: pedir ajuda logo no primeiro pensamento ou impulso, antes de consentir.",
            example:
              "Rezar uma pequena invocação como 'Senhor, vinde em meu auxílio!' ao perceber uma tentação.",
            source: "Mt 26,41 · CIC 2849",
          },
          {
            title: "Livrai-nos do Mal",
            text: "No último pedido, a Igreja pede a libertação da ação do Maligno e de todo mal que afasta de Deus, concluindo com o 'Amém' confiado na vitória de Cristo.",
            example:
              "Rezar com calma o Pai-Nosso no Terço ou na Missa entregando os medos à proteção de Cristo vencedor.",
            source: "Jo 17,15 · CIC 2850-2856",
          },
        ],
        questions: [
          {
            prompt: "O que significa pedir 'Não nos deixeis cair em tentação'?",
            options: [
              "Que Deus costuma empurrar as pessoas para o pecado",
              "Suplicar a Deus que não nos deixe consentir no pecado e nos sustente na provação",
              "Pedir para não ter mais livre-arbítrio",
              "Afirmar que tentações nunca existem",
            ],
            answer: 1,
            explanation:
              "Deus não tenta ninguém para o mal (Tg 1,13); pedimos a graça da vigilância e da perseverança para não sucumbir na prova (CIC 2846-2849).",
          },
          {
            prompt: "A quem se refere em primeiro lugar a palavra 'Mal' em 'Livrai-nos do Mal'?",
            options: [
              "Apenas ao clima chuvoso",
              "Ao Maligno (Satanás) e ao pecado que separa de Deus",
              "Às tarefas escolares",
              "À velhice natural",
            ],
            answer: 1,
            explanation:
              "Nesse pedido a Igreja suplica pela libertação do Maligno, autor do pecado, e de todos os males passados, presentes e futuros (CIC 2851-2854).",
          },
          {
            prompt: "O que expressa o 'Amém' que conclui a Oração do Senhor?",
            options: [
              "Assim seja — adesão firme e confiada às sete petições rezadas",
              "Talvez aconteça",
              "Fim definitivo da vida de oração",
              "Pedido apenas formal sem fé",
            ],
            answer: 0,
            explanation:
              "Como explica São Cirilo de Jerusalém no Catecismo, o 'Amém' final sela nossa oração significando 'Assim seja!' (CIC 2856).",
          },
        ],
      },
    ],
  },
  {
    id: "caminhos-oracao",
    title: "A Vida de Oração",
    emoji: "🕊️",
    lessons: [
      {
        id: "oracao-vocal-meditacao",
        title: "Oração vocal, meditação e contemplação",
        emoji: "📿",
        xp: 20,
        teachings: [
          {
            title: "Oração vocal: corpo e voz unidos ao coração",
            text: "Somos corpo e espírito; por isso expressamos a oração com palavras faladas ou cantadas, como o Pai-Nosso e os Salmos, mantendo a mente atenta ao que dizemos.",
            example:
              "Rezar mais devagar as orações conhecidas, saboreando o sentido de cada frase.",
            source: "Sl 119,171 · CIC 2700-2704",
          },
          {
            title: "Meditação: pensar, ouvir e aplicar à vida",
            text: "A meditação cristã não é esvaziar a mente no vazio, mas refletir com amor sobre o Evangelho, o Catecismo ou um mistério do Rosário para converter a própria vida.",
            example:
              "Passar dez minutos relendo uma parábola e perguntando: 'Senhor, o que mudas em mim hoje?'.",
            source: "Sl 1,2 · CIC 2705-2708",
          },
          {
            title: "Contemplação: olhar silencioso de amor",
            text: "Na oração contemplativa permanecemos diante de Jesus como um amigo diante do Amigo: menos palavras, mais escuta silenciosa, acolhendo o amor gratuito de Deus.",
            example:
              "Ficar alguns minutos em silêncio diante do sacrário ou no quarto apenas sabendo que Deus nos olha com amor.",
            source: "Lc 10,39-42 · CIC 2709-2719",
          },
        ],
        questions: [
          {
            prompt: "Quais são as três grandes expressões da oração na Tradição católica?",
            options: [
              "Oração vocal, meditação e oração contemplativa",
              "Debate, silêncio forçado e música alta",
              "Somente canto coral e leitura rápida",
              "Promessa, jejum e viagem",
            ],
            answer: 0,
            explanation:
              "O Catecismo apresenta três expressões principais que se integram na vida cristã: vocal, meditação e contemplação (CIC 2699-2719).",
          },
          {
            prompt: "Como funciona a meditação cristã segundo o Catecismo?",
            options: [
              "É buscar apenas técnicas sem referência a Cristo",
              "É uma busca atenta que usa pensamento, imaginação e desejo para compreender a vontade de Deus",
              "É repetir frases sem prestar atenção",
              "É reservada apenas aos mosteiros antigos",
            ],
            answer: 1,
            explanation:
              "A meditação cristã confronta a própria vida com a Palavra e os mistérios de Cristo para crescer na conversão e no amor (CIC 2705-2708).",
          },
          {
            prompt: "O que caracteriza a oração contemplativa?",
            options: [
              "Multiplicar discursos longos",
              "Olhar simples de fé fixado em Jesus e comunhão silenciosa de amor com Ele",
              "Afastar-se da caridade com o próximo",
              "Obrigação de sentir emoções fortes sempre",
            ],
            answer: 1,
            explanation:
              "A contemplação é dom de Deus e escuta silenciosa de amor diante de Cristo presente (CIC 2709-2715).",
          },
        ],
      },
      {
        id: "lectio-divina",
        title: "Lectio Divina: rezar com a Palavra",
        emoji: "📖",
        xp: 20,
        teachings: [
          {
            title: "Leitura atenta (Lectio) e Meditação (Meditatio)",
            text: "Na Lectio Divina, começamos lendo devagar um trecho da Bíblia para entender o que o texto diz em si mesmo. Depois meditamos o que Deus nos diz pessoalmente ali hoje.",
            example: "Ler o Evangelho do dia duas vezes antes de tirar conclusões apressadas.",
            source: "Lc 2,19 · CIC 2653-2654, 2708",
          },
          {
            title: "Oração (Oratio) e Contemplação (Contemplatio)",
            text: "Em seguida respondemos a Deus em oração sincera — louvor, pedido de perdão ou súplica — e repousamos em sua presença silenciosa.",
            example:
              "Transformar um versículo que tocou o coração em uma prece espontânea ao Senhor.",
            source: "Sl 119,105 · CIC 2708",
          },
          {
            title: "Da Palavra rezada para a ação (Actio)",
            text: "A leitura orante não termina no papel: ela gera um fruto concreto de caridade, paciência ou missão no encontro com as pessoas.",
            example: "Anotar em uma linha um propósito simples para colocar em prática ainda hoje.",
            source: "Tg 1,22 · CIC 133, 2654",
          },
        ],
        questions: [
          {
            prompt: "Qual é a sequência tradicional dos passos da Lectio Divina?",
            options: [
              "Correr os olhos rápido e fechar a Bíblia",
              "Leitura, Meditação, Oração e Contemplação (que frutificam na ação)",
              "Apenas decorar datas históricas",
              "Substituir os Evangelhos por livros comuns",
            ],
            answer: 1,
            explanation:
              "A Lectio Divina passa pela leitura atenta, meditação, resposta em oração e contemplação, levando à vida prática (CIC 2708).",
          },
          {
            prompt: "Qual exemplo bíblico inspira a meditação fiel da Palavra no coração?",
            options: [
              "Maria, que conservava todas essas coisas meditando-as no coração",
              "Pilatos lavando as mãos",
              "Os vendedores do templo",
              "Os convidados que recusaram o banquete",
            ],
            answer: 0,
            explanation:
              "São Lucas destaca Maria guardando e meditando os acontecimentos e palavras de Deus em seu coração (Lc 2,19; CIC 2599).",
          },
          {
            prompt: "Por que o Catecismo recomenda unir a leitura da Escritura à oração?",
            options: [
              "Para que se estabeleça um diálogo vivo entre Deus que fala e nós que respondemos",
              "Para evitar ir à Santa Missa",
              "Apenas para treinar a memória",
              "Porque o texto bíblico não tem sentido claro",
            ],
            answer: 0,
            explanation:
              "Segundo o Catecismo, a leitura da Sagrada Escritura deve ser acompanhada pela oração para ser diálogo entre Deus e o homem (CIC 2653).",
          },
        ],
      },
      {
        id: "combate-oracao",
        title: "O combate da oração: distração e perseverança",
        emoji: "⏳",
        xp: 20,
        teachings: [
          {
            title: "A oração exige fidelidade cotidiana",
            text: "Rezar nem sempre é fácil: enfrentamos pressa, cansaço, distrações e a falsa ideia de que não temos tempo. O Catecismo chama essa fidelidade de 'combate da oração'.",
            example:
              "Definir um horário fixo simples — por exemplo, dez minutos ao acordar — antes de abrir redes sociais.",
            source: "Lc 18,1 · CIC 2725-2728",
          },
          {
            title: "Lidar com distrações e secura espiritual",
            text: "Quando a mente se distrai ou não sentimos emoção na oração, não devemos desistir: voltar suavemente o coração a Deus mostra amor fiel mesmo na aridez.",
            example:
              "Em dias em que a oração parecer seca, oferecer justamente esse esforço silencioso a Jesus.",
            source: "Sl 131 · CIC 2729-2731",
          },
          {
            title: "Confiança na resposta do Pai",
            text: "Às vezes parece que Deus demora a atender, mas Ele sempre escuta e dá o que é verdadeiramente bom, muitas vezes purificando nossos desejos primeiro.",
            example:
              "Continuar rezando pelos amigos sem desanimar se a mudança não acontecer no mesmo dia.",
            source: "Lc 11,9-13 · CIC 2734-2745",
          },
        ],
        questions: [
          {
            prompt: "O que devemos fazer quando surgem distrações durante a oração?",
            options: [
              "Parar de rezar imediatamente porque não valeu nada",
              "Voltar o coração com mansidão para Deus sempre que percebermos a distração",
              "Ficar furioso consigo mesmo",
              "Esperar sentir fortes arrepios antes de tentar de novo",
            ],
            answer: 1,
            explanation:
              "Combater a distração é reconduzir humildemente a atenção ao Senhor, revelando a Ele o que ocupa nosso coração (CIC 2729).",
          },
          {
            prompt: "O que a 'secura espiritual' (aridez) pode ensinar na vida de oração?",
            options: [
              "Que Deus nos abandonou de verdade",
              "Purifica a fé para amar a Deus por Ele mesmo, não apenas pelas consolações sentidas",
              "Que devemos abandonar os sacramentos",
              "Que cometemos um pecado imperdoável",
            ],
            answer: 1,
            explanation:
              "Na aridez, o cristão aprende a perseverar em pura fé e apegar-se a Jesus sem depender de sentimentos passageiros (CIC 2731).",
          },
          {
            prompt: "O que Jesus ensina na parábola da viúva insistente em Lucas 18?",
            options: [
              "Que Deus é surdo",
              "A necessidade de orar sempre com perseverança sem jamais desanimar",
              "Que só juízes ouvem preces",
              "Que basta rezar uma única vez na vida",
            ],
            answer: 1,
            explanation:
              "Jesus convida a uma oração vigilante e perseverante que nasce da confiança no Pai (Lc 18,1; CIC 2613, 2742).",
          },
        ],
      },
    ],
  },
  {
    id: "maria-mae-igreja",
    title: "Maria na História da Salvação",
    emoji: "🌹",
    lessons: [
      {
        id: "imaculada-maternidade",
        title: "Imaculada Conceição e Mãe de Deus",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Cheia de graça desde o primeiro instante",
            text: "Por um privilégio singular de Deus e em previsão dos méritos de Jesus Cristo, Maria foi preservada de toda mancha do pecado original desde a sua conceição: é a Imaculada Conceição.",
            example:
              "Celebrar o dia 8 de dezembro agradecendo a obra maravilhosa da graça de Deus em Maria.",
            source: "Lc 1,28 · CIC 490-493",
          },
          {
            title: "Theotokos: Mãe de Deus",
            text: "Porque Aquele que Maria concebeu pelo Espírito Santo é a Pessoa divina do Filho eterno, a Igreja a confessa verdadeiramente como Mãe de Deus (Theotokos).",
            example:
              "Rezar com consciência a segunda parte da Ave-Maria: 'Santa Maria, Mãe de Deus, rogai por nós'.",
            source: "Lc 1,43 · CIC 495",
          },
          {
            title: "Toda beleza de Maria vem de Cristo",
            text: "Maria não compete com Jesus: tudo nela aponta para Ele, como a lua reflete a luz do sol. Honrá-la é alegrar-se com o que o Salvador realizou nela.",
            example:
              "Ao visitar uma imagem de Nossa Senhora, lembrar sempre do convite dela: 'Fazei tudo o que Ele vos disser'.",
            source: "Lc 1,46-49 · CIC 491, 971",
          },
        ],
        questions: [
          {
            prompt:
              "Por qual mérito Maria foi preservada do pecado original na Imaculada Conceição?",
            options: [
              "Por esforço próprio sem necessidade de Salvador",
              "Pela graça singular de Deus em previsão dos méritos salvadores de Jesus Cristo",
              "Porque seus pais não eram humanos",
              "Somente depois do nascimento de Jesus",
            ],
            answer: 1,
            explanation:
              "Maria foi redimida do modo mais sublime desde a conceição, em previsão dos méritos de seu Filho Salvador (CIC 491-492).",
          },
          {
            prompt: "Por que o Concílio de Éfeso proclamou Maria 'Mãe de Deus'?",
            options: [
              "Porque ela criou a Santíssima Trindade",
              "Porque Jesus, gerado humanamente em seu seio, é verdadeiramente o Filho eterno de Deus",
              "Para substituir a adoração devida só a Deus",
              "Por uma homenagem apenas poética",
            ],
            answer: 1,
            explanation:
              "Como Jesus é uma única Pessoa divina com natureza divina e humana, quem é mãe de Jesus segundo a carne é verdadeiramente Mãe de Deus (CIC 495).",
          },
          {
            prompt: "Qual cântico de Lucas 1 expressa a humildade e o louvor de Maria a Deus?",
            options: [
              "O Magnificat ('A minha alma engrandece o Senhor')",
              "O Salmo de guerra",
              "O hino do templo pagão",
              "Uma carta aos romanos",
            ],
            answer: 0,
            explanation:
              "No Magnificat, Maria exalta as maravilhas que o Todo-Poderoso realizou em sua pequenez (Lc 1,46-55; CIC 2619).",
          },
        ],
      },
      {
        id: "maria-aos-pes-cruz",
        title: "Maria aos pés da Cruz e no Cenáculo",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Fiel até o Calvário",
            text: "Maria permaneceu de pé junto à Cruz de seu Filho, unindo seu coração materno ao sacrifício de Jesus em obediência silenciosa e fé firme.",
            example:
              "Pedir a Maria coragem para não abandonar quem sofre nos momentos mais escuros.",
            source: "Jo 19,25 · CIC 964",
          },
          {
            title: "Mãe da Igreja e nossa Mãe",
            text: "Ao dizer 'Eis aí a tua mãe' ao discípulo amado, Jesus entregou Maria como mãe espiritual de todos os seus discípulos. Ela coopera na ordem da graça com seu amor materno.",
            example:
              "Recorrer à proteção materna de Maria quando o coração precisar de amparo e consolo.",
            source: "Jo 19,26-27 · CIC 964-969",
          },
          {
            title: "Em oração com os Apóstolos em Pentecostes",
            text: "Após a Ascensão, Maria permaneceu no Cenáculo rezando com os Apóstolos à espera do Espírito Santo. A Igreja nasce em oração ao redor de Maria.",
            example:
              "Rezar em família ou em grupo paroquial invocando a vinda do Espírito Santo junto com Maria.",
            source: "At 1,14 · CIC 965, 2618",
          },
        ],
        questions: [
          {
            prompt:
              "Qual significado espiritual têm as palavras de Jesus na Cruz 'Eis aí a tua mãe'?",
            options: [
              "Um detalhe restrito apenas à herança material",
              "A entrega de Maria como mãe espiritual dos discípulos e de toda a Igreja",
              "Que os apóstolos deveriam deixar Jerusalém imediatamente",
              "Um afastamento entre Maria e os fiéis",
            ],
            answer: 1,
            explanation:
              "Ao confiar o discípulo amado a Maria e Maria ao discípulo, Cristo abre a maternidade espiritual de Maria para toda a Igreja (CIC 964).",
          },
          {
            prompt: "Onde encontramos Maria no livro dos Atos dos Apóstolos antes de Pentecostes?",
            options: [
              "Viajando sozinha para Roma",
              "Perseverando unânime na oração com os Apóstolos no Cenáculo",
              "Discutindo com Pedro sobre liderança",
              "Ausente da comunidade",
            ],
            answer: 1,
            explanation:
              "Maria implora com sua oração o dom do Espírito Santo junto à comunidade apostólica nascente (At 1,14; CIC 965, 2618).",
          },
          {
            prompt:
              "Como entender a maternidade espiritual de Maria em relação a Cristo único Mediador?",
            options: [
              "Ela substitui Jesus na salvação",
              "Ela participa de modo subordinado e materno da única mediação de Cristo, conduzindo sempre a Ele",
              "Ela atua de forma independente de Deus",
              "Ela impede o acesso direto a Jesus",
            ],
            answer: 1,
            explanation:
              "A função materna de Maria em nada diminui a única mediação de Cristo, mas manifesta sua eficácia e conduz a Ele (CIC 970).",
          },
        ],
      },
      {
        id: "assuncao-aparecida",
        title: "Assunção de Maria e devoção no Brasil",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "Assunta ao céu em corpo e alma",
            text: "Ao terminar o curso de sua vida terrestre, a Imaculada Mãe de Deus foi elevada em corpo e alma à glória celeste. Ela já participa plenamente da vitória pascal de seu Filho.",
            example:
              "Olhar para a Assunção como sinal luminoso do que Deus prepara para todo o Corpo de Cristo.",
            source: "Ap 12,1 · CIC 966, 974",
          },
          {
            title: "Veneração não é adoração",
            text: "Adoramos somente a Deus (culto de latria). A Maria prestamos especial veneração (hiperdulía), honrando-a como obra-prima da graça de Deus e modelo da Igreja.",
            example:
              "Saber explicar com serenidade a amigos que católicos adoram só a Deus e veneram Maria com carinho filial.",
            source: "Lc 1,48 · CIC 971",
          },
          {
            title: "Nossa Senhora Aparecida, Padroeira do Brasil",
            text: "Desde 1717, nas águas do rio Paraíba, a pequena imagem escurecida da Imaculada Conceição recorda ao povo brasileiro que Deus olha para os simples e une o país na fé e na caridade.",
            example:
              "Rezar no dia 12 de outubro pela paz, justiça e evangelização das famílias brasileiras.",
            source: "Lc 1,48-52 · CIC 971-972",
          },
        ],
        questions: [
          {
            prompt: "O que proclama o dogma da Assunção de Nossa Senhora?",
            options: [
              "Que Maria subiu ao céu pelo próprio poder divino",
              "Que, terminada a vida terrena, Maria foi elevada por Deus em corpo e alma à glória celeste",
              "Que Maria não morreu nem nasceu na terra",
              "Que apenas a alma de Maria está no céu",
            ],
            answer: 1,
            explanation:
              "A Assunção participa de modo singular da Ressurreição de Cristo e antecipa a ressurreição dos outros cristãos (CIC 966).",
          },
          {
            prompt: "Qual é a diferença entre adoração e veneração na doutrina católica?",
            options: [
              "Não existe diferença alguma",
              "Adoração cabe exclusivamente a Deus; a Maria e aos santos presta-se veneração filial",
              "Adoramos Maria apenas nas festas de outubro",
              "Veneramos só objetos e nunca pessoas",
            ],
            answer: 1,
            explanation:
              "O culto devido à Virgem Maria e aos santos difere essencialmente do culto de adoração prestado somente à Santíssima Trindade (CIC 971).",
          },
          {
            prompt: "De que modo Maria é 'sinal de esperança segura' para a Igreja peregrina?",
            options: [
              "Porque nela já se realizou plenamente a glória a que toda a Igreja é chamada",
              "Porque dispensa a fé e a conversão",
              "Porque impede a vinda de Cristo",
              "Porque garante ausência de cruzes na terra",
            ],
            answer: 0,
            explanation:
              "Maria elevada ao céu brilha diante do povo peregrino como imagem perfeita do que a Igreja espera ser (CIC 972).",
          },
        ],
      },
    ],
  },
  {
    id: "anjos-e-santos",
    title: "Os Anjos e a Santidade",
    emoji: "👼",
    lessons: [
      {
        id: "anjos-mensageiros",
        title: "Os santos anjos e o Anjo da Guarda",
        emoji: "🪽",
        xp: 20,
        teachings: [
          {
            title: "Criaturas puramente espirituais a serviço de Deus",
            text: "Os anjos não são deuses nem almas de pessoas falecidas: são criaturas espirituais criadas por Deus, dotadas de inteligência e vontade, que o adoram e executam seus desígnios.",
            example:
              "Unir nosso louvor na Missa aos anjos e arcanjos ao cantar o 'Santo, Santo, Santo'.",
            source: "Sl 103,20; Hb 1,14 · CIC 328-333",
          },
          {
            title: "São Miguel, São Gabriel e São Rafael",
            text: "A Escritura destaca três arcanjos: Miguel ('Quem como Deus?'), defensor na luta contra o mal; Gabriel, mensageiro da Encarnação; e Rafael ('Deus cura'), companheiro de caminho.",
            example:
              "Pedir a proteção de São Miguel e o auxílio de São Rafael antes de uma viagem ou tratamento médico.",
            source: "Dn 10,13; Lc 1,26; Tb 12,15 · CIC 332, 335",
          },
          {
            title: "O Anjo da Guarda nos acompanha",
            text: "Desde o nascimento até a morte, a vida humana é cercada pela guarda e intercessão dos anjos. Cada fiel tem ao seu lado um anjo protetor e pastor para guiá-lo à vida.",
            example:
              "Rezar a oração 'Santo Anjo do Senhor' pela manhã ou ao colocar crianças para dormir.",
            source: "Sl 91,11; Mt 18,10 · CIC 336",
          },
        ],
        questions: [
          {
            prompt: "O que são os anjos segundo a fé da Igreja?",
            options: [
              "Almas de pessoas boas que morreram",
              "Criaturas puramente espirituais, livres e inteligentes, servas de Deus",
              "Pequenos deuses independentes",
              "Apenas metáforas psicológicas sem existência real",
            ],
            answer: 1,
            explanation:
              "A existência dos anjos como criaturas espirituais não-corporais é verdade de fé testemunhada pela Escritura e Tradição (CIC 328-330).",
          },
          {
            prompt: "Qual é a missão do Anjo da Guarda segundo o Catecismo?",
            options: [
              "Substituir nossa liberdade para que nunca precisemos decidir",
              "Proteger, inspirar o bem e interceder por cada fiel ao longo da vida",
              "Apenas aparecer na hora da morte",
              "Realizar desejos materiais sem oração",
            ],
            answer: 1,
            explanation:
              "Cada fiel tem junto de si um anjo como protetor e pastor para conduzi-lo à vida (Mt 18,10; CIC 336).",
          },
          {
            prompt: "Em que momento da Missa nos unimos explicitamente ao louvor dos anjos?",
            options: [
              "Nos avisos finais",
              "No Prefácio e no canto do 'Santo'",
              "Apenas no Dia de Finados",
              "Nunca na liturgia",
            ],
            answer: 1,
            explanation:
              "Toda a liturgia terrestre participa do louvor celeste dos anjos, especialmente ao cantar o 'Santo' antes da Consagração (CIC 335, 1352).",
          },
        ],
      },
      {
        id: "chamado-universal-santidade",
        title: "O chamado universal à santidade",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Todos somos chamados à santidade",
            text: "A santidade não é privilégio de padres, freiras ou pessoas extraordinárias: pelo Batismo, todo cristão — solteiro, casado, jovem ou idoso — é chamado à plenitude da caridade.",
            example:
              "Olhar para a própria vocação atual como o lugar concreto onde Deus quer nos santificar hoje.",
            source: "Mt 5,48; 1Ts 4,3 · CIC 2012-2013",
          },
          {
            title: "Santidade é amar com perfeição possível em Cristo",
            text: "Ser santo não significa jamais errar ou nunca sentir cansaço; significa levantar-se com humildade na Confissão e deixar a graça de Cristo transformar nosso modo de amar.",
            example:
              "Não desistir quando falhar: recomeçar no mesmo dia com um ato de contrição e bondade.",
            source: "Cl 3,14 · CIC 2013-2015",
          },
          {
            title: "O caminho das pequenas coisas feitas com grande amor",
            text: "Como ensinou Santa Teresinha do Menino Jesus, não é preciso esperar grandes façanhas: a santidade cresce na fidelidade alegre às pequenas coisas de cada hora.",
            example:
              "Sorrir com paciência numa fila, atender um idoso sem pressa ou fazer um trabalho bem-feito por amor.",
            source: "Lc 16,10 · CIC 2015",
          },
        ],
        questions: [
          {
            prompt: "Quem é chamado à santidade na Igreja Católica?",
            options: [
              "Apenas religiosos de clausura",
              "Todos os batizados, em qualquer estado de vida e profissão",
              "Somente os mártires dos primeiros séculos",
              "Apenas quem nunca cometeu pecados",
            ],
            answer: 1,
            explanation:
              "Todos os fiéis de qualquer estado ou condição são chamados à plenitude da vida cristã e à perfeição da caridade (CIC 2013).",
          },
          {
            prompt: "Em que consiste essencialmente a santidade cristã?",
            options: [
              "Em fazer milagres visíveis todos os dias",
              "Na união íntima com Cristo e na perfeição do amor a Deus e ao próximo",
              "Em fugir de todo contato humano",
              "Em jamais sentir tristeza ou dúvida",
            ],
            answer: 1,
            explanation:
              "A caridade é a alma da santidade a que todos somos chamados pela graça do Espírito Santo (CIC 826, 2013).",
          },
          {
            prompt: "Como o caminho espiritual passa pela vida cotidiana?",
            options: [
              "Não há caminho de santidade sem sacrifício e fidelidade nas coisas diárias",
              "Só as festas anuais importam",
              "A rotina diária impede a oração",
              "Basta pensar bem sem agir",
            ],
            answer: 0,
            explanation:
              "O progresso espiritual passa pela oração, pelos sacramentos, pela renúncia de si e pelo amor fiel no dia a dia (CIC 2015).",
          },
        ],
      },
      {
        id: "doutores-igreja",
        title: "Santos e Doutores da Igreja na história",
        emoji: "📚",
        xp: 20,
        teachings: [
          {
            title: "Testemunhas que iluminam cada época",
            text: "Os santos mostram que o Evangelho funciona em culturas e séculos muito diferentes: de São Francisco na pobreza alegre a Santa Dulce dos Pobres servindo os doentes no Brasil.",
            example:
              "Escolher um santo ou santa brasileira para conhecer melhor sua história e imitar uma virtude.",
            source: "Hb 12,1 · CIC 828, 2683",
          },
          {
            title: "Doutores da Igreja: unir sabedoria e santidade",
            text: "A Igreja confere o título de Doutor da Igreja a santos que enriqueceram todo o povo de Deus com ensino profundo e fiel, como Santo Agostinho, São Tomás de Aquino, Santa Teresa d'Ávila e Santa Teresinha.",
            example:
              "Ler um pequeno trecho de oração ou escrito de um Doutor da Igreja para nutrir a fé.",
            source: "Mt 13,52 · CIC 2684",
          },
          {
            title: "Nuvem de testemunhas que nos encoraja",
            text: "Os santos não eram super-heróis sem lutas; eram pessoas reais que confiaram na graça de Deus. Sua companhia no céu encoraja nossos passos hoje.",
            example:
              "Rezar a Ladainha de Todos os Santos pedindo coragem nas dificuldades pessoais.",
            source: "Hb 12,1-2 · CIC 957, 2683",
          },
        ],
        questions: [
          {
            prompt: "O que reconhece a Igreja ao declarar alguém 'Doutor da Igreja'?",
            options: [
              "Que era médico de profissão",
              "Santidade de vida unida a um ensinamento eminente que ilumina toda a Igreja",
              "Que nunca teve dúvidas intelectuais",
              "Que viveu apenas no século primeiro",
            ],
            answer: 1,
            explanation:
              "Os Doutores da Igreja são santos cuja doutrina e testemunho espiritual orientam com profundidade os fiéis de todos os tempos (CIC 2684).",
          },
          {
            prompt: "Qual é o sentido de venerar os santos na caminhada cristã?",
            options: [
              "Adorá-los no lugar de Jesus",
              "Encontrar neles modelos de seguimento de Cristo e amigos que intercedem por nós",
              "Substituir a leitura da Bíblia",
              "Achar que não precisamos mais nos converter",
            ],
            answer: 1,
            explanation:
              "Os santos são exemplos vivos de fidelidade a Cristo e intercedem por seus irmãos peregrinos na terra (CIC 957, 2683).",
          },
          {
            prompt:
              "Por que existem santos de perfis tão variados — jovens, mães, bispos, pobres, estudiosos?",
            options: [
              "Porque o Espírito Santo manifesta a riqueza multiforme da graça de Cristo em cada vocação",
              "Porque existem muitos evangelhos diferentes",
              "Por falta de organização da Igreja",
              "Para dividir os cristãos por profissão",
            ],
            answer: 0,
            explanation:
              "Na Comunhão dos Santos, a única santidade de Cristo resplandece de modos variados segundo os dons e vocações de cada pessoa (CIC 828, 2684).",
          },
        ],
      },
    ],
  },
  {
    id: "vocacao-e-missao",
    title: "Vocação, Laicato e Missão",
    emoji: "🧭",
    lessons: [
      {
        id: "vocacao-batismal",
        title: "Toda vida é vocação",
        emoji: "💧",
        xp: 20,
        teachings: [
          {
            title: "Chamados por Deus pelo nome",
            text: "Vocação vem de 'chamado'. Antes de escolhermos uma profissão, Deus nos chama à existência, ao amor e à amizade com Cristo pelo Batismo.",
            example:
              "Perguntar a Deus na oração não apenas 'o que eu quero', mas 'Senhor, onde posso amar e servir melhor?'.",
            source: "Is 43,1; Ef 4,1 · CIC 871-873",
          },
          {
            title: "Sacerdote, profeta e rei no Batismo",
            text: "Todo batizado participa da tríplice missão de Cristo: sacerdote (oferecendo a vida em oração), profeta (anunciando a verdade com a vida) e rei (servindo e dominando o pecado).",
            example: "Oferecer a primeira hora do dia a Deus como sacrifício espiritual de louvor.",
            source: "1Pd 2,9 · CIC 783-786, 1268",
          },
          {
            title: "Vocações diferentes no mesmo Corpo",
            text: "Na Igreja há diferentes estados de vida — leigos (no matrimônio ou no celibato), ministros ordenados e vida consagrada — todos complementares e essenciais.",
            example:
              "Rezar pelas vocações sacerdotais, religiosas e pelas famílias cristãs na paróquia.",
            source: "1Cor 12,4-11 · CIC 873, 934",
          },
        ],
        questions: [
          {
            prompt: "Qual é a vocação primeira e comum de todo cristão?",
            options: [
              "Ter um cargo administrativo na diocese",
              "O chamado batismal a seguir Cristo na santidade e no amor",
              "Mudar-se para outro país",
              "Trabalhar exclusivamente em escolas",
            ],
            answer: 1,
            explanation:
              "Pelo Batismo e pela Crisma, todos os fiéis participam da vocação fundamental à santidade e ao apostolado (CIC 871, 1268).",
          },
          {
            prompt: "O que significa que o batizado participa da missão 'profética' de Cristo?",
            options: [
              "Prever números de loteria",
              "Acolher a fé e testemunhá-la com palavras e coerência de vida",
              "Substituir os bispos na consagração",
              "Fazer discursos longos todos os dias",
            ],
            answer: 1,
            explanation:
              "O múnus profético do batizado consiste em viver na verdade de Cristo e anunciá-la pelo testemunho e pela palavra (CIC 785, 904).",
          },
          {
            prompt: "Como se relacionam as diferentes vocações na Igreja?",
            options: [
              "São rivais entre si",
              "Complementam-se no único Corpo de Cristo com igual dignidade batismal",
              "Apenas uma tem valor diante de Deus",
              "Não têm relação com o Espírito Santo",
            ],
            answer: 1,
            explanation:
              "Entre todos os fiéis existe verdadeira igualdade na dignidade e na ação, com diversidade de ministérios e estados de vida (CIC 872-873).",
          },
        ],
      },
      {
        id: "leigos-mundo",
        title: "A missão dos leigos na família e no trabalho",
        emoji: "🏡",
        xp: 20,
        teachings: [
          {
            title: "Fermento do Evangelho no coração do mundo",
            text: "A vocação própria dos fiéis leigos é procurar o Reino de Deus cuidando das realidades temporais — família, trabalho, cultura, ciência e política — ordenando-as segundo Deus.",
            example:
              "Exercer a profissão com ética, competência e espírito de serviço, sem corrupção.",
            source: "Mt 13,33 · CIC 897-900",
          },
          {
            title: "Evangelizar pelo exemplo e pela amizade",
            text: "Muitas pessoas nunca abrirão um livro de teologia, mas observam como um colega cristão trata os outros, enfrenta a dor ou trabalha com honestidade.",
            example:
              "Estar disponível para ouvir e rezar por um colega de trabalho que atravessa uma crise.",
            source: "1Pd 3,15 · CIC 905",
          },
          {
            title: "Co-responsabilidade na comunidade",
            text: "Os leigos também colaboram ativamente na catequese, na liturgia, nos conselhos paroquiais e na caridade junto aos pastores.",
            example: "Engajar-se em uma pastoral de acordo com sua disponibilidade real de tempo.",
            source: "Rm 16,1-12 · CIC 900, 910",
          },
        ],
        questions: [
          {
            prompt: "Qual é a vocação específica dos fiéis leigos segundo o Catecismo?",
            options: [
              "Apenas assistir às celebrações em silêncio",
              "Buscar o Reino de Deus tratando das realidades temporais e ordenando-as segundo Deus",
              "Abandonar suas profissões após o Batismo",
              "Assumir exclusivamente tarefas de sacristia",
            ],
            answer: 1,
            explanation:
              "Os leigos têm o chamado próprio de iluminar com Cristo a família, o trabalho, a economia, a arte e a vida pública (CIC 898-899).",
          },
          {
            prompt: "De que forma o trabalho profissional honesto se relaciona com a fé cristã?",
            options: [
              "Não tem relação alguma com Deus",
              "É lugar privilegiado de testemunho, serviço ao bem comum e santificação",
              "Deve ser evitado para rezar melhor",
              "Serve apenas para competir com os colegas",
            ],
            answer: 1,
            explanation:
              "Pela competência, retidão e amor, os leigos consagram o mundo a Deus a partir de suas profissões cotidianas (CIC 901, 2427).",
          },
          {
            prompt: "Os leigos podem colaborar no anúncio do Evangelho?",
            options: [
              "Sim, é direito e dever nascido do Batismo e da Crisma",
              "Não, apenas clérigos podem falar de Jesus",
              "Somente com mais de cinquenta anos",
              "Apenas dentro de mosteiros",
            ],
            answer: 0,
            explanation:
              "Cada fiel leigo participa da missão profética e apostólica de Cristo pelo testemunho de vida e pela palavra oportuna (CIC 900, 905).",
          },
        ],
      },
      {
        id: "vida-consagrada",
        title: "A vida consagrada e os conselhos evangélicos",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Pobreza, castidade e obediência por amor ao Reino",
            text: "Na vida consagrada — monges, freiras, frades, irmãs e consagrados seculares —, pessoas escolhem viver os conselhos evangélicos de pobreza, castidade e obediência para seguir Jesus mais de perto.",
            example:
              "Agradecer o testemunho dos religiosos que servem em hospitais, escolas, missões e mosteiros.",
            source: "Mt 19,12.21 · CIC 914-916",
          },
          {
            title: "Sinal do mundo futuro já no presente",
            text: "Quem consagra toda a vida a Deus recorda a toda a Igreja que este mundo passa e que Deus sozinho basta para saciar o coração humano.",
            example:
              "Aprender com os consagrados a viver com desapego e alegria mesmo no meio da família.",
            source: "Fl 3,8 · CIC 916, 932",
          },
          {
            title: "Contemplação e serviço aos mais pobres",
            text: "Alguns institutos dedicam-se sobretudo à oração contemplativa nos mosteiros, sustentando o mundo inteiro; outros servem na educação, saúde e evangelização missionária.",
            example:
              "Enviar pedidos de oração a um mosteiro contemplativo e apoiar missões religiosas.",
            source: "Lc 10,38-42 · CIC 925-927",
          },
        ],
        questions: [
          {
            prompt: "Quais são os três conselhos evangélicos professados na vida consagrada?",
            options: [
              "Riqueza, fama e independência",
              "Castidade pelo Reino, pobreza e obediência",
              "Silêncio eterno, viagem e solidão",
              "Jejum diário, pintura e canto",
            ],
            answer: 1,
            explanation:
              "Pela profissão dos conselhos evangélicos de castidade, pobreza e obediência, os consagrados configuram-se especialmente a Cristo (CIC 915).",
          },
          {
            prompt:
              "Qual é o valor das comunidades contemplativas (mosteiros e conventos de oração) para a Igreja?",
            options: [
              "Não têm utilidade prática alguma",
              "São coração orante que fecunda toda a missão da Igreja com louvor e intercessão",
              "Existem apenas como museus históricos",
              "Proíbem os leigos de rezar",
            ],
            answer: 1,
            explanation:
              "Mesmo no recolhimento, os monges e monjas participam da missão da Igreja pela oração incessante e sacrifício de louvor (CIC 925, 2687).",
          },
          {
            prompt: "O estado de vida consagrada significa que o casamento tem menos valor?",
            options: [
              "Não; Matrimônio e vida consagrada são vocações distintas e complementares na santidade",
              "Sim, apenas consagrados vão para o céu",
              "Sim, casados não podem ser santos",
              "Sim, a Igreja proíbe o casamento",
            ],
            answer: 0,
            explanation:
              "Tanto a vocação conjugal quanto a consagração virginal são dons de Deus com dignidade e beleza próprias na Igreja (CIC 916, 1620).",
          },
        ],
      },
    ],
  },
  {
    id: "doutrina-social",
    title: "Doutrina Social da Igreja",
    emoji: "🌍",
    lessons: [
      {
        id: "dignidade-bem-comum",
        title: "Dignidade humana, bem comum e solidariedade",
        emoji: "⚖️",
        xp: 20,
        teachings: [
          {
            title: "Toda pessoa tem dignidade inviolável",
            text: "Porque cada ser humano é criado à imagem e semelhança de Deus e remido por Cristo, sua dignidade não depende de renda, idade, saúde ou fama.",
            example:
              "Tratar o porteiro, o colega ou um desconhecido em situação de rua com o mesmo respeito devido a qualquer pessoa.",
            source: "Gn 1,27 · CIC 1929-1935",
          },
          {
            title: "O bem comum e a subsidiariedade",
            text: "O bem comum é o conjunto das condições sociais que permitem a cada grupo e pessoa desenvolver-se plenamente. Pela subsidiariedade, o Estado apoia sem sufocar as famílias e associações locais.",
            example:
              "Cuidar dos espaços públicos do bairro e participar de iniciativas comunitárias responsáveis.",
            source: "Rm 13,1-7 · CIC 1883-1885, 1905-1912",
          },
          {
            title: "Solidariedade: somos responsáveis uns pelos outros",
            text: "A solidariedade cristã não é apenas pena passageira, mas compromisso firme e perseverante pelo bem de todos, partilhando bens materiais e espirituais.",
            example: "Defender causas justas na comunidade sem cair em ódio nem indiferença.",
            source: "Gl 6,2 · CIC 1939-1942",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é o princípio fundamental sobre o qual se apoia toda a Doutrina Social da Igreja?",
            options: [
              "O lucro acima de qualquer regra",
              "A dignidade inviolável da pessoa humana, criada à imagem de Deus",
              "O poder absoluto do Estado sobre as famílias",
              "A competição sem limites",
            ],
            answer: 1,
            explanation:
              "A dignidade transcendente de toda pessoa humana é a raiz da justiça social e dos direitos humanos (CIC 1929-1930).",
          },
          {
            prompt: "O que significa o princípio da subsidiariedade?",
            options: [
              "Que uma comunidade superior deve assumir tudo o que a família ou grupo menor pode fazer bem",
              "Que instâncias maiores não devem absorver o que comunidades menores conseguem realizar, devendo antes apoiá-las",
              "Que ninguém deve ajudar os pobres",
              "Que leis não são necessárias",
            ],
            answer: 1,
            explanation:
              "A subsidiariedade protege a iniciativa livre das famílias e associações contra o centralismo excessivo (CIC 1883-1885).",
          },
          {
            prompt: "Como o Catecismo define a virtude social da Solidariedade?",
            options: [
              "Um sentimento rápido que passa em cinco minutos",
              "Partilha e compromisso firme pelo bem comum, reconhecendo que somos membros uns dos outros",
              "Ajudar somente quem pode pagar de volta",
              "Abandonar as responsabilidades locais",
            ],
            answer: 1,
            explanation:
              "A solidariedade manifesta a amizade social e a caridade na partilha dos bens espirituais e materiais (CIC 1939-1942).",
          },
        ],
      },
      {
        id: "trabalho-justica",
        title: "Dignidade do trabalho e destino universal dos bens",
        emoji: "🛠️",
        xp: 20,
        teachings: [
          {
            title: "O trabalho é para o ser humano, não o contrário",
            text: "Pelo trabalho o ser humano participa da obra criadora de Deus, sustenta a família e serve à sociedade. Salário justo, segurança e descanso semanal são exigências morais.",
            example:
              "Valorizar o trabalho de todos os ofícios e respeitar o tempo de descanso dominical e familiar.",
            source: "Gn 2,15; 2Ts 3,10 · CIC 2427-2434",
          },
          {
            title: "Destino universal dos bens e propriedade privada",
            text: "A Igreja reconhece o direito à propriedade privada para garantir liberdade e cuidado familiar, mas ensina que Deus destinou os bens da terra para o sustento de todos.",
            example:
              "Usar o que possuímos sem apego egoísta, mantendo o coração aberto à partilha.",
            source: "At 4,32 · CIC 2402-2406",
          },
          {
            title: "Justiça nas relações econômicas",
            text: "Sonegar salários justos, fraudar medidas ou explorar pessoas vulneráveis fere o 7º Mandamento e clama por reparação.",
            example:
              "Ser honesto em contratos, vendas e trocas, pagando e entregando exatamente o combinado.",
            source: "Tg 5,4 · CIC 2409, 2434",
          },
        ],
        questions: [
          {
            prompt:
              "Como a Igreja relaciona a propriedade privada com o destino universal dos bens?",
            options: [
              "Proíbe qualquer propriedade pessoal",
              "Defende a propriedade privada ordenada ao bem comum e ao destino universal dos bens para todos",
              "Ensina que quem tem bens nunca deve partilhar",
              "Afirma que só o governo pode ter casas",
            ],
            answer: 1,
            explanation:
              "O direito à propriedade privada é legítimo, mas subordinado ao destino comum dos bens criados por Deus para toda a humanidade (CIC 2402-2406).",
          },
          {
            prompt: "Qual é o sentido cristão do trabalho humano?",
            options: [
              "É apenas um castigo sem dignidade",
              "Honra os dons do Criador e serve ao sustento, à família e ao bem comum",
              "Vale mais do que a própria pessoa humana",
              "Dispensa o descanso semanal",
            ],
            answer: 1,
            explanation:
              "O trabalho é dever e direito pelo qual a pessoa colabora com Deus na criação e no serviço aos irmãos (CIC 2427-2428).",
          },
          {
            prompt:
              "Qual atitude viola diretamente a justiça no trabalho segundo a Doutrina Social?",
            options: [
              "Garantir descanso adequado",
              "Reter ou pagar salário injusto a quem trabalhou",
              "Ensinar um ofício a um jovem",
              "Agradecer o esforço da equipe",
            ],
            answer: 1,
            explanation:
              "Recusar o salário justo ou explorar trabalhadores é grave injustiça contra o 7º Mandamento (CIC 2434).",
          },
        ],
      },
      {
        id: "cuidado-casa-comum",
        title: "Preferência pelos pobres e cuidado da criação",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Amor preferencial pelos pobres",
            text: "A Igreja ama a todos, mas guarda um cuidado preferencial pelos pobres, enfermos e marginalizados, seguindo o exemplo de Jesus que se fez pobre para nos enriquecer.",
            example:
              "Conhecer o trabalho da Pastoral da Criança, Vicentinos ou Cáritas na sua região.",
            source: "2Cor 8,9; Mt 25,40 · CIC 2443-2449",
          },
          {
            title: "Mordomos responsáveis da criação",
            text: "O domínio humano sobre a terra não é licença para destruir ou desperdiçar: somos administradores responsáveis perante Deus e as futuras gerações.",
            example:
              "Evitar desperdício de água, energia e alimentos e cuidar dos animais com respeito.",
            source: "Gn 2,15; Sb 11,24 · CIC 2415-2418",
          },
          {
            title: "Ecologia humana e solidariedade entre gerações",
            text: "Cuidar do planeta caminha junto com cuidar da vida humana desde a concepção até a morte natural e proteger as famílias mais vulneráveis.",
            example:
              "Adotar hábitos simples de consumo consciente e gratidão pela beleza da natureza.",
            source: "Sl 24,1 · CIC 2415, 2456",
          },
        ],
        questions: [
          {
            prompt: "O que significa a 'opção preferencial pelos pobres' na Igreja?",
            options: [
              "Odiar quem possui bens materiais",
              "Priorizar no amor e no cuidado quem mais sofre necessidade e exclusão, à maneira de Jesus",
              "Apenas discursos políticos sem caridade",
              "Ignorar as necessidades espirituais",
            ],
            answer: 1,
            explanation:
              "A Igreja testemunha o amor de Cristo dedicando atenção especial aos pobres, doentes e indefesos (CIC 2443-2448).",
          },
          {
            prompt: "Qual é o limite moral do uso humano da natureza e dos animais?",
            options: [
              "Não há limite algum",
              "Devemos usar os bens com respeito, evitando desperdício, destruição injusta e crueldade",
              "Devemos adorar as árvores como divindades",
              "Ninguém pode cultivar a terra",
            ],
            answer: 1,
            explanation:
              "O respeito à integridade da criação exige temperança e responsabilidade pelas gerações presentes e futuras (CIC 2415-2418).",
          },
          {
            prompt: "Por que desperdiçar recursos sem necessidade fere a moral cristã?",
            options: [
              "Porque os bens da terra são dom de Deus destinados ao sustento de todos",
              "Porque a criação pertence somente ao acaso",
              "Porque é proibido comprar comida",
              "Apenas por motivos estéticos",
            ],
            answer: 0,
            explanation:
              "O uso responsável e solidário dos bens respeita o Criador e as necessidades dos irmãos (CIC 2402, 2415).",
          },
        ],
      },
    ],
  },
  {
    id: "familia-vida-crista",
    title: "Família, Amizade e Castidade",
    emoji: "🏡",
    lessons: [
      {
        id: "amor-esponsal-filhos",
        title: "O dom dos filhos e a educação na fé",
        emoji: "👶",
        xp: 20,
        teachings: [
          {
            title: "Os filhos como dom precioso de Deus",
            text: "Na família fundada no Matrimônio, os filhos não são propriedade nem direito a exigir a qualquer custo, mas dom precioso acolhido com amor generoso e responsável.",
            example:
              "Acolher com paciência a presença alegre e barulhenta das crianças na Missa e na família.",
            source: "Sl 127,3 · CIC 2378",
          },
          {
            title: "Pais: primeiros educadores na fé",
            text: "Mais do que cursos externos, o testemunho diário dos pais — rezando juntos, pedindo perdão e amando os pobres — ensina aos filhos que Deus é real e próximo.",
            example: "Rezar uma prece curta em família antes das refeições ou antes de dormir.",
            source: "Ef 6,1-4 · CIC 2221-2226",
          },
          {
            title: "Respeito aos idosos e laços entre gerações",
            text: "Avós e idosos transmitem memória, sabedoria e oração. Honrá-los na velhice é sinal vivo de gratidão e amor cristão.",
            example:
              "Reservar tempo na semana para visitar ou ligar com carinho aos avós e familiares idosos.",
            source: "Eclo 3,12-16 · CIC 2218",
          },
        ],
        questions: [
          {
            prompt: "Quem são os primeiros e principais educadores dos filhos na fé?",
            options: [
              "Apenas os professores da escola",
              "Os próprios pais, pelo exemplo e pela oração no lar",
              "Os meios de comunicação",
              "Somente os padrinhos na adolescência",
            ],
            answer: 1,
            explanation:
              "Os pais são os primeiros anunciadores da fé aos filhos pela palavra, pelo exemplo e pela oração em casa (CIC 2223-2226).",
          },
          {
            prompt: "Como a Igreja considera o filho em relação aos pais?",
            options: [
              "Um produto ou posse privada",
              "Um dom supremo do Matrimônio e pessoa com dignidade própria desde a concepção",
              "Um peso dispensável",
              "Alguém sem vocação própria",
            ],
            answer: 1,
            explanation:
              "O filho é um dom e uma pessoa amada por si mesma desde o início da vida, nunca um objeto (CIC 2270, 2378).",
          },
          {
            prompt: "Qual é o dever dos filhos adultos diante dos pais idosos ou doentes?",
            options: [
              "Apenas enviar presentes raros de longe",
              "Prestar-lhes amparo material e moral com gratidão e paciência",
              "Deixar a responsabilidade apenas a estranhos",
              "Esquecer sua história",
            ],
            answer: 1,
            explanation:
              "O 4º Mandamento pede gratidão, respeito e cuidado concreto com os pais na velhice e na doença (CIC 2218).",
          },
        ],
      },
      {
        id: "castidade-dignidade",
        title: "Castidade e respeito ao próprio corpo",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "O corpo é templo do Espírito Santo",
            text: "Deus criou o ser humano unidade de corpo e alma e chamou nosso corpo à ressurreição. Tratar o próprio corpo e o dos outros com respeito nasce dessa dignidade.",
            example:
              "Cuidar da saúde, do pudor e do modo de tratar as pessoas sem transformá-las em objetos.",
            source: "1Cor 6,19-20 · CIC 364, 2517-2524",
          },
          {
            title: "Castidade: amar de verdade com domínio de si",
            text: "A castidade não é rejeição da afetividade nem da sexualidade: é a virtude que integra a sexualidade na pessoa para que ela saiba amar de verdade, sem egoísmo nem uso do outro.",
            example:
              "Cultivar o autodomínio diante de telas e conteúdos que estimulam o olhar consumista sobre pessoas.",
            source: "1Ts 4,3-5 · CIC 2337-2350",
          },
          {
            title: "Todos são chamados à castidade segundo seu estado",
            text: "Solteiros, noivos, casados e consagrados são chamados à castidade de modos próprios — na fidelidade conjugal ou na continência livre que protege o amor verdadeiro.",
            example:
              "Pedir a Deus pureza de coração e recomeçar com confiança na Confissão sempre que tropeçar.",
            source: "Mt 5,8 · CIC 2348-2350",
          },
        ],
        questions: [
          {
            prompt: "O que é a virtude da Castidade segundo o Catecismo?",
            options: [
              "Desprezo pelo corpo humano e pelo amor",
              "Integração bem-sucedida da sexualidade na pessoa, unindo corpo e espírito no amor verdadeiro",
              "Exclusiva de padres e religiosas",
              "Fuga de qualquer amizade",
            ],
            answer: 1,
            explanation:
              "A castidade torna a pessoa capaz de amar de modo autêntico e livre, respeitando a dignidade própria e do outro (CIC 2337-2348).",
          },
          {
            prompt: "Por que o cristão trata o próprio corpo com respeito?",
            options: [
              "Apenas por vaidade estética",
              "Porque o corpo participa da dignidade da pessoa e é templo do Espírito Santo",
              "Porque a alma não existe",
              "Por medo social",
            ],
            answer: 1,
            explanation:
              "Em 1Cor 6,19, São Paulo lembra que nosso corpo é templo do Espírito Santo e glorifica a Deus (CIC 364, 2519).",
          },
          {
            prompt: "A quem se dirige o chamado à virtude da castidade?",
            options: [
              "Apenas aos jovens antes do casamento",
              "A todo batizado, em cada etapa e estado de vida",
              "Somente aos monges",
              "Ninguém nos tempos atuais",
            ],
            answer: 1,
            explanation:
              "Todo batizado é chamado a viver a castidade de acordo com o seu estado de vida — casado, solteiro ou consagrado (CIC 2348-2349).",
          },
        ],
      },
      {
        id: "amizade-verdadeira",
        title: "A amizade cristã e o respeito nas palavras",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "A beleza da amizade que aproxima de Deus",
            text: "Jesus chamou seus discípulos de amigos. A amizade verdadeira busca o bem do outro, alegra-se com suas vitórias, guarda lealdade e ajuda a caminhar para Cristo.",
            example: "Enviar uma mensagem sincera para saber como um amigo está e rezar por ele.",
            source: "Jo 15,15; Eclo 6,14 · CIC 2347",
          },
          {
            title: "Proteger a fama do próximo",
            text: "O 8º Mandamento proíbe a maledicência (revelar defeitos alheios sem motivo justo) e a calúnia (inventar mentiras). Guardar o bom nome do outro também é caridade.",
            example:
              "Mudar de assunto com elegância quando uma roda de conversa começa a falar mal de alguém ausente.",
            source: "Pr 22,1 · CIC 2477-2479",
          },
          {
            title: "Verdade unida à delicadeza",
            text: "Ser sincero não dá licença para ser rude. Nem tudo precisa ser dito sem necessidade; o amor ensina o momento certo e o tom respeitoso.",
            example:
              "Antes de repassar uma notícia ou comentário, verificar se é verdadeiro, justo e necessário.",
            source: "Ef 4,15.29 · CIC 2488-2489",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença entre maledicência e calúnia segundo o Catecismo?",
            options: [
              "Nenhuma, significam o mesmo",
              "A maledicência expõe faltas reais do outro sem razão válida; a calúnia inventa declarações falsas",
              "A calúnia é sempre permitida entre amigos",
              "A maledicência é uma virtude",
            ],
            answer: 1,
            explanation:
              "Ambas ferem a reputação e a honra do próximo: uma sem necessidade justa, outra com mentira (CIC 2477).",
          },
          {
            prompt: "Como a amizade se relaciona com a castidade e a fé cristã?",
            options: [
              "A amizade verdadeira cultiva comunhão espiritual, lealdade e ajuda mútua no bem",
              "Amizades atrapalham a vida espiritual",
              "Só podemos ter amigos exatamente iguais a nós",
              "Amigos nunca devem dar bons conselhos",
            ],
            answer: 0,
            explanation:
              "O Catecismo exalta a amizade — cultivada em todas as idades e estados — como caminho nobre de comunhão e castidade (CIC 2347).",
          },
          {
            prompt: "Como unir verdade e caridade nas conversas cotidianas?",
            options: [
              "Repetir qualquer boato sem checar",
              "Dizer a verdade com respeito, discrição e intenção de edificar",
              "Usar ironia para expor erros alheios",
              "Nunca discordar de ninguém por medo",
            ],
            answer: 1,
            explanation:
              "O amor à verdade pede discrição, respeito à privacidade e palavras que edificam (CIC 2488-2489).",
          },
        ],
      },
    ],
  },
  {
    id: "revelacao-tradicao",
    title: "Revelação, Escritura e Tradição",
    emoji: "📜",
    lessons: [
      {
        id: "revelacao-deus",
        title: "Como Deus se revela ao ser humano",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Deus toma a iniciativa por amor",
            text: "Pela razão humana podemos perceber pistas do Criador na beleza da criação e na consciência, mas Deus quis ir além: revelou a si mesmo e seu plano de amor como a amigos.",
            example:
              "Contemplar a natureza agradecendo ao Criador e abrir o Evangelho para conhecê-lo ainda mais de perto.",
            source: "Sb 13,5; Jo 15,15 · CIC 36, 50-53",
          },
          {
            title: "Pedagogia divina na história",
            text: "Deus preparou a humanidade passo a passo: da aliança com Noé, Abraão e Moisés até falar plenamente em seu Filho Jesus Cristo, Palavra definitiva do Pai.",
            example:
              "Ler trechos do Antigo Testamento percebendo como tudo prepara a vinda de Jesus.",
            source: "Hb 1,1-2 · CIC 54-65",
          },
          {
            title: "Não esperamos outra revelação pública",
            text: "Jesus Cristo é a plenitude da Revelação de Deus. Depois dele não haverá outra revelação pública antes da vinda gloriosa do Senhor, embora o Espírito ajude a Igreja a compreendê-la cada vez mais.",
            example:
              "Avaliar qualquer suposta novidade espiritual sempre pela fidelidade ao Evangelho e à Igreja.",
            source: "Jo 14,6; 16,13 · CIC 65-67",
          },
        ],
        questions: [
          {
            prompt: "Quem é a plenitude e a Palavra definitiva da Revelação de Deus?",
            options: [
              "O profeta Elias",
              "Jesus Cristo, Filho de Deus feito homem",
              "Apenas os filósofos gregos",
              "Uma revelação ainda futura que substituirá o Evangelho",
            ],
            answer: 1,
            explanation:
              "Em Cristo, Deus disse tudo o que tinha a revelar para nossa salvação; não há outra revelação pública depois dele (Hb 1,1-2; CIC 65-66).",
          },
          {
            prompt:
              "O que a razão humana consegue reconhecer sem mesmo abrir a Bíblia, segundo o Catecismo?",
            options: [
              "Todos os mistérios da Trindade sozinha",
              "A existência de Deus como origem e fim de tudo a partir do mundo criado e da consciência",
              "O número exato dos sacramentos",
              "Nada sobre Deus",
            ],
            answer: 1,
            explanation:
              "A partir da criação e da pessoa humana, a razão pode conhecer Deus com certeza como Criador, embora necessite da Revelação para os mistérios da graça (CIC 36-38, 50).",
          },
          {
            prompt: "Por que Deus se revelou progressivamente na história de Israel?",
            options: [
              "Porque Ele não sabia o futuro",
              "Por pedagogia divina, preparando o coração humano para acolher a vinda do Filho",
              "Para esconder a verdade dos outros povos para sempre",
              "Porque mudou de plano várias vezes",
            ],
            answer: 1,
            explanation:
              "Por etapas, Deus educou e preparou a humanidade mediante alianças sucessivas até a plenitude dos tempos em Cristo (CIC 53-64).",
          },
        ],
      },
      {
        id: "escritura-tradicao",
        title: "Escritura, Tradição e Magistério",
        emoji: "🏛️",
        xp: 20,
        teachings: [
          {
            title: "Uma única fonte divina transmitida em dois modos",
            text: "A Palavra de Deus chegou até nós pela Sagrada Escritura (os livros inspirados postos por escrito) e pela Sagrada Tradição (a fé viva transmitida pelos Apóstolos na pregação, liturgia e vida da Igreja).",
            example:
              "Perceber como a oração da Missa e o Credo preservam fielmente a fé apostólica.",
            source: "2Ts 2,15 · CIC 74-83",
          },
          {
            title: "Tradição viva não é mero costume humano",
            text: "Costumes paroquiais podem mudar com o tempo; já a Tradição Apostólica é o próprio Evangelho transmitido integralmente pelos Apóstolos sob a assistência do Espírito Santo.",
            example:
              "Distinguir entre tradições culturais locais e a Tradição viva da fé recebida dos Apóstolos.",
            source: "2Tm 2,2 · CIC 78, 83",
          },
          {
            title: "O serviço do Magistério",
            text: "O Magistério — os bispos em comunhão com o Papa — não está acima da Palavra de Deus, mas serve a ela, guardando e interpretando autenticamente a Escritura e a Tradição.",
            example:
              "Consultar o Catecismo da Igreja Católica quando surgir dúvida sobre o sentido de uma passagem difícil.",
            source: "Lc 10,16 · CIC 85-87, 95",
          },
        ],
        questions: [
          {
            prompt: "Como se relacionam Sagrada Escritura, Sagrada Tradição e Magistério?",
            options: [
              "São rivais que competem entre si",
              "Estão intimamente unidos sob a ação do Espírito Santo, servindo à única Palavra de Deus",
              "O Magistério está acima da Escritura e pode mudá-la",
              "A Tradição substituiu os Evangelhos",
            ],
            answer: 1,
            explanation:
              "Escritura, Tradição e Magistério estão de tal modo ligados que nenhum subsiste sem os outros na economia da salvação (CIC 95).",
          },
          {
            prompt: "Qual é a função do Magistério da Igreja (Papa e bispos em comunhão)?",
            options: [
              "Inventar novas revelações a cada década",
              "Ouvir, guardar religiosamente e interpretar autenticamente a Palavra de Deus",
              "Proibir os leigos de ler a Bíblia",
              "Substituir a oração pessoal",
            ],
            answer: 1,
            explanation:
              "O Magistério não é superior à Palavra de Deus, mas a serve fielmente com a assistência do Espírito Santo (CIC 85-86).",
          },
          {
            prompt:
              "Qual é a diferença entre a Sagrada Tradição e tradições culturais passageiras?",
            options: [
              "A Sagrada Tradição transmite o depósito da fé apostólica; costumes humanos variam com o tempo",
              "Ambas têm exatamente o mesmo peso imutável",
              "Nenhuma das duas existe na Igreja",
              "Apenas costumes culturais vêm de Cristo",
            ],
            answer: 0,
            explanation:
              "A Tradição apostólica transmite integralmente a Palavra de Cristo, distinta das tradições teológicas, disciplinares ou culturais mutáveis (CIC 83).",
          },
        ],
      },
      {
        id: "canon-inspiracao",
        title: "Como ler a Bíblia com a Igreja",
        emoji: "📖",
        xp: 20,
        teachings: [
          {
            title: "Deus é o autor principal, usando autores humanos",
            text: "Os 73 livros da Bíblia católica (46 do Antigo e 27 do Novo Testamento) foram escritos por autores humanos reais sob a inspiração do Espírito Santo. Por isso unem linguagem humana e verdade divina.",
            example:
              "Ler a Bíblia respeitando se um livro é poesia (Salmos), carta (São Paulo), evangelho ou história.",
            source: "2Tm 3,16; 2Pd 1,20-21 · CIC 105-108, 120",
          },
          {
            title: "Ler a parte à luz de toda a Escritura e de Cristo",
            text: "O Catecismo ensina três critérios: prestar atenção ao conteúdo e à unidade de toda a Bíblia, ler na Tradição viva da Igreja e respeitar a analogia da fé.",
            example:
              "Evitar usar um versículo isolado fora de contexto para justificar agressividade ou medo.",
            source: "Lc 24,27 · CIC 112-114",
          },
          {
            title: "Antigo e Novo Testamento iluminam-se mutuamente",
            text: "Como diz Santo Agostinho, o Novo Testamento está escondido no Antigo, e o Antigo torna-se claro no Novo. Ambos anunciam o mesmo plano salvador de Deus.",
            example:
              "Na Missa de domingo, observar como a 1ª leitura do Antigo Testamento combina com o Evangelho.",
            source: "Mt 5,17 · CIC 128-130",
          },
        ],
        questions: [
          {
            prompt: "Quantos livros compõem o cânon completo da Bíblia Católica?",
            options: [
              "66 livros",
              "73 livros (46 do Antigo Testamento e 27 do Novo Testamento)",
              "50 livros",
              "100 livros",
            ],
            answer: 1,
            explanation:
              "A Igreja reconhece no cânon sagrado 46 escritos do Antigo Testamento e 27 do Novo Testamento, totalizando 73 livros (CIC 120).",
          },
          {
            prompt: "O que significa dizer que a Bíblia é inspirada por Deus?",
            options: [
              "Que os autores humanos escreveram como máquinas sem personalidade",
              "Que o Espírito Santo agiu nos autores humanos para escreverem fielmente a verdade salvífica que Deus quis",
              "Que devemos ignorar os gêneros literários do texto",
              "Que cada frase deve ser lida fora do contexto da Igreja",
            ],
            answer: 1,
            explanation:
              "Deus escolheu pessoas humanas usando suas faculdades e culturas para comunicar fielmente sua verdade (CIC 105-107, 110).",
          },
          {
            prompt: "Como devemos interpretar um versículo bíblico difícil?",
            options: [
              "Isolando-o de todo o resto da Escritura",
              "À luz de Cristo, da unidade de toda a Bíblia e da fé viva da Igreja",
              "Escolhendo o sentido que mais favorece o egoísmo",
              "Deixando de ler o Antigo Testamento",
            ],
            answer: 1,
            explanation:
              "A interpretação fiel considera os autores humanos, a unidade de toda a Escritura e a Tradição viva da Igreja (CIC 109-114).",
          },
        ],
      },
    ],
  },
  {
    id: "sacramentos-no-dia",
    title: "Sinais Sagrados no Cotidiano",
    emoji: "🕊️",
    lessons: [
      {
        id: "sacramentais-bencaos",
        title: "Sacramentais, água benta e bênçãos",
        emoji: "💧",
        xp: 20,
        teachings: [
          {
            title: "O que são os sacramentais",
            text: "Sacramentais são sinais sagrados instituídos pela Igreja — como água benta, bênçãos de casas, terços, medalhas ou cinzas — que preparam para receber os sacramentos e santificam ocasiões da vida.",
            example:
              "Fazer o Sinal da Cruz com água benta ao entrar na igreja recordando o próprio Batismo.",
            source: "1Tm 4,4-5 · CIC 1667-1670",
          },
          {
            title: "Diferença entre sacramento e sacramental",
            text: "Os sete sacramentos foram instituídos por Cristo e conferem a graça diretamente pelo sinal realizado. Os sacramentais agem pela oração da Igreja e pela fé de quem os usa, nunca como magia.",
            example:
              "Usar um escapulário ou medalha como lembrança de oração e entrega a Deus, jamais como amuleto de sorte.",
            source: "CIC 1667, 1670, 2111",
          },
          {
            title: "A piedade popular alimentada pelo Evangelho",
            text: "Procissões, novenas, romarias e bênçãos manifestam o amor simples e profundo do povo católico, devendo sempre conduzir a Cristo, à Bíblia e à Eucaristia.",
            example:
              "Participar de uma novena ou via-sacra paroquial unindo devoção e conversão de vida.",
            source: "Lc 1,46 · CIC 1674-1676",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença essencial entre os sete sacramentos e os sacramentais?",
            options: [
              "Os sacramentais substituem a Confissão",
              "Os sacramentos foram instituídos por Cristo; os sacramentais são sinais instituídos pela Igreja que dispõem à graça",
              "Sacramentais funcionam automaticamente como amuletos",
              "Não há diferença entre eles",
            ],
            answer: 1,
            explanation:
              "Os sacramentais preparam para receber os frutos dos sacramentos e santificam o cotidiano por meio da oração da Igreja (CIC 1667, 1670).",
          },
          {
            prompt:
              "Qual postura transforma um objeto bentos (como medalha ou água benta) em superstição errada?",
            options: [
              "Usá-lo para lembrar de rezar",
              "Atribuir-lhe poder mágico automático sem fé nem conversão a Deus",
              "Guardá-lo com respeito",
              "Usá-lo para recordar o Batismo",
            ],
            answer: 1,
            explanation:
              "Os sacramentais não agem como talismãs mágicos; seu fruto depende da oração da Igreja e da fé viva em Cristo (CIC 1670, 2111).",
          },
          {
            prompt: "O que recorda o gesto de benzer-se com água benta ao entrar na igreja?",
            options: [
              "O compromisso e a graça do nosso Batismo",
              "Um costume sem relação com Cristo",
              "A entrada no Antigo Testamento apenas",
              "Que não precisamos pedir perdão",
            ],
            answer: 0,
            explanation:
              "A aspersão ou o sinal com água benta remete à purificação e à vida nova recebida no Batismo (CIC 1668).",
          },
        ],
      },
      {
        id: "exame-consciencia",
        title: "Como fazer um bom exame de consciência",
        emoji: "🪞",
        xp: 20,
        teachings: [
          {
            title: "Olhar o dia sob a luz do amor de Deus",
            text: "Exame de consciência não é neurose nem lista fria de culpas: é olhar o próprio dia diante de Deus Pai, agradecendo o bem recebido e reconhecendo onde faltou amor.",
            example:
              "À noite, rezar cinco minutos agradecendo três graças do dia e pedindo perdão por uma falha concreta.",
            source: "Sl 139,23-24 · CIC 1454, 1785",
          },
          {
            title: "Usar os Mandamentos e as Bem-Aventuranças como espelho",
            text: "Antes da Confissão, vale revisar nossa vida à luz dos Dez Mandamentos, do Sermão da Montanha e dos deveres familiares e profissionais, incluindo omissões.",
            example:
              "Perguntar também: 'O que eu deveria ter feito de bom hoje e deixei de fazer por preguiça ou egoísmo?'.",
            source: "1Cor 11,28 · CIC 1454",
          },
          {
            title: "Arrependimento que abre para o recomeço",
            text: "A contrição verdadeira une tristeza sincera por ter ferido o amor de Deus e propósito concreto de mudar, confiando mais na graça do que na força própria.",
            example:
              "Anotar os pontos principais antes de ir ao confessionário para fazer uma confissão clara e breve.",
            source: "Sl 51,19 · CIC 1451-1454",
          },
        ],
        questions: [
          {
            prompt: "Qual deve ser o ponto de partida de um bom exame de consciência cristão?",
            options: [
              "Apenas medo e desespero diante dos erros",
              "A gratidão a Deus Pai e a luz de sua Palavra para discernir o coração com verdade",
              "Comparar-se para se sentir superior aos outros",
              "Ignorar pecados por omissão",
            ],
            answer: 1,
            explanation:
              "O exame de consciência coloca-nos diante da misericórdia de Deus e à luz da Palavra para preparar uma conversão sincera (CIC 1454, 1785).",
          },
          {
            prompt:
              "Que roteiro o Catecismo recomenda para o exame de consciência antes da Confissão?",
            options: [
              "Apenas lembrar de brigas antigas de infância",
              "Examinar-se à luz dos Mandamentos e da Palavra do Senhor (como o Sermão da Montanha e as cartas apostólicas)",
              "Adivinhar faltas que não cometemos",
              "Perguntar a estranhos o que dizer",
            ],
            answer: 1,
            explanation:
              "Os Dez Mandamentos e a catequese moral dos Evangelhos e Apóstolos iluminam com clareza nossa consciência (CIC 1454).",
          },
          {
            prompt:
              "Além de ações más praticadas, o que devemos considerar no exame de consciência?",
            options: [
              "As omissões do bem que podíamos e devíamos ter feito",
              "Apenas erros dos outros",
              "Sonhos involuntários durante o sono",
              "Preferências de comida",
            ],
            answer: 0,
            explanation:
              "Como rezamos no Ato Penitencial ('por pensamentos e palavras, atos e omissões'), pecamos também ao omitir o bem devido (CIC 1853).",
          },
        ],
      },
      {
        id: "adoracao-eucaristica",
        title: "Adoração ao Santíssimo e visita ao sacrário",
        emoji: "☀️",
        xp: 20,
        teachings: [
          {
            title: "Cristo permanece presente após a Missa",
            text: "As hóstias consagradas guardadas no sacrário continuam sendo verdadeiramente o Corpo de Cristo — inicialmente para levar aos enfermos e também para nossa adoração silenciosa.",
            example:
              "Ao passar por uma igreja aberta na semana, entrar por dois minutos para saudar Jesus no sacrário.",
            source: "Mt 26,26 · CIC 1378-1381",
          },
          {
            title: "Genuflexão: gesto de fé diante do Senhor",
            text: "Ao passar diante do sacrário onde o Santíssimo está reservado (indicado pela lâmpada acesa), dobramos o joelho direito em sinal de adoração ao Deus vivo.",
            example:
              "Ensinar às crianças com carinho o sentido de dobrar o joelho olhando para a luz vermelha do sacrário.",
            source: "Fl 2,10 · CIC 1378",
          },
          {
            title: "Estar com Jesus em silêncio",
            text: "A adoração eucarística prolonga a Missa e prepara para ela. Não exige discursos difíceis: basta estar ali diante de Cristo, deixando que Ele cure e pacifique o coração.",
            example:
              "Participar de um momento de adoração ao Santíssimo na paróquia trazendo um caderno de intenções ou a Bíblia.",
            source: "Mt 11,28 · CIC 1380, 2628",
          },
        ],
        questions: [
          {
            prompt: "Para que são reservadas as hóstias consagradas no sacrário após a Missa?",
            options: [
              "Apenas para enfeite do altar",
              "Para levar a comunhão aos doentes/ausentes e para a adoração dos fiéis a Cristo presente",
              "Porque o pão comum estragaria fora dali",
              "Apenas até o dia seguinte",
            ],
            answer: 1,
            explanation:
              "A reserva eucarística destina-se primeiramente à comunhão dos enfermos e fundamenta o culto de adoração a Cristo presente (CIC 1378-1379).",
          },
          {
            prompt: "O que significa a genuflexão diante do sacrário com a lâmpada acesa?",
            options: [
              "Um exercício físico de alongamento",
              "Sinal corporal de adoração a Jesus Cristo realmente presente no Santíssimo Sacramento",
              "Cumprimento apenas ao prédio histórico",
              "Pedido de licença para sair rápido",
            ],
            answer: 1,
            explanation:
              "A genuflexão exprime adoração exclusiva a Deus, reconhecendo a presença real de Cristo na Eucaristia (CIC 1378).",
          },
          {
            prompt: "Como a adoração eucarística se relaciona com a Santa Missa?",
            options: [
              "Substitui a Missa dominical",
              "Brota da Missa, prolonga seus frutos e dispõe melhor o coração para comungar",
              "Não tem ligação com a Eucaristia",
              "É proibida aos leigos",
            ],
            answer: 1,
            explanation:
              "A adoração fora da Missa prolonga e intensifica o que acontece na celebração eucarística (CIC 1378-1380).",
          },
        ],
      },
    ],
  },
  {
    id: "mariologia-terco",
    title: "O Santo Rosário e a Devoção Mariana",
    emoji: "📿",
    lessons: [
      {
        id: "sentido-rosario",
        title: "O Rosário: resumo do Evangelho",
        emoji: "🌹",
        xp: 20,
        teachings: [
          {
            title: "Contemplar Cristo com os olhos de Maria",
            text: "O Santo Rosário não é repetição mecânica sem pensamento: enquanto os lábios rezam as Ave-Marias, a mente e o coração contemplam os principais mistérios da vida de Jesus.",
            example:
              "Antes de cada dezena do Terço, parar alguns segundos para imaginar a cena evangélica do mistério.",
            source: "Lc 1,28.42 · CIC 971, 2678",
          },
          {
            title: "Um compêndio de toda a história salvífica",
            text: "Da Anunciação em Nazaré à Glória do Céu, o Rosário percorre a Encarnação, a vida pública, a Paixão e a Ressurreição de Jesus como uma escola bíblica simples.",
            example:
              "Rezar ao menos uma dezena (um mistério) por dia quando o tempo estiver apertado.",
            source: "Lc 2,19 · CIC 971, 2708",
          },
          {
            title: "Oração da família pela paz",
            text: "Rezar o Terço em família une gerações em torno de Jesus e Maria, trazendo calma ao lar e sustentando intenções pela paz no mundo.",
            example: "Combinar um dia da semana para rezar o Terço em família ou com amigos.",
            source: "At 1,14 · CIC 2678-2679",
          },
        ],
        questions: [
          {
            prompt: "Qual é o centro verdadeiro que contemplamos ao rezar o Santo Rosário?",
            options: [
              "Apenas contar contas no cordão sem pensar",
              "Os mistérios da vida, morte e ressurreição de Jesus contemplados com Maria",
              "Histórias inventadas fora da Bíblia",
              "Apenas a velocidade da leitura",
            ],
            answer: 1,
            explanation:
              "O Rosário é uma oração cristocêntrica e bíblica que medita todo o Evangelho junto com Maria (CIC 971, 2708).",
          },
          {
            prompt: "Quais duas frases bíblicas formam a base da primeira parte da Ave-Maria?",
            options: [
              "A saudação do Anjo Gabriel e a saudação de Santa Isabel em Lucas 1",
              "O Salmo 23 e Provérbios 1",
              "O Sermão da Montanha",
              "A carta aos Filipenses",
            ],
            answer: 0,
            explanation:
              "A Ave-Maria retoma as palavras do Anjo ('Ave, cheia de graça, o Senhor é contigo') e de Isabel ('Bendita és tu entre as mulheres...') (CIC 2676).",
          },
          {
            prompt: "O que evita que a repetição das Ave-Marias no Terço vire apenas rotina vazia?",
            options: [
              "Rezar o mais rápido possível",
              "Meditar o mistério anunciado em cada dezena, mantendo o coração atento a Jesus",
              "Pular o Pai-Nosso",
              "Rezar apenas quando está distraído",
            ],
            answer: 1,
            explanation:
              "A contemplação dos mistérios transforma a oração vocal em diálogo amoroso e meditação contínua (CIC 2708).",
          },
        ],
      },
      {
        id: "misterios-rosario",
        title: "Os quatro conjuntos de mistérios do Rosário",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Mistérios Gozosos e Luminosos",
            text: "Os Gozosos (segunda e sábado) contemplam a alegria da Encarnação e infância de Jesus. Os Luminosos (quinta) percorrem a vida pública: Batismo, Caná, anúncio do Reino, Transfiguração e Eucaristia.",
            example:
              "Na quinta-feira, contemplar especialmente a instituição da Eucaristia ao rezar o Terço.",
            source: "Lc 1-2; Jo 2 · CIC 512-521, 554",
          },
          {
            title: "Mistérios Dolorosos e Gloriosos",
            text: "Os Dolorosos (terça e sexta) meditam a Paixão redentora do Getsêmani ao Calvário. Os Gloriosos (quarta e domingo) celebram a Ressurreição, Ascensão, Pentecostes, Assunção e Coroação de Maria.",
            example:
              "Na sexta-feira, oferecer os mistérios dolorosos por quem enfrenta doença ou injustiça.",
            source: "Lc 22-24; At 2 · CIC 612, 638, 966",
          },
          {
            title: "O aplicativo Lumen ajuda na oração guiada",
            text: "Cada mistério pode ser rezado devagar com os textos da Igreja e intenções concretas por nossa família, paróquia e pelos que mais precisam.",
            example:
              "Usar a aba Orações para acompanhar um Terço guiado passo a passo nesta semana.",
            source: "CIC 2678, 2708",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Os quatro mistérios do Rosário",
            instruction:
              "Associe cada conjunto de mistérios ao momento da vida de Cristo e de Maria que ele contempla.",
            pairs: [
              { id: "mr1", left: "Gozosos", right: "Anunciação e infância de Jesus" },
              { id: "mr2", left: "Luminosos", right: "Batismo no Jordão, Caná e Eucaristia" },
              { id: "mr3", left: "Dolorosos", right: "Getsêmani, flagelação e Cruz de Cristo" },
              { id: "mr4", left: "Gloriosos", right: "Ressurreição, Pentecostes e Assunção" },
            ],
            explanation:
              "Os quatro conjuntos de mistérios percorrem toda a história de Jesus: alegria da vinda, luz da missão, amor na cruz e glória pascal (CIC 512-521, 971).",
            source: "CIC 512-521, 971",
          },
        ],
        questions: [
          {
            prompt: "Quais episódios fazem parte dos Mistérios Luminosos do Rosário?",
            options: [
              "Apenas o nascimento em Belém",
              "Batismo no Jordão, Bodas de Caná, anúncio do Reino, Transfiguração e Eucaristia",
              "Apenas a subida ao Calvário",
              "Somente a criação do mundo",
            ],
            answer: 1,
            explanation:
              "Os Mistérios Luminosos contemplam momentos luminosos do ministério público de Cristo entre o Jordão e a Última Ceia (CIC 535, 554, 1337).",
          },
          {
            prompt:
              "Que conjunto de mistérios contemplamos tradicionalmente às terças e sextas-feiras?",
            options: [
              "Mistérios Gloriosos",
              "Mistérios Dolorosos",
              "Mistérios Gozosos",
              "Mistérios Luminosos",
            ],
            answer: 1,
            explanation:
              "Terças e sextas contemplam os Mistérios Dolorosos da Paixão e morte redentora de Jesus (CIC 612, 2678).",
          },
          {
            prompt: "Qual mistério contempla a vinda do Espírito Santo sobre Maria e os Apóstolos?",
            options: [
              "O 3º Mistério Glorioso (Pentecostes)",
              "O 1º Mistério Gozoso",
              "O 4º Mistério Doloroso",
              "O 2º Mistério Luminoso",
            ],
            answer: 0,
            explanation:
              "Pentecostes é o terceiro Mistério Glorioso, celebrando o dom do Espírito à Igreja nascente (CIC 731, 965).",
          },
        ],
      },
      {
        id: "consagracao-confianca",
        title: "Acolher Maria como mãe e guia",
        emoji: "💙",
        xp: 20,
        teachings: [
          {
            title: "Como João, recebê-la em nossa casa",
            text: "O Evangelho conta que, desde a hora da Cruz, o discípulo amado acolheu Maria em sua casa. Confiar-se a Maria é abrir espaço para seu exemplo de fé dentro da nossa vida diária.",
            example:
              "Colocar em casa um pequeno sinal discreto de fé que lembre a família de rezar unida.",
            source: "Jo 19,27 · CIC 967, 2679",
          },
          {
            title: "Maria, modelo da Igreja orante",
            text: "Na fé firme de Maria aprendemos a escutar a Palavra sem medo e a responder com disponibilidade generosa ao plano de Deus.",
            example:
              "Rezar a oração 'Lembrai-vos' ou uma Ave-Maria antes de enfrentar uma tarefa desafiadora.",
            source: "Lc 1,38.45 · CIC 967, 2673",
          },
          {
            title: "Sempre rumo a Jesus",
            text: "Toda devoção autêntica a Maria tem um só destino: unir-nos mais estreitamente a Jesus Cristo e tornar nosso amor ao próximo mais concreto.",
            example:
              "Avaliar nossa devoção mariana perguntando se ela está nos tornando mais mansos, honestos e caridosos.",
            source: "Jo 2,5 · CIC 970-971",
          },
        ],
        questions: [
          {
            prompt: "Qual é o fruto verdadeiro de acolher Maria como mãe e guia espiritual?",
            options: [
              "Afastar-se da leitura bíblica",
              "Crescer na intimidade com Jesus e na obediência fiel à sua Palavra",
              "Sentir-se dispensado dos mandamentos",
              "Evitar a comunidade paroquial",
            ],
            answer: 1,
            explanation:
              "Maria é a perfeita discípula que sempre nos conduz ao encontro e ao seguimento de seu Filho Jesus (CIC 967, 970).",
          },
          {
            prompt:
              "O que significa a expressão 'o discípulo a recebeu em sua casa' em João 19,27?",
            options: [
              "Apenas uma mudança de endereço sem sentido espiritual",
              "Acolher Maria na intimidade da vida de fé como mãe da Igreja",
              "Que João deixou os outros apóstolos para sempre",
              "Que Maria não conhecia os demais discípulos",
            ],
            answer: 1,
            explanation:
              "O gesto de João exprime o acolhimento filial de Maria no coração da comunidade dos discípulos de Cristo (CIC 964, 2679).",
          },
          {
            prompt: "Por que a Igreja chama Maria de 'Mãe nossa na ordem da graça'?",
            options: [
              "Porque ela coopera com amor materno no nascimento e crescimento da vida divina nos fiéis",
              "Porque ela cria a graça independentemente de Cristo",
              "Porque substitui o Espírito Santo",
              "Porque existia antes da criação do universo",
            ],
            answer: 0,
            explanation:
              "Pela sua cooperação fiel na obra do Salvador, Maria é nossa mãe na ordem da graça, subordinada totalmente a Cristo (CIC 968-970).",
          },
        ],
      },
    ],
  },
  {
    id: "combate-espiritual",
    title: "Discernimento e Combate Espiritual",
    emoji: "🕯️",
    lessons: [
      {
        id: "tentacao-vigilancia",
        title: "Tentação não é pecado: vigiar e orar",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Sentir atração ao mal não é ainda pecar",
            text: "O próprio Jesus foi tentado no deserto sem jamais pecar. A tentação só se torna pecado quando a vontade livre consente com ela. Não se desespere por ser tentado!",
            example:
              "Quando surgir um mau pensamento involuntário, não entrar em pânico: rejeitá-lo com calma e mudar de foco.",
            source: "Hb 4,15; Tg 1,14-15 · CIC 2847-2849",
          },
          {
            title: "Fugir das ocasiões próximas de pecado",
            text: "A prudência espiritual ensina a não brincar perto do fogo: evitar ambientes, horários ociosos ou hábitos digitais que repetidamente levam à queda.",
            example:
              "Deixar o celular fora do quarto à noite ou usar filtros saudáveis para proteger a paz interior.",
            source: "Pr 4,14-15 · CIC 1806, 2849",
          },
          {
            title: "Deus não permite prova acima de nossas forças",
            text: "São Paulo assegura que Deus é fiel e dá, junto com a tentação, os meios da graça para suportá-la com firmeza.",
            example: "Pedir ajuda a Jesus na hora exata da prova, confiando que sua graça basta.",
            source: "1Cor 10,13 · CIC 2848",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença entre sofrer uma tentação e cometer um pecado?",
            options: [
              "Não existe diferença alguma",
              "A tentação é um convite ou impulso involuntário; o pecado acontece apenas quando consentimos livremente",
              "Todo pensamento que passa pela cabeça já é pecado mortal",
              "Só pessoas más sofrem tentações",
            ],
            answer: 1,
            explanation:
              "Até Cristo foi tentado sem pecado; o pecado supõe consentimento livre da vontade ao mal (CIC 538, 1857, 2847).",
          },
          {
            prompt: "O que promete São Paulo em 1 Coríntios 10,13 sobre as provações?",
            options: [
              "Que jamais teremos tentações após o Batismo",
              "Que Deus é fiel e não permitirá que sejamos tentados além de nossas forças com sua graça",
              "Que devemos confiar apenas em nós mesmos",
              "Que o pecado não tem importância",
            ],
            answer: 1,
            explanation:
              "Deus acompanha os seus fiéis e oferece na oração a saída e a força para vencer a provação (CIC 2848).",
          },
          {
            prompt: "Qual atitude prudente ajuda muito a evitar quedas repetidas?",
            options: [
              "Testar a própria força chegando perto do perigo",
              "Afastar-se das ocasiões próximas que costumam conduzir ao pecado",
              "Deixar de se confessar",
              "Esconder tudo em silêncio angustiado",
            ],
            answer: 1,
            explanation:
              "A vigilância espiritual e a prudência evitam as ocasiões próximas de pecado e alimentam o coração no bem (CIC 1806, 2849).",
          },
        ],
      },
      {
        id: "pecado-venial-mortal",
        title: "Pecado venial e pecado mortal",
        emoji: "⚖️",
        xp: 20,
        teachings: [
          {
            title: "As três condições do pecado mortal",
            text: "Para um pecado ser mortal (grave, que rompe a amizade com Deus), exigem-se três condições juntas: matéria grave, pleno conhecimento da gravidade e consentimento deliberado da vontade.",
            example:
              "Ao fazer exame de consciência, analisar com serenidade e verdade se houve pleno conhecimento e livre escolha.",
            source: "1Jo 5,16-17 · CIC 1855-1861",
          },
          {
            title: "O pecado venial e o risco da indiferença",
            text: "O pecado venial fere e enfraquece a caridade, embora não rompa a aliança com Deus. Ele é perdoado pelo arrependimento, pela oração, pela caridade e pela Eucaristia — mas não deve ser banalizado.",
            example:
              "Não acostumar-se a pequenas mentiras ou impaciências; combatê-las logo com amor.",
            source: "Tg 3,2 · CIC 1862-1863",
          },
          {
            title: "Onde abundou o pecado, superabundou a graça",
            text: "Conhecer a gravidade do pecado nunca serve para desesperar, mas para buscar imediatamente o sacramento da Reconciliação e recomeçar na amizade de Cristo.",
            example:
              "Procurar um sacerdote para a Confissão com confiança sempre que houver consciência de falta grave.",
            source: "Rm 5,20 · CIC 1446, 1859",
          },
        ],
        questions: [
          {
            prompt: "Quais são as três condições simultâneas para que um pecado seja mortal?",
            options: [
              "Raiva passageira, cansaço e tristeza",
              "Matéria grave, pleno conhecimento e consentimento deliberado",
              "Falta de dinheiro, erro involuntário e distração",
              "Pecado antigo, dúvida e medo",
            ],
            answer: 1,
            explanation:
              "O Catecismo ensina que o pecado mortal requer objeto de matéria grave cometido com plena advertência e consentimento deliberado (CIC 1857).",
          },
          {
            prompt: "Qual é a diferença do pecado venial em relação ao pecado mortal?",
            options: [
              "O pecado venial fere a caridade sem destruir a vida da graça na alma",
              "O pecado venial é mais grave que o mortal",
              "O pecado venial é proibido de ser perdoado",
              "Não há diferença prática",
            ],
            answer: 0,
            explanation:
              "O pecado venial deixa subsistir a caridade, embora a enfraqueça e deva ser combatido para não dispor ao pecado mortal (CIC 1855, 1863).",
          },
          {
            prompt:
              "O que deve fazer o católico que tem consciência de haver cometido um pecado mortal?",
            options: [
              "Comungar normalmente sem se confessar",
              "Arrepender-se e buscar a absolvição no sacramento da Reconciliação antes de comungar",
              "Abandonar a Igreja para sempre",
              "Esperar dez anos para falar com um padre",
            ],
            answer: 1,
            explanation:
              "Para receber novamente a Comunhão após pecado grave, é necessária a reconciliação sacramental na Confissão (CIC 1385, 1457).",
          },
        ],
      },
      {
        id: "consolacao-perseveranca",
        title: "Alegria espiritual, desolação e perseverança",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "Alegria que nasce da paz com Deus",
            text: "A alegria cristã não depende de tudo estar perfeito fora de nós: é fruto do Espírito que nasce da certeza de ser amado por Deus e estar em paz com a consciência.",
            example:
              "Agradecer diariamente três bênçãos concretas para educar o olhar na esperança cristã.",
            source: "Fl 4,4-7 · CIC 1820, 1832",
          },
          {
            title: "Não mudar de boas decisões na hora da desolação",
            text: "Em dias de tristeza, cansaço ou confusão espiritual, uma regra clássica do discernimento pede: não abandonar o bom propósito feito na luz; permanecer fiel até passar a nuvem.",
            example:
              "Em um domingo difícil, ir à Missa mesmo sem vontade emocional, pela fidelidade do compromisso com Deus.",
            source: "Is 50,10 · CIC 2728, 2731",
          },
          {
            title: "Acompanhamento espiritual e comunidade",
            text: "Ninguém cresce na fé completamente isolado. Contar com bons amigos cristãos e, quando possível, com um confessor ou diretor espiritual traz clareza e equilíbrio.",
            example:
              "Participar de um grupo bíblico, pastoral ou movimento saudável em sua paróquia.",
            source: "Ecl 4,9-10 · CIC 2690, 2695",
          },
        ],
        questions: [
          {
            prompt: "O que convém fazer em momentos de desânimo ou tristeza espiritual?",
            options: [
              "Abandonar imediatamente a oração e os bons propósitos",
              "Manter os bons propósitos feitos anteriormente com paciência e oração fiel",
              "Tomar decisões radicais no calor da angústia",
              "Isolar-se de toda a comunidade",
            ],
            answer: 1,
            explanation:
              "Na provação espiritual, a perseverança humilde nas práticas de fé e o apoio da comunidade sustentam a esperança (CIC 2728-2731).",
          },
          {
            prompt: "Qual é a fonte da verdadeira alegria cristã segundo Filipenses 4?",
            options: [
              "A ausência total de dificuldades",
              "A proximidade do Senhor e a confiança que entrega tudo a Deus em oração",
              "O domínio sobre os colegas",
              "A busca de prazeres sem limites",
            ],
            answer: 1,
            explanation:
              "Alegrai-vos no Senhor: a paz de Deus guarda os corações em Cristo Jesus mesmo em meio às tribulações (Fl 4,4-7; CIC 1820).",
          },
          {
            prompt: "Por que a vida em comunidade e o acompanhamento ajudam no discernimento?",
            options: [
              "Porque evitam enganos solitários e fortalecem nossa caminhada com apoio fraterno",
              "Porque substituem a consciência pessoal",
              "Porque tornam a fé secreta",
              "Porque impedem a oração individual",
            ],
            answer: 0,
            explanation:
              "Os pastores, mestres espirituais e a comunidade cristã ajudam a educar e iluminar o discernimento na fé (CIC 2690, 2695).",
          },
        ],
      },
    ],
  },
  {
    id: "cultura-arte-fe",
    title: "Beleza, Arte Sacra e Música",
    emoji: "🎨",
    lessons: [
      {
        id: "icones-arte-sacra",
        title: "Imagens sagradas e o Segundo Concílio de Niceia",
        emoji: "🖼️",
        xp: 20,
        teachings: [
          {
            title: "Porque Deus se tornou visível em Jesus",
            text: "No Antigo Testamento Deus não tinha rosto visível, mas ao se encarnar em Jesus Cristo, o Deus invisível tomou feições humanas. Por isso a arte sacra pode representar Cristo, Maria e os santos.",
            example:
              "Contemplar uma imagem ou ícone de Cristo na igreja como janela para rezar à Pessoa viva no céu.",
            source: "Cl 1,15 · CIC 1159-1160, 2131",
          },
          {
            title: "A honra passa da imagem ao modelo",
            text: "O 2º Concílio de Niceia (787) esclareceu que o cristão não adora madeira, pedra ou tinta: a veneração respeitosa diante da imagem dirige-se à Pessoa representada.",
            example:
              "Olhar para um crucifixo não adorando o material, mas lembrando o amor de Jesus morto por nós.",
            source: "CIC 1161, 2132",
          },
          {
            title: "A beleza conduz a Deus",
            text: "Pinturas, vitrais, esculturas e arquitetura sacra ajudam o coração humano a elevar-se à verdade e ao amor de Deus através dos sentidos.",
            example:
              "Visitar a seção Museu do Lumen para conhecer obras clássicas da arte católica com atenção histórica.",
            source: "Sb 13,3 · CIC 2500-2502",
          },
        ],
        questions: [
          {
            prompt:
              "Qual acontecimento da fé cristã tornou legítimo representar Jesus em imagens sagradas?",
            options: [
              "A invenção da fotografia",
              "A Encarnação do Filho de Deus, que se fez homem visível",
              "O esquecimento dos mandamentos",
              "A substituição do Evangelho por quadros",
            ],
            answer: 1,
            explanation:
              "Ao assumir um rosto humano na Encarnação, o Filho de Deus inaugurou uma nova economia das imagens sagradas (CIC 1159, 2131).",
          },
          {
            prompt: "O que definiu o Segundo Concílio de Niceia sobre a veneração das imagens?",
            options: [
              "Que o material da imagem possui alma própria",
              "Que quem venera uma imagem venera a pessoa nela representada, sem adorar a matéria",
              "Que todas as imagens devem ser destruídas",
              "Que imagens substituem os sacramentos",
            ],
            answer: 1,
            explanation:
              "A honra prestada à imagem dirige-se ao modelo original (Cristo, Maria, os santos); a adoração cabe somente a Deus (CIC 1161, 2132).",
          },
          {
            prompt: "Qual é o papel da arte sacra autêntica na Igreja?",
            options: [
              "Distrair os fiéis durante a leitura",
              "Servir à beleza que eleva o coração à fé, à oração e à contemplação de Deus",
              "Exibir riqueza pessoal de artistas",
              "Substituir a homilia",
            ],
            answer: 1,
            explanation:
              "A verdadeira arte sacra traduz em beleza sensível o mistério invisível de Deus e convida à oração (CIC 2502).",
          },
        ],
      },
      {
        id: "musica-liturgica",
        title: "O canto litúrgico e o canto gregoriano",
        emoji: "🎼",
        xp: 20,
        teachings: [
          {
            title: "Cantar na liturgia é rezar em unidade",
            text: "A música sacra não é show nem música de fundo decorativa: ela faz parte integrante da liturgia para unir as vozes da assembleia no louvor a Deus.",
            example:
              "Participar dos cantos da Missa com atenção à letra, não ficando apenas como espectador.",
            source: "Ef 5,19 · CIC 1156-1157",
          },
          {
            title: "O tesouro do canto gregoriano e da tradição coral",
            text: "A Igreja guarda com carinho o canto gregoriano como patrimônio próprio da liturgia romana, junto com hinos antigos e composições atuais fiéis à fé e belas na execução.",
            example:
              "Escutar um hino tradicional como o 'Tantum Ergo' ou 'Veni Creator' percebendo sua paz meditativa.",
            source: "Cl 3,16 · CIC 1157-1158",
          },
          {
            title: "Três critérios do bom canto litúrgico",
            text: "O Catecismo recorda critérios claros: beleza expressiva da oração, participação unânime da assembleia e caráter sagrado do mistério celebrado.",
            example:
              "Se servir no ministério de música, escolher letras fiéis à Escritura e à liturgia do dia.",
            source: "Sl 150 · CIC 1157",
          },
        ],
        questions: [
          {
            prompt: "Qual é o papel principal da música na liturgia católica?",
            options: [
              "Aplaudir os músicos como em um concerto comercial",
              "Servir à oração e exprimir a fé unida da assembleia no louvor a Deus",
              "Cobrir o silêncio para ninguém pensar",
              "Substituir as leituras bíblicas",
            ],
            answer: 1,
            explanation:
              "O canto litúrgico está ligado intimamente à ação sagrada para exprimir a oração unida e a beleza da fé (CIC 1156-1157).",
          },
          {
            prompt:
              "Que tradição musical a Igreja reconhece como canto próprio da liturgia romana?",
            options: [
              "O canto gregoriano",
              "Apenas marchas militares",
              "Somente músicas sem letra",
              "Nenhuma tradição histórica",
            ],
            answer: 0,
            explanation:
              "O canto gregoriano, junto com a polifonia e os cantos populares fiéis ao espírito litúrgico, é grande tesouro da Igreja (CIC 1157-1158).",
          },
          {
            prompt: "O que deve orientar a escolha das letras cantadas na Santa Missa?",
            options: [
              "Apenas o gosto pessoal momentâneo",
              "A conformidade com a Sagrada Escritura, a doutrina católica e o momento litúrgico",
              "A duração mais longa possível",
              "O uso exclusivo de instrumentos altos",
            ],
            answer: 1,
            explanation:
              "Os textos destinados ao canto sagrado devem estar em harmonia com a doutrina católica e beber sobretudo da Escritura e da liturgia (CIC 1158).",
          },
        ],
      },
      {
        id: "arquitetura-igreja",
        title: "O altar, o ambão e o sacrário na igreja",
        emoji: "⛪",
        xp: 20,
        teachings: [
          {
            title: "O altar: mesa do sacrifício e do banquete",
            text: "No centro do templo cristão está o altar, que representa o próprio Cristo. Sobre ele celebra-se o sacrifício da Cruz tornado presente e partilha-se o Pão da Vida.",
            example: "Inclinar a cabeça com reverência diante do altar durante as celebrações.",
            source: "1Cor 10,16-21 · CIC 1182, 1383",
          },
          {
            title: "O ambão e a pia batismal",
            text: "Do ambão proclama-se com dignidade a Palavra de Deus; na pia batismal celebram-se os novos nascimentos pela água e pelo Espírito. Ambos lembram as duas mesas da fé: Palavra e Eucaristia.",
            example:
              "Observar ao entrar em sua paróquia onde ficam o ambão, a pia batismal, o altar e o sacrário.",
            source: "Ne 8,4 · CIC 1184-1185",
          },
          {
            title: "O sacrário e a casa de Deus",
            text: "O sacrário guarda em lugar digno e visível o Santíssimo Sacramento para adoração e viático aos doentes. O edifício da igreja não é apenas um salão comum, mas lugar sagrado de encontro.",
            example: "Manter silêncio respeitoso dentro do templo para favorecer quem ali reza.",
            source: "Sl 84,2 · CIC 1181-1183",
          },
        ],
        questions: [
          {
            prompt: "O que simboliza o altar no centro da igreja católica?",
            options: [
              "Apenas uma mesa para colocar microfones",
              "O próprio Cristo, sacerdote e vítima, mesa do sacrifício e do banquete eucarístico",
              "Um monumento funerário antigo sem uso",
              "O lugar dos avisos financeiros",
            ],
            answer: 1,
            explanation:
              "O altar é símbolo de Cristo e centro da ação de graças realizada na Eucaristia (CIC 1182, 1383).",
          },
          {
            prompt: "Para que serve o ambão em uma igreja?",
            options: [
              "Para guardar os objetos de limpeza",
              "Para a proclamação solene da Palavra de Deus na liturgia",
              "Para servir o café após a Missa",
              "Para substituir o confessionário",
            ],
            answer: 1,
            explanation:
              "A dignidade da Palavra de Deus exige na igreja um lugar próprio — o ambão — voltado para a escuta atenta da assembleia (CIC 1184).",
          },
          {
            prompt: "Qual postura combina com a entrada e permanência em uma igreja católica?",
            options: [
              "Conversar em voz alta perto de quem reza",
              "Recolhimento e respeito diante do lugar sagrado e da presença eucarística",
              "Correr pelos bancos",
              "Usar o espaço apenas como passagem apressada",
            ],
            answer: 1,
            explanation:
              "O templo cristão é casa de oração onde Cristo está realmente presente no Santíssimo Sacramento (CIC 1181, 1183).",
          },
        ],
      },
    ],
  },
  {
    id: "ecumenismo-dialogo",
    title: "Unidade dos Cristãos e Diálogo",
    emoji: "🕊️",
    lessons: [
      {
        id: "desejo-unidade",
        title: "Oração de Jesus pela unidade dos cristãos",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "Que todos sejam um, para que o mundo creia",
            text: "Na Última Ceia, Jesus rezou intensamente ao Pai pela unidade de todos os que creriam nele. As divisões históricas entre cristãos ferem esse desejo do Senhor.",
            example:
              "Rezar pela unidade dos cristãos na verdade e na caridade, evitando zombarias ou hostilidades.",
            source: "Jo 17,20-21 · CIC 816-822",
          },
          {
            title: "O que já nos une e o que falta curar",
            text: "Com cristãos de outras confissões partilhamos o amor a Cristo, a Sagrada Escritura e muitas vezes um Batismo válido; ao mesmo tempo, reconhecemos com honestidade as diferenças doutrinais e sacramentais.",
            example:
              "Colaborar com respeito em ações sociais de caridade junto a vizinhos de outras igrejas.",
            source: "Ef 4,4-6 · CIC 818-821",
          },
          {
            title: "Ecumenismo começa na conversão interior",
            text: "Não há verdadeiro ecumenismo sem conversão de coração, humildade, oração comum pela unidade e conhecimento fiel da própria fé católica.",
            example:
              "Conhecer bem a fé católica para dialogar com serenidade e amor, sem relativismo nem agressividade.",
            source: "1Pd 3,15 · CIC 821",
          },
        ],
        questions: [
          {
            prompt: "Por que os católicos devem rezar e trabalhar pela unidade dos cristãos?",
            options: [
              "Para misturar todas as doutrinas sem verdade",
              "Porque o próprio Jesus rezou na Última Ceia para que todos os seus discípulos sejam um",
              "Para acabar com a Santa Missa",
              "Por mera estratégia diplomática",
            ],
            answer: 1,
            explanation:
              "O desejo de unidade nasce diretamente do coração de Cristo em João 17,21 e exige conversão, oração e diálogo fiel à verdade (CIC 820-822).",
          },
          {
            prompt: "O que exige o verdadeiro diálogo ecumênico segundo o Catecismo?",
            options: [
              "Esconder as convicções católicas por vergonha",
              "Conversão interior, oração pela unidade, conhecimento fraterno e fidelidade à verdade",
              "Discussões agressivas para humilhar o outro",
              "Proibir qualquer amizade com não-católicos",
            ],
            answer: 1,
            explanation:
              "A busca da unidade requer renovação interior, oração, diálogo sincero e amor à verdade integral revelada por Cristo (CIC 821).",
          },
          {
            prompt:
              "Qual sacramento frequentemente já cria um vínculo real de fraternidade com outros cristãos?",
            options: [
              "O Batismo validamente celebrado em nome da Trindade",
              "Nenhum vínculo existe",
              "Apenas o matrimônio civil",
              "Apenas a língua falada",
            ],
            answer: 0,
            explanation:
              "Quem crê em Cristo e foi batizado validamente encontra-se em certa comunhão com a Igreja Católica, ainda que imperfeita (CIC 818, 1271).",
          },
        ],
      },
      {
        id: "raizes-israel",
        title: "Nossas raízes na fé de Israel",
        emoji: "🫒",
        xp: 20,
        teachings: [
          {
            title: "Uma aliança nunca revogada",
            text: "Jesus, Maria, os Apóstolos e os primeiros discípulos nasceram no povo de Israel. São Paulo lembra que os gentios foram enxertados na boa oliveira das promessas feitas a Abraão.",
            example:
              "Ler os Salmos e os profetas lembrando com gratidão de nossas raízes bíblicas comuns.",
            source: "Rm 11,17-29 · CIC 839-840",
          },
          {
            title: "Rejeitar todo antissemitismo",
            text: "A Igreja rejeita firmemente qualquer forma de ódio, desprezo ou discriminação contra o povo judeu. A morte de Cristo não pode ser imputada coletivamente aos judeus de ontem ou de hoje.",
            example:
              "Corrigir com clareza qualquer comentário preconceituoso ou injusto contra outras comunidades religiosas.",
            source: "At 3,17 · CIC 597, 839",
          },
          {
            title: "Esperança comum na vinda definitiva do Reino",
            text: "Enquanto os judeus aguardam a vinda do Messias, nós cristãos cremos que Ele já veio em Jesus e esperamos seu retorno glorioso, rezando juntos a esperança no Deus único.",
            example: "Cultivar o respeito fraterno e o diálogo pela paz em nossa cidade.",
            source: "Is 2,2-4 · CIC 840",
          },
        ],
        questions: [
          {
            prompt:
              "Que imagem São Paulo usa em Romanos 11 para explicar a ligação dos cristãos com Israel?",
            options: [
              "Ramos enxertados na boa oliveira das promessas de Abraão",
              "Árvores plantadas em planetas diferentes",
              "Pedras quebradas sem ligação",
              "Barcos inimigos no mesmo rio",
            ],
            answer: 0,
            explanation:
              "Os crentes vindos das nações são enxertados na raiz santa das promessas feitas aos patriarcas de Israel (Rm 11,17; CIC 839).",
          },
          {
            prompt:
              "Qual é a posição clara do Catecismo sobre a responsabilidade histórica pela morte de Jesus?",
            options: [
              "Culpar todo o povo judeu de todas as épocas",
              "Afirmar que nossos pecados foram a causa da Paixão e rejeitar qualquer culpa coletiva sobre os judeus",
              "Culpar apenas Pedro",
              "Dizer que não houve Paixão",
            ],
            answer: 1,
            explanation:
              "Os pecadores são os verdadeiros autores da Paixão de Cristo; não se pode atribuir culpa coletiva aos judeus de então nem aos de hoje (CIC 597-598).",
          },
          {
            prompt: "Como os católicos devem relacionar-se com a herança do Antigo Testamento?",
            options: [
              "Descartá-lo completamente",
              "Venerá-lo como Palavra de Deus inspirada que prepara e ilumina Cristo",
              "Lê-lo apenas como lenda antiga",
              "Substituí-lo integralmente por poemas modernos",
            ],
            answer: 1,
            explanation:
              "O Antigo Testamento conserva valor perene como parte verdadeira da Sagrada Escritura iluminada pelo Evangelho (CIC 121-123).",
          },
        ],
      },
      {
        id: "respeito-liberdade",
        title: "Liberdade religiosa e diálogo com respeito",
        emoji: "🤝",
        xp: 20,
        teachings: [
          {
            title: "A fé é sempre um ato livre",
            text: "Ninguém pode ser forçado a crer contra a própria consciência. O próprio Jesus convidou sem jamais impor pela violência, respeitando a liberdade humana.",
            example:
              "Testemunhar a fé com alegria e argumentos serenos, respeitando o tempo e a liberdade de cada amigo.",
            source: "Mc 10,21; 1Pd 3,15 · CIC 160, 2104-2106",
          },
          {
            title: "Reconhecer sementes do bem e da verdade",
            text: "A Igreja não rejeita nada do que há de verdadeiro e santo nas buscas humanas e nas outras religiões, enquanto anuncia com clareza que Jesus Cristo é o Caminho, a Verdade e a Vida.",
            example:
              "Dialogar com pessoas de outras crenças sobre paz, família e cuidado dos pobres com cordialidade.",
            source: "Jo 14,6; At 17,22-28 · CIC 843, 851",
          },
          {
            title: "Dar razões da nossa esperança com mansidão",
            text: "São Pedro orienta: estarmos sempre prontos a responder a quem nos pedir a razão da nossa esperança, mas com mansidão e respeito.",
            example:
              "Aprender continuamente sobre a fé para responder às perguntas de amigos sem arrogância.",
            source: "1Pd 3,15-16 · CIC 851, 2106",
          },
        ],
        questions: [
          {
            prompt: "Por que a Igreja defende o direito à liberdade religiosa?",
            options: [
              "Porque todas as opiniões contraditórias são igualmente verdadeiras",
              "Porque o ato de fé é livre por natureza e ninguém deve ser coagido contra a consciência",
              "Porque a religião não importa",
              "Para proibir a evangelização",
            ],
            answer: 1,
            explanation:
              "A dignidade da pessoa exige imunidade de coerção em matéria religiosa enquanto busca livremente a verdade (CIC 160, 2106).",
          },
          {
            prompt:
              "Como São Pedro orienta os cristãos ao explicarem sua fé aos outros (1Pd 3,15)?",
            options: [
              "Com ironia e superioridade",
              "Com mansidão, respeito e consciência reta",
              "Com silêncio absoluto diante de qualquer pergunta",
              "Com discussões intermináveis",
            ],
            answer: 1,
            explanation:
              "O testemunho cristão une clareza na verdade de Cristo e mansidão respeitosa para com o interlocutor (1Pd 3,15-16; CIC 851).",
          },
          {
            prompt: "A valorização do diálogo inter-religioso elimina a missão de anunciar Cristo?",
            options: [
              "Não; a Igreja continua anunciando Cristo como único Salvador em espírito de respeito e caridade",
              "Sim, ninguém deve falar de Jesus",
              "Sim, exceto dentro dos seminários",
              "Sim, a missão terminou no século XX",
            ],
            answer: 0,
            explanation:
              "Reconhecer raios de verdade presentes entre os povos não diminui o mandado missionário de anunciar Cristo (CIC 843, 851).",
          },
        ],
      },
    ],
  },
  {
    id: "esperanca-nova-criacao",
    title: "O Reino Definitivo e a Nova Criação",
    emoji: "🌅",
    lessons: [
      {
        id: "parusia-cristo",
        title: "A vinda gloriosa de Cristo (Parusia)",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Ele virá de novo em sua glória",
            text: "Professamos no Credo que Cristo virá novamente em glória para julgar os vivos e os mortos. Não sabemos o dia nem a hora; por isso vivemos em vigilância serena.",
            example:
              "Não acreditar em datas alarmistas de fim do mundo; viver hoje com fé, amor e dever cumprido.",
            source: "Mt 24,36; At 1,11 · CIC 668-674",
          },
          {
            title: "Vigilância é amar no presente",
            text: "Esperar a vinda de Cristo não é cruzar os braços nem ter medo: é servir com fidelidade, cuidar dos pequenos e manter a lâmpada da caridade acesa.",
            example:
              "Cumprir bem os deveres desta semana como alguém que acolhe o Senhor a cada dia.",
            source: "Mt 25,1-13 · CIC 671-672",
          },
          {
            title: "O Juízo Final revelará a vitória do amor",
            text: "Na vinda gloriosa de Cristo, toda a história humana será iluminada na verdade: o bem escondido será reconhecido e toda injustiça será vencida pelo Reino eterno.",
            example:
              "Confiar que nenhum gesto pequeno de amor feito em segredo se perde diante de Deus.",
            source: "Mt 25,31-46 · CIC 678-679, 1038-1041",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a postura cristã diante de previsões humanas sobre a data do fim do mundo?",
            options: [
              "Seguir datas marcadas por curiosidade ou pânico",
              "Lembrar que só o Pai conhece o dia e a hora, mantendo vigilância serena na caridade",
              "Parar de trabalhar e estudar imediatamente",
              "Negar que Cristo voltará um dia",
            ],
            answer: 1,
            explanation:
              "Jesus disse claramente que não cabe a nós conhecer tempos e datas; a vigilância vive-se na fidelidade cotidiana (Mt 24,36; CIC 673, 1040).",
          },
          {
            prompt: "O que acontecerá no Juízo Final segundo o Credo?",
            options: [
              "Um esquecimento de todo bem praticado",
              "A manifestação plena da verdade das obras humanas e o triunfo definitivo da justiça de Cristo",
              "A destruição dos santos",
              "Uma nova provação terrestre repetida",
            ],
            answer: 1,
            explanation:
              "Na presença de Cristo, a verdade sobre a relação de cada pessoa com Deus e com o próximo será revelada plenamente (CIC 1039-1040).",
          },
          {
            prompt: "Por que os primeiros cristãos rezavam 'Maranatha — Vem, Senhor Jesus!'?",
            options: [
              "Com desejo alegre da vinda gloriosa de Cristo que plenifica o Reino",
              "Por ódio à criação material",
              "Para fugir das responsabilidades familiares",
              "Apenas em dias de tempestade",
            ],
            answer: 0,
            explanation:
              "A Igreja espera com esperança alegre a manifestação gloriosa de seu Esposo e Salvador (1Cor 16,22; CIC 671, 2817).",
          },
        ],
      },
      {
        id: "novos-ceus-terra",
        title: "Novos céus e nova terra",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "A criação inteira será renovada, não aniquilada",
            text: "Deus não joga fora o mundo que criou: no fim dos tempos, o universo inteiro será purificado e transformado para participar da glória dos filhos de Deus — novos céus e nova terra.",
            example:
              "Cuidar do mundo e da cultura humana sabendo que tudo o que há de bom e verdadeiro permanece em Cristo.",
            source: "Rm 8,19-21; 2Pd 3,13 · CIC 1042-1047",
          },
          {
            title: "Onde habita a justiça e não há mais pranto",
            text: "O Apocalipse descreve a Jerusalém celeste: Deus enxugará toda lágrima, e não haverá mais morte, luto ou dor, porque Deus será tudo em todos.",
            example: "Encontrar consolo nas perdas e doenças à luz da promessa da Nova Jerusalém.",
            source: "Ap 21,1-5 · CIC 1044-1045",
          },
          {
            title: "Os frutos de nosso amor permanecem",
            text: "Embora a figura deste mundo passe, a caridade e os frutos do Espírito que construímos na terra reencontram-se purificados no Reino eterno.",
            example:
              "Investir tempo e energia naquilo que tem valor eterno: fé, perdão, família e serviço.",
            source: "1Cor 15,58 · CIC 1049-1050",
          },
        ],
        questions: [
          {
            prompt: "O que significa a promessa bíblica de 'novos céus e nova terra'?",
            options: [
              "Que só os espíritos sem corpo existirão no vácuo",
              "A renovação gloriosa e definitiva de toda a criação material e humana em Cristo",
              "A repetição infinita das mesmas dores",
              "Que o bem feito hoje na terra não tem valor algum",
            ],
            answer: 1,
            explanation:
              "O universo visível está destinado a ser transformado para participar da liberdade gloriosa dos filhos de Deus (CIC 1042-1047).",
          },
          {
            prompt: "Qual promessa de consolo aparece em Apocalipse 21,4 sobre a Nova Jerusalém?",
            options: [
              "Deus enxugará toda lágrima e não haverá mais morte, luto nem dor",
              "Haverá ainda pequenas guerras no céu",
              "As pessoas não reconhecerão umas às outras",
              "Apenas um anjo entrará na cidade",
            ],
            answer: 0,
            explanation:
              "Na consumação do Reino, Deus habitará com os homens em alegria eterna livre de morte e tristeza (Ap 21,3-4; CIC 1044).",
          },
          {
            prompt:
              "O esforço pelo bem e pela justiça nesta terra se perde quando este mundo passar?",
            options: [
              "Sim, nada do bem fica",
              "Não; todos os frutos bons de nossa caridade e esforço serão reencontrados purificados no Reino",
              "Só obras famosas ficam",
              "Apenas construções de pedra permanecem iguais",
            ],
            answer: 1,
            explanation:
              "O Catecismo ensina que os bens da dignidade humana, da comunhão fraterna e da liberdade reencontrar-se-ão limpos de mancha no Reino (CIC 1050).",
          },
        ],
      },
      {
        id: "amem-final",
        title: 'O "Amém" da fé e da esperança cristã',
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Amém: firmeza e confiança em Deus",
            text: "Tanto o Credo quanto a Bíblia terminam com 'Amém'. Em hebraico, a mesma raiz significa firmeza, verdade e fidelidade: dizer Amém é apoiar toda a vida sobre a rocha que é Deus.",
            example:
              "Dizer 'Amém' ao fim das orações com pausa e consciência, assumindo o compromisso do coração.",
            source: "2Cor 1,20; Ap 22,20 · CIC 1061-1065",
          },
          {
            title: "Cristo é o grande 'Amém' do Pai",
            text: "No livro do Apocalipse, o próprio Jesus é chamado 'o Amém, a Testemunha fiel e verdadeira', porque nele todas as promessas de Deus se tornaram Sim.",
            example:
              "Apoiar a esperança nos dias difíceis não em promessas humanas frágeis, mas em Cristo fiel.",
            source: "Ap 3,14 · CIC 1065",
          },
          {
            title: "Caminhar hoje com alegria e perseverança",
            text: "Concluir uma trilha de estudos é apenas recomeçar com mais profundidade na oração, nos sacramentos, na leitura bíblica e no amor concreto ao próximo.",
            example:
              "Escolher um hábito simples — como um capítulo bíblico diário ou um mistério do Rosário — para manter viva a caminhada.",
            source: "Hb 12,1-2 · CIC 1064, 2856",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é o significado profundo da palavra 'Amém' no final do Credo e das orações?",
            options: [
              "Apenas um sinal de despedida rápida",
              "Aderir com firmeza e confiança à verdade e às promessas do Deus fiel",
              "Dúvida respeitosa",
              "Repetição sem sentido",
            ],
            answer: 1,
            explanation:
              "Amém provém da raiz hebraica ligada à solidez e fidelidade: significa 'creio que é verdade e confio assim' (CIC 1061-1064).",
          },
          {
            prompt: "Quem é chamado no Apocalipse de 'o Amém, a Testemunha fiel e verdadeira'?",
            options: [
              "O imperador romano",
              "O próprio Jesus Cristo",
              "O profeta Jonas",
              "O anjo das águas",
            ],
            answer: 1,
            explanation:
              "Em Apocalipse 3,14, Jesus é proclamado o Amém definitivo do amor do Pai para conosco (CIC 1065).",
          },
          {
            prompt: "Qual é o melhor passo após concluir uma etapa de formação catequética?",
            options: [
              "Parar de rezar porque já aprendeu tudo",
              "Transformar o que foi aprendido em vida de oração, sacramentos e caridade diária",
              "Guardar o conhecimento só para debates",
              "Esquecer a comunidade paroquial",
            ],
            answer: 1,
            explanation:
              "A catequese visa alimentar continuamente a união viva com Cristo na liturgia, na oração e no amor fraterno (CIC 426, 1064).",
          },
        ],
      },
    ],
  },
];
