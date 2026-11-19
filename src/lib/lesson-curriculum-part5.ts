import type { LessonUnit } from "./lesson-types";

// Unidades 77 a 93 (17 unidades de 3 lições cada = 51 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_5_UNITS: LessonUnit[] = [
  {
    id: "padres-apostolicos",
    title: "Os Padres Apostólicos (Clemente, Inácio, Policarpo)",
    emoji: "🕯️",
    lessons: [
      {
        id: "clemente-roma",
        title: "São Clemente de Roma e a sucessão apostólica",
        emoji: "🗝️",
        xp: 20,
        teachings: [
          {
            title: "Testemunhas que conheceram os Apóstolos",
            text: "Os Padres Apostólicos foram os primeiros pastores cristãos logo após os Apóstolos, entre os séculos I e II. Suas cartas mostram como a Igreja vivia a Eucaristia, a caridade e a unidade.",
            example:
              "Conhecer os primeiros séculos da Igreja ajuda a perceber a continuidade viva com o Evangelho hoje.",
            source: "2Tm 2,2 · CIC 77, 861",
          },
          {
            title: "São Clemente escreve a Corinto pela unidade",
            text: "Por volta do ano 96, São Clemente, bispo de Roma, escreveu aos cristãos de Corinto exortando à humildade e explicando que os Apóstolos constituíram sucessores para continuar o serviço pastoral.",
            example:
              "Resolver desentendimentos na comunidade com mansidão e respeito aos pastores ordenados.",
            source: "At 20,28 · CIC 861, 882",
          },
          {
            title: "Ordem e paz na casa de Deus",
            text: "Clemente lembrou que Deus não é Deus de confusão, mas de paz e caridade: cada membro do Corpo de Cristo serve com humildade no lugar que recebeu.",
            example:
              "Cumprir com zelo e sem rivalidade o serviço simples que você assumiu na igreja ou em casa.",
            source: "1Cor 14,33 · CIC 791, 861",
          },
        ],
        questions: [
          {
            prompt: "Quem foram os Padres Apostólicos na história da Igreja?",
            options: [
              "Imperadores romanos do século IV",
              "Primeiros escritores e bispos cristãos que conheceram diretamente os Apóstolos ou seus discípulos imediatos",
              "Monges da Idade Média tardia",
              "Filósofos anteriores a Moisés",
            ],
            answer: 1,
            explanation:
              "Os Padres Apostólicos testemunham a fé e a organização sacramental da Igreja logo após a geração dos Apóstolos (CIC 77, 861).",
          },
          {
            prompt:
              "O que São Clemente de Roma defendeu em sua carta à Igreja de Corinto por volta do ano 96?",
            options: [
              "Que cada fiel trocasse de doutrina todo mês",
              "A unidade fraterna, a humildade e o respeito à sucessão apostólica dos presbíteros e bispos",
              "A suspensão da Eucaristia dominical",
              "O abandono da caridade com os pobres",
            ],
            answer: 1,
            explanation:
              "Clemente testemunha muito cedo tanto o cuidado pastoral do bispo de Roma pela unidade quanto a sucessão apostólica (CIC 861).",
          },
          {
            prompt:
              "Como se transmite a missão apostólica na Igreja através dos séculos segundo o Catecismo?",
            options: [
              "Por sorteio entre os vizinhos",
              "Pela sucessão ininterrupta dos bispos em comunhão com o sucessor de Pedro",
              "Apenas por livros antigos sem pastores",
              "Por eleição civil dos governos",
            ],
            answer: 1,
            explanation:
              "Para que o Evangelho permanecesse vivo e íntegro, os Apóstolos deixaram bispos como seus sucessores (CIC 77, 861).",
          },
        ],
      },
      {
        id: "inacio-antioquia",
        title: "Santo Inácio de Antioquia: Igreja Católica e Eucaristia",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Primeiro a escrever a expressão 'Igreja Católica'",
            text: "Preso e levado a Roma para o martírio por volta do ano 107, o bispo Inácio de Antioquia escreveu sete cartas ardentes. Nelas aparece pela primeira vez o nome 'Igreja Católica' (universal).",
            example:
              "Sentir alegria de pertencer a uma Igreja que já no ano 107 professava o mesmo nome e a mesma fé.",
            source: "At 11,26 · CIC 830, 886",
          },
          {
            title: "Onde está o bispo, aí esteja a comunidade e a Eucaristia",
            text: "Inácio insistiu que a verdadeira Eucaristia une os fiéis ao redor do bispo, dos presbíteros e dos diáconos, protegendo a Igreja contra divisões.",
            example: "Participar da Missa em comunhão com a diocese e a Igreja inteira.",
            source: "1Cor 10,16-17 · CIC 886, 1369",
          },
          {
            title: "Trigo de Deus moído pelos dentes das feras",
            text: "Na carta aos Romanos, Inácio pediu que não impedissem seu martírio: desejava tornar-se 'trigo de Cristo' para ser pão puro entregue a Jesus, a quem chamou 'meu Amor crucificado'.",
            example: "Unir as pequenas dificuldades diárias ao amor a Cristo na Eucaristia.",
            source: "Fl 1,21 · CIC 1405, 2474",
          },
        ],
        questions: [
          {
            prompt:
              "Qual expressão famosa aparece registrada pela primeira vez nas cartas de Santo Inácio de Antioquia (c. 107)?",
            options: [
              "Igreja Católica (universal)",
              "Renascimento medieval",
              "Estado laico",
              "Idade Moderna",
            ],
            answer: 0,
            explanation:
              "Inácio escreveu 'Onde está Jesus Cristo, aí está a Igreja Católica', testemunhando a fé universal unida em Cristo (CIC 830).",
          },
          {
            prompt: "O que Santo Inácio ensinou sobre a Eucaristia e a unidade com o bispo?",
            options: [
              "Cada pequeno grupo deve fazer uma celebração separada contra o bispo",
              "A Eucaristia é remédio de imortalidade e deve ser celebrada em unidade com o bispo e seu presbitério",
              "A Eucaristia é apenas lembrança simbólica distante",
              "Diáconos e presbíteros não existiam ainda",
            ],
            answer: 1,
            explanation:
              "Já no início do século II, Inácio atesta a estrutura trina (bispo, presbíteros, diáconos) unida na única Eucaristia (CIC 886, 1405).",
          },
          {
            prompt: "Que imagem eucarística Santo Inácio usou ao caminhar para o martírio em Roma?",
            options: [
              "Ser trigo de Cristo moído para tornar-se pão puro do Senhor",
              "Tornar-se uma estátua de mármore",
              "Construir uma frota de navios",
              "Fugir para outro continente",
            ],
            answer: 0,
            explanation:
              "Para Inácio, a entrega no martírio é comunhão extrema com Cristo Pão da Vida e Cordeiro imolado (CIC 2474).",
          },
        ],
      },
      {
        id: "policarpo-didaque",
        title: "São Policarpo e a Didaqué: caminho da vida",
        emoji: "🛤️",
        xp: 20,
        teachings: [
          {
            title: "Didaqué: dois caminhos diante de nós",
            text: "Um dos textos cristãos mais antigos fora da Bíblia, a Didaqué ('Instrução dos Doze Apóstolos'), começa dizendo: 'Há dois caminhos, o da vida e o da morte', resumindo a moral do Evangelho.",
            example:
              "Lembrar antes das escolhas cotidianas que nossos atos aproximam ou afastam do caminho da vida.",
            source: "Mt 7,13-14 · CIC 1696, 1789",
          },
          {
            title: "Batismo em nome da Trindade e Eucaristia no Domingo",
            text: "A Didaqué já ensina a batizar em nome do Pai, do Filho e do Espírito Santo, rezar o Pai-Nosso três vezes ao dia e reunir-se no Dia do Senhor para partir o pão após confessar as faltas.",
            example:
              "Rezar o Pai-Nosso ao longo do dia e guardar o domingo para a Missa em comunidade.",
            source: "Mt 28,19; At 20,7 · CIC 1345, 2177",
          },
          {
            title: "Oitenta e seis anos servindo a Cristo",
            text: "São Policarpo de Esmirna, discípulo do apóstolo João, respondeu ao juiz que o mandava renegar Jesus: 'Oitenta e seis anos o sirvo e nenhum mal me fez; como blasfemaria do meu Rei que me salvou?'.",
            example:
              "Cultivar fidelidade fiel até a velhice, dando testemunho alegre de quanto Deus é bom.",
            source: "2Tm 4,7 · CIC 2473-2474",
          },
        ],
        questions: [
          {
            prompt: "Como começa o antigo documento cristão chamado Didaqué?",
            options: [
              "Com uma lista de impostos romanos",
              "Apresentando os dois caminhos diante da liberdade humana: o caminho da vida e o caminho da morte",
              "Com críticas contra o Batismo",
              "Com receitas culinárias",
            ],
            answer: 1,
            explanation:
              "Retomando Deuteronômio 30 e Mateus 7, a Didaqué catequiza os novos cristãos pela escolha do caminho da vida (CIC 1696).",
          },
          {
            prompt:
              "O que São Policarpo respondeu quando ameaçado de morte se não renegasse Jesus?",
            options: [
              "Que precisava pensar mais um mês",
              "Que servia a Cristo há oitenta e seis anos e nunca recebera dele mal algum, não podendo traí-lo",
              "Que negaria só em voz baixa",
              "Que não conhecia o Evangelho",
            ],
            answer: 1,
            explanation:
              "A resposta serena de Policarpo (c. 155) é um dos relatos de martírio mais antigos e comoventes da Igreja (CIC 2474).",
          },
          {
            prompt:
              "Qual dia da semana a Didaqué testemunha como o dia da assembleia eucarística cristã?",
            options: [
              "O Dia do Senhor (Domingo)",
              "A terça-feira à noite",
              "Uma única vez por ano",
              "Qualquer dia sem reunião comunitária",
            ],
            answer: 0,
            explanation:
              "Desde os tempos apostólicos, os cristãos reúnem-se no domingo, dia da Ressurreição, para partir o pão e render graças (CIC 1345, 2177).",
          },
        ],
      },
    ],
  },
  {
    id: "apologistas-igreja-antiga",
    title: "Justino, Irineu e a Fé dos Primeiros Séculos",
    emoji: "🛡️",
    lessons: [
      {
        id: "sao-justino-missa-ano155",
        title: "São Justino Mártir e o relato da Missa no ano 155",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Filósofo que encontrou a verdadeira sabedoria em Cristo",
            text: "Buscando a verdade em várias escolas filosóficas antigas, Justino converteu-se após conversar com um ancião cristão sobre os profetas e Cristo, tornando-se grande defensor racional da fé.",
            example:
              "Não ter medo de estudar ciência e filosofia buscando diálogo honesto com a fé católica.",
            source: "1Pd 3,15 · CIC 159, 843",
          },
          {
            title: "A Missa de 155 é a mesma Missa de hoje!",
            text: "Em sua Primeira Apologia ao imperador romano, Justino descreveu a celebração dominical: leituras dos Apóstolos e Profetas, homilia, preces, paz, oferta do pão e vinho, oração eucarística e partilha com os pobres.",
            example:
              "Ao participar da Missa no próximo domingo, perceber que a estrutura básica já tem quase dois mil anos!",
            source: "Lc 22,19 · CIC 1345",
          },
          {
            title: "Alimento eucarístico que não é pão comum",
            text: "Justino escreveu claramente por volta do ano 155: 'Não tomamos estas coisas como pão comum nem bebida comum', mas como a Carne e o Sangue do mesmo Jesus encarnado.",
            example:
              "Aproximar-se da Comunhão com fé viva na presença real confessada desde os primeiros séculos.",
            source: "1Cor 11,23-29 · CIC 1345, 1374",
          },
        ],
        questions: [
          {
            prompt:
              "Por que a descrição da celebração dominical feita por São Justino Mártir no século II é citada no Catecismo?",
            options: [
              "Porque mostra que a estrutura essencial da Santa Missa permanece a mesma desde os primeiros séculos",
              "Porque ele inventou novos sacramentos",
              "Porque os cristãos não liam a Bíblia na Missa",
              "Porque ele era contrário à Eucaristia",
            ],
            answer: 0,
            explanation:
              "O Catecismo transcreve integralmente o relato de São Justino (c. 155) para mostrar a continuidade viva da Liturgia da Palavra e da Eucaristia (CIC 1345).",
          },
          {
            prompt:
              "O que São Justino afirmou sobre o pão e vinho consagrados na celebração cristã?",
            options: [
              "Que continuam sendo apenas pão e vinho comuns",
              "Que pela oração de ação de graças tornam-se a Carne e o Sangue de Jesus encarnado",
              "Que eram servidos só a filósofos",
              "Que substituíam o Batismo",
            ],
            answer: 1,
            explanation:
              "Justino atesta de modo inequívoco a fé primitiva da Igreja na presença real eucarística (CIC 1345, 1374).",
          },
          {
            prompt:
              "Qual era a postura de São Justino diante da verdade encontrada fora da Igreja antes de Cristo?",
            options: [
              "Desprezava todo conhecimento humano",
              "Reconhecia que tudo o que há de verdadeiro e bom reflete as 'sementes do Verbo' (Cristo)",
              "Misturava mitologia com o Credo",
              "Proibia os cristãos de estudar",
            ],
            answer: 1,
            explanation:
              "Fé e razão harmonizam-se porque toda verdade procede do mesmo Deus criador e do Verbo que ilumina todo ser humano (CIC 159, 843).",
          },
        ],
      },
      {
        id: "santo-irineu-lyon",
        title: "Santo Irineu: a glória de Deus é o homem vivo",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Discípulo de Policarpo defendendo a fé integral",
            text: "Bispo de Lyon na França atual, Irineu enfrentou seitas gnósticas que desprezavam o corpo, o Antigo Testamento e a matéria, mostrando a unidade de toda a obra de Deus.",
            example:
              "Rejeitar qualquer espiritualidade que trate o corpo ou a criação boa de Deus como algo mau.",
            source: "1Tm 4,4 · CIC 299, 364",
          },
          {
            title: "A sucessão dos bispos e a Igreja de Roma",
            text: "Contra invenções secretas dos gnósticos, Irineu apontou a fé pública transmitida pelos Apóstolos nas Igrejas fundadas por eles — destacando a Igreja de Roma, fundada por Pedro e Paulo.",
            example:
              "Valorizar a comunhão com a Igreja universal e seu ensinamento público em vez de grupos fechados com 'segredos'.",
            source: "2Ts 2,15 · CIC 77, 834",
          },
          {
            title: "A glória de Deus é o ser humano vivo",
            text: "Irineu escreveu uma frase célebre citada no Catecismo: 'A glória de Deus é o homem vivo, e a vida do homem é a visão de Deus'. E Maria, por sua obediência, desatou o nó da desobediência de Eva.",
            example:
              "Viver com plenitude cristã, sabendo que a santidade não apaga nossa humanidade: a faz florescer!",
            source: "Jo 10,10 · CIC 294, 494",
          },
        ],
        questions: [
          {
            prompt:
              "O que significa a célebre frase de Santo Irineu citada no Catecismo: 'A glória de Deus é o homem vivo'?",
            options: [
              "Que Deus precisa de nós para existir",
              "Que Deus manifesta sua glória quando o ser humano vive em plenitude na comunhão e visão de Deus",
              "Que a vida terrena é o único objetivo sem eternidade",
              "Que o corpo não importa",
            ],
            answer: 1,
            explanation:
              "A frase completa liga os dois polos: Deus se glorifica na vida plena do homem, cuja verdadeira vida consiste em contemplar Deus (CIC 294).",
          },
          {
            prompt: "Qual erro das antigas seitas gnósticas Santo Irineu combateu?",
            options: [
              "A ideia de que a matéria e o corpo são maus e que haveria um deus diferente no Antigo Testamento",
              "O amor aos pobres",
              "A leitura dos quatro Evangelhos",
              "A prática do Batismo",
            ],
            answer: 0,
            explanation:
              "Irineu defendeu a bondade da criação material, a unidade dos dois Testamentos e a verdadeira Encarnação de Cristo (CIC 299, 461).",
          },
          {
            prompt: "Como Santo Irineu compara Maria e Eva na história da salvação?",
            options: [
              "O nó atado pela desobediência de Eva foi desatado pela obediência da fé de Maria",
              "Não faz nenhuma comparação entre elas",
              "Afirma que Maria não disse sim livremente",
              "Coloca Eva acima de Cristo",
            ],
            answer: 0,
            explanation:
              "Irineu é um dos grandes testemunhos patrísticos do papel de Maria como Nova Eva que coopera com Cristo, Novo Adão (CIC 494, 511).",
          },
        ],
      },
      {
        id: "catacumbas-tertuliano",
        title: "O sangue dos mártires é semente de cristãos",
        emoji: "🐟",
        xp: 20,
        teachings: [
          {
            title: "Vede como eles se amam!",
            text: "Nos séculos II e III, os escritores cristãos registraram até a admiração dos pagãos ao verem como os cristãos cuidavam dos pobres, viúvas, doentes e prisioneiros: 'Vede como eles se amam!'.",
            example:
              "Fazer com que quem observa nossa família ou grupo cristão reconheça neles acolhimento e amor real.",
            source: "Jo 13,35 · CIC 1823, 2447",
          },
          {
            title: "Perpétua e Felicidade: coragem materna e fraterna",
            text: "As jovens mártires Perpétua (mãe nobre) e Felicidade (serva grávida) caminharam juntas para o martírio em Cartago no ano 203, sustentando-se na oração e na Eucaristia.",
            example:
              "Lembrar seus nomes quando rezados no Cânon Romano (Oração Eucarística I) na Missa.",
            source: "Gl 3,28 · CIC 2473-2474",
          },
          {
            title: "O símbolo do Peixe (Ichthys) e a fé escondida",
            text: "Para se reconhecerem em tempos de perseguição, os cristãos usavam o sinal do peixe — cujas letras em grego (ΙΧΘΥΣ) significam: 'Jesus Cristo, Filho de Deus, Salvador'.",
            example:
              "Guardar no coração essa curta profissão de fé: Jesus Cristo, Filho de Deus, Salvador.",
            source: "Mt 16,16 · CIC 430-451",
          },
        ],
        questions: [
          {
            prompt:
              "O que significa a sigla grega ICHTHYS representada pelo antigo símbolo cristão do peixe?",
            options: [
              "Apenas que Pedro era pescador",
              "Jesus Cristo, Filho de Deus, Salvador",
              "Liberdade de navegação",
              "O nome de sete igrejas",
            ],
            answer: 1,
            explanation:
              "As cinco iniciais gregas da palavra 'peixe' resumiam a profissão de fé cristã primitiva em Cristo Filho de Deus e Salvador (CIC 430, 444).",
          },
          {
            prompt:
              "O que significa a célebre frase de Tertuliano: 'O sangue dos mártires é semente de cristãos'?",
            options: [
              "Que os cristãos queriam guerras",
              "Que o testemunho fiel e sereno diante da morte convencia muitos outros da verdade do Evangelho",
              "Que perseguições são boas em si mesmas",
              "Que ninguém sobrevivia",
            ],
            answer: 1,
            explanation:
              "Quanto mais o império perseguia a Igreja, mais o testemunho amoroso dos mártires despertava novas conversões (CIC 852, 2473).",
          },
          {
            prompt:
              "Por que os pagãos exclamavam com espanto 'Vede como eles se amam!' ao observar as primeiras comunidades?",
            options: [
              "Pela riqueza das festas de luxo",
              "Pela caridade concreta entre ricos, pobres, servos e livres cuidados como irmãos",
              "Por estratégias secretas de comércio",
              "Por nunca se reunirem",
            ],
            answer: 1,
            explanation:
              "A fraternidade prática dos primeiros cristãos tornava visível o mandamento novo de Jesus diante do mundo antigo (CIC 1823, 2447).",
          },
        ],
      },
    ],
  },
  {
    id: "concilios-cristologicos",
    title: "Os Primeiros Concílios Ecumênicos (Niceia a Calcedônia)",
    emoji: "🏛️",
    lessons: [
      {
        id: "niceia-constantinopla-credo",
        title: "Niceia (325) e Constantinopla (381): o Credo que rezamos",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "Atanásio e Niceia: Jesus é verdadeiramente Deus",
            text: "Quando Ário ensinou que o Filho seria apenas a primeira criatura e não plenamente Deus, o Concílio de Niceia (325) — defendido com firmeza por Santo Atanásio — confessou: 'Deus de Deus, Luz da Luz, consubstancial ao Pai'.",
            example:
              "Ao rezar o Credo Niceno-Constantinopolitano aos domingos, saborear a precisão bela dessa fé.",
            source: "Jo 1,1; 10,30 · CIC 242, 465",
          },
          {
            title: "Constantinopla (381): a divindade do Espírito Santo",
            text: "O Primeiro Concílio de Constantinopla completou o Credo professando que o Espírito Santo é 'Senhor que dá a vida, e procede do Pai' (e do Filho), sendo adorado com o Pai e o Filho.",
            example:
              "Fazer o Sinal da Cruz com atenção às três Pessoas igualmente divinas da Santíssima Trindade.",
            source: "2Cor 3,17 · CIC 245, 685",
          },
          {
            title: "Por que palavras exatas importam na fé",
            text: "Os concílios não inventaram doutrinas novas: encontraram termos claros para proteger o mistério revelado nas Escrituras contra reduções humanas.",
            example:
              "Valorizar a clareza do Catecismo em vez de dizer 'tanto faz o que cada um acha sobre Jesus'.",
            source: "1Tm 6,20 · CIC 195, 251",
          },
        ],
        questions: [
          {
            prompt:
              "Qual verdade fundamental sobre Jesus Cristo o Concílio de Niceia (325) definiu contra o arianismo?",
            options: [
              "Que Jesus era apenas um profeta humano elevado",
              "Que o Filho é gerado, não criado, consubstancial (da mesma natureza divina) ao Pai",
              "Que Jesus apareceu só em sonho",
              "Que o Pai é inferior ao Filho",
            ],
            answer: 1,
            explanation:
              "Niceia proclamou que Cristo é verdadeiro Deus de verdadeiro Deus, da mesma substância divina que o Pai (CIC 242, 465).",
          },
          {
            prompt: "O que o Concílio de Constantinopla I (381) acrescentou ao Símbolo de Niceia?",
            options: [
              "A confissão explícita da plena divindade do Espírito Santo, Senhor que dá a vida",
              "O cancelamento do Batismo",
              "A substituição dos Evangelhos",
              "Regras sobre construções de templos",
            ],
            answer: 0,
            explanation:
              "Constantinopla I completou o Credo que rezamos na Missa, confessando o Espírito Santo adorado e glorificado com o Pai e o Filho (CIC 245, 685).",
          },
          {
            prompt: "Os Concílios Ecumênicos criam revelações novas além dos Apóstolos?",
            options: [
              "Sim, a cada século escrevem outra Bíblia",
              "Não; definem e explicitam com fidelidade o depósito da fé apostólica diante de erros e dúvidas",
              "Sim, mudam os Dez Mandamentos",
              "Não têm autoridade alguma",
            ],
            answer: 1,
            explanation:
              "A Igreja guarda e esclarece progressivamente a verdade confiada uma vez por todas em Cristo (CIC 88, 251).",
          },
        ],
      },
      {
        id: "efeso-calcedonia",
        title: "Éfeso (431) e Calcedônia (451): Cristo e Maria Mãe de Deus",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Éfeso: unidade de Cristo e Maria Theotokos",
            text: "Em 431, o Concílio de Éfeso rejeitou a ideia de dividir Jesus em duas pessoas (uma humana, outra divina) e confirmou que Maria é verdadeiramente Mãe de Deus (Theotokos), pois seu Filho é a Pessoa divina do Verbo.",
            example:
              "Rezar com consciência a Ave-Maria sabendo que o título 'Mãe de Deus' protege a verdade sobre quem é Jesus.",
            source: "Lc 1,43; Gl 4,4 · CIC 466, 495",
          },
          {
            title: "Calcedônia: duas naturezas numa única Pessoa",
            text: "Em 451, guiado também pela carta do Papa São Leão Magno, Calcedônia definiu que Cristo possui natureza divina perfeita e natureza humana perfeita — sem confusão, mudança, divisão nem separação.",
            example:
              "Contemplar Jesus como ponte perfeita: plenamente Deus para nos salvar, plenamente homem para nos abraçar.",
            source: "Jo 1,14; Fl 2,6-7 · CIC 467",
          },
          {
            title: "Alma humana e coração humano em Cristo",
            text: "Jesus não teve apenas um corpo vazio habitado por Deus: assumiu corpo, inteligência e vontade humanos livres e santos para redimir todo o ser humano.",
            example:
              "Apresentar nossos pensamentos e vontades humanas a Jesus para que Ele os santifique por dentro.",
            source: "Lc 22,42 · CIC 470-475",
          },
        ],
        questions: [
          {
            prompt:
              "Por que a definição de Maria como 'Mãe de Deus' (Concílio de Éfeso) diz respeito diretamente a Jesus Cristo?",
            options: [
              "Porque afirma que quem nasceu de Maria não é apenas um homem comum, mas o próprio Filho eterno de Deus em carne humana",
              "Porque colocaria Maria acima de Deus Pai",
              "Porque negaria a humanidade de Jesus",
              "Por simples homenagem folclórica",
            ],
            answer: 0,
            explanation:
              "O título Theotokos assegura a unidade pessoal de Jesus: o Filho de Maria e o Filho eterno do Pai são a mesma única Pessoa (CIC 466, 495).",
          },
          {
            prompt: "Qual é a fórmula de fé do Concílio de Calcedônia (451) sobre Cristo?",
            options: [
              "Uma só natureza misturada que não é nem divina nem humana",
              "Uma só Pessoa divina subsistindo em duas naturezas — divina e humana — sem confusão nem divisão",
              "Duas pessoas separadas morando juntas",
              "Apenas natureza divina com corpo ilusório",
            ],
            answer: 1,
            explanation:
              "Calcedônia equilibra perfeitamente o mistério: Cristo é um só, verdadeiro Deus e verdadeiro homem integral (CIC 467).",
          },
          {
            prompt:
              "O que significa dizer que 'o que não foi assumido por Cristo não foi redimido'?",
            options: [
              "Que Jesus assumiu apenas metade do corpo",
              "Que para salvar todo o ser humano (corpo, mente e vontade), o Filho assumiu uma humanidade completa sem pecado",
              "Que a alma humana não precisa de graça",
              "Que Cristo não sentia emoções humanas",
            ],
            answer: 1,
            explanation:
              "Os Padres da Igreja insistiram na humanidade íntegra de Jesus porque Ele salvou tudo o que assumiu (CIC 470, 475).",
          },
        ],
      },
      {
        id: "niceia-ii-tradicao-conciliar",
        title: "Constantinopla II, III e Niceia II: vontade humana e ícones",
        emoji: "🖼️",
        xp: 20,
        teachings: [
          {
            title: "Duas vontades em harmonia no Getsêmani",
            text: "O Terceiro Concílio de Constantinopla (681) professou que Cristo tem vontade divina e vontade humana, e sua vontade humana segue livre e amorosamente a vontade do Pai ('não a minha, mas a tua').",
            example:
              "Quando nossa vontade sentir resistência ao bem, unir-se à vontade humana obediente de Jesus no Getsêmani.",
            source: "Lc 22,42 · CIC 475",
          },
          {
            title: "Niceia II (787): defesa das imagens sagradas",
            text: "Contra os iconoclastas que destruíam imagens religiosas, o 7º Concílio Ecumênico (Niceia II) legitimou os ícones de Cristo, Maria e dos santos como fruto da Encarnação.",
            example:
              "Compreender com clareza por que nossas igrejas têm cruzes, imagens de santos e vitrais.",
            source: "Cl 1,15 · CIC 476, 2131",
          },
          {
            title: "Sete primeiros concílios: tesouro comum da fé",
            text: "Aprofundar os primeiros concílios fortalece tanto nossa fé católica quanto o diálogo respeitoso com os irmãos ortodoxos, que também recebem esses sete concílios.",
            example:
              "Apreciar o Credo rezado nas celebrações como ponte de fé através de séculos e culturas.",
            source: "Ef 4,4-6 · CIC 814, 838",
          },
        ],
        questions: [
          {
            prompt:
              "O que definiu o 3º Concílio de Constantinopla (681) sobre as vontades de Cristo?",
            options: [
              "Que Jesus não tinha vontade humana própria",
              "Que Jesus possui vontade divina e vontade humana real, perfeitamente unida à do Pai",
              "Que a vontade divina e a humana viviam em guerra",
              "Que Jesus não podia escolher livremente",
            ],
            answer: 1,
            explanation:
              "A vontade humana de Cristo não é destruída pela divina, mas livremente submissa e cooperante na redenção (CIC 475).",
          },
          {
            prompt:
              "Por que o 2º Concílio de Niceia (787) rejeitou a destruição das imagens de Cristo?",
            options: [
              "Apenas para proteger pintores locais",
              "Porque negar a possibilidade de representar Cristo visivelmente diminuiria a verdade de sua Encarnação humana",
              "Porque as imagens seriam deuses",
              "Para substituir a Eucaristia",
            ],
            answer: 1,
            explanation:
              "Como o Filho eterno assumiu rosto humano visível, representá-lo na arte sacra confessa a realidade da Encarnação (CIC 476, 1160).",
          },
          {
            prompt:
              "Com quais cristãos do Oriente a Igreja Católica partilha profundamente a fé desses sete primeiros Concílios?",
            options: [
              "Com as Igrejas Ortodoxas",
              "Com nenhuma outra comunidade",
              "Apenas com escolas filosóficas antigas",
              "Somente no Brasil",
            ],
            answer: 0,
            explanation:
              "O Catecismo destaca a profunda comunhão de fé apostólica, sacramentos e concílios antigos com as Igrejas Ortodoxas (CIC 838).",
          },
        ],
      },
    ],
  },
  {
    id: "padres-deserto",
    title: "Os Padres e Mães do Deserto",
    emoji: "🏜️",
    lessons: [
      {
        id: "antao-deserto-oracao",
        title: "Santo Antão e o chamado ao essencial",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "Ouvir o Evangelho dirigido diretamente a si",
            text: "Ao ouvir na igreja 'Vai, vende tudo o que tens e segue-me', o jovem Antão no Egito vendeu seus bens, cuidou do futuro da irmã e partiu para o deserto para buscar somente a Deus.",
            example:
              "Escutar o Evangelho na Missa perguntando: 'O que Jesus está dizendo diretamente para a minha vida hoje?'.",
            source: "Mt 19,21 · CIC 918, 2544",
          },
          {
            title: "O deserto não é fuga egoísta, mas combate pela paz",
            text: "Os monges do deserto enfrentavam no silêncio as mesmas tentações de orgulho, ira e desânimo que todos nós enfrentamos — tornando-se conselheiros cheios de misericórdia para o povo.",
            example:
              "Não fugir do silêncio interior; nele percebemos o que precisa ser entregue a Deus.",
            source: "Mc 1,12-13 · CIC 2687, 2725",
          },
          {
            title: "Rezar e trabalhar com simplicidade (Ora et Labora)",
            text: "Enquanto trançavam cestos de junco para se sustentar e ajudar os pobres, os Padres do Deserto meditavam os Salmos e repetiam breves preces do coração.",
            example:
              "Unir trabalho manual ou estudo concentrado a pequenas preces curtas ao longo do dia.",
            source: "2Ts 3,8 · CIC 2666, 2687",
          },
        ],
        questions: [
          {
            prompt:
              "Qual passagem do Evangelho despertou a vocação radical de Santo Antão do Deserto?",
            options: [
              "'Vai, vende o que tens, dá aos pobres e segue-me' (Mt 19,21)",
              "'Construam grandes palácios'",
              "'Guarde dinheiro para três gerações'",
              "'Nunca converse com ninguém'",
            ],
            answer: 0,
            explanation:
              "Santo Antão acolheu pessoalmente o convite evangélico de desapego total para seguir Cristo, inaugurando o monaquismo cristão (CIC 918, 2544).",
          },
          {
            prompt: "Como os Padres do Deserto equilibravam oração e vida prática?",
            options: [
              "Dormindo o dia inteiro sem trabalhar",
              "Alternando oração contínua, meditação da Escritura e trabalho manual simples para se sustentar e dar esmola",
              "Cobrando caro pelos conselhos",
              "Fazendo greves de fome eternas",
            ],
            answer: 1,
            explanation:
              "O trabalho humilde e a oração constante mantinham os monges longe da ociosidade e abertos à caridade (CIC 2687).",
          },
          {
            prompt:
              "Qual grande bispo escreveu a célebre 'Vida de Santo Antão', que influenciou Santo Agostinho?",
            options: [
              "Santo Atanásio de Alexandria",
              "Pôncio Pilatos",
              "O rei Herodes",
              "Flávio Josefo",
            ],
            answer: 0,
            explanation:
              "Santo Atanásio escreveu a biografia de Antão, inspirando gerações de cristãos e a própria conversão de Agostinho (CIC 2687).",
          },
        ],
      },
      {
        id: "oracao-jesus-coracao",
        title: "A Oração de Jesus e a guarda do coração",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "Senhor Jesus Cristo, tende piedade de mim!",
            text: "Inspirada no cego de Jericó e no publicano do templo, nasceu no deserto e no Oriente cristão a 'Oração de Jesus': 'Senhor Jesus Cristo, Filho de Deus, tende piedade de mim, pecador!'.",
            example:
              "Repetir suavemente essa oração curta no trânsito, no caminhar ou quando o coração estiver agitado.",
            source: "Lc 18,13.38 · CIC 2616, 2667",
          },
          {
            title: "Invocar o Nome de Jesus resume tudo",
            text: "O Catecismo dedica um belo trecho a essa prece: o Nome de Jesus contém tudo o que Ele é e realizou por nós; invocá-lo com humildade é o caminho mais simples da oração contínua.",
            example: "Guardar no coração o Nome de Jesus como âncora nos dias corridos.",
            source: "Fl 2,9-11 · CIC 2666-2668",
          },
          {
            title: "Vigiar os pensamentos antes que virem paixões",
            text: "Os monges observavam que uma tentação começa leve como uma faísca: se a cortamos cedo voltando a Cristo, não vira incêndio de ira, inveja ou tristeza.",
            example:
              "Perceber o primeiro sinal de irritação ou fofoca e trocar imediatamente por uma oração silenciosa.",
            source: "Pr 4,23 · CIC 2517, 2729",
          },
        ],
        questions: [
          {
            prompt: "Que frase tradicional resume a 'Oração de Jesus' recomendada no Catecismo?",
            options: [
              "Senhor Jesus Cristo, Filho de Deus, tende piedade de mim, pecador",
              "Eu não preciso de ajuda alguma",
              "Senhor, dê-me apenas riquezas hoje",
              "Afastem-se de mim os outros fiéis",
            ],
            answer: 0,
            explanation:
              "O Catecismo apresenta essa invocação humilde e cristocêntrica como tesouro da oração do coração no Oriente e Ocidente (CIC 2667).",
          },
          {
            prompt: "Quais dois personagens dos Evangelhos inspiram diretamente essa oração curta?",
            options: [
              "O cego Bartimeu e o publicano no Templo",
              "Herodes e Pilatos",
              "Os vendedores do templo e o jovem rico",
              "Anás e Caifás",
            ],
            answer: 0,
            explanation:
              "Ela une o grito de fé do cego Bartimeu ('tem piedade de mim') à humildade do publicano ('pecador') (CIC 2616, 2667).",
          },
          {
            prompt: "Por que os Padres do Deserto davam tanta importância à 'guarda do coração'?",
            options: [
              "Para evitar sentir qualquer emoção humana",
              "Para discernir cedo os maus pensamentos e manter o coração voltado a Deus",
              "Para nunca trabalhar",
              "Para esquecer a Escritura",
            ],
            answer: 1,
            explanation:
              "Do coração brotam as decisões morais e o encontro pessoal com Deus; vigiá-lo protege a caridade e a paz (CIC 2517, 2563).",
          },
        ],
      },
      {
        id: "sabedoria-deserto-misericordia",
        title: "Misericórdia e humildade nos ditos do Deserto",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Nunca julgar o irmão: meu pecado é maior",
            text: "Os Padres e Mães do Deserto — como Amma Sinclética e Abba Moisés — ensinavam com rigor consigo e imensa doçura com os outros: 'Eu vejo os meus pecados e não julgo meu irmão'.",
            example:
              "Quando perceber a vontade de criticar alguém, pensar antes numa área onde você mesmo precisa de conversão.",
            source: "Mt 7,1-5 · CIC 2478, 2559",
          },
          {
            title: "A hospitalidade vale mais que o jejum pessoal",
            text: "Quando um irmão cansado chegava de viagem, os monges interrompiam seu jejum particular para preparar comida e comer juntos com alegria — porque a caridade é maior que a regra privada.",
            example:
              "Não deixar que um propósito pessoal vire motivo de frieza ou descortesia com quem está à mesa conosco.",
            source: "Mc 2,19 · CIC 1826, 2447",
          },
          {
            title: "Quando caímos, levantar logo sem desespero",
            text: "Perguntaram a um ancião o que faziam no deserto; ele respondeu: 'Caímos e nos levantamos, caímos e nos levantamos'. A humildade nunca desanima de recomeçar.",
            example:
              "Nunca adiar a volta à oração depois de um dia ruim; levantar-se no instante seguinte.",
            source: "Pr 24,16 · CIC 1428, 2015",
          },
        ],
        questions: [
          {
            prompt:
              "O que os Padres do Deserto faziam ao receber um visitante faminto em dia de jejum voluntário?",
            options: [
              "Deixavam o visitante com fome para não quebrar o costume",
              "Interrompiam o jejum privado para acolher com caridade, pois o amor ao próximo é maior",
              "Fechavam a porta do mosteiro",
              "Brigavam com o hóspede",
            ],
            answer: 1,
            explanation:
              "As práticas ascéticas servem à caridade e nunca devem sobrepor-se ao amor acolhedor devido ao irmão (CIC 1826, 2447).",
          },
          {
            prompt: "Como os antigos monges resumiam o segredo da perseverança espiritual?",
            options: [
              "'Nunca erramos desde a juventude'",
              "'Caímos e nos levantamos sempre de novo confiando na graça de Deus'",
              "'Quando erramos uma vez, desistimos'",
              "'Basta criticar os vizinhos'",
            ],
            answer: 1,
            explanation:
              "A conversão diária consiste em humildemente reconhecer as quedas e retomar a caminhada sem desânimo (CIC 1428).",
          },
          {
            prompt:
              "Qual atitude Amma Sinclética e os anciãos combatiam como o pior veneno da vida espiritual?",
            options: [
              "O trabalho manual",
              "O orgulho e o julgamento duro contra os irmãos",
              "O canto dos Salmos",
              "A esmola aos pobres",
            ],
            answer: 1,
            explanation:
              "A soberba e a condenação temerária dos outros destroem a humildade que fundamenta a oração e a caridade (CIC 2478, 2559).",
          },
        ],
      },
    ],
  },
  {
    id: "agostinho-jeronimo",
    title: "Santo Agostinho, São Jerônimo e Santo Ambrósio",
    emoji: "📚",
    lessons: [
      {
        id: "agostinho-conversao",
        title: "Santo Agostinho: nosso coração está inquieto até descansar em Ti",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "As lágrimas orantes de Santa Mônica",
            text: "Durante anos, Agostinho procurou sentido em filosofias, fama e prazeres vazios, enquanto sua mãe, Santa Mônica, rezava incansavelmente por ele. Deus nunca despreza uma oração perseverante.",
            example:
              "Continuar rezando com amor e paciência pelos familiares que ainda não conhecem Jesus.",
            source: "Lc 18,1 · CIC 2613, 2742",
          },
          {
            title: "Tarde te amei, ó Beleza tão antiga e tão nova!",
            text: "Ao ouvir a voz 'Toma e lê!' e abrir a Carta aos Romanos, Agostinho encontrou a luz de Cristo em 386. Descobriu que Deus estava dentro de seu coração enquanto ele o procurava fora.",
            example:
              "Parar a agitação externa por alguns instantes para buscar Deus dentro da própria alma.",
            source: "Rm 13,13-14 · CIC 27, 30",
          },
          {
            title: "Doutor da Graça e bispo de Hipona",
            text: "Batizado por Santo Ambrósio em Milão, Agostinho tornou-se bispo no norte da África, ensinando com profundidade sobre a Trindade, a graça que liberta e a Cidade de Deus.",
            example:
              "Reconhecer que todo progresso no bem é fruto da graça de Deus atuando em nossa liberdade.",
            source: "Jo 15,5 · CIC 2001, 2021",
          },
        ],
        questions: [
          {
            prompt:
              "Qual famosa frase das Confissões de Santo Agostinho abre o Catecismo sobre o desejo humano de Deus?",
            options: [
              "'O ser humano se basta sozinho'",
              "'Fizeste-nos para Ti, e o nosso coração está inquieto enquanto não descansar em Ti'",
              "'A verdade não pode ser encontrada'",
              "'Apenas os filósofos conhecem o bem'",
            ],
            answer: 1,
            explanation:
              "O Catecismo cita essa frase célebre para mostrar que o desejo de Deus está inscrito no coração humano desde a criação (CIC 27, 30).",
          },
          {
            prompt: "Quem rezou durante anos com perseverança pela conversão de Santo Agostinho?",
            options: [
              "Sua mãe, Santa Mônica",
              "O imperador romano",
              "Os mercadores de Cartago",
              "Ninguém",
            ],
            answer: 0,
            explanation:
              "As lágrimas e orações fiéis de Santa Mônica são exemplo luminoso de intercessão familiar na Igreja (CIC 2634, 2742).",
          },
          {
            prompt:
              "Que versículo bíblico tocou decisivamente Agostinho no jardim em Milão ao ouvir 'Toma e lê'?",
            options: [
              "Romanos 13,13-14 ('Revesti-vos do Senhor Jesus Cristo')",
              "Lista dos reis antigos",
              "Construção da arca",
              "Cântico de Débora",
            ],
            answer: 0,
            explanation:
              "Ao ler Romanos 13,13-14, a luz da graça dissipou suas dúvidas e abriu caminho para o Batismo (CIC 1428).",
          },
        ],
      },
      {
        id: "jeronimo-vulgata-escritura",
        title: "São Jerônimo: ignorar as Escrituras é ignorar Cristo",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "Traduzir toda a Bíblia com amor rigoroso",
            text: "Estudioso do latim, grego e hebraico, São Jerônimo mudou-se para Belém e traduziu a Bíblia para o latim popular — a Vulgata — tornando a Palavra acessível a todo o Ocidente por séculos.",
            example:
              "Apreciar que hoje temos a Bíblia inteira acessível gratuitamente em nossa língua, inclusive aqui no aplicativo!",
            source: "2Tm 3,16 · CIC 131-133",
          },
          {
            title: "Desconhecer as Escrituras é desconhecer Cristo",
            text: "Jerônimo cunhou a célebre frase citada pelo Concílio Vaticano II e pelo Catecismo: 'A ignorância das Escrituras é ignorância de Cristo'.",
            example:
              "Separar ao menos cinco minutos por dia para ler um trecho da Bíblia com atenção.",
            source: "Lc 24,27 · CIC 133",
          },
          {
            title: "Unir estudo sério e vida de oração",
            text: "Mesmo com temperamento forte, Jerônimo dedicou sua inteligência e disciplina à Igreja, mostrando que estudar a Palavra é ato de amor a Jesus.",
            example:
              "Colocar nossa inteligência, leitura e capacidade de estudo a serviço do conhecimento da fé.",
            source: "Sl 119,105 · CIC 109, 132",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a famosa frase de São Jerônimo citada no Catecismo sobre a leitura da Bíblia?",
            options: [
              "'Só os sacerdotes devem abrir a Bíblia'",
              "'Desconhecer as Escrituras é desconhecer Cristo'",
              "'A tradução estraga a fé'",
              "'Basta ler um versículo por década'",
            ],
            answer: 1,
            explanation:
              "Para conhecer intimamente a pessoa viva de Jesus, todo cristão é incentivado à leitura frequente das Sagradas Escrituras (CIC 133).",
          },
          {
            prompt:
              "Qual grande obra São Jerônimo realizou vivendo em Belém no final do século IV?",
            options: [
              "A tradução latina da Bíblia conhecida como Vulgata",
              "A construção da Basílica de São Pedro",
              "A fundação da ordem franciscana",
              "A descoberta do Brasil",
            ],
            answer: 0,
            explanation:
              "Trabalhando diretamente sobre os textos hebraicos e gregos, Jerônimo produziu a Vulgata latina, tesouro secular da Igreja (CIC 133).",
          },
          {
            prompt:
              "Por que a Igreja recomenda o estudo respeitoso dos idiomas, história e gêneros bíblicos como fez Jerônimo?",
            options: [
              "Para transformar a Bíblia em livro apenas secular",
              "Para compreender com fidelidade o que os autores sagrados quiseram transmitir inspirados por Deus",
              "Para complicar a oração simples",
              "Para substituir a Eucaristia",
            ],
            answer: 1,
            explanation:
              "Como Deus falou por meio de homens à maneira humana, estudar o texto ajuda a captar a intenção fiel do Espírito Santo (CIC 109-111).",
          },
        ],
      },
      {
        id: "ambrosio-hinos-batismo",
        title: "Santo Ambrósio: hinos, catequese e firmeza pastoral",
        emoji: "🎼",
        xp: 20,
        teachings: [
          {
            title: "De governador a bispo aclamado pelo povo",
            text: "Quando era ainda catecúmeno (não batizado), Ambrósio foi acalmar uma eleição em Milão e o povo inteiro pediu que ele fosse bispo. Em uma semana recebeu o Batismo e a ordenação, doando tudo aos pobres.",
            example:
              "Aceitar com generosidade os chamados inesperados de serviço que Deus faz através da comunidade.",
            source: "1Tm 3,1 · CIC 893, 1558",
          },
          {
            title: "Pai do canto comunitário no Ocidente",
            text: "Ambrósio compôs belos hinos simples em latim para toda a assembleia cantar junto — emocionando profundamente Agostinho na igreja de Milão.",
            example:
              "Cantar de coração os hinos litúrgicos na Missa para fortalecer a fé e a união da assembleia.",
            source: "Cl 3,16 · CIC 1156",
          },
          {
            title: "O imperador está dentro da Igreja, não acima dela",
            text: "Quando o poderoso imperador Teodósio ordenou um massacre cruel em Tessalônica, Ambrósio barrou-o à porta da catedral até que fizesse penitência pública sincera — e o imperador se arrependeu!",
            example: "Lembrar que a lei moral de Deus vale igualmente para poderosos e humildes.",
            source: "2Sm 12,7 · CIC 2242, 2246",
          },
        ],
        questions: [
          {
            prompt:
              "Que contribuição marcante Santo Ambrósio deu à música e oração das comunidades no século IV?",
            options: [
              "Proibiu todos os cantos na igreja",
              "Compôs hinos para serem cantados por toda a assembleia unida",
              "Permitiu cantar apenas em festas civis",
              "Substituiu os Salmos por discursos",
            ],
            answer: 1,
            explanation:
              "Os hinos ambrosianos enriqueceram a liturgia ocidental e abriram o coração de fiéis como Santo Agostinho (CIC 1156).",
          },
          {
            prompt: "Como Santo Ambrósio reagiu ao massacre ordenado pelo imperador Teodósio?",
            options: [
              "Aplaudiu por medo político",
              "Exigiu com coragem pastoral que o imperador fizesse penitência antes de voltar à comunhão",
              "Fugiu de Milão para não incomodar",
              "Alterou os mandamentos",
            ],
            answer: 1,
            explanation:
              "Ambrósio defendeu a dignidade da vida humana e lembrou que governantes também respondem moralmente diante de Deus (CIC 2246).",
          },
          {
            prompt:
              "Que famoso título catequético pertence às instruções que Santo Ambrósio dava aos recém-batizados na Páscoa?",
            options: [
              "Catequeses mistagógicas (sobre os mistérios dos sacramentos celebrados)",
              "Leis comerciais de Milão",
              "Tratado militar romano",
              "Fábulas gregas",
            ],
            answer: 0,
            explanation:
              "A catequese mistagógica introduz os neófitos no sentido profundo dos sacramentos de iniciação que acabaram de receber (CIC 1075, 1234).",
          },
        ],
      },
    ],
  },
  {
    id: "bento-escolastica",
    title: "São Bento, Mosteiros e a Cultura Cristã",
    emoji: "🔔",
    lessons: [
      {
        id: "regra-sao-bento",
        title: "A Regra de São Bento: Ora et Labora",
        emoji: "⏳",
        xp: 20,
        teachings: [
          {
            title: "Nada antepor ao amor de Cristo",
            text: "No século VI, em meio à queda do Império Romano, São Bento fundou mosteiros como 'escolas do serviço do Senhor' regidos por uma Regra equilibrada cujo lema é: nada antepor ao amor de Cristo.",
            example:
              "Avaliar a agenda da semana verificando se Cristo e a família vêm antes de distrações.",
            source: "Mt 10,37 · CIC 918, 2687",
          },
          {
            title: "Equilíbrio entre oração, leitura e trabalho",
            text: "O ritmo beneditino ('Ora et Labora' — reza e trabalha) une as horas da Liturgia das Horas, a Lectio Divina e o trabalho manual digno, evitando tanto a ociosidade quanto a agitação.",
            example:
              "Organizar a própria rotina diária com horários claros para trabalho, descanso e oração.",
            source: "2Ts 3,10 · CIC 2427, 2687",
          },
          {
            title: "Receber cada hóspede como o próprio Cristo",
            text: "A Regra de São Bento manda acolher todos os hóspedes que chegam ao mosteiro — sobretudo pobres e peregrinos — como o próprio Cristo.",
            example:
              "Receber visitas inesperadas ou pessoas novas na igreja com sorriso e hospitalidade sincera.",
            source: "Mt 25,35 · CIC 2447",
          },
        ],
        questions: [
          {
            prompt: "Qual é o famoso lema que resume a espiritualidade prática de São Bento?",
            options: [
              "'Fugir de todo trabalho'",
              "'Ora et Labora' (Reza e trabalha)",
              "'Viver apenas de viagens'",
              "'Silêncio sobre as Escrituras'",
            ],
            answer: 1,
            explanation:
              "A tradição beneditina equilibra a oração litúrgica e orante com o trabalho honesto e o serviço acolhedor (CIC 2427, 2687).",
          },
          {
            prompt: "Como a Regra de São Bento orienta receber os hóspedes no mosteiro?",
            options: [
              "Trancando os portões aos pobres",
              "Acolhendo cada hóspede como se fosse o próprio Cristo",
              "Cobrando taxas caras pela hospedagem",
              "Recebendo apenas pessoas famosas",
            ],
            answer: 1,
            explanation:
              "Inspirada em Mateus 25,35, a hospitalidade beneditina vê Cristo em cada peregrino e necessitado (CIC 2447).",
          },
          {
            prompt: "Qual frase resume o critério supremo da Regra de São Bento?",
            options: [
              "'Nada antepor ao amor de Cristo'",
              "'Buscar poder político acima de tudo'",
              "'Proibir livros antigos'",
              "'Evitar toda comunidade'",
            ],
            answer: 0,
            explanation:
              "Toda a vida cristã e consagrada orienta-se pela primazia absoluta da caridade de Cristo (CIC 915, 2093).",
          },
        ],
      },
      {
        id: "santa-escolastica-mosteiros",
        title: "Santa Escolástica e os mosteiros que guardaram a cultura",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Santa Escolástica: quem ama mais, pode mais",
            text: "Irmã gêmea de São Bento e mãe das monjas beneditinas, Santa Escolástica pediu um dia que ficassem conversando até manhã sobre as alegrias do céu; diante da recusa dele pela regra, ela rezou e veio uma tempestade providencial — porque amou mais!",
            example:
              "Lembrar que as regras existem para servir à caridade fraterna e não para sufocá-la.",
            source: "1Jo 4,16 · CIC 1826, 2610",
          },
          {
            title: "Copistas, agricultura, hospitais e escolas",
            text: "Durante séculos difíceis, os mosteiros preservaram a Bíblia e os clássicos antigos em suas bibliotecas, desenvolveram a agricultura, fundaram escolas e cuidaram de doentes gratuitamente.",
            example:
              "Valorizar a longa contribuição histórica da Igreja à educação, ciência e caridade.",
            source: "Sb 7,21 · CIC 2500, 2687",
          },
          {
            title: "Padroeiros da reconciliação e da paz",
            text: "São Bento tornou-se símbolo da proteção contra o mal pela fé firme em Cristo — expressa na medalha que traz a cruz e a palavra 'PAX' (Paz).",
            example:
              "Buscar sempre a paz de Cristo nas relações antes de recorrer a discussões duras.",
            source: "Jo 14,27 · CIC 2305",
          },
        ],
        questions: [
          {
            prompt:
              "Que lição deixou o famoso diálogo entre Santa Escolástica e seu irmão São Bento?",
            options: [
              "Que o amor e a caridade sincera na oração prevalecem acima da rigidez de um horário",
              "Que não se deve falar sobre o céu",
              "Que irmãos devem competir sempre",
              "Que regras nunca têm importância",
            ],
            answer: 0,
            explanation:
              "São Gregório Magno narra que Deus ouviu Escolástica porque 'ela amou mais' — ensinando a primazia da caridade (CIC 1826).",
          },
          {
            prompt: "Qual papel histórico decisivo tiveram os mosteiros medievais na sociedade?",
            options: [
              "Destruíram livros antigos",
              "Preservaram manuscritos bíblicos e clássicos, promoveram agricultura, escolas e cuidado aos doentes",
              "Proibiram a educação",
              "Fecharam todas as igrejas",
            ],
            answer: 1,
            explanation:
              "Os mosteiros foram centros luminosos de oração, hospitalidade, alfabetização, arte e cuidado com os pobres (CIC 2687).",
          },
          {
            prompt:
              "Qual palavra resume o ideal da tradição beneditina gravado muitas vezes junto à Cruz de São Bento?",
            options: ["PAX (Paz)", "GUERRA", "OURO", "FAMA"],
            answer: 0,
            explanation:
              "A paz nascida da reconciliação com Cristo e do equilíbrio fraterno marca a espiritualidade beneditina (CIC 2305).",
          },
        ],
      },
      {
        id: "gregorio-magno-missao",
        title: "São Gregório Magno: servo dos servos de Deus",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "O Papa que escolheu o título 'Servo dos servos de Deus'",
            text: "Monge beneditino eleito Papa em 590 durante epidemias e crises em Roma, São Gregório organizou ajuda alimentar aos pobres e adotou até hoje o título papal: 'Servo dos servos de Deus'.",
            example:
              "Entender toda autoridade na família ou comunidade como serviço humilde aos outros.",
            source: "Mc 10,43-45 · CIC 882, 1551",
          },
          {
            title: "Cuidado com o canto litúrgico e a evangelização",
            text: "Gregório impulsionou a organização do canto litúrgico (associado ao nome 'canto gregoriano') e enviou Santo Agostinho de Cantuária e quarenta monges para evangelizar a Inglaterra com mansidão.",
            example: "Respeitar o bem presente nas culturas locais ao anunciar Jesus Cristo.",
            source: "Mt 28,19 · CIC 854, 1157",
          },
          {
            title: "A Escritura cresce com quem a lê",
            text: "Gregório observou uma verdade linda sobre a Bíblia: quanto mais amamos e rezamos a Sagrada Escritura ao longo da vida, mais profunda ela se revela para nós.",
            example:
              "Reler um trecho bíblico conhecido pedindo nova luz para a fase atual da sua vida.",
            source: "Sl 119,18 · CIC 108, 131",
          },
        ],
        questions: [
          {
            prompt:
              "Qual título humilde São Gregório Magno adotou para o ministério do Papa, usado até hoje?",
            options: [
              "Senhor absoluto das nações",
              "Servo dos servos de Deus",
              "Imperador do Oriente",
              "Príncipe do comércio",
            ],
            answer: 1,
            explanation:
              "O título 'Servo dos servos de Deus' expressa que o primado na Igreja existe exclusivamente para servir no amor de Cristo (CIC 882, 1551).",
          },
          {
            prompt: "O que São Gregório Magno afirmou sobre a leitura contínua da Bíblia?",
            options: [
              "Que após ler uma vez já sabemos tudo",
              "Que as palavras divinas crescem junto com quem as lê em espírito de oração",
              "Que o Antigo Testamento deve ser esquecido",
              "Que só especialistas entendem os Salmos",
            ],
            answer: 1,
            explanation:
              "A Bíblia é fonte viva do Espírito Santo que ilumina cada nova etapa do leitor crente (CIC 108, 131).",
          },
          {
            prompt: "Qual orientação missionária sábia Gregório deu ao enviar monges à Inglaterra?",
            options: [
              "Destruir toda cultura local com violência",
              "Purificar o que havia de errado e aproveitar costumes bons colocando-os a serviço do culto ao Deus verdadeiro",
              "Nunca conversar com os moradores",
              "Impor um idioma impossível",
            ],
            answer: 1,
            explanation:
              "A evangelização acolhe e purifica em Cristo todas as sementes de bondade e verdade das culturas humanas (CIC 854, 1204).",
          },
        ],
      },
    ],
  },
  {
    id: "francisco-clara",
    title: "São Francisco e Santa Clara de Assis",
    emoji: "🕊️",
    lessons: [
      {
        id: "francisco-repara-igreja",
        title: "São Francisco: vai e repara a minha Igreja",
        emoji: "⛪",
        xp: 20,
        teachings: [
          {
            title: "Do luxo e sonhos de glória ao abraço ao leproso",
            text: "Jovem rico de Assis, Francisco mudou radicalmente quando superou a repulsa e abraçou um leproso na estrada: aquilo que antes parecia amargo transformou-se em doçura de alma.",
            example:
              "Aproximar-se com respeito de pessoas que a sociedade costuma evitar ou marginalizar.",
            source: "Mt 25,40 · CIC 2444, 2544",
          },
          {
            title: "Reconstrói a minha casa que está em ruínas",
            text: "Rezando diante do Crucifixo de São Damião, Francisco ouviu: 'Vai e repara a minha Igreja'. Começou consertando capelas de pedra e compreendeu que Deus queria renovar corações pelo Evangelho vivido sem reservas.",
            example:
              "Cuidar primeiro da própria conversão e servir com alegria à paróquia concreta que temos perto.",
            source: "Lc 9,23 · CIC 827, 916",
          },
          {
            title: "Comunhão fiel com a Igreja e os sacramentos",
            text: "Diferente de pregadores revoltados da época que rompiam com a Igreja, Francisco venerava profundamente a Eucaristia e obedeceu ao Papa Inocêncio III para renovar a Igreja por dentro.",
            example:
              "Quando perceber defeitos na comunidade, amar ainda mais a Igreja e ajudar a renová-la de dentro com fidelidade.",
            source: "Ef 5,25 · CIC 827, 1378",
          },
        ],
        questions: [
          {
            prompt:
              "Qual gesto concreto marcou decisivamente o início da conversão de São Francisco de Assis?",
            options: [
              "Comprar mais tecidos caros",
              "Descer do cavalo, abraçar um leproso e servir aos doentes com misericórdia",
              "Vencer um torneio militar",
              "Esconder-se em um palácio",
            ],
            answer: 1,
            explanation:
              "No encontro com o leproso, Francisco reconheceu Cristo sofredor e descobriu a alegria da pobreza e caridade evangélicas (CIC 2444).",
          },
          {
            prompt: "Como São Francisco buscou renovar a Igreja diante das falhas do século XIII?",
            options: [
              "Fundando uma igreja separada contra o Papa",
              "Vivendo o Evangelho radicalmente em comunhão filial com o Papa e veneração profunda à Eucaristia",
              "Proibindo a Confissão",
              "Desprezando os sacerdotes",
            ],
            answer: 1,
            explanation:
              "A verdadeira reforma na Igreja nasce da santidade fiel e da comunhão eclesial, nunca do cisma (CIC 827, 916).",
          },
          {
            prompt: "O que São Francisco também popularizou em Greccio no Natal de 1223?",
            options: [
              "O Presépio vivo, para contemplar a pobreza e ternura do Menino Jesus em Belém",
              "O canto em língua grega",
              "A coroa do Advento",
              "A árvore elétrica",
            ],
            answer: 0,
            explanation:
              "São Francisco criou o presépio em Greccio para ajudar o povo a contemplar de perto a humildade da Encarnação (CIC 525).",
          },
        ],
      },
      {
        id: "santa-clara-pobreza-eucaristia",
        title: "Santa Clara: coragem feminina e o privilégio da pobreza",
        emoji: "☀️",
        xp: 20,
        teachings: [
          {
            title: "Pôr os olhos no espelho da eternidade que é Cristo",
            text: "Jovem nobre fascinada pelo testemunho de Francisco, Clara deixou sua casa na noite de Domingo de Ramos para fundar as Irmãs Pobres (Clarissas), vivendo em oração contemplativa e irmandade.",
            example:
              "Olhar para Jesus como o verdadeiro espelho que revela nossa beleza e nosso chamado.",
            source: "2Cor 3,18 · CIC 925, 2544",
          },
          {
            title: "Defesa confiada diante do Santíssimo Sacramento",
            text: "Quando tropas ameaçavam invadir o mosteiro de São Damião, Clara enferma pediu para levarem o ostensório com o Santíssimo Sacramento à entrada e rezou confiada — e os atacantes recuaram!",
            example:
              "Recorrer à adoração eucarística quando a família enfrentar temores ou crises graves.",
            source: "Sl 27,1 · CIC 1378, 1380",
          },
          {
            title: "Amor fraterno que sustenta o mundo",
            text: "Embora vivesse em clausura, Clara dialogava em cartas afetuosas e aconselhava Francisco, mostrando que a amizade santa fortalece a missão da Igreja.",
            example: "Cultivar amizades espirituais sadias que incentivem o bem e a oração mútua.",
            source: "Fl 1,3-5 · CIC 2347, 2687",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a vocação da Ordem das Clarissas fundada por Santa Clara com São Francisco?",
            options: [
              "Comércio internacional",
              "Vida contemplativa de oração, pobreza evangélica e fraternidade em favor da Igreja e do mundo",
              "Ensino exclusivamente militar",
              "Viagens constantes sem mosteiro",
            ],
            answer: 1,
            explanation:
              "Santa Clara viveu o ideal franciscano em clausura contemplativa, sustentando a missão apostólica com a oração (CIC 925, 2544).",
          },
          {
            prompt:
              "Que sinal sagrado Santa Clara levou para proteger seu mosteiro em Assis diante da invasão?",
            options: [
              "Espadas dos guardas",
              "O Santíssimo Sacramento (Eucaristia), confiando na proteção real de Cristo",
              "Sacos de moedas de ouro",
              "Escudos de ferro",
            ],
            answer: 1,
            explanation:
              "A fé inabalável de Clara na presença real de Jesus na Eucaristia é lembrada na iconografia com o ostensório (CIC 1378).",
          },
          {
            prompt:
              "Por que Santa Clara insistiu tanto no 'Privilégio da Pobreza' diante dos Papas?",
            options: [
              "Porque odiava o trabalho",
              "Para depender livremente só de Deus e seguir de perto Cristo pobre sem posses acumuladas",
              "Para recusar esmolas aos doentes",
              "Por teimosia contra a Igreja",
            ],
            answer: 1,
            explanation:
              "A pobreza evangélica voluntária testemunha a liberdade do Reino e a confiança filial na Providência (CIC 915, 2546).",
          },
        ],
      },
      {
        id: "cantico-criaturas-francisco",
        title: "O Cântico das Criaturas e o amor ao Criador",
        emoji: "🌻",
        xp: 20,
        teachings: [
          {
            title: "Irmão Sol, Irmã Água e Irmã Terra",
            text: "Já quase cego e doente, Francisco compôs o Cântico das Criaturas, chamando o sol, a lua, a água, o fogo e a terra de irmãos e irmãs porque todos vêm do mesmo Pai criador.",
            example: "Cuidar da natureza com respeito fraterno sem jamais confundi-la com deuses.",
            source: "Dn 3,57 · CIC 341, 2416",
          },
          {
            title: "Perdoar é mais bonito que a força",
            text: "Para reconciliar o bispo e o prefeito de Assis que viviam brigados, Francisco acrescentou uma estrofe ao cântico: 'Louvado sejas, meu Senhor, pelos que perdoam por teu amor!' — e eles se abraçaram.",
            example:
              "Usar palavras mansas e criativas para ajudar pessoas queridas a fazerem as pazes.",
            source: "Mt 5,9 · CIC 2305, 2844",
          },
          {
            title: "Alegria perfeita na aceitação paciente",
            text: "Francisco ensinou ao Frei Leão que a 'perfeita alegria' não está em fazer milagres famosos, mas em permanecer manso e pacífico por amor a Cristo mesmo quando somos incompreendidos.",
            example: "Guardar a paz interior quando seu esforço não for reconhecido imediatamente.",
            source: "Mt 5,11-12 · CIC 1716, 1820",
          },
        ],
        questions: [
          {
            prompt: "Por que São Francisco chamava o sol, a água e os animais de 'irmãos'?",
            options: [
              "Porque acreditava que árvores têm alma imortal humana",
              "Porque reconhecia em todas as criaturas obras boas saídas das mãos do mesmo Deus Pai",
              "Para adorar o sol em lugar de Cristo",
              "Porque não gostava de pessoas humanas",
            ],
            answer: 1,
            explanation:
              "A fraternidade cósmica franciscana nasce da paternidade única de Deus Criador e inspira o cuidado da criação (CIC 341, 2416).",
          },
          {
            prompt:
              "Qual estrofe Francisco mandou cantar para reconciliar o bispo e o governador de Assis?",
            options: [
              "Louvado sejas pelos que vencem disputas no tribunal",
              "Louvado sejas pelos que perdoam por teu amor e suportam provações em paz",
              "Louvado sejas pelos mais ricos",
              "Nunca conversem um com o outro",
            ],
            answer: 1,
            explanation:
              "O louvor a Deus pelos pacificadores e pelo perdão desarmou os corações e restaurou a paz na cidade (CIC 2305, 2844).",
          },
          {
            prompt:
              "Onde reside a 'perfeita alegria' segundo o famoso ensinamento de Francisco ao Frei Leão?",
            options: [
              "Em fazer grandes prodígios aplaudidos pelas multidões",
              "Em suportar rejeição ou provação com paciência e amor unido à Cruz de Cristo",
              "Em nunca sentir frio nem fome",
              "Em vencer todas as discussões",
            ],
            answer: 1,
            explanation:
              "A maior vitória sobre si mesmo por amor a Cristo gera paz inabalável nas bem-aventuranças (CIC 1716, 1820).",
          },
        ],
      },
    ],
  },
  {
    id: "tomas-aquino-boaventura",
    title: "São Tomás de Aquino e São Boaventura",
    emoji: "✨",
    lessons: [
      {
        id: "fe-razao-tomas-aquino",
        title: "São Tomás de Aquino: fé e razão amigas da verdade",
        emoji: "🦉",
        xp: 20,
        teachings: [
          {
            title: "Toda verdade vem do mesmo Deus",
            text: "Frade dominicano do século XIII, São Tomás de Aquino mostrou na Suma Teológica que nunca há contradição verdadeira entre a fé revelada e a razão reta, pois ambas procedem de Deus.",
            example:
              "Estudar ciências, matemática e história com alegria, sabendo que conhecer o mundo também honra o Criador.",
            source: "Sb 13,5; 1Pd 3,15 · CIC 36, 159",
          },
          {
            title: "A graça não destrói a natureza, mas a aperfeiçoa",
            text: "Um princípio precioso de São Tomás ensina que Deus não apaga nossa humanidade, inteligência ou afetos para nos salvar: a graça cura e eleva nossa natureza!",
            example:
              "Desenvolver talentos humanos com capricho sabendo que a graça divina os eleva para o bem.",
            source: "Jo 10,10 · CIC 36, 2000",
          },
          {
            title: "Um doutor que rezava antes de escrever",
            text: "Diante de passagens difíceis, Tomás apoiava a cabeça junto ao sacrário pedindo luz a Cristo e dizia que aprendeu mais rezando diante do crucifixo do que apenas nos livros.",
            example:
              "Fazer uma breve oração ao Espírito Santo antes de abrir os livros de estudo ou trabalho.",
            source: "Tg 1,5 · CIC 2684",
          },
        ],
        questions: [
          {
            prompt: "Qual é o ensinamento de São Tomás de Aquino sobre a relação entre fé e razão?",
            options: [
              "Que fé e razão são inimigas irreconciliáveis",
              "Que não pode haver oposição real entre fé e razão, pois ambas têm origem em Deus, autor de toda verdade",
              "Que a fé dispensa pensar",
              "Que a razão sozinha substitui a Revelação",
            ],
            answer: 1,
            explanation:
              "A Igreja ensina com São Tomás que a luz da razão e a luz da fé vêm do mesmo Deus e se iluminam mutuamente (CIC 36, 159).",
          },
          {
            prompt:
              "O que significa a máxima tomista 'A graça não destrói a natureza, mas a supõe e aperfeiçoa'?",
            options: [
              "Que Deus elimina nossa liberdade e inteligência quando nos convertemos",
              "Que a graça de Deus respeita, cura e eleva nossas capacidades humanas ao bem",
              "Que a natureza não precisa da graça para a salvação",
              "Que apenas anjos recebem graça",
            ],
            answer: 1,
            explanation:
              "A redenção não anula o ser humano criado por Deus, mas restaura e eleva suas potências para a comunhão divina (CIC 36, 1749).",
          },
          {
            prompt: "Qual é a obra teológica mais célebre escrita por São Tomás de Aquino?",
            options: [
              "A Suma Teológica",
              "O Cântico das Criaturas",
              "As Confissões",
              "A Vida de Santo Antão",
            ],
            answer: 0,
            explanation:
              "A Suma Teológica de São Tomás é referência clássica da filosofia e teologia católicas sobre Deus, virtudes e sacramentos (CIC 2684).",
          },
        ],
      },
      {
        id: "tomas-poeta-eucaristia",
        title: "Hinos eucarísticos: Tantum Ergo e Adoro Te Devote",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Adoro-te com devoção, ó Deidade escondida",
            text: "Além de teólogo brilhante, São Tomás compôs os belíssimos hinos de Corpus Christi ('Pange Lingua', 'Tantum Ergo', 'O Salutaris' e 'Adoro Te Devote') cantados na Igreja até hoje.",
            example:
              "Ler a tradução de um hino eucarístico de São Tomás antes da adoração ao Santíssimo.",
            source: "Jo 6,51 · CIC 1381",
          },
          {
            title: "Os sentidos falham; só a fé assegura o coração",
            text: "No 'Adoro Te Devote', Tomás canta com poesia: vista, tato e paladar percebem pão e vinho, mas pela Palavra de Cristo o ouvido da fé acolhe a presença real do Filho de Deus.",
            example:
              "Adorar Jesus na Hóstia consagrada com fé humilde além do que os olhos físicos enxergam.",
            source: "1Cor 11,24 · CIC 1381",
          },
          {
            title: "Não quero outra recompensa senão a Ti mesmo",
            text: "No fim da vida, diante do crucifixo que lhe perguntou o que queria pelo que escrevera bem sobre Cristo, Tomás respondeu: 'Nada senão a Ti, Senhor!'.",
            example:
              "Desejar acima de tudo o próprio Jesus e não só os presentes que Ele pode dar.",
            source: "Sl 73,25 · CIC 1723, 2684",
          },
        ],
        questions: [
          {
            prompt:
              "Para qual solenidade litúrgica São Tomás de Aquino compôs os hinos Pange Lingua e Tantum Ergo?",
            options: [
              "Corpus Christi (Solenidade do Corpo e Sangue de Cristo)",
              "Quarta-feira de Cinzas",
              "Domingo de Ramos",
              "Epifania",
            ],
            answer: 0,
            explanation:
              "A pedido do Papa Urbano IV em 1264, São Tomás compôs os textos litúrgicos de Corpus Christi usados até hoje (CIC 1381).",
          },
          {
            prompt:
              "O que São Tomás respondeu quando Cristo lhe perguntou qual recompensa desejava pelo seu trabalho?",
            options: [
              "Ser nomeado cardeal em Roma",
              "'Nada senão a Ti, Senhor!'",
              "Escrever mais cem livros",
              "Ter saúde eterna na terra",
            ],
            answer: 1,
            explanation:
              "Todo o estudo teológico de Tomás servia apenas ao amor e conhecimento contemplativo do próprio Senhor (CIC 1723, 2684).",
          },
          {
            prompt:
              "Segundo o hino 'Adoro Te Devote' citado no Catecismo, qual sentido nos dá certeza da presença real na Eucaristia?",
            options: [
              "Somente o tato e o paladar",
              "O ouvido da fé que acolhe a Palavra infalível do Filho de Deus",
              "A imaginação livre",
              "O cheiro das flores",
            ],
            answer: 1,
            explanation:
              "Onde os sentidos externos veem apenas pão e vinho, a fé na Palavra de Cristo reconhece o Corpo e o Sangue do Senhor (CIC 1381).",
          },
        ],
      },
      {
        id: "sao-boaventura-itinerario",
        title: "São Boaventura: o caminho do coração até Deus",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Teologia que inflama o amor, não só o intelecto",
            text: "Amigo de São Tomás e ministro geral dos franciscanos, São Boaventura ('Doutor Seráfico') ensinou que o conhecimento de Deus sem oração, humildade e amor fica estéril.",
            example:
              "Sempre unir a leitura sobre a fé a um momento sincero de diálogo e amor a Jesus.",
            source: "1Cor 8,1 · CIC 426, 2684",
          },
          {
            title: "As pegadas da Trindade na criação",
            text: "Em seu livro 'Itinerário da Mente para Deus', Boaventura mostra como a beleza do mundo exterior, a nossa própria alma e os mistérios da graça são degraus que elevam ao Pai através de Cristo crucificado.",
            example:
              "Olhar para a ordem do universo como convite silencioso para louvar Pai, Filho e Espírito Santo.",
            source: "Sl 19,2 · CIC 299, 341",
          },
          {
            title: "Amizade santa entre escolas diferentes",
            text: "Embora um fosse dominicano (Tomás) e outro franciscano (Boaventura) com estilos teológicos distintos, ambos eram amigos profundos unidos no amor a Cristo e à Igreja.",
            example:
              "Respeitar e amar irmãos que vivem a mesma fé católica com espiritualidades diferentes da nossa.",
            source: "1Cor 12,4 · CIC 799, 814",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a ênfase característica de São Boaventura na espiritualidade e teologia?",
            options: [
              "Separar o estudo de Deus da oração",
              "Unir inteligência, contemplação da criação e amor ardente a Cristo crucificado como caminho a Deus",
              "Negar valor às virtudes morais",
              "Substituir os Evangelhos pela filosofia grega",
            ],
            answer: 1,
            explanation:
              "Para Boaventura, não há sabedoria verdadeira sem unção, humildade e união amorosa com Cristo na oração (CIC 426, 2684).",
          },
          {
            prompt:
              "O que mostra a amizade entre o dominicano Tomás de Aquino e o franciscano Boaventura?",
            options: [
              "Que diferentes carismas e escolas teológicas enriquecem a unidade da Igreja Católica",
              "Que todas as ordens religiosas devem ser idênticas",
              "Que eles nunca estudaram juntos",
              "Que não gostavam de livros",
            ],
            answer: 0,
            explanation:
              "A diversidade legítima de espiritualidades na Igreja reflete a riqueza multiforme do único Espírito Santo (CIC 799, 814).",
          },
          {
            prompt: "Como São Boaventura enxergava as criaturas do mundo visível?",
            options: [
              "Como prisões sem sentido",
              "Como vestígios e degraus que refletem o Criador e elevam a alma a Deus",
              "Como iguais a Deus",
              "Como ilusões inexistentes",
            ],
            answer: 1,
            explanation:
              "Toda criatura traz em si traços da bondade, verdade e beleza do Criador trinitário (CIC 299, 341).",
          },
        ],
      },
    ],
  },
  {
    id: "reforma-catolica",
    title: "Concílio de Trento e Reforma Católica",
    emoji: "⛪",
    lessons: [
      {
        id: "trento-clareza-doutrina",
        title: "O Concílio de Trento: Escritura, Tradição e graça",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "Responder com renovação autêntica no século XVI",
            text: "Diante das divisões da Reforma Protestante e abusos disciplinares de sua época, o Concílio de Trento (1545–1563) esclareceu a doutrina católica e promoveu profunda reforma do clero e das paróquias.",
            example:
              "Entender que as crises na história da Igreja sempre chamam à conversão pessoal e fidelidade.",
            source: "2Tm 1,14 · CIC 88, 827",
          },
          {
            title: "Salvos pela graça que transforma o coração para amar",
            text: "Trento reafirmou contra todo erro que somos justificados gratuitamente por Cristo — não compramos a salvação — e que a graça recebida nos capacita de verdade para a fé que age pelo amor.",
            example:
              "Agradecer primeiro a graça de Deus e colaborar com ela praticando o bem com alegria.",
            source: "Ef 2,8-10; Gl 5,6 · CIC 1987-2005",
          },
          {
            title: "Valorizar os sete sacramentos e a Missa",
            text: "O Concílio confirmou os sete sacramentos instituídos por Cristo, a presença real na Eucaristia e o sentido sacrifical da Missa, unindo zelo litúrgico à formação dos seminários.",
            example: "Conhecer cada um dos sete sacramentos como encontros vivos com Cristo hoje.",
            source: "1Cor 11,23-26 · CIC 1117, 1367",
          },
        ],
        questions: [
          {
            prompt: "O que o Concílio de Trento reafirmou sobre a justificação e as boas obras?",
            options: [
              "Que salvamo-nos sozinhos sem a graça de Cristo",
              "Que a justificação é dom gratuito da graça de Cristo, que renova interiormente e frutifica na caridade",
              "Que as boas obras são inúteis após o Batismo",
              "Que apenas sete pessoas por cidade se salvam",
            ],
            answer: 1,
            explanation:
              "Trento equilibrou perfeitamente a primazia absoluta da graça de Cristo e a resposta livre do cristão na fé e caridade (CIC 1987-2005).",
          },
          {
            prompt:
              "Que instituição importante para a formação dos padres nasceu dos decretos do Concílio de Trento?",
            options: [
              "Os seminários diocesanos para formação espiritual, humana e teológica do clero",
              "As cruzadas militares",
              "Os mosteiros do Egito",
              "As escolas gregas antigas",
            ],
            answer: 0,
            explanation:
              "A criação dos seminários elevou muito a formação espiritual, bíblica e pastoral dos futuros presbíteros (CIC 1578).",
          },
          {
            prompt: "Por que Trento também incentivou a publicação do Catecismo Romano?",
            options: [
              "Para esconder a fé dos leigos",
              "Para oferecer aos párocos e fiéis uma exposição clara e segura da fé, dos sacramentos, dos mandamentos e do Pai-Nosso",
              "Para substituir a Bíblia",
              "Para abolir a homilia",
            ],
            answer: 1,
            explanation:
              "O Catecismo de Trento (1566) estruturou a catequese em quatro pilares — os mesmos que hoje estruturam o Catecismo da Igreja Católica (CIC 13-17).",
          },
        ],
      },
      {
        id: "carlos-borromeu-felipe-neri",
        title: "São Carlos Borromeu e São Filipe Néri: santos da renovação",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "São Carlos Borromeu: pastor junto ao povo na peste",
            text: "Arcebispo de Milão logo após Trento, Carlos Borromeu doou bens aos pobres, abriu seminários e durante uma grave peste permaneceu na cidade atendendo doentes e distribuindo alimentos.",
            example:
              "Não fugir das responsabilidades comunitárias nos momentos em que os outros mais precisam de apoio.",
            source: "Jo 10,11 · CIC 1560, 2447",
          },
          {
            title: "São Filipe Néri: o santo da alegria em Roma",
            text: "Chamado 'apóstolo de Roma', São Filipe Néri reunia jovens e trabalhadores no Oratório com música, passeios, catequese simples, Confissão frequente e muito bom humor: 'Estai alegres e não pequeis!'.",
            example: "Mostrar que a vida cristã autêntica traz alegria luminosa, não cara fechada.",
            source: "Fl 4,4 · CIC 1820, 2689",
          },
          {
            title: "Rezar com naturalidade e humor humilde",
            text: "Filipe Néri combatia a vaidade com pequenas brincadeiras sobre si mesmo e ensinava que dez minutos de oração sincera transformam o dia inteiro.",
            example:
              "Saber rir dos próprios exageros sem orgulho e manter a alegria serena em casa.",
            source: "Sl 100,2 · CIC 2559",
          },
        ],
        questions: [
          {
            prompt:
              "Como São Carlos Borromeu deu exemplo de pastor durante a peste em Milão no século XVI?",
            options: [
              "Fugiu para o interior até tudo passar",
              "Permaneceu junto aos doentes, organizou hospitais, doou recursos e levou os sacramentos",
              "Fechou todas as igrejas da diocese",
              "Proibiu ajuda aos pobres",
            ],
            answer: 1,
            explanation:
              "À imagem do Bom Pastor, Borromeu arriscou a própria vida para cuidar espiritual e materialmente de seu rebanho (CIC 1560, 2447).",
          },
          {
            prompt:
              "Que marca pessoal tornou São Filipe Néri tão querido em Roma entre jovens e adultos?",
            options: [
              "A severidade sem sorrisos",
              "A alegria cristã contagiante unida à oração, música, amizade e Confissão frequente",
              "O isolamento longe da cidade",
              "O desprezo pela arte",
            ],
            answer: 1,
            explanation:
              "O Oratório de São Filipe Néri aproximou milhares de pessoas de Cristo pela alegria simples, caridade e direção espiritual (CIC 1820).",
          },
          {
            prompt: "O que mostram santos como Borromeu e Filipe Néri na mesma época?",
            options: [
              "Que a renovação verdadeira da Igreja acontece antes pela santidade de vida que apenas por decretos",
              "Que o Concílio de Trento não teve efeito",
              "Que só bispos podem ser santos",
              "Que jovens não se interessam por Deus",
            ],
            answer: 0,
            explanation:
              "A renovação eclesial frutifica quando pastores e fiéis vivem com coerência alegre a caridade evangélica (CIC 827, 2013).",
          },
        ],
      },
      {
        id: "inacio-loyola-discernimento",
        title: "Santo Inácio de Loyola e a maior glória de Deus",
        emoji: "🧭",
        xp: 20,
        teachings: [
          {
            title: "Da ambição militar aos livros da vida de Cristo",
            text: "Ferido numa batalha em 1521 e sem romances para ler durante a recuperação, o cavaleiro Inácio leu a vida de Jesus e dos santos — notando que sonhar com vaidade o deixava vazio depois, mas imitar os santos lhe dava paz duradoura.",
            example:
              "Observar quais leituras, músicas e conversas deixam paz real no coração depois que terminam.",
            source: "Gl 5,22 · CIC 1785, 2708",
          },
          {
            title: "Exercícios Espirituais e Exame Diário",
            text: "Fundador da Companhia de Jesus (Jesuítas), Inácio sistematizou os Exercícios Espirituais para ordenar a vida rumo a Deus e ensinou o exame diário começando sempre pela gratidão.",
            example:
              "Antes de dormir, agradecer a Deus os dons recebidos hoje antes mesmo de examinar as faltas.",
            source: "1Ts 5,18 · CIC 1454, 2708",
          },
          {
            title: "Tudo para a maior glória de Deus (AMDG)",
            text: "O lema 'Ad Maiorem Dei Gloriam' lembra que estudar, trabalhar, ensinar ou servir aos pobres pode glorificar a Deus quando feito com retidão de intenção.",
            example:
              "Oferecer suas tarefas de hoje — até as menos empolgantes — para a glória de Deus e bem do próximo.",
            source: "1Cor 10,31 · CIC 294, 2427",
          },
        ],
        questions: [
          {
            prompt:
              "O que Santo Inácio de Loyola percebeu durante sua convalescença ao comparar seus pensamentos?",
            options: [
              "Que sonhos de fama deixavam o coração seco depois, enquanto pensar em Cristo e nos santos deixava paz alegre",
              "Que ler sobre santos deixava a pessoa triste",
              "Que não devemos refletir sobre nossas emoções",
              "Que a vida militar é o único caminho santo",
            ],
            answer: 0,
            explanation:
              "Essa observação interior deu origem às regras de discernimento dos espíritos nos Exercícios Espirituais (CIC 1785, 2708).",
          },
          {
            prompt: "Qual é o significado do lema inaciano 'Ad Maiorem Dei Gloriam'?",
            options: [
              "Para a maior glória humana",
              "Para a maior glória de Deus",
              "Para evitar todo trabalho",
              "Para viver apenas em silêncio",
            ],
            answer: 1,
            explanation:
              "Tudo na vida do cristão pode ordenar-se à glória de Deus e ao serviço das almas (1Cor 10,31; CIC 294).",
          },
          {
            prompt:
              "Por qual atitude começa o Exame de Consciência diário ensinado por Santo Inácio?",
            options: [
              "Pela ação de graças reconhecendo os benefícios recebidos de Deus no dia",
              "Pela tristeza exagerada",
              "Pela crítica aos defeitos dos vizinhos",
              "Pela pressa em dormir sem rezar",
            ],
            answer: 0,
            explanation:
              "A gratidão coloca o coração na presença amorosa de Deus Pai antes de examinar as falhas com humildade (CIC 1454, 2637).",
          },
        ],
      },
    ],
  },
  {
    id: "santos-missionarios",
    title: "São Francisco Xavier, Anchieta e a Missão",
    emoji: "⛵",
    lessons: [
      {
        id: "francisco-xavier-oriente",
        title: "São Francisco Xavier: levar o Evangelho até o Oriente",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "De que aproveita ganhar o mundo inteiro?",
            text: "Professor brilhante em Paris, Francisco Xavier ouviu repetidamente do amigo Inácio a pergunta de Jesus: 'Que aproveita ao homem ganhar o mundo inteiro se vier a perder a sua alma?'. Largou a carreira acadêmica para ser missionário.",
            example: "Avaliar projetos de vida lembrando o que realmente tem valor eterno.",
            source: "Mc 8,36 · CIC 849, 1722",
          },
          {
            title: "Anunciar na Índia e no Japão com o sino e o Catecismo",
            text: "Da Índia às ilhas da Indonésia e ao Japão, Xavier caminhava tocando um sininho para reunir crianças e famílias, ensinando o Credo, os Mandamentos e o Pai-Nosso na língua local.",
            example:
              "Explicar a fé de modo simples, acolhedor e compreensível a crianças e iniciantes.",
            source: "Mt 28,19 · CIC 426, 854",
          },
          {
            title: "Padroeiro das missões junto com Santa Teresinha",
            text: "Morreu em 1552 às portas da China olhando para o continente que desejava evangelizar. Hoje é padroeiro das missões ao lado da carmelita Teresinha que rezava no mosteiro!",
            example:
              "Lembrar que a missão precisa tanto de quem vai às ruas quanto de quem sustenta pela oração.",
            source: "Rm 10,14-15 · CIC 849, 863",
          },
        ],
        questions: [
          {
            prompt:
              "Qual frase do Evangelho despertou São Francisco Xavier da ambição acadêmica para a missão?",
            options: [
              "'De que aproveita ao homem ganhar o mundo inteiro se perder a sua alma?' (Mc 8,36)",
              "'Guardai vossos tesouros na terra'",
              "'Não faleis com estrangeiros'",
              "'Construam torres mais altas'",
            ],
            answer: 0,
            explanation:
              "A pergunta radical de Jesus abriu o coração de Francisco Xavier para entregar a vida ao anúncio do Evangelho na Ásia (CIC 849).",
          },
          {
            prompt: "Como São Francisco Xavier ensinava a fé às populações locais na Ásia?",
            options: [
              "Apenas em latim difícil sem explicar",
              "Traduzindo o Credo, os Mandamentos e orações para a língua do povo e reunindo crianças com simplicidade",
              "Exigindo longos tratados antes do Batismo",
              "Ficando trancado no navio",
            ],
            answer: 1,
            explanation:
              "A verdadeira inculturação missionária fala à cultura local com clareza e amor paciente (CIC 854, 1204).",
          },
          {
            prompt:
              "Quem divide com São Francisco Xavier o título de padroeiro universal das missões da Igreja?",
            options: [
              "Santa Teresinha do Menino Jesus (que rezava pela missão no Carmelo)",
              "O imperador Constantino",
              "São Sebastião apenas",
              "Ninguém",
            ],
            answer: 0,
            explanation:
              "Um missionário viajante e uma monja contemplativa recordam juntos que ação apostólica e oração sustentam a missão (CIC 849, 2687).",
          },
        ],
      },
      {
        id: "jose-anchieta-brasil",
        title: "São José de Anchieta: Apóstolo do Brasil",
        emoji: "🇧🇷",
        xp: 20,
        teachings: [
          {
            title: "Chegada jovem ao Brasil e amor à língua tupi",
            text: "Chegado ao Brasil aos 19 anos em 1553 com saúde frágil, José de Anchieta aprendeu rapidamente a língua tupi, escreveu a primeira gramática tupi e compôs cânticos e autos teatrais bíblicos para evangelizar.",
            example:
              "Usar música, arte e a linguagem simples de nosso tempo para falar de Jesus com beleza.",
            source: "1Cor 9,22 · CIC 854, 2500",
          },
          {
            title: "Fundação de São Paulo e defesa dos indígenas",
            text: "Anchieta participou da fundação do colégio que originou a cidade de São Paulo em 1554, ensinou ofícios, cuidou de feridos como enfermeiro e defendeu os indígenas contra a escravização.",
            example:
              "Unir o anúncio da fé à educação, ao cuidado da saúde e à defesa dos povos vulneráveis.",
            source: "Gl 3,28 · CIC 1931, 2414",
          },
          {
            title: "O Poema à Virgem escrito na areia de Iperoig",
            text: "Mantido refém durante negociações de paz em Iperoig, Anchieta compôs de memória na areia da praia um longo poema de milhares de versos em louvor a Nossa Senhora.",
            example: "Confiar à proteção de Maria os momentos de solidão, incerteza ou espera.",
            source: "Lc 1,46 · CIC 971",
          },
        ],
        questions: [
          {
            prompt:
              "Como São José de Anchieta se aproximou culturalmente dos povos indígenas no Brasil?",
            options: [
              "Proibiu qualquer idioma local",
              "Aprendeu a língua tupi, escreveu sua primeira gramática e compôs poemas, cantos e autos teatrais cristãos",
              "Ficou apenas em Lisboa",
              "Recusou ensinar crianças",
            ],
            answer: 1,
            explanation:
              "Anchieta aprendeu o tupi com respeito, unindo evangelização, educação, saúde e defesa humana (CIC 854, 1204).",
          },
          {
            prompt:
              "Em qual episódio dramático Anchieta compôs o famoso Poema à Virgem Maria na areia da praia?",
            options: [
              "Enquanto atuava como refém em missão de paz em Iperoig (Ubatuba)",
              "Durante uma festa em Roma",
              "No mosteiro de Assis",
              "Antes de sair da Espanha",
            ],
            answer: 0,
            explanation:
              "No cativeiro pela paz entre portugueses e tamoios, a devoção mariana e a oração sustentaram sua fidelidade (CIC 971, 2305).",
          },
          {
            prompt:
              "Que cidade brasileira teve suas origens ligadas ao colégio fundado em 25 de janeiro de 1554 com participação de Anchieta?",
            options: ["São Paulo", "Brasília", "Curitiba", "Manaus"],
            answer: 0,
            explanation:
              "O Pátio do Colégio em São Paulo recorda a missão educativa e evangelizadora inicial dos jesuítas com Nóbrega e Anchieta (CIC 851, 854).",
          },
        ],
      },
      {
        id: "missao-hoje-batalha-fe",
        title: "Todo batizado é discípulo missionário",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "A Igreja é missionária por sua própria natureza",
            text: "A missão não é apenas viajar para outro continente: nasce do amor da Trindade enviada ao mundo pelo Filho e pelo Espírito Santo. Onde houver um batizado, ali está um missionário.",
            example:
              "Pensar na sua família, escola ou ambiente de trabalho como seu primeiro território missionário.",
            source: "Jo 20,21 · CIC 849-851",
          },
          {
            title: "Primeiro o testemunho da vida, depois a palavra",
            text: "As pessoas se abrem ao Evangelho quando veem antes em nós paciência, integridade, alegria e amor gratuito; então as palavras sobre Jesus ganham força verdadeira.",
            example:
              "Cuidar para que o modo como tratamos os colegas não contradiga a fé que professamos.",
            source: "Mt 5,16 · CIC 905, 2044",
          },
          {
            title: "Anunciar sem impor, propor com amor",
            text: "A missão cristã propõe Jesus com respeito pela consciência e pela liberdade de cada pessoa, confiando que é o Espírito Santo quem toca o coração.",
            example:
              "Partilhar sua experiência de oração com simplicidade quando alguém abrir espaço, sem pressionar.",
            source: "1Pd 3,15 · CIC 851, 2106",
          },
        ],
        questions: [
          {
            prompt:
              "De onde brota o caráter essencialmente missionário da Igreja segundo o Catecismo?",
            options: [
              "De interesses comerciais antigos",
              "Do próprio amor da Santíssima Trindade — o Pai que envia o Filho e o Espírito Santo para salvar o mundo",
              "De uma decisão recente do século XX",
              "Da vontade de dominar culturas",
            ],
            answer: 1,
            explanation:
              "A Igreja peregrina é missionária por natureza porque nasce da missão do Filho e do Espírito Santo segundo o plano do Pai (CIC 850).",
          },
          {
            prompt: "Qual é o modo cristão correto de evangelizar outras pessoas?",
            options: [
              "Obrigar pela força ou constrangimento",
              "Testemunhar pelo amor e propor a verdade de Cristo com respeito livre e mansidão",
              "Esconder completamente que Cristo existe",
              "Discutir com desprezo",
            ],
            answer: 1,
            explanation:
              "A evangelização respeita a dignidade da consciência humana e confia na ação interior da graça (CIC 160, 851).",
          },
          {
            prompt: "Quem tem parte na responsabilidade missionária da Igreja?",
            options: [
              "Todo o povo de Deus batizado — cada um segundo sua vocação e lugar no mundo",
              "Apenas padres que viajam de avião",
              "Somente religiosas",
              "Ninguém nos tempos atuais",
            ],
            answer: 0,
            explanation:
              "Todo batizado é chamado a ser testemunha de Cristo pela vida, oração e palavra no próprio ambiente (CIC 849, 863).",
          },
        ],
      },
    ],
  },
  {
    id: "teresa-avila-joao-cruz",
    title: "Santa Teresa d'Ávila e São João da Cruz",
    emoji: "🔥",
    lessons: [
      {
        id: "teresa-avila-castelo",
        title: "Santa Teresa de Jesus: oração é trato de amizade",
        emoji: "🏰",
        xp: 20,
        teachings: [
          {
            title: "Tratar de amizade com quem sabemos que nos ama",
            text: "Primeira mulher declarada Doutora da Igreja, Santa Teresa d'Ávila definiu a oração com simplicidade inesquecível: 'Não é outra coisa senão tratar de amizade, estando muitas vezes tratando a sós com quem sabemos que nos ama'.",
            example:
              "Entrar na oração lembrando primeiro: Jesus já me ama e quer conversar comigo como amigo.",
            source: "Jo 15,15 · CIC 2709",
          },
          {
            title: "O Castelo Interior e a morada do Rei",
            text: "Teresa comparou a alma a um castelo de diamante com muitas moradas, no centro do qual habita Deus. A oração convida a não ficar só na muralha de fora, mas entrar na intimidade interior.",
            example:
              "Desligar barulhos externos por alguns minutos para encontrar Jesus que habita no centro da alma em graça.",
            source: "Jo 14,23 · CIC 2565, 2709",
          },
          {
            title: "Nada te perturbe: só Deus basta!",
            text: "Mesmo fundando mosteiros em meio a viagens duras e oposições, Teresa guardava paz firme: 'Nada te perturbe, nada te espante, tudo passa, Deus não muda; quem a Deus tem nada lhe falta: só Deus basta!'.",
            example:
              "Rezar essa breve poesia de Santa Teresa em dias de estresse ou preocupação excessiva.",
            source: "Sl 62,2 · CIC 227, 2709",
          },
        ],
        questions: [
          {
            prompt:
              "Como Santa Teresa d'Ávila definiu a oração mental citada diretamente no Catecismo?",
            options: [
              "Como técnica para esvaziar totalmente o pensamento sem pensar em ninguém",
              "Como um trato de amizade, estando a sós com quem sabemos que nos ama",
              "Como leitura veloz de textos difíceis",
              "Como obrigação apenas dos padres",
            ],
            answer: 1,
            explanation:
              "O Catecismo cita a definição clássica de Santa Teresa para explicar a intimidade pessoal da oração contemplativa (CIC 2709).",
          },
          {
            prompt: "O que simboliza o 'Castelo Interior' na obra espiritual de Santa Teresa?",
            options: [
              "Um palácio militar na Espanha",
              "A alma humana habitada em seu centro pela Santíssima Trindade",
              "Um muro para se esconder dos pobres",
              "Apenas uma escola antiga",
            ],
            answer: 1,
            explanation:
              "Pela graça, a alma é morada preciosa onde somos convidados a progredir na oração rumo à união com Deus (CIC 2565, 2709).",
          },
          {
            prompt:
              "Como Teresa d'Ávila enxergava a presença de Deus nas tarefas simples como cozinhar?",
            options: [
              "Dizia que trabalho doméstico impede rezar",
              "Afirmava com bom humor que 'também entre as panelas anda o Senhor'",
              "Proibia o trabalho nos mosteiros",
              "Só rezava dentro da igreja",
            ],
            answer: 1,
            explanation:
              "A verdadeira mística une contemplação profunda e amor prático alegre nas tarefas cotidianas (CIC 2015, 2745).",
          },
        ],
      },
      {
        id: "joao-cruz-noite-escura",
        title: "São João da Cruz: na tarde da vida seremos julgados no amor",
        emoji: "🌙",
        xp: 20,
        teachings: [
          {
            title: "A 'Noite Escura' purifica, não castiga",
            text: "Colaborador de Santa Teresa na reforma do Carmelo, São João da Cruz explicou que quando Deus retira consolações sensíveis na oração ('noite escura'), Ele purifica nossa fé e amor para que o amemos de verdade, sem apego às sensações.",
            example:
              "Não pensar que Deus foi embora se você não sentir emoção ao rezar; perseverar em pura fé.",
            source: "2Cor 5,7 · CIC 2719, 2731",
          },
          {
            title: "Onde não há amor, põe amor e tirarás amor",
            text: "Em frases breves de ouro, João da Cruz ensinou a transformar ambientes frios ou tensos levando primeiro mansidão, escuta e caridade gratuita.",
            example:
              "Quando perceber clima pesado em casa ou no trabalho, tomar a iniciativa de ser gentil primeiro.",
            source: "Rm 12,21 · CIC 1825",
          },
          {
            title: "À tarde te examinarão no amor",
            text: "O Catecismo cita esta joia de São João da Cruz sobre o juízo: 'Ao entardecer desta vida, seremos julgados pelo amor!'. Todo o resto serve para nos ensinar a amar.",
            example:
              "Avaliar cada dia segundo quanto amamos a Deus e ao próximo, não só pela correria cumprida.",
            source: "Mt 25,40 · CIC 1022",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a famosa frase de São João da Cruz citada no Catecismo ao tratar do juízo particular?",
            options: [
              "'À tarde desta vida serás julgado pelo conhecimento teórico'",
              "'Ao entardecer desta vida, seremos examinados no amor'",
              "'Ninguém responderá pelas próprias escolhas'",
              "'Apenas obras públicas contam'",
            ],
            answer: 1,
            explanation:
              "O Catecismo cita São João da Cruz em CIC 1022 lembrando que a caridade é a medida definitiva diante de Deus.",
          },
          {
            prompt:
              "Qual é a finalidade espiritual da 'noite escura' descrita por São João da Cruz?",
            options: [
              "Provar que Deus nos odeia",
              "Purificar o coração de apegos desordenados e educar para amar a Deus por Ele mesmo na fé pura",
              "Desistir da vida de oração",
              "Evitar os sacramentos",
            ],
            answer: 1,
            explanation:
              "A purificação passiva liberta das ilusões egocêntricas para conduzir à união madura e luminosa com Deus (CIC 2719, 2731).",
          },
          {
            prompt: "Que conselho prático São João da Cruz deu para ambientes onde falta caridade?",
            options: [
              "'Afastar-se e criticar todos'",
              "'Onde não houver amor, põe amor e colherás amor'",
              "'Responder com a mesma frieza'",
              "'Esperar os outros mudarem primeiro'",
            ],
            answer: 1,
            explanation:
              "A iniciativa generosa da caridade quebra o círculo da frieza e renova os relacionamentos (CIC 1825, 2844).",
          },
        ],
      },
      {
        id: "contemplacao-vida-ativa",
        title: "Marta e Maria: unir contemplação e ação",
        emoji: "🏡",
        xp: 20,
        teachings: [
          {
            title: "A boa parte escolhida por Maria em Betânia",
            text: "Na casa de Marta e Maria em Betânia, Jesus não desprezou o trabalho de servir a mesa, mas corrigiu a agitação ansiosa de Marta lembrando que escutar sua Palavra é a prioridade que sustenta tudo.",
            example:
              "Não deixar o ativismo paroquial ou profissional sufocar os minutos de escuta silenciosa de Jesus.",
            source: "Lc 10,38-42 · CIC 2711, 2728",
          },
          {
            title: "As obras da caridade nascem da união com Cristo",
            text: "Tanto Teresa quanto João da Cruz mostraram que a verdadeira oração nunca torna a pessoa egoísta: quem se une a Jesus na contemplação sai com mais paciência para servir os irmãos.",
            example:
              "Verificar se nosso tempo de oração está gerando mais paciência e bondade com quem mora conosco.",
            source: "1Jo 4,19-21 · CIC 2015, 2654",
          },
          {
            title: "Sede de silêncio num mundo barulhento",
            text: "No meio das notificações e pressas de hoje, aprender um pouco de silêncio interior devolve lucidez, paz e capacidade de amar de verdade.",
            example:
              "Criar um pequeno 'deserto' de cinco minutos sem telas todo dia para respirar e falar com Deus.",
            source: "Mc 6,31 · CIC 2717",
          },
        ],
        questions: [
          {
            prompt: "Por que Jesus elogiou Maria de Betânia no diálogo com Marta em Lucas 10?",
            options: [
              "Porque servir comida é errado",
              "Porque antes de agitar-se com muitas tarefas, é indispensável escutar Jesus como fonte do serviço",
              "Porque Marta não gostava de Jesus",
              "Porque não devemos trabalhar",
            ],
            answer: 1,
            explanation:
              "A escuta orante de Cristo é a 'melhor parte' que orienta e pacifica toda ação de caridade (Lc 10,41-42; CIC 2711).",
          },
          {
            prompt: "Como saber se nossa oração contemplativa está sendo autêntica?",
            options: [
              "Pela quantidade de visões extraordinárias",
              "Pelos frutos de humildade, paciência, paz e amor concreto aos outros no dia a dia",
              "Pela impaciência com a família",
              "Pelo orgulho de rezar muito",
            ],
            answer: 1,
            explanation:
              "A intimidade verdadeira com Jesus transforma o agir e frutifica nas obras de caridade (CIC 1825, 2715).",
          },
          {
            prompt: "Qual é o remédio sugerido pelo Evangelho contra o ativismo agitado (Mc 6,31)?",
            options: [
              "'Vinde à parte a um lugar deserto e descansai um pouco' na intimidade com Jesus",
              "Trabalhar o dobro sem parar",
              "Evitar todos os amigos",
              "Desistir da missão",
            ],
            answer: 0,
            explanation:
              "Retirar-se periodicamente com Cristo restaura o espírito e mantém o serviço livre da agitação estéril (CIC 2717).",
          },
        ],
      },
    ],
  },
  {
    id: "teresinha-joao-bosco",
    title: "Santa Teresinha e São João Bosco",
    emoji: "🌹",
    lessons: [
      {
        id: "teresinha-pequena-via",
        title: "Santa Teresinha: a Pequena Via da confiança",
        emoji: "🌸",
        xp: 20,
        teachings: [
          {
            title: "Minha vocação é o amor no coração da Igreja",
            text: "Entrando no Carmelo de Lisieux aos 15 anos e morrendo aos 24, Teresinha descobriu em 1 Coríntios 13 seu lugar exato: 'No coração da Igreja, minha Mãe, eu serei o amor!'.",
            example: "Colocar amor paciente em tudo o que fazemos dentro da família e da paróquia.",
            source: "1Cor 13,1-13 · CIC 826, 2684",
          },
          {
            title: "O elevador dos braços de Jesus",
            text: "Sentindo-se pequena diante da santidade, Teresinha não desanimou: descobriu a 'Pequena Via' da infância espiritual — apoiar-se como criança nos braços de Jesus e oferecer-lhe pequenos sacrifícios diários.",
            example:
              "Oferecer a Jesus pequenas contrariedades do dia com um sorriso escondido e sem reclamar.",
            source: "Mt 18,3-4 · CIC 2015, 2559",
          },
          {
            title: "Passar o céu fazendo o bem na terra",
            text: "Mesmo sem sair do mosteiro, Teresinha rezava pelos missionários e padres e tornou-se Doutora da Igreja e padroeira das missões: 'É a confiança e nada mais do que a confiança que deve conduzir-nos ao Amor!'.",
            example:
              "Rezar pelas vocações sacerdotais e missionárias todos os dias com fé simples.",
            source: "1Jo 4,16 · CIC 849, 2684",
          },
        ],
        questions: [
          {
            prompt: "Em que consiste a 'Pequena Via' ensinada por Santa Teresinha do Menino Jesus?",
            options: [
              "Fazer penitências físicas extremas para se exibir",
              "Caminho de confiança filial e amor nas pequenas coisas simples do dia a dia, apoiada na graça de Jesus",
              "Desistir da santidade por ser jovem",
              "Viajar por muitos países",
            ],
            answer: 1,
            explanation:
              "A Pequena Via confia inteiramente na misericórdia de Jesus, transformando cada gesto ordinário em oferta de amor (CIC 826, 2015).",
          },
          {
            prompt:
              "Qual foi a grande descoberta de Santa Teresinha ao meditar 1 Coríntios 12–13 sobre o Corpo da Igreja?",
            options: [
              "'No coração da Igreja, minha Mãe, eu serei o amor!'",
              "'Eu quero mandar em todos os mosteiros'",
              "'Apenas os doutores servem à Igreja'",
              "'Não há lugar para jovens'",
            ],
            answer: 0,
            explanation:
              "O Catecismo cita essa célebre descoberta de Teresinha ao mostrar que a caridade é a alma e o coração de toda vocação (CIC 826).",
          },
          {
            prompt:
              "Que título raro Santa Teresinha recebeu apesar de ter morrido jovem aos 24 anos?",
            options: [
              "Doutora da Igreja (por sua doutrina espiritual luminosa da infância espiritual)",
              "Rainha da França",
              "Arquitetura de Roma",
              "Imperatriz",
            ],
            answer: 0,
            explanation:
              "São João Paulo II proclamou-a Doutora da Igreja em 1997 pela profundidade evangélica de sua 'ciência do amor' (CIC 2684).",
          },
        ],
      },
      {
        id: "joao-bosco-juventude",
        title: "São João Bosco: sistema preventivo, razão, religião e carinho",
        emoji: "⚽",
        xp: 20,
        teachings: [
          {
            title: "Acolher os jovens abandonados com alegria",
            text: "Na Turim industrial do século XIX, o padre João Bosco (Dom Bosco) reuniu meninos de rua e aprendizes no Oratório com escola profissional, pátio de jogos, música e catequese.",
            example:
              "Tratar crianças e jovens na comunidade com alegria acolhedora, paciência e bons exemplos.",
            source: "Mc 10,14 · CIC 2225, 2447",
          },
          {
            title: "Razão, Religião e Amorevolezza (carinho educativo)",
            text: "Em vez de castigos duros, Dom Bosco ensinou o Sistema Preventivo apoiado em três colunas: diálogo racional claro, fé alegre nos sacramentos (Confissão e Eucaristia) e carinho paternal que faz o jovem sentir-se amado.",
            example:
              "Educar filhos, alunos ou catequizandos explicando o porquê, rezando por eles e mostrando afeto respeitoso.",
            source: "Ef 6,4 · CIC 2223, 2228",
          },
          {
            title: "As duas colunas da Igreja: Eucaristia e Maria Auxiliadora",
            text: "Num famoso sonho, Dom Bosco viu o barco da Igreja atravessando tempestades ancorado entre duas grandes colunas: a Hóstia Eucarística e a Virgem Maria Auxiliadora.",
            example:
              "Buscar firmeza nas tempestades da vida mantendo a frequência à Missa e a devoção a Maria.",
            source: "Mt 16,18 · CIC 969, 1324",
          },
        ],
        questions: [
          {
            prompt:
              "Quais são os três pilares do 'Sistema Preventivo' de educação de São João Bosco?",
            options: [
              "Medo, castigo e isolamento",
              "Razão, Religião e Amorevolezza (carinho educativo)",
              "Competição, dinheiro e pressa",
              "Silêncio absoluto e ausência de jogos",
            ],
            answer: 1,
            explanation:
              "Dom Bosco educava prevenindo o erro pela presença amiga, pelo diálogo racional, pela caridade e pelos sacramentos (CIC 2223, 2228).",
          },
          {
            prompt:
              "Quais duas 'colunas' sustentavam o barco da Igreja no famoso sonho de Dom Bosco?",
            options: [
              "Ouro e exércitos",
              "A Eucaristia e Nossa Senhora (Maria Auxiliadora)",
              "Apenas leis civis",
              "Bancos e escolas técnicas",
            ],
            answer: 1,
            explanation:
              "Cristo presente na Eucaristia e a proteção materna de Maria mantêm firme a Igreja nas provas da história (CIC 969, 1324).",
          },
          {
            prompt: "Qual conselho simples Dom Bosco repetia aos jovens sobre santidade?",
            options: [
              "Ficar triste o dia inteiro",
              "Alegria, estudo/dever bem cumprido e oração (piedade)",
              "Evitar os amigos",
              "Esperar a velhice para confessar",
            ],
            answer: 1,
            explanation:
              "Dom Bosco mostrava que a santidade juvenil floresce na alegria limpa, nos deveres diários e na amizade com Jesus (CIC 2013).",
          },
        ],
      },
      {
        id: "vicente-paulo-frederico-ozanam",
        title: "São Vicente de Paulo e Beato Frederico Ozanam: caridade organizada",
        emoji: "🥖",
        xp: 20,
        teachings: [
          {
            title: "Os pobres são nossos senhores e mestres",
            text: "No século XVII, São Vicente de Paulo organizou a caridade junto com Santa Luísa de Marillac, lembrando que devemos servir aos pobres com delicadeza e respeito como servindo ao próprio Jesus.",
            example:
              "Ao ajudar alguém em necessidade, conversar com respeito olhando nos olhos e preservando sua dignidade.",
            source: "Mt 25,40 · CIC 2443, 2447",
          },
          {
            title: "Leigos jovens servindo nas casas das famílias",
            text: "No século XIX em Paris, o jovem estudante Frederico Ozanam e amigos fundaram as Conferências de São Vicente de Paulo (Vicentinos) para levar não só pão e lenha, mas amizade pessoal às famílias.",
            example:
              "Conhecer e apoiar o trabalho das conferências vicentinas ou pastorais sociais da própria cidade.",
            source: "Tg 2,15-17 · CIC 900, 2447",
          },
          {
            title: "Caridade exige justiça social também",
            text: "A caridade cristã socorre a fome urgente hoje e, ao mesmo tempo, busca justiça social, educação e emprego para que as famílias caminhem com autonomia.",
            example:
              "Ajudar além da esmola pontual quando possível: orientando, indicando trabalho ou apoiando a educação.",
            source: "1Jo 3,18 · CIC 1941, 2446",
          },
        ],
        questions: [
          {
            prompt: "Como São Vicente de Paulo ensinava a enxergar e tratar as pessoas pobres?",
            options: [
              "Com pressa distante",
              "Com profunda reverência e delicadeza, vendo nelas a presença de Cristo",
              "Apenas mandando cartas de longe",
              "Só ajudando quem já tem emprego",
            ],
            answer: 1,
            explanation:
              "A caridade vicentina reconhece nos pobres os membros sofredores de Cristo e os serve com amor respeitoso (CIC 2444, 2447).",
          },
          {
            prompt:
              "Quem fundou, ainda jovem universitário em Paris, as Conferências de São Vicente de Paulo?",
            options: [
              "Beato Frederico Ozanam e companheiros leigos",
              "São Bento de Núrsia",
              "São Jerônimo",
              "O rei Luís IX",
            ],
            answer: 0,
            explanation:
              "Frederico Ozanam respondeu às críticas contra a fé cristã organizando jovens leigos para visitar e servir famílias pobres (CIC 900, 2447).",
          },
          {
            prompt:
              "Qual é a relação entre esmola/assistência imediata e justiça social segundo a Igreja?",
            options: [
              "São opostas",
              "Complementam-se: socorremos a necessidade urgente e trabalhamos por estruturas sociais mais justas",
              "A justiça dispensa a caridade pessoal",
              "Nenhuma das duas importa",
            ],
            answer: 1,
            explanation:
              "A caridade nunca substitui a justiça devida, mas a eleva e completa com amor pessoal fraterno (CIC 1941, 2446).",
          },
        ],
      },
    ],
  },
  {
    id: "concilio-vaticano-ii",
    title: "O Concílio Vaticano II e a Igreja Hoje",
    emoji: "🌍",
    lessons: [
      {
        id: "vaticano-ii-sentido",
        title: "O que foi o Concílio Vaticano II (1962–1965)",
        emoji: "🏛️",
        xp: 20,
        teachings: [
          {
            title: "Voltar às fontes para anunciar Cristo ao mundo atual",
            text: "Convocado por São João XXIII e concluído por São Paulo VI, o Concílio Vaticano II reuniu bispos de todos os continentes para renovar a vida da Igreja voltando à Bíblia, aos Padres e à Liturgia.",
            example:
              "Apreciar como a Igreja une fidelidade às raízes apostólicas e abertura pastoral para dialogar hoje.",
            source: "Mt 13,52 · CIC 10, 884",
          },
          {
            title: "A Igreja como Povo de Deus e Sacramento de Salvação",
            text: "Na constituição Lumen Gentium, o Concílio destacou a Igreja como mistério de comunhão da Trindade e Povo de Deus peregrino em que todos — bispos, padres, religiosos e leigos — são chamados à santidade.",
            example: "Assumir seu papel ativo como membro vivo do Povo de Deus pelo Batismo.",
            source: "1Pd 2,9 · CIC 775, 782, 2013",
          },
          {
            title: "Dei Verbum: a Bíblia nas mãos e no coração do povo",
            text: "O Concílio impulsionou a tradução e leitura acessível das Escrituras nas línguas locais e a homilia fiel ao texto sagrado.",
            example:
              "Fazer da leitura bíblica um hábito familiar simples, agradecendo esse fruto do Concílio.",
            source: "2Tm 3,16 · CIC 131-133",
          },
        ],
        questions: [
          {
            prompt: "Qual foi o principal objetivo do Concílio Vaticano II (1962–1965)?",
            options: [
              "Mudar os dogmas do Credo antigo",
              "Renovar pastoralmente a Igreja em fidelidade às fontes bíblicas e patrísticas para anunciar Cristo ao mundo contemporâneo",
              "Fechar todas as paróquias",
              "Reduzir o número de sacramentos",
            ],
            answer: 1,
            explanation:
              "O Vaticano II aprofundou o mistério da Igreja, renovou a liturgia e abriu caminhos de evangelização em fidelidade à Tradição (CIC 10, 775).",
          },
          {
            prompt:
              "Qual ensinamento fundamental sobre os fiéis foi ressaltado pela constituição Lumen Gentium?",
            options: [
              "Que só padres são chamados à santidade",
              "O chamado universal de todos os batizados à santidade e ao apostolado no único Povo de Deus",
              "Que os leigos não fazem parte da Igreja",
              "Que os sacramentos são opcionais",
            ],
            answer: 1,
            explanation:
              "Todos os fiéis de qualquer estado são chamados à plenitude da caridade cristã (CIC 782, 2013).",
          },
          {
            prompt: "Quem convocou e abriu o Concílio Vaticano II, e quem o concluiu?",
            options: [
              "São João XXIII o convocou e abriu; São Paulo VI o conduziu à conclusão",
              "Santo Agostinho o convocou",
              "São Tomás de Aquino o encerrou",
              "Foi convocado no século XIII",
            ],
            answer: 0,
            explanation:
              "São João XXIII convocou o Concílio e São Paulo VI promulgou seus documentos finais e impulsionou sua aplicação (CIC 10-11).",
          },
        ],
      },
      {
        id: "sacrosanctum-concilium-liturgia",
        title: "Participação consciente e ativa na Liturgia",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Participação plena, consciente e ativa",
            text: "A constituição Sacrosanctum Concilium recordou que a liturgia é fonte e ápice da vida da Igreja, pedindo que todo o povo participe de modo consciente, piedoso e ativo — não como espectadores mudos.",
            example:
              "Responder às preces, cantar junto, ouvir as leituras com atenção e guardar momentos de silêncio na Missa.",
            source: "1Cor 14,16 · CIC 1071, 1140",
          },
          {
            title: "Riqueza da mesa da Palavra aos domingos",
            text: "Após o Concílio, o ciclo trienal das leituras (Anos A, B e C) abriu muito mais amplamente os tesouros da Bíblia na Santa Missa dominical.",
            example:
              "Ler as leituras do domingo já no sábado à noite em casa para aproveitar melhor a Missa.",
            source: "Lc 24,27 · CIC 1154, 1349",
          },
          {
            title: "Participação interior é o mais importante",
            text: "Participar ativamente não significa apenas ter microfone na mão ou fazer muitas agitações externas: significa unir o próprio coração e a própria vida à oração de Cristo no altar.",
            example:
              "Chegar em paz e unir suas intenções pessoais ao ofertório durante a celebração.",
            source: "Rm 12,1 · CIC 1071, 1350",
          },
        ],
        questions: [
          {
            prompt: "O que significa 'participação plena, consciente e ativa' na Santa Missa?",
            options: [
              "Todos falarem ao mesmo tempo fora de hora",
              "Unir mente, coração, respostas, cantos, silêncio e vida pessoal à ação sagrada de Cristo na assembleia",
              "Apenas ficar olhando o relógio em silêncio distraído",
              "Trocar a liturgia por conversas informais",
            ],
            answer: 1,
            explanation:
              "A participação litúrgica une atitude exterior orante e adesão interior profunda ao mistério pascal celebrado (CIC 1071, 1140).",
          },
          {
            prompt:
              "Qual mudança concreta aproximou os fiéis da Sagrada Escritura após o Vaticano II?",
            options: [
              "A redução das leituras bíblicas",
              "A ampliação do lecionário em ciclos (Anos A, B e C) e a proclamação na língua do povo",
              "A proibição do Antigo Testamento na Missa",
              "O fim dos Salmos",
            ],
            answer: 1,
            explanation:
              "Abriu-se mais ricamente a mesa da Palavra de Deus para nutrir continuamente os fiéis ao longo do ano litúrgico (CIC 131, 1154).",
          },
          {
            prompt:
              "Qual frase resume a importância da Liturgia na vida da Igreja segundo Sacrosanctum Concilium?",
            options: [
              "É apenas um complemento opcional",
              "É o cume para o qual tende a ação da Igreja e a fonte de onde emana toda a sua força",
              "Serve somente para iniciantes",
              "Substitui as obras de misericórdia",
            ],
            answer: 1,
            explanation:
              "Toda a atividade evangelizadora e caritativa da Igreja encontra na Liturgia — especialmente na Eucaristia — sua fonte e ápice (CIC 1074, 1324).",
          },
        ],
      },
      {
        id: "catecismo-igreja-catolica",
        title: "O Catecismo da Igreja Católica e suas quatro partes",
        emoji: "📘",
        xp: 20,
        teachings: [
          {
            title: "Fruto maduro do Concílio para o nosso tempo",
            text: "Publicado em 1992 por São João Paulo II sob o cuidado do cardeal Ratzinger (depois Bento XVI), o Catecismo da Igreja Católica expõe com clareza a fé católica para todo o mundo.",
            example:
              "Ter o Catecismo em casa ou consultar as referências (CIC) mostradas ao final de cada lição do Lumen.",
            source: "Mt 28,20 · CIC 11-12",
          },
          {
            title: "Quatro pilares que organizam toda a vida cristã",
            text: "O Catecismo divide-se em quatro partes clássicas: 1) A Profissão de Fé (Credo — o que cremos); 2) Os Sacramentos (como celebramos); 3) A Vida em Cristo (Mandamentos — como vivemos); 4) A Oração Cristã (Pai-Nosso — como rezamos).",
            example:
              "Perceber como crer, celebrar, agir e rezar formam uma unidade harmoniosa na vida diária.",
            source: "At 2,42 · CIC 13-17",
          },
          {
            title: "Sinfonia da fé centrada em Cristo",
            text: "O Catecismo não é um código frio: cada parte remete ao rosto vivo de Jesus Cristo — acreditado no Credo, encontrado nos Sacramentos, seguido nos Mandamentos e amado na Oração.",
            example: "Ler um parágrafo pequeno do Catecismo por dia como alimento seguro da fé.",
            source: "Jo 14,6 · CIC 25, 426",
          },
        ],
        questions: [
          {
            prompt: "Quais são os quatro pilares que estruturam o Catecismo da Igreja Católica?",
            options: [
              "Economia, história, arquitetura e música",
              "Profissão de Fé (Credo), Celebração do Mistério (Sacramentos), Vida em Cristo (Mandamentos) e Oração Cristã (Pai-Nosso)",
              "Apenas leis antigas e datas",
              "Somente comentários políticos",
            ],
            answer: 1,
            explanation:
              "As quatro partes do Catecismo retomam a síntese tradicional da catequese desde os Padres e do Concílio de Trento (CIC 13-17).",
          },
          {
            prompt:
              "Quem promulgou o Catecismo da Igreja Católica em 1992 como fruto do Concílio Vaticano II?",
            options: ["São João Paulo II", "Santo Ambrósio", "São Bento", "São Clemente de Roma"],
            answer: 0,
            explanation:
              "São João Paulo II promulgou o Catecismo em 1992 como instrumento seguro para a comunhão na fé e a catequese universal (CIC 11-12).",
          },
          {
            prompt: "Qual é o centro que unifica todas as quatro partes do Catecismo?",
            options: [
              "Regras administrativas",
              "A Pessoa viva de Jesus Cristo, Caminho, Verdade e Vida",
              "Apenas costumes europeus",
              "Teorias passageiras",
            ],
            answer: 1,
            explanation:
              "O coração da catequese é colocar alguém em comunhão e intimidade com Jesus Cristo (CIC 426).",
          },
        ],
      },
    ],
  },
  {
    id: "santos-brasil",
    title: "Santos e Beatos do Brasil (Frei Galvão, Santa Dulce, Paulina)",
    emoji: "🇧🇷",
    lessons: [
      {
        id: "frei-galvao-brasil",
        title: "Santo Antônio de Sant'Ana Galvão: o primeiro santo brasileiro",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "De Guaratinguetá ao serviço humilde em São Paulo",
            text: "Nascido em Guaratinguetá (SP) em 1739, Frei Galvão tornou-se frade franciscano, confessor incansável, conselheiro das famílias e fundador do Recolhimento da Luz, dedicado à oração e acolhida.",
            example:
              "Buscar o sacramento da Confissão com regularidade, agradecendo pelos padres que dedicam horas ao confessionário.",
            source: "Mt 5,9 · CIC 1465, 2013",
          },
          {
            title: "Homem de paz, caridade e devoção à Imaculada",
            text: "Frei Galvão era procurado por pobres e governantes pela sabedoria mansa, construiu com as próprias mãos o mosteiro da Luz em São Paulo e nutria profunda devoção a Nossa Senhora Imaculada.",
            example:
              "Levar serenidade e respeito aos ambientes divididos, trabalhando com paciência pela paz.",
            source: "Lc 1,48 · CIC 971, 2305",
          },
          {
            title: "As pílulas de papel como sinal de fé simples",
            text: "Para confortar doentes que o procuravam, Frei Galvão escrevia em pequenos papéis uma breve oração mariana ('Depois do parto, ó Virgem, permaneceste intacta...'), recordando que quem cura é Deus mediante a fé orante.",
            example:
              "Lembrar sempre que qualquer sinal devocional só tem valor como expressão de fé e oração confiante a Deus.",
            source: "Tg 5,14-15 · CIC 1670, 2616",
          },
        ],
        questions: [
          {
            prompt:
              "Qual marca espiritual distinguia Santo Antônio de Sant'Ana Galvão no Brasil do século XVIII?",
            options: [
              "Vida militar distante da Igreja",
              "Espírito franciscano de paz, dedicação incansável ao confessionário, caridade e devoção mariana",
              "Isolamento completo sem atender ninguém",
              "Recusa de construir mosteiros",
            ],
            answer: 1,
            explanation:
              "Canonizado em 2007 no Brasil, Frei Galvão testemunhou mansidão, vida de oração, pobreza e serviço fraterno (CIC 915, 2305).",
          },
          {
            prompt: "Como devemos compreender devocionalmente as 'pílulas de Frei Galvão'?",
            options: [
              "Como remédio mágico sem Deus",
              "Como um gesto simples de fé que acompanha a oração confiante pedindo a intercessão de Maria e a graça de Deus",
              "Como substituto de médicos e tratamentos",
              "Como um sacramento novo",
            ],
            answer: 1,
            explanation:
              "A fé católica une confiança orante na intercessão dos santos ao cuidado prudente da saúde, sem superstição (CIC 1670, 2288).",
          },
          {
            prompt:
              "Qual legado arquitetônico e espiritual em São Paulo está diretamente ligado a Frei Galvão?",
            options: [
              "O Mosteiro da Luz, onde até hoje vivem monjas concepcionistas em oração",
              "A primeira estação ferroviária",
              "O porto de Santos",
              "Um estádio antigo",
            ],
            answer: 0,
            explanation:
              "O Mosteiro da Luz preserva a memória viva do santo brasileiro e da vida contemplativa no coração da cidade (CIC 925).",
          },
        ],
      },
      {
        id: "santa-paulina-coracao",
        title: "Santa Paulina do Coração Agonizante de Jesus",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Imigrante humilde que cuidou dos mais abandonados",
            text: "Vinda da Itália para Santa Catarina com a família ainda menina, Amábile Visintainer trabalhou na roça e depois abrigou uma senhora doente de câncer num pequeno casebre — origem de sua congregação.",
            example:
              "Começar o bem com o pouco que já temos hoje, sem esperar condições ideais para ajudar alguém.",
            source: "Mt 25,36 · CIC 2447",
          },
          {
            title: "Nunca desanimar nas provações e humilhações",
            text: "Mesmo após ser injustamente afastada do cargo que fundou e perder a visão e um braço na velhice, Madre Paulina obedeceu em silêncio manso, servindo na cozinha e na enfermaria sem amargura.",
            example:
              "Responder às injustiças ou mudanças difíceis com humildade e confiança serena em Deus.",
            source: "1Pd 2,21-23 · CIC 2015, 2559",
          },
          {
            title: "Nunca, nunca desanimeis, embora venham os ventos",
            text: "A palavra que Santa Paulina repetia às irmãs ecoa para nós hoje: confiança firme na Providência mesmo quando sopram ventos contrários.",
            example:
              "Repetir o lema de Santa Paulina nos momentos de cansaço para seguir em frente fazendo o bem.",
            source: "Rm 8,28 · CIC 305, 1817",
          },
        ],
        questions: [
          {
            prompt:
              "Como começou na prática a obra religiosa de Santa Paulina em Nova Trento (SC)?",
            options: [
              "Com uma doação milionária do governo",
              "Acolhendo e cuidando pessoalmente de uma mulher doente de câncer em um pequeno casebre",
              "Construindo primeiro uma grande universidade",
              "Mudando-se para a Itália imediatamente",
            ],
            answer: 1,
            explanation:
              "Os grandes frutos da caridade cristã começam muitas vezes com um único gesto fiel de compaixão concreta (Mt 25,40; CIC 2447).",
          },
          {
            prompt:
              "Como Santa Paulina reagiu quando foi afastada da direção da congregação que fundara?",
            options: [
              "Criou um grupo rival com raiva",
              "Aceitou com obediência humilde e continuou servindo na cozinha e cuidando dos idosos e doentes",
              "Abandonou a vida religiosa",
              "Deixou de rezar",
            ],
            answer: 1,
            explanation:
              "Sua mansidão na humilhação revelou a pureza de quem servia somente por amor a Jesus, não por cargo (CIC 2015, 2559).",
          },
          {
            prompt:
              "Qual é uma das frases mais lembradas de Santa Paulina para fortalecer a esperança?",
            options: [
              "'Nunca, nunca desanimeis, embora venham os ventos'",
              "'Desistam quando ficar difícil'",
              "'Só os perfeitos vencem'",
              "'Não confiem em ninguém'",
            ],
            answer: 0,
            explanation:
              "A esperança cristã confia na fidelidade de Deus em meio às tempestades e contrariedades da vida (CIC 1817).",
          },
        ],
      },
      {
        id: "santa-dulce-pobres",
        title: "Santa Dulce dos Pobres: amar e servir na Bahia",
        emoji: "🤲",
        xp: 20,
        teachings: [
          {
            title: "Do galinheiro ao hospital que não fecha as portas",
            text: "Quando não havia mais vagas para seus doentes em Salvador, Irmã Dulce abrigou setenta pessoas no galinheiro do convento. Daquela semente humilde nasceu um dos maiores complexos filantrópicos de saúde do Brasil.",
            example:
              "Usar criatividade e persistência amorosa para socorrer quem precisa em nossa própria cidade.",
            source: "Mt 25,35-40 · CIC 2444, 2447",
          },
          {
            title: "O importante é fazer a caridade, não importa a crítica",
            text: "Com saúde frágil e poucos recursos, Santa Dulce pedia ajuda a empresários, políticos e vizinhos para manter leitos abertos, dizendo que o amor vence toda barreira.",
            example:
              "Não ter vergonha de mobilizar amigos e vizinhos em campanhas concretas para ajudar famílias necessitadas.",
            source: "1Jo 3,18 · CIC 1941, 2447",
          },
          {
            title: "Unir Eucaristia diária e cuidado aos últimos",
            text: "Irmã Dulce madrugava diante do sacrário antes de sair pelas enfermarias e ruas: a força para amar sem medida vinha da Missa e da oração diárias.",
            example:
              "Unir sempre a oração diante de Jesus ao serviço concreto às pessoas concretas ao redor.",
            source: "Jo 15,5 · CIC 1397, 2074",
          },
        ],
        questions: [
          {
            prompt:
              "Qual episódio famoso simboliza a persistência criativa de Santa Dulce dos Pobres pelos doentes?",
            options: [
              "Fechar o convento aos visitantes",
              "Abrigar setenta doentes sem vaga no antigo galinheiro do convento até conseguir construir um hospital",
              "Viajar para longe da Bahia",
              "Recusar doações da comunidade",
            ],
            answer: 1,
            explanation:
              "Santa Dulce não aceitou deixar os doentes desamparados na rua, transformando a caridade prática em obra duradoura (CIC 2444, 2447).",
          },
          {
            prompt:
              "Qual era a fonte interior que sustentava a energia de Santa Dulce apesar da saúde frágil?",
            options: [
              "Apenas ambição pessoal",
              "A intimidade diária com Jesus na oração, na Eucaristia e na devoção a Santo Antônio",
              "Recursos financeiros ilimitados da própria família",
              "Indiferença às dificuldades",
            ],
            answer: 1,
            explanation:
              "Na Eucaristia e na oração silenciosa, Santa Dulce recebia a força para reconhecer e amar Cristo nos mais pobres (CIC 1397).",
          },
          {
            prompt:
              "Além de Frei Galvão, Santa Paulina e Santa Dulce, que outros testemunhos brilham no Brasil?",
            options: [
              "Nenhum outro cristão existiu aqui",
              "Os Santos Mártires de Cunhaú e Uruaçu, São José de Anchieta e muitos beatos como Padre Donizetti e Nhá Chica",
              "Apenas personagens estrangeiros",
              "Somente santos do século I",
            ],
            answer: 1,
            explanation:
              "A santidade floresceu em todo o Brasil através de mártires, missionários, leigas negras como a Beata Nhá Chica e pastores humildes (CIC 828).",
          },
        ],
      },
    ],
  },
  {
    id: "maria-titulos-santuarios",
    title: "Títulos Marianos e Grandes Santuários",
    emoji: "🌹",
    lessons: [
      {
        id: "aparecida-guadalupe",
        title: "Nossa Senhora Aparecida e Nossa Senhora de Guadalupe",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "Guadalupe (1531): a Mãe que fala na língua dos pequenos",
            text: "No México, Maria apareceu ao indígena São João Diego como mestiça vestida de símbolos locais e pediu um templo de acolhida: 'Não estou eu aqui, que sou tua mãe?'.",
            example:
              "Lembrar das palavras maternas de Guadalupe em momentos de solidão ou preocupação.",
            source: "Jo 19,27 · CIC 969, 971",
          },
          {
            title: "Aparecida (1717): encontrada nas redes de pescadores simples",
            text: "Três pescadores pobres tiraram do rio Paraíba do Sul primeiro o corpo e depois a cabeça da imagem quebrada da Imaculada Conceição — e logo a pesca veio abundante. O povo brasileiro reconheceu nela a mãe próxima.",
            example:
              "Confiar a Deus e a Nossa Senhora Aparecida as lutas diárias pelo trabalho e pela família.",
            source: "Lc 1,48-52 · CIC 971",
          },
          {
            title: "Santuários: lugares de reconciliação e retorno",
            text: "Milhões vão a Aparecida, Guadalupe e santuários diocesanos para confessar-se, participar da Missa e renovar a esperança. A devoção mariana verdadeira sempre leva aos sacramentos.",
            example:
              "Quando visitar um santuário, aproveitar para rezar em silêncio e buscar a Confissão ou a Eucaristia.",
            source: "Jo 2,5 · CIC 1674, 2679",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a frase consoladora de Nossa Senhora de Guadalupe a São João Diego em 1531?",
            options: [
              "'Não te preocupes apenas com riquezas'",
              "'Não estou eu aqui, que sou tua mãe? Não estás sob o meu manto?'",
              "'Volte apenas no próximo século'",
              "'Esconda sua origem indígena'",
            ],
            answer: 1,
            explanation:
              "A ternura materna de Maria em Guadalupe acolheu os povos indígenas e mestiços conduzindo milhões a Cristo (CIC 969, 971).",
          },
          {
            prompt:
              "Quem encontrou a imagem de Nossa Senhora Aparecida no rio Paraíba do Sul em 1717?",
            options: [
              "Três pescadores humildes (Domingos, Filipe e João)",
              "Governadores reais em viagem",
              "Um exército de cavalaria",
              "Arqueólogos estrangeiros",
            ],
            answer: 0,
            explanation:
              "Deus escolheu simples pescadores para revelar o sinal de cuidado materno que marcou a fé do Brasil (Lc 1,52; CIC 971).",
          },
          {
            prompt:
              "Qual é o objetivo espiritual mais autêntico das romarias a santuários marianos?",
            options: [
              "Turismo sem oração",
              "Conversão do coração, oração, Confissão e encontro com Jesus na Eucaristia",
              "Comprar lembranças sem fé",
              "Substituir a vida na própria paróquia",
            ],
            answer: 1,
            explanation:
              "A piedade popular nos santuários deve sempre conduzir à graça dos sacramentos e à caridade na vida cotidiana (CIC 1674-1676).",
          },
        ],
      },
      {
        id: "lourdes-fatima",
        title: "Lourdes e Fátima: apelos de conversão, oração e paz",
        emoji: "📿",
        xp: 20,
        teachings: [
          {
            title: "Lourdes (1858): Eu sou a Imaculada Conceição",
            text: "À jovem pobre Santa Bernadette Soubirous em Lourdes (França), Maria confirmou o dogma proclamado quatro anos antes e pediu oração e penitência pelos pecadores, brotando ali uma fonte ligada à cura e cuidado dos enfermos.",
            example: "Rezar pelos doentes e por quem cuida deles nos hospitais e em casa.",
            source: "Tg 5,14 · CIC 491, 1508",
          },
          {
            title: "Fátima (1917): rezar o Terço pela paz e conversão",
            text: "Em plena Primeira Guerra Mundial, Maria confiou aos três pastorinhos — Lúcia, Francisco e Jacinta — um apelo claro ao Evangelho: oração do Terço todo dia, conversão e oferta de sacrifícios pela paz no mundo.",
            example:
              "Rezar ao menos uma dezena do Terço pedindo a paz nos países em guerra e nas famílias.",
            source: "Mc 1,15 · CIC 67, 2678",
          },
          {
            title: "Como a Igreja vê as aparições aprovadas",
            text: "Aparições aprovadas pela Igreja são chamadas 'revelações privadas': elas não acrescentam nada à Revelação pública de Cristo (encerrada nos Apóstolos), mas ajudam a viver melhor o Evangelho em certa época.",
            example:
              "Acolher com equilíbrio as mensagens aprovadas, mantendo sempre a Escritura, o Credo e os Sacramentos no centro.",
            source: "Jo 16,13 · CIC 67",
          },
        ],
        questions: [
          {
            prompt:
              "Segundo o Catecismo (CIC 67), qual é o papel das chamadas 'revelações privadas' como Lourdes ou Fátima?",
            options: [
              "Completam ou corrigem o Evangelho que teria ficado incompleto",
              "Não pertencem ao depósito da fé, mas ajudam os fiéis a viver mais plenamente o Evangelho de Cristo em determinada época",
              "Têm autoridade superior à Bíblia",
              "Substituem a Santa Missa",
            ],
            answer: 1,
            explanation:
              "A Revelação pública está completa em Cristo; aparições reconhecidas pela Igreja orientam para a conversão e a oração evangélica (CIC 67).",
          },
          {
            prompt: "Qual apelo central atravessa as aparições de Lourdes (1858) e Fátima (1917)?",
            options: [
              "Conversão do pecado, oração perseverante (especialmente o Terço), penitência e súplica pela paz",
              "Previsão de sorte financeira",
              "Abandono da Confissão",
              "Afastamento da Igreja Católica",
            ],
            answer: 0,
            explanation:
              "Ambas recordam o chamado central de Jesus no início do Evangelho: 'Convertei-vos, rezai e acreditai na Boa Nova' (CIC 67, 1430).",
          },
          {
            prompt: "Qual verdade de fé Maria declarou em Lourdes à jovem Bernadette em 1858?",
            options: [
              "'Eu sou a Imaculada Conceição'",
              "'Construam um palácio real'",
              "'Esqueçam o Batismo'",
              "'Não procurem os padres'",
            ],
            answer: 0,
            explanation:
              "A expressão 'Eu sou a Imaculada Conceição' confirmou na simplicidade de Bernadette a fé proclamada pela Igreja em 1854 (CIC 491).",
          },
        ],
      },
      {
        id: "titulos-marianos-fe",
        title: "Os títulos de Maria na oração da Igreja",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Muitas invocações, uma única Mãe de Jesus",
            text: "Nossa Senhora do Carmo, das Graças, do Perpétuo Socorro, de Nazaré, Rainha da Paz, Aparecida... Não são 'várias santas diferentes': são títulos carinhosos da mesma e única Mãe de Jesus.",
            example:
              "Explicar com simpatia a quem perguntar que todos os títulos marianos celebram a mesma Mãe de Jesus.",
            source: "Lc 1,43 · CIC 963-971",
          },
          {
            title: "Mãe da Igreja e Auxiliadora dos Cristãos",
            text: "São Paulo VI proclamou solenemente Maria 'Mãe da Igreja': como mãe de Cristo Cabeça, ela acompanha com amor materno todos os membros do seu Corpo místico.",
            example:
              "Pedir a Maria que cuide da união e santidade dos padres, famílias e jovens de nossa diocese.",
            source: "Jo 19,26 · CIC 963, 969",
          },
          {
            title: "A Salve Rainha e a oração vespertina",
            text: "Ao encerrar o dia nas Completas (Liturgia das Horas) ou ao final do Terço, a Igreja saúda Maria com cantos antigos como a 'Salve Rainha', confiando a ela nossa peregrinação até vermos Jesus.",
            example:
              "Rezar a Salve Rainha antes de dormir entregando a noite e a família a Jesus por meio de Maria.",
            source: "Ap 12,1 · CIC 971, 2677",
          },
        ],
        questions: [
          {
            prompt:
              "Por que existem tantos títulos de Nossa Senhora (Aparecida, Fátima, Carmo, Graças, Nazaré)?",
            options: [
              "Porque seriam várias mulheres santas diferentes",
              "São modos carinhosos de recordar mistérios da fé, santuários ou graças ligadas à única Maria, Mãe de Jesus",
              "Para competir com Jesus Cristo",
              "Por divisão entre dioceses",
            ],
            answer: 1,
            explanation:
              "Cada invocação honra a única Bem-Aventurada Virgem Maria em diferentes lugares históricos ou aspectos de sua missão junto a Cristo (CIC 963, 971).",
          },
          {
            prompt:
              "Que título Mariano São Paulo VI proclamou solenemente durante o Concílio Vaticano II?",
            options: [
              "Mãe da Igreja",
              "Senhora das Leis Civis",
              "Guardiã apenas de Jerusalém",
              "Rainha dos Filósofos",
            ],
            answer: 0,
            explanation:
              "Como Mãe de Cristo Cabeça, Maria é verdadeiramente Mãe de todos os membros da Igreja em seu caminho de fé (CIC 963).",
          },
          {
            prompt: "Que pedido resume o fim da oração 'Salve Rainha'?",
            options: [
              "'Dai-nos ouro na terra'",
              "'Mostrai-nos Jesus, bendito fruto do vosso ventre'",
              "'Escondei o Evangelho'",
              "'Deixai-nos sem esperança'",
            ],
            answer: 1,
            explanation:
              "Toda oração mariana autêntica culmina em Jesus, fruto bendito de seu seio e nosso único Salvador (CIC 970, 2677).",
          },
        ],
      },
    ],
  },
  {
    id: "padroeiros-juventude",
    title: "Jovens Santos (Carlo Acutis, Pier Giorgio, Maria Goretti)",
    emoji: "🌟",
    lessons: [
      {
        id: "carlo-acutis-eucaristia",
        title: "Carlo Acutis: a Eucaristia como autoestrada para o céu",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Um adolescente comum apaixonado por Jesus",
            text: "Nascido em 1991 e falecido aos 15 anos em 2006, o jovem Carlo Acutis gostava de futebol, videogames, animais e informática — e colocou a Missa diária, a Confissão e o Terço no centro da vida.",
            example:
              "Não achar que seguir Jesus exige deixar de gostar de esportes, tecnologia ou amizade saudável.",
            source: "1Tm 4,12 · CIC 1324, 2013",
          },
          {
            title: "Todos nascem originais, mas muitos morrem fotocópias",
            text: "Carlo alertava seus colegas para não copiar modas vazias que apagam nossa dignidade única dada por Deus: nossa verdadeira originalidade floresce quando deixamos Cristo agir em nós.",
            example:
              "Ter coragem de ser autêntico segundo o Evangelho em vez de seguir tudo o que está na moda nas redes.",
            source: "Rm 12,2 · CIC 1701, 2013",
          },
          {
            title: "Usar a tecnologia para o bem e a evangelização",
            text: "Programador autodidata, Carlo criou um site catalogando milagres eucarísticos pelo mundo para ajudar outros a descobrirem a presença real de Jesus na Hóstia consagrada.",
            example:
              "Usar o celular e a internet também para aprender sobre a fé e encorajar amigos no bem.",
            source: "Mt 5,14 · CIC 905, 2493",
          },
        ],
        questions: [
          {
            prompt: "Como Carlo Acutis chamava a Eucaristia em sua vida espiritual?",
            options: [
              "'Uma tradição antiga'",
              "'A minha autoestrada para o céu'",
              "'Algo só para adultos'",
              "'Um encontro opcional de férias'",
            ],
            answer: 1,
            explanation:
              "Participando da Missa diariamente e adorando o Santíssimo, Carlo testemunhou a centralidade da Eucaristia na juventude (CIC 1324, 1380).",
          },
          {
            prompt:
              "O que significa a famosa frase de Carlo Acutis 'Todos nascem como originais, mas muitos morrem como fotocópias'?",
            options: [
              "Que não devemos usar impressoras",
              "Que devemos preservar nossa vocação única em Cristo sem nos deixar moldar por modas vazias",
              "Que ninguém deve estudar os santos",
              "Que todos devem ser iguais",
            ],
            answer: 1,
            explanation:
              "Cada ser humano é amado e chamado pessoalmente por Deus; seguir o rebanho mundano afasta da verdadeira liberdade em Cristo (CIC 1701).",
          },
          {
            prompt: "Como Carlo Acutis usou seus conhecimentos de informática?",
            options: [
              "Para atacar colegas online",
              "Para criar uma exposição digital sobre os milagres eucarísticos e anunciar Jesus",
              "Para abandonar a vida paroquial",
              "Para passar noites sem dormir jogando",
            ],
            answer: 1,
            explanation:
              "Os meios digitais, usados com temperança e criatividade, podem servir ao anúncio da fé e à comunhão humana (CIC 2493).",
          },
        ],
      },
      {
        id: "pier-giorgio-frassati",
        title: "Pier Giorgio Frassati: rumo ao alto na alegria e nos pobres",
        emoji: "⛰️",
        xp: 20,
        teachings: [
          {
            title: "Verso l'alto — Rumo ao alto!",
            text: "Jovem italiano alpinista, estudante de engenharia e alegre (falecido aos 24 anos em 1925), Pier Giorgio Frassati escalava montanhas levando amigos à Missa e rezando juntos no cume.",
            example:
              "Chamar amigos de escola ou faculdade para passeios sadios e também para a Missa dominical.",
            source: "Cl 3,1 · CIC 900, 2013",
          },
          {
            title: "Servir os pobres escondido da própria família",
            text: "Embora filho de família rica e influente, Pier Giorgio usava sua mesada e voltava a pé para ajudar famílias pobres em Turim — o que muitos só descobriram no dia do funeral repleto de pobres!",
            example: "Fazer pequenos gestos generosos sem precisar contar para todo mundo.",
            source: "Mt 6,3-4 · CIC 2447",
          },
          {
            title: "Viver, e não apenas ir levando a vida",
            text: "Para Frassati, a fé católica não era um tédio cinzento: 'Viver sem fé, sem um patrimônio para defender, não é viver, é ir vegetando'.",
            example:
              "Abraçar a juventude e a fé com entusiasmo, amizade e compromisso concreto pela justiça.",
            source: "Jo 10,10 · CIC 1820, 2013",
          },
        ],
        questions: [
          {
            prompt:
              "Que expressão italiana escrita numa foto de escalada tornou-se lema de Pier Giorgio Frassati?",
            options: [
              "'Verso l'alto' (Para o alto / Rumo ao alto!)",
              "'Fique onde está'",
              "'Olhe só para baixo'",
              "'Nunca suba montanhas'",
            ],
            answer: 0,
            explanation:
              "Rumo ao alto sintetiza seu desejo de subir em direção a Deus na oração, na amizade e no serviço aos pobres (CIC 2013).",
          },
          {
            prompt:
              "O que surpreendeu a própria família rica de Pier Giorgio no dia do seu sepultamento?",
            options: [
              "Não aparecer ninguém na igreja",
              "Uma multidão imensa de pobres de Turim a quem ele ajudava discretamente todos os dias",
              "Um baú cheio de moedas guardadas",
              "Cartas contra os estudos",
            ],
            answer: 1,
            explanation:
              "Frassati praticou a caridade evangélica em segredo, servindo Cristo nos mais pobres com seu próprio tempo e recursos (CIC 2447).",
          },
          {
            prompt: "Que profissão e paixões comuns Pier Giorgio integrava com sua santidade?",
            options: [
              "Estudante de engenharia, alpinista, amigo leal e membro da Ação Católica e dos Vicentinos",
              "Monge isolado desde a infância",
              "Rei coroado",
              "Nenhum estudo nem amizade",
            ],
            answer: 0,
            explanation:
              "Seu testemunho mostra como um jovem leigo estudante pode viver intensa santidade no meio da universidade e sociedade (CIC 898, 2013).",
          },
        ],
      },
      {
        id: "maria-goretti-perdao",
        title: "Santa Maria Goretti e São Domingos Sávio: pureza e perdão",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Maria Goretti: prefiro morrer a pecar, e perdoo no fim",
            text: "Aos 11 anos, em 1902, a menina camponesa Maria Goretti defendeu sua dignidade diante de um ataque violento e, antes de morrer no hospital, perdoou de coração seu agressor desejando vê-lo no céu — levando-o anos depois à conversão!",
            example:
              "Valorizar a pureza do coração e a força milagrosa do perdão que pode converter quem feriu.",
            source: "Mt 5,8; Lc 23,34 · CIC 2337, 2844",
          },
          {
            title: "São Domingos Sávio: a alegria de um amigo de Dom Bosco",
            text: "Aluno de Dom Bosco falecido aos 14 anos, Domingos Sávio fundou a Companhia da Imaculada para ajudar os colegas nos estudos e no bom exemplo, dizendo: 'Nós fazemos consistir a santidade em estar sempre alegres!'.",
            example:
              "Ajudar um colega com dificuldade na sala de aula e construir um grupo de amizade saudável.",
            source: "Fl 4,4 · CIC 1820, 2013",
          },
          {
            title: "Jovens são capazes de grande amizade com Jesus",
            text: "Crianças, adolescentes e jovens não precisam esperar ficar mais velhos para amar Jesus de verdade e transformar seu ambiente.",
            example: "Rezar pelos adolescentes e jovens da própria família e paróquia.",
            source: "1Tm 4,12 · CIC 2013",
          },
        ],
        questions: [
          {
            prompt:
              "Qual atitude extraordinária de Santa Maria Goretti antes de morrer tocou e converteu seu agressor anos depois?",
            options: [
              "Pedir vingança severa",
              "Perdoá-lo sinceramente por amor a Jesus e desejar encontrá-lo um dia no céu",
              "Esquecer o nome de Jesus",
              "Culpar sua própria mãe",
            ],
            answer: 1,
            explanation:
              "O perdão gratuito de Maria Goretti, unido ao de Cristo na Cruz, abriu caminho para o arrependimento e conversão do criminoso (CIC 2844).",
          },
          {
            prompt:
              "Como São Domingos Sávio definia a santidade entre os jovens colegas no oratório?",
            options: [
              "Ficar triste e calado nos cantos",
              "Estar sempre alegre, cumprir bem os deveres de estudo e oração e amar os colegas",
              "Nunca brincar no pátio",
              "Criticar os professores",
            ],
            answer: 1,
            explanation:
              "Domingos Sávio mostrou que santidade juvenil combina alegria, amizade, responsabilidade nos estudos e devoção eucarística (CIC 1820, 2013).",
          },
          {
            prompt: "O que a vida de tantos jovens santos demonstra à Igreja?",
            options: [
              "Que o chamado à santidade e à amizade com Cristo é possível já na juventude",
              "Que jovens devem esperar a aposentadoria para rezar",
              "Que a pureza e o perdão são impossíveis hoje",
              "Que apenas adultos recebem o Espírito Santo",
            ],
            answer: 0,
            explanation:
              "O Espírito Santo atua com força em todas as idades, suscitando coragem, pureza e caridade já em crianças e jovens (CIC 2013).",
          },
        ],
      },
    ],
  },
  {
    id: "martires-seculo-xx",
    title: "Mártires dos Tempos Modernos (Kolbe, Edith Stein)",
    emoji: "✝️",
    lessons: [
      {
        id: "maximiliano-kolbe",
        title: "São Maximiliano Kolbe: ninguém tem amor maior",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "No lugar de um pai de família em Auschwitz",
            text: "Frade franciscano preso no campo de concentração de Auschwitz em 1941, Frei Maximiliano Kolbe deu um passo à frente quando dez prisioneiros foram condenados à morte por fome e pediu para ir no lugar de um pai de família, Franciszek Gajowniczek.",
            example:
              "Praticar a entrega diária pelas pessoas que amamos, colocando o bem do outro antes da comodidade.",
            source: "Jo 15,13 · CIC 1823, 2473",
          },
          {
            title: "Cânticos e oração dentro do calabouço da fome",
            text: "No porão escuro de punição, em vez de desespero e maldições, Kolbe conduziu os companheiros em orações, cânticos marianos e consolação até ser o último a entregar a vida.",
            example:
              "Levar serenidade cristã e esperança mesmo aos ambientes mais sombrios e tensos.",
            source: "At 16,25 · CIC 2474, 2616",
          },
          {
            title: "Só o amor é criativo",
            text: "Diante da máquina do ódio totalitário, Kolbe respondeu à mãe de todas as crueldades com a maior liberdade possível: o amor livre que se entrega pelo irmão.",
            example:
              "Lembrar nos momentos de raiva a frase de São Maximiliano: 'O ódio não é criativo; só o amor cria'.",
            source: "Rm 12,21 · CIC 1825",
          },
        ],
        questions: [
          {
            prompt:
              "Qual gesto heroico marcou a morte de São Maximiliano Kolbe em Auschwitz em 1941?",
            options: [
              "Fugir deixando seus companheiros",
              "Oferecer-se livremente para morrer no lugar de um pai de família condenado",
              "Negociar com os guardas pela própria liberdade",
              "Esconder sua condição de sacerdote",
            ],
            answer: 1,
            explanation:
              "São Maximiliano cumpriu literalmente João 15,13: 'Ninguém tem maior amor do que quem dá a vida pelos amigos' (CIC 1823, 2473).",
          },
          {
            prompt:
              "Como São Maximiliano Kolbe transformou o ambiente dos companheiros na cela da fome?",
            options: [
              "Com silêncio desesperado",
              "Conduzindo orações, hinos a Maria e consolando cada companheiro na esperança da vida eterna",
              "Reclamando sem cessar",
              "Isolando-se no canto",
            ],
            answer: 1,
            explanation:
              "Testemunhas contaram que daquela cela saíam hinos e orações serenas até o último dia, sinal da paz de Cristo (CIC 2474).",
          },
          {
            prompt: "Qual virtude teologal brilha acima de tudo no martírio de caridade de Kolbe?",
            options: [
              "A caridade levada até a doação total da vida",
              "A ambição humana",
              "A indiferença",
              "A vaidade",
            ],
            answer: 0,
            explanation:
              "A caridade é a forma e a alma de todas as virtudes e torna-se testemunho supremo no martírio (CIC 1827, 2473).",
          },
        ],
      },
      {
        id: "edith-stein-cruz",
        title: "Santa Teresa Benedita da Cruz (Edith Stein): busca da verdade",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Filósofa judia que encontrou a verdade em Cristo",
            text: "Brilhante filósofa alemã criada no judaísmo e marcada por anos de ateísmo, Edith Stein buscou honestamente a verdade até encontrar Jesus ao ler a autobiografia de Santa Teresa d'Ávila numa noite inteira.",
            example:
              "Nunca parar de buscar a verdade com honestidade intelectual e abertura do coração.",
            source: "Jo 8,32; 14,6 · CIC 159, 1785",
          },
          {
            title: "Ciência da Cruz no Carmelo",
            text: "Batizada em 1922 e depois monja carmelita com o nome de Teresa Benedita da Cruz, Edith uniu reflexão filosófica profunda, atenção às mulheres e contemplação da Cruz redentora.",
            example:
              "Unir inteligência crítica e humildade de coração diante do mistério de Cristo crucificado.",
            source: "1Cor 1,24 · CIC 159, 618",
          },
          {
            title: "Vem, vamos pelo nosso povo",
            text: "Presa pelo regime nazista por sua origem judaica em 1942 e morta em Auschwitz, deu a mão à sua irmã Rosa dizendo: 'Vem, vamos pelo nosso povo', unindo seu martírio ao povo judeu e à Igreja.",
            example:
              "Rezar pela dignidade inviolável de todo povo e contra qualquer forma de racismo e antissemitismo.",
            source: "Rm 9,1-5 · CIC 839, 1935",
          },
        ],
        questions: [
          {
            prompt:
              "Qual leitura tocou decisivamente a filósofa Edith Stein conduzindo-a ao Batismo católico?",
            options: [
              "Um tratado de economia",
              "A autobiografia ('Livro da Vida') de Santa Teresa d'Ávila",
              "Um livro de guerras antigas",
              "Nenhuma leitura",
            ],
            answer: 1,
            explanation:
              "Ao terminar o livro de Santa Teresa, Edith exclamou 'Isto é a verdade!', abraçando a fé católica com todo o coração (CIC 159).",
          },
          {
            prompt:
              "Qual frase profunda resumia sua busca espiritual antes mesmo de conhecer a fé?",
            options: [
              "'Quem busca a verdade busca a Deus, saiba disso ou não'",
              "'A verdade não existe'",
              "'Ciência e fé são inimigas'",
              "'Não vale a pena pensar'",
            ],
            answer: 0,
            explanation:
              "Porque Deus é a Verdade mesma, toda busca sincera da verdade encaminha o coração para o encontro com Ele (CIC 159, 2465).",
          },
          {
            prompt:
              "Como Edith Stein (Teresa Benedita da Cruz) enfrentou a prisão rumo a Auschwitz em 1942?",
            options: [
              "Negando suas raízes judaicas",
              "Abraçando a Cruz de Cristo em solidariedade orante com seu povo e com a Igreja",
              "Com ódio contra todos",
              "Renegando o Batismo",
            ],
            answer: 1,
            explanation:
              "Co-padroeira da Europa, uniu fidelidade cristã e amor profundo ao povo de Israel no testemunho do martírio (CIC 839, 2473).",
          },
        ],
      },
      {
        id: "oscar-romero-testemunhas-hoje",
        title: "Testemunhas contemporâneas da verdade e da paz",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "São Óscar Romero: pastor que deu a voz aos sem voz",
            text: "Arcebispo de San Salvador assassinado enquanto celebrava a Santa Missa em 1980, São Óscar Romero defendeu os camponeses, pediu o fim da violência e anunciou a paz baseada na justiça.",
            example:
              "Lembrar que defender a vida humana e os pobres nasce diretamente do Evangelho e da Eucaristia.",
            source: "Jo 10,11 · CIC 2304, 2444",
          },
          {
            title: "Mártires anônimos de todos os dias",
            text: "Muitos cristãos hoje em diversos continentes permanecem fiéis a Cristo sofrendo discriminação ou violência — e tantos outros vivem o 'martírio cotidiano' da fidelidade honesta e paciente.",
            example:
              "Rezar pelos cristãos perseguidos hoje no mundo e agradecer a liberdade religiosa que temos.",
            source: "Mt 5,10 · CIC 2473-2474",
          },
          {
            title: "Viver sem ódio na força da Páscoa",
            text: "Em todos os séculos, a marca do testemunho cristão verdadeiro é nunca odiar o perseguidor, mas perdoar e confiar na vitória final do Cordeiro.",
            example:
              "Recusar palavras de ódio em qualquer debate político ou social, defendendo o bem com firmeza mansa.",
            source: "Lc 23,34 · CIC 2303, 2844",
          },
        ],
        questions: [
          {
            prompt: "Como morreu São Óscar Romero em 1980 por defender a vida e a justiça?",
            options: [
              "Num acidente de viagem",
              "Foi assassinado junto ao altar enquanto celebrava a Santa Missa",
              "De velhice tranquila fora do país",
              "Numa disputa militar armada que liderava",
            ],
            answer: 1,
            explanation:
              "Romero entregou a vida no próprio altar eucarístico por fidelidade ao Evangelho, à paz e aos pobres oprimidos (CIC 2444, 2473).",
          },
          {
            prompt:
              "O que distingue o verdadeiro testemunho cristão diante de conflitos e injustiças?",
            options: [
              "Responder à violência com mais ódio",
              "Defender a verdade e a dignidade humana com coragem, mantendo o coração livre de ódio e pronto a perdoar",
              "Fingir que injustiças não existem",
              "Abandonar a oração",
            ],
            answer: 1,
            explanation:
              "A paz verdadeira é obra da justiça vivida na caridade que rejeita o ódio e a vingança (CIC 2303-2304).",
          },
          {
            prompt:
              "Como os cristãos de países com liberdade podem apoiar os irmãos perseguidos pela fé hoje?",
            options: [
              "Ignorando notícias do mundo",
              "Pela oração constante, solidariedade concreta e fidelidade corajosa à própria fé no dia a dia",
              "Criticando a Igreja local",
              "Escondendo a própria fé por vergonha",
            ],
            answer: 1,
            explanation:
              "Na Comunhão dos Santos, se um membro sofre, todos os membros sofrem e rezam juntos no único Corpo de Cristo (1Cor 12,26; CIC 953).",
          },
        ],
      },
    ],
  },
];
