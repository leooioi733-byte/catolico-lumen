import type { LessonUnit } from "./lesson-types";

// Unidades 94 a 110 (17 unidades de 3 lições cada = 51 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_6_UNITS: LessonUnit[] = [
  {
    id: "ano-cristao-festas",
    title: "Grandes Solenidades do Senhor",
    emoji: "👑",
    lessons: [
      {
        id: "solenidade-santissima-trindade",
        title: "Solenidade da Santíssima Trindade",
        emoji: "☀️",
        xp: 20,
        teachings: [
          {
            title: "O mistério central da fé cristã",
            text: "Celebrada no domingo após Pentecostes, a Solenidade da Santíssima Trindade contempla o único Deus em três Pessoas: Pai, Filho e Espírito Santo, comunhão eterna de amor.",
            example:
              "Fazer o Sinal da Cruz com calma e consciência, invocando o Pai, o Filho e o Espírito Santo.",
            source: "Mt 28,19 · CIC 234, 253",
          },
          {
            title: "Batizados em nome da Trindade",
            text: "Toda a vida cristã começa no Batismo em nome do Pai e do Filho e do Espírito Santo. As orações litúrgicas da Igreja sobem ao Pai, por Cristo, na unidade do Espírito.",
            example:
              "Perceber no 'Glória ao Pai' e na doxologia da Missa a estrutura trinitária da oração cristã.",
            source: "2Cor 13,13 · CIC 232, 266",
          },
          {
            title: "Imagem da comunhão na vida cotidiana",
            text: "Porque Deus é comunhão de Pessoas, o ser humano só se realiza plenamente na doação sincera de si aos outros, construindo unidade em casa e na comunidade.",
            example:
              "Buscar reconciliação e escuta na família como sinal de quem crê no Deus-Comunhão.",
            source: "Jo 17,21 · CIC 221, 1878",
          },
        ],
        questions: [
          {
            prompt:
              "Quando a Igreja celebra a Solenidade da Santíssima Trindade no calendário litúrgico?",
            options: [
              "Na Quarta-feira de Cinzas",
              "No domingo imediatamente seguinte ao Domingo de Pentecostes",
              "Na noite de Natal",
              "Na Sexta-feira Santa",
            ],
            answer: 1,
            explanation:
              "Após concluir o Tempo Pascal em Pentecostes, a Igreja contempla o mistério do único Deus em três Pessoas (CIC 234).",
          },
          {
            prompt: "O que significa professar que Deus é Trindade?",
            options: [
              "Que existem três deuses separados",
              "Que há um só Deus em três Pessoas realmente distintas: Pai, Filho e Espírito Santo",
              "Que Deus muda de forma conforme a época",
              "Que apenas o Pai é divino",
            ],
            answer: 1,
            explanation:
              "A Trindade é Una: não professamos três deuses, mas um só Deus na unidade substancial das três Pessoas divinas (CIC 253).",
          },
          {
            prompt: "Qual gesto simples e cotidiano professa explicitamente nossa fé na Trindade?",
            options: [
              "O Sinal da Cruz feito em nome do Pai, do Filho e do Espírito Santo",
              "Guardar silêncio absoluto em todas as refeições",
              "Usar apenas velas coloridas",
              "Evitar cantar hinos na igreja",
            ],
            answer: 0,
            explanation:
              "O cristão começa seu dia, suas orações e suas ações pelo Sinal da Cruz invocando a Trindade (CIC 2157).",
          },
        ],
      },
      {
        id: "solenidade-corpus-christi",
        title: "Corpus Christi: o Corpo e Sangue de Cristo",
        emoji: "🌾",
        xp: 20,
        teachings: [
          {
            title: "Festa pública da Presença Real",
            text: "Corpus Christi celebra o santíssimo Corpo e Sangue de Jesus Cristo realmente presentes na Eucaristia. Nasceu no século XIII, impulsionada por Santa Juliana de Cornillon e instituída pelo Papa Urbano IV.",
            example:
              "Participar da Missa e da procissão de Corpus Christi com recolhimento e adoração.",
            source: "Jo 6,51 · CIC 1378, 1380",
          },
          {
            title: "Procissões e tapetes nas ruas",
            text: "Levar Jesus Eucarístico em procissão pelas ruas proclama que Cristo caminha com seu povo e abençoa a cidade, as famílias e o trabalho humano.",
            example:
              "Ajudar na preparação dos tapetes ou rezar pelas intenções do bairro durante a procissão.",
            source: "1Cor 10,16-17 · CIC 1378",
          },
          {
            title: "Pão da unidade e da caridade",
            text: "Santo Agostinho lembrava que quem comunga o Corpo de Cristo compromete-se também a cuidar dos membros sofredores de Cristo que são os pobres.",
            example:
              "Unir a participação em Corpus Christi a um gesto concreto de partilha de alimentos.",
            source: "1Cor 11,23-29 · CIC 1396-1397",
          },
        ],
        questions: [
          {
            prompt: "O que a Solenidade de Corpus Christi celebra de modo especial?",
            options: [
              "A fundação de Roma",
              "A presença real do Corpo e do Sangue de Cristo na Eucaristia",
              "O fim do Antigo Testamento",
              "Apenas o início da primavera",
            ],
            answer: 1,
            explanation:
              "Em Corpus Christi a Igreja rende culto público de adoração a Cristo vivo e presente no Santíssimo Sacramento (CIC 1378).",
          },
          {
            prompt:
              "Qual atitude espiritual deve acompanhar a adoração e a procissão de Corpus Christi?",
            options: [
              "Espírito de competição artística nos tapetes",
              "Fé na presença real de Jesus e compromisso concreto de caridade com os necessitados",
              "Distração com conversas paralelas",
              "Esquecer a Santa Missa e ir apenas ao desfile",
            ],
            answer: 1,
            explanation:
              "A Eucaristia compromete com os pobres: para receber o Corpo de Cristo na verdade, reconhecemos Cristo também no irmão pequeno (CIC 1397).",
          },
          {
            prompt: "Por que a procissão eucarística percorre as ruas fora da igreja?",
            options: [
              "Por falta de espaço interno apenas",
              "Para testemunhar publicamente a fé e pedir a bênção de Cristo sobre toda a vida da cidade",
              "Para substituir o Batismo",
              "Por uma exigência civil",
            ],
            answer: 1,
            explanation:
              "A procissão manifesta a adoração devida a Cristo e consagra ao Senhor a realidade cotidiana do povo (CIC 1378).",
          },
        ],
      },
      {
        id: "solenidade-sagrado-coracao",
        title: "O Sagrado Coração de Jesus e o Cristo Rei",
        emoji: "❤️‍🔥",
        xp: 20,
        teachings: [
          {
            title: "O Coração traspassado que tanto amou",
            text: "Celebrado na sexta-feira após Corpus Christi, o Sagrado Coração de Jesus contempla o amor humano e divino de Cristo, revelado sobretudo no lado aberto na Cruz de onde jorraram sangue e água.",
            example:
              "Oferecer as alegrias e cansaços de cada dia ao Coração de Jesus, especialmente nas primeiras sextas-feiras.",
            source: "Jo 19,34 · CIC 478, 766",
          },
          {
            title: "Manso e humilde de coração",
            text: "Jesus convida os cansados e sobrecarregados a aprender Dele a mansidão e a humildade de coração, encontrando descanso para a alma.",
            example:
              "Responder com mansidão em momentos de irritação no trabalho, no trânsito ou em casa.",
            source: "Mt 11,28-30 · CIC 478",
          },
          {
            title: "Cristo Rei do Universo: coroa do ano litúrgico",
            text: "No último domingo do Tempo Comum, a Igreja celebra Jesus Cristo Rei do Universo: um Rei cujo trono é a Cruz e cujo reino é de verdade, vida, santidade, justiça, amor e paz.",
            example:
              "Encerrar o ano litúrgico perguntando: Cristo reina de fato nas minhas decisões diárias?",
            source: "Jo 18,36-37 · CIC 668, 783",
          },
        ],
        questions: [
          {
            prompt: "O que simboliza a devoção ao Sagrado Coração de Jesus segundo o Catecismo?",
            options: [
              "Apenas um sentimento romântico sem base bíblica",
              "O amor infinito humano e divino com que Jesus amou o Pai e toda a humanidade até a Cruz",
              "Um mito medieval sem relação com o Evangelho",
              "A negação da humanidade de Cristo",
            ],
            answer: 1,
            explanation:
              "Jesus amou-nos com um coração humano: seu Coração traspassado é o símbolo por excelência desse amor redentor (CIC 478).",
          },
          {
            prompt:
              "Que virtudes Jesus pede explicitamente que aprendamos do seu Coração em Mt 11,29?",
            options: [
              "Riqueza e prestígio",
              "Mansidão e humildade de coração",
              "Orgulho e dureza",
              "Indiferença diante da dor alheia",
            ],
            answer: 1,
            explanation:
              "“Aprendei de mim, que sou manso e humilde de coração, e encontrareis descanso” (Mt 11,29; CIC 478).",
          },
          {
            prompt: "Como é o reinado de Cristo celebrado na Solenidade de Cristo Rei do Universo?",
            options: [
              "Um império político baseado em armas",
              "Um reino de verdade, amor, justiça e paz que serve e se doa na Cruz",
              "Um poder restrito ao passado antigo",
              "Um título simbólico sem consequências para o cristão",
            ],
            answer: 1,
            explanation:
              "Diante de Pilatos, Jesus afirmou que seu Reino não é deste mundo e veio dar testemunho da verdade (Jo 18,36-37; CIC 668).",
          },
        ],
      },
    ],
  },
  {
    id: "liturgia-das-horas",
    title: "A Liturgia das Horas: Santificar o Tempo",
    emoji: "🕰️",
    lessons: [
      {
        id: "oficio-divino-laudes-vesperas",
        title: "O Ofício Divino: rezar com toda a Igreja",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "A oração pública de Cristo e da Igreja",
            text: "A Liturgia das Horas, também chamada Ofício Divino, é a oração oficial da Igreja para santificar todas as horas do dia e da noite, prolongando o louvor da Missa.",
            example:
              "Unir sua prece matinal e noturna à voz de cristãos do mundo inteiro que rezam os mesmos salmos.",
            source: "1Ts 5,17 · CIC 1174-1175",
          },
          {
            title: "Laudes e Vésperas: os dois polos do dia",
            text: "As Laudes consagram a manhã ao Senhor ressuscitado, enquanto as Vésperas agradecem ao entardecer pelo dia vivido e oferecem o sacrifício vespertino de louvor.",
            example:
              "Rezar ao menos as Laudes ou Vésperas em dias especiais ou uma vez por semana.",
            source: "Sl 141,2 · CIC 1177",
          },
          {
            title: "Oração também para os leigos",
            text: "Embora obrigatória para ministros ordenados e consagrados, o Concílio Vaticano II e o Catecismo recomendam vivamente que todos os fiéis leigos participem da Liturgia das Horas.",
            example: "Combinar em família ou grupo paroquial de rezar as Vésperas no domingo.",
            source: "CIC 1175",
          },
        ],
        questions: [
          {
            prompt: "Qual é a finalidade principal da Liturgia das Horas (Ofício Divino)?",
            options: [
              "Substituir a Eucaristia dominical",
              "Santificar todo o curso do dia e da noite com o louvor de Cristo e da Igreja",
              "Servir apenas como leitura histórica antiga",
              "Ser rezada somente por monges isolados",
            ],
            answer: 1,
            explanation:
              "A Liturgia das Horas destina-se a ser a oração de todo o Povo de Deus, santificando o tempo (CIC 1174-1175).",
          },
          {
            prompt:
              "Quais são as duas horas consideradas os dois eixos principais do Ofício diário?",
            options: [
              "Laudes (manhã) e Vésperas (entardecer)",
              "Apenas o meio-dia",
              "Somente a vigília de Natal",
              "Terça e Sexta exclusivamente",
            ],
            answer: 0,
            explanation:
              "As Laudes da manhã e as Vésperas da tarde são os dois polos sobre os quais gira todo o Ofício Divino (CIC 1177).",
          },
          {
            prompt: "Os fiéis leigos podem rezar a Liturgia das Horas?",
            options: [
              "Não, é proibida para quem não é padre",
              "Sim, a Igreja recomenda com alegria que também os leigos a rezem pessoalmente ou em comunidade",
              "Somente após os 60 anos",
              "Apenas em latim em mosteiros",
            ],
            answer: 1,
            explanation:
              "O Catecismo incentiva que os leigos rezem o Ofício Divino com os sacerdotes ou entre si e até sozinhos (CIC 1175).",
          },
        ],
      },
      {
        id: "salmos-horas-oracao",
        title: "Os Salmos: a escola de oração de Jesus",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "O saltério rezado por Cristo",
            text: "Os 150 Salmos foram as orações de Jesus, de Maria e dos Apóstolos. Na Liturgia das Horas, toda a Igreja reza os salmos em ciclos que atravessam cada semana.",
            example:
              "Quando faltar palavras para rezar, abrir o livro dos Salmos e deixar Deus ensinar como falar com Ele.",
            source: "Lc 24,44 · CIC 2585-2587",
          },
          {
            title: "Todas as emoções diante de Deus",
            text: "Nos Salmos encontramos louvor, gratidão, súplica na angústia, arrependimento e confiança serena. Eles purificam nossos sentimentos colocando-os diante de Deus.",
            example:
              "Rezar um salmo de confiança (como o Salmo 23 ou 91) num momento de ansiedade.",
            source: "Sl 23,1 · CIC 2588-2589",
          },
          {
            title: "Cânticos evangélicos nas Horas",
            text: "Em cada Laudes rezamos o Benedictus (cântico de Zacarias); nas Vésperas, o Magnificat (cântico de Maria); e nas Completas, o Nunc Dimittis (cântico de Simeão).",
            example: "Decorar aos poucos os três grandes cânticos do Evangelho de Lucas.",
            source: "Lc 1,46-79; 2,29-32 · CIC 1176, 2619",
          },
        ],
        questions: [
          {
            prompt: "Por que os Salmos ocupam lugar central na Liturgia das Horas?",
            options: [
              "Por serem poemas humanos recentes",
              "Porque são Palavra inspirada de Deus, rezada pelo próprio Cristo, por Maria e pela Igreja em todos os tempos",
              "Porque dispensam os Evangelhos",
              "Apenas por tradição musical",
            ],
            answer: 1,
            explanation:
              "Nos Salmos a Palavra de Deus se torna oração humana, assumida por Cristo e rezada por seu Corpo que é a Igreja (CIC 2586-2587).",
          },
          {
            prompt: "Qual cântico evangélico de Nossa Senhora é rezado todos os dias nas Vésperas?",
            options: [
              "O Benedictus",
              "O Magnificat ('A minha alma engrandece o Senhor')",
              "O Nunc Dimittis",
              "O Te Deum",
            ],
            answer: 1,
            explanation:
              "O Magnificat é o cântico da Virgem Maria entoado diariamente na oração das Vésperas (Lc 1,46-55; CIC 2619).",
          },
          {
            prompt: "O que os Salmos nos ensinam quando atravessamos tristeza, medo ou culpa?",
            options: [
              "A esconder sentimentos e fingir que nada acontece",
              "A apresentar com sinceridade e confiança todas as dores e esperanças diante de Deus",
              "A desistir de rezar nos dias difíceis",
              "A culpar o próximo",
            ],
            answer: 1,
            explanation:
              "O Saltério exprime todas as situações da vida humana diante de Deus, transformando angústia em confiança (CIC 2588).",
          },
        ],
      },
      {
        id: "completas-exame-noite",
        title: "Completas e o exame de consciência noturno",
        emoji: "🌙",
        xp: 20,
        teachings: [
          {
            title: "Entregar a noite nas mãos do Pai",
            text: "As Completas são a última oração do dia, antes de dormir. Nela fazemos o exame de consciência, pedimos perdão e confiamos nosso descanso à proteção de Deus.",
            example:
              "Antes de adormecer, substituir a última rolagem de tela por um breve exame de consciência e a Salve Rainha.",
            source: "Sl 4,9 · CIC 1177",
          },
          {
            title: "Agora, Senhor, deixais em paz o vosso servo",
            text: "O cântico do velho Simeão (Nunc Dimittis) conclui as Completas lembrando que quem viu a salvação de Cristo pode repousar em paz sob o olhar de Deus.",
            example: "Agradecer antes de dormir três graças concretas recebidas ao longo do dia.",
            source: "Lc 2,29-32 · CIC 2619",
          },
          {
            title: "Antífona mariana ao fim do dia",
            text: "Ao terminar as Completas, a Igreja se volta à Virgem Maria com uma antífona (como Salve Regina ou Sub Tuum Praesidium), pedindo sua intercessão materna durante a noite.",
            example:
              "Rezar uma Ave-Maria ou Salve Rainha pelas pessoas que passam a noite em hospitais ou aflições.",
            source: "Jo 19,27 · CIC 971, 2677",
          },
        ],
        questions: [
          {
            prompt: "Em que momento do dia a Igreja reza as Completas?",
            options: [
              "Ao despertar, antes do café",
              "À noite, antes do repouso e do sono",
              "Apenas ao meio-dia",
              "Somente na Páscoa",
            ],
            answer: 1,
            explanation:
              "As Completas encerram o dia litúrgico antes do descanso noturno, confiando a vida e o sono a Deus (CIC 1177).",
          },
          {
            prompt: "Qual é o sentido cristão do exame de consciência feito antes de dormir?",
            options: [
              "Ficar ansioso e desanimado com os próprios limites",
              "Agradecer a Deus pelos bens recebidos, reconhecer com humildade as falhas e pedir graça para recomeçar",
              "Comparar-se com os defeitos dos outros",
              "Ignorar as próprias ações",
            ],
            answer: 1,
            explanation:
              "O exame diário une gratidão e conversão humilde sob a misericórdia divina (CIC 1454, 1779).",
          },
          {
            prompt: "Qual cântico bíblico de Simeão é rezado diariamente nas Completas?",
            options: [
              "Nunc Dimittis (Lc 2,29-32)",
              "Cântico de Débora",
              "Salmo 119 inteiro",
              "Benedicite",
            ],
            answer: 0,
            explanation:
              "Simeão louva a Deus ao acolher o Menino Jesus: 'Agora, Senhor, deixais o vosso servo ir em paz' (Lc 2,29; CIC 2619).",
          },
        ],
      },
    ],
  },
  {
    id: "simbolos-liturgicos",
    title: "Símbolos da Liturgia",
    emoji: "🕯️",
    lessons: [
      {
        id: "cores-liturgicas-ano",
        title: "As cores litúrgicas e o ritmo do tempo",
        emoji: "🎨",
        xp: 20,
        teachings: [
          {
            title: "Sinais visíveis que catequizam o olhar",
            text: "Na liturgia, os paramentos dos ministros mudam de cor conforme o tempo ou festa celebrada, ajudando toda a assembleia a entrar no espírito do mistério do dia.",
            example:
              "Observar a cor da casula do sacerdote ao entrar na igreja e lembrar qual mistério celebramos.",
            source: "CIC 1145-1152",
          },
          {
            title: "Branco, verde, roxo e vermelho",
            text: "O branco (ou dourado) celebra alegria e pureza no Natal, Páscoa e santos não mártires; o verde expressa a esperança do Tempo Comum; o roxo, conversão e preparação no Advento e Quaresma; o vermelho, o fogo do Espírito Santo e o sangue dos mártires.",
            example:
              "Explicar às crianças o significado das cores litúrgicas antes da Missa de domingo.",
            source: "CIC 1152, 1168-1171",
          },
          {
            title: "Rosa: o respiro de alegria no meio da espera",
            text: "Em apenas dois domingos do ano — Gaudete (3º do Advento) e Laetare (4º da Quaresma) — o rosa pode substituir o roxo para lembrar a proximidade alegre da festa.",
            example:
              "Lembrar no domingo Gaudete e Laetare que a penitência cristã é sempre iluminada pela esperança.",
            source: "Fl 4,4 · CIC 1163, 1169",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Cores do ano litúrgico",
            instruction: "Relacione cada cor litúrgica ao tempo ou festa que ela representa.",
            pairs: [
              { id: "branco", left: "Branco", right: "Páscoa, Natal e Solenidades do Senhor" },
              { id: "verde", left: "Verde", right: "Tempo Comum, caminhada e esperança" },
              { id: "roxo", left: "Roxo", right: "Advento, Quaresma e conversão" },
              { id: "vermelho", left: "Vermelho", right: "Pentecostes, Paixão e Mártires" },
            ],
            explanation:
              "As cores litúrgicas traduzem visivelmente o caráter próprio de cada mistério celebrado ao longo do ano (CIC 1152, 1168).",
            source: "CIC 1152, 1168",
          },
        ],
        questions: [
          {
            prompt:
              "Qual cor litúrgica é própria do Tempo Comum e simboliza a esperança e o crescimento cotidiano na fé?",
            options: ["Preto", "Verde", "Vermelho", "Roxo"],
            answer: 1,
            explanation:
              "O verde acompanha o Tempo Comum, simbolizando a esperança e o amadurecimento da vida cristã (CIC 1152, 1168).",
          },
          {
            prompt: "Quando a Igreja utiliza a cor vermelha nos paramentos litúrgicos?",
            options: [
              "Apenas no Tempo Comum",
              "No Domingo de Ramos, Sexta-feira Santa, Pentecostes e festas de Mártires e Apóstolos",
              "Somente nos batizados",
              "Exclusivamente no Advento",
            ],
            answer: 1,
            explanation:
              "O vermelho evoca o fogo do Espírito Santo e o sangue derramado por Cristo e pelos mártires (CIC 1152, 2473).",
          },
          {
            prompt: "Em que ocasiões raras do ano litúrgico pode-se usar a cor rosa?",
            options: [
              "Em todas as segundas-feiras",
              "Nos domingos Gaudete (3º do Advento) e Laetare (4º da Quaresma)",
              "Apenas no dia de Finados",
              "Durante toda a oitava da Páscoa",
            ],
            answer: 1,
            explanation:
              "O rosa suaviza o roxo nos domingos de alegria no meio do Advento e da Quaresma (Fl 4,4; CIC 1163).",
          },
        ],
      },
      {
        id: "velas-incenso-agua-benta",
        title: "Velas, incenso e água benta: sinais da criação",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "A liturgia assume a criação material",
            text: "Porque Deus se fez carne, a Igreja não reza apenas com ideias abstratas: usa água, pão, vinho, óleo, cera e incenso, elevando as criaturas a sinais da graça.",
            example:
              "Fazer o Sinal da Cruz com água benta ao entrar na igreja recordando o próprio Batismo.",
            source: "Jo 8,12 · CIC 1146-1148",
          },
          {
            title: "Círio Pascal e velas do altar",
            text: "A luz acesa das velas e sobretudo o Círio Pascal proclamam que Cristo é a Luz do mundo que dissipa as trevas do pecado e da morte.",
            example:
              "Manter uma vela abençoada em casa para acender em momentos de oração em família.",
            source: "Jo 8,12 · CIC 1150, 1216",
          },
          {
            title: "Incenso: oração que sobe como perfume",
            text: "O incenso que se queima e sobe em fumaça perfumada simboliza a oração dos fiéis que se eleva até Deus e a reverência devida ao altar, ao Evangelho e à Eucaristia.",
            example:
              "Acompanhar com o coração o momento em que o altar e as oferendas são incensados na Missa.",
            source: "Sl 141,2 · Ap 8,3-4 · CIC 1150",
          },
        ],
        questions: [
          {
            prompt: "Por que nos benzemos com água benta ao entrar numa igreja católica?",
            options: [
              "Por superstição contra o azar",
              "Para recordar nosso Batismo em Cristo e purificar o coração ao entrar na assembleia",
              "Para lavar as mãos fisicamente apenas",
              "Porque substitui a Confissão sacramental",
            ],
            answer: 1,
            explanation:
              "A água benta recorda continuamente a graça do nosso Batismo e a vitória de Cristo sobre o mal (CIC 1214, 1668).",
          },
          {
            prompt:
              "O que simboliza o Círio Pascal aceso durante a Vigília Pascal e junto ao batistério?",
            options: [
              "Apenas decoração luminosa",
              "Cristo ressuscitado, Luz verdadeira que vence as trevas da morte",
              "O início do inverno",
              "A ausência de Deus",
            ],
            answer: 1,
            explanation:
              "O Círio Pascal simboliza Cristo ressuscitado, Luz do mundo, da qual também se acende a vela do batizando (CIC 1216, 1243).",
          },
          {
            prompt: "Qual é o significado bíblico do uso do incenso na liturgia?",
            options: [
              "A oração da Igreja que sobe diante de Deus como oferta agradável e sinal de adoração",
              "Um costume sem sentido espiritual",
              "Uma forma de afastar pessoas da igreja",
              "Um sinal de luto obrigatório",
            ],
            answer: 0,
            explanation:
              "Como no Salmo 141 e no Apocalipse, o incenso simboliza as orações dos santos subindo à presença de Deus (CIC 1150).",
          },
        ],
      },
      {
        id: "vestes-vasos-sagrados",
        title: "O altar, o ambão, os vasos e as vestes sagradas",
        emoji: "⛪",
        xp: 20,
        teachings: [
          {
            title: "Altar e Ambão: as duas mesas da Missa",
            text: "No presbitério destacam-se duas mesas: o Ambão, de onde se proclama a Palavra de Deus, e o Altar, mesa do sacrifício e do banquete do Corpo e Sangue de Cristo.",
            example:
              "Reverenciar o altar com inclinação profunda ou genuflexão ao passar diante do sacrário.",
            source: "Hb 13,10 · CIC 1182-1184",
          },
          {
            title: "Cálice, patena e reserva no sacrário",
            text: "Os vasos sagrados — cálice para o vinho, patena e âmbula para as hóstias — são tratados com veneração porque contêm o próprio Cristo. As hóstias consagradas ficam no sacrário, sinalizado pela lâmpada do Santíssimo.",
            example:
              "Procurar a pequena luz vermelha ou branca junto ao sacrário ao entrar na igreja para adorar Jesus ali presente.",
            source: "CIC 1183, 1379",
          },
          {
            title: "Alva, estola e casula",
            text: "A alva branca lembra a veste batismal; a estola é sinal do ministério ordenado; a casula veste o sacerdote na Missa significando a caridade de Cristo que envolve o ministro.",
            example:
              "Reconhecer que as vestes litúrgicas escondem a pessoa particular para mostrar Cristo agindo como Cabeça da Igreja.",
            source: "CIC 1548, 1581",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é o sinal que indica em uma igreja católica a presença real da Eucaristia reservada no sacrário?",
            options: [
              "Uma cadeira vazia",
              "Uma lâmpada acesa continuamente junto ao sacrário",
              "Um sino na porta",
              "Um tapete verde na entrada",
            ],
            answer: 1,
            explanation:
              "A lâmpada do Santíssimo arde continuamente perto do sacrário indicando e honrando a presença de Cristo (CIC 1183, 1379).",
          },
          {
            prompt:
              "O que representam as duas principais mesas do espaço litúrgico na Santa Missa?",
            options: [
              "Decoração arquitetônica sem função",
              "O Ambão (mesa da Palavra) e o Altar (mesa do Sacrifício e banquete eucarístico)",
              "Mesas para reuniões financeiras",
              "Lugares exclusivos para coroinhas",
            ],
            answer: 1,
            explanation:
              "A Igreja venera e nutre os fiéis tanto à mesa da Palavra no ambão quanto à mesa do Corpo de Cristo no altar (CIC 103, 1182-1184).",
          },
          {
            prompt:
              "Por que o sacerdote reveste paramentos próprios (alva, estola, casula) para celebrar a Missa?",
            options: [
              "Para exibir riqueza pessoal",
              "Para manifestar que não age em nome próprio, mas na pessoa de Cristo Cabeça a serviço da Igreja",
              "Para imitar reis antigos",
              "Porque não existe outra roupa limpa",
            ],
            answer: 1,
            explanation:
              "As vestes litúrgicas sinalizam a dignidade do serviço ministerial em nome de Cristo e da Igreja (CIC 1548).",
          },
        ],
      },
    ],
  },
  {
    id: "teologia-batismo",
    title: "A Graça e os Ritos do Batismo",
    emoji: "💧",
    lessons: [
      {
        id: "batismo-agua-espirito",
        title: "Nascer da água e do Espírito Santo",
        emoji: "🌊",
        xp: 20,
        teachings: [
          {
            title: "Porta de entrada da vida no Espírito",
            text: "O Batismo é o fundamento de toda a vida cristã e a porta que abre acesso aos demais sacramentos. Por ele nascemos de novo da água e do Espírito Santo.",
            example: "Descobrir a data do próprio Batismo e celebrá-la todos os anos com gratidão.",
            source: "Jo 3,5 · CIC 1213, 1257",
          },
          {
            title: "Perdão dos pecados e filiação divina",
            text: "O Batismo apaga o pecado original e todos os pecados pessoais cometidos antes dele, torna-nos filhos adotivos de Deus, templos do Espírito Santo e membros vivos da Igreja.",
            example:
              "Lembrar nos dias difíceis sua identidade mais profunda: sou filho amado de Deus pelo Batismo.",
            source: "Gl 3,27 · CIC 1263-1267",
          },
          {
            title: "Um caráter espiritual indelével",
            text: "O Batismo imprime na alma um selo espiritual indelével que consagra o cristão para o culto de Deus; por isso o Batismo válido nunca pode ser repetido.",
            example:
              "Rezar pelas pessoas que ainda não conhecem Jesus para que desejem a água da vida.",
            source: "Ef 1,13 · CIC 1272-1274",
          },
        ],
        questions: [
          {
            prompt: "Qual é o efeito do Batismo quanto ao pecado e à nossa relação com Deus?",
            options: [
              "Apenas dá um nome civil à criança",
              "Perdoa o pecado original e todos os pecados pessoais, tornando-nos filhos de Deus e membros da Igreja",
              "Garante que nunca mais seremos tentados",
              "Dispensa a necessidade de caridade",
            ],
            answer: 1,
            explanation:
              "Pelo Batismo todos os pecados são perdoados, nascemos como nova criatura e somos incorporados a Cristo e à Igreja (CIC 1263-1267).",
          },
          {
            prompt: "Por que a Igreja nunca rebatiza quem recebeu um Batismo válido?",
            options: [
              "Por falta de água benta",
              "Porque o Batismo imprime um caráter espiritual indelével que permanece para sempre na alma",
              "Porque só vale até os 18 anos",
              "Porque o nome muda depois",
            ],
            answer: 1,
            explanation:
              "O selo batismal ('caráter') configura a Cristo de modo definitivo e nunca se apaga (CIC 1272).",
          },
          {
            prompt: "Quem pode batizar em caso de extrema necessidade ou perigo de morte?",
            options: [
              "Ninguém além do Papa",
              "Qualquer pessoa, mesmo não batizada, desde que use água e a fórmula trinitária com a intenção do que faz a Igreja",
              "Apenas um médico formado",
              "Somente no prédio da catedral",
            ],
            answer: 1,
            explanation:
              "Em caso de necessidade, qualquer pessoa com reta intenção pode batizar derramando água e dizendo a fórmula trinitária (CIC 1256).",
          },
        ],
      },
      {
        id: "ritos-batismais-vela-veste",
        title: "Água, óleo, veste branca e vela acesa",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "O rito essencial e a fórmula trinitária",
            text: "O essencial do Batismo consiste em imergir na água ou derramá-la sobre a cabeça do candidato pronunciando: 'Eu te batizo em nome do Pai e do Filho e do Espírito Santo'.",
            example:
              "Acompanhar com atenção os sinais de um batizado quando participar na paróquia.",
            source: "Mt 28,19 · CIC 1239-1240",
          },
          {
            title: "Unções com os óleos sagrados",
            text: "Antes do banho batismal, o óleo dos catecúmenos fortalece contra o mal; depois da água, o santo Crisma unge o batizado como cristão — participante da missão de Cristo sacerdote, profeta e rei.",
            example: "Lembrar que 'cristão' significa 'ungido' como Cristo.",
            source: "1Jo 2,20 · CIC 1237, 1241",
          },
          {
            title: "Veste branca, vela acesa e padrinhos",
            text: "A veste branca proclama 'revestir-se de Cristo'; a vela acesa no Círio Pascal confia ao novo cristão (e a seus pais e padrinhos) o dever de manter acesa a chama da fé.",
            example:
              "Se você é padrinho ou madrinha, rezar frequentemente pelo afilhado e dar bom testemunho de fé.",
            source: "Gl 3,27 · CIC 1243, 1255",
          },
        ],
        questions: [
          {
            prompt: "Qual é o rito essencial sem o qual o Batismo não acontece?",
            options: [
              "A festa de recepção após a missa",
              "A imersão ou derramamento de água acompanhado da fórmula 'em nome do Pai e do Filho e do Espírito Santo'",
              "Apenas a entrega de um certificado impresso",
              "Uma oração silenciosa sem água",
            ],
            answer: 1,
            explanation:
              "O Batismo realiza-se pela água e pelas palavras trinitárias prescritas pelo Senhor (Mt 28,19; CIC 1239-1240).",
          },
          {
            prompt:
              "O que significa a unção com o santo Crisma logo após o banho de água no Batismo?",
            options: [
              "Consagra o batizado como participante da tríplice missão de Cristo: sacerdote, profeta e rei",
              "Substitui a Crisma futura completamente sem significado",
              "É apenas um perfume decorativo",
              "Serve para curar resfriados",
            ],
            answer: 0,
            explanation:
              "O óleo do Crisma significa o dom do Espírito Santo que associa o batizado a Cristo sacerdote, profeta e rei (CIC 1241).",
          },
          {
            prompt: "Qual é a missão verdadeira dos pais e padrinhos no Batismo de uma criança?",
            options: [
              "Dar apenas presentes materiais nas festas",
              "Acompanhar e educar a criança na fé cristã pelo exemplo, palavra e vida sacramental",
              "Escolher o nome civil somente",
              "Desobrigar-se da igreja após o rito",
            ],
            answer: 1,
            explanation:
              "Pais e padrinhos assumem a responsabilidade de alimentar a graça batismal até o crescimento pleno da fé (CIC 1255).",
          },
        ],
      },
      {
        id: "sacerdocio-comum-fieis",
        title: "Sacerdote, profeta e rei pelo Batismo",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "O sacerdócio comum dos fiéis",
            text: "Todo batizado participa do sacerdócio comum: oferece a Deus sua própria vida, trabalho, alegrias e sofrimentos como sacrifício espiritual agradável, unido ao sacrifício de Cristo na Missa.",
            example:
              "Antes de começar uma tarefa difícil no trabalho ou estudo, oferecê-la a Deus em união com Jesus.",
            source: "1Pd 2,9 · Rm 12,1 · CIC 1268, 1546",
          },
          {
            title: "Múnus profético: anunciar a verdade com coragem",
            text: "Pela função profética recebida no Batismo, o cristão testemunha o Evangelho com palavras coerentes e atitudes luminosas em meio ao mundo.",
            example:
              "Não ter vergonha de defender um colega injustiçado ou de falar com serenidade da própria fé.",
            source: "Mt 5,14-16 · CIC 904-905",
          },
          {
            title: "Múnus real: reinar servindo e vencendo o pecado",
            text: "Participar da realeza de Cristo significa dominar as próprias paixões desordenadas pelo autodomínio e servir os irmãos com generosidade, transformando o mundo segundo Deus.",
            example:
              "Exercer qualquer liderança ou responsabilidade como serviço humilde aos outros.",
            source: "Mc 10,45 · CIC 786, 908",
          },
        ],
        questions: [
          {
            prompt: "Em que consiste o sacerdócio comum de todos os batizados?",
            options: [
              "Em poder celebrar a Missa sem ordenação",
              "Em oferecer a própria vida, orações, trabalho e caridade como sacrifício espiritual unido a Cristo",
              "Em viver isolado da sociedade",
              "Em abolir o sacerdócio ministerial",
            ],
            answer: 1,
            explanation:
              "Embora distinto em essência do sacerdócio ministerial, o sacerdócio comum consagra toda a existência do fiel a Deus (CIC 1546-1547).",
          },
          {
            prompt: "Como o leigo batizado exerce sua missão profética no mundo?",
            options: [
              "Prevendo o futuro por superstição",
              "Pelo testemunho coerente de vida e pela palavra que anuncia Cristo no ambiente familiar e profissional",
              "Criticando tudo sem amor",
              "Silenciando sempre sobre o bem",
            ],
            answer: 1,
            explanation:
              "Os fiéis participam do múnus profético de Cristo acolhendo a fé e anunciando-a pela palavra e testemunho (CIC 904-905).",
          },
          {
            prompt: "O que significa a dimensão 'real' do Batismo cristão?",
            options: [
              "Exigir privilégios na comunidade",
              "Vencer o domínio do pecado sobre si mesmo e servir os irmãos com o coração de Cristo",
              "Buscar poder político a qualquer preço",
              "Acumular riquezas para si",
            ],
            answer: 1,
            explanation:
              "Reinar com Cristo é dominar o pecado em si pela temperança e exercer a caridade do serviço (CIC 786, 908).",
          },
        ],
      },
    ],
  },
  {
    id: "catecumenato-crisma",
    title: "O Catecumenato e os Sinais da Crisma",
    emoji: "🔥",
    lessons: [
      {
        id: "rica-iniciacao-crista",
        title: "O Catecumenato e a Iniciação Cristã de Adultos",
        emoji: "👣",
        xp: 20,
        teachings: [
          {
            title: "Um caminho gradual de encontro com Cristo",
            text: "Desde os primeiros séculos, adultos que desejavam ser cristãos percorriam o catecumenato — tempo de escuta da Palavra, conversão dos costumes e acompanhamento pela comunidade.",
            example:
              "Acolher com alegria na paróquia os catecúmenos que se preparam para os sacramentos na Páscoa.",
            source: "At 8,35-38 · CIC 1247-1248",
          },
          {
            title: "Unidade dos três sacramentos da iniciação",
            text: "Batismo, Confirmação (Crisma) e Eucaristia formam juntos os sacramentos da Iniciação Cristã: dão a vida nova, fortalecem no Espírito e alimentam com o Pão da Vida.",
            example:
              "Entender que a Crisma não é formatura da igreja, mas impulso missionário para viver a Eucaristia.",
            source: "At 8,14-17 · CIC 1212, 1285",
          },
          {
            title: "Comunidade inteira que gera novos filhos",
            text: "Toda a comunidade cristã é responsável por acolher, rezar e testemunhar a fé junto aos iniciandos, mostrando o rosto acolhedor da Igreja.",
            example:
              "Oferecer-se para ser catequista ou apoiar a catequese de adultos na sua paróquia.",
            source: "1Cor 12,13 · CIC 1253",
          },
        ],
        questions: [
          {
            prompt: "Quais são os três sacramentos da Iniciação Cristã em conjunto?",
            options: [
              "Batismo, Confissão e Matrimônio",
              "Batismo, Confirmação (Crisma) e Eucaristia",
              "Crisma, Ordem e Unção dos Enfermos",
              "Apenas Batismo e Eucaristia",
            ],
            answer: 1,
            explanation:
              "Os sacramentos da Iniciação Cristã lançam os alicerces da vida cristã: Batismo, Confirmação e Eucaristia (CIC 1212).",
          },
          {
            prompt: "O que é o catecumenato de adultos na tradição da Igreja?",
            options: [
              "Uma prova teórica feita em um único dia",
              "Um itinerário espiritual e catequético em etapas rumo aos sacramentos da iniciação cristã",
              "Um grupo exclusivo de teólogos",
              "Um costume abolido no século XX",
            ],
            answer: 1,
            explanation:
              "O Concílio Vaticano II restaurou o catecumenato por etapas, unindo catequese, oração e vida comunitária (CIC 1248).",
          },
          {
            prompt: "A Crisma significa que o jovem pode 'se formar' e parar de ir à Igreja?",
            options: [
              "Sim, encerra a vida paroquial",
              "Não; pelo contrário, fortalece a alma com o Espírito Santo para permanecer ativo na Eucaristia e na missão",
              "Sim, é uma despedida da catequese",
              "Não existe relação com a missão",
            ],
            answer: 1,
            explanation:
              "A Confirmação vincula ainda mais estreitamente o cristão à Igreja e o envia a testemunhar Cristo (CIC 1285, 1303).",
          },
        ],
      },
      {
        id: "crisma-oleo-imposicao",
        title: "Imposição das mãos e unção com o Crisma",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Imposição das mãos e o dom do Espírito",
            text: "Na Crisma, o bispo (ministro originário do sacramento) estende as mãos sobre os crismandos pedindo a efusão dos sete dons do Espírito Santo, como faziam os Apóstolos.",
            example:
              "Lembrar na oração dos dons de sabedoria, entendimento, conselho, fortaleza, ciência, piedade e temor de Deus.",
            source: "At 8,15-17 · CIC 1288, 1299",
          },
          {
            title: "Unção na fronte: marcado com o selo",
            text: "O ministro unge a testa do crismando em forma de cruz com o santo Crisma dizendo: 'Recebe, por este sinal, o Espírito Santo, o Dom de Deus'.",
            example:
              "Não ter vergonha de carregar a marca de Cristo na fronte e nas atitudes diante do mundo.",
            source: "Ef 1,13 · CIC 1300",
          },
          {
            title: "Óleo perfumado consagrado na Quinta-feira Santa",
            text: "O óleo do Crisma mistura azeite e bálsamo perfumado, consagrado pelo bispo na Missa do Crisma para exalar o 'bom odor de Cristo' no mundo.",
            example: "Participar da Missa dos Santos Óleos na Semana Santa com sua diocese.",
            source: "2Cor 2,15 · CIC 1297",
          },
        ],
        questions: [
          {
            prompt:
              "Qual é a matéria e as palavras essenciais no rito da Confirmação (Crisma) no rito latino?",
            options: [
              "Água fria sem palavras",
              "Unção com o santo Crisma na fronte com imposição da mão e as palavras 'Recebe, por este sinal, o Espírito Santo, o Dom de Deus'",
              "Apenas entrega de uma Bíblia",
              "Leitura de um discurso cívico",
            ],
            answer: 1,
            explanation:
              "O sacramento confere-se pela unção do santo Crisma na fronte, feita pela imposição da mão e pelas palavras prescritas (CIC 1300).",
          },
          {
            prompt: "Quem é o ministro originário do sacramento da Confirmação?",
            options: [
              "O sacristão",
              "O Bispo, sucessor dos Apóstolos (podendo um presbítero administrar em casos previstos)",
              "Os pais da família",
              "O prefeito da cidade",
            ],
            answer: 1,
            explanation:
              "No rito latino, o ministro ordinário da Confirmação é o bispo, manifestando a unidade apostólica da Igreja (CIC 1312-1313).",
          },
          {
            prompt: "O que simboliza o bálsamo perfumado misturado ao azeite no óleo do Crisma?",
            options: [
              "Apenas higiene pessoal",
              "O 'bom odor de Cristo' que o cristão é chamado a espalhar pela santidade e caridade",
              "Riqueza mundana",
              "Luto pela morte",
            ],
            answer: 1,
            explanation:
              "A consagração do Crisma significa a fragrância espiritual de Cristo comunicada aos crismados (2Cor 2,15; CIC 1294, 1297).",
          },
        ],
      },
      {
        id: "testemunho-adulto-fe",
        title: "Padrinho de Crisma e testemunho corajoso",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Coragem para professar a fé",
            text: "A Confirmação aperfeiçoa a graça batismal concedendo força especial do Espírito Santo para difundir e defender a fé pela palavra e pelas obras como verdadeiras testemunhas de Cristo.",
            example:
              "Invocar o Espírito Santo antes de conversas delicadas sobre fé, ética ou valores cristãos.",
            source: "At 1,8 · CIC 1303",
          },
          {
            title: "Um caráter que não se repete",
            text: "Assim como o Batismo e a Ordem, a Crisma imprime na alma um caráter indelével que configura ainda mais plenamente ao Cristo ungido pelo Espírito e só se recebe uma vez na vida.",
            example:
              "Renovar frequentemente a consciência da própria Crisma pedindo um novo Pentecostes interior.",
            source: "CIC 1304-1305",
          },
          {
            title: "Padrinho ou madrinha de Crisma",
            text: "Convém que o padrinho de Crisma seja o mesmo do Batismo, ou outro fiel católico maduro na fé que ajude o crismado no caminho da perseverança.",
            example:
              "Manter contato fraterno e oração mútua com seu padrinho ou madrinha de Crisma.",
            source: "CIC 1311",
          },
        ],
        questions: [
          {
            prompt: "Qual é o efeito principal da Crisma na vida do cristão?",
            options: [
              "Apagar o Batismo anterior",
              "Enraizar mais profundamente na filiação divina, unir mais firmemente a Cristo e dar força do Espírito para testemunhar a fé",
              "Dispensar a oração pessoal",
              "Garantir ausência de dificuldades",
            ],
            answer: 1,
            explanation:
              "A Confirmação traz crescimento e aprofundamento da graça batismal e força especial para testemunhar Cristo (CIC 1303).",
          },
          {
            prompt: "Quantas vezes um cristão pode receber validamente o sacramento da Crisma?",
            options: [
              "Todos os anos em Pentecostes",
              "Uma única vez na vida, pois imprime caráter espiritual indelével",
              "Sempre que mudar de paróquia",
              "Duas vezes, na infância e na velhice",
            ],
            answer: 1,
            explanation:
              "Como o Batismo e a Ordem, a Confirmação imprime um selo perpétuo na alma e só pode ser recebida uma vez (CIC 1304).",
          },
          {
            prompt: "Que qualidade é essencial para alguém ser padrinho ou madrinha de Crisma?",
            options: [
              "Ter muitos bens materiais",
              "Ser cristão católico crismado que leve uma vida coerente com a fé para apoiar o afilhado",
              "Ter menos de dez anos de idade",
              "Nunca ir à Missa",
            ],
            answer: 1,
            explanation:
              "O padrinho deve ser um guia espiritual capaz de auxiliar o crismado no cumprimento das promessas batismais (CIC 1311).",
          },
        ],
      },
    ],
  },
  {
    id: "misterio-eucaristia",
    title: "Sacrifício, Presença Real e Viático",
    emoji: "🍞",
    lessons: [
      {
        id: "memorial-sacrificio-cruz",
        title: "A Missa como verdadeiro sacrifício da Cruz",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Não é repetição, mas atualização sacramental",
            text: "Jesus morreu uma única vez na Cruz de forma definitiva. Na Santa Missa não há nova crucificação: o mesmo único sacrifício do Calvário torna-se sacramentalmente presente hoje.",
            example:
              "Participar da Missa como quem está aos pés da Cruz junto com Maria e o discípulo amado.",
            source: "Hb 9,26-28 · CIC 1364-1367",
          },
          {
            title: "Ofertado também pelos vivos e falecidos",
            text: "Porque é o sacrifício de Cristo pela salvação do mundo, a Eucaristia é oferecida pela Igreja inteira, pelos vivos e pelos fiéis defuntos em purificação.",
            example:
              "Pedir intenções de Missa por familiares falecidos e por pessoas que atravessam grandes provações.",
            source: "1Cor 11,26 · CIC 1371",
          },
          {
            title: "Oferecer a própria vida na patena",
            text: "Durante a preparação das oferendas, a vida dos fiéis — trabalho, cansaço, alegrias e lágrimas — une-se ao pão e ao vinho para ser transformada com Cristo.",
            example:
              "Durante o ofertório da Missa, depositar no altar uma preocupação concreta da semana.",
            source: "Rm 12,1 · CIC 1368",
          },
        ],
        questions: [
          {
            prompt: "Qual é a relação entre a Santa Missa e o sacrifício de Jesus na Cruz?",
            options: [
              "São dois sacrifícios completamente distintos",
              "A Missa torna sacramentalmente presente o único e mesmo sacrifício da Cruz",
              "A Missa é apenas uma lembrança mental do passado",
              "Jesus é crucificado novamente a cada domingo",
            ],
            answer: 1,
            explanation:
              "O sacrifício de Cristo e o sacrifício da Eucaristia são um único sacrifício: a mesma vítima e o mesmo sacerdote principal (CIC 1367).",
          },
          {
            prompt: "Por que os católicos oferecem Missas pelos falecidos?",
            options: [
              "Por uma tradição cultural sem base teológica",
              "Porque o único sacrifício redentor de Cristo alcança também os fiéis defuntos na comunhão dos santos",
              "Para alterar os registros civis",
              "Porque eles não foram batizados apenas",
            ],
            answer: 1,
            explanation:
              "A Eucaristia é oferecida em reparação dos pecados dos vivos e dos defuntos, ajudando os que se purificam no purgatório (CIC 1371, 1414).",
          },
          {
            prompt: "O que significa a palavra 'memorial' no sentido bíblico da Eucaristia?",
            options: [
              "Um álbum de fotografias antigo",
              "Uma celebração que torna realmente presente e eficaz hoje a obra salvadora de Deus",
              "Esquecer o passado para sempre",
              "Apenas contar histórias antigas",
            ],
            answer: 1,
            explanation:
              "Na Sagrada Escritura e na liturgia, o memorial não é mera recordação psicológica, mas proclamação eficaz que torna presente o mistério (CIC 1363).",
          },
        ],
      },
      {
        id: "transubstanciacao-presenca-real",
        title: "Transubstanciação: Cristo todo e inteiro presente",
        emoji: "🌾",
        xp: 20,
        teachings: [
          {
            title: "Mudança maravilhosa da substância",
            text: "Pelas palavras de Cristo pronunciadas pelo sacerdote e pela invocação do Espírito Santo (epiclese), toda a substância do pão se converte no Corpo de Cristo e toda a do vinho no seu Sangue: a Igreja chama isso transubstanciação.",
            example:
              "Ajoelhar-se ou inclinar-se profundamente com fé viva no momento da consagração na Missa.",
            source: "Mc 14,22-24 · CIC 1376",
          },
          {
            title: "Cristo inteiro sob cada espécie",
            text: "Cristo vivo e ressuscitado não está dividido: sob a aparência do pão ou sob a aparência do vinho, e mesmo em cada pequena fração da hóstia, está presente Cristo todo e inteiro.",
            example:
              "Cuidar com reverência ao comungar para que nenhuma partícula da hóstia se perca.",
            source: "1Cor 10,16 · CIC 1377",
          },
          {
            title: "Disposições para comungar com fruto",
            text: "Para receber a Comunhão dignamente, o cristão deve estar em estado de graça (sem pecado mortal consciente não confessado), guardar o jejum eucarístico de uma hora e manter o recolhimento.",
            example:
              "Se houver pecado grave na consciência, buscar primeiro o sacramento da Confissão antes de comungar.",
            source: "1Cor 11,27-29 · CIC 1385-1387",
          },
        ],
        questions: [
          {
            prompt: "O que significa o termo 'transubstanciação' na fé católica?",
            options: [
              "Que o pão e o vinho apenas representam Jesus simbolicamente",
              "Que toda a substância do pão e do vinho se converte no Corpo e no Sangue de Cristo, permanecendo as aparências de pão e vinho",
              "Que Jesus entra no pão por apenas alguns segundos",
              "Que a hóstia muda de sabor químico visível",
            ],
            answer: 1,
            explanation:
              "Pela consagração realiza-se a conversão maravilhosa e única de toda a substância do pão no Corpo e do vinho no Sangue de Cristo (CIC 1376).",
          },
          {
            prompt:
              "Se um fiel comunga apenas sob a espécie do pão consagrado, ele recebe Cristo por inteiro?",
            options: [
              "Não, recebe apenas metade da graça",
              "Sim, pois Cristo vivo está presente todo e inteiro sob cada uma das espécies separadamente",
              "Recebe apenas uma bênção simbólica",
              "Depende do tamanho da hóstia",
            ],
            answer: 1,
            explanation:
              "Cristo está presente todo e inteiro em cada uma das espécies e em cada uma de suas partes (CIC 1377, 1390).",
          },
          {
            prompt:
              "Qual é a atitude exigida antes de comungar quando alguém tem consciência de pecado mortal?",
            options: [
              "Comungar assim mesmo sem pensar",
              "Receber primeiro a absolvição sacramental na Confissão antes de aproximar-se da Comunhão",
              "Nunca mais ir à Missa",
              "Tomar apenas água benta",
            ],
            answer: 1,
            explanation:
              "Quem tem consciência de pecado grave deve receber o sacramento da Reconciliação antes de receber a Comunhão (1Cor 11,28; CIC 1385).",
          },
        ],
      },
      {
        id: "adoracao-eucaristica-viatico",
        title: "Adoração Eucarística e o Santo Viático",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Prolongar a Missa diante do Santíssimo",
            text: "Porque Cristo permanece verdadeiramente presente nas espécies consagradas guardadas após a Missa, a Igreja pratica a adoração eucarística em visitas silenciosas ao sacrário ou na exposição do ostensório.",
            example:
              "Reservar 15 minutos na semana para sentar-se em silêncio diante do sacrário e simplesmente amar a Jesus.",
            source: "Mt 26,40 · CIC 1378-1380",
          },
          {
            title: "Comunhão aos enfermos levada por ministros",
            text: "Quem está doente ou idoso e não pode ir à igreja recebe o Corpo de Cristo em casa ou no hospital, levado com respeito pelo sacerdote, diácono ou ministro extraordinário.",
            example:
              "Avisar a secretaria da paróquia se houver algum idoso ou enfermo na família desejoso de receber a Comunhão.",
            source: "CIC 1378, 1524",
          },
          {
            title: "O Viático: alimento para a passagem eterna",
            text: "A última Comunhão recebida pelo cristão em perigo de morte chama-se 'Viático' — provisão de viagem para atravessar da morte para a vida eterna com Cristo ressuscitado.",
            example:
              "Não adiar chamar o padre quando um familiar estiver gravemente doente, para que receba a Confissão, a Unção e o Viático lúcido.",
            source: "Jo 6,54 · CIC 1524-1525",
          },
        ],
        questions: [
          {
            prompt: "Por que a Igreja adora a Eucaristia também fora do horário da Santa Missa?",
            options: [
              "Por simples hábito arquitetônico",
              "Porque Cristo permanece verdadeiramente presente nas hóstias consagradas guardadas após a celebração",
              "Para substituir o Batismo",
              "Porque Deus não ouve fora do ostensório",
            ],
            answer: 1,
            explanation:
              "A presença eucarística de Cristo começa na consagração e dura enquanto subsistirem as espécies eucarísticas (CIC 1377-1378).",
          },
          {
            prompt:
              "O que significa a palavra 'Viático' nos sacramentos para os que partem desta vida?",
            options: [
              "Uma taxa administrativa da paróquia",
              "A última Comunhão Eucarística levada ao moribundo como alimento e semente de vida eterna na passagem para o Pai",
              "Uma oração apenas após o sepultamento",
              "Um tipo de vestimenta litúrgica",
            ],
            answer: 1,
            explanation:
              "O Viático é o sacramento da passagem da morte para a vida: Corpo e Sangue de Cristo como penhor da ressurreição (CIC 1524).",
          },
          {
            prompt:
              "Qual é a função pastoral dos Ministros Extraordinários da Sagrada Comunhão em relação aos enfermos?",
            options: [
              "Substituir o sacerdote na Confissão",
              "Levar a Eucaristia aos irmãos doentes e acamados que não podem participar presencialmente da Missa",
              "Alterar os textos da liturgia",
              "Celebrar casamentos",
            ],
            answer: 1,
            explanation:
              "Com zelo e reverência, ministros levam a comunhão dos altares às casas dos enfermos para que permaneçam unidos à comunidade (CIC 1378).",
          },
        ],
      },
    ],
  },
  {
    id: "caminho-reconciliacao",
    title: "Conversão, Penitência e Direção Espiritual",
    emoji: "🤍",
    lessons: [
      {
        id: "contricao-confissao-satisfacao",
        title: "Os atos do penitente: contrição, confissão e satisfação",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "A contrição do coração: alma da penitência",
            text: "A contrição é a dor sincera da alma pelos pecados cometidos e o propósito firme de não mais pecar. A contrição perfeita nasce do amor a Deus acima de todas as coisas.",
            example:
              "Ao cair num erro, voltar logo o coração a Deus por amor, e não apenas por medo de consequências.",
            source: "Sl 51,19 · CIC 1451-1452",
          },
          {
            title: "A confissão sincera e o sigilo inviolável",
            text: "Na Confissão dizemos os pecados graves em espécie e número ao sacerdote. O confessor está obrigado ao sigilo sacramental absoluto e inviolável — jamais pode revelar o que ouviu.",
            example:
              "Preparar um bom exame de consciência escrito se ajudar a não omitir nada por vergonha ou esquecimento.",
            source: "1Jo 1,9 · CIC 1455-1456, 1467",
          },
          {
            title: "A satisfação (penitência) após a absolvição",
            text: "Recebido o perdão, a penitência dada pelo padre ajuda a reparar o dano espiritual do pecado e recomeçar uma vida nova conforme o Evangelho.",
            example:
              "Cumprir com fidelidade e amor a penitência dada pelo confessor o quanto antes.",
            source: "Lc 19,8 · CIC 1459-1460",
          },
        ],
        questions: [
          {
            prompt: "Qual é o primeiro e mais importante ato do penitente na Confissão?",
            options: [
              "Comprar uma lembrança religiosa",
              "A contrição: dor sincera pelos pecados e propósito firme de conversão",
              "Contar os pecados de outras pessoas",
              "Justificar que não teve culpa nenhuma",
            ],
            answer: 1,
            explanation:
              "Entre os atos do penitente ocupa o primeiro lugar a contrição, que é a dor e detestação do pecado com propósito de mudança (CIC 1451).",
          },
          {
            prompt: "O que significa o sigilo sacramental na Confissão?",
            options: [
              "Que o padre pode contar depois apenas à família",
              "Que o confessor está absolutamente proibido, sob penas gravíssimas, de revelar qualquer pecado ouvido em confissão",
              "Que a confissão é gravada em arquivo público",
              "Que dura apenas sete dias",
            ],
            answer: 1,
            explanation:
              "Dada a grandeza deste sacramento, a Igreja declara o sigilo sacramental sagrado, absoluto e sem exceções (CIC 1467).",
          },
          {
            prompt: "Para que serve a penitência ('satisfação') indicada pelo confessor?",
            options: [
              "Para pagar a Deus por um perdão que seria vendido",
              "Para reparar a desordem deixada pelo pecado e fortalecer o cristão no caminho de vida nova",
              "Para humilhar o fiel publicamente",
              "Para substituir a Eucaristia",
            ],
            answer: 1,
            explanation:
              "A absolvição apaga o pecado, mas a satisfação ajuda a restabelecer os hábitos virtuosos e reparar o dano (CIC 1459).",
          },
        ],
      },
      {
        id: "direcao-espiritual-conselho",
        title: "Acompanhamento espiritual e combate à tibieza",
        emoji: "🧭",
        xp: 20,
        teachings: [
          {
            title: "Não caminhar sozinho na vida interior",
            text: "Desde os Padres do Deserto, os santos ensinam a sabedoria de ter um diretor ou acompanhante espiritual — um padre ou pessoa madura na fé que ajuda a discernir as moções da alma.",
            example:
              "Procurar um confessor regular ou orientador espiritual que conheça sua caminhada cristã.",
            source: "Pr 11,14 · CIC 2690",
          },
          {
            title: "Vencer a tibieza com pequenas fidelidades",
            text: "A tibieza é o esfriamento preguiçoso que trata as coisas de Deus sem amor. Vence-se com pequenos atos concretos diários de oração, sacrifício e caridade alegre.",
            example:
              "Cumprir um horário fixo de dez minutos diários de oração, mesmo nos dias sem vontade.",
            source: "Ap 3,15-16 · CIC 2094",
          },
          {
            title: "Confissão frequente de devoção",
            text: "Mesmo sem pecados mortais, confessar os pecados veniais regularmente forma a consciência, combate maus hábitos e nos une mais delicadamente ao coração de Jesus.",
            example:
              "Adotar o ritmo mensal (ou quinzenal) de Confissão para crescer na santidade cotidiana.",
            source: "CIC 1458",
          },
        ],
        questions: [
          {
            prompt: "Por que a Igreja recomenda confessar regularmente também os pecados veniais?",
            options: [
              "Porque sem isso o Batismo perde a validade",
              "Porque ajuda a formar a consciência, lutar contra as más inclinações e progredir na vida no Espírito",
              "Para cumprir uma obrigação burocrática semanal",
              "Porque pecados veniais nunca são perdoados na Missa",
            ],
            answer: 1,
            explanation:
              "Embora não seja estritamente necessária para pecados veniais, a confissão frequente dos mesmos é vivamente recomendada pela Igreja (CIC 1458).",
          },
          {
            prompt: "Qual é o objetivo do acompanhamento ou direção espiritual?",
            options: [
              "Substituir a responsabilidade pessoal e a consciência",
              "Ajudar o fiel a discernir a ação do Espírito Santo e crescer com constância na oração e nas virtudes",
              "Controlar decisões financeiras do fiel",
              "Evitar ler a Bíblia",
            ],
            answer: 1,
            explanation:
              "O Espírito Santo dá a alguns o dom da sabedoria e do conselho espiritual para orientar outros no caminho da oração (CIC 2690).",
          },
          {
            prompt: "Como combater a tibieza (esfriamento espiritual) na vida diária?",
            options: [
              "Esperando sentir grandes emoções antes de rezar",
              "Com fidelidade humilde às pequenas práticas diárias de oração, sacramentos e caridade",
              "Desistindo de qualquer propósito",
              "Trocando de religião todo ano",
            ],
            answer: 1,
            explanation:
              "A perseverança fiel nos meios ordinários de graça e no exame diário renova o fervor da caridade (CIC 2094, 2742).",
          },
        ],
      },
      {
        id: "reparacao-restituicao-justica",
        title: "Reparação, restituição e reconciliação com o próximo",
        emoji: "🤝",
        xp: 20,
        teachings: [
          {
            title: "Devolve-se o que foi tirado injustamente",
            text: "Como Zaqueu que devolveu quatro vezes o que havia extorquido, quem causou prejuízo material ou moral ao próximo tem o dever de reparar o mal na medida do possível.",
            example:
              "Se falou mal de alguém injustamente, esforçar-se para defender a boa fama dessa pessoa.",
            source: "Lc 19,8-9 · CIC 1459, 2412",
          },
          {
            title: "Deixar a oferta e reconciliar-se primeiro",
            text: "Jesus ensinou que antes de apresentar a oferta no altar devemos buscar a paz com o irmão ofendido sempre que depender de nós.",
            example: "Tomar a iniciativa de pedir perdão após uma discussão dura antes de dormir.",
            source: "Mt 5,23-24 · CIC 1435, 2840",
          },
          {
            title: "Indulgências: tesouro de misericórdia da Igreja",
            text: "Mesmo depois do perdão da culpa eterna, permanecem consequências (penas temporais) do pecado. A indulgência é a remissão dessas consequências pela oração, esmola e sacramentos na comunhão da Igreja.",
            example:
              "Oferecer uma indulgência aplicável aos falecidos ao visitar um cemitério ou adorar o Santíssimo em estado de graça.",
            source: "CIC 1471-1479",
          },
        ],
        questions: [
          {
            prompt:
              "O que exige a justiça cristã quando alguém prejudicou materialmente ou feriu a fama de outra pessoa?",
            options: [
              "Fingir que nada aconteceu depois de pedir perdão em segredo",
              "Reparar e restituir o dano causado na medida do possível, além do arrependimento diante de Deus",
              "Culpar a própria vítima",
              "Mudar de cidade para esquecer",
            ],
            answer: 1,
            explanation:
              "A simples absolvição não dispensa o dever de justiça de restituir bens roubados ou reparar a fama injustamente ferida (CIC 1459, 2487).",
          },
          {
            prompt: "Segundo o Catecismo, o que é uma indulgência?",
            options: [
              "Licença paga para cometer pecados futuros",
              "A remissão diante de Deus da pena temporal devida aos pecados cuja culpa já foi perdoada",
              "A substituição da Confissão sacramental",
              "Um título honorífico dado a paróquias",
            ],
            answer: 1,
            explanation:
              "A indulgência aplica os méritos de Cristo e dos santos para purificar as penas temporais de pecados já perdoados (CIC 1471).",
          },
          {
            prompt:
              "Que gesto Jesus coloca como urgente antes mesmo de oferecer um sacrifício no altar (Mt 5,23-24)?",
            options: [
              "Comprar velas maiores",
              "Ir primeiro reconciliar-se com o irmão que tem alguma queixa contra você",
              "Escrever um longo discurso",
              "Mudar de assento na igreja",
            ],
            answer: 1,
            explanation:
              "A reconciliação sincera com Deus é inseparável da disposição de reconciliar-se com o irmão (Mt 5,24; CIC 2840).",
          },
        ],
      },
    ],
  },
  {
    id: "sacramento-ordem-vocacao",
    title: "O Sacerdócio Ministerial e o Diaconato",
    emoji: "⛪",
    lessons: [
      {
        id: "ordem-episcopado-presbiterado",
        title: "Episcopado e Presbiterado: agir na pessoa de Cristo",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Sucessão apostólica viva",
            text: "Pelo sacramento da Ordem, Cristo continua a exercer sua missão de pastor e mestre por meio de ministros escolhidos, consagrados pela imposição das mãos dos bispos desde os Apóstolos.",
            example: "Rezar pelo seu bispo diocesano e pelo Papa em todas as orações pela Igreja.",
            source: "2Tm 1,6 · CIC 1536, 1555-1556",
          },
          {
            title: "Bispos e Presbíteros (Padres)",
            text: "Os bispos recebem a plenitude do sacramento da Ordem como pastores de uma diocese; os presbíteros são seus cooperadores, anunciam o Evangelho, celebram a Eucaristia e perdoam pecados em nome de Cristo.",
            example:
              "Valorizar a presença do padre na comunidade com respeito, apoio fraterno e oração fiel.",
            source: "Tt 1,5 · CIC 1558, 1564-1567",
          },
          {
            title: "In persona Christi Capitis",
            text: "Quando o padre pronuncia 'Isto é o meu Corpo' ou 'Eu te absolvo', ele não fala apenas em seu nome humano: age na pessoa de Cristo Cabeça da Igreja.",
            example:
              "Olhar com fé além das limitações humanas do ministro para enxergar o próprio Cristo agindo nos sacramentos.",
            source: "2Cor 5,20 · CIC 1548",
          },
        ],
        questions: [
          {
            prompt: "Quais são os três graus do sacramento da Ordem na Igreja Católica?",
            options: [
              "Leitor, Acólito e Catequista",
              "Episcopado (bispos), Presbiterado (padres) e Diaconato (diáconos)",
              "Pároco, Vigário e Cônego",
              "Cardeal, Abade e Sacristão",
            ],
            answer: 1,
            explanation:
              "O ministério eclesial divinamente instituído exerce-se em três graus: bispos, presbíteros e diáconos (CIC 1554).",
          },
          {
            prompt:
              "O que significa dizer que o sacerdote age 'in persona Christi Capitis' nos sacramentos?",
            options: [
              "Que o sacerdote é impecável e nunca erra",
              "Que ele atua como instrumento sacramental do próprio Cristo Cabeça, não por força própria",
              "Que ele substitui Jesus no céu",
              "Que só pode rezar em latim",
            ],
            answer: 1,
            explanation:
              "É o próprio Cristo quem age pelo seu ministro ordenado; por isso a graça do sacramento não depende da perfeição humana do padre (CIC 1548, 1584).",
          },
          {
            prompt: "Quem confere validamente o sacramento da Ordem pela imposição das mãos?",
            options: [
              "Qualquer fiel leigo",
              "Um Bispo validamente ordenado dentro da sucessão apostólica",
              "Um conselho administrativo",
              "Os pais do candidato",
            ],
            answer: 1,
            explanation:
              "Como sucessores dos Apóstolos, compete apenas aos bispos conferir o sacramento da Ordem (CIC 1576).",
          },
        ],
      },
      {
        id: "diaconato-servico-caridade",
        title: "O Diaconato: ícone de Cristo Servo",
        emoji: "🤲",
        xp: 20,
        teachings: [
          {
            title: "Ordenados não para o sacerdócio, mas para o serviço",
            text: "Desde os sete homens escolhidos nos Atos dos Apóstolos, os diáconos são ordenados para o serviço (diakonia) da liturgia, da Palavra e sobretudo da caridade aos pobres.",
            example:
              "Conhecer o serviço dos diáconos na sua diocese e apoiar as obras sociais da paróquia.",
            source: "At 6,1-6 · CIC 1569-1570",
          },
          {
            title: "Funções litúrgicas e pastorais do diácono",
            text: "O diácono proclama o Evangelho na Missa, pode pregar a homilia, administrar solenemente o Batismo, assistir e abençoar o Matrimônio, levar o Viático e presidir exéquias.",
            example:
              "Acompanhar quando o diácono proclama o Evangelho e prepara o cálice e o altar na Missa.",
            source: "CIC 1570",
          },
          {
            title: "Diaconato transitório e permanente",
            text: "Há diáconos transitórios (que se encaminham ao sacerdócio) e diáconos permanentes — inclusive homens casados de fé amadurecida — que servem nas famílias, trabalhos e paróquias.",
            example:
              "Rezar pelas vocações ao diaconato permanente e pelas esposas e famílias que apoiam esse serviço.",
            source: "1Tm 3,8-12 · CIC 1571",
          },
        ],
        questions: [
          {
            prompt: "Para que são ordenados especialmente os diáconos na Igreja?",
            options: [
              "Para consagrar a Eucaristia sozinhos",
              "Para o serviço da liturgia, da Palavra e da caridade em comunhão com o bispo e os padres",
              "Para absolver pecados na Confissão",
              "Para administrar apenas imóveis",
            ],
            answer: 1,
            explanation:
              "Os diáconos participam de modo especial da missão de Cristo Servo no anúncio da Palavra, na liturgia e na caridade (CIC 1569-1570).",
          },
          {
            prompt:
              "Qual sacramento um diácono NÃO pode administrar por ser próprio de bispos e padres?",
            options: [
              "Batismo",
              "Consagração eucarística, Confissão sacramental e Unção dos Enfermos",
              "Assistência ao Matrimônio",
              "Bênção com o Santíssimo",
            ],
            answer: 1,
            explanation:
              "Consagrar a Eucaristia, absolver pecados na Penitência e ungir os enfermos requer o presbiterado ou episcopado (CIC 1566, 1570).",
          },
          {
            prompt: "Na Igreja Católica de rito latino, quem pode ser ordenado diácono permanente?",
            options: [
              "Somente monges de clausura",
              "Homens solteiros ou homens já casados de vida cristã provada e madura",
              "Crianças da catequese",
              "Apenas após os 75 anos",
            ],
            answer: 1,
            explanation:
              "O Concílio Vaticano II restaurou o diaconato permanente, aberto também a homens casados que vivem em fidelidade cristã (CIC 1571).",
          },
        ],
      },
      {
        id: "celibato-oracao-sacerdotes",
        title: "Celibato consagrado e oração pelas vocações",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "Um coração indiviso pelo Reino dos Céus",
            text: "Na Igreja Latina, os presbíteros abraçam livremente o celibato por amor ao Reino dos Céus, configurando-se a Jesus casto, pobre e totalmente disponível para amar a família de Deus.",
            example:
              "Compreender o celibato não como frieza afetiva, mas como paternidade espiritual generosa.",
            source: "Mt 19,12 · 1Cor 7,32 · CIC 1579",
          },
          {
            title: "Paternidade espiritual a serviço de todos",
            text: "Ao renunciar a constituir uma família particular, o sacerdote abre seu coração para acolher todos — crianças, jovens, casais, solteiros, doentes e idosos — como pai espiritual.",
            example:
              "Convidar o padre ou seminaristas ocasionalmente para partilhar uma refeição ou rezar com eles.",
            source: "1Cor 4,15 · CIC 1579",
          },
          {
            title: "Pedir ao Senhor da messe novos operários",
            text: "Jesus ordenou expressamente: 'Pedi ao Senhor da messe que envie operários'. Uma comunidade que reza pelas vocações e vive com alegria a fé faz florescer novos chamados.",
            example:
              "Incluir um pedido pelas vocações sacerdotais, religiosas e matrimoniais no Terço semanal.",
            source: "Mt 9,37-38 · CIC 1580, 2635",
          },
        ],
        questions: [
          {
            prompt: "Qual é o sentido espiritual do celibato sacerdotal vivido por amor a Cristo?",
            options: [
              "Desprezo pelo Matrimônio e pela família",
              "Entrega indivisa do coração ao Senhor e disponibilidade paterna para servir a toda a Igreja como sinal do Reino futuro",
              "Fuga das responsabilidades humanas",
              "Uma regra sem relação com o Evangelho",
            ],
            answer: 1,
            explanation:
              "O celibato sacerdotal é sinal brilhante do amor indiviso a Cristo e da disponibilidade total ao serviço da Igreja (CIC 1579).",
          },
          {
            prompt:
              "Que pedido explícito Jesus faz em Mt 9,37-38 diante da necessidade de pastores?",
            options: [
              "Que fechemos as portas das igrejas",
              "Que rezemos ao Senhor da messe para que envie operários para a sua messe",
              "Que cada um siga sem pastores",
              "Que escolhamos pastores sem oração",
            ],
            answer: 1,
            explanation:
              "As vocações nascem da graça de Deus em resposta à oração perseverante da Igreja (Mt 9,38; CIC 2635).",
          },
          {
            prompt:
              "Por que os cristãos devem rezar pelos sacerdotes mesmo quando percebem neles defeitos humanos?",
            options: [
              "Para apontar seus defeitos em público",
              "Porque os padres também enfrentam combates espirituais e precisam da graça e da amizade orante do povo",
              "Porque o pecado do padre anula a Missa",
              "Não é necessário rezar por eles",
            ],
            answer: 1,
            explanation:
              "Os ministros ordenados precisam continuamente da oração dos fiéis para serem fiéis ao dom recebido (CIC 1550, 1584).",
          },
        ],
      },
    ],
  },
  {
    id: "sacramento-matrimonio-graca",
    title: "Preparação, Consentimento e Graça Conjugal",
    emoji: "💍",
    lessons: [
      {
        id: "alianca-indissolubilidade",
        title: "Aliança fiel, indissolúvel e aberta à vida",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Imagem do amor fiel de Cristo pela Igreja",
            text: "Entre batizados, o Matrimônio é elevado por Cristo a sacramento: o amor fiel e irrevogável entre homem e mulher torna-se sinal vivo do amor de Cristo pela Igreja sua esposa.",
            example:
              "Rezar pelos casais próximos para que reflitam paciência, perdão e fidelidade de Cristo.",
            source: "Ef 5,25-32 · CIC 1601, 1617",
          },
          {
            title: "Unidade e indissolubilidade",
            text: "Como ensinou Jesus: 'O que Deus uniu, o homem não separe'. O vínculo matrimonial válido e consumado entre batizados jamais pode ser dissolvido por nenhum poder humano.",
            example:
              "Encarar o namoro e o noivado com seriedade para construir um amor para toda a vida.",
            source: "Mc 10,6-9 · CIC 1614-1615, 1640",
          },
          {
            title: "Amor fecundo e educação dos filhos",
            text: "Por sua natureza, o amor conjugal orienta-se tanto ao bem dos esposos quanto à geração e educação dos filhos, acolhidos como dom preciosíssimo de Deus.",
            example:
              "Acolher crianças com carinho na igreja e apoiar famílias jovens da comunidade.",
            source: "Gn 1,28 · CIC 1652-1653",
          },
        ],
        questions: [
          {
            prompt:
              "Quais são os bens essenciais da aliança matrimonial segundo a doutrina católica?",
            options: [
              "Riqueza financeira, fama e status social",
              "O bem mútuo dos esposos na unidade e fidelidade indissolúvel e a abertura à geração e educação dos filhos",
              "Um contrato temporário revogável a qualquer momento",
              "Apenas uma cerimônia fotográfica",
            ],
            answer: 1,
            explanation:
              "A aliança matrimonial ordena-se por índole natural ao bem dos cônjuges e à procriação e educação da prole (CIC 1601, 1643).",
          },
          {
            prompt:
              "De que grande mistério o Matrimônio cristão é sinal sacramental segundo Efésios 5?",
            options: [
              "Da união de amor fiel e doação total de Cristo pela sua Igreja",
              "De um acordo comercial antigo",
              "De uma aliança política",
              "Da separação entre corpo e alma",
            ],
            answer: 0,
            explanation:
              "Os esposos recebem a graça para se amarem com o mesmo amor fiel com que Cristo amou a Igreja (Ef 5,25; CIC 1617, 1642).",
          },
          {
            prompt: "O que significa a indissolubilidade do Matrimônio ensinada por Jesus?",
            options: [
              "Que os cônjuges nunca discutem",
              "Que o vínculo sacramental válido une os esposos para toda a vida, sem poder ser desfeito até a morte de um deles",
              "Que ninguém precisa pedir perdão",
              "Que só dura durante a juventude",
            ],
            answer: 1,
            explanation:
              "“O que Deus uniu, o homem não separe”: o vínculo conjugal é perpétuo e exclusivo por vontade do Criador e Redentor (CIC 1614, 1640).",
          },
        ],
      },
      {
        id: "consentimento-matrimonial-graca",
        title: "O consentimento livre e os ministros do sacramento",
        emoji: "🤝",
        xp: 20,
        teachings: [
          {
            title: "Os próprios noivos são os ministros",
            text: "No rito latino, os próprios noivos batizados são os ministros que se conferem mutuamente o sacramento do Matrimônio diante da Igreja, ao expressarem livremente o consentimento.",
            example:
              "Preparar-se seriamente no noivado — espiritual, humana e dialogadamente — antes de pronunciar o 'Sim' no altar.",
            source: "CIC 1623, 1626",
          },
          {
            title: "Consentimento livre, consciente e sem reservas",
            text: "O consentimento é o ato humano irrevogável pelo qual o homem e a mulher se entregam e se recebem mutuamente sem coação, erro ou exclusão dos bens do casamento.",
            example:
              "Conversar aberta e honestamente durante o namoro sobre fé, valores, finanças e abertura aos filhos.",
            source: "CIC 1625-1628",
          },
          {
            title: "Graça própria para a vida inteira",
            text: "A graça do Matrimônio não acaba no dia da festa: acompanha o casal por décadas, renovando o perdão, a ternura, a paciência na doença e o amor fiel nos dias comuns.",
            example: "Rezar juntos como casal — mesmo um Pai-Nosso de mãos dadas antes de dormir.",
            source: "CIC 1641-1642",
          },
        ],
        questions: [
          {
            prompt: "Quem são, no rito latino, os ministros do sacramento do Matrimônio?",
            options: [
              "O fotógrafo e os padrinhos",
              "Os próprios noivos batizados, que em nome de Cristo se entregam mutuamente pelo consentimento diante do ministro assistente",
              "Apenas o bispo",
              "O cartório civil",
            ],
            answer: 1,
            explanation:
              "Os esposos mesmos são os ministros da graça matrimonial; o padre ou diácono recebe o consentimento e dá a bênção em nome da Igreja (CIC 1623).",
          },
          {
            prompt: "O que torna indispensável a preparação séria para o Matrimônio?",
            options: [
              "Apenas escolher o buffet da festa",
              "Amadurecer na fé, no diálogo e na liberdade interior para pronunciar um consentimento verdadeiro para toda a vida",
              "Esconder defeitos para não haver conversa",
              "Evitar conselhos de casais experientes",
            ],
            answer: 1,
            explanation:
              "Para que o 'Sim' seja plenamente livre e responsável, os noivos precisam de sólida formação humana e cristã (CIC 1628, 1632).",
          },
          {
            prompt: "Como a graça do sacramento ajuda o casal após o dia do casamento?",
            options: [
              "Termina ao sair da igreja",
              "Sustenta a fidelidade, a paciência, o perdão diário e o cuidado mútuo ao longo de toda a vida",
              "Elimina automaticamente qualquer esforço humano",
              "Serve apenas em momentos de festa",
            ],
            answer: 1,
            explanation:
              "Cristo permanece com o casal dando força para carregar a cruz juntos, levantar após quedas e perdoar-se mutuamente (CIC 1642).",
          },
        ],
      },
      {
        id: "igreja-domestica-familia",
        title: "A família como Igreja doméstica",
        emoji: "🏡",
        xp: 20,
        teachings: [
          {
            title: "O lar onde Deus habita",
            text: "A família cristã recebe o belo nome de 'Igreja doméstica': nela os filhos aprendem as primeiras orações, o perdão, o respeito aos mais velhos e o amor a Jesus.",
            example:
              "Fazer uma breve oração agradecendo pelo alimento antes das refeições em casa.",
            source: "Js 24,15 · CIC 1656-1657, 2204",
          },
          {
            title: "Primeira escola de virtudes humanas e cristãs",
            text: "É na convivência familiar que se aprende a partilhar, pedir desculpas, ter paciência e cuidar dos fracos, preparando cidadãos justos e cristãos verdadeiros.",
            example:
              "Valorizar as pequenas gentilezas dentro de casa tanto quanto com pessoas de fora.",
            source: "Cl 3,12-21 · CIC 2207, 2223",
          },
          {
            title: "Acolher também quem vive feridas familiares",
            text: "A Igreja olha com respeito e misericórdia materna para cada família ferida por separações, luto ou solidão, convidando todos a permanecer na comunidade e na graça.",
            example:
              "Nunca julgar apressadamente a história familiar de ninguém; acolher e rezar por cada lar.",
            source: "CIC 1651, 1658",
          },
        ],
        questions: [
          {
            prompt: "Por que a família cristã é chamada pelo Catecismo de 'Igreja doméstica'?",
            options: [
              "Porque substitui a paróquia e a Missa de domingo",
              "Porque no lar vive-se uma comunhão de fé, esperança e caridade onde se reza e se transmite o Evangelho",
              "Porque deve construir uma torre em casa",
              "Porque não convive com vizinhos",
            ],
            answer: 1,
            explanation:
              "O lar cristão é o lugar onde os pais são os primeiros anunciadores da fé aos filhos e toda a família reza unida (CIC 1656-1657).",
          },
          {
            prompt: "Qual é o dever primordial dos pais cristãos quanto à fé dos filhos?",
            options: [
              "Deixar para terceiros sem jamais falar de Deus",
              "Transmitir a fé pelo testemunho alegre de vida, pela oração em família e pelo exemplo do perdão",
              "Impor medo sem ternura",
              "Proibir perguntas sinceras",
            ],
            answer: 1,
            explanation:
              "Pela graça do Matrimônio, os pais têm a missão e privilégio de evangelizar os filhos desde a infância (CIC 2223, 2225).",
          },
          {
            prompt:
              "Qual deve ser a postura da comunidade cristã diante de pessoas solteiras, viúvas ou famílias feridas?",
            options: [
              "Afastamento e indiferença",
              "Acolhida fraterna, amor e apoio concreto para que ninguém se sinta excluído da família de Deus",
              "Crítica constante",
              "Esquecimento na oração",
            ],
            answer: 1,
            explanation:
              "Ninguém fica sem família neste mundo: a Igreja é casa e família para todos, com especial solicitude pelos feridos e sós (CIC 1651, 1658).",
          },
        ],
      },
    ],
  },
  {
    id: "teologia-do-corpo",
    title: "Corpo, Alma e Unidade da Pessoa Humana",
    emoji: "🌿",
    lessons: [
      {
        id: "unidade-corpo-alma",
        title: "Unidade substancial de corpo e alma",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "Não temos apenas um corpo: somos corpo e alma",
            text: "O ser humano não é um espírito preso numa carcaça nem só matéria biológica. Corpo e alma formam uma única natureza humana criada por Deus à sua imagem e semelhança.",
            example:
              "Cuidar do sono, da alimentação e da saúde física sabendo que o corpo participa da dignidade da pessoa.",
            source: "Gn 2,7 · CIC 362-365",
          },
          {
            title: "Templo do Espírito Santo",
            text: "Pelo Batismo, nosso próprio corpo torna-se templo do Espírito Santo e é destinado à ressurreição gloriosa no último dia.",
            example:
              "Tratar o próprio corpo e o corpo dos outros com imenso respeito e reverência.",
            source: "1Cor 6,19-20 · CIC 364, 997",
          },
          {
            title: "Igual dignidade na diferença entre homem e mulher",
            text: "Deus criou o ser humano homem e mulher em igual dignidade pessoal e bela complementaridade, chamados ao dom sincero de si.",
            example:
              "Rejeitar qualquer preconceito, violência ou desrespeito contra mulheres ou homens.",
            source: "Gn 1,27 · CIC 369-372, 2334",
          },
        ],
        questions: [
          {
            prompt: "Como o Catecismo descreve a relação entre o corpo e a alma na pessoa humana?",
            options: [
              "O corpo é mau e deve ser desprezado",
              "Corpo espiritual e alma formam uma unidade profunda, sendo o corpo criado bom e destinado à ressurreição",
              "A alma é apenas uma ilusão química",
              "Apenas a alma tem valor para Deus",
            ],
            answer: 1,
            explanation:
              "A unidade da alma e do corpo é tão profunda que se deve considerar a alma como a forma do corpo, ambos bons e queridos por Deus (CIC 364-365).",
          },
          {
            prompt:
              "Por que São Paulo afirma que devemos glorificar a Deus também com o nosso corpo (1Cor 6,19-20)?",
            options: [
              "Porque o corpo é templo do Espírito Santo resgatado por Cristo",
              "Por vaidade estética apenas",
              "Porque a saúde garante a salvação sem graça",
              "Por medo da matéria",
            ],
            answer: 0,
            explanation:
              "Nosso corpo foi assumido pelo Verbo na Encarnação e santificado pelo Batismo como templo do Espírito (CIC 364, 2517).",
          },
          {
            prompt: "Qual é o ensinamento bíblico fundamental sobre homem e mulher em Gn 1,27?",
            options: [
              "Um tem mais dignidade humana que o outro",
              "Ambos foram criados à imagem de Deus com igual dignidade e complementaridade",
              "Apenas o homem é imagem de Deus",
              "A diferença entre ambos é um acidente sem sentido",
            ],
            answer: 1,
            explanation:
              "Homem e mulher são ambos, com idêntica dignidade pessoal, imagem de Deus Pai e chamados à comunhão (CIC 369, 2334).",
          },
        ],
      },
      {
        id: "significado-esponsal-corpo",
        title: "O significado esponsal do corpo e a linguagem do amor",
        emoji: "💐",
        xp: 20,
        teachings: [
          {
            title: "O corpo revela a vocação para amar",
            text: "Como aprofundou São João Paulo II na Teologia do Corpo, o corpo humano carrega o chamado a sair do egoísmo e tornar-se dom de amor verdadeiro ao outro.",
            example:
              "Avaliar se nossos gestos e palavras expressam cuidado real pelas pessoas ou apenas interesse próprio.",
            source: "Gn 2,24 · CIC 2331-2333",
          },
          {
            title: "Falar a verdade com o corpo",
            text: "A intimidade sexual foi criada por Deus como uma linguagem belíssima que diz 'sou todo teu para sempre e aberto à vida'; por isso sua verdade plena pertence à aliança do Matrimônio.",
            example:
              "Valorizar amizades puras, diálogo profundo e respeito aos limites físicos no namoro.",
            source: "1Cor 6,18 · CIC 2350-2351",
          },
          {
            title: "Amar é querer o bem do outro",
            text: "O contrário do amor verdadeiro não é apenas o ódio, mas usar outra pessoa como objeto de prazer ou vaidade. Amor autêntico respeita o tempo, a alma e a dignidade eterna do outro.",
            example:
              "Rejeitar conteúdos pornográficos que reduzem pessoas criadas à imagem de Deus a objetos de consumo.",
            source: "1Cor 13,4-7 · CIC 2354, 2514",
          },
        ],
        questions: [
          {
            prompt:
              "Por que a Igreja ensina que a união sexual pertence propriamente à aliança do Matrimônio?",
            options: [
              "Porque o corpo e o sexo seriam impuros",
              "Porque o ato conjugal exprime a doação total, fiel, para toda a vida e aberta à fecundidade, própria do Matrimônio",
              "Por simples regra social do passado",
              "Porque proíbe a alegria humana",
            ],
            answer: 1,
            explanation:
              "O amor conjugal exige doação definitiva e exclusiva no Matrimônio para que o gesto corporal não minta sobre a entrega total (CIC 2337, 2350, 2366).",
          },
          {
            prompt: "Por que a pornografia fere gravemente a dignidade humana segundo o Catecismo?",
            options: [
              "Porque ocupa memória no aparelho apenas",
              "Porque reduz a pessoa humana e a intimidade sagrada do amor a objeto de consumo egoísta",
              "Porque não tem legenda",
              "Apenas quando é paga",
            ],
            answer: 1,
            explanation:
              "A pornografia ofende gravemente a castidade ao perverter o ato conjugal e transformar pessoas em meros objetos de lucro e prazer (CIC 2354).",
          },
          {
            prompt: "Qual é o critério do amor verdadeiro segundo a fé cristã?",
            options: [
              "Usar o outro para se sentir bem temporariamente",
              "Querer sinceramente o bem integral da outra pessoa, com respeito, fidelidade e autodomínio",
              "Exigir provas que firam a consciência do outro",
              "Evitar compromissos duradouros",
            ],
            answer: 1,
            explanation:
              "O amor cristão reconhece no outro um filho de Deus cujo valor infinito jamais pode ser instrumentalizado (CIC 1789, 2339).",
          },
        ],
      },
      {
        id: "castidade-liberdade-amar",
        title: "Castidade: a liberdade de saber amar",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Castidade não é repressão, é integração",
            text: "A virtude da castidade significa integrar positivamente a afetividade e a sexualidade no amor verdadeiro, sendo senhor de si em vez de escravo de impulsos.",
            example:
              "Entender que dizer 'não' a um impulso passageiro torna o coração livre para dizer um 'sim' verdadeiro.",
            source: "Gl 5,22-23 · CIC 2337-2341",
          },
          {
            title: "Chamado para todos os estados de vida",
            text: "Todos os batizados são chamados à castidade segundo o seu estado: solteiros na continência, noivos na preparação respeitosa, casados na fidelidade e respeito mútuo, e consagrados na virgindade pelo Reino.",
            example:
              "Pedir a Deus a virtude do pudor, que protege o mistério e a beleza da pessoa diante de olhares curiosos.",
            source: "Mt 5,8 · CIC 2348-2349, 2521",
          },
          {
            title: "Recomeçar sempre com paciência e graça",
            text: "A castidade cresce gradualmente ao longo da vida com a graça dos sacramentos, boas amizades, vigilância sobre os sentidos e recurso humilde à Confissão sempre que houver queda.",
            example:
              "Nunca desistir após tropeços; buscar a Confissão com confiança na misericórdia de Jesus.",
            source: "2Cor 12,9 · CIC 2342-2345",
          },
        ],
        questions: [
          {
            prompt: "Como o Catecismo define a virtude da castidade?",
            options: [
              "Medo de qualquer afeto ou amizade",
              "A integração feliz e livre da sexualidade na pessoa humana, unindo corpo, afeto e espírito no amor verdadeiro",
              "Uma regra válida apenas para padres e freiras",
              "Fingir que desejos não existem",
            ],
            answer: 1,
            explanation:
              "A castidade é o domínio de si que liberta o coração para o dom sincero e amoroso em todo estado de vida (CIC 2337, 2339).",
          },
          {
            prompt: "Qual é a função positiva da virtude do pudor segundo a doutrina católica?",
            options: [
              "Gerar vergonha do próprio corpo criado por Deus",
              "Proteger a intimidade da pessoa e guardar a dignidade do amor contra a banalização",
              "Impedir conversas educadas",
              "Obrigar o isolamento social",
            ],
            answer: 1,
            explanation:
              "O pudor preserva o mistério das pessoas e de seu amor, inspirando escolha respeitosa de gestos, palavras e olhares (CIC 2521-2522).",
          },
          {
            prompt: "Quais meios ajudam de modo concreto a crescer na pureza do coração?",
            options: [
              "Confiar apenas no próprio orgulho sem rezar",
              "A graça de Deus nos sacramentos, a oração, a temperança, boas amizades e a fuga de ocasiões de pecado",
              "Expor-se livremente a todo estímulo erótico",
              "Desanimar e abandonar a Confissão após uma falha",
            ],
            answer: 1,
            explanation:
              "A pureza exige o dom da graça, oração fiel, autodomínio e vigilância prudente com paciência cotidiana (CIC 2340, 2520).",
          },
        ],
      },
    ],
  },
  {
    id: "bioetica-vida",
    title: "Cuidado e Defesa da Vida Humana",
    emoji: "🌱",
    lessons: [
      {
        id: "dignidade-vida-desde-concepcao",
        title: "Sagrada desde a concepção até a morte natural",
        emoji: "👶",
        xp: 20,
        teachings: [
          {
            title: "Todo ser humano é querido pessoalmente por Deus",
            text: "A vida humana é sagrada porque desde a sua origem envolve a ação criadora de Deus e permanece sempre em relação especial com o Criador, seu único fim.",
            example:
              "Defender a vida nascente com ternura e também apoiar concretamente mães e famílias em dificuldade.",
            source: "Sl 139,13-16 · Jr 1,5 · CIC 2258, 2270",
          },
          {
            title: "Proteção ao embrião e à criança por nascer",
            text: "Desde o primeiro instante da concepção, o ser humano deve ser respeitado e tratado como pessoa com direito inviolável à vida. Por isso a Igreja rejeita o aborto provocado e sempre acolhe mulheres feridas com misericórdia.",
            example:
              "Conhecer ou apoiar casas de acolhida a gestantes em situação de vulnerabilidade.",
            source: "CIC 2270-2275",
          },
          {
            title: "Compaixão e misericórdia em situações dramáticas",
            text: "A verdade moral caminha sempre de mãos dadas com o amor pastoral: para quem sofre pela dor de um aborto passado, a Igreja oferece cura, perdão sacramental e esperança.",
            example:
              "Falar sempre da defesa da vida com firmeza na verdade e profunda compaixão pelas pessoas.",
            source: "Jo 8,11 · CIC 1465, 2272",
          },
        ],
        questions: [
          {
            prompt:
              "Desde que momento a vida humana deve ser respeitada e protegida de modo absoluto?",
            options: [
              "Somente após aprender a falar",
              "Desde o primeiro instante da concepção até a morte natural",
              "Apenas após os sete anos",
              "Quando é considerada produtiva pela sociedade",
            ],
            answer: 1,
            explanation:
              "A vida humana deve ser absolutamente respeitada e protegida desde a concepção, pois já tem dignidade inviolável de pessoa (CIC 2270).",
          },
          {
            prompt:
              "Como unir fidelidade moral na defesa da vida nascente e caridade cristã na prática?",
            options: [
              "Condenando pessoas sem oferecer ajuda concreta",
              "Rejeitando o aborto e, ao mesmo tempo, acolhendo e apoiando material e espiritualmente gestantes em crise e oferecendo perdão a quem se arrepende",
              "Ficando indiferente ao sofrimento das mães",
              "Mudando o quinto mandamento",
            ],
            answer: 1,
            explanation:
              "A defesa da vida exige amor concreto pelas crianças e pelas mães em dificuldade, além da porta sempre aberta da misericórdia (CIC 2272, 2447).",
          },
          {
            prompt: "Qual é o fundamento último da dignidade inviolável da vida humana?",
            options: [
              "A opinião da maioria em cada país",
              "O fato de cada pessoa ser criada à imagem de Deus e amada pessoalmente por Ele",
              "O nível de renda ou inteligência",
              "O estado perfeito de saúde física",
            ],
            answer: 1,
            explanation:
              "Só Deus é o Senhor da vida desde o seu começo até ao seu fim; ninguém pode arrogar-se o direito de destruir um inocente (CIC 2258).",
          },
        ],
      },
      {
        id: "cuidado-enfermos-idosos",
        title: "Cuidar dos doentes e idosos no fim da vida",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Cuidados paliativos: aliviar a dor sem matar",
            text: "A Igreja rejeita a eutanásia (provocar diretamente a morte para acabar com a dor), mas apoia plenamente os cuidados paliativos que aliviam o sofrimento físico, emocional e espiritual até o fim.",
            example:
              "Visitar idosos e doentes da família ou da paróquia para que jamais se sintam um peso descartável.",
            source: "Mt 25,36 · CIC 2276-2279",
          },
          {
            title: "Evitar a obstinação terapêutica desproporcional",
            text: "Recusar procedimentos médicos extraordinários e desproporcionais que apenas prolongam artificialmente a agonia não é eutanásia: é aceitar com paz a condição humana diante da morte.",
            example:
              "Rezar para que famílias e médicos tenham sabedoria ética, humildade e ternura junto aos enfermos terminais.",
            source: "CIC 2278",
          },
          {
            title: "Presença fiel junto a quem morre",
            text: "Mesmo quando a medicina não pode mais curar, sempre se pode cuidar: segurar a mão, rezar com o doente e chamar o sacerdote para a Unção e o Viático.",
            example: "Valorizar a sabedoria e as histórias dos avós e idosos em casa.",
            source: "Pr 16,31 · CIC 2218, 2276",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença ética essencial entre eutanásia e cuidados paliativos?",
            options: [
              "São exatamente a mesma prática",
              "A eutanásia provoca intencionalmente a morte do doente; os cuidados paliativos aliviam a dor e acompanham o doente com dignidade até a morte natural",
              "Os cuidados paliativos recusam remédios contra dor",
              "A Igreja proíbe analgésicos no fim da vida",
            ],
            answer: 1,
            explanation:
              "A eutanásia é moralmente inaceitável; já o uso de analgésicos e cuidados paliativos para aliviar o sofrimento do moribundo é conforme a dignidade humana (CIC 2277, 2279).",
          },
          {
            prompt:
              "É moralmente obrigatório prolongar artificialmente o processo de morte por meios desproporcionais (obstinação terapêutica)?",
            options: [
              "Sim, sempre a qualquer custo",
              "Não; pode-se legitimamente renunciar a procedimentos excessivos ou sem esperança real, mantendo os cuidados normais devidos ao doente",
              "Apenas em jovens",
              "Somente com autorização civil especial",
            ],
            answer: 1,
            explanation:
              "A interrupção de meios médicos onerosos, extraordinários e desproporcionais não equivale ao suicídio ou eutanásia, mas aceita a morte natural (CIC 2278).",
          },
          {
            prompt:
              "Que atitude cristã nunca pode faltar em relação às pessoas idosas e fragilizadas?",
            options: [
              "Isolá-las quando dão trabalho",
              "Honrá-las, escutá-las e ampará-las com gratidão e amor concreto",
              "Tratá-las como incapazes de espiritualidade",
              "Ignorar suas visitas médicas",
            ],
            answer: 1,
            explanation:
              "Os doentes e diminuídos têm direito a atenção especial para levarem vida tão normal e acompanhada quanto possível (CIC 2276).",
          },
        ],
      },
      {
        id: "saude-ciencia-etica-crista",
        title: "Ciência médica a serviço da pessoa humana",
        emoji: "🩺",
        xp: 20,
        teachings: [
          {
            title: "Nem tudo o que é tecnicamente possível é bom",
            text: "A pesquisa científica e a medicina são dons preciosos de Deus para curar e aliviar a dor, mas precisam ser guiadas pela ética para que nunca usem seres humanos como meros objetos de laboratório.",
            example:
              "Admirar o trabalho dos profissionais de saúde cristãos e rezar pela ética em suas decisões diárias.",
            source: "Eclo 38,1-4 · CIC 2292-2295",
          },
          {
            title: "Doação gratuita de sangue e órgãos",
            text: "A doação voluntária e gratuita de sangue e órgãos (após morte cerebral confirmada ou em vida sem risco grave) é um ato nobre e meritório de caridade que salva vidas.",
            example:
              "Se puder e sua saúde permitir, considerar doar sangue regularmente como ato concreto de amor ao próximo.",
            source: "Jo 15,13 · CIC 2296",
          },
          {
            title: "A dignidade da origem de cada criança",
            text: "Todo filho tem o direito de ser concebido como fruto do abraço amoroso de seus pais no Matrimônio — como um dom recebido, não como produto fabricado em laboratório.",
            example:
              "Compreender com respeito e caridade os casais que vivem a dor da infertilidade, lembrando que a adoção é também um caminho luminoso de fecundidade.",
            source: "CIC 2376-2379",
          },
        ],
        questions: [
          {
            prompt:
              "Como a Igreja vê a pesquisa científica e a medicina voltadas à cura e ao bem da pessoa?",
            options: [
              "Como inimigas da fé cristã",
              "Como expressões valiosas da inteligência dada por Deus, desde que respeitem a dignidade de todo ser humano",
              "Como desnecessárias para quem reza",
              "Como isentas de qualquer limite moral",
            ],
            answer: 1,
            explanation:
              "A investigação científica é um bem valioso quando posta a serviço do ser humano e respeita os critérios fundamentais da moralidade (CIC 2293-2294).",
          },
          {
            prompt:
              "Qual é o juízo moral do Catecismo sobre a doação gratuita de órgãos após a morte?",
            options: [
              "É proibida pela Bíblia",
              "É nobre e meritória como manifestação de solidariedade generosa, mediante consentimento ético e respeito ao corpo",
              "Impede a ressurreição futura",
              "Só vale se for vendida por dinheiro",
            ],
            answer: 1,
            explanation:
              "O transplante gratuito de órgãos é conforme a lei moral e pode ser altamente meritório se os riscos forem proporcionais e houver consentimento livre (CIC 2296).",
          },
          {
            prompt:
              "Que caminho belo e fecundo a Igreja recorda com especial estima aos casais que enfrentam infertilidade?",
            options: [
              "Sentir-se menos amados por Deus",
              "Adoção de crianças necessitadas e entrega generosa em obras de serviço familiar e pastoral",
              "Romper o vínculo matrimonial",
              "Experimentar qualquer técnica sem limites éticos",
            ],
            answer: 1,
            explanation:
              "Os esposos que sofrem infertilidade são convidados a descobrir caminhos fecundos na adoção, no acolhimento e no serviço à vida (CIC 2379).",
          },
        ],
      },
    ],
  },
  {
    id: "verdade-comunicacao",
    title: "Ética na Comunicação e Redes Digitais",
    emoji: "💬",
    lessons: [
      {
        id: "verdade-fala-calunia-maledicencia",
        title: "A verdade na fala: contra fofoca, calúnia e maledicência",
        emoji: "🗣️",
        xp: 20,
        teachings: [
          {
            title: "Guardar a boa fama do próximo",
            text: "O oitavo mandamento exige amar e falar a verdade, evitando destruir o bom nome das pessoas por juízos temerários, fofocas e comentários maldosos pelas costas.",
            example:
              "Quando uma conversa descambar para fofoca sobre alguém ausente, mudar o rumo com gentileza ou defender a pessoa.",
            source: "Tg 3,5-10 · CIC 2477-2479",
          },
          {
            title: "Maledicência e calúnia: qual a diferença?",
            text: "Na maledicência revela-se sem razão justa um defeito verdadeiro de alguém; na calúnia inventa-se uma mentira para manchar sua honra. Ambas ferem gravemente a caridade e a justiça.",
            example:
              "Antes de repetir uma crítica ou notícia sobre alguém, perguntar: 'É verdadeiro? É justo? É necessário?'",
            source: "Ex 20,16 · CIC 2477",
          },
          {
            title: "Sim, sim; não, não: transparência cristã",
            text: "Jesus pediu uma palavra reta e sincera, livre de falsidade, lisonja interessada e meias verdades manipuladoras.",
            example: "Assumir um erro de forma direta e honesta em vez de inventar desculpas.",
            source: "Mt 5,37 · CIC 2468, 2482",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Comunicação que edifica ou fere",
            instruction: "Classifique cada atitude na comunicação cotidiana.",
            categories: ["Constrói na verdade e caridade", "Fere o oitavo mandamento"],
            items: [
              { id: "c1", text: "Corrigir em particular com respeito para ajudar", category: 0 },
              { id: "c2", text: "Espalhar defeitos de um ausente por entretenimento", category: 1 },
              { id: "c3", text: "Inventar história falsa contra um colega", category: 1 },
              { id: "c4", text: "Verificar fatos antes de repassar mensagem", category: 0 },
            ],
            explanation:
              "A língua pode abençoar ou ferir: o cristão une veracidade, discrição e caridade ao falar dos outros (CIC 2477, 2489).",
            source: "Tg 3,9 · CIC 2477",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença entre maledicência e calúnia segundo o Catecismo?",
            options: [
              "São exatamente sinônimos",
              "Maledicência é divulgar faltas reais de outrem sem razão válida; calúnia é atribuir falsamente ao outro faltas que não cometeu",
              "Maledicência só existe por escrito",
              "Nenhuma das duas fere a caridade",
            ],
            answer: 1,
            explanation:
              "Tanto revelar sem motivo objetivo os defeitos reais (maledicência) quanto mentir contra a honra alheia (calúnia) ferem o oitavo mandamento (CIC 2477).",
          },
          {
            prompt: "O que é o 'juízo temerário' condenado no oitavo mandamento?",
            options: [
              "Uma sentença proferida em tribunal",
              "Aceitar como verdadeira, sem fundamento suficiente, uma falta moral ou má intenção no próximo",
              "Ter prudência ao atravessar a rua",
              "Pedir esclarecimento com respeito",
            ],
            answer: 1,
            explanation:
              "Para evitar o juízo temerário, cada qual deve interpretar favoravelmente os pensamentos, palavras e ações do próximo (CIC 2478).",
          },
          {
            prompt: "Quando temos o dever positivo de guardar segredo sobre algo confidenciado?",
            options: [
              "Nunca, pois tudo deve ser postado",
              "Sempre que a discrição e os segredos profissionais ou pessoais protegem o bem e a honra das pessoas, salvo grave risco injusto",
              "Apenas quando nos pagam",
              "Somente com estranhos",
            ],
            answer: 1,
            explanation:
              "O bem e a segurança dos outros, o respeito pela vida privada e o bem comum são razões suficientes para calar o que não convém ser sabido (CIC 2489, 2491).",
          },
        ],
      },
      {
        id: "redes-sociais-caridade-digital",
        title: "Caridade digital e responsabilidade nas redes",
        emoji: "📱",
        xp: 20,
        teachings: [
          {
            title: "Atrás de cada tela há um rosto amado por Deus",
            text: "A distância de um celular ou perfil anônimo nunca dá licença para insultar, humilhar ou ridicularizar alguém. A mesma regra de ouro do Evangelho vale no mundo digital.",
            example:
              "Nunca escrever em comentários virtuais o que você não diria com mansidão olhando nos olhos da pessoa.",
            source: "Mt 7,12 · CIC 2493-2494",
          },
          {
            title: "Combater notícias falsas e ódio",
            text: "Compartilhar notícias não verificadas, montagens e ataques caluniosos multiplica a mentira em segundos. O cristão verifica fontes e prefere semear paz e verdade.",
            example:
              "Pausar por dez segundos antes de encaminhar mensagens alarmistas ou agressivas em grupos.",
            source: "Ef 4,25 · CIC 2485, 2496",
          },
          {
            title: "Sobriedade com o celular e presença real",
            text: "Usar as redes com moderação garante que a tela não roube o tempo da oração, do descanso e do olhar atento às pessoas presentes à nossa mesa.",
            example: "Deixar o celular longe durante as refeições em família e momentos de oração.",
            source: "1Cor 6,12 · CIC 2496",
          },
        ],
        questions: [
          {
            prompt:
              "Qual critério cristão deve nortear nossas postagens, comentários e encaminhamentos digitais?",
            options: [
              "Gerar o maior número de polêmicas e raiva possível",
              "Buscar a verdade verificada, a justiça e a caridade, respeitando a dignidade de quem lê e de quem é citado",
              "Compartilhar tudo o que confirma nossos preconceitos",
              "Achar que a internet não tem valor moral",
            ],
            answer: 1,
            explanation:
              "A comunicação deve sempre servir à verdade e à caridade, evitando o sensacionalismo e a difamação (CIC 2494, 2496).",
          },
          {
            prompt: "Por que a sobriedade no uso das telas é importante para a vida espiritual?",
            options: [
              "Porque a tecnologia é intrinsecamente má",
              "Para preservar a atenção interior na oração, o descanso saudável e a presença afetiva com quem está ao nosso lado",
              "Para nunca trabalhar com computadores",
              "Porque impede ler notícias verdadeiras",
            ],
            answer: 1,
            explanation:
              "Os meios de comunicação devem ser usados com moderação e disciplina para não escravizar o coração nem sufocar o recolhimento (CIC 2496).",
          },
          {
            prompt:
              "O que fazer quando percebemos que encaminhamos uma informação falsa em um grupo?",
            options: [
              "Fingir que não fomos nós",
              "Retificar com humildade no mesmo grupo avisando que a notícia não era verdadeira",
              "Bloquear todos os participantes",
              "Mandar mais duas notícias parecidíssimas",
            ],
            answer: 1,
            explanation:
              "A honestidade cristã pede reparar o erro cometido pela mentira ou informação falsa sempre que possível (CIC 2487).",
          },
        ],
      },
      {
        id: "silencio-escuta-prudencia",
        title: "O valor do silêncio, da escuta e da prudência",
        emoji: "🤫",
        xp: 20,
        teachings: [
          {
            title: "Sem silêncio interior não se escuta Deus",
            text: "Vivemos cercados de ruído e notificações. O silêncio fecundo não é vazio, mas espaço de acolhida onde Deus fala ao coração e aprendemos a escutar de verdade quem sofre.",
            example:
              "Reservar cinco minutos de silêncio completo ao chegar em casa ou antes de começar a rezar.",
            source: "1Rs 19,12 · CIC 2717, 2724",
          },
          {
            title: "Pronto para ouvir, lento para falar",
            text: "A Carta de São Tiago recorda que escutar antes de responder evita muitas palavras apressadas e iradas. Quem sabe ouvir ama com respeito.",
            example:
              "Quando alguém estiver desabafando, ouvir até o fim sem interromper com conselhos prontos.",
            source: "Tg 1,19 · CIC 1806",
          },
          {
            title: "Beleza da arte, da música e da cultura cristã",
            text: "Toda verdade, bondade e beleza autêntica reflete o Criador. A Igreja incentiva uma comunicação e cultura que elevem o espírito humano.",
            example:
              "Escolher livros, filmes e músicas que alimentem a esperança, o bem e a sensibilidade cristã.",
            source: "Fl 4,8 · CIC 2500-2501",
          },
        ],
        questions: [
          {
            prompt: "Por que o silêncio interior é tão valorizado na espiritualidade católica?",
            options: [
              "Por indiferença com os problemas do mundo",
              "Porque prepara a alma para ouvir a voz discreta de Deus e amar com lucidez",
              "Para evitar falar com familiares",
              "Por falta de assunto",
            ],
            answer: 1,
            explanation:
              "No silêncio contemplativo acolhemos o olhar de Cristo e deixamos que sua Palavra purifique o coração (CIC 2717).",
          },
          {
            prompt: "Que conselho prático dá São Tiago (Tg 1,19) para nossa maneira de dialogar?",
            options: [
              "Falar alto e interromper logo no começo",
              "Ser pronto para ouvir, lento para falar e lento para se irar",
              "Responder apenas por mensagens escritas",
              "Evitar ouvir pessoas mais jovens ou mais velhas",
            ],
            answer: 1,
            explanation:
              "A escuta paciente e o domínio da ira revelam prudência e mansidão cristã (Tg 1,19; CIC 1806, 2302).",
          },
          {
            prompt: "Como a verdadeira beleza artística relaciona-se com Deus segundo o Catecismo?",
            options: [
              "Não tem ligação alguma com a fé",
              "A beleza verdadeira nasce da verdade e do bem, refletindo a perfeição do Criador e elevando o coração a Ele",
              "Só existe beleza fora do mundo material",
              "A arte serve apenas para propaganda",
            ],
            answer: 1,
            explanation:
              "A arte sagrada e toda beleza autêntica aproximam o ser humano da beleza infinita de Deus (CIC 2500-2502).",
          },
        ],
      },
    ],
  },
  {
    id: "ecologia-mordomia",
    title: "Cuidado com os Bens, Tempo e Criação",
    emoji: "🌍",
    lessons: [
      {
        id: "mordomia-criacao-laudato",
        title: "Mordomos fiéis da criação (Laudato Si')",
        emoji: "🌳",
        xp: 20,
        teachings: [
          {
            title: "Cultivar e guardar o jardim de Deus",
            text: "No Gênesis, Deus confia a terra ao ser humano para 'cultivá-la e guardá-la' — não como dono absoluto que destrói, mas como administrador fiel que responde ao Criador.",
            example:
              "Evitar desperdício de água, energia e alimentos como gesto espiritual de gratidão ao Criador.",
            source: "Gn 2,15 · CIC 373, 2415",
          },
          {
            title: "Tudo está interligado: ecologia integral",
            text: "Como lembrou o Papa Francisco na Laudato Si', o cuidado da casa comum é inseparável do cuidado dos pobres, dos trabalhadores e das gerações futuras.",
            example:
              "Separar resíduos recicláveis e cuidar da limpeza dos espaços comuns do bairro e da igreja.",
            source: "Sl 104,24 · CIC 2415, 2456",
          },
          {
            title: "Respeito também às criaturas e animais",
            text: "Os animais são criaturas de Deus que merecem cuidado sem crueldade inútil, mantendo sempre clara a primazia única e sagrada da pessoa humana.",
            example:
              "Cuidar responsavelmente dos animais domésticos e admirar a natureza louvando o Criador.",
            source: "CIC 2416-2418",
          },
        ],
        questions: [
          {
            prompt: "O que significa a vocação bíblica de 'cultivar e guardar' a terra (Gn 2,15)?",
            options: [
              "Explorar os recursos naturais sem nenhum limite até destruí-los",
              "Administrar responsavelmente a criação como mordomos de Deus, respeitando seus ritmos e pensando nas futuras gerações",
              "Nunca trabalhar com a terra",
              "Adorar árvores e rios como divindades",
            ],
            answer: 1,
            explanation:
              "O domínio confiado por Deus ao homem não é poder absoluto nem destrutivo, mas administração sábia que respeita o plano do Criador (CIC 373, 2415).",
          },
          {
            prompt: "Qual é a posição do Catecismo quanto ao trato com os animais?",
            options: [
              "Pode-se maltratar animais livremente sem falta moral",
              "É contrário à dignidade humana fazer sofrer inutilmente os animais ou desperdiçar-lhes a vida, embora os humanos tenham dignidade superior",
              "Os animais têm exatamente a mesma missão moral dos humanos",
              "É proibido cuidar de animais",
            ],
            answer: 1,
            explanation:
              "Os animais são criaturas de Deus; não convém fazê-los sofrer inutilmente, mas também não se deve dirigir a eles a caridade devida só às pessoas (CIC 2416-2418).",
          },
          {
            prompt: "Por que o desperdício alimentar e de recursos fere também a caridade social?",
            options: [
              "Apenas por questão de preço pessoal",
              "Porque os bens da terra têm destinação universal para sustentar todas as pessoas e famílias",
              "Porque ninguém precisa de água limpa",
              "Não há relação entre consumo e pobreza",
            ],
            answer: 1,
            explanation:
              "Os bens da criação destinam-se a todo o gênero humano; o consumo sóbrio respeita os pobres e o planeta (CIC 2402, 2415).",
          },
        ],
      },
      {
        id: "sobriedade-consumo-partilha",
        title: "Sobriedade feliz, trabalho e partilha dos bens",
        emoji: "🥖",
        xp: 20,
        teachings: [
          {
            title: "Liberdade diante do consumo exagerado",
            text: "A alegria cristã não vem de acumular coisas ou seguir cada modismo: viver com sobriedade e gratidão liberta da inveja e deixa recursos livres para ajudar quem precisa.",
            example:
              "Antes de uma compra por impulso, perguntar: 'Preciso mesmo disso, ou posso esperar e partilhar?'",
            source: "Lc 12,15 · CIC 2445, 2544",
          },
          {
            title: "Destino universal dos bens e propriedade justa",
            text: "A Igreja reconhece o direito legítimo à propriedade privada obtida com honestidade, mas lembra que ela tem uma função social: nunca fechar os olhos ao irmão com fome.",
            example:
              "Separar roupas e alimentos em bom estado — não restos estragados — para doar com dignidade.",
            source: "1Jo 3,17 · CIC 2402-2403",
          },
          {
            title: "Dignidade do trabalho humano",
            text: "O trabalho não é castigo: colabora com a obra criadora de Deus, sustenta a família e aperfeiçoa o mundo, merecendo salário justo e condições seguras.",
            example: "Trabalhar com capricho e honestidade mesmo quando ninguém está fiscalizando.",
            source: "2Ts 3,10 · CIC 2427-2434",
          },
        ],
        questions: [
          {
            prompt:
              "Como se relacionam o direito à propriedade privada e o destino universal dos bens?",
            options: [
              "São totalmente incompatíveis",
              "A propriedade privada é legítima, mas subordina-se ao bem comum e ao dever de solidariedade para com os necessitados",
              "Quem tem bens não deve trabalhar",
              "Ninguém pode possuir sua própria casa",
            ],
            answer: 1,
            explanation:
              "O direito à propriedade não abole o fato de que a terra foi dada a todos os homens; todo proprietário é chamado a ser administrador solidário (CIC 2402-2404).",
          },
          {
            prompt: "Por que a sobriedade traz mais paz do que o consumismo sem limites?",
            options: [
              "Porque impede qualquer conforto legítimo",
              "Porque liberta o coração do apego escravizante e abre espaço para a alegria das relações e da partilha",
              "Porque proíbe presentear amigos",
              "Porque faz ignorar o trabalho",
            ],
            answer: 1,
            explanation:
              "O desapego das riquezas e a temperança abrem o coração ao Reino dos Céus e à justiça fraterna (CIC 2544-2547).",
          },
          {
            prompt: "O que exige a justiça cristã nas relações de trabalho?",
            options: [
              "Atrasar tarefas e pagar salários injustos",
              "Salário justo que garanta vida digna ao trabalhador e execução honesta e diligente do serviço",
              "Trabalhar sem descanso semanal nunca",
              "Desprezar profissões manuais",
            ],
            answer: 1,
            explanation:
              "O salário justo é fruto legítimo do trabalho; retê-lo ou recusar o empenho devido fere a justiça (Tg 5,4; CIC 2434).",
          },
        ],
      },
      {
        id: "uso-cristao-tempo-descanso",
        title: "O tempo como dom e a santidade do descanso",
        emoji: "⏳",
        xp: 20,
        teachings: [
          {
            title: "O tempo pertence a Deus e não volta atrás",
            text: "Cada dia recebido é um talento precioso que Deus nos confia para amar, aprender e servir, evitando tanto a preguiça quanto o ativismo agitado que esquece de rezar.",
            example: "Começar a manhã organizando as prioridades do dia diante de Deus.",
            source: "Ef 5,15-16 · CIC 2427",
          },
          {
            title: "O descanso dominical como cura da alma",
            text: "Guardar o domingo não é perder produtividade: é proclamar que não somos escravos nem máquinas, mas filhos de Deus que celebram a Ressurreição, descansam e convivem em família.",
            example:
              "Reservar o domingo para a Missa, um bom almoço em família e um descanso que renove o espírito.",
            source: "Mc 2,27 · CIC 2184-2188",
          },
          {
            title: "Paciência com as etapas da vida",
            text: "Deus age no tempo com paciência de agricultor: saber esperar, amadurecer projetos e acompanhar idosos e crianças sem pressa é uma forma profunda de caridade.",
            example:
              "Dedicar tempo de qualidade — sem olhar o relógio — a uma pessoa querida esta semana.",
            source: "Ecl 3,1 · CIC 2742",
          },
        ],
        questions: [
          {
            prompt: "Qual é o sentido profundo do descanso dominical além de parar de trabalhar?",
            options: [
              "Passar o dia inteiro distraído em compras apenas",
              "Participar da Eucaristia, descansar corpo e espírito e cultivar a família, a caridade e a gratuidade",
              "Proibir qualquer ajuda urgente ao próximo",
              "Dormir durante a Santa Missa",
            ],
            answer: 1,
            explanation:
              "O domingo é dia de culto a Deus, de alegria, de repouso do trabalho e de obras de misericórdia e convívio fraterno (CIC 2184-2186).",
          },
          {
            prompt: "Que dois extremos prejudicam o uso cristão do tempo?",
            options: [
              "Oração matinal e exame noturno",
              "A preguiça ociosa de um lado e o ativismo ansioso sem espaço para Deus e para as pessoas do outro",
              "Trabalho honesto e descanso dominical",
              "Estudo paciente e escuta fraterna",
            ],
            answer: 1,
            explanation:
              "Equilibrar trabalho diligente, oração fiel e repouso humano reflete a sabedoria do Criador (CIC 2184, 2427).",
          },
          {
            prompt:
              "Por que Jesus afirmou que 'o sábado foi feito para o homem, e não o homem para o sábado' (Mc 2,27)?",
            options: [
              "Para abolir o dia do Senhor",
              "Para mostrar que o dia santo existe para a liberdade, cura e comunhão do ser humano com Deus e os irmãos",
              "Para proibir curas aos domingos",
              "Para dispensar a oração",
            ],
            answer: 1,
            explanation:
              "O dia do Senhor santifica o trabalho humano e serve à vida, à caridade e ao louvor livre de Deus (CIC 2173, 2185).",
          },
        ],
      },
    ],
  },
  {
    id: "oracoes-tradicionais",
    title: "Grandes Orações da Igreja",
    emoji: "📿",
    lessons: [
      {
        id: "te-deum-magnificat-benedictus",
        title: "Hinos de louvor: Te Deum, Gloria e Cânticos bíblicos",
        emoji: "🎶",
        xp: 20,
        teachings: [
          {
            title: "Te Deum laudamus: a nós, ó Deus, louvamos",
            text: "Composto nos primeiros séculos, o Te Deum é o grande hino de ação de graças da Igreja, cantado em conclaves, ordenações e na noite de 31 de dezembro pelo ano que se encerra.",
            example:
              "Participar da Missa ou oração de ação de graças com o Te Deum ao término de um ano ou grande graça.",
            source: "Sl 100,4 · CIC 2639, 2641",
          },
          {
            title: "Glória a Deus nas alturas",
            text: "Começando com o canto dos anjos em Belém, o hino 'Glória a Deus nas alturas' atravessou séculos exaltando o Pai, o Cordeiro Jesus Cristo e o Espírito Santo aos domingos e solenidades.",
            example:
              "Cantar ou rezar o Glória na Missa dominical com alegria consciente de cada título de Jesus.",
            source: "Lc 2,14 · CIC 1349, 2641",
          },
          {
            title: "Louvor gratuito porque Deus é Deus",
            text: "Diferente da oração que só pede favores, o louvor reconhece a grandeza e a beleza de Deus simplesmente por quem Ele é, preparando nossa alma para a eternidade.",
            example:
              "Passar um dia inteiro rezando apenas orações de louvor e agradecimento, sem pedir nada material.",
            source: "Ap 4,11 · CIC 2639",
          },
        ],
        questions: [
          {
            prompt: "Qual é o tema principal do hino tradicional 'Te Deum'?",
            options: [
              "Lamento fúnebre",
              "Solene ação de graças e louvor de toda a Igreja a Deus Trindade e a Cristo Rei da Glória",
              "Pedido exclusivo por chuvas",
              "Lista de regras civis",
            ],
            answer: 1,
            explanation:
              "O Te Deum une o louvor dos anjos, apóstolos, profetas e mártires em gratidão e adoração a Deus (CIC 2639).",
          },
          {
            prompt: "Qual é a característica própria da oração de louvor segundo o Catecismo?",
            options: [
              "Só acontece quando estamos tristes",
              "Dá glória a Deus mais imediatamente por Ele mesmo, além do que faz, reconhecendo que Ele é Deus",
              "Depende exclusivamente de instrumentos musicais caros",
              "Substitui a Confissão",
            ],
            answer: 1,
            explanation:
              "O louvor reconhece de forma desinteressada que Deus é Deus e canta-O por Ele mesmo (CIC 2639).",
          },
          {
            prompt:
              "De onde vêm as primeiras palavras do hino 'Glória a Deus nas alturas' cantado aos domingos na Missa?",
            options: [
              "De um tratado filosófico grego",
              "Do anúncio dos anjos aos pastores na noite do nascimento de Jesus em Belém (Lc 2,14)",
              "Do livro de Ester",
              "De um edito imperial",
            ],
            answer: 1,
            explanation:
              "A Igreja prolonga no Glória o cântico natalino dos anjos unindo céu e terra em adoração (Lc 2,14; CIC 2641).",
          },
        ],
      },
      {
        id: "angelus-regina-caeli",
        title: "O Ângelus e o Regina Caeli: memória da Encarnação",
        emoji: "🔔",
        xp: 20,
        teachings: [
          {
            title: "O Anjo do Senhor anunciou a Maria",
            text: "Rezando tradicionalmente ao amanhecer, ao meio-dia e às seis da tarde, o Ângelus recorda com três Ave-Marias a Anunciação e o 'E o Verbo se fez carne e habitou entre nós'.",
            example:
              "Colocar um discreto alarme ao meio-dia ou às 18h para parar um minuto e rezar o Ângelus.",
            source: "Lc 1,26-38 · Jo 1,14 · CIC 461, 2676",
          },
          {
            title: "Regina Caeli no Tempo Pascal",
            text: "Do Domingo de Páscoa até Pentecostes, a Igreja substitui o Ângelus pelo 'Regina Caeli' ('Rainha do Céu, alegra-te'), celebrando com Maria a Ressurreição de seu Filho.",
            example: "Mudar do Ângelus para o Regina Caeli durante os cinquenta dias da Páscoa.",
            source: "Mt 28,6 · CIC 971, 2676",
          },
          {
            title: "Consagrar os ritmos do trabalho à Encarnação",
            text: "Na tradição popular retratada até na arte, os trabalhadores nos campos ou cidades paravam ao toque do sino do Ângelus para unir seu trabalho diário ao mistério de Cristo.",
            example:
              "Usar essa pausa curta de meio-dia para acalmar a correria e lembrar que Deus habita nosso dia.",
            source: "CIC 2697",
          },
        ],
        questions: [
          {
            prompt:
              "Que grande mistério da fé católica a oração do Ângelus recorda ao longo do dia?",
            options: [
              "A construção do Templo de Salomão",
              "A Anunciação a Maria e a Encarnação do Verbo de Deus que se fez carne por nossa salvação",
              "A travessia do Mar Vermelho apenas",
              "A queda de Constantinopla",
            ],
            answer: 1,
            explanation:
              "Os três versículos do Ângelus resumem o diálogo da Anunciação, o 'Faça-se' de Maria e a Encarnação do Filho (Lc 1,38; Jo 1,14; CIC 461).",
          },
          {
            prompt: "Em qual período do ano litúrgico rezamos o 'Regina Caeli' em vez do Ângelus?",
            options: [
              "Na Quaresma",
              "No Tempo Pascal, da Páscoa até Pentecostes",
              "No Advento",
              "Somente em novembro",
            ],
            answer: 1,
            explanation:
              "Durante a alegria dos cinquenta dias pascais, a Igreja saúda Maria alegrando-se com a Ressurreição de Cristo (CIC 1168, 2676).",
          },
          {
            prompt:
              "Que horas tradicionais o sino das igrejas costuma convidar os fiéis a rezar o Ângelus?",
            options: [
              "Apenas à meia-noite",
              "Ao amanhecer (6h), ao meio-dia (12h) e ao entardecer (18h)",
              "Somente às 15h da sexta-feira",
              "Apenas uma vez por mês",
            ],
            answer: 1,
            explanation:
              "O ritmo tradicional das 6h, 12h e 18h consagra o começo, o meio e o fim da jornada de trabalho à Encarnação (CIC 2697).",
          },
        ],
      },
      {
        id: "ato-contricao-vinde-espirito",
        title: "Ato de Contrição, Veni Creator e Orações ao Anjo",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Meu Deus, eu me arrependo de todo o coração",
            text: "O Ato de Contrição é a oração clássica em que reconhecemos nossos pecados, pedimos perdão por amor a Deus que é infinitamente bom e prometemos evitar as ocasiões de pecado.",
            example:
              "Decorar o Ato de Contrição para rezá-lo com calma antes de dormir e dentro da Confissão.",
            source: "Lc 18,13 · CIC 1451, 2631",
          },
          {
            title: "Vinde, Espírito Criador (Veni Creator Spiritus)",
            text: "Hino milenar rezado antes de grandes decisões, estudos, concílios, Crisma e ordenações, invocando a luz, a força e os sete dons do Espírito Santo.",
            example:
              "Rezar 'Vinde, Espírito Santo, enchei os corações dos vossos fiéis' antes de estudar ou tomar uma decisão séria.",
            source: "Rm 8,26 · CIC 2670-2671",
          },
          {
            title: "Santo Anjo do Senhor, meu zeloso guardador",
            text: "Cada pessoa humana é acompanhada da infância até a morte por um anjo da guarda protetor e intercessor diante de Deus. A oração infantil guarda uma verdade profunda para toda a vida.",
            example:
              "Rezar ao Anjo da Guarda pela manhã e também pelo anjo da guarda das pessoas com quem vamos conversar hoje.",
            source: "Sl 91,11 · Mt 18,10 · CIC 336",
          },
        ],
        questions: [
          {
            prompt:
              "Que elementos essenciais expressamos ao rezar com sinceridade o Ato de Contrição?",
            options: [
              "Desculpas para culpar os outros",
              "Arrependimento por ter ofendido a Deus tão bom, pedido de perdão e propósito firme de emenda",
              "Orgulho de nossas qualidades",
              "Promessa impossível de nunca ser tentado",
            ],
            answer: 1,
            explanation:
              "A contrição une amor a Deus, detestação do pecado e firme decisão de mudar com o auxílio da graça (CIC 1451-1452).",
          },
          {
            prompt: "O que a fé católica ensina sobre os Anjos da Guarda?",
            options: [
              "São apenas figuras de histórias infantis sem existência real",
              "Cada fiel tem junto de si um anjo como protetor e pastor espiritual para o guiar à vida eterna",
              "Existem apenas no Antigo Testamento",
              "Substituem Jesus Cristo como salvadores",
            ],
            answer: 1,
            explanation:
              "Do começo da vida à hora da morte, a vida humana é cercada pela proteção e intercessão dos anjos (Mt 18,10; CIC 336).",
          },
          {
            prompt:
              "Por que a Igreja entoa 'Vinde, Espírito Criador' antes de grandes escolhas e celebrações?",
            options: [
              "Porque sem a luz e a força do Espírito Santo não podemos discernir nem amar como filhos de Deus",
              "Por mera formalidade sem sentido",
              "Para dispensar o estudo e a preparação",
              "Porque o Pai não ouve orações",
            ],
            answer: 0,
            explanation:
              "O Espírito Santo é o mestre interior da oração e o guia que ilumina toda a ação da Igreja (Rm 8,26; CIC 2670).",
          },
        ],
      },
    ],
  },
  {
    id: "via-sacra-devocao",
    title: "A Via-Sacra e a Espiritualidade da Cruz",
    emoji: "✝️",
    lessons: [
      {
        id: "via-sacra-estacoes-cruz",
        title: "As quatorze estações da Via-Sacra",
        emoji: "👣",
        xp: 20,
        teachings: [
          {
            title: "Caminhar com Jesus pelas ruas de Jerusalém",
            text: "A Via-Sacra contempla em quatorze estações o caminho de Jesus desde a condenação injusta por Pilatos até o sepultamento, permitindo a quem não pode viajar à Terra Santa percorrer com o coração a Via Dolorosa.",
            example:
              "Rezar a Via-Sacra às sextas-feiras da Quaresma, meditanto especialmente a estação que mais toca sua vida atual.",
            source: "Lc 23,26-49 · CIC 616, 1674",
          },
          {
            title: "Quedas, encontros e o Cireneu",
            text: "Ao longo do caminho, Jesus encontra sua Mãe, recebe ajuda de Simão de Cirene e o gesto de ternura de Verônica, ensinando que ninguém carrega a cruz sozinho na Igreja.",
            example:
              "Ser um 'Cireneu' hoje ajudando alguém sobrecarregado num serviço pesado ou solidão.",
            source: "Mc 15,21 · Gl 6,2 · CIC 618",
          },
          {
            title: "Sempre aberta à esperança da Páscoa",
            text: "A Via-Sacra não glorifica o sofrimento por si mesmo: contempla o amor maior de quem deu a vida pelos amigos e hoje continua com uma 15ª estação em muitas comunidades celebrando a Ressurreição.",
            example:
              "Unir um sofrimento pessoal inevitável às estações da Paixão de Jesus para dar-lhe sentido redentor.",
            source: "Jo 15,13 · CIC 618, 1505",
          },
        ],
        questions: [
          {
            prompt: "Qual é o objetivo espiritual da devoção da Via-Sacra?",
            options: [
              "Fazer turismo histórico apenas",
              "Acompanhar em oração os passos finais de Jesus na Paixão, aprendendo Seu amor redentor e unindo nossa cruz à Dele",
              "Substituir a Missa dominical",
              "Sentir culpa sem esperança",
            ],
            answer: 1,
            explanation:
              "A Via-Sacra é piedade popular preciosa que nutre o amor a Cristo crucificado e a compaixão pelos sofredores (CIC 618, 1674).",
          },
          {
            prompt: "O que simboliza Simão de Cirene ajudando Jesus a carregar o madeiro da Cruz?",
            options: [
              "Que Jesus não queria salvar o mundo",
              "A vocação dos discípulos de carregar a cruz com Cristo e ajudar a levar o fardo dos irmãos",
              "Que soldados romanos eram cristãos",
              "Uma interrupção desnecessária",
            ],
            answer: 1,
            explanation:
              "Cristo associa os seus discípulos ao seu sacrifício redentor e ensina-nos a carregar os pesos uns dos outros (Gl 6,2; CIC 618).",
          },
          {
            prompt:
              "Por que as sextas-feiras ao longo do ano recordam de modo especial a Paixão do Senhor?",
            options: [
              "Porque Jesus morreu numa sexta-feira pela nossa salvação",
              "Por escolha astrológica antiga",
              "Porque não há outros dias úteis",
              "Porque o Natal sempre cai na sexta",
            ],
            answer: 0,
            explanation:
              "Todas as sextas-feiras recordam a morte salvífica do Senhor e convidam a alguma forma de penitência ou caridade (CIC 1438, 2043).",
          },
        ],
      },
      {
        id: "sete-palavras-jesus-cruz",
        title: "As sete últimas palavras de Jesus na Cruz",
        emoji: "🗣️",
        xp: 20,
        teachings: [
          {
            title: "Perdão e misericórdia no último suspiro",
            text: "Pregado na cruz, Jesus pronunciou sete breves frases nos Evangelhos: começou pedindo perdão pelos algozes ('Pai, perdoa-lhes') e abrindo o Paraíso ao bom ladrão arrependido.",
            example:
              "Quando for difícil perdoar alguém, repetir devagar com Jesus: 'Pai, perdoa-lhes'.",
            source: "Lc 23,34.43 · CIC 612, 2844",
          },
          {
            title: "Filho, eis aí tua mãe — abandono confiante",
            text: "Da cruz, Jesus confiou Maria e o discípulo um ao outro, experimentou a solidão do Salmo 22 ('Meu Deus, por que me abandonastes?'), sentiu sede de nossas almas e consumou a obra.",
            example:
              "Recorrer à maternidade de Maria nos momentos de escuridão e solidão interior.",
            source: "Jo 19,26-30 · Mt 27,46 · CIC 964, 2605",
          },
          {
            title: "Pai, em tuas mãos entrego o meu espírito",
            text: "A última palavra de Jesus na cruz cita o Salmo 31,6: morte vivida não como derrota arrancada à força, mas como entrega livre e amorosa nas mãos do Pai.",
            example:
              "Fazer dessa frase de Jesus nossa oração habitual de confiança antes de dormir.",
            source: "Lc 23,46 · Sl 31,6 · CIC 609, 2605",
          },
        ],
        questions: [
          {
            prompt:
              "Qual foi a atitude surpreendente da primeira palavra de Jesus na Cruz segundo Lucas (Lc 23,34)?",
            options: [
              "Pedir vingança imediata contra Roma",
              "Interceder pelo perdão dos que o crucificavam: 'Pai, perdoa-lhes, porque não sabem o que fazem'",
              "Amaldiçoar Jerusalém",
              "Negar sua missão",
            ],
            answer: 1,
            explanation:
              "Jesus vive até o extremo o amor aos inimigos e o perdão que havia ensinado no Sermão da Montanha (Lc 23,34; CIC 2844).",
          },
          {
            prompt:
              "O que significa 'Eis aí tua mãe' dito por Jesus ao discípulo amado aos pés da Cruz?",
            options: [
              "Apenas uma questão jurídica de moradia sem alcance espiritual",
              "A entrega da Virgem Maria como mãe espiritual de todos os discípulos e da Igreja",
              "Uma despedida fria sem amor",
              "O fim da relação de Maria com Jesus",
            ],
            answer: 1,
            explanation:
              "Na pessoa do discípulo amado, Jesus confia sua Mãe a toda a Igreja e todos os fiéis aos cuidados maternos de Maria (Jo 19,27; CIC 964).",
          },
          {
            prompt:
              "Qual sentimento exprime a última frase de Jesus em Lucas 23,46: 'Pai, em tuas mãos entrego o meu espírito'?",
            options: [
              "Desespero total",
              "Confiança filial absoluta e entrega livre de sua vida ao Pai",
              "Revolta contra os discípulos",
              "Dúvida sobre a ressurreição",
            ],
            answer: 1,
            explanation:
              "A morte de Cristo é um ato de obediência filial e entrega amorosa ao Pai que cumpre toda a nossa redenção (CIC 609, 2605).",
          },
        ],
      },
      {
        id: "nossa-senhora-dores-piedade",
        title: "Nossa Senhora das Dores e o valor do sofrimento unido a Cristo",
        emoji: "🌹",
        xp: 20,
        teachings: [
          {
            title: "De pé junto à Cruz (Stabat Mater)",
            text: "Celebrada em 15 de setembro, Nossa Senhora das Dores recorda que uma espada de dor traspassou a alma de Maria. Ela não fugiu nem perdeu a fé: permaneceu de pé junto à Cruz.",
            example:
              "Quando acompanhar alguém muito doente, pedir a Nossa Senhora das Dores firmeza serena e presença amorosa.",
            source: "Lc 2,35 · Jo 19,25 · CIC 964, 149",
          },
          {
            title: "Completar na própria carne o que falta às tribulações",
            text: "O sofrimento em si é um mal que combatemos com amor e medicina. Porém, quando uma dor não pode ser evitada, unida a Cristo torna-se oferenda fecunda pela salvação de outras almas.",
            example:
              "Quando enfrentar uma dor física ou contrariedade inevitável, oferecê-la em silêncio pela conversão de alguém.",
            source: "Cl 1,24 · CIC 618, 1505",
          },
          {
            title: "Consolo para quem chora",
            text: "Jesus chorou no túmulo de Lázaro e prometeu bem-aventurança aos que choram. A espiritualidade católica nunca exige frieza estoica, mas confiança que chora apoiada no coração de Deus.",
            example: "Apoiar com presença silenciosa e oração amigos que atravessam o luto.",
            source: "Jo 11,35 · Mt 5,4 · CIC 1505, 1716",
          },
        ],
        questions: [
          {
            prompt:
              "Que exemplo impressionante de fé dá a Virgem Maria aos pés da Cruz (Jo 19,25)?",
            options: [
              "Fugiu para não sofrer",
              "Permaneceu de pé, unida ao sofrimento do Filho com fé firme e coração materno aberto aos discípulos",
              "Pediu que Jesus descesse sem completar a redenção",
              "Culpar os outros discípulos com amargura",
            ],
            answer: 1,
            explanation:
              "Na noite da fé da Cruz, Maria permaneceu fiel até o fim, associando-se intimamente ao sacrifício redentor de seu Filho (CIC 149, 964).",
          },
          {
            prompt: "Como a fé cristã encara o sofrimento humano?",
            options: [
              "Procura sofrimento proposital porque a dor seria boa em si",
              "Combate o sofrimento aliviando-o com caridade e medicina, mas oferece a dor inevitável em união com a Cruz de Cristo",
              "Diz que a dor não existe",
              "Ensina que sofrer significa ser castigado por Deus",
            ],
            answer: 1,
            explanation:
              "Cristo não eliminou todo sofrimento ainda, mas deu-lhe sentido salvífico ao assumi-lo e associar-nos à sua Cruz redentora (Cl 1,24; CIC 1505).",
          },
          {
            prompt: "O que significa a atitude de Jesus chorando no túmulo de Lázaro (Jo 11,35)?",
            options: [
              "Que chorar diante da morte e da dor é falta de fé",
              "Que Jesus tem compaixão humana autêntica por nossas lágrimas e sofre conosco diante da morte",
              "Que Ele não podia ressuscitar Lázaro",
              "Que o luto deve ser escondido sempre",
            ],
            answer: 1,
            explanation:
              "O Verbo encarnado experimentou compaixão real e lágrimas humanas antes de vencer a morte pela ressurreição (CIC 470, 1503).",
          },
        ],
      },
    ],
  },
  {
    id: "vida-paroquial-pastorais",
    title: "Viver em Comunidade na Paróquia",
    emoji: "🤝",
    lessons: [
      {
        id: "paroquia-casa-comunidade",
        title: "A paróquia: família de famílias no território",
        emoji: "⛪",
        xp: 20,
        teachings: [
          {
            title: "A Igreja bem perto da sua casa",
            text: "A paróquia é uma comunidade determinada de fiéis sob a autoridade do bispo e o cuidado pastoral do pároco. É o lugar habitual onde nascemos na fé, comungamos e aprendemos a servir.",
            example:
              "Conhecer o nome e o padroeiro da sua paróquia territorial e participar ativamente de sua vida.",
            source: "At 2,42 · CIC 2179",
          },
          {
            title: "Perseverança nos quatro pilares de Atos 2,42",
            text: "A comunidade cristã persevera no ensino dos Apóstolos (catequese), na comunhão fraterna (caridade), na fração do pão (Eucaristia) e nas orações.",
            example:
              "Não viver uma fé isolada de telas apenas: estar presente fisicamente na comunidade paroquial.",
            source: "At 2,42 · CIC 1342, 2179",
          },
          {
            title: "Comunidade que acolhe imperfeitos",
            text: "A paróquia não é clube de perfeitos, mas hospital de campanha e família de irmãos em conversão. Aprender a amar irmãos com defeitos concretos purifica a fé.",
            example:
              "Cumprimentar as pessoas antes ou depois da Missa e acolher rostos novos na igreja.",
            source: "Cl 3,13 · CIC 827, 865",
          },
        ],
        questions: [
          {
            prompt: "Como o Catecismo descreve o papel da paróquia na vida do fiel?",
            options: [
              "Apenas um cartório para certidões de batismo",
              "O lugar privilegiado da celebração eucarística, da catequese, da comunhão fraterna e do envio missionário perto do povo",
              "Um grupo fechado para quem não tem defeitos",
              "Uma instituição separada da diocese",
            ],
            answer: 1,
            explanation:
              "A paróquia inicia o povo cristão na expressão ordinária da vida litúrgica e reúne na diversidade humana os membros da Igreja (CIC 2179).",
          },
          {
            prompt:
              "Quais são os quatro pilares da primeira comunidade cristã descritos em Atos 2,42?",
            options: [
              "Riqueza, fama, política e festas",
              "Ensino dos Apóstolos, comunhão fraterna, fração do pão (Eucaristia) e orações",
              "Apenas leitura solitária sem comunidade",
              "Silêncio absoluto e isolamento",
            ],
            answer: 1,
            explanation:
              "Desde Jerusalém, a vida eclesial estrutura-se sobre a doutrina apostólica, a caridade fraterna, a Eucaristia e a oração (At 2,42; CIC 1342).",
          },
          {
            prompt:
              "Por que a fé cristã não pode ser reduzida a um consumo individual pela internet sem vida comunitária?",
            options: [
              "Porque a internet nunca serve para catequese",
              "Porque Cristo nos salva formando um povo e um só Corpo no qual partilhamos sacramentos presenciais e amor concreto",
              "Porque é impossível estudar online",
              "Por falta de energia elétrica",
            ],
            answer: 1,
            explanation:
              "Aprouve a Deus santificar e salvar os homens não isoladamente, mas constituindo-os em povo e Igreja visível (CIC 781, 2179).",
          },
        ],
      },
      {
        id: "pastorais-dizimo-partilha",
        title: "Pastorais, movimentos e o sentido do Dízimo",
        emoji: "🌾",
        xp: 20,
        teachings: [
          {
            title: "Diversidade de carismas para um só serviço",
            text: "Catequese, liturgia, Vicentinos, pastoral familiar, jovens, música, acolhida: o mesmo Espírito suscita dons variados para edificar o único Corpo de Cristo.",
            example:
              "Conversar com o pároco ou coordenação para descobrir qual serviço pastoral combina com seus dons e tempo.",
            source: "1Cor 12,4-7 · CIC 799-801",
          },
          {
            title: "O dízimo como gratidão, não imposto nem barganha",
            text: "Contribuir regularmente com a paróquia sustenta a missão evangelizadora, as obras de caridade com os pobres e a dignidade do culto. Dá-se por gratidão livre, nunca para 'comprar milagres'.",
            example:
              "Praticar a partilha regular na comunidade com alegria e consciência missionária.",
            source: "2Cor 9,7 · CIC 1351, 2043",
          },
          {
            title: "Servir sem vaidade nem espírito de grupo fechado",
            text: "Movimentos e pastorais não competem entre si: quando alguém busca aparecer ou dominar uma pastoral, esquece que tudo pertence a Cristo.",
            example:
              "Apoiar eventos e necessidades de outras pastorais além daquela em que você atua.",
            source: "Fl 2,3-4 · CIC 900, 910",
          },
        ],
        questions: [
          {
            prompt: "Qual é o verdadeiro sentido espiritual do Dízimo na Igreja Católica?",
            options: [
              "Fazer uma troca financeira esperando retorno garantido em dobro",
              "Expressar gratidão a Deus, exercitar o desapego e corresponsabilizar-se pelo culto, evangelização e caridade com os pobres",
              "Comprar espaço de honra na igreja",
              "Uma cobrança obrigatória de taxa fixa para entrar na Missa",
            ],
            answer: 1,
            explanation:
              "Cada fiel contribui segundo suas possibilidades e com alegria de coração para as necessidades materiais da Igreja e dos pobres (2Cor 9,7; CIC 2043).",
          },
          {
            prompt:
              "Segundo 1Cor 12, para que o Espírito Santo concede dons e carismas diferentes aos fiéis?",
            options: [
              "Para competição pessoal na comunidade",
              "Em vista do bem comum e da edificação do único Corpo de Cristo",
              "Para formar igrejas separadas",
              "Para guardar sem usar",
            ],
            answer: 1,
            explanation:
              "Os carismas são graças ordenadas à utilidade comum e ao serviço caritativo de toda a Igreja (1Cor 12,7; CIC 799-800).",
          },
          {
            prompt:
              "Qual atitude destrói o espírito evangélico dentro de uma pastoral ou movimento?",
            options: [
              "A humildade de trabalhar nos bastidores",
              "A vaidade de disputar poder, criticar outras pastorais e esquecer a oração",
              "O cuidado sincero com os novos membros",
              "A comunhão com o pároco e o bispo",
            ],
            answer: 1,
            explanation:
              "Todo serviço eclesial precisa de humildade, comunhão com os pastores e espírito de fraternidade (CIC 801, 910).",
          },
        ],
      },
      {
        id: "conselhos-corresponsabilidade-leigos",
        title: "Corresponsabilidade dos leigos na missão da Igreja",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "Não apenas colaboradores: co-responsáveis pela missão",
            text: "Os fiéis leigos não são cidadãos de segunda classe na Igreja. Pelo Batismo e Crisma são enviados por Cristo a santificar por dentro a família, a profissão, a política, a ciência e a cultura.",
            example: "Viver seu trabalho e estudos como primeiro campo de missão cristã no mundo.",
            source: "Mt 13,33 · CIC 897-900",
          },
          {
            title: "Conselhos pastorais e transparência econômica",
            text: "A Igreja incentiva que leigos preparados participem dos conselhos pastorais e econômicos da paróquia, ajudando no discernimento comunitário e na transparência dos bens.",
            example:
              "Acompanhar com interesse as assembleias e prestações de contas da sua comunidade.",
            source: "At 15,6 · CIC 907, 911",
          },
          {
            title: "Sinodalidade: caminhar juntos na verdade de Cristo",
            text: "Caminhar juntos significa escutar o Espírito Santo e uns aos outros — pastores e leigos — mantendo firme a fidelidade ao Evangelho e à Tradição apostólica.",
            example:
              "Oferecer sugestões construtivas na comunidade com respeito e disposição de ajudar na execução.",
            source: "At 15,28 · CIC 85, 907",
          },
        ],
        questions: [
          {
            prompt: "Qual é a vocação própria e insubstituível dos fiéis leigos na Igreja?",
            options: [
              "Viver escondidos dentro da sacristia apenas",
              "Procurar o Reino de Deus tratando das realidades temporais (família, trabalho, cultura, sociedade) segundo Deus",
              "Assumir funções que dispensam os sacramentos",
              "Deixar toda evangelização apenas para os padres",
            ],
            answer: 1,
            explanation:
              "É próprio dos leigos iluminar e ordenar todas as coisas temporais no mundo para que tudo seja feito segundo Cristo (CIC 898-899).",
          },
          {
            prompt:
              "Como os leigos podem manifestar sua opinião sobre o bem da Igreja segundo o Catecismo?",
            options: [
              "Com ataques desrespeitosos e divisões públicas",
              "Com conhecimento, competência, verdade, coragem e prudência, em respeito aos pastores e à caridade comum",
              "Jamais expressando qualquer necessidade pastoral",
              "Criando doutrinas particulares",
            ],
            answer: 1,
            explanation:
              "Os leigos têm o direito e por vezes o dever de exprimir aos pastores sua opinião sobre o bem da Igreja com caridade e reverência (CIC 907).",
          },
          {
            prompt: "Por que os conselhos econômicos e pastorais paroquiais são importantes?",
            options: [
              "Para substituir o bispo",
              "Para unir dons dos leigos e cuidado dos pastores na transparência, planejamento missionário e serviço ao povo",
              "Para transformar a fé em empresa lucrativa",
              "Para impedir obras de caridade",
            ],
            answer: 1,
            explanation:
              "A participação responsável nos conselhos colabora com a missão e a boa gestão dos bens destinados ao culto e à caridade (CIC 911, 2404).",
          },
        ],
      },
    ],
  },
  {
    id: "discernimento-vocacional",
    title: "Como Discernir a Vontade de Deus",
    emoji: "🧭",
    lessons: [
      {
        id: "escuta-vocacao-deus",
        title: "Escutar o chamado único que Deus tem para você",
        emoji: "👂",
        xp: 20,
        teachings: [
          {
            title: "Toda vida cristã é uma vocação",
            text: "Vocação não é pergunta apenas para padres e freiras: todo batizado foi pensado desde a eternidade com um chamado único de amor, santidade e serviço no mundo.",
            example:
              "Perguntar na oração: 'Senhor, o que queres fazer da minha vida para amar melhor a Ti e aos irmãos?'",
            source: "Jr 29,11 · Ef 2,10 · CIC 825, 1700",
          },
          {
            title: "Ouvir na Palavra, nos desejos profundos e na realidade",
            text: "Deus fala através da Sagrada Escritura, da oração silenciosa, dos dons concretos que nos deu e das necessidades reais do próximo que tocam nosso coração.",
            example:
              "Anotar os momentos de oração e serviço em que seu coração sente maior paz e sentido.",
            source: "1Sm 3,9-10 · CIC 2689-2690",
          },
          {
            title: "Vencer o medo de entregar-se a Deus",
            text: "Muitos temem que responder a Deus roube a alegria. Mas como dizia Bento XVI, Cristo não tira nada de belo da vida — Ele dá tudo multiplicado em sentido e paz.",
            example:
              "Rezar: 'Senhor, dá-me a coragem de dizer sim antes mesmo de ver todo o caminho'.",
            source: "Lc 1,30 · CIC 144, 2826",
          },
        ],
        questions: [
          {
            prompt: "Quem possui uma vocação dada por Deus na Igreja?",
            options: [
              "Apenas bispos e religiosos de mosteiros",
              "Cada ser humano e todo batizado, chamado à santidade e a uma missão específica de amor",
              "Somente quem tem grandes talentos artísticos",
              "Apenas adultos acima de quarenta anos",
            ],
            answer: 1,
            explanation:
              "Todos os cristãos, de qualquer estado ou condição, são chamados à plenitude da vida cristã e à perfeição da caridade (CIC 825, 2013).",
          },
          {
            prompt: "Como discernir de forma realista qual serviço ou caminho Deus pede de nós?",
            options: [
              "Tirando sorte em jogos ou superstições",
              "Unindo oração fiel, leitura da Escritura, conhecimento dos próprios dons e conselho espiritual sábio",
              "Seguindo apenas a pressão passageira das redes sociais",
              "Esperando sem nunca dar um passo concreto",
            ],
            answer: 1,
            explanation:
              "O discernimento espiritual integra oração, retidão de consciência, realidade concreta e acompanhamento experiente (CIC 1785, 2690).",
          },
          {
            prompt: "Qual é o maior engano sobre responder generosamente ao chamado de Deus?",
            options: [
              "Pensar que Deus quer nossa felicidade eterna",
              "Ter medo de que Deus tire nossa alegria, quando Ele nos conduz justamente à vida em plenitude",
              "Pedir conselho a um padre sábio",
              "Cuidar da família enquanto discerne",
            ],
            answer: 1,
            explanation:
              "A vontade do Pai é nossa salvação e bem verdadeiro; confiar Nele traz liberdade e alegria profundas (Jo 10,10; CIC 2822-2826).",
          },
        ],
      },
      {
        id: "estados-vida-leigo-consagrado",
        title: "Matrimônio, Sacerdócio e Vida Consagrada",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "Caminhos complementares de doação",
            text: "Na Igreja há diferentes estados de vida para amar: o Matrimônio cristão na família, o Sacerdócio ministerial, a Vida Consagrada (religiosa, monástica, missionária ou secular) e o serviço celibatário leigo.",
            example:
              "Conhecer pessoalmente testemunhos felizes de casais santos, padres zelosos e religiosas alegres.",
            source: "1Cor 7,7 · CIC 914-916, 1603",
          },
          {
            title: "Os conselhos evangélicos na Vida Consagrada",
            text: "Os consagrados professam pobreza, castidade e obediência para seguir Jesus de perto, testemunhando ao mundo que só Deus basta e antecipando a pátria celeste.",
            example:
              "Agradecer pela oração oculta dos mosteiros contemplativos que sustentam toda a Igreja.",
            source: "Mt 19,21 · CIC 915-916, 925",
          },
          {
            title: "Nenhum estado é 'prêmio de consolação'",
            text: "Todos os estados de vida exigem cruz e generosidade; o mais alto para cada pessoa não é o que parece mais admirado de fora, mas aquele em que Deus a chama a amar mais.",
            example:
              "Se sentir inquietação sincera pelo sacerdócio ou vida religiosa, conversar com o serviço vocacional sem medo.",
            source: "Ef 4,1 · CIC 873, 2013",
          },
        ],
        questions: [
          {
            prompt: "Quais são os três conselhos evangélicos professados na Vida Consagrada?",
            options: [
              "Riqueza, fama e independência absoluta",
              "Pobreza, castidade e obediência segundo Cristo",
              "Silêncio eterno, isolamento e jejum perpétuo",
              "Estudo, música e arquitetura",
            ],
            answer: 1,
            explanation:
              "A profissão dos conselhos evangélicos — castidade, pobreza e obediência — caracteriza a vida consagrada a Deus (CIC 915).",
          },
          {
            prompt: "Qual é a vocação mais santa para uma pessoa específica?",
            options: [
              "A que dá mais visibilidade social",
              "Aquela para a qual Deus pessoalmente a chama e na qual ela ama com generosidade e fidelidade",
              "Apenas o estado religioso, pois leigos não têm chamado à santidade",
              "Mudar de decisão todo mês sem compromisso",
            ],
            answer: 1,
            explanation:
              "A santidade não depende de um título especial, mas da perfeição da caridade vivida na própria vocação (CIC 825, 2013).",
          },
          {
            prompt: "Como os mosteiros de vida contemplativa servem a toda a humanidade?",
            options: [
              "Não servem porque não fazem campanhas visíveis",
              "Pela oração constante, adoração e oferta silenciosa de suas vidas em favor da Igreja e do mundo inteiro",
              "Competindo com as paróquias",
              "Fugindo do amor ao próximo",
            ],
            answer: 1,
            explanation:
              "Os contemplativos oferecem a Deus um sacrifício de louvor excepcional e fecundam o povo de Deus com graças escondidas (CIC 926, 2687).",
          },
        ],
      },
      {
        id: "discernimento-alegria-paz",
        title: "Os sinais de Deus no coração e a fidelidade perseverante",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "Paz profunda versus agitação e medo",
            text: "Como ensinou Santo Inácio de Loyola, quando o coração busca sinceramente a Deus, o Espírito Santo costuma confirmar escolhas boas com paz serena, humildade e amor ao serviço — mesmo diante da cruz.",
            example:
              "Não tomar grandes decisões de vida em momentos de desânimo agudo ou euforia passageira.",
            source: "Gl 5,22 · CIC 1768, 2690",
          },
          {
            title: "Decidir no tempo certo e permanecer fiel",
            text: "Quem adia eternamente qualquer compromisso por medo de errar acaba não vivendo sua vocação. Depois de rezar e consultar bem, é preciso dar o passo concreto com confiança em Deus.",
            example:
              "Estabelecer um propósito claro de oração e serviço para os próximos três meses e cumpri-lo até o fim.",
            source: "Lc 9,62 · CIC 1806, 2094",
          },
          {
            title: "Do primeiro passo ao encontro eterno com Cristo",
            text: "Toda esta caminhada na fé — Escritura, Credo, Sacramentos, Mandamentos, Oração, História da Igreja e Discernimento — converge para um único rosto: conhecer, amar e servir Jesus Cristo hoje e na alegria eterna do Céu.",
            example:
              "Agradecer a Deus por tudo o que aprendeu nesta trilha e transformar conhecimento em oração viva e caridade diária.",
            source: "Jo 17,3 · Ap 22,20 · CIC 1, 2856",
          },
        ],
        questions: [
          {
            prompt:
              "Quais frutos interiores costumam acompanhar uma decisão feita segundo o Espírito Santo?",
            options: [
              "Arrogância, impaciência e desprezo pelos outros",
              "Paz profunda, humildade, caridade, firmeza serena e disponibilidade para servir",
              "Medo paralisante e fuga da oração",
              "Necessidade constante de aplausos",
            ],
            answer: 1,
            explanation:
              "Os frutos do Espírito — amor, alegria, paz, paciência, mansidão e domínio de si — confirmam o caminho de quem segue Cristo (Gl 5,22; CIC 1832).",
          },
          {
            prompt:
              "O que recomenda a sabedoria espiritual quando atravessamos um momento de forte desolação ou tristeza interior?",
            options: [
              "Mudar imediatamente todas as promessas e compromissos de vida",
              "Não fazer mudanças definitivas na desolação, perseverar na oração e esperar o retorno da serenidade com conselho sábio",
              "Abandonar a Eucaristia e os amigos",
              "Achar que Deus desistiu de nós",
            ],
            answer: 1,
            explanation:
              "Na provação e aridez, o cristão persevera fiel nas decisões tomadas na luz sem ceder ao desânimo passageiro (CIC 2729, 2742).",
          },
          {
            prompt:
              "Qual é o objetivo final de toda a catequese, da Sagrada Escritura e da vida sacramental da Igreja?",
            options: [
              "Acumular apenas informações intelectuais sem prática",
              "Colocar a pessoa em comunhão viva de conhecimento, amor e serviço com Jesus Cristo até a vida eterna",
              "Seguir costumes vazios sem significado",
              "Viver apenas para si mesmo",
            ],
            answer: 1,
            explanation:
              "O fim definitivo da catequese é pôr alguém em comunhão e intimidade com Jesus Cristo, que conduz ao Pai no Espírito Santo (CIC 426, 1721).",
          },
        ],
      },
    ],
  },
];
