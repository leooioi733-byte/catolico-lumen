import type { LessonUnit } from "./lesson-types";

// Unidades 15 a 29 (15 unidades de 3 lições cada = 45 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_1_UNITS: LessonUnit[] = [
  {
    id: "patriarcas-alianca",
    title: "Os Patriarcas da Fé",
    emoji: "⛺",
    lessons: [
      {
        id: "abraao-pai-fe",
        title: "Abraão e a promessa de Deus",
        emoji: "🌟",
        xp: 20,
        teachings: [
          {
            title: "Sair confiando na Palavra",
            text: "Deus chamou Abraão a deixar sua terra para caminhar rumo a uma terra prometida. Sem conhecer todos os detalhes, Abraão acreditou e obedeceu, tornando-se nosso pai na fé.",
            example:
              "Dar um passo concreto de confiança — como aceitar um novo serviço pastoral ou perdoar primeiro — mesmo sem controlar todo o futuro.",
            source: "Gn 12,1-4 · CIC 59, 144-146",
          },
          {
            title: "Uma bênção para todos os povos",
            text: "A promessa feita a Abraão não se fechava em uma só família: em sua descendência seriam abençoadas todas as nações da terra, preparando a vinda de Cristo.",
            example:
              "Rezar pelas pessoas de outros países e culturas, lembrando que a fé nos une em uma mesma família humana.",
            source: "Gn 12,3; Gl 3,8 · CIC 59-60, 706",
          },
          {
            title: "Esperar contra toda esperança",
            text: "Mesmo na velhice, Abraão e Sara creram que Deus cumpriria sua promessa de um filho. A fé amadurece quando confiamos mais na fidelidade divina do que nos limites humanos.",
            example:
              "Manter a serenidade e a oração constante quando uma graça ou resposta de Deus parece demorar.",
            source: "Rm 4,18-21 · CIC 145, 2571",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Passos da fé de Abraão",
            instruction: "Associe cada momento da vida de Abraão ao seu significado cristão.",
            pairs: [
              {
                id: "ab1",
                left: "Partir de sua terra",
                right: "Obediência confiada ao chamado de Deus",
              },
              {
                id: "ab2",
                left: "Olhar para as estrelas",
                right: "Esperança na promessa de descendência",
              },
              {
                id: "ab3",
                left: "Hospitalidade em Mambré",
                right: "Acolher o próximo com coração aberto",
              },
            ],
            explanation:
              "Abraão é chamado pai dos crentes porque escutou, acolheu e obedeceu a Deus em toda a caminhada (CIC 144-146, 2571).",
            source: "Gn 12; 15; 18 · CIC 144-146",
          },
        ],
        questions: [
          {
            prompt: "Por que Abraão é chamado 'pai de todos os crentes'?",
            options: [
              "Porque venceu grandes batalhas militares",
              "Porque escutou e obedeceu a Deus pela fé",
              "Porque escreveu os cinco primeiros livros da Bíblia",
              "Porque nunca enfrentou dúvidas ou provas",
            ],
            answer: 1,
            explanation:
              "Pela obediência da fé, Abraão partiu confiado na Palavra de Deus e tornou-se modelo para todos os que creem (CIC 144-146).",
          },
          {
            prompt: "Qual era o alcance da bênção prometida a Abraão?",
            options: [
              "Apenas os moradores de sua cidade",
              "Somente os sacerdotes do templo",
              "Todas as famílias e nações da terra",
              "Apenas uma geração",
            ],
            answer: 2,
            explanation:
              "Deus prometeu abençoar todas as nações na descendência de Abraão, preparando a salvação universal em Cristo (CIC 59-60).",
          },
          {
            prompt: "O que a espera de Abraão e Sara pelo nascimento de Isaque nos ensina?",
            options: [
              "Que Deus esquece suas promessas",
              "Que a fé é esperar apenas pelo que é fácil",
              "Que não precisamos rezar quando envelhecemos",
              "Que a fidelidade de Deus supera os limites humanos",
            ],
            answer: 3,
            explanation:
              "Abraão acreditou contra toda esperança humana porque sabia que Deus é fiel ao que promete (CIC 145).",
          },
        ],
      },
      {
        id: "isaque-jaco",
        title: "Isaque, Jacó e as doze tribos",
        emoji: "🪜",
        xp: 20,
        teachings: [
          {
            title: "A provação e a provisão de Deus",
            text: "No monte Moriá, Abraão confiou até o fim, e Deus proveu o cordeiro no lugar de Isaque. A tradição cristã reconhece nessa cena uma figura do sacrifício do Filho entregue por amor.",
            example:
              "Entregar a Deus na oração aquilo que mais amamos, confiando que Ele cuida melhor do que nós.",
            source: "Gn 22,1-14 · CIC 2572",
          },
          {
            title: "A escada de Jacó e o encontro com Deus",
            text: "Mesmo após erros familiares, Jacó teve o sonho da escada ligando o céu e a terra e reconheceu: 'O Senhor está neste lugar'. Deus busca o ser humano mesmo em sua fragilidade.",
            example:
              "Reconhecer a presença de Deus nos lugares comuns do dia a dia, não só nos momentos extraordinários.",
            source: "Gn 28,10-17 · CIC 2573",
          },
          {
            title: "Israel: lutar na oração e receber bênção",
            text: "Após lutar toda a noite em oração, Jacó recebeu o nome de Israel e se reconciliou com seu irmão Esaú. De seus doze filhos nasceram as doze tribos do povo eleito.",
            example:
              "Perseverar na oração antes de uma conversa difícil de reconciliação em família.",
            source: "Gn 32,23-31 · CIC 2573",
          },
        ],
        questions: [
          {
            prompt: "O que a entrega de Isaque no monte Moriá prefigura na fé cristã?",
            options: [
              "A entrega de Cristo, o Cordeiro que Deus provê",
              "O abandono dos filhos pelos pais",
              "O fim das orações no templo",
              "A proibição de fazer promessas",
            ],
            answer: 0,
            explanation:
              "O sacrifício de Isaque, em que Deus provê o cordeiro, prefigura a entrega redentora do Filho amado (CIC 2572).",
          },
          {
            prompt: "O que Jacó compreendeu ao acordar do sonho da escada em Betel?",
            options: [
              "Que Deus só habita nas montanhas altas",
              "Que o Senhor estava presente naquele lugar",
              "Que não deveria voltar para sua família",
              "Que sonhos sempre substituem os mandamentos",
            ],
            answer: 1,
            explanation:
              "Jacó exclamou que o Senhor estava ali e que aquele lugar era a porta do céu (Gn 28,16-17; CIC 2573).",
          },
          {
            prompt: "O que simboliza a luta noturna de Jacó antes de reencontrar Esaú?",
            options: [
              "Uma disputa por terras",
              "A recusa em rezar",
              "O combate perseverante da oração em busca de bênção",
              "Uma guerra contra o Egito",
            ],
            answer: 2,
            explanation:
              "A luta de Jacó representa o combate espiritual da oração perseverante que alcança a bênção de Deus (CIC 2573).",
          },
        ],
      },
      {
        id: "jose-egito",
        title: "José do Egito e a Providência",
        emoji: "🌾",
        xp: 20,
        teachings: [
          {
            title: "Fidelidade na adversidade",
            text: "Vendido pelos próprios irmãos e preso injustamente no Egito, José não perdeu a retidão diante de Deus. Mesmo nas provas, manteve o coração íntegro e trabalhador.",
            example:
              "Continuar fazendo o bem com honestidade no trabalho ou nos estudos mesmo quando ninguém reconhece.",
            source: "Gn 39,1-23 · CIC 312",
          },
          {
            title: "Deus sabe tirar o bem até do mal",
            text: "Ao reencontrar os irmãos, José disse: 'Vós pensastes fazer-me mal, mas Deus transformou isso em bem'. A Providência divina não causa o pecado, mas pode orientar a história para a salvação.",
            example:
              "Transformar uma ferida do passado em compaixão por quem hoje sofre situação parecida.",
            source: "Gn 50,20 · CIC 312-314",
          },
          {
            title: "Perdão que restaura a família",
            text: "Em vez de se vingar quando teve poder, José chorou, abraçou seus irmãos e garantiu alimento para toda a casa de seu pai. O perdão interrompe a corrente da violência.",
            example:
              "Escolher a reconciliação em vez de devolver mágoas quando surge a oportunidade.",
            source: "Gn 45,1-15 · CIC 2842-2844",
          },
        ],
        questions: [
          {
            prompt: "Como a história de José no Egito ilustra a Providência de Deus?",
            options: [
              "Mostra que Deus obriga as pessoas a pecar",
              "Mostra que Deus pode tirar um bem maior até do mal cometido pelos homens",
              "Mostra que quem sofre nunca precisa perdoar",
              "Mostra que a inveja traz bênçãos",
            ],
            answer: 1,
            explanation:
              "São palavras de José: Deus transformou em bem e salvação o mal planejado por seus irmãos (Gn 50,20; CIC 312).",
          },
          {
            prompt: "Qual foi a atitude de José ao reencontrar seus irmãos no poder?",
            options: [
              "Prendeu todos para sempre",
              "Fingiu que não os conhecia para humilhá-los",
              "Perdoou-os e cuidou de sua família",
              "Exigiu riquezas em troca de comida",
            ],
            answer: 2,
            explanation:
              "José perdoou com lágrimas e acolheu seus irmãos, tornando-se figura do perdão que salva (CIC 312, 2843).",
          },
          {
            prompt: "O que significa afirmar que Deus é providente na história?",
            options: [
              "Que o ser humano não tem liberdade",
              "Que nada de difícil acontece aos cristãos",
              "Que o mal não existe de verdade",
              "Que Deus conduz tudo com sabedoria rumo ao seu desígnio de amor",
            ],
            answer: 3,
            explanation:
              "Pela Providência, Deus guia com sabedoria e amor todas as criaturas para o fim último que planejou (CIC 302-314).",
          },
        ],
      },
    ],
  },
  {
    id: "profetas-esperanca",
    title: "Os Profetas da Esperança",
    emoji: "🔥",
    lessons: [
      {
        id: "elias-carmelo",
        title: "Elias e a voz do Deus vivo",
        emoji: "⛰️",
        xp: 20,
        teachings: [
          {
            title: "Fidelidade diante da idolatria",
            text: "No monte Carmelo, o profeta Elias chamou o povo a não dividir o coração entre o Deus vivo e os ídolos. A fé verdadeira pede escolha clara por Deus.",
            example:
              "Rever se trabalho, dinheiro ou redes sociais estão ocupando o primeiro lugar que pertence a Deus.",
            source: "1Rs 18,21-39 · CIC 2582-2583",
          },
          {
            title: "A brisa suave no monte Horeb",
            text: "Quando Elias fugiu desanimado, Deus não se manifestou no furacão nem no terremoto, mas numa brisa leve e silenciosa. O silêncio interior ajuda a escutar o Senhor.",
            example:
              "Reservar cinco minutos de silêncio antes de dormir para escutar Deus além da agitação do dia.",
            source: "1Rs 19,9-13 · CIC 2583",
          },
          {
            title: "Sustentado pelo pão do caminho",
            text: "Exausto no deserto, Elias recebeu pão e água de um anjo para continuar a viagem até o monte de Deus. O Senhor fortalece quem caminha com Ele.",
            example:
              "Buscar a Eucaristia e a oração comunitária justamente nos momentos de cansaço espiritual.",
            source: "1Rs 19,5-8 · CIC 2583",
          },
        ],
        questions: [
          {
            prompt: "Em que sinal Deus se manifestou a Elias no monte Horeb?",
            options: [
              "Numa tempestade de pedras",
              "Numa brisa suave e silenciosa",
              "Num exército de carros de guerra",
              "Num eclipse solar",
            ],
            answer: 1,
            explanation:
              "Deus se revelou a Elias no sussurro de uma brisa suave, ensinando o valor do recolhimento (CIC 2583).",
          },
          {
            prompt: "Qual era a missão central de Elias no monte Carmelo?",
            options: [
              "Construir um novo palácio",
              "Ensinar o povo a adorar vários deuses",
              "Reconduzir o coração do povo à fidelidade ao único Deus",
              "Abolir a oração de Israel",
            ],
            answer: 2,
            explanation:
              "Elias convocou Israel a escolher decididamente o Deus vivo e abandonar os ídolos (CIC 2582).",
          },
          {
            prompt: "O que o episódio do pão e da água trazidos pelo anjo a Elias ensina?",
            options: [
              "Que Deus sustenta os seus servos no cansaço da caminhada",
              "Que o deserto é sempre um castigo sem saída",
              "Que profetas nunca sentem medo",
              "Que não devemos comer antes de rezar",
            ],
            answer: 0,
            explanation:
              "Mesmo no abatimento, Elias é fortalecido por Deus para retomar a missão até o encontro no monte (CIC 2583).",
          },
        ],
      },
      {
        id: "isaias-emanuel",
        title: "Isaías e o Servo Sofredor",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Santo, Santo, Santo é o Senhor",
            text: "Ao contemplar a santidade de Deus no templo, Isaías reconheceu sua fragilidade, foi purificado e respondeu: 'Eis-me aqui, envia-me!'. O encontro com Deus envia em missão.",
            example:
              "Cantar ou rezar o 'Santo' na Missa lembrando que Deus nos purifica e nos envia para servir.",
            source: "Is 6,1-8 · CIC 2581, 2627",
          },
          {
            title: "O anúncio do Emanuel e da paz",
            text: "Isaías profetizou o nascimento do Emanuel — Deus conosco — da casa de Davi, ungido pelo Espírito para anunciar a boa nova aos pobres e curar os corações feridos.",
            example:
              "Levar palavras de consolo e ajuda concreta a alguém que atravessa luto ou solidão.",
            source: "Is 7,14; 11,1-2; 61,1 · CIC 436, 712-714",
          },
          {
            title: "O Servo que carrega nossas dores",
            text: "Nos cânticos do Servo Sofredor, Isaías anunciou aquele que daria a própria vida pelos pecados de muitos. A Igreja reconhece essa profecia cumprida plenamente na Paixão de Jesus.",
            example:
              "Unir um pequeno sacrifício diário ao amor redentor de Cristo em favor da conversão de alguém.",
            source: "Is 53,4-12 · CIC 601, 713",
          },
        ],
        questions: [
          {
            prompt: "Qual foi a resposta de Isaías ao chamado de Deus após ser purificado?",
            options: [
              "Escondeu-se para sempre",
              "Eis-me aqui, envia-me!",
              "Pediu que escolhessem outro povo",
              "Recusou falar ao rei",
            ],
            answer: 1,
            explanation:
              "Diante da santidade do Senhor e da purificação recebida, Isaías colocou-se prontamente a serviço (Is 6,8; CIC 2581).",
          },
          {
            prompt: "Quem cumpre plenamente os cânticos do Servo Sofredor de Isaías?",
            options: [
              "O rei Salomão",
              "O profeta Jonas",
              "Jesus Cristo em sua Paixão redentora",
              "Os fariseus de Jerusalém",
            ],
            answer: 2,
            explanation:
              "A Igreja lê os cânticos do Servo Sofredor (Is 53) como anúncio da entrega redentora de Jesus (CIC 601, 713).",
          },
          {
            prompt: "Que dons repousariam sobre o rebento de Jessé segundo Isaías 11?",
            options: [
              "Poder militar e riqueza",
              "Apenas fama política",
              "Imunidade à dor humana",
              "O Espírito do Senhor com sabedoria, conselho e temor de Deus",
            ],
            answer: 3,
            explanation:
              "Isaías 11 anuncia o Messias ungido pelo Espírito com os dons que também fortalecem os cristãos (CIC 712, 1831).",
          },
        ],
      },
      {
        id: "jeremias-ezequiel",
        title: "Jeremias, Ezequiel e a nova aliança",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Chamado desde o ventre materno",
            text: "Deus disse a Jeremias que o conhecia antes de nascer e o consagrou profeta. Mesmo jovem e tímido, o profeta descobriu que a força da missão vem do Senhor.",
            example:
              "Não se diminuir pela pouca idade ou inexperiência quando chamado a testemunhar a fé.",
            source: "Jr 1,4-9 · CIC 494, 2584",
          },
          {
            title: "Uma aliança escrita no coração",
            text: "Jeremias anunciou uma Nova Aliança em que a lei de Deus não ficaria apenas em tábuas de pedra, mas seria gravada no íntimo do coração humano.",
            example:
              "Praticar os mandamentos não por medo frio, mas por amor sincero que nasce de dentro.",
            source: "Jr 31,31-34 · CIC 715, 1965",
          },
          {
            title: "Um coração novo e um Espírito novo",
            text: "No exílio, Ezequiel profetizou que Deus derramaria água pura sobre seu povo, trocaria o coração de pedra por um coração de carne e daria seu Espírito.",
            example:
              "Pedir a Deus na Confissão que amoleça qualquer dureza ou ressentimento no coração.",
            source: "Ez 36,25-27 · CIC 715, 1287",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Antiga Lei nas tábuas vs. Nova Aliança no coração",
            instruction:
              "Classifique cada descrição entre o sinal externo e a transformação interior anunciada pelos profetas.",
            categories: ["Sinal externo / preparo", "Obra da Nova Aliança no Espírito"],
            items: [
              { id: "je1", text: "Lei gravada apenas em pedra", category: 0 },
              { id: "je2", text: "Coração de carne movido pelo Espírito", category: 1 },
              { id: "je3", text: "Cumprimento só por aparência", category: 0 },
              { id: "je4", text: "Perdão dos pecados e amor interior", category: 1 },
            ],
            explanation:
              "Jeremias e Ezequiel anunciaram a Nova Aliança em que o Espírito Santo grava a caridade no coração humano (CIC 715, 1965).",
            source: "Jr 31,31-34; Ez 36,26 · CIC 715",
          },
        ],
        questions: [
          {
            prompt: "Onde Deus prometeu escrever sua lei na Nova Aliança anunciada por Jeremias?",
            options: [
              "Apenas nas portas do palácio",
              "No íntimo do coração humano",
              "Somente em pergaminhos secretos",
              "Nas moedas do império",
            ],
            answer: 1,
            explanation:
              "Deus prometeu colocar sua lei no interior do povo e escrevê-la em seus corações (Jr 31,33; CIC 715).",
          },
          {
            prompt: "O que Deus prometeu trocar no povo por meio do profeta Ezequiel?",
            options: [
              "O coração de pedra por um coração de carne",
              "As montanhas por desertos",
              "A oração pelo silêncio absoluto",
              "A aliança por uma guerra",
            ],
            answer: 0,
            explanation:
              "Em Ez 36,26, Deus promete dar um coração novo e infundir um espírito novo, renovando o ser humano por dentro (CIC 715).",
          },
          {
            prompt: "O que aprendemos com o chamado de Jeremias, que se sentia jovem demais?",
            options: [
              "Que jovens não devem servir na Igreja",
              "Que Deus só chama quem já sabe tudo",
              "Que Deus capacita e acompanha quem Ele envia",
              "Que é melhor fugir de toda vocação",
            ],
            answer: 2,
            explanation:
              "Deus assegurou a Jeremias: 'Não temas, porque eu estou contigo para te livrar' (Jr 1,8; CIC 2584).",
          },
        ],
      },
    ],
  },
  {
    id: "salmos-sabedoria",
    title: "Salmos e Sabedoria",
    emoji: "🎶",
    lessons: [
      {
        id: "livro-salmos",
        title: "O livro dos Salmos: oração do povo",
        emoji: "🎻",
        xp: 20,
        teachings: [
          {
            title: "Toda emoção humana rezada",
            text: "Os 150 Salmos expressam alegria, louvor, gratidão, arrependimento e até súplica na angústia. Eles ensinam a levar toda a vida real diante de Deus, sem máscaras.",
            example:
              "Rezar o Salmo 51 quando precisar pedir perdão ou o Salmo 23 quando sentir medo ou cansaço.",
            source: "Sl 23; 51; 150 · CIC 2585-2589",
          },
          {
            title: "Oração da Igreja e do próprio Jesus",
            text: "Jesus rezou os Salmos na sinagoga, na Última Ceia e até na Cruz. Hoje a Igreja continua rezando os Salmos diariamente na Missa e na Liturgia das Horas.",
            example:
              "Acompanhar com atenção o Salmo Responsorial na Santa Missa, repetindo o refrão como resposta pessoal.",
            source: "Lc 24,44 · CIC 2586, 2596",
          },
          {
            title: "Louvar, agradecer e suplicar",
            text: "Nos Salmos encontramos hinos de louvor ao Criador, cânticos de ação de graças e lamentações confiantes. Neles a oração pessoal se une à oração de toda a comunidade.",
            example: "Usar um versículo de salmo como jaculatória curta durante as tarefas do dia.",
            source: "Sl 100; 139 · CIC 2588-2589",
          },
        ],
        questions: [
          {
            prompt: "Por que os Salmos ocupam lugar especial na oração cristã?",
            options: [
              "Porque servem apenas para músicos profissionais",
              "Porque são Palavra de Deus que dá voz a toda experiência humana na oração",
              "Porque substituem o Evangelho",
              "Porque só podem ser rezados uma vez ao ano",
            ],
            answer: 1,
            explanation:
              "Os Salmos são oração inspirada por Deus que une a oração pessoal e comunitária de Cristo e da Igreja (CIC 2585-2589).",
          },
          {
            prompt: "Onde ouvimos os Salmos com frequência na vida paroquial?",
            options: [
              "Apenas em funerais",
              "Nunca na liturgia católica",
              "Na Santa Missa e na Liturgia das Horas",
              "Somente na festa de Natal",
            ],
            answer: 2,
            explanation:
              "A Liturgia das Horas e a Santa Missa nutrem-se diariamente do Saltério (CIC 1176, 2586).",
          },
          {
            prompt: "O próprio Jesus rezava os Salmos?",
            options: [
              "Sim, inclusive na Cruz e nos momentos decisivos de sua vida",
              "Não, Ele nunca os citou",
              "Apenas antes de começar seu ministério",
              "Somente depois da Ascensão",
            ],
            answer: 0,
            explanation:
              "Os Evangelhos mostram Jesus rezando os Salmos em toda a sua vida e cumprindo-os na Paixão (CIC 2586, 2603).",
          },
        ],
      },
      {
        id: "proverbios-sabedoria",
        title: "Sabedoria para a vida diária",
        emoji: "🦉",
        xp: 20,
        teachings: [
          {
            title: "O temor do Senhor é o princípio da sabedoria",
            text: "Nos livros de Provérbios, Eclesiastes e Sabedoria, ser sábio não é apenas acumular informações, mas viver com reverência a Deus, justiça e discernimento.",
            example:
              "Pensar antes de responder numa discussão para evitar palavras que ferem sem necessidade.",
            source: "Pr 1,7; 9,10 · CIC 216, 1831",
          },
          {
            title: "Cuidar das palavras, do trabalho e da amizade",
            text: "A literatura sapiencial ensina o valor da sinceridade, da diligência no trabalho, da moderação nos bens e da fidelidade entre verdadeiros amigos.",
            example:
              "Cultivar amizades que incentivam o bem e evitar fofocas que destroem a reputação alheia.",
            source: "Eclo 6,14-17; Pr 15,1 · CIC 2477, 2516",
          },
          {
            title: "Cristo é a Sabedoria de Deus",
            text: "Tudo o que os sábios de Israel contemplaram encontra plenitude em Jesus Cristo, Sabedoria eterna do Pai que nos ensina o sentido verdadeiro da vida.",
            example:
              "Buscar o conselho do Evangelho antes de grandes decisões escolares, profissionais ou familiares.",
            source: "1Cor 1,24.30 · CIC 216, 472",
          },
        ],
        questions: [
          {
            prompt: "Segundo o livro dos Provérbios, qual é o princípio da sabedoria?",
            options: [
              "Acúmulo de riquezas",
              "O temor amoroso e reverente ao Senhor",
              "Falar mais alto que todos",
              "Evitar compromissos com a família",
            ],
            answer: 1,
            explanation:
              "O temor do Senhor — respeito amoroso a Deus — abre o caminho da verdadeira sabedoria (Pr 1,7; CIC 1831).",
          },
          {
            prompt: "Como o Novo Testamento apresenta Jesus em relação à sabedoria?",
            options: [
              "Como alguém contrário à reflexão",
              "Apenas como um filósofo antigo",
              "Como a própria Sabedoria de Deus encarnada",
              "Como um mestre sem relação com o Antigo Testamento",
            ],
            answer: 2,
            explanation:
              "São Paulo proclama Cristo como poder e sabedoria de Deus (1Cor 1,24; CIC 216).",
          },
          {
            prompt: "O que os livros sapienciais ensinam sobre as amizades e a palavra?",
            options: [
              "Que palavras suaves e amizade fiel são tesouros preciosos",
              "Que não devemos confiar em ninguém",
              "Que a resposta ríspida resolve melhor os conflitos",
              "Que o trabalho honesto não tem valor",
            ],
            answer: 0,
            explanation:
              "Os livros sapienciais exaltam a palavra branda, a justiça e o amigo fiel como bênçãos de Deus (Pr 15,1; Eclo 6,14; CIC 2477).",
          },
        ],
      },
      {
        id: "jo-confianca",
        title: "Jó e o mistério do sofrimento",
        emoji: "🌧️",
        xp: 20,
        teachings: [
          {
            title: "O sofrimento não é sempre castigo",
            text: "Jó era um homem justo e ainda assim perdeu bens, filhos e saúde. Seu livro desfaz a ideia simplista de que quem sofre está necessariamente pagando por um pecado pessoal.",
            example:
              "Apoiar um amigo doente ou desempregado com presença fraterna, sem fazer julgamentos apressados.",
            source: "Jó 1,1-22; Jo 9,2-3 · CIC 309, 1502",
          },
          {
            title: "Falar com Deus na dor",
            text: "Em vez de abandonar Deus, Jó continuou dialogando e até questionando o Senhor com sinceridade. Deus não condenou seu lamento honesto, mas os discursos frios de seus amigos.",
            example:
              "Levar a Deus na oração até o cansaço e as perguntas difíceis, sem fingir que não dói.",
            source: "Jó 42,7 · CIC 1502, 2734",
          },
          {
            title: "A resposta final está na Cruz e na Páscoa",
            text: "No fim, Jó reconhece a grandeza misteriosa do Criador. Para os cristãos, a resposta plena ao sofrimento não é uma teoria, mas Cristo que sofreu conosco e venceu a morte.",
            example:
              "Olhar para o crucifixo nos dias difíceis lembrando que Deus conhece a dor humana por dentro.",
            source: "Jó 42,5; 1Pd 2,21-24 · CIC 309, 1505",
          },
        ],
        questions: [
          {
            prompt: "Que falso pensamento dos amigos de Jó a Escritura corrige?",
            options: [
              "Que Deus ama suas criaturas",
              "Que todo sofrimento é castigo direto por um pecado pessoal",
              "Que devemos consolar os aflitos",
              "Que Jó era humano",
            ],
            answer: 1,
            explanation:
              "Nem toda dor decorre de culpa pessoal imediata; Jesus também rejeita essa ideia em Jo 9,2-3 (CIC 1502).",
          },
          {
            prompt: "Como Jó reagiu diante de sua provação?",
            options: [
              "Deixou de falar com Deus para sempre",
              "Vingou-se de sua família",
              "Permaneceu fiel e dialogou com Deus mesmo em meio ao lamento",
              "Negou que Deus existisse",
            ],
            answer: 2,
            explanation:
              "Jó manteve um diálogo vivo e sincero com o Senhor, exemplo de perseverança na provação (CIC 1502, 2734).",
          },
          {
            prompt: "Onde o cristão encontra a resposta mais profunda ao mistério do sofrimento?",
            options: [
              "Na fuga de toda realidade",
              "Na certeza de que o dinheiro cura qualquer dor",
              "Em teorias humanas sem Deus",
              "Em Cristo crucificado e ressuscitado, que assumiu nossa dor",
            ],
            answer: 3,
            explanation:
              "Cristo não suprimiu toda dor neste mundo, mas deu-lhe sentido redentor ao assumi-la na Cruz (CIC 309, 1505).",
          },
        ],
      },
    ],
  },
  {
    id: "infancia-vida-oculta",
    title: "Infância e Vida Oculta de Jesus",
    emoji: "🌟",
    lessons: [
      {
        id: "anunciacao-natal",
        title: "A Encarnação e o sim de Maria",
        emoji: "👼",
        xp: 20,
        teachings: [
          {
            title: "O Verbo se fez carne",
            text: "Na Encarnação, o Filho eterno de Deus assumiu uma natureza humana verdadeira, sem deixar de ser Deus. Ele nasceu para nos salvar, revelar o amor do Pai e ser nosso modelo.",
            example:
              "Inclinar a cabeça ou ajoelhar-se com reverência no Credo ao dizer 'e se encarnou pelo Espírito Santo'.",
            source: "Jo 1,14 · CIC 456-463",
          },
          {
            title: "O 'faça-se' de Maria",
            text: "Ao anúncio do anjo Gabriel, Maria respondeu com total confiança: 'Eis aqui a serva do Senhor'. Pela ação do Espírito Santo, ela concebeu o Salvador em liberdade e fé.",
            example:
              "Rezar o Angelus ou a Ave-Maria agradecendo a disponibilidade de Maria e pedindo coragem para dizer sim a Deus.",
            source: "Lc 1,26-38 · CIC 484-495",
          },
          {
            title: "A humildade do presépio",
            text: "Em Belém, o Rei do universo nasceu numa manjedoura e foi acolhido por pastores humildes e depois pelos magos. Deus se aproxima de todos na simplicidade.",
            example: "Praticar a simplicidade e acolher pessoas humildes, enxergando Cristo nelas.",
            source: "Lc 2,1-20 · CIC 525-528",
          },
        ],
        questions: [
          {
            prompt: "O que significa a Encarnação na fé católica?",
            options: [
              "Que Deus deixou de ser Deus temporariamente",
              "Que o Filho de Deus assumiu verdadeira natureza humana",
              "Que Jesus era apenas um fantasma espiritual",
              "Que Maria era um anjo",
            ],
            answer: 1,
            explanation:
              "Na Encarnação, o Filho eterno assumiu uma natureza humana íntegra para nossa salvação (CIC 461, 464).",
          },
          {
            prompt: "Como Maria colaborou na vinda do Salvador segundo Lucas 1?",
            options: [
              "Por força obrigatória sem liberdade",
              "Apenas depois que Jesus cresceu",
              "Com seu livre e confiado consentimento de fé",
              "Escrevendo cartas aos reis",
            ],
            answer: 2,
            explanation:
              "Maria deu livremente seu 'sim' pela fé, colaborando no plano salvífico de Deus (Lc 1,38; CIC 494).",
          },
          {
            prompt: "O que o nascimento de Jesus numa manjedoura revela?",
            options: [
              "A humildade de Deus que se faz próximo dos pequenos",
              "Que bens materiais são impossíveis de existir",
              "Que só pastores podem rezar",
              "Que o templo deixou de existir naquele dia",
            ],
            answer: 0,
            explanation:
              "A pobreza do presépio manifesta a humildade e a glória escondida do Reino de Deus (CIC 525-526).",
          },
        ],
      },
      {
        id: "nazare-trabalho",
        title: "A Sagrada Família em Nazaré",
        emoji: "🪚",
        xp: 20,
        teachings: [
          {
            title: "Símbolo de vida cotidiana santa",
            text: "Durante quase trinta anos em Nazaré, Jesus viveu no silêncio, na oração, no trabalho manual com São José e na obediência a seus pais. A santidade cresce também na rotina simples.",
            example:
              "Oferecer a Deus os afazeres comuns da casa, do estudo ou do emprego como gesto de amor.",
            source: "Lc 2,51-52 · CIC 531-534",
          },
          {
            title: "São José, guardião fiel",
            text: "Justo e silencioso, São José protegeu Maria e o Menino Jesus, ensinou a profissão de carpinteiro e obedeceu prontamente à vontade de Deus.",
            example:
              "Cuidar da família com presença discreta, trabalho honesto e proteção nos momentos difíceis.",
            source: "Mt 1,19-24; 2,13-15 · CIC 532, 1655",
          },
          {
            title: "As coisas do Pai",
            text: "Aos doze anos no templo, Jesus mostrou que acima dos laços familiares está sua missão filial junto ao Pai do céu — e depois voltou submisso para Nazaré.",
            example:
              "Conciliar o amor e a responsabilidade familiar com o tempo dedicado a Deus e à comunidade.",
            source: "Lc 2,41-51 · CIC 534",
          },
        ],
        questions: [
          {
            prompt: "O que a longa vida oculta de Jesus em Nazaré ensina aos cristãos?",
            options: [
              "Que o trabalho e a rotina familiar podem ser caminho de santidade",
              "Que só os três últimos anos de vida têm valor",
              "Que devemos fugir da família",
              "Que estudar não tem importância",
            ],
            answer: 0,
            explanation:
              "A vida oculta em Nazaré santifica os gestos ordinários da família, da oração e do trabalho cotidiano (CIC 531-533).",
          },
          {
            prompt: "Como São José é apresentado nos Evangelhos?",
            options: [
              "Como um rei de Jerusalém",
              "Como homem justo, trabalhador e guardião fiel da Sagrada Família",
              "Como alguém que nunca obedecia aos anjos",
              "Como um sacerdote do templo",
            ],
            answer: 1,
            explanation:
              "José é chamado homem justo e cumpriu com fidelidade a missão de pai adotivo e protetor (CIC 532, 1655).",
          },
          {
            prompt: "O que Jesus revelou aos doze anos no Templo?",
            options: [
              "Desprezo pelos pais",
              "Sua consagração total à missão do Pai celeste",
              "Que nunca mais voltaria a Nazaré",
              "Que os mestres não sabiam ler",
            ],
            answer: 1,
            explanation:
              "Ao dizer que devia ocupar-se das coisas do Pai, Jesus revelou sua filiação divina, retornando depois obediente a Nazaré (CIC 534).",
          },
        ],
      },
      {
        id: "batismo-tentacoes",
        title: "Batismo no Jordão e tentações no deserto",
        emoji: "💧",
        xp: 20,
        teachings: [
          {
            title: "Solidário com os pecadores no Jordão",
            text: "Embora sem pecado, Jesus entrou nas águas do Jordão para assumir nossa condição. O céu se abriu, o Espírito desceu como pomba e o Pai o proclamou Filho amado.",
            example:
              "Recordar a data do próprio Batismo com gratidão, sabendo que nele fomos chamados filhos amados do Pai.",
            source: "Mt 3,13-17 · CIC 535-537",
          },
          {
            title: "Vencer as tentações com a Palavra",
            text: "No deserto, Jesus enfrentou tentações ligadas ao ter, ao exibir-se e ao poder, vencendo todas com a Palavra de Deus e a fidelidade ao Pai.",
            example:
              "Quando surgir uma tentação forte, recorrer a uma frase breve do Evangelho e pedir auxílio a Deus.",
            source: "Mt 4,1-11 · CIC 538-540",
          },
          {
            title: "A Quaresma unida a Cristo",
            text: "Os quarenta dias de Jesus no deserto inspiram a Igreja no tempo da Quaresma, convidando à conversão por meio da oração, do jejum e da caridade.",
            example:
              "Praticar pequenas renúncias voluntárias para fortalecer a liberdade interior diante dos impulsos.",
            source: "Mc 1,12-13 · CIC 540, 1438",
          },
        ],
        questions: [
          {
            prompt: "Por que Jesus, sendo sem pecado, quis ser batizado por João no Jordão?",
            options: [
              "Porque precisava pedir perdão de faltas pessoais",
              "Para solidarizar-se conosco e iniciar sua missão pública",
              "Por medo dos soldados",
              "Porque não conhecia a Escritura",
            ],
            answer: 1,
            explanation:
              "No Jordão, Jesus se coloca entre os pecadores como o Cordeiro que tira o pecado do mundo (CIC 536).",
          },
          {
            prompt: "Como Jesus venceu as tentações no deserto?",
            options: [
              "Fazendo acordos com o tentador",
              "Fugindo do deserto no primeiro dia",
              "Com fidelidade ao Pai e apoio na Palavra de Deus",
              "Transformando pedras em pão para impressionar",
            ],
            answer: 2,
            explanation:
              "Jesus venceu o tentador com sua fidelidade filial e a resposta firme das Escrituras (CIC 538-539).",
          },
          {
            prompt:
              "Qual tempo litúrgico recorda especialmente os quarenta dias de Jesus no deserto?",
            options: [
              "O Tempo do Natal",
              "O Tempo da Páscoa",
              "A Solenidade de Todos os Santos",
              "A Quaresma",
            ],
            answer: 3,
            explanation:
              "A Igreja une-se cada ano ao mistério de Jesus no deserto durante os quarenta dias da Quaresma (CIC 540).",
          },
        ],
      },
    ],
  },
  {
    id: "parabolas-reino",
    title: "As Parábolas do Reino",
    emoji: "🌾",
    lessons: [
      {
        id: "semeador-mostarda",
        title: "O Semeador, o joio e o grão de mostarda",
        emoji: "🌱",
        xp: 20,
        teachings: [
          {
            title: "O coração como terra boa",
            text: "Na parábola do Semeador, a semente é a Palavra de Deus. O fruto depende da acolhida do coração: não deixar que preocupações ou superficialidade sufoquem a fé.",
            example:
              "Ler um trecho do Evangelho com calma e escolher uma atitude prática para viver naquele dia.",
            source: "Mt 13,3-23 · CIC 546, 2607",
          },
          {
            title: "Paciência diante do trigo e do joio",
            text: "Jesus ensina que o bem e o mal convivem até a colheita final. Não nos cabe arrancar ninguém com julgamento duro, mas perseverar no bem e deixar o juízo a Deus.",
            example:
              "Evitar rotular pessoas como perdidas, rezando pela conversão de todos, inclusive a nossa.",
            source: "Mt 13,24-30 · CIC 671, 827",
          },
          {
            title: "Pequenos gestos que crescem no Reino",
            text: "Como o grão de mostarda e o fermento na massa, o Reino de Deus começa pequeno e discreto, mas transforma silenciosamente o mundo.",
            example:
              "Valorizar uma oração sincera, um gesto escondido de serviço ou uma palavra gentil.",
            source: "Mt 13,31-33 · CIC 546, 764",
          },
        ],
        questions: [
          {
            prompt: "Na parábola do Semeador, o que representa a semente?",
            options: [
              "O dinheiro do templo",
              "A Palavra do Reino de Deus",
              "As leis civis do império",
              "Apenas os costumes antigos",
            ],
            answer: 1,
            explanation:
              "A semente é a Palavra de Deus lançada com generosidade ao coração humano (Mt 13,19; CIC 546).",
          },
          {
            prompt:
              "Por que o dono do campo manda esperar até a colheita para separar o trigo do joio?",
            options: [
              "Para não arrancar o trigo junto e dar tempo até o juízo de Deus",
              "Porque o joio é mais nutritivo",
              "Porque não sabia reconhecer as plantas",
              "Para que o campo ficasse vazio",
            ],
            answer: 0,
            explanation:
              "O Reino convida à paciência e à misericórdia até o juízo final de Cristo (CIC 671, 827).",
          },
          {
            prompt: "O que o grão de mostarda e o fermento ensinam sobre o Reino de Deus?",
            options: [
              "Que só grandes monumentos agradam a Deus",
              "Que o bem cresce de modo discreto e transforma por dentro",
              "Que o Reino acabou nos tempos antigos",
              "Que ninguém pode colaborar com Deus",
            ],
            answer: 1,
            explanation:
              "As parábolas mostram a força humilde e transformadora do Reino de Deus no coração e na história (CIC 546).",
          },
        ],
      },
      {
        id: "bom-samaritano",
        title: "O Bom Samaritano e a compaixão",
        emoji: "🩹",
        xp: 20,
        teachings: [
          {
            title: "Quem é o meu próximo?",
            text: "Diante da pergunta de um doutor da Lei, Jesus inverte o olhar: mais do que perguntar quem merece nossa ajuda, devemos nos fazer próximos de quem encontramos caído no caminho.",
            example:
              "Notar quem está sozinho, doente ou sobrecarregado perto de nós e oferecer ajuda real.",
            source: "Lc 10,25-37 · CIC 1932, 2447",
          },
          {
            title: "Compaixão que age com constância",
            text: "O samaritano não apenas sentiu pena: aproximou-se, cuidou das feridas, levou o ferido à hospedaria e arcou com os custos. A caridade verdadeira une ternura e cuidado concreto.",
            example:
              "Participar de ações solidárias da paróquia com regularidade, não apenas por impulso passageiro.",
            source: "Lc 10,33-35 · CIC 2444-2447",
          },
          {
            title: "Superar barreiras de preconceito",
            text: "Judeus e samaritanos viviam em inimizade, mas Jesus escolheu justamente um samaritano como exemplo de amor ao próximo. O amor cristão ultrapassa fronteiras sociais e culturais.",
            example:
              "Tratar com respeito e justiça até quem pensa diferente ou não pertence ao nosso grupo.",
            source: "Lc 10,36-37 · CIC 1931-1933",
          },
        ],
        questions: [
          {
            prompt: "Qual é a principal lição da parábola do Bom Samaritano?",
            options: [
              "Ajudar apenas amigos e parentes",
              "Fazer-se próximo de quem necessita, com compaixão concreta",
              "Evitar viajar por estradas perigosas",
              "Substituir a oração pela discussão teórica",
            ],
            answer: 1,
            explanation:
              "Jesus convida cada discípulo a fazer-se próximo de todo necessitado sem barreiras (Lc 10,36-37; CIC 1932).",
          },
          {
            prompt: "O que torna especial o gesto do samaritano na história?",
            options: [
              "Ele só rezou de longe e seguiu viagem",
              "Ele cobrou do ferido no dia seguinte",
              "Ele superou a rivalidade e cuidou das feridas até o fim",
              "Ele pediu ajuda apenas aos soldados",
            ],
            answer: 2,
            explanation:
              "Mesmo sendo estrangeiro desprezado, o samaritano cuidou integralmente do homem ferido (CIC 2447).",
          },
          {
            prompt: "Como essa parábola ilumina o mandamento do amor ao próximo?",
            options: [
              "Mostra que todo ser humano em necessidade é nosso próximo",
              "Restringe o próximo aos vizinhos de rua",
              "Ensina que sentimentos bastam sem ações",
              "Dispensa a obrigação de justiça",
            ],
            answer: 0,
            explanation:
              "A igual dignidade de todos os seres humanos pede que nos façamos próximos de qualquer necessitado (CIC 1931-1932).",
          },
        ],
      },
      {
        id: "ovelha-perdida-pai",
        title: "A ovelha perdida e o Pai misericordioso",
        emoji: "🐑",
        xp: 20,
        teachings: [
          {
            title: "O Bom Pastor sai à procura",
            text: "Jesus conta que o pastor deixa noventa e nove ovelhas em segurança para procurar a única que se perdeu e volta carregando-a nos ombros com alegria.",
            example: "Acolher sem julgamentos quem retorna à Igreja depois de anos afastado.",
            source: "Lc 15,4-7 · CIC 545, 1465",
          },
          {
            title: "O Pai corre ao encontro",
            text: "Na parábola do Filho Pródigo, o Pai avista o filho de longe, corre, abraça-o e devolve-lhe a dignidade de filho. Assim Deus acolhe quem se arrepende com sinceridade.",
            example:
              "Procurar o sacramento da Reconciliação sem medo, confiando na ternura do Pai.",
            source: "Lc 15,11-24 · CIC 1439, 2839",
          },
          {
            title: "Superar a dureza do irmão mais velho",
            text: "O irmão mais velho ficou irritado com a festa do perdão. O Pai também sai ao encontro dele para convidá-lo a alegrar-se: a misericórdia é maior que o ressentimento.",
            example:
              "Alegrar-se quando alguém muda de vida, em vez de guardar mágoa pelos erros antigos dessa pessoa.",
            source: "Lc 15,25-32 · CIC 1439",
          },
        ],
        questions: [
          {
            prompt: "O que há no céu quando um pecador se converte, segundo Lucas 15?",
            options: [
              "Indiferença total",
              "Mais alegria do que por noventa e nove que não precisam de conversão",
              "Um castigo imediato",
              "Silêncio até o fim dos tempos",
            ],
            answer: 1,
            explanation:
              "Jesus revela a alegria imensa de Deus ao reencontrar e salvar quem estava perdido (Lc 15,7; CIC 545).",
          },
          {
            prompt:
              "Na parábola do Pai Misericordioso, como o pai reage quando o filho volta arrependido?",
            options: [
              "Deixa o filho esperando semanas no portão",
              "Trata-o como empregado para o resto da vida",
              "Corre, abraça-o e faz festa por sua volta",
              "Nega-lhe o direito de falar",
            ],
            answer: 2,
            explanation:
              "O abraço do pai exprime a misericórdia gratuita de Deus que restaura a filiação perdida (CIC 1439).",
          },
          {
            prompt: "Qual erro o irmão mais velho corre o risco de cometer na parábola?",
            options: [
              "Recusar entrar na alegria do perdão por ressentimento",
              "Trabalhar demais na lavoura",
              "Acolher o irmão cedo demais",
              "Perdoar sem consultar o pai",
            ],
            answer: 0,
            explanation:
              "O irmão mais velho simboliza a dureza de coração que esquece que todos dependemos da graça gratuita do Pai (CIC 1439).",
          },
        ],
      },
    ],
  },
  {
    id: "milagres-sinais",
    title: "Sinais e Milagres de Jesus",
    emoji: "✨",
    lessons: [
      {
        id: "bodas-cana",
        title: "As Bodas de Caná: o primeiro sinal",
        emoji: "🍷",
        xp: 20,
        teachings: [
          {
            title: "Jesus abençoa a alegria humana e o Matrimônio",
            text: "Ao participar de uma festa de casamento em Caná e transformar água em vinho excelente, Jesus confirmou a bondade do Matrimônio e da alegria familiar.",
            example: "Celebrar os momentos felizes da família em espírito de gratidão a Deus.",
            source: "Jo 2,1-11 · CIC 1613",
          },
          {
            title: "A intercessão atenta de Maria",
            text: "Maria notou antes de todos que faltava vinho e levou a necessidade a Jesus. Sua orientação aos serventes vale para todos nós: 'Fazei tudo o que Ele vos disser'.",
            example:
              "Confiar a Maria nossas preocupações familiares e escutar em seguida o que Jesus pede no Evangelho.",
            source: "Jo 2,3-5 · CIC 2618",
          },
          {
            title: "Os sinais apontam para a fé em Cristo",
            text: "O Evangelho de João chama os milagres de 'sinais': eles não são espetáculos vazios, mas revelam a glória de Jesus e despertam a fé dos discípulos.",
            example:
              "Agradecer as graças recebidas crescendo mais no amor a Cristo do que na busca de curiosidades.",
            source: "Jo 2,11 · CIC 547-548",
          },
        ],
        questions: [
          {
            prompt: "Qual conselho Maria deu aos serventes nas Bodas de Caná?",
            options: [
              "Voltem para casa antes da festa acabar",
              "Fazei tudo o que Ele vos disser",
              "Comprem vinho em outra aldeia",
              "Não digam nada a Jesus",
            ],
            answer: 1,
            explanation:
              "Maria orienta sempre para a obediência confiada ao seu Filho Jesus (Jo 2,5; CIC 2618).",
          },
          {
            prompt: "O que a presença de Jesus em Caná significa para o Matrimônio?",
            options: [
              "Que o casamento é desnecessário",
              "Que Jesus só participa de festas reais",
              "Que Ele abençoa o amor conjugal e o eleva em graça",
              "Que o vinho substitui o Batismo",
            ],
            answer: 2,
            explanation:
              "A Igreja vê em Caná a confirmação da bondade do casamento, que em Cristo será sinal eficaz da sua presença (CIC 1613).",
          },
          {
            prompt: "Qual é a finalidade dos sinais e milagres de Jesus?",
            options: [
              "Atrair aplausos sem compromisso",
              "Manifestar o Reino e despertar a fé em Cristo",
              "Substituir a livre decisão humana",
              "Eliminar todas as provas da vida terrena",
            ],
            answer: 1,
            explanation:
              "Os sinais realizados por Jesus atestam que o Pai o enviou e convidam a crer nele (CIC 547-548).",
          },
        ],
      },
      {
        id: "multiplicacao-paes",
        title: "A multiplicação dos pães e o Pão da Vida",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Partilhar o pouco nas mãos de Jesus",
            text: "Diante da multidão faminta, os discípulos tinham apenas cinco pães e dois peixes. Jesus agradeceu ao Pai, partiu os pães e saciou a todos com abundância.",
            example:
              "Oferecer nosso pouco tempo ou recurso com generosidade para que Deus multiplique o bem.",
            source: "Jo 6,1-13 · CIC 1335",
          },
          {
            title: "Eu sou o Pão da Vida",
            text: "No dia seguinte em Cafarnaum, Jesus explicou o sentido do sinal: mais do que o alimento que perece, Ele próprio se dá como o Pão vivo descido do céu.",
            example: "Preparar o coração com recolhimento antes de comungar na Missa.",
            source: "Jo 6,35.51 · CIC 1338, 1384",
          },
          {
            title: "Compaixão espiritual e material",
            text: "Jesus primeiro ensinou e curou, mas também não ignorou a fome física da multidão. A fé eucarística impulsiona à partilha com quem passa necessidade.",
            example:
              "Contribuir com cestas básicas ou obras de caridade ao sair da Missa dominical.",
            source: "Mc 6,34-44 · CIC 1397",
          },
        ],
        questions: [
          {
            prompt: "Qual sacramento é prefigurado de modo especial pela multiplicação dos pães?",
            options: ["A Eucaristia", "A Ordem", "O Matrimônio", "A Confissão"],
            answer: 0,
            explanation:
              "A bênção e partilha dos pães prefiguram a superabundância da Eucaristia, o Pão da Vida (CIC 1335, 1338).",
          },
          {
            prompt: "O que significa Jesus dizer 'Eu sou o Pão da Vida'?",
            options: [
              "Que o pão comum nunca deve ser comido",
              "Que Ele mesmo nutre a vida eterna em quem crê e comunga",
              "Que não precisamos trabalhar",
              "Que apenas cinco pessoas podem segui-lo",
            ],
            answer: 1,
            explanation:
              "No discurso do Pão da Vida (Jo 6), Jesus promete dar sua carne para a vida do mundo (CIC 1338, 1384).",
          },
          {
            prompt: "Segundo o Catecismo, qual compromisso nasce da Eucaristia diante dos pobres?",
            options: [
              "Indiferença às necessidades materiais",
              "Partilha e caridade concreta com os necessitados",
              "Guardar o alimento só para si",
              "Deixar a responsabilidade apenas ao acaso",
            ],
            answer: 1,
            explanation:
              "A Eucaristia compromete os cristãos com os pobres, reconhecendo neles os membros de Cristo (CIC 1397).",
          },
        ],
      },
      {
        id: "tempestade-lazaro",
        title: "Acalmar a tempestade e ressuscitar Lázaro",
        emoji: "⛵",
        xp: 20,
        teachings: [
          {
            title: "Confiança quando o barco balança",
            text: "No mar agitado, os discípulos temeram afundar, mas Jesus ordenou ao vento e às ondas que se calassem. Mesmo quando parece dormir, o Senhor está no barco conosco.",
            example:
              "Rezar com serenidade em momentos de crise familiar ou financeira, sem ceder ao desespero.",
            source: "Mc 4,35-41 · CIC 547, 2610",
          },
          {
            title: "Jesus chora diante da dor dos amigos",
            text: "Ao chegar ao túmulo de seu amigo Lázaro, Jesus se comoveu e chorou com Marta e Maria. O Filho de Deus não é frio diante da perda humana.",
            example:
              "Oferecer presença silenciosa e solidária a quem atravessa o luto, imitando a ternura de Jesus.",
            source: "Jo 11,33-36 · CIC 470, 640",
          },
          {
            title: "Eu sou a Ressurreição e a Vida",
            text: "Jesus chamou Lázaro para fora do sepulcro, antecipando sua própria vitória sobre a morte. Ele tem poder para dar vida nova desde agora e na eternidade.",
            example: "Rezar pelos falecidos com fé viva na promessa da ressurreição em Cristo.",
            source: "Jo 11,25-44 · CIC 640, 994",
          },
        ],
        questions: [
          {
            prompt: "O que Jesus perguntou aos discípulos após acalmar a tempestade?",
            options: [
              "Por que vocês entraram neste barco?",
              "Por que tendes tanto medo? Ainda não tendes fé?",
              "Quem construiu as velas do barco?",
              "Por que não pescaram antes?",
            ],
            answer: 1,
            explanation:
              "Jesus convida os discípulos a vencer o medo pela fé na sua presença salvadora (Mc 4,40; CIC 2610).",
          },
          {
            prompt: "O que revela o pranto de Jesus diante do túmulo de Lázaro?",
            options: [
              "Que Jesus não tinha poder para ajudar",
              "Que chorar é pecado",
              "A compaixão verdadeira e humana de Jesus diante da nossa dor",
              "Que Lázaro não era amigo dele",
            ],
            answer: 2,
            explanation:
              "Jesus assumiu verdadeiros sentimentos humanos e compadeceu-se profundamente diante da morte de seu amigo (CIC 470, 640).",
          },
          {
            prompt: "O que a ressurreição de Lázaro anuncia?",
            options: [
              "Que Lázaro nunca mais morreria na terra",
              "O poder de Jesus sobre a morte e a esperança da ressurreição",
              "Que os funerais devem ser proibidos",
              "Que Marta não tinha fé",
            ],
            answer: 1,
            explanation:
              "Ao ressuscitar Lázaro, Jesus manifesta ser a Ressurreição e a Vida e prepara a fé em sua própria Páscoa (CIC 640, 994).",
          },
        ],
      },
    ],
  },
  {
    id: "sermao-montanha",
    title: "O Sermão da Montanha",
    emoji: "⛰️",
    lessons: [
      {
        id: "sal-luz-mundo",
        title: "Sal da terra e luz do mundo",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Dar sabor e preservar o bem",
            text: "Jesus chama seus discípulos de sal da terra. O sal não aparece para si mesmo, mas dá sabor e evita a corrupção; assim o cristão torna presente a bondade de Deus no mundo.",
            example:
              "Levar honestidade, calma e bom humor cristão para a escola, o bairro ou o ambiente de trabalho.",
            source: "Mt 5,13 · CIC 782, 2044",
          },
          {
            title: "Luz que guia e glorifica o Pai",
            text: "Uma lâmpada não fica escondida debaixo de uma vasilha. Nossas boas obras devem iluminar com humildade para que as pessoas reconheçam o amor do Pai celeste.",
            example: "Praticar o bem sem vaidade, deixando que a coerência de vida fale por si.",
            source: "Mt 5,14-16 · CIC 2044",
          },
          {
            title: "Discípulos no meio da cidade",
            text: "A vocação cristã não é fugir da sociedade com desprezo, mas ser testemunha fiel de Cristo no meio das relações humanas.",
            example:
              "Defender a verdade e o respeito em conversas cotidianas, sem agressividade nem omissão.",
            source: "Mt 5,14 · CIC 898-900",
          },
        ],
        questions: [
          {
            prompt: "Para que devem brilhar as boas obras dos discípulos, segundo Mateus 5,16?",
            options: [
              "Para que eles fiquem famosos",
              "Para que os outros glorifiquem o Pai que está nos céus",
              "Para ganhar vantagens financeiras",
              "Para humilhar quem erra",
            ],
            answer: 1,
            explanation:
              "A luz do testemunho cristão não busca glória própria, mas conduz os corações a glorificar a Deus Pai (CIC 2044).",
          },
          {
            prompt: "O que significa ser 'sal da terra'?",
            options: [
              "Isolar-se completamente das pessoas",
              "Guardar a fé só dentro de casa",
              "Conservar o bem e dar sentido cristão à vida no mundo",
              "Julgar severamente os vizinhos",
            ],
            answer: 2,
            explanation:
              "O discípulo é chamado a transformar o ambiente humano com o sabor do Evangelho (CIC 782, 2044).",
          },
          {
            prompt: "Como devemos testemunhar a fé no ambiente de trabalho ou estudo?",
            options: [
              "Com coerência, serviço honesto e respeito",
              "Com discussões agressivas todos os dias",
              "Escondendo que seguimos a Cristo",
              "Negligenciando nossos deveres",
            ],
            answer: 0,
            explanation:
              "A fidelidade no cumprimento dos deveres e na caridade manifesta o Evangelho no cotidiano (CIC 898-900).",
          },
        ],
      },
      {
        id: "lei-nova-coracao",
        title: "A Lei nova: perdão, verdade e pureza",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Ir à raiz do coração",
            text: "Jesus não veio abolir a Lei, mas levá-la à plenitude. Ele mostra que não basta evitar o homicídio ou o adultério externo: Deus quer curar a raiva, o desprezo e a cobiça no coração.",
            example:
              "Interromper um insulto ou pensamento vingativo logo no início, antes que vire palavra ou ação.",
            source: "Mt 5,17-28 · CIC 1965-1972",
          },
          {
            title: "Reconciliar-se antes de oferecer o dom",
            text: "Antes de levar a oferta ao altar, Jesus pede que busquemos a reconciliação com o irmão. O culto verdadeiro a Deus caminha junto com a paz fraterna.",
            example:
              "Pedir desculpas ou dar sinal de paz a um familiar antes de participar da Eucaristia.",
            source: "Mt 5,23-24 · CIC 1393, 2840",
          },
          {
            title: "Amar até os inimigos e dizer a verdade",
            text: "Jesus convida a responder ao mal com o bem, rezar por quem nos persegue e manter palavra simples e verdadeira ('sim, sim; não, não').",
            example: "Rezar sinceramente pelo bem de alguém com quem houve desentendimento.",
            source: "Mt 5,37.44 · CIC 1968, 2466",
          },
        ],
        questions: [
          {
            prompt: "Como Jesus aperfeiçoa os mandamentos antigos no Sermão da Montanha?",
            options: [
              "Reduzindo-os a regras apenas externas",
              "Chamando à conversão interior das intenções e do coração",
              "Liberando o rancor guardado em segredo",
              "Tornando impossível qualquer perdão",
            ],
            answer: 1,
            explanation:
              "A Lei Nova do Evangelho atinge as raízes interiores dos atos — o coração humano movido pela graça (CIC 1965-1968).",
          },
          {
            prompt:
              "O que Jesus orienta fazer se lembrarmos que um irmão tem algo contra nós na hora da oferta?",
            options: [
              "Ignorar o irmão para não perder tempo",
              "Reconciliar-se primeiro com o irmão e depois apresentar a oferta",
              "Deixar de ir à igreja para sempre",
              "Culpar os sacerdotes",
            ],
            answer: 1,
            explanation:
              "O amor a Deus e a reconciliação fraterna são inseparáveis na vida cristã (Mt 5,23-24; CIC 2840).",
          },
          {
            prompt: "Por que Jesus pede para rezarmos por quem nos persegue?",
            options: [
              "Para nos tornarmos semelhantes ao Pai celeste que ama a todos",
              "Para fingir que a injustiça é boa",
              "Para buscar vingança indireta",
              "Para aprovar o pecado",
            ],
            answer: 0,
            explanation:
              "O amor aos inimigos reflete a misericórdia universal de Deus Pai, que faz o sol nascer sobre bons e maus (CIC 1968, 2844).",
          },
        ],
      },
      {
        id: "tesouro-confianca",
        title: "Esmola, jejum, oração e confiança no Pai",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Praticar o bem diante do Pai, não para aplausos",
            text: "Ao dar esmola, rezar ou jejuar, Jesus pede discrição para não buscar elogios humanos. O Pai que vê no segredo conhece e acolhe a sinceridade do coração.",
            example: "Ajudar alguém em necessidade sem precisar postar ou comentar com todo mundo.",
            source: "Mt 6,1-18 · CIC 1969, 2608",
          },
          {
            title: "Onde está o teu tesouro, aí está teu coração",
            text: "Os bens materiais passam e não podem substituir Deus. Quem busca primeiro o Reino de Deus e sua justiça organiza o dinheiro e o tempo com liberdade.",
            example:
              "Revisar os gastos e prioridades do mês colocando a família, a fé e a solidariedade acima do consumo.",
            source: "Mt 6,19-24 · CIC 2544-2547",
          },
          {
            title: "Confiar na Providência sem ansiedade paralisante",
            text: "Olhando para os pássaros e os lírios, Jesus ensina que o Pai sabe do que precisamos. Trabalhamos com responsabilidade, mas entregamos o amanhã nas mãos de Deus.",
            example:
              "Ao sentir preocupação excessiva com o futuro, fazer o possível hoje e confiar o restante a Deus em oração.",
            source: "Mt 6,25-34 · CIC 305, 2830",
          },
        ],
        questions: [
          {
            prompt: "Qual é o alerta de Jesus ao praticar esmola, oração e jejum em Mateus 6?",
            options: [
              "Evitar fazê-los apenas para ser admirado pelos homens",
              "Nunca praticar esmola ou jejum",
              "Fazer tudo somente em grandes estádios",
              "Rezar apenas uma frase por mês",
            ],
            answer: 0,
            explanation:
              "Jesus purifica a intenção: a esmola, a oração e o jejum dirigem-se ao Pai que vê no segredo (CIC 1969).",
          },
          {
            prompt: "O que significa buscar primeiro o Reino de Deus e sua justiça?",
            options: [
              "Deixar de trabalhar e estudar",
              "Colocar Deus e sua vontade como prioridade central da vida",
              "Desprezar a própria saúde",
              "Acumular tesouros na terra sem partilhar",
            ],
            answer: 1,
            explanation:
              "A confiança na Providência orienta o uso reto dos bens e coloca Deus em primeiro lugar (Mt 6,33; CIC 305, 2830).",
          },
          {
            prompt: "Por que Jesus afirma que ninguém pode servir a Deus e ao dinheiro?",
            options: [
              "Porque o trabalho honesto é proibido",
              "Porque o dinheiro vira ídolo quando toma o lugar de Deus no coração",
              "Porque os pobres não têm valor",
              "Porque a Igreja proíbe poupar recursos",
            ],
            answer: 1,
            explanation:
              "Os bens são meios úteis, mas transformam-se em idolatria quando governam o coração humano (CIC 2544-2545).",
          },
        ],
      },
    ],
  },
  {
    id: "paixao-ressurreicao",
    title: "Paixão, Morte e Ressurreição",
    emoji: "✝️",
    lessons: [
      {
        id: "ultima-ceia-getsemani",
        title: "Da Última Ceia ao Getsêmani",
        emoji: "🫖",
        xp: 20,
        teachings: [
          {
            title: "Lavar os pés e entregar a vida",
            text: "Na Última Ceia, Jesus lavou os pés dos discípulos mostrando o amor que serve e instituiu a Eucaristia, entregando antecipadamente seu Corpo e Sangue por nós.",
            example:
              "Assumir uma tarefa simples em casa ou na comunidade que ninguém gosta de fazer, por amor.",
            source: "Jo 13,1-15; Lc 22,19-20 · CIC 610-611, 1337",
          },
          {
            title: "A oração no Jardim das Oliveiras",
            text: "No Getsêmani, Jesus sentiu pavor e angústia diante da morte iminente, mas confiou ao Pai: 'Não se faça a minha vontade, mas a tua'. Nossa oração aprende ali a entrega filial.",
            example:
              "Quando uma situação difícil não muda imediatamente, pedir a Deus força para permanecer fiel.",
            source: "Lc 22,39-44 · CIC 612, 2600",
          },
          {
            title: "Vigiar para não cair na tentação",
            text: "Enquanto os discípulos dormiam, Jesus os exortou a vigiar e orar. A proximidade com Cristo na oração sustenta a coragem nas horas de prova.",
            example: "Fazer uma breve oração da noite examinando o dia antes de descansar.",
            source: "Mt 26,40-41 · CIC 2612, 2849",
          },
        ],
        questions: [
          {
            prompt: "O que Jesus ensinou ao lavar os pés dos discípulos na Última Ceia?",
            options: [
              "Que o amor cristão se expressa no serviço humilde",
              "Que os apóstolos eram superiores aos outros",
              "Que a Eucaristia não precisava ser repetida",
              "Que não há necessidade de comunidade",
            ],
            answer: 0,
            explanation:
              "O lava-pés revela o sentido de entrega e serviço que acompanha o mandamento novo da caridade (CIC 610, 1337).",
          },
          {
            prompt: "O que a oração de Jesus no Getsêmani manifesta?",
            options: [
              "Que Ele não era verdadeiramente homem",
              "A adesão livre e amorosa de sua vontade humana à vontade do Pai",
              "Falta de confiança em Deus",
              "Desistência da missão salvífica",
            ],
            answer: 1,
            explanation:
              "No Getsêmani, Jesus aceitou livremente a cruz por obediência amorosa ao Pai e amor por nós (CIC 612).",
          },
          {
            prompt: "Por que Jesus pediu aos discípulos que vigiliassem e orassem com Ele?",
            options: [
              "Para que fortalecessem o espírito diante da tentação",
              "Para atacar os guardas",
              "Para escrever leis novas durante a noite",
              "Porque Jesus não sabia rezar sozinho",
            ],
            answer: 0,
            explanation:
              "A vigilância na oração mantém o coração unido a Cristo e evita ceder ao medo e à tentação (CIC 2612).",
          },
        ],
      },
      {
        id: "cruz-redencao",
        title: "A Cruz de Cristo: entrega por amor",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Ninguém tira a vida de Jesus: Ele a entrega",
            text: "Jesus não foi vítima de um acidente histórico; Ele ofereceu livremente sua vida por amor ao Pai e a toda a humanidade para nos reconciliar com Deus.",
            example: "Fazer o Sinal da Cruz com calma e consciência ao iniciar o dia e as orações.",
            source: "Jo 10,17-18; 19,30 · CIC 609, 613-616",
          },
          {
            title: "Perdão e acolhida desde a Cruz",
            text: "Na Cruz, Jesus perdoou os que o crucificavam, prometeu o paraíso ao bom ladrão arrependido e entregou Maria como mãe ao discípulo amado.",
            example:
              "Pedir graça a Jesus na Cruz para perdoar alguém cuja ofensa parece pesada demais.",
            source: "Lc 23,34.43; Jo 19,26-27 · CIC 616, 964",
          },
          {
            title: "O sangue e a água do lado aberto",
            text: "Do lado transpassado de Cristo morto na Cruz brotaram sangue e água — sinal da Igreja que nasce de Cristo e dos sacramentos do Batismo e da Eucaristia.",
            example: "Meditar a Paixão na Sexta-feira Santa agradecendo a graça dos sacramentos.",
            source: "Jo 19,34 · CIC 617, 766",
          },
        ],
        questions: [
          {
            prompt: "Como devemos compreender a morte de Jesus na Cruz?",
            options: [
              "Como derrota definitiva de Deus",
              "Como oferta livre de amor que redime o mundo do pecado",
              "Como um castigo injusto sem sentido",
              "Como prova de que o amor não funciona",
            ],
            answer: 1,
            explanation:
              "A Cruz é o sacrifício único e perfeito de Cristo que reconcilia o mundo com o Pai (CIC 613-618).",
          },
          {
            prompt: "A quem Jesus confiou sua Mãe Maria aos pés da Cruz?",
            options: [
              "Ao governador romano",
              "Ao discípulo amado e, nele, a toda a Igreja",
              "Aos chefes dos sacerdotes",
              "Aos soldados da guarda",
            ],
            answer: 1,
            explanation:
              "Em João 19,26-27, Maria torna-se espiritualmente mãe do discípulo e dos fiéis (CIC 964).",
          },
          {
            prompt:
              "O que os Santos Padres veem no sangue e na água que brotaram do lado de Cristo?",
            options: [
              "Apenas um detalhe sem significado espiritual",
              "Os sacramentos do Batismo e da Eucaristia, dos quais nasce a Igreja",
              "O fim de todas as reuniões cristãs",
              "Um sinal exclusivo do Antigo Testamento",
            ],
            answer: 1,
            explanation:
              "A tradição da Igreja reconhece na água e no sangue o Batismo e a Eucaristia que fazem nascer a Igreja (CIC 766).",
          },
        ],
      },
      {
        id: "pascoa-emaus",
        title: "A manhã de Páscoa e os discípulos de Emaús",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "O túmulo vazio e as testemunhas",
            text: "Na manhã do primeiro dia da semana, as mulheres encontraram o túmulo vazio e os anjos anunciaram: 'Ele ressuscitou!'. Jesus apareceu vivo a Maria Madalena, a Pedro e aos Doze.",
            example:
              "Celebrar cada domingo como uma pequena Páscoa semanal participando da Santa Missa.",
            source: "Lc 24,1-12; 1Cor 15,3-8 · CIC 638-644",
          },
          {
            title: "Jesus caminha com os desanimados rumo a Emaús",
            text: "Dois discípulos tristes caminhavam para Emaús. Jesus aproximou-se, escutou sua dor, explicou as Escrituras fazendo arder o coração e foi reconhecido ao partir o pão.",
            example:
              "Quando o desânimo bater, recordar que Cristo caminha conosco na Palavra e na Eucaristia.",
            source: "Lc 24,13-35 · CIC 645, 1347",
          },
          {
            title: "A Ressurreição transforma o medo em missão",
            text: "Ao reconhecer o Ressuscitado, os discípulos de Emaús voltaram imediatamente a Jerusalém para partilhar a boa notícia. A Páscoa dá novo sentido à vida inteira.",
            example: "Compartilhar uma palavra de esperança cristã com alguém que perdeu o ânimo.",
            source: "Lc 24,33-35 · CIC 651-655",
          },
        ],
        questions: [
          {
            prompt:
              "Em que gesto os discípulos de Emaús reconheceram finalmente Jesus ressuscitado?",
            options: [
              "Ao vê-lo em uma carruagem",
              "Ao partir o pão",
              "Ao ouvir trovões no céu",
              "Somente ao chegarem de volta ao templo",
            ],
            answer: 1,
            explanation:
              "Após explicar as Escrituras, Jesus revelou-se aos discípulos ao partir o pão — modelo da celebração eucarística (CIC 645, 1347).",
          },
          {
            prompt: "Qual é o efeito da Ressurreição de Cristo segundo a fé católica?",
            options: [
              "Confirma sua divindade, vence o pecado e abre a esperança da nossa ressurreição",
              "É apenas uma metáfora poética dos apóstolos",
              "Significa que os cristãos nunca morrem fisicamente",
              "Anula a importância do Antigo Testamento",
            ],
            answer: 0,
            explanation:
              "A Ressurreição confirma tudo o que Cristo fez e ensinou e é penhor da nossa própria ressurreição (CIC 651-655).",
          },
          {
            prompt: "Quem foram as primeiras mensageiras do túmulo vazio na manhã de Páscoa?",
            options: [
              "Os governadores da região",
              "As mulheres discípulas que foram ao sepulcro",
              "Os soldados romanos",
              "Os sábios do oriente",
            ],
            answer: 1,
            explanation:
              "As mulheres que acompanharam Jesus até a Cruz foram as primeiras a encontrar o sepulcro vazio e anunciar aos apóstolos (CIC 641).",
          },
        ],
      },
    ],
  },
  {
    id: "igreja-nascente",
    title: "A Igreja Nascente (Atos dos Apóstolos)",
    emoji: "⛵",
    lessons: [
      {
        id: "primeira-comunidade",
        title: "A vida da primeira comunidade em Jerusalém",
        emoji: "🏛️",
        xp: 20,
        teachings: [
          {
            title: "Quatro pilares da vida cristã",
            text: "Os primeiros cristãos perseveravam na doutrina dos apóstolos, na comunhão fraterna, na fração do pão (Eucaristia) e nas orações. Esses pilares sustentam a Igreja em todos os séculos.",
            example:
              "Equilibrar na semana a formação na fé, a Missa dominical, a oração pessoal e a convivência paroquial.",
            source: "At 2,42 · CIC 752, 1342, 2624",
          },
          {
            title: "Um só coração e partilha fraterna",
            text: "A multidão dos fiéis tinha um só coração e repartia os bens segundo a necessidade de cada um. A comunhão espiritual gerava solidariedade visível.",
            example:
              "Partilhar roupas, alimentos ou tempo com famílias em dificuldade na própria comunidade.",
            source: "At 4,32-35 · CIC 949-952, 2447",
          },
          {
            title: "Diáconos para servir os vulneráveis",
            text: "Quando surgiram queixas no atendimento às viúvas, os apóstolos escolheram sete homens cheios do Espírito e sabedoria para cuidar da caridade organizada.",
            example: "Organizar com responsabilidade o serviço aos idosos e doentes na paróquia.",
            source: "At 6,1-6 · CIC 1569-1570",
          },
        ],
        questions: [
          {
            prompt: "Quais eram os quatro pilares da primeira comunidade em Atos 2,42?",
            options: [
              "Ensino dos apóstolos, comunhão, fração do pão e orações",
              "Comércio, armas, festas e viagens",
              "Somente jejuns secretos sem reuniões",
              "Debates filosóficos sem sacramentos",
            ],
            answer: 0,
            explanation:
              "Atos 2,42 descreve os elementos essenciais que permanecem vivos na Igreja: doutrina, comunhão, Eucaristia e oração (CIC 1342, 2624).",
          },
          {
            prompt: "Por que os apóstolos instituíram os sete diáconos em Atos 6?",
            options: [
              "Para encerrar a caridade com os pobres",
              "Para garantir o cuidado justo às viúvas e necessitados enquanto os apóstolos pregavam",
              "Para construir muralhas",
              "Para substituir o Batismo",
            ],
            answer: 1,
            explanation:
              "O serviço diaconal nasceu para unir o ministério da Palavra e da oração ao cuidado fraterno dos necessitados (CIC 1569-1570).",
          },
          {
            prompt: "O que significa 'fração do pão' no livro dos Atos dos Apóstolos?",
            options: [
              "Apenas um lanche comum",
              "A celebração da Eucaristia em memória de Jesus",
              "A divisão do território",
              "Uma lei alimentar do império",
            ],
            answer: 1,
            explanation:
              "Desde o início, a Igreja designou a celebração da Eucaristia pelo termo 'fração do pão' (CIC 1329, 1342).",
          },
        ],
      },
      {
        id: "pedro-paulo",
        title: "Pedro e Paulo: testemunhas até os confins",
        emoji: "🗝️",
        xp: 20,
        teachings: [
          {
            title: "Pedro confirma os irmãos e abre as portas aos gentios",
            text: "Jesus confiou a Pedro as chaves do Reino para confirmar os irmãos na fé. Em Cesareia, Pedro batizou o centurião Cornélio, reconhecendo que Deus acolhe todos os povos.",
            example:
              "Rezar pelo Papa, sucessor de Pedro, para que guie a Igreja na unidade e na fidelidade ao Evangelho.",
            source: "Mt 16,18-19; At 10,34-48 · CIC 552-553, 881",
          },
          {
            title: "A conversão de Saulo no caminho de Damasco",
            text: "Saulo perseguia a Igreja, mas no encontro com Cristo ressuscitado transformou-se no Apóstolo Paulo. Ninguém está longe demais para ser alcançado pela graça.",
            example:
              "Nunca perder a esperança na conversão de um amigo ou familiar distante da fé.",
            source: "At 9,1-20 · CIC 442, 659",
          },
          {
            title: "Missão sem fronteiras e unidade na Igreja",
            text: "Paulo levou o Evangelho a diversas cidades do mundo antigo, mantendo comunhão com Pedro e os apóstolos no Concílio de Jerusalém.",
            example:
              "Dialogar com respeito e buscar a unidade com os pastores e irmãos da comunidade mesmo quando há opiniões diversas.",
            source: "At 15,1-29 · CIC 857, 884",
          },
        ],
        questions: [
          {
            prompt: "O que o batismo do romano Cornélio por Pedro mostrou à Igreja nascente?",
            options: [
              "Que o Evangelho se destina apenas a uma cidade",
              "Que a salvação em Cristo está aberta a todos os povos",
              "Que soldados não podem ser cristãos",
              "Que o Batismo deixou de ser necessário",
            ],
            answer: 1,
            explanation:
              "Pedro reconheceu que Deus não faz acepção de pessoas e derrama seu Espírito sobre todos os povos (At 10,34; CIC 857).",
          },
          {
            prompt: "O que aconteceu com Saulo (Paulo) no caminho de Damasco?",
            options: [
              "Encontrou Jesus ressuscitado e tornou-se apóstolo das nações",
              "Decidiu abandonar toda vida religiosa",
              "Foi coroado rei em Jerusalém",
              "Voltou para prender os discípulos imediatamente",
            ],
            answer: 0,
            explanation:
              "O encontro com Cristo ressuscitado converteu Paulo no grande anunciador do Evangelho aos gentios (CIC 442, 659).",
          },
          {
            prompt: "Como a Igreja nascente resolveu questões difíceis no Concílio de Jerusalém?",
            options: [
              "Dividindo-se em grupos inimigos",
              "Reunindo os apóstolos e anciãos em oração e discernimento comum",
              "Deixando cada cidade inventar outro credo",
              "Pedindo decisão ao imperador",
            ],
            answer: 1,
            explanation:
              "Os apóstolos e presbíteros reuniram-se em colegialidade para discernir juntos sob a ação do Espírito (At 15; CIC 884).",
          },
        ],
      },
      {
        id: "martires-testemunho",
        title: "Os primeiros mártires e a força da fé",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Estêvão perdoa enquanto entrega a vida",
            text: "O diácono Estêvão tornou-se o primeiro mártir cristão. Apedrejado por testemunhar Cristo, repetiu o gesto do Mestre: entregou seu espírito e rezou pelo perdão dos algozes.",
            example: "Responder com firmeza mansa e sem ódio quando alguém zombar da nossa fé.",
            source: "At 7,54-60 · CIC 2473-2474",
          },
          {
            title: "Mártir significa testemunha",
            text: "A palavra mártir quer dizer 'testemunha'. O martírio é o testemunho supremo da verdade da fé, suportado livremente por amor a Cristo, mesmo diante da morte.",
            example:
              "Ser fiel nas pequenas escolhas diárias de verdade e honestidade para estar firme nas grandes.",
            source: "Mt 10,32-33 · CIC 2473",
          },
          {
            title: "Semente de novos cristãos",
            text: "Mesmo diante das perseguições antigas e atuais, a fidelidade dos mártires fortalece a Igreja e mostra que o amor de Cristo é mais forte do que o medo.",
            example:
              "Conhecer a história de um santo mártir e rezar pelos cristãos perseguidos no mundo hoje.",
            source: "Ap 7,14 · CIC 852, 2474",
          },
        ],
        questions: [
          {
            prompt: "O que significa originalmente a palavra 'mártir'?",
            options: ["Guerreiro", "Testemunha", "Eremita", "Viajante"],
            answer: 1,
            explanation:
              "Mártir significa testemunha: quem dá o testemunho supremo da verdade da fé por amor a Cristo (CIC 2473).",
          },
          {
            prompt: "Qual atitude marcante Santo Estêvão teve ao morrer?",
            options: [
              "Amaldiçoou seus acusadores",
              "Negou conhecer Jesus",
              "Perdoou e rezou por aqueles que o apedrejavam",
              "Fugiu do julgamento",
            ],
            answer: 2,
            explanation:
              "Seguindo Jesus na Cruz, Estêvão pediu ao Senhor que não imputasse aquele pecado aos seus perseguidores (At 7,60; CIC 2474).",
          },
          {
            prompt: "Por que a Igreja venera a memória dos mártires?",
            options: [
              "Porque eles mostraram que nada supera o amor e a fidelidade a Cristo",
              "Porque eles buscaram o sofrimento pelo sofrimento",
              "Porque foram pessoas sem sentimentos",
              "Porque não participavam da comunidade",
            ],
            answer: 0,
            explanation:
              "Os mártires configuram-se perfeitamente a Cristo em sua entrega de amor e fortaleza na fé (CIC 2473-2474).",
          },
        ],
      },
    ],
  },
  {
    id: "cartas-apostolicas",
    title: "Ensinamentos dos Apóstolos",
    emoji: "✉️",
    lessons: [
      {
        id: "hino-caridade",
        title: "O hino à caridade e os carismas",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "Diversidade de dons para o bem comum",
            text: "Como um corpo tem vários membros com funções diferentes, o Espírito distribui carismas variados na Igreja — não para competição, mas para edificar toda a comunidade.",
            example:
              "Colocar seus dons — música, escuta, organização ou ensino — a serviço da paróquia sem comparar-se com inveja.",
            source: "1Cor 12,4-27 · CIC 799-801",
          },
          {
            title: "Sem caridade, nada aproveita",
            text: "Em 1 Coríntios 13, São Paulo mostra que conhecimentos, milagres e grandes sacrifícios perdem o sentido se não forem animados pela caridade, que é paciente, bondosa e tudo espera.",
            example:
              "Aprender a escutar com paciência antes de corrigir ou apontar falhas em alguém.",
            source: "1Cor 13,1-8 · CIC 1825-1826",
          },
          {
            title: "A caridade nunca passará",
            text: "Entre fé, esperança e caridade, a maior é a caridade, porque permanecerá para sempre na eternidade quando contemplarmos Deus face a face.",
            example:
              "Avaliar no fim do dia não apenas quantas tarefas fizemos, mas quanto amor colocamos nelas.",
            source: "1Cor 13,13 · CIC 1826-1827",
          },
        ],
        questions: [
          {
            prompt: "Para que finalidade o Espírito Santo concede carismas aos cristãos?",
            options: [
              "Para exibir superioridade sobre os outros",
              "Para o bem comum e a edificação da Igreja",
              "Para dividir a comunidade em grupos fechados",
              "Para substituir os sacramentos",
            ],
            answer: 1,
            explanation:
              "Os carismas são graças concedidas pelo Espírito visando o bem comum de todo o Corpo de Cristo (1Cor 12,7; CIC 799-800).",
          },
          {
            prompt:
              "Segundo São Paulo em 1 Coríntios 13, qual virtude permanece para sempre na eternidade?",
            options: [
              "A curiosidade",
              "O espírito de competição",
              "A caridade",
              "A fala em público",
            ],
            answer: 2,
            explanation:
              "A caridade é a maior das virtudes teologais e nunca desaparecerá no Reino definitivo (CIC 1826).",
          },
          {
            prompt: "Como São Paulo descreve a caridade no cotidiano?",
            options: [
              "Impaciente e vaidosa",
              "Paciente, servicial, sem inveja e capaz de perdoar",
              "Fria e distante dos problemas reais",
              "Interessada apenas em si mesma",
            ],
            answer: 1,
            explanation:
              "O hino da caridade descreve atitudes concretas de paciência, bondade, verdade e esperança (1Cor 13,4-7; CIC 1825).",
          },
        ],
      },
      {
        id: "armadura-deus",
        title: "A vida nova em Cristo e a armadura de Deus",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Revestir-se do homem novo",
            text: "Na Carta aos Efésios, São Paulo exorta a deixar para trás a mentira, a amargura e a ira, revestindo-se da bondade, da compaixão e do perdão mútuo.",
            example:
              "Não deixar que uma irritação do dia dure até a noite; buscar paz e perdão antes de dormir.",
            source: "Ef 4,22-32 · CIC 1694, 1841",
          },
          {
            title: "A armadura espiritual do cristão",
            text: "Para enfrentar as lutas espirituais, Deus oferece a verdade como cinturão, a justiça como couraça, a fé como escudo, a salvação como capacete e a Palavra de Deus como espada.",
            example:
              "Usar um versículo bíblico guardado na memória para afastar o desânimo ou pensamentos maus.",
            source: "Ef 6,10-17 · CIC 2015, 2725",
          },
          {
            title: "Orar em todo tempo no Espírito",
            text: "A armadura espiritual só funciona unida à oração vigilante e constante por si mesmo e por todos os santos da Igreja.",
            example: "Rezar pelos irmãos da comunidade que atravessam provações difíceis.",
            source: "Ef 6,18 · CIC 2659, 2725",
          },
        ],
        questions: [
          {
            prompt:
              "Na imagem da armadura de Deus em Efésios 6, o que representa a espada do Espírito?",
            options: [
              "A força física",
              "A Palavra de Deus",
              "A riqueza material",
              "A discussão agressiva",
            ],
            answer: 1,
            explanation:
              "São Paulo identifica a espada do Espírito com a Palavra de Deus, viva e eficaz (Ef 6,17; CIC 2725).",
          },
          {
            prompt: "O que significa 'revestir-se do homem novo' segundo Efésios 4?",
            options: [
              "Usar roupas especiais apenas aos domingos",
              "Viver segundo Cristo na verdade, na justiça e no perdão",
              "Esquecer todos os compromissos familiares",
              "Mudar apenas de aparência externa",
            ],
            answer: 1,
            explanation:
              "Pelo Batismo somos chamados a renovar a mente e o agir segundo a santidade e a misericórdia de Cristo (CIC 1694).",
          },
          {
            prompt: "Qual escudo apaga as setas inflamadas do maligno em Efésios 6?",
            options: [
              "O escudo da fama",
              "O escudo da fé",
              "O escudo do isolamento",
              "O escudo da vaidade",
            ],
            answer: 1,
            explanation:
              "A fé confiante em Deus protege o coração cristão nas tentações e combates espirituais (Ef 6,16; CIC 162, 2725).",
          },
        ],
      },
      {
        id: "fe-e-obras",
        title: "A Carta de Tiago: fé viva nas obras",
        emoji: "🤲",
        xp: 20,
        teachings: [
          {
            title: "Praticantes da Palavra, não só ouvintes",
            text: "São Tiago alerta que ouvir a Palavra sem colocá-la em prática é como olhar-se no espelho e esquecer logo o próprio rosto. A escuta verdadeira gera mudança concreta.",
            example: "Escolher um ensinamento da homilia de domingo para aplicar durante a semana.",
            source: "Tg 1,22-25 · CIC 161, 1815",
          },
          {
            title: "A fé sem obras é morta",
            text: "Não compramos a salvação por mérito próprio, mas a fé genuína recebida por graça sempre floresce no amor concreto ao próximo que passa frio ou fome.",
            example:
              "Acompanhar nossas orações por alguém com gestos reais de auxílio quando está ao nosso alcance.",
            source: "Tg 2,14-17 · CIC 1815, 2008",
          },
          {
            title: "Controlar a língua e semear a paz",
            text: "Tiago compara a língua a um pequeno leme capaz de orientar um grande navio: com ela podemos abençoar e consolar ou ferir. A sabedoria do alto é pacífica e misericordiosa.",
            example: "Evitar comentários irônicos ou maledicências nos grupos de conversa.",
            source: "Tg 3,1-18 · CIC 2477, 2503",
          },
        ],
        questions: [
          {
            prompt: "O que São Tiago afirma sobre a relação entre fé e obras?",
            options: [
              "Que as obras substituem a fé em Cristo",
              "Que a fé sem obras de caridade está morta em si mesma",
              "Que basta concordar com ideias sem ajudar ninguém",
              "Que só filósofos possuem fé",
            ],
            answer: 1,
            explanation:
              "A fé viva opera pela caridade; quando não se traduz em amor concreto, torna-se estéril (Tg 2,17; CIC 1815).",
          },
          {
            prompt: "Por que a Carta de Tiago dedica atenção ao uso da língua e das palavras?",
            options: [
              "Porque nossas palavras podem edificar na paz ou ferir profundamente",
              "Porque devemos fazer voto de silêncio total",
              "Porque falar em público é proibido",
              "Porque a língua não influencia a vida espiritual",
            ],
            answer: 0,
            explanation:
              "Cuidar das palavras protege a verdade, o respeito à fama do próximo e a paz fraterna (CIC 2477).",
          },
          {
            prompt:
              "Quem é comparado ao homem que se olha no espelho e logo se esquece de como era?",
            options: [
              "Quem pratica a misericórdia",
              "Quem apenas ouve a Palavra de Deus sem colocá-la em prática",
              "Quem reza o Salmo todos os dias",
              "Quem visita os doentes",
            ],
            answer: 1,
            explanation:
              "Tiago exorta a sermos cumpridores da Palavra, não meros ouvintes distraídos (Tg 1,22-24; CIC 1815).",
          },
        ],
      },
    ],
  },
  {
    id: "notas-da-igreja",
    title: "As Quatro Notas da Igreja",
    emoji: "🏛️",
    lessons: [
      {
        id: "igreja-una-santa",
        title: "Una e Santa: corpo de Cristo",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "A Igreja é Una",
            text: "Embora presente em culturas e línguas diversas, a Igreja é una por ter um só Senhor, uma só fé, um só Batismo e os laços visíveis da comunhão com os bispos e o Papa.",
            example:
              "Participar da Missa em outra cidade ou país e reconhecer ali a mesma fé e liturgia.",
            source: "Ef 4,3-6; Jo 17,21 · CIC 813-815",
          },
          {
            title: "A Igreja é Santa apesar das fraquezas humanas",
            text: "A Igreja é santa porque Cristo, seu Esposo e Cabeça, a santifica pelo Espírito e pelos sacramentos. Seus membros ainda são pecadores em caminho de conversão constante.",
            example:
              "Não escandalizar-se nem perder a fé diante das falhas humanas, mas buscar viver com mais fidelidade.",
            source: "Ef 5,25-27 · CIC 823-827",
          },
          {
            title: "Santidade vivida pelos santos",
            text: "Em todas as épocas, o Espírito Santo suscita homens e mulheres — conhecidos ou anônimos — que mostram o rosto luminoso do Evangelho.",
            example:
              "Ler a biografia curta de um santo deste mês para inspirar a própria caminhada.",
            source: "Hb 12,1 · CIC 828-829",
          },
        ],
        questions: [
          {
            prompt: "Por que professamos no Credo que a Igreja é 'Una'?",
            options: [
              "Porque todos falam o mesmo idioma civil",
              "Porque tem um só Senhor, uma só fé, um só Batismo e comunhão visível",
              "Porque existe apenas em um país",
              "Porque todos os fiéis têm o mesmo temperamento",
            ],
            answer: 1,
            explanation:
              "A unidade da Igreja nasce da Trindade e se expressa na profissão da mesma fé, nos sacramentos e no governo apostólico (CIC 813-815).",
          },
          {
            prompt: "Como a Igreja pode ser chamada 'Santa' se seus membros cometem pecados?",
            options: [
              "Porque ninguém na Igreja precisa de confissão",
              "Porque é santificada por Cristo e pelo Espírito, acolhendo pecadores para a conversão",
              "Porque a santidade é apenas um título histórico",
              "Porque erros morais deixam de ser erros",
            ],
            answer: 1,
            explanation:
              "A Igreja é santa em sua fonte divina e nos meios de graça, abraçando em seu seio pecadores chamados à santificação (CIC 823-827).",
          },
          {
            prompt: "Qual exemplo ajuda a enxergar a santidade viva da Igreja?",
            options: [
              "O testemunho dos santos canonizados e dos fiéis anônimos que amam com fidelidade",
              "A riqueza de prédios antigos apenas",
              "O poder político de reis do passado",
              "A ausência de provações",
            ],
            answer: 0,
            explanation:
              "Ao canonizar alguns fiéis, a Igreja reconhece o poder do Espírito de santidade presente nela em todos os tempos (CIC 828).",
          },
        ],
      },
      {
        id: "igreja-catolica-apostolica",
        title: "Católica e Apostólica: aberta a todos",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "A Igreja é Católica (universal)",
            text: "Católica significa 'universal'. A Igreja possui a plenitude dos meios de salvação dados por Cristo e é enviada a todas as nações, culturas e condições humanas.",
            example:
              "Acolher com alegria pessoas novas que chegam à paróquia vindas de outras cidades ou realidades.",
            source: "Mt 28,19 · CIC 830-835",
          },
          {
            title: "A Igreja é Apostólica",
            text: "Foi fundada sobre o alicerce dos Apóstolos, guarda e transmite fielmente o ensinamento recebido deles e continua guiada por seus sucessores, os bispos em comunhão com o Papa.",
            example:
              "Conhecer o nome do bispo da própria diocese e rezar por seu ministério nas orações.",
            source: "Ef 2,20 · CIC 857-862",
          },
          {
            title: "Todo batizado participa da missão",
            text: "Ser católico e apostólico também implica missão: cada fiel é enviado a anunciar a paz e a esperança de Jesus no mundo em que vive.",
            example:
              "Convidar um amigo afastado para participar de um encontro ou Missa acolhedora.",
            source: "At 1,8 · CIC 863",
          },
        ],
        questions: [
          {
            prompt: "O que significa a palavra 'Católica' aplicada à Igreja?",
            options: [
              "Secreta e fechada",
              "Universal, segundo a totalidade e enviada a todos os povos",
              "Exclusiva de um continente",
              "Separada dos Apóstolos",
            ],
            answer: 1,
            explanation:
              "Católica significa universal porque Cristo está presente nela e a envia em missão a todo o gênero humano (CIC 830-831).",
          },
          {
            prompt: "Em que sentido a Igreja é 'Apostólica'?",
            options: [
              "Porque permanece edificada sobre os Apóstolos, sua fé e seus sucessores",
              "Porque todos os fiéis nasceram em Jerusalém",
              "Porque rejeita qualquer desenvolvimento histórico",
              "Porque só padres podem rezar o Terço",
            ],
            answer: 0,
            explanation:
              "A Igreja é apostólica na origem, no depósito da fé guardado e na sucessão dos bispos com o Papa (CIC 857).",
          },
          {
            prompt: "A missão apostólica diz respeito somente aos padres e bispos?",
            options: [
              "Sim, leigos apenas assistem",
              "Não, toda a Igreja — incluindo todos os batizados — participa da missão",
              "Sim, até o século vinte",
              "Apenas aos missionários de outros países",
            ],
            answer: 1,
            explanation:
              "Toda a Igreja é apostólica porque todo membro participa, segundo sua vocação, do envio de Cristo ao mundo (CIC 863).",
          },
        ],
      },
      {
        id: "comunhao-santos",
        title: "A Comunhão dos Santos e o Purgatório",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Uma só família entre céu, terra e purificação",
            text: "A Comunhão dos Santos une os fiéis peregrinos na terra, os bem-aventurados no céu e os fiéis falecidos que passam pela purificação final. Em Cristo, a morte não quebra a caridade.",
            example:
              "Rezar pelos parentes e amigos falecidos especialmente nas intenções da Santa Missa.",
            source: "Hb 12,22-24 · CIC 946-958",
          },
          {
            title: "O Purgatório: purificação pela misericórdia",
            text: "Quem morre na graça de Deus, mas ainda precisa de purificação interior das marcas do pecado, passa pelo Purgatório antes de entrar na alegria plena do céu.",
            example:
              "Oferecer orações e pequenas obras de caridade em sufrágio das almas do Purgatório.",
            source: "2Mc 12,46; 1Cor 3,15 · CIC 1030-1032",
          },
          {
            title: "A intercessão dos santos no céu",
            text: "Os santos junto de Deus continuam cuidando de nós com amor fraterno. Pedir sua intercessão não diminui a mediação de Jesus, mas exprime a união da família de Deus.",
            example:
              "Confiar uma intenção importante à oração de Nossa Senhora e do santo padroeiro de sua paróquia.",
            source: "Ap 5,8; 8,3 · CIC 956, 2683",
          },
        ],
        questions: [
          {
            prompt: "Quem faz parte da Comunhão dos Santos?",
            options: [
              "Apenas os santos canonizados no céu",
              "Os fiéis na terra, as almas em purificação e os bem-aventurados no céu",
              "Somente os monges antigos",
              "Apenas os vivos desta geração",
            ],
            answer: 1,
            explanation:
              "A Comunhão dos Santos abrange toda a Igreja em seus três estados: peregrina na terra, em purificação e gloriosa no céu (CIC 954).",
          },
          {
            prompt: "O que a Igreja ensina sobre o Purgatório?",
            options: [
              "É uma segunda chance para quem rejeitou Deus definitivamente",
              "É a purificação final dos que morrem na graça de Deus para alcançar a santidade do céu",
              "É o mesmo que o inferno eterno",
              "É proibido rezar por quem morreu",
            ],
            answer: 1,
            explanation:
              "Os que morrem na amizade de Deus, mas ainda imperfeitamente purificados, passam pela purificação do Purgatório (CIC 1030-1031).",
          },
          {
            prompt: "Como os cristãos na terra ajudam os falecidos segundo a tradição católica?",
            options: [
              "Por meio da oração, da oferta da Eucaristia, de esmolas e penitência",
              "Com rituais de superstição",
              "Esquecendo seus nomes",
              "Tentando consultá-los por adivinhação",
            ],
            answer: 0,
            explanation:
              "Desde os primeiros tempos, a Igreja honra a memória dos mortos e oferece sufrágios, especialmente a Missa (CIC 1032).",
          },
        ],
      },
    ],
  },
  {
    id: "profissao-de-fe",
    title: "Aprofundando o Credo",
    emoji: "🛡️",
    lessons: [
      {
        id: "deus-pai-providencia",
        title: "Deus Pai Todo-Poderoso e a Providência",
        emoji: "☀️",
        xp: 20,
        teachings: [
          {
            title: "Onipotência unida à paternidade amorosa",
            text: "Cremos em Deus Pai Todo-Poderoso: seu poder não é arbitrário nem violento, mas o poder do amor criador e misericordioso, que tudo criou do nada e sustenta a vida.",
            example:
              "Ao rezar o Credo, lembrar que quem governa o universo é Pai amoroso, não um destino cego.",
            source: "Sl 115,3; Mc 14,36 · CIC 268-278",
          },
          {
            title: "Deus é Verdade e Amor",
            text: "Ao revelar seu nome a Moisés como 'Eu Sou', Deus mostra que é eterno e fiel. São João resume todo o mistério: Deus é luz, verdade e amor gratuito.",
            example:
              "Buscar a verdade nas palavras e escolhas, sabendo que a falsidade afasta do coração de Deus.",
            source: "Ex 3,14; 1Jo 4,8 · CIC 206, 214-221",
          },
          {
            title: "Colaborar livremente com a Providência",
            text: "Deus é o Senhor soberano da história, mas respeita a nossa liberdade e convida o ser humano a ser seu colaborador no cuidado das pessoas e da criação.",
            example:
              "Rezar pedindo luz e, ao mesmo tempo, agir com responsabilidade concreta pelos problemas ao redor.",
            source: "1Cor 3,9 · CIC 306-308",
          },
        ],
        questions: [
          {
            prompt: "Como se manifesta sobretudo a onipotência de Deus segundo o Catecismo?",
            options: [
              "Na destruição imediata de quem duvida",
              "No poder amoroso de criar, perdoar e usar de misericórdia",
              "No silêncio indiferente ao sofrimento",
              "Na anulação da liberdade humana",
            ],
            answer: 1,
            explanation:
              "A onipotência paterna de Deus manifesta-se especialmente na criação e na misericórdia que perdoa e salva (CIC 270, 277).",
          },
          {
            prompt: "A Providência divina elimina a liberdade e a responsabilidade humanas?",
            options: [
              "Sim, somos apenas marionetes",
              "Não, Deus associa livremente suas criaturas às ações de sua Providência",
              "Sim, por isso não vale a pena planejar o bem",
              "Apenas em assuntos religiosos",
            ],
            answer: 1,
            explanation:
              "Deus age através das causas criadas e concede aos seres humanos a dignidade de cooperar livremente com seu plano (CIC 306-308).",
          },
          {
            prompt: "Qual é a afirmação central de 1 João 4,8 sobre a natureza de Deus?",
            options: [
              "Deus é vingança",
              "Deus é apenas uma ideia distante",
              "Deus é Amor",
              "Deus é igual à natureza física",
            ],
            answer: 2,
            explanation:
              "O ser íntimo de Deus é Amor eterno entre Pai, Filho e Espírito Santo (1Jo 4,8; CIC 221).",
          },
        ],
      },
      {
        id: "verdadeiro-deus-homem",
        title: "Cristo: verdadeiro Deus e verdadeiro homem",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Uma só Pessoa em duas naturezas",
            text: "Jesus Cristo é uma única Pessoa divina — o Filho eterno do Pai — que possui plenamente duas naturezas: a natureza divina e a natureza humana, sem confusão nem separação.",
            example:
              "Aproximar-se de Jesus sabendo que Ele compreende nossas dores humanas e tem poder divino para salvar.",
            source: "Jo 1,1.14; Fl 2,6-11 · CIC 464-469",
          },
          {
            title: "Verdadeiro homem como nós, exceto no pecado",
            text: "Jesus sentiu fome, cansaço, amizade, tristeza e dor física. Ele amou com um coração verdadeiramente humano, santificando tudo o que há de autêntico em nossa humanidade.",
            example:
              "Apresentar a Jesus até nossas emoções humanas — alegria, cansaço ou medo — com simplicidade.",
            source: "Hb 4,15 · CIC 470-478",
          },
          {
            title: "O significado dos títulos Cristo e Senhor",
            text: "'Jesus' significa Deus salva; 'Cristo' quer dizer Ungido (Messias); e 'Senhor' reconhece sua soberania divina sobre o cosmos e a história.",
            example:
              "Pronunciar o santo nome de Jesus com respeito e confiança em momentos de aflição.",
            source: "At 2,36 · CIC 430-451",
          },
        ],
        questions: [
          {
            prompt: "O que definiu a Igreja sobre as naturezas de Jesus Cristo?",
            options: [
              "Que Ele era metade Deus e metade anjo",
              "Que é verdadeiro Deus e verdadeiro homem, na unidade de sua Pessoa divina",
              "Que possuía duas pessoas separadas",
              "Que seu corpo humano era apenas aparência",
            ],
            answer: 1,
            explanation:
              "O Concílio de Calcedônia professou um só e mesmo Cristo em duas naturezas, divina e humana, sem confusão nem divisão (CIC 467).",
          },
          {
            prompt: "O que significa literalmente o nome 'Jesus'?",
            options: ["Rei guerreiro", "Deus salva", "Sacerdote do deserto", "Estrela da manhã"],
            answer: 1,
            explanation:
              "Jesus (Yeshua) significa 'Deus salva', revelando desde o nome sua identidade e missão salvadora (CIC 430).",
          },
          {
            prompt: "Em que Jesus é igual a nós e em que é diferente quanto à condição humana?",
            options: [
              "É semelhante em tudo, exceto no pecado",
              "Nunca sentiu cansaço ou tristeza",
              "Não tinha alma humana",
              "Não nasceu verdadeiramente de Maria",
            ],
            answer: 0,
            explanation:
              "Como ensina Hebreus 4,15, Jesus foi provado em tudo à nossa semelhança, sem cometer pecado (CIC 467, 470).",
          },
        ],
      },
      {
        id: "descida-ascensao",
        title: "Descida à mansão dos mortos e Ascensão",
        emoji: "☁️",
        xp: 20,
        teachings: [
          {
            title: "Anúncio da salvação aos justos que morreram antes",
            text: "Ao professar que Cristo 'desceu à mansão dos mortos', a Igreja ensina que Jesus morreu de verdade e levou a salvação aos justos que aguardavam o Redentor desde o Antigo Testamento.",
            example:
              "Lembrar no Sábado Santo o silêncio fecundo em que Cristo abre as portas do céu aos antigos justos.",
            source: "1Pd 3,18-19; 4,6 · CIC 632-637",
          },
          {
            title: "A Ascensão: nossa humanidade levada ao céu",
            text: "Quarenta dias após a Ressurreição, Jesus subiu ao céu em glória, sentando-se à direita do Pai. Com Ele, nossa humanidade já tem lugar junto de Deus.",
            example:
              "Elevar o coração ao céu no meio das lutas diárias, lembrando nosso destino definitivo.",
            source: "At 1,9-11; Ef 1,20 · CIC 659-667",
          },
          {
            title: "Cristo intercede por nós e envia o Espírito",
            text: "Mesmo glorificado no céu, Jesus não nos abandonou: permanece presente na Igreja pelos sacramentos, intercede por nós junto do Pai e derrama o Espírito Santo.",
            example:
              "Concluir nossas orações 'por Cristo, nosso Senhor', confiando em sua intercessão constante.",
            source: "Hb 7,25; Rm 8,34 · CIC 662, 667",
          },
        ],
        questions: [
          {
            prompt: "O que significa no Credo que Jesus 'desceu à mansão dos mortos'?",
            options: [
              "Que Jesus foi condenado eternamente",
              "Que Jesus morreu realmente e anunciou a libertação aos justos que o aguardavam",
              "Que não houve Ressurreição",
              "Que o inferno deixou de existir para todos",
            ],
            answer: 1,
            explanation:
              "Cristo conheceu a morte humana e desceu à morada dos mortos para abrir as portas do céu aos justos anteriores (CIC 632-637).",
          },
          {
            prompt: "O que celebramos na Ascensão do Senhor?",
            options: [
              "A entrada definitiva da humanidade de Jesus na glória celeste do Pai",
              "O abandono definitivo da Igreja por Cristo",
              "O nascimento em Belém",
              "O batismo no rio Jordão",
            ],
            answer: 0,
            explanation:
              "Na Ascensão, Cristo Cabeça entra na glória do Pai, dando-nos a esperança de que os membros o seguirão (CIC 659-666).",
          },
          {
            prompt: "O que Cristo faz continuamente por nós à direita do Pai?",
            options: [
              "Esquece nossas lutas terrestres",
              "Intercede sem cessar como nosso sumo sacerdote e mediador",
              "Espera sem agir até o fim do universo",
              "Delega tudo apenas aos anjos",
            ],
            answer: 1,
            explanation:
              "No santuário do céu, Cristo exerce eternamente seu sacerdócio intercedendo por nós junto ao Pai (Hb 7,25; CIC 662, 667).",
          },
        ],
      },
    ],
  },
  {
    id: "santa-missa-detalhe",
    title: "Partes da Santa Missa",
    emoji: "🕯️",
    lessons: [
      {
        id: "ritos-iniciais-palavra",
        title: "Ritos iniciais e Liturgia da Palavra",
        emoji: "📖",
        xp: 20,
        teachings: [
          {
            title: "Reunir o povo e pedir misericórdia",
            text: "Os ritos iniciais nos acolhem como comunidade em nome da Trindade. No Ato Penitencial reconhecemos com humildade nossas faltas para celebrar o mistério santo de coração limpo.",
            example:
              "Chegar alguns minutos antes da Missa para silenciar e preparar o coração antes do canto de entrada.",
            source: "Mt 18,20 · CIC 1348",
          },
          {
            title: "Deus fala ao seu povo na Palavra",
            text: "Na Liturgia da Palavra escutamos leituras da Escritura, cantamos o Salmo, aclamamos o Evangelho e acolhemos a homilia, que ilumina nossa vida com o ensinamento de Cristo.",
            example:
              "Escutar o Evangelho em pé com atenção e guardar uma frase para meditar durante a semana.",
            source: "Lc 24,27 · CIC 1154, 1349",
          },
          {
            title: "Responder com o Credo e as Preces",
            text: "Após a homilia, professamos juntos a fé no Credo e apresentamos na Oração dos Fiéis as necessidades da Igreja, dos governantes, dos aflitos e da comunidade.",
            example:
              "Incluir na Oração dos Fiéis intenções silenciosas por amigos doentes ou em dificuldade.",
            source: "1Tm 2,1-2 · CIC 1349",
          },
        ],
        questions: [
          {
            prompt: "Qual é a finalidade dos Ritos Iniciais na Santa Missa?",
            options: [
              "Substituir o sacramento da Confissão em casos graves",
              "Reunir os fiéis em comunidade e dispor o coração pela súplica de misericórdia",
              "Encerrar a celebração rapidamente",
              "Ler o jornal da semana",
            ],
            answer: 1,
            explanation:
              "Os ritos iniciais formam a assembleia em Cristo e a preparam para ouvir a Palavra e celebrar a Eucaristia (CIC 1348).",
          },
          {
            prompt: "Quem fala principalmente à Igreja durante as leituras da Liturgia da Palavra?",
            options: [
              "O próprio Cristo, presente em sua Palavra proclamada",
              "Apenas um comentarista histórico",
              "Os autores civis da antiguidade",
              "Somente o leitor da comunidade",
            ],
            answer: 0,
            explanation:
              "Na liturgia, é o próprio Cristo quem fala quando as Sagradas Escrituras são proclamadas na assembleia (CIC 1088, 1349).",
          },
          {
            prompt: "Por que nos colocamos de pé para ouvir a proclamação do Evangelho?",
            options: [
              "Por cansaço de ficar sentado",
              "Em sinal de reverência especial a Cristo que nos fala no Evangelho",
              "Porque o Evangelho é lido fora da igreja",
              "Apenas por hábito sem motivo",
            ],
            answer: 1,
            explanation:
              "A aclamação e a postura de pé expressam veneração a Cristo presente na proclamação evangélica (CIC 1154, 1349).",
          },
        ],
      },
      {
        id: "ofertorio-consagracao",
        title: "Ofertório e Oração Eucarística",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Apresentar o pão, o vinho e a própria vida",
            text: "Na preparação das oferendas levamos ao altar o pão e o vinho — frutos da terra e do trabalho humano — unindo a eles nossas alegrias, lutas e doações para os necessitados.",
            example:
              "No momento do ofertório, oferecer mentalmente a Deus um trabalho difícil ou preocupação da semana.",
            source: "Rm 12,1 · CIC 1350-1351",
          },
          {
            title: "Ação de graças e invocação do Espírito",
            text: "A Oração Eucarística inicia com o Prefácio e o 'Santo'. Na epiclese, o sacerdote pede ao Pai que envie o Espírito Santo para transformar o pão e o vinho no Corpo e Sangue de Cristo.",
            example:
              "Unir-se de coração ao sacerdote durante o Prefácio respondendo com fé 'Demos graças ao Senhor!'.",
            source: "1Cor 11,23-26 · CIC 1352-1353",
          },
          {
            title: "Memorial vivo do sacrifício de Cristo",
            text: "Na narrativa da instituição, pelas palavras de Cristo e ação do Espírito, realiza-se a transubstanciação: Cristo torna presente seu único sacrifício redentor da Cruz.",
            example: "Adorar em silêncio e reverência na elevação da Hóstia e do Cálice sagrados.",
            source: "Lc 22,19-20 · CIC 1353-1354, 1376",
          },
        ],
        questions: [
          {
            prompt: "O que significam o pão e o vinho levados ao altar no Ofertório?",
            options: [
              "Apenas um lanche para o fim da Missa",
              "Os dons da criação e do trabalho humano unidos à oferta da nossa vida",
              "Um pagamento obrigatório para entrar na igreja",
              "Símbolos que substituem a Cruz",
            ],
            answer: 1,
            explanation:
              "Na apresentação das oferendas, a criação e a vida dos fiéis são postas nas mãos de Cristo para serem transformadas (CIC 1350-1351).",
          },
          {
            prompt:
              "O que acontece na Consagração pela ação do Espírito Santo e pelas palavras de Cristo?",
            options: [
              "O pão e o vinho tornam-se realmente o Corpo e o Sangue de Cristo",
              "Faz-se apenas uma representação teatral do passado",
              "Jesus morre novamente de modo físico",
              "Somente uma bênção comum sobre alimentos",
            ],
            answer: 0,
            explanation:
              "Pela transubstanciação, toda a substância do pão e do vinho converte-se no Corpo e Sangue de Cristo (CIC 1353, 1376).",
          },
          {
            prompt:
              "Qual é o ponto culminante da Oração Eucarística quando dizemos o grande 'Amém'?",
            options: [
              "O canto inicial",
              "A doxologia final ('Por Cristo, com Cristo e em Cristo...')",
              "A coleta financeira",
              "Os avisos paroquiais",
            ],
            answer: 1,
            explanation:
              "Na doxologia final elevamos toda glória ao Pai por Cristo no Espírito, e a assembleia ratifica com o 'Amém' (CIC 1354).",
          },
        ],
      },
      {
        id: "comunhao-envio",
        title: "Rito da Comunhão e envio em missão",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Pai-Nosso e saudação da paz",
            text: "Antes de comungar, rezamos juntos o Pai-Nosso pedindo o pão de cada dia e o perdão, e trocamos o sinal de paz, expressando a reconciliação fraterna.",
            example:
              "Dar a paz com sinceridade a quem está próximo, lembrando que somos irmãos em Cristo.",
            source: "Mt 5,23-24; 6,9-13 · CIC 1355",
          },
          {
            title: "Comungar em estado de graça",
            text: "Respondemos 'Amém' ao ouvir 'O Corpo de Cristo'. Para comungar bem, a Igreja pede fé na presença real, estado de graça (sem pecado mortal não confessado) e jejum eucarístico de uma hora.",
            example:
              "Se houver consciência de pecado grave, buscar primeiro a Confissão antes de comungar.",
            source: "1Cor 11,27-29 · CIC 1385-1387",
          },
          {
            title: "Ide em paz: a Missa continua na vida",
            text: "Após um momento de ação de graças e a bênção final, o envio lembra que levamos Cristo recebido no altar para nossa família, trabalho e missão diária.",
            example:
              "Permanecer alguns instantes rezando após a bênção para agradecer a presença de Jesus.",
            source: "Mt 28,19-20 · CIC 1332, 1397",
          },
        ],
        questions: [
          {
            prompt: "O que é necessário para receber a Sagrada Comunhão com fruto?",
            options: [
              "Ter mais de trinta anos",
              "Estar em estado de graça, em comunhão com a Igreja e guardar o jejum eucarístico",
              "Nunca ter cometido pecados veniais na vida",
              "Ter lido todos os livros de teologia",
            ],
            answer: 1,
            explanation:
              "Quem tem consciência de pecado grave deve receber a Reconciliação antes da Comunhão, além de guardar o jejum previsto (CIC 1385-1387).",
          },
          {
            prompt: "O que significa responder 'Amém' na hora da Comunhão?",
            options: [
              "Apenas obrigado",
              "Eu creio e acolho que este é verdadeiramente o Corpo de Cristo",
              "Que a celebração terminou",
              "Que já almoçamos",
            ],
            answer: 1,
            explanation:
              "O 'Amém' na comunhão é uma profissão pessoal de fé na presença real de Cristo na Hóstia consagrada (CIC 1374, 2856).",
          },
          {
            prompt: "De onde vem a própria palavra 'Missa' no rito de despedida?",
            options: [
              "Do envio (missio) dos fiéis para viver e anunciar o Evangelho no mundo",
              "De uma antiga dança romana",
              "Do silêncio completo da saída",
              "Do nome de um profeta",
            ],
            answer: 0,
            explanation:
              "Missa provém de 'missio' (envio): fortalecidos pelo mistério pascal, os fiéis são enviados em missão cotidiana (CIC 1332).",
          },
        ],
      },
    ],
  },
  {
    id: "tempos-liturgicos",
    title: "O Ciclo do Ano Litúrgico",
    emoji: "📅",
    lessons: [
      {
        id: "advento-natal",
        title: "Advento e Natal: vigilância e alegria",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Advento: espera atenta em duas direções",
            text: "Durante quatro semanas antes do Natal, o Advento reaviva a espera da vinda gloriosa de Cristo no fim dos tempos e prepara a celebração do seu nascimento em Belém.",
            example:
              "Acender a coroa do Advento em família rezando uma prece simples a cada semana.",
            source: "Is 40,3-5; Lc 21,28 · CIC 524",
          },
          {
            title: "Roxo da vigilância e rosa da alegria",
            text: "A cor roxa do Advento convida à sobriedade e conversão; no terceiro domingo (Gaudete), o róseo anuncia que a alegria do Senhor está muito próxima.",
            example:
              "Fazer uma boa Confissão durante o Advento para preparar a casa interior para o Natal.",
            source: "Fl 4,4-5 · CIC 524, 1168",
          },
          {
            title: "O Tempo do Natal e a Epifania",
            text: "O Tempo do Natal prolonga-se da Noite Santa até a festa do Batismo do Senhor, contemplando o Verbo encarnado, a Sagrada Família, Maria Mãe de Deus e a manifestação aos magos.",
            example:
              "Manter o presépio montado até o fim do Tempo do Natal para recordar o sentido cristão da festa.",
            source: "Mt 2,1-12; Tt 2,11 · CIC 525-528",
          },
        ],
        questions: [
          {
            prompt: "Que dupla vinda de Cristo o Tempo do Advento nos faz esperar?",
            options: [
              "Apenas o passado histórico",
              "A vinda gloriosa no fim dos tempos e a celebração de seu nascimento no Natal",
              "Somente o início do verão",
              "A reconstrução de Jerusalém antiga",
            ],
            answer: 1,
            explanation:
              "O Advento atualiza a expectativa messiânica ligando a memória de Belém à esperança da vinda gloriosa de Cristo (CIC 524).",
          },
          {
            prompt: "O que celebra a Solenidade da Epifania do Senhor?",
            options: [
              "A manifestação de Jesus como Salvador de todas as nações, representada pelos magos",
              "A entrada de Jesus em Jerusalém no Domingo de Ramos",
              "A descida do Espírito em Pentecostes",
              "A ascensão ao céu",
            ],
            answer: 0,
            explanation:
              "Na Epifania celebramos a manifestação do Messias de Israel às nações pagãs na pessoa dos magos (CIC 528).",
          },
          {
            prompt: "Quando se encerra liturgicamente o Tempo do Natal?",
            options: [
              "Na manhã do dia 25 de dezembro",
              "Na festa do Batismo do Senhor",
              "Na Quarta-feira de Cinzas",
              "No domingo de Pentecostes",
            ],
            answer: 1,
            explanation:
              "O ciclo natalino estende-se da Vigília de Natal até a celebração do Batismo do Senhor no Jordão (CIC 525, 535).",
          },
        ],
      },
      {
        id: "quaresma-triduo",
        title: "Quaresma e Tríduo Pascal: coração da fé",
        emoji: "✝️",
        xp: 20,
        teachings: [
          {
            title: "Quaresma: quarenta dias de conversão",
            text: "Iniciada na Quarta-feira de Cinzas, a Quaresma é tempo de conversão interior, oração mais intensa, jejum e esmola, preparando a renovação das promessas batismais na Páscoa.",
            example:
              "Definir um propósito concreto quaresmal nas três frentes: rezar, jejuar e partilhar.",
            source: "Jl 2,12-13 · CIC 540, 1438",
          },
          {
            title: "Tríduo Pascal: centro de todo o ano",
            text: "Da Missa da Ceia do Senhor na Quinta-feira Santa até as Vésperas do Domingo da Páscoa, a Igreja celebra um único mistério em três atos: Ceia, Paixão e Ressurreição.",
            example:
              "Organizar a agenda para participar presencialmente das celebrações da Quinta, Sexta e Sábado Santo.",
            source: "1Cor 5,7-8 · CIC 1168",
          },
          {
            title: "A Vigília Pascal: mãe de todas as vigílias",
            text: "Na noite do Sábado Santo, o círio aceso simboliza Cristo Luz, proclamamos a história da salvação, abençoamos a água batismal e celebramos a vitória da vida.",
            example:
              "Renovar com consciência as promessas do próprio Batismo durante a Vigília Pascal.",
            source: "Rm 6,3-11 · CIC 1169, 1217",
          },
        ],
        questions: [
          {
            prompt: "Qual é o ponto central e mais importante de todo o Ano Litúrgico?",
            options: [
              "O Tríduo Pascal da Paixão, Morte e Ressurreição de Cristo",
              "A primeira semana de agosto",
              "Apenas o domingo antes do Advento",
              "O início do Tempo Comum",
            ],
            answer: 0,
            explanation:
              "Como o domingo é o centro da semana, a Páscoa e o Tríduo Pascal são o coração de todo o ano litúrgico (CIC 1168-1169).",
          },
          {
            prompt: "Quais são os três exercícios clássicos da Quaresma?",
            options: [
              "Viajar, descansar e festejar",
              "Oração, jejum e esmola",
              "Debate, silêncio absoluto e isolamento",
              "Apenas trocar as cores das flores",
            ],
            answer: 1,
            explanation:
              "O jejum, a oração e a esmola exprimem a conversão em relação a si mesmo, a Deus e aos outros (CIC 1434, 1438).",
          },
          {
            prompt: "O que simboliza o Círio Pascal aceso na Vigília Pascal?",
            options: [
              "Apenas decoração histórica",
              "Cristo ressuscitado, luz do mundo que vence as trevas",
              "O fim dos sacramentos",
              "A antiga lei do templo",
            ],
            answer: 1,
            explanation:
              "A luz do Círio Pascal proclama Cristo ressuscitado que ilumina a Igreja e a humanidade inteira (CIC 1169, 1217).",
          },
        ],
      },
      {
        id: "tempo-comum-solenidades",
        title: "Páscoa, Pentecostes e Tempo Comum",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "Cinquenta dias de alegria pascal até Pentecostes",
            text: "Do Domingo da Ressurreição até Pentecostes vivemos cinquenta dias como um grande domingo, culminando na efusão do Espírito Santo sobre a Igreja.",
            example:
              "Rezar o hino 'Vinde, Espírito Santo' pedindo discernimento e coragem na semana de Pentecostes.",
            source: "At 2,1-11 · CIC 731, 1169",
          },
          {
            title: "O verde da esperança no Tempo Comum",
            text: "Nas 33 ou 34 semanas do Tempo Comum não celebramos um aspecto isolado do mistério de Cristo, mas acompanhamos seus ensinamentos, milagres e o crescimento diário da fé.",
            example:
              "Manter constância na oração diária também fora das grandes festas, quando a rotina parece comum.",
            source: "Lc 9,23 · CIC 1163, 1171",
          },
          {
            title: "Cristo Rei do Universo encerra o ano",
            text: "No último domingo do Tempo Comum celebramos Cristo Rei, lembrando que a história caminha rumo ao seu Reino de verdade, justiça, amor e paz.",
            example:
              "Examinar ao fim do ano litúrgico se Cristo reina de fato nas nossas decisões.",
            source: "Jo 18,36-37 · CIC 668, 1163",
          },
        ],
        questions: [
          {
            prompt: "Quantos dias dura o Tempo Pascal até a Solenidade de Pentecostes?",
            options: ["Sete dias", "Vinte e um dias", "Cinquenta dias", "Noventa dias"],
            answer: 2,
            explanation:
              "Os cinquenta dias entre o Domingo da Ressurreição e Pentecostes são celebrados na alegria como um só dia festivo (CIC 731, 1169).",
          },
          {
            prompt: "O que significa a cor verde usada frequentemente no Tempo Comum?",
            options: [
              "Falta de tema litúrgico",
              "Esperança, vida que cresce e perseverança cotidiana no seguimento de Cristo",
              "Luto pelos pecados",
              "Proibição de cantar o Glória",
            ],
            answer: 1,
            explanation:
              "O Tempo Comum acompanha o crescimento orgânico dos discípulos na escuta contínua do Evangelho (CIC 1163, 1171).",
          },
          {
            prompt: "Qual solenidade encerra o Ano Litúrgico antes de recomeçar o Advento?",
            options: [
              "Quinta-feira Santa",
              "Nosso Senhor Jesus Cristo, Rei do Universo",
              "Quarta-feira de Cinzas",
              "Epifania do Senhor",
            ],
            answer: 1,
            explanation:
              "A Solenidade de Cristo Rei do Universo fecha o ano litúrgico proclamando a soberania do seu Reino eterno (CIC 668, 1163).",
          },
        ],
      },
    ],
  },
  {
    id: "virtudes-cardeais",
    title: "As Quatro Virtudes Cardeais",
    emoji: "⚖️",
    lessons: [
      {
        id: "prudencia-justica",
        title: "Prudência e Justiça: discernir e dar o que é devido",
        emoji: "🧭",
        xp: 20,
        teachings: [
          {
            title: "Prudência: escolher o bem real pelos meios corretos",
            text: "A prudência não é covardia nem indecisão: é a virtude que orienta a razão prática a reconhecer o nosso verdadeiro bem em cada situação e escolher os meios certos para realizá-lo.",
            example:
              "Pedir conselho sábio e pensar nas consequências antes de assumir uma dívida ou tomar decisão grave.",
            source: "Pr 14,15; Sb 8,7 · CIC 1805-1806",
          },
          {
            title: "Justiça: dar a Deus e ao próximo o que lhes é devido",
            text: "A justiça consiste na vontade firme e constante de dar a Deus a adoração devida (religião) e ao próximo o respeito aos seus direitos, à dignidade e aos compromissos assumidos.",
            example:
              "Pagar o combinado no prazo, devolver o que foi emprestado e defender quem sofre injustiça.",
            source: "Lv 19,15; Cl 4,1 · CIC 1807",
          },
          {
            title: "Prudência e justiça iluminadas pela caridade",
            text: "Mesmo virtudes humanas crescem com o esforço repetido, mas a graça de Deus as purifica e as eleva para que sirvam ao amor cristão.",
            example: "Unir a firmeza justa à mansidão, evitando a rigidez fria ao corrigir alguém.",
            source: "Fl 4,8 · CIC 1810-1811",
          },
        ],
        questions: [
          {
            prompt: "O que define a virtude cardeal da Prudência segundo o Catecismo?",
            options: [
              "Evitar tomar qualquer decisão na vida",
              "Dispor a razão prática a discernir o bem verdadeiro e escolher os meios justos",
              "Falar sempre pouco em público",
              "Pensar somente em segurança financeira",
            ],
            answer: 1,
            explanation:
              "A prudência é a 'auriga das virtudes': guia o juízo prático para agir conforme o verdadeiro bem (CIC 1806).",
          },
          {
            prompt: "Como o Catecismo define a virtude da Justiça?",
            options: [
              "Vontade constante e firme de dar a Deus e ao próximo o que lhes é devido",
              "Devolver o mal na mesma medida",
              "Exigir direitos sem cumprir deveres",
              "Apenas aplicar multas legais",
            ],
            answer: 0,
            explanation:
              "A justiça orienta nossas relações com Deus e com o próximo respeitando direitos, deveres e dignidade (CIC 1807).",
          },
          {
            prompt: "Por que Prudência, Justiça, Fortaleza e Temperança são chamadas 'cardeais'?",
            options: [
              "Porque são exclusivas de cardeais do Vaticano",
              "Porque funcionam como eixos em torno dos quais giram as demais virtudes morais",
              "Porque substituem as virtudes teologais",
              "Porque não exigem prática",
            ],
            answer: 1,
            explanation:
              "Do latim 'cardo' (dobradiça/eixo), as quatro virtudes cardeais sustentam e agrupam toda a vida moral humana (CIC 1805).",
          },
        ],
      },
      {
        id: "fortaleza-temperanca",
        title: "Fortaleza e Temperança: firmeza e equilíbrio",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Fortaleza: firmeza nas dificuldades",
            text: "A fortaleza dá firmeza nas provações e constância na busca do bem. Ela ajuda a vencer o medo da opinião alheia, a suportar sacrifícios e a defender causas justas.",
            example:
              "Manter princípios honestos mesmo quando um grupo pressiona para fazer algo errado.",
            source: "Sl 118,14; Jo 16,33 · CIC 1808",
          },
          {
            title: "Temperança: liberdade diante dos prazeres",
            text: "A temperança modera a atração dos prazeres e traz equilíbrio no uso dos bens criados. Ela assegura o domínio da vontade sobre os impulsos, mantendo os desejos saudáveis.",
            example:
              "Desligar o celular na hora combinada para dormir bem, rezar e conviver com a família.",
            source: "Tt 2,12; 1Cor 9,25 · CIC 1809",
          },
          {
            title: "Pequenos hábitos constroem grandes virtudes",
            text: "Virtude é uma disposição habitual e firme para fazer o bem. Ninguém nasce com domínio total de si: crescemos pela constância diária unida à graça de Deus.",
            example:
              "Treinar pequenos atos de domínio próprio na alimentação ou no uso do tempo livre.",
            source: "Fl 4,13 · CIC 1803, 1810",
          },
        ],
        activities: [
          {
            type: "match",
            title: "As quatro virtudes cardeais em ação",
            instruction: "Ligue cada virtude cardeal à atitude que melhor a traduz no cotidiano.",
            pairs: [
              { id: "vc1", left: "Prudência", right: "Discernir os meios certos antes de agir" },
              { id: "vc2", left: "Justiça", right: "Dar a cada pessoa e a Deus o que é devido" },
              { id: "vc3", left: "Fortaleza", right: "Perseverar no bem mesmo diante do medo" },
              {
                id: "vc4",
                left: "Temperança",
                right: "Usar os prazeres e bens com equilíbrio livre",
              },
            ],
            explanation:
              "As quatro virtudes cardeais formam o caráter cristão para pensar com clareza, agir com retidão, resistir nas provas e viver com sobriedade (CIC 1805-1809).",
            source: "Sb 8,7 · CIC 1805-1809",
          },
        ],
        questions: [
          {
            prompt: "O que realiza a virtude da Fortaleza na vida cristã?",
            options: [
              "Incentiva brigas desnecessárias",
              "Assegura firmeza nas dificuldades e constância na prática do bem",
              "Elimina toda sensação de medo físico",
              "Dispensa a prudência",
            ],
            answer: 1,
            explanation:
              "A fortaleza torna o cristão firme na provação e corajoso para não ceder à pressão do mal (CIC 1808).",
          },
          {
            prompt: "Qual é o objetivo da Temperança?",
            options: [
              "Proibir qualquer alegria ou lazer legítimo",
              "Garantir equilíbrio e domínio da vontade no uso dos bens e prazeres",
              "Tornar a pessoa triste e severa",
              "Substituir a esperança",
            ],
            answer: 1,
            explanation:
              "A temperança modera os desejos para que o ser humano seja livre e não escravo dos impulsos (CIC 1809).",
          },
          {
            prompt: "Como se desenvolvem as virtudes humanas segundo o Catecismo?",
            options: [
              "Pela repetição de atos bons e livres, purificados e elevados pela graça",
              "Apenas por sorte genética",
              "Sem nenhum esforço pessoal",
              "Somente na velhice",
            ],
            answer: 0,
            explanation:
              "As virtudes humanas adquirem-se pela educação, atos deliberados e perseverança, sendo elevadas pela graça (CIC 1810).",
          },
        ],
      },
      {
        id: "humildade-mansidao",
        title: "Humildade e mansidão no seguimento de Cristo",
        emoji: "🐑",
        xp: 20,
        teachings: [
          {
            title: "Aprender de Jesus manso e humilde de coração",
            text: "Jesus resume a escola do discipulado convidando: 'Aprendei de mim que sou manso e humilde de coração'. A humildade é reconhecer na verdade que tudo recebemos de Deus.",
            example:
              "Agradecer um elogio reconhecendo com simplicidade quem ajudou e os dons recebidos de Deus.",
            source: "Mt 11,29 · CIC 2546, 2559",
          },
          {
            title: "Humildade não é autodepreciação",
            text: "Ser humilde não significa negar os talentos que Deus nos deu, mas usá-los sem orgulho e saber pedir perdão quando erramos.",
            example: "Admitir um erro no trabalho ou em casa sem inventar desculpas complicadas.",
            source: "1Pd 5,5-6 · CIC 2559",
          },
          {
            title: "Mansidão: força controlada pelo amor",
            text: "A mansidão não é fraqueza; é força serena que não responde à ofensa com brutalidade, abrindo caminho para a paz nas relações.",
            example:
              "Responder com tom calmo quando alguém está alterado, ajudando a baixar a tensão.",
            source: "Mt 5,5; Gl 5,23 · CIC 1716, 1832",
          },
        ],
        questions: [
          {
            prompt: "Qual é o fundamento da verdadeira humildade cristã?",
            options: [
              "Desprezar os próprios talentos dados por Deus",
              "Reconhecer na verdade nossa dependência de Deus e servir sem soberba",
              "Aceitar qualquer injustiça sem defender os vulneráveis",
              "Nunca falar em público",
            ],
            answer: 1,
            explanation:
              "A humildade é a verdade diante de Deus, reconhecendo que tudo recebemos dele e servindo aos irmãos (CIC 2559).",
          },
          {
            prompt: "Por que Jesus afirma em Mateus 5,5 que os mansos possuirão a terra?",
            options: [
              "Porque a mansidão domina pela força armada",
              "Porque a força serena do amor vence a agressividade e herda o Reino",
              "Porque os mansos nunca trabalham",
              "Porque significa fraqueza diante da verdade",
            ],
            answer: 1,
            explanation:
              "A mansidão é fruto do Espírito que une firmeza no bem e paciência com o próximo (CIC 1716, 1832).",
          },
          {
            prompt: "Qual papel tem a humildade na vida de oração segundo o Catecismo?",
            options: [
              "É o próprio fundamento da oração, pois quem reza reconhece precisar de Deus",
              "Torna a oração mais rara",
              "Impede a leitura bíblica",
              "Substitui a Eucaristia",
            ],
            answer: 0,
            explanation:
              "O Catecismo ensina que a humildade é a disposição indispensável e o fundamento da oração verdadeira (CIC 2559).",
          },
        ],
      },
    ],
  },
];
