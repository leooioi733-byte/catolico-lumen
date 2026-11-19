import type { LessonUnit } from "./lesson-types";

// Unidades 45 a 60 (16 unidades de 3 lições cada = 48 lições).
// Sínteses catequéticas inspiradas na Sagrada Escritura e no Catecismo da Igreja Católica (CIC).
export const CURRICULUM_PART_3_UNITS: LessonUnit[] = [
  {
    id: "origens-genesis",
    title: "Das Origens ao Dilúvio (Gn 1–11)",
    emoji: "🌍",
    lessons: [
      {
        id: "queda-promessa",
        title: "A queda original e a promessa de salvação",
        emoji: "🍎",
        xp: 20,
        teachings: [
          {
            title: "Criados na amizade com Deus",
            text: "No início, Deus criou o ser humano na harmonia consigo, com o próximo e com a criação. A liberdade dada por Deus era para amar, não para se fechar no orgulho.",
            example:
              "Reconhecer que os limites dados por Deus existem para proteger nossa felicidade, não para diminuí-la.",
            source: "Gn 2,15-17 · CIC 374-379",
          },
          {
            title: "O pecado original: desconfiar do Pai",
            text: "Tentados a querer ser como deuses sem Deus, nossos primeiros pais quebraram a confiança no Criador. O pecado original feriu a natureza humana, deixando-nos inclinados ao mal, embora ainda capazes do bem.",
            example:
              "Perceber quando a desconfiança na bondade de Deus nos leva a agir apenas por interesse próprio.",
            source: "Gn 3,1-19 · CIC 396-405",
          },
          {
            title: "O Protoevangelho: Deus não abandona",
            text: "Logo após a queda, Deus anunciou vitória sobre a serpente pela descendência da mulher. A Igreja lê em Gênesis 3,15 o primeiro anúncio do Salvador e de Maria.",
            example:
              "Recomeçar com esperança mesmo depois de errar, sabendo que Deus sempre prepara um caminho de volta.",
            source: "Gn 3,15 · CIC 410-412",
          },
        ],
        questions: [
          {
            prompt: "Qual foi a raiz do primeiro pecado humano segundo o livro do Gênesis?",
            options: [
              "A falta de alimento no jardim",
              "A desconfiança em Deus e o abuso da liberdade ao querer decidir o bem e o mal sem Ele",
              "O trabalho de cuidar do jardim",
              "O medo dos animais",
            ],
            answer: 1,
            explanation:
              "Seduzido pelo maligno, o ser humano deixou morrer no coração a confiança no Criador e desobedeceu por soberba (CIC 397-398).",
          },
          {
            prompt: "Como o pecado original afetou a natureza humana segundo o Catecismo?",
            options: [
              "Tornou o ser humano incapaz de qualquer bem",
              "Privou-o da santidade original e deixou a natureza ferida e inclinada ao pecado",
              "Eliminou totalmente o livre-arbítrio",
              "Afetou apenas a primeira geração",
            ],
            answer: 1,
            explanation:
              "A natureza humana ficou ferida em suas forças naturais e inclinada ao pecado, sem ficar totalmente corrompida (CIC 405).",
          },
          {
            prompt: "Por que Gênesis 3,15 é chamado de 'Protoevangelho'?",
            options: [
              "Porque encerra o Antigo Testamento",
              "Porque anuncia pela primeira vez o Redentor vencedor do mal e sua Mãe",
              "Porque proíbe o Batismo",
              "Porque fala apenas de agricultura",
            ],
            answer: 1,
            explanation:
              "Imediatamente após a queda, Deus promete vitória sobre a serpente em Cristo, o novo Adão (CIC 410-411).",
          },
        ],
      },
      {
        id: "caim-noe-alianca",
        title: "Caim, Abel e a aliança com Noé",
        emoji: "🌈",
        xp: 20,
        teachings: [
          {
            title: "Guardião do meu irmão",
            text: "Quando Caim matou Abel por inveja, Deus perguntou: 'Onde está teu irmão?'. O pecado contra o irmão fere diretamente o Pai de todos e destrói a fraternidade.",
            example:
              "Combater comparações e invejas alegrando-se com as conquistas de familiares e colegas.",
            source: "Gn 4,8-10 · CIC 401, 2259",
          },
          {
            title: "Noé e o dilúvio como figura do Batismo",
            text: "Num mundo marcado pela violência, Noé permaneceu justo e construiu a arca. Os Santos Padres veem na arca sobre as águas uma imagem da Igreja e do Batismo que salva do pecado.",
            example:
              "Permanecer fiel aos valores do Evangelho mesmo quando a maioria ao redor escolhe outro caminho.",
            source: "Gn 6,9; 1Pd 3,20-21 · CIC 845, 1219",
          },
          {
            title: "O arco-íris da aliança com toda criatura",
            text: "Após o dilúvio, Deus firmou com Noé uma aliança universal abrangendo todas as nações e toda criatura viva. O arco-íris lembra a fidelidade paciente de Deus.",
            example:
              "Respeitar todas as pessoas e culturas, lembrando que a aliança de Deus abraça a humanidade inteira.",
            source: "Gn 9,8-17 · CIC 56-58",
          },
        ],
        questions: [
          {
            prompt: "O que a pergunta de Deus a Caim ('Onde está teu irmão?') ensina à humanidade?",
            options: [
              "Que cada pessoa só deve pensar em si mesma",
              "Que somos responsáveis uns pelos outros e que a violência fere o Criador",
              "Que Deus não sabia o que havia acontecido",
              "Que o trabalho no campo é proibido",
            ],
            answer: 1,
            explanation:
              "O drama de Caim e Abel revela o mal da inveja e lembra nossa responsabilidade fraterna diante de Deus (CIC 401, 2259).",
          },
          {
            prompt: "De qual sacramento a arca de Noé é uma prefiguração clássica na Igreja?",
            options: [
              "Do Batismo, pelo qual somos salvos das águas do pecado na Igreja",
              "Da Unção dos Enfermos",
              "Do Matrimônio",
              "Apenas da leitura bíblica",
            ],
            answer: 0,
            explanation:
              "Como ensina 1 Pedro 3,20-21, a Igreja reconhece na arca de Noé uma figura clara da salvação pelo Batismo (CIC 1219).",
          },
          {
            prompt: "Com quem Deus estabeleceu a aliança simbolizada pelo arco-íris?",
            options: [
              "Somente com uma tribo",
              "Com Noé, seus descendentes e todos os seres vivos da terra",
              "Apenas com os anjos",
              "Com nenhuma criatura",
            ],
            answer: 1,
            explanation:
              "A aliança com Noé manifesta o cuidado universal de Deus por todas as nações e pela criação (CIC 56-58).",
          },
        ],
      },
      {
        id: "babel-pentecostes",
        title: "Torre de Babel e a unidade em Cristo",
        emoji: "🗼",
        xp: 20,
        teachings: [
          {
            title: "Quando o orgulho divide as pessoas",
            text: "Em Babel, os homens quiseram construir uma torre para fazer um nome próprio sem Deus. O resultado do orgulho humano foi a confusão das línguas e a dispersão.",
            example:
              "Perceber quando a vaidade e a busca de status dividem grupos familiares ou paroquiais.",
            source: "Gn 11,1-9 · CIC 57",
          },
          {
            title: "Pentecostes reverte Babel no Espírito",
            text: "Se o orgulho de Babel dividiu as línguas, o Espírito Santo em Pentecostes fez pessoas de todas as nações compreenderem as maravilhas de Deus na unidade da fé.",
            example:
              "Promover a escuta e a paz em comunidades diversas, deixando o Espírito unir corações diferentes.",
            source: "At 2,5-11 · CIC 731, 1287",
          },
          {
            title: "A Igreja reúne os filhos dispersos",
            text: "A missão da Igreja é reunir a família humana dispersa pelo pecado sob a cabeça que é Cristo, respeitando a riqueza de cada cultura.",
            example:
              "Rezar pela comunhão entre povos e culturas diferentes dentro da mesma Igreja católica.",
            source: "Jo 11,52 · CIC 845",
          },
        ],
        questions: [
          {
            prompt: "O que causou a confusão e dispersão na história da Torre de Babel?",
            options: [
              "Falta de tijolos na região",
              "A pretensão orgulhosa de construir grandeza humana sem Deus",
              "Uma chuva inesperada",
              "O estudo de novos idiomas",
            ],
            answer: 1,
            explanation:
              "Babel simboliza o orgulho humano que busca construir uma unidade fechada sem Deus e acaba gerando divisão (CIC 57).",
          },
          {
            prompt: "Qual acontecimento do Novo Testamento supera a divisão de Babel?",
            options: [
              "Pentecostes, quando o Espírito faz todos os povos compreenderem a mesma Palavra de Deus",
              "A queda das muralhas de Jericó",
              "A construção do templo de Herodes",
              "A viagem a Atenas",
            ],
            answer: 0,
            explanation:
              "Em Pentecostes, a Igreja nasce reunindo os povos dispersos na unidade do Espírito Santo (CIC 731, 845).",
          },
          {
            prompt:
              "Qual imagem os Santos Padres usam para descrever a missão da Igreja diante de Babel?",
            options: [
              "Uma fortaleza fechada",
              "O lugar onde a humanidade dispersa volta a encontrar comunhão em Cristo",
              "Um grupo restrito a um único idioma",
              "Uma instituição puramente humana",
            ],
            answer: 1,
            explanation:
              "A Igreja é convocada a congregar novamente os filhos de Deus espalhados pelo pecado (CIC 845).",
          },
        ],
      },
    ],
  },
  {
    id: "juizes-rute",
    title: "Os Juízes, Débora e Rute",
    emoji: "🌾",
    lessons: [
      {
        id: "debora-gedeao",
        title: "Débora, Gedeão e a força que vem de Deus",
        emoji: "🛡️",
        xp: 20,
        teachings: [
          {
            title: "Quando o povo esquece Deus e pede socorro",
            text: "No livro dos Juízes, Israel afastou-se de Deus várias vezes, caiu em opressão e voltou a clamar por socorro. Sempre que o povo se arrependia, Deus suscitava libertadores.",
            example:
              "Reconhecer que a fidelidade contínua a Deus vale muito mais do que só rezar em crises extremas.",
            source: "Jz 2,16-18 · CIC 64, 2113",
          },
          {
            title: "Débora: sabedoria e coragem de uma juíza",
            text: "Débora guiou Israel com discernimento profético e coragem, mostrando que Deus levanta mulheres e homens fiéis para defender a justiça e animar o povo.",
            example:
              "Valorizar a liderança sábia e o serviço fiel de mulheres e homens na comunidade cristã.",
            source: "Jz 4,4-9; 5,1-7 · CIC 64, 371",
          },
          {
            title: "Gedeão e os trezentos: a vitória não é da vaidade",
            text: "Deus reduziu o exército de Gedeão de milhares para trezentos homens, para que Israel não dissesse que venceu pela própria força, mas reconhecesse o auxílio do Senhor.",
            example:
              "Agradecer a Deus pelas vitórias conquistadas sem atribuir tudo ao próprio mérito.",
            source: "Jz 7,2-7 · CIC 271, 2559",
          },
        ],
        questions: [
          {
            prompt: "Por que Deus pediu a Gedeão que reduzisse muito o número de soldados?",
            options: [
              "Para que Israel desistisse de lutar pelo bem",
              "Para que reconhecessem que a libertação vinha de Deus e não da força humana",
              "Por falta de alimentos no acampamento",
              "Para castigar os guerreiros fiéis",
            ],
            answer: 1,
            explanation:
              "Deus quis evitar que o povo se gloriasse contra Ele, mostrando que sua força brilha na humildade (Jz 7,2; CIC 271).",
          },
          {
            prompt: "Que papel teve Débora no tempo dos Juízes?",
            options: [
              "Rainha pagã inimiga de Israel",
              "Profetisa e juíza que orientou e encorajou o povo na fidelidade a Deus",
              "Sacerdotisa do Egito",
              "Apenas espectadora distante",
            ],
            answer: 1,
            explanation:
              "Débora serviu a Israel como profetisa e juíza cheia de coragem e fé no Senhor (Jz 4–5; CIC 64).",
          },
          {
            prompt: "O que o ciclo repetido do livro dos Juízes revela sobre Deus?",
            options: [
              "Que Deus esquece seu povo na primeira falha",
              "A paciência misericordiosa de Deus que escuta o clamor do povo arrependido",
              "Que ídolos também salvam",
              "Que a aliança durou só dez anos",
            ],
            answer: 1,
            explanation:
              "Apesar das infidelidades humanas, Deus responde com misericórdia sempre que o povo se converte e clama a Ele (CIC 218, 2577).",
          },
        ],
      },
      {
        id: "sansao-fidelidade",
        title: "Sansão e o valor da vocação consagrada",
        emoji: "🦁",
        xp: 20,
        teachings: [
          {
            title: "Dons de Deus pedem responsabilidade",
            text: "Consagrado desde o nascimento, Sansão recebeu força extraordinária para defender seu povo, mas enfraqueceu quando se deixou levar por impulsos e segredos quebrados.",
            example: "Cuidar dos talentos recebidos de Deus com vigilância moral e bons conselhos.",
            source: "Jz 13,5; 16,17 · CIC 1809, 2514",
          },
          {
            title: "Perder a vigilância aos poucos",
            text: "A queda de Sansão não veio de um único instante, mas de pequenas concessões repetidas ao erro. O domínio próprio protege a vocação.",
            example:
              "Corrigir pequenos desvios de conduta logo no início antes que se tornem hábitos pesados.",
            source: "Jz 16,15-21 · CIC 1863, 2849",
          },
          {
            title: "Na humilhação, voltar a clamar ao Senhor",
            text: "Preso e cego, Sansão voltou a orar com humildade reconhecendo sua dependência total de Deus, e o Senhor ouviu sua última súplica.",
            example:
              "Mesmo quando colhemos consequências de escolhas erradas, voltar a Deus em oração sincera.",
            source: "Jz 16,28 · CIC 1431, 2577",
          },
        ],
        questions: [
          {
            prompt: "Qual lição espiritual tiramos dos erros de Sansão?",
            options: [
              "Que talentos grandes dispensam disciplina e vigilância moral",
              "Que grandes dons precisam de vigilância, domínio próprio e fidelidade a Deus",
              "Que a oração só funciona no fim da vida",
              "Que não devemos confiar em ninguém da família",
            ],
            answer: 1,
            explanation:
              "Os dons de Deus exigem fidelidade moral e temperança para não serem desperdiçados (CIC 1809, 2849).",
          },
          {
            prompt: "Como Sansão agiu no momento de maior fragilidade e arrependimento?",
            options: [
              "Fugiu para outro reino pagão",
              "Voltou-se ao Senhor em oração humilde pedindo força mais uma vez",
              "Desistiu de falar com Deus",
              "Construiu um templo aos ídolos",
            ],
            answer: 1,
            explanation:
              "Na prisão, Sansão reconheceu que toda força vinha de Deus e rezou com humildade (Jz 16,28; CIC 2577).",
          },
          {
            prompt: "Por que pequenas concessões ao pecado merecem atenção desde cedo?",
            options: [
              "Porque enfraquecem pouco a pouco a vigilância e dispõem a quedas maiores",
              "Porque todo erro pequeno destrói a fé imediatamente",
              "Porque não existe perdão na Igreja",
              "Apenas por medo social",
            ],
            answer: 0,
            explanation:
              "O Catecismo alerta que o pecado venial deliberado e não combatido dispõe gradualmente ao pecado grave (CIC 1863).",
          },
        ],
      },
      {
        id: "rute-fidelidade",
        title: "Rute: lealdade, acolhida e linhagem de Cristo",
        emoji: "🌾",
        xp: 20,
        teachings: [
          {
            title: "O teu povo será o meu povo",
            text: "Estrangeira viúva de Moab, Rute não abandonou sua sogra Noemi na velhice e pobreza, declarando com fidelidade: 'O teu povo será o meu povo e o teu Deus será o meu Deus'.",
            example:
              "Cuidar de sogros, parentes idosos ou pessoas vulneráveis com lealdade além do obrigatório.",
            source: "Rt 1,16-17 · CIC 1656, 2218",
          },
          {
            title: "A bondade de Booz com os pobres",
            text: "Seguindo a lei bíblica da solidariedade, Booz acolheu Rute com respeito e deixou espigas sobrarem nos campos para os pobres e estrangeiros.",
            example:
              "Tratar funcionários, colegas novatos e migrantes com justiça e gentileza acolhedora.",
            source: "Rt 2,8-16 · CIC 1932, 2443",
          },
          {
            title: "Uma estrangeira na genealogia do Messias",
            text: "Rute tornou-se bisavó do rei Davi e entrou na genealogia de Jesus Cristo em Mateus 1, sinal de que a salvação abraça todos os povos.",
            example:
              "Nunca subestimar quem vem de longe: Deus escreve sua história de salvação com rostos simples e fiéis.",
            source: "Rt 4,17; Mt 1,5 · CIC 60, 422",
          },
        ],
        questions: [
          {
            prompt: "Que gesto de fidelidade marcou a escolha de Rute em relação a Noemi?",
            options: [
              "Voltou sozinha para sua cidade natal",
              "Permaneceu fiel ao lado da sogra viúva, assumindo o povo e o Deus de Israel",
              "Vendeu as terras de Noemi sem avisar",
              "Mudou-se para o Egito",
            ],
            answer: 1,
            explanation:
              "A lealdade gratuita de Rute tornou-se modelo bíblico de piedade familiar e acolhida da fé (Rt 1,16; CIC 2218).",
          },
          {
            prompt:
              "Por que a presença de Rute na genealogia de Jesus em Mateus 1 é tão significativa?",
            options: [
              "Mostra que a linhagem do Messias já prefigurava a abertura da salvação a todos os povos",
              "Prova que Rute era rainha do Egito",
              "Indica que o Antigo Testamento não inclui mulheres",
              "Foi apenas um erro de cópia antiga",
            ],
            answer: 0,
            explanation:
              "A inclusão de estrangeiras fiéis como Rute antecipa o alcance universal da salvação em Cristo (CIC 60, 422).",
          },
          {
            prompt: "Como Booz praticou a justiça social bíblica em suas colheitas?",
            options: [
              "Cercando o campo para ninguém entrar",
              "Respeitando o direito dos pobres de colher espigas e protegendo Rute com generosidade",
              "Cobrando juros altos de Noemi",
              "Demitindo todos os trabalhadores",
            ],
            answer: 1,
            explanation:
              "A Lei de Israel previa a partilha dos frutos da terra com pobres, viúvas e estrangeiros (Lv 19,9; Rt 2; CIC 2443).",
          },
        ],
      },
    ],
  },
  {
    id: "samuel-davi",
    title: "Samuel, Saul e o Rei Davi",
    emoji: "👑",
    lessons: [
      {
        id: "samuel-fala-senhor",
        title: "Samuel: Fala, Senhor, teu servo escuta",
        emoji: "👂",
        xp: 20,
        teachings: [
          {
            title: "A oração de Ana e a escuta do jovem Samuel",
            text: "Ana orou com lágrimas silenciosas no santuário e consagrou seu filho Samuel a Deus. Na noite silenciosa do templo, o menino aprendeu a responder: 'Fala, Senhor, porque teu servo escuta!'.",
            example:
              "Começar a leitura diária da Bíblia dizendo em voz baixa: 'Fala, Senhor, que teu servo escuta'.",
            source: "1Sm 1,10-28; 3,9-10 · CIC 2578, 2700",
          },
          {
            title: "Deus vê o coração, não só a aparência",
            text: "Quando Samuel foi ungir o sucessor de Saul em Belém, o Senhor ensinou que o homem olha para a aparência exterior, mas Deus vê o íntimo do coração.",
            example:
              "Julgar menos pela roupa, fama ou primeira impressão e valorizar a sinceridade das pessoas.",
            source: "1Sm 16,7 · CIC 2563",
          },
          {
            title: "Obedecer vale mais do que sacrifícios vazios",
            text: "Diante da desobediência do rei Saul, Samuel lembrou que Deus prefere um coração obediente e humilde a ofertas externas sem conversão.",
            example:
              "Unir as práticas externas de devoção à mudança real de atitudes em casa e no trabalho.",
            source: "1Sm 15,22 · CIC 2100",
          },
        ],
        questions: [
          {
            prompt:
              "Que frase aprendida por Samuel no templo tornou-se modelo de escuta na oração?",
            options: [
              "Fala, Senhor, porque teu servo escuta!",
              "Deixa-me dormir até amanhã",
              "Eu já sei tudo o que vais dizer",
              "Fala apenas com os reis",
            ],
            answer: 0,
            explanation:
              "A disponibilidade atenta de Samuel ensina o coração a ouvir a Palavra de Deus antes de agir (1Sm 3,10; CIC 2578).",
          },
          {
            prompt:
              "O que Deus revelou a Samuel ao escolher Davi em vez de seus irmãos mais altos?",
            options: [
              "Que apenas guerreiros altos vencem batalhas",
              "Que o homem vê a aparência, mas o Senhor olha para o coração",
              "Que os irmãos mais velhos não eram israelitas",
              "Que reis não precisam de unção",
            ],
            answer: 1,
            explanation:
              "Deus olha o coração, lugar escondido da verdade interior onde nos abrimos ou fechamos a Ele (1Sm 16,7; CIC 2563).",
          },
          {
            prompt: "O que significa 'a obediência vale mais do que os sacrifícios' (1Sm 15,22)?",
            options: [
              "Que a liturgia não tem valor",
              "Que ofertas exteriores sem fidelidade interior e conversão não agradam a Deus",
              "Que ninguém precisa ir ao templo",
              "Que Saul era inocente",
            ],
            answer: 1,
            explanation:
              "O sacrifício exterior só tem autenticidade quando exprime o sacrifício espiritual da obediência e do amor (CIC 2100).",
          },
        ],
      },
      {
        id: "davi-golias-ungido",
        title: "Davi: o pastor ungido e a confiança em Deus",
        emoji: "🪨",
        xp: 20,
        teachings: [
          {
            title: "Diante de Golias, confiar no Nome do Senhor",
            text: "O jovem pastor Davi recusou uma armadura pesada que não lhe servia e enfrentou o gigante Golias não pela própria força, mas em nome do Senhor dos Exércitos.",
            example:
              "Enfrentar desafios desproporcionais com os meios humildes que Deus colocou em nossas mãos e muita oração.",
            source: "1Sm 17,45-47 · CIC 2579",
          },
          {
            title: "A aliança com Davi e o Reino eterno",
            text: "Por meio do profeta Natã, Deus prometeu a Davi um descendente cujo trono seria firme para sempre. Essa promessa messiânica cumpriu-se em Jesus, Filho de Davi.",
            example: "Reconhecer Jesus como o verdadeiro Rei humilde cuja paz não tem fim.",
            source: "2Sm 7,12-16; Lc 1,32-33 · CIC 437, 709",
          },
          {
            title: "O rei cantor que rezava",
            text: "Pastor, guerreiro e rei, Davi tornou-se por excelência o rei que reza pelo seu povo, inspirando grande parte da tradição dos Salmos.",
            example: "Rezar pelos governantes e líderes da comunidade para que sirvam com justiça.",
            source: "2Sm 7,18-29 · CIC 2579",
          },
        ],
        questions: [
          {
            prompt: "Em que força o jovem Davi confiou ao enfrentar Golias?",
            options: [
              "Na armadura pesada de Saul",
              "No poder do Nome do Senhor, Deus de Israel",
              "Num exército secreto de mercenários",
              "Em amuletos da sorte",
            ],
            answer: 1,
            explanation:
              "Davi declarou que a batalha pertence ao Senhor, mostrando fé viva em meio à pequenez humana (1Sm 17,45-47; CIC 2579).",
          },
          {
            prompt: "Em quem se cumpriu plenamente a promessa de um reino eterno feita a Davi?",
            options: [
              "Em Salomão apenas",
              "Em Jesus Cristo, o Messias nascido da linhagem de Davi",
              "No rei Nabucodonosor",
              "Em nenhum personagem bíblico",
            ],
            answer: 1,
            explanation:
              "O Anjo Gabriel anunciou a Maria que Jesus receberia o trono de Davi e seu reinado não teria fim (Lc 1,32-33; CIC 437, 709).",
          },
          {
            prompt: "Por que a figura do pastor de ovelhas em Davi prepara a imagem de Cristo?",
            options: [
              "Porque o Bom Pastor conhece, guia e defende suas ovelhas até dar a vida por elas",
              "Porque reis não cuidam de pessoas",
              "Porque ovelhas não precisam de guia",
              "Apenas por coincidência histórica",
            ],
            answer: 0,
            explanation:
              "Jesus assume o título de Bom Pastor que protege o rebanho, cumprindo a profecia sobre o novo Davi (Jo 10,11; CIC 754, 2579).",
          },
        ],
      },
      {
        id: "davi-pecado-misericordia",
        title: "O pecado de Davi e o Salmo 51 (Miserere)",
        emoji: "💧",
        xp: 20,
        teachings: [
          {
            title: "Mesmo quem ama a Deus pode cair gravemente",
            text: "No auge do poder, Davi caiu em grave adultério e planejou a morte de Urias. A Bíblia não esconde os pecados dos seus líderes para ensinar que ninguém está imune à vigilância.",
            example:
              "Nunca achar que já estamos firmes demais a ponto de dispensar exame de consciência.",
            source: "2Sm 11,1-27 · CIC 1859, 2579",
          },
          {
            title: "Pequei contra o Senhor: arrependimento verdadeiro",
            text: "Quando o profeta Natã confrontou Davi com coragem, o rei não inventou desculpas nem perseguiu o profeta: confessou com humildade 'Pequei contra o Senhor'.",
            example:
              "Agradecer quando um amigo verdadeiro nos alerta sobre um erro em vez de reagir com orgulho.",
            source: "2Sm 12,1-13 · CIC 1451, 2579",
          },
          {
            title: "Cria em mim um coração puro",
            text: "Da contrição de Davi nasceu a oração do Salmo 51: reconhecer que só a misericórdia de Deus pode criar um coração novo e um espírito reto dentro de nós.",
            example: "Rezar o Salmo 51 em preparação para a Confissão sacramental.",
            source: "Sl 51,3-19 · CIC 1431, 2579",
          },
        ],
        questions: [
          {
            prompt: "Qual foi a atitude decisiva de Davi ao ser confrontado pelo profeta Natã?",
            options: [
              "Mandou prender o profeta imediatamente",
              "Reconheceu sua culpa sem desculpas: 'Pequei contra o Senhor'",
              "Culpou os soldados pelo ocorrido",
              "Fugiu de Jerusalém sem se arrepender",
            ],
            answer: 1,
            explanation:
              "A humildade de Davi em confessar seu pecado e implorar misericórdia tornou-se modelo de contrição cristã (2Sm 12,13; CIC 2579).",
          },
          {
            prompt:
              "Qual Salmo tradicionalmente expressa o pedido de perdão e coração puro após o pecado?",
            options: ["Salmo 51 (Miserere)", "Salmo 150", "Cântico de Moisés", "Prólogo de João"],
            answer: 0,
            explanation:
              "O Salmo 51 ('Tende piedade de mim, ó Deus') é a grande prece penitencial da Igreja (CIC 1431, 2579).",
          },
          {
            prompt: "Que sacrifício Deus jamais despreza segundo o Salmo 51?",
            options: [
              "Presentes caros sem arrependimento",
              "Um coração contrito e humilhado",
              "Discursos orgulhosos",
              "Rituais sem mudança de vida",
            ],
            answer: 1,
            explanation:
              "Um espírito quebrantado e humilde pela contrição sincera abre as portas à graça restauradora de Deus (Sl 51,19; CIC 1431).",
          },
        ],
      },
    ],
  },
  {
    id: "salomao-templo",
    title: "Salomão e a Construção do Templo",
    emoji: "🏛️",
    lessons: [
      {
        id: "salomao-sabedoria",
        title: "Salomão pede um coração capaz de discernir",
        emoji: "🦉",
        xp: 20,
        teachings: [
          {
            title: "Pedir sabedoria antes de riquezas",
            text: "No início de seu reinado, Deus perguntou a Salomão o que queria receber. Em vez de riqueza ou vida longa, o jovem rei pediu um coração sábio para governar com justiça.",
            example:
              "Pedir a Deus discernimento e calma antes de provas, escolhas vocacionais ou conflitos familiares.",
            source: "1Rs 3,5-14 · CIC 2580",
          },
          {
            title: "Justiça que protege os pequenos",
            text: "A famosa decisão de Salomão em favor da verdadeira mãe mostrou que a sabedoria bíblica serve para defender a vida e os indefesos, não para exibir inteligência fria.",
            example:
              "Usar o conhecimento que adquirimos nos estudos para ajudar e proteger quem precisa.",
            source: "1Rs 3,16-28 · CIC 1806, 1831",
          },
          {
            title: "O perigo de deixar o coração se dividir na velhice",
            text: "Mais tarde, seduzido pela riqueza e por alianças idólatras, Salomão desviou o coração. Nenhuma graça passada garante fidelidade futura sem humildade contínua.",
            example:
              "Manter o hábito da oração e vigilância em todas as fases da vida, inclusive nos momentos de sucesso.",
            source: "1Rs 11,1-10 · CIC 2113, 2580",
          },
        ],
        questions: [
          {
            prompt: "O que o jovem rei Salomão pediu a Deus em Gabaon?",
            options: [
              "Morte dos inimigos e muito ouro",
              "Um coração sábio e atento para discernir entre o bem e o mal e governar com justiça",
              "Poder sobre o clima",
              "Não precisar mais trabalhar",
            ],
            answer: 1,
            explanation:
              "Salomão pediu sabedoria para servir bem ao povo, e Deus se agradou da oração concedendo-lhe esse dom (1Rs 3,9-12; CIC 2580).",
          },
          {
            prompt: "Que lição grave traz a queda de Salomão no fim de sua vida?",
            options: [
              "Que a sabedoria não ajuda em nada",
              "Que mesmo grandes dons exigem vigilância contínua para não dividir o coração com ídolos",
              "Que ninguém deve estudar",
              "Que Deus não perdoa reis",
            ],
            answer: 1,
            explanation:
              "O sucesso e o apego desviaram o coração de Salomão quando ele relaxou na fidelidade exclusiva ao Senhor (CIC 2113, 2580).",
          },
          {
            prompt: "Como a sabedoria verdadeira se mede na Bíblia?",
            options: [
              "Pela capacidade de humilhar os outros em debates",
              "Pelo temor de Deus, retidão moral e justiça protetora dos pequenos",
              "Pela quantidade de ouro acumulado",
              "Pelo isolamento total",
            ],
            answer: 1,
            explanation:
              "A sabedoria bíblica está unida ao temor do Senhor, ao discernimento do bem e à prática da justiça (CIC 1831).",
          },
        ],
      },
      {
        id: "templo-jerusalem",
        title: "O Templo de Jerusalém e a oração de dedicação",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Casa de oração para todos os povos",
            text: "Salomão edificou o Templo de Jerusalém para abrigar a Arca da Aliança. Na dedicação, rezou para que Deus ouvisse não só Israel, mas também o estrangeiro que viesse orar ali.",
            example:
              "Acolher com alegria quem visita nossa igreja pela primeira vez, mesmo sem conhecer os ritos.",
            source: "1Rs 8,22-43 · CIC 583, 2580",
          },
          {
            title: "O céu dos céus não pode conter Deus",
            text: "Salomão reconheceu na sua oração que Deus não fica trancado em paredes de pedra: o Templo era sinal da presença benevolente do Senhor no meio do povo.",
            example:
              "Valorizar a igreja como casa sagrada sem esquecer que Deus também nos acompanha em cada lugar.",
            source: "1Rs 8,27 · CIC 583, 1179",
          },
          {
            title: "Cristo é o novo e verdadeiro Templo",
            text: "Jesus cumpriu e superou o templo de pedra: seu próprio Corpo ressuscitado é o lugar definitivo do encontro entre Deus e a humanidade, e pelo Espírito nós também nos tornamos templo de Deus.",
            example:
              "Cuidar da paz interior e da pureza do coração, onde habita a Santíssima Trindade.",
            source: "Jo 2,19-21; 1Cor 3,16 · CIC 586, 797",
          },
        ],
        questions: [
          {
            prompt: "Quem reconheceu na Bíblia como o novo e definitivo Templo de Deus?",
            options: [
              "O palácio de Salomão",
              "O próprio Jesus Cristo, em seu Corpo entregue e ressuscitado",
              "As muralhas antigas de Jericó",
              "Qualquer edifício civil",
            ],
            answer: 1,
            explanation:
              "Ao falar do templo do seu Corpo em João 2,21, Jesus revela ser a morada definitiva de Deus entre nós (CIC 586).",
          },
          {
            prompt: "O que Salomão pediu a Deus na dedicação do Templo quanto aos estrangeiros?",
            options: [
              "Que fossem impedidos de se aproximar",
              "Que Deus também escutasse o estrangeiro que ali fosse invocá-lo",
              "Que pagassem tributo dobrado",
              "Que não pudessem orar em seu idioma",
            ],
            answer: 1,
            explanation:
              "A oração de Salomão abre o Templo como casa de oração aberta a todos os povos (1Rs 8,41-43; CIC 2580).",
          },
          {
            prompt:
              "Em que sentido cada batizado e toda a Igreja são chamados 'Templo do Espírito Santo'?",
            options: [
              "Porque a Santíssima Trindade habita pela graça no coração dos fiéis e na comunidade reunida",
              "Porque não precisamos mais de igrejas físicas",
              "Apenas em sentido arquitetônico",
              "Somente durante o Natal",
            ],
            answer: 0,
            explanation:
              "Pelo Batismo, somos pedras vivas edificadas sobre Cristo e morada real do Espírito Santo (1Cor 3,16; CIC 797, 1265).",
          },
        ],
      },
      {
        id: "arca-presenca",
        title: "A Arca da Aliança e Maria, Arca da Nova Aliança",
        emoji: "✨",
        xp: 20,
        teachings: [
          {
            title: "O que havia na Arca da Aliança",
            text: "A Arca guardava as tábuas da Lei, um vaso com maná do deserto e o cajado de Aarão: sinais da Palavra, do pão que sustenta e da liderança sacerdotal dada por Deus.",
            example:
              "Lembrar que a fé cristã também se nutre da Palavra, da Eucaristia e da comunhão com os pastores.",
            source: "Hb 9,4 · CIC 2058, 2594",
          },
          {
            title: "A glória de Deus repousa sobre o propiciatório",
            text: "Sobre a tampa da Arca manifestava-se a presença luminosa de Deus guiando o povo no deserto e depois no santuário de Jerusalém.",
            example:
              "Cultivar reverência nas celebrações litúrgicas diante dos sinais da presença de Deus.",
            source: "Ex 25,22; 40,34 · CIC 1147, 2594",
          },
          {
            title: "Maria, Arca viva da Nova Aliança",
            text: "A tradição católica vê em Maria a nova Arca da Aliança: em seu seio habitou o próprio Verbo feito carne, Pão da Vida e Sumo Sacerdote eterno.",
            example:
              "Rezar a Ladainha de Nossa Senhora meditando o título 'Arca da Aliança' ligado a Jesus.",
            source: "Lc 1,35.39-44; Ap 11,19 · CIC 2676",
          },
        ],
        questions: [
          {
            prompt: "Por que a Tradição da Igreja chama Maria de 'Arca da Nova Aliança'?",
            options: [
              "Porque ela carregou as antigas tábuas de pedra",
              "Porque ela trouxe em seu seio o próprio Cristo — Palavra viva, Pão da Vida e Sacerdote eterno",
              "Porque ela morava dentro do Templo de Salomão",
              "Por uma semelhança de arquitetura",
            ],
            answer: 1,
            explanation:
              "Assim como a antiga arca guardava sinais da presença divina, Maria acolheu em si o próprio Filho de Deus encarnado (CIC 2676).",
          },
          {
            prompt:
              "Quais objetos sagrados estavam associados à Arca da Aliança segundo Hebreus 9,4?",
            options: [
              "Espada, coroa e ouro",
              "As tábuas da Aliança, a urna com o maná e a vara de Aarão",
              "Mapas de viagem e moedas",
              "Apenas rolos de poesia",
            ],
            answer: 1,
            explanation:
              "Os três sinais recordavam a Palavra da aliança, o sustento miraculoso e o sacerdócio instituído por Deus (Hb 9,4; CIC 2058).",
          },
          {
            prompt: "Como os ecos da Arca aparecem no Evangelho da Visitação de Maria a Isabel?",
            options: [
              "Davi dançou diante da Arca; em Lucas 1, João Batista exulta no ventre diante de Maria trazendo Jesus",
              "Não há nenhuma ligação entre os textos",
              "Isabel recusou receber Maria",
              "Maria levou um objeto dourado para Isabel",
            ],
            answer: 0,
            explanation:
              "São Lucas retoma expressões do transporte da Arca (2Sm 6) para mostrar que em Maria chega a presença do próprio Senhor (CIC 717, 2676).",
          },
        ],
      },
    ],
  },
  {
    id: "reinos-exilio",
    title: "Reinos Divididos, Exílio e Retorno",
    emoji: "⛓️",
    lessons: [
      {
        id: "divisao-reino",
        title: "A divisão dos reinos e os reis reformadores",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Orgulho político que divide um povo",
            text: "Após Salomão, a dureza do rei Roboão levou à divisão entre o Reino do Norte (Israel) e o Reino do Sul (Judá). A falta de escuta e justiça fragmentou a comunidade.",
            example:
              "Ouvir com humildade os mais experientes e evitar decisões autoritárias na família ou equipe.",
            source: "1Rs 12,1-20 · CIC 1907, 2236",
          },
          {
            title: "Ezequias e Josias: redescobrir a Palavra",
            text: "Reis fiéis como Ezequias e Josias promoveram reformas religiosas ao reencontrar o livro da Lei no Templo, rasgando as vestes em arrependimento e renovando a Páscoa.",
            example:
              "Quando perceber a fé esfriar, voltar à leitura simples do Evangelho e renovar os compromissos batismais.",
            source: "2Rs 22,8-23,3 · CIC 131, 1430",
          },
          {
            title: "A voz incômoda e fiel dos profetas",
            text: "Sempre que os reis esqueciam Deus e oprimiam os pobres, profetas levantavam a voz lembrando que rituais não encobrem injustiças.",
            example:
              "Unir a participação nas missas ao compromisso com a honestidade e o cuidado dos pobres.",
            source: "Is 1,11-17 · CIC 2443, 2581",
          },
        ],
        questions: [
          {
            prompt: "O que levou à divisão do reino após a morte de Salomão?",
            options: [
              "A recusa do rei Roboão em ouvir o povo e aliviar cargas injustas",
              "Uma invasão estrangeira antes da coroação",
              "A decisão do profeta Isaías",
              "O excesso de festas pascais",
            ],
            answer: 0,
            explanation:
              "A dureza de Roboão dividiu o reino em Norte e Sul, mostrando como a autoridade sem serviço gera ruptura (1Rs 12; CIC 2236).",
          },
          {
            prompt: "O que desencadeou a grande reforma espiritual do rei Josias?",
            options: [
              "A descoberta e leitura atenta do livro da Lei no Templo",
              "A construção de estátuas douradas",
              "Um tratado comercial com o Egito",
              "O fechamento do santuário",
            ],
            answer: 0,
            explanation:
              "Ao ouvir a Palavra de Deus redescoberta, Josias converteu o coração e renovou a aliança com o povo (2Rs 22–23; CIC 131).",
          },
          {
            prompt: "Qual alerta constante os profetas faziam aos reis e ao povo?",
            options: [
              "Para multiplicarem ofertas materiais mesmo oprimindo órfãos e viúvas",
              "Que o culto a Deus deve caminhar junto com justiça social e fidelidade interior",
              "Para nunca mais rezarem no templo",
              "Para adotarem outros deuses por diplomacia",
            ],
            answer: 1,
            explanation:
              "Os profetas unem inseparavelmente adoração ao único Deus e prática da justiça para com os pequenos (CIC 2100, 2443).",
          },
        ],
      },
      {
        id: "exilio-babilonia",
        title: "O Exílio na Babilônia: fé longe do Templo",
        emoji: "🌊",
        xp: 20,
        teachings: [
          {
            title: "Junto aos rios da Babilônia",
            text: "Com a queda de Jerusalém e a destruição do Templo, o povo foi levado ao exílio na Babilônia. Parecia o fim das promessas, mas ali Deus purificou a fé do seu povo.",
            example:
              "Nos momentos de perda ou mudança brusca de rotina, buscar a Deus ainda mais no íntimo do coração.",
            source: "Sl 137,1-4; Lm 3,21-26 · CIC 710, 2581",
          },
          {
            title: "Aprender a rezar e guardar a Palavra sem templo físico",
            text: "Longe de Jerusalém, os exilados reuniam-se para ler as Escrituras, rezar os Salmos e guardar o sábado. A Palavra tornou-se morada viva em terra estrangeira.",
            example:
              "Quando estiver viajando ou impossibilitado de ir à igreja, manter a leitura do Evangelho do dia e o Terço.",
            source: "Ez 11,16 · CIC 710, 2653",
          },
          {
            title: "Esperança do retorno e do 'Resto fiel'",
            text: "Os profetas anunciaram que Deus traria de volta um 'resto' humilde e purificado, abrindo esperança não só de retorno geográfico, mas de salvação eterna.",
            example:
              "Não desanimar quando poucos ao redor vivem a fé: Deus opera grandes obras com um pequeno resto fiel.",
            source: "Sf 3,12; Is 40,1-5 · CIC 710-711",
          },
        ],
        questions: [
          {
            prompt: "Qual fruto espiritual Deus tirou da provação do Exílio na Babilônia?",
            options: [
              "O desaparecimento definitivo da fé em Israel",
              "A purificação da fé dos 'pobres do Senhor' e maior apego à Palavra e à oração",
              "A substituição do Deus único por ídolos babilônicos",
              "A proibição definitiva dos Salmos",
            ],
            answer: 1,
            explanation:
              "No exílio, os profetas formaram um resto humilde que esperava a salvação diretamente de Deus (CIC 710-711).",
          },
          {
            prompt: "O que significa a expressão bíblica 'o Resto de Israel'?",
            options: [
              "Sobras de alimentos do templo",
              "Os fiéis humildes que permanecem firmes em Deus em meio às crises",
              "Apenas soldados derrotados",
              "As tribos que nunca creram",
            ],
            answer: 1,
            explanation:
              "Os profetas chamam de 'Resto' o núcleo fiel que acolhe a graça de Deus e prepara a vinda do Messias (CIC 710-711).",
          },
          {
            prompt: "Qual é o ensinamento do livro das Lamentações no meio da dor do exílio?",
            options: [
              "Que o amor e a misericórdia de Deus não se acabam, renovando-se a cada manhã",
              "Que não há mais razão para ter esperança",
              "Que Deus esqueceu a aliança",
              "Que a vingança é a melhor saída",
            ],
            answer: 0,
            explanation:
              "Mesmo sobre as ruínas, Lamentações 3 proclama que a fidelidade de Deus permanece e convida à esperança paciente (CIC 1817).",
          },
        ],
      },
      {
        id: "retorno-esperanca",
        title: "O retorno do exílio e a consolação de Deus",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Consolai, consolai o meu povo",
            text: "Ao anunciar o fim do exílio, Isaías proclamou: 'Preparai no deserto o caminho do Senhor!'. O retorno a Jerusalém antecipava a vinda de Jesus trazida por João Batista.",
            example:
              "Remover obstáculos interiores — como rancor ou orgulho — para acolher Jesus no Advento e no dia a dia.",
            source: "Is 40,1-5 · CIC 523, 718",
          },
          {
            title: "Reconstruir com gratidão e lágrimas de alegria",
            text: "De volta à terra, os repatriados lançaram os alicerces do segundo Templo cantando salmos de agradecimento ao Deus cuja misericórdia é eterna.",
            example:
              "Celebrar os pequenos recomeços na vida familiar ou espiritual com ação de graças.",
            source: "Esd 3,10-13 · CIC 2637",
          },
          {
            title: "A esperança que aponta além de um templo terreno",
            text: "Mesmo com a cidade reconstruída, o povo compreendeu que a paz perfeita viria somente com o Messias prometido.",
            example:
              "Manter o coração voltado para Cristo mesmo quando projetos terrenos não resolvem todas as dores.",
            source: "Ag 2,6-9 · CIC 522, 711",
          },
        ],
        questions: [
          {
            prompt:
              "Qual profecia do retorno do exílio é aplicada diretamente a São João Batista nos Evangelhos?",
            options: [
              "A construção das muralhas de Jericó",
              "A voz que clama no deserto: 'Preparai o caminho do Senhor' (Is 40,3)",
              "O sonho da escada de Jacó",
              "A canção de Débora",
            ],
            answer: 1,
            explanation:
              "Os quatro Evangelhos retomam Isaías 40,3 para apresentar João Batista preparando os corações para Cristo (CIC 523, 718).",
          },
          {
            prompt:
              "Com que sentimento os exilados que retornaram lançaram os alicerces do novo Templo?",
            options: [
              "Com indiferença fria",
              "Com louvor, gratidão e emoção diante da fidelidade de Deus",
              "Com revolta contra os profetas",
              "Proibindo cânticos",
            ],
            answer: 1,
            explanation:
              "Em Esdras 3, o povo louvou a Deus porque 'Ele é bom e eterna é a sua misericórdia' (CIC 2637).",
          },
          {
            prompt: "Por que a reconstrução após o exílio manteve viva a expectativa do Messias?",
            options: [
              "Porque o reino terreno continuava frágil e apontava para uma redenção mais profunda em Cristo",
              "Porque o Templo não foi usado para oração",
              "Porque todos esqueceram as Escrituras",
              "Porque Davi voltou a viver",
            ],
            answer: 0,
            explanation:
              "A espera messiânica amadureceu após o exílio nos corações humildes que aguardavam a consolação de Israel em Jesus (CIC 711).",
          },
        ],
      },
    ],
  },
  {
    id: "esdras-neemias",
    title: "Esdras, Neemias e a Reconstrução",
    emoji: "🧱",
    lessons: [
      {
        id: "neemias-muralhas",
        title: "Neemias: orar e reconstruir juntos",
        emoji: "🏗️",
        xp: 20,
        teachings: [
          {
            title: "Orar antes de agir diante do rei",
            text: "Quando Neemias soube das ruínas de Jerusalém, chorou, jejuou e rezou antes de falar com o rei persa — e antes de responder ao rei, elevou uma prece silenciosa ao céu.",
            example:
              "Fazer uma prece silenciosa de três segundos antes de uma conversa importante ou difícil.",
            source: "Ne 1,4-11; 2,4 · CIC 2659, 2743",
          },
          {
            title: "Cada família cuida de um trecho",
            text: "Na reconstrução das muralhas, cada família trabalhou lado a lado diante de sua própria casa. A comunidade se fortalece quando todos assumem sua parte.",
            example:
              "Cuidar primeiro da paz e da fé em sua própria casa e ajudar um projeto concreto da paróquia.",
            source: "Ne 3,1-32 · CIC 1913",
          },
          {
            title: "Não descer da obra para intrigas",
            text: "Quando adversários tentaram distrair Neemias com armadilhas e boatos, ele respondeu: 'Estou fazendo uma grande obra, não posso parar'.",
            example:
              "Não perder energia em fofocas ou discussões estéreis quando há um bem concreto a fazer.",
            source: "Ne 6,3 · CIC 2477, 2725",
          },
        ],
        questions: [
          {
            prompt: "Qual exemplo de oração cotidiana encontramos em Neemias diante do rei?",
            options: [
              "Ele só rezava uma vez por ano",
              "Ele elevou uma prece breve e silenciosa a Deus no exato instante antes de responder",
              "Ele recusou orar fora do templo",
              "Ele esperou terminar a muralha para falar com Deus",
            ],
            answer: 1,
            explanation:
              "A prece súbita de Neemias ilustra como podemos orar em qualquer momento e circunstância (Ne 2,4; CIC 2659, 2743).",
          },
          {
            prompt:
              "Como os moradores conseguiram reconstruir as muralhas de Jerusalém em pouco tempo?",
            options: [
              "Contratando apenas estrangeiros",
              "Com trabalho unido em que cada família e grupo assumiu um trecho da obra",
              "Esperando sem fazer nada",
              "Destruindo as casas vizinhas",
            ],
            answer: 1,
            explanation:
              "A participação solidária de cada família reflete o espírito de serviço ao bem comum (Ne 3; CIC 1913).",
          },
          {
            prompt:
              "Como Neemias reagiu às provocações e boatos que tentavam paralisar o trabalho?",
            options: [
              "Parou a obra para discutir por semanas",
              "Manteve o foco na missão recebida de Deus sem ceder à distração",
              "Abandonou Jerusalém",
              "Respondeu com calúnias iguais",
            ],
            answer: 1,
            explanation:
              "A perseverança no bem exige discernimento para não desperdiçar forças em intrigas (Ne 6,3; CIC 2725).",
          },
        ],
      },
      {
        id: "esdras-palavra-lida",
        title: "Esdras lê a Lei e renova a alegria",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "Ler com clareza para que todos compreendam",
            text: "Na praça da Porta das Águas, o escriba Esdras subiu num estrado de madeira e leu a Lei diante de homens, mulheres e jovens enquanto levitas explicavam o sentido ao povo.",
            example:
              "Ler a Bíblia com boas notas explicativas ou catequese para entender de verdade o que Deus diz.",
            source: "Ne 8,1-8 · CIC 109, 132",
          },
          {
            title: "A alegria do Senhor é a nossa força",
            text: "Ao ouvir a Lei, o povo chorou arrependido de suas falhas, mas Esdras e Neemias o consolaram: hoje é dia santo, partilhem o alimento com quem nada tem, pois a alegria do Senhor é nossa força!",
            example:
              "Unir a conversão sincera à alegria festiva e à partilha generosa com os mais pobres.",
            source: "Ne 8,9-12 · CIC 1832, 2447",
          },
          {
            title: "Ouvir a Palavra gera compaixão",
            text: "A escuta autêntica da Escritura não deixa o coração egoísta: logo leva o povo a enviar porções de festa a quem não pôde preparar nada.",
            example:
              "Transformar as datas festivas da família também em ocasião de ajudar quem passa necessidade.",
            source: "Ne 8,10 · CIC 133, 2444",
          },
        ],
        questions: [
          {
            prompt:
              "Por que os levitas ajudavam Esdras explicando o sentido da leitura em Neemias 8?",
            options: [
              "Para que toda a assembleia — homens, mulheres e jovens — compreendesse a Palavra de Deus",
              "Para esconder o texto do povo",
              "Porque Esdras não sabia falar hebraico",
              "Para abreviar a reunião",
            ],
            answer: 0,
            explanation:
              "A proclamação da Palavra pede explicação clara para alimentar a fé e a vida do povo de Deus (Ne 8,8; CIC 109, 132).",
          },
          {
            prompt: "Qual célebre frase de encorajamento aparece em Neemias 8,10?",
            options: [
              "A tristeza eterna é obrigatória",
              "A alegria do Senhor é a vossa força",
              "Guarde tudo só para sua casa",
              "Não escutem mais os sacerdotes",
            ],
            answer: 1,
            explanation:
              "Esdras e Neemias recordam que o arrependimento acolhido por Deus abre lugar para a alegria santa e a partilha (CIC 1832).",
          },
          {
            prompt: "Qual gesto prático acompanhou a festa religiosa em Neemias 8?",
            options: [
              "Enviar porções de alimento a quem não tinha nada preparado",
              "Fechar as portas da cidade aos pobres",
              "Esquecer as famílias necessitadas",
              "Proibir qualquer refeição",
            ],
            answer: 0,
            explanation:
              "A escuta da Palavra transborda naturalmente em solidariedade concreta com os pobres (Ne 8,10; CIC 2444).",
          },
        ],
      },
      {
        id: "alianca-renovada",
        title: "Justiça social e renovação da aliança",
        emoji: "⚖️",
        xp: 20,
        teachings: [
          {
            title: "O clamor dos irmãos endividados",
            text: "Neemias indignou-se ao saber que alguns ricos cobravam juros abusivos de seus próprios irmãos famintos, exigindo devolução imediata e perdão das dívidas injustas.",
            example:
              "Jamais aproveitar da fragilidade financeira de alguém para tirar vantagem injusta.",
            source: "Ne 5,1-13 · CIC 2409, 2446",
          },
          {
            title: "Liderança que serve sem privilégios",
            text: "Durante doze anos como governador, Neemias abriu mão do imposto pessoal a que teria direito para não sobrecarregar o povo já sofrido.",
            example:
              "Exercer qualquer liderança — em casa, na escola ou na pastoral — buscando servir, não ser servido.",
            source: "Ne 5,14-18 · CIC 1909, 2236",
          },
          {
            title: "Celebrar a memória salvífica para não esquecer",
            text: "Em Neemias 9, o povo recordou toda a paciência de Deus desde Abraão e o Êxodo, assinando um compromisso concreto de fidelidade ao culto e ao cuidado da casa de Deus.",
            example:
              "Relembrar nos momentos de ingratidão as vezes em que Deus já nos sustentou no passado.",
            source: "Ne 9,5-38 · CIC 2577, 2638",
          },
        ],
        questions: [
          {
            prompt: "Qual abuso econômico Neemias combateu com firmeza em Jerusalém?",
            options: [
              "O plantio de oliveiras",
              "A exploração e cobrança de juros abusivos sobre irmãos empobrecidos",
              "A ajuda às viúvas",
              "O descanso no sábado",
            ],
            answer: 1,
            explanation:
              "Neemias defendeu os pobres contra a usura e a exploração, lembrando o temor de Deus e a fraternidade (Ne 5; CIC 2409, 2446).",
          },
          {
            prompt: "Como Neemias deu exemplo de desapego como governador?",
            options: [
              "Aumentou os impostos pessoais",
              "Abriu mão da verba de governador e partilhou sua mesa para não pesar sobre o povo",
              "Cobrou taxas extras dos sacerdotes",
              "Mudou-se para um palácio distante",
            ],
            answer: 1,
            explanation:
              "O serviço autêntico à comunidade busca o bem comum acima de privilégios pessoais (CIC 1909, 2236).",
          },
          {
            prompt: "O que faz a grande oração de Neemias 9 antes de renovar a aliança?",
            options: [
              "Esquece toda a história antiga",
              "Faz memória agradecida das maravilhas e da paciência de Deus apesar das infidelidades do povo",
              "Acusa outros países apenas",
              "Cancela os mandamentos",
            ],
            answer: 1,
            explanation:
              "A memória agradecida da fidelidade divina alimenta a contrição e o desejo de fidelidade nova (CIC 2577, 2638).",
          },
        ],
      },
    ],
  },
  {
    id: "tobias-judite-ester",
    title: "Tobias, Judite e Ester: Fidelidade na Prova",
    emoji: "🕯️",
    lessons: [
      {
        id: "tobias-familia-oracao",
        title: "Tobias: caridade familiar e o anjo Rafael",
        emoji: "🪽",
        xp: 20,
        teachings: [
          {
            title: "Oração conjugal de Tobias e Sara",
            text: "Na noite do casamento, Tobias e Sara rezaram juntos a Deus antes de tudo, pedindo misericórdia, fidelidade e bênção para envelhecerem juntos.",
            example:
              "Cultivar o hábito de rezar junto com o cônjuge ou pela família, entregando o lar a Deus.",
            source: "Tb 8,4-8 · CIC 1624, 2659",
          },
          {
            title: "Esmola, oração e jejum agradáveis a Deus",
            text: "O arcanjo São Rafael revelou a Tobit que a oração acompanhada de jejum e esmola vale mais do que tesouros de ouro e aproxima a cura e a misericórdia.",
            example:
              "Não separar espiritualidade de caridade concreta: quem reza também estende a mão a quem sofre.",
            source: "Tb 12,8-9 · CIC 1434, 2447",
          },
          {
            title: "Não faças a ninguém o que não queres para ti",
            text: "Nos conselhos ao filho, o idoso Tobit ensina a regra de ouro: cuidar dos pais, nunca desviar o rosto de um pobre e fazer aos outros o bem que desejamos para nós.",
            example:
              "Antes de tomar uma atitude dura com alguém, imaginar como você se sentiria no lugar dela.",
            source: "Tb 4,3-19 · CIC 1789, 2447",
          },
        ],
        questions: [
          {
            prompt:
              "Que gesto bonito marcou a noite de núpcias de Tobias e Sara no livro de Tobias?",
            options: [
              "Uma discussão sobre herança",
              "Eles se levantaram para rezar juntos pedindo a bênção e misericórdia de Deus",
              "Partiram imediatamente sem avisar os pais",
              "Fizeram um voto de nunca conversar",
            ],
            answer: 1,
            explanation:
              "A oração conjunta de Tobias e Sara inspira a liturgia católica do Matrimônio como aliança abençoada por Deus (Tb 8,4-8; CIC 1624).",
          },
          {
            prompt:
              "Quem acompanhou o jovem Tobias na viagem disfarçado de guia até revelar ser um anjo de Deus?",
            options: ["O arcanjo São Rafael", "O profeta Jonas", "O rei Dario", "O juiz Gedeão"],
            answer: 0,
            explanation:
              "São Rafael ('Deus cura') acompanhou Tobias e levou suas orações diante da glória de Deus (Tb 12,15; CIC 332).",
          },
          {
            prompt: "Qual conselho prático Tobit dá ao filho em Tobias 4,15?",
            options: [
              "Guardar tudo só para si em tempos difíceis",
              "Não fazer a ninguém o que não gostarias que te fizessem",
              "Esquecer a mãe na velhice",
              "Pagar salários somente meses depois",
            ],
            answer: 1,
            explanation:
              "Tobit formula a Regra de Ouro que Jesus levará à plenitude no Evangelho (Mt 7,12; CIC 1789).",
          },
        ],
      },
      {
        id: "judite-confianca",
        title: "Judite: coragem nascida da oração humilde",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Não pôr prazo nem condições a Deus",
            text: "Quando os chefes da cidade cercada deram cinco dias para Deus salvá-los antes de se renderem, a viúva Judite os repreendeu com firmeza: quem somos nós para tentar a Deus?",
            example:
              "Evitar transformar a oração em ultimato impaciente; confiar no tempo de Deus.",
            source: "Jt 8,11-17 · CIC 2119, 2737",
          },
          {
            title: "Deus é o Deus dos humildes",
            text: "Antes de agir pela libertação da cidade, Judite prostrou-se em jejum e oração proclamando que Deus não ama a arrogância das armas, mas socorre os pequenos e desamparados.",
            example:
              "Recorrer à oração e ao jejum antes de enfrentar situações em que nos sentimos impotentes.",
            source: "Jt 9,11-14 · CIC 2559, 2577",
          },
          {
            title: "Bendita sejas pelo Deus Altíssimo",
            text: "A Igreja aplica poeticamente a Maria as bênçãos cantadas a Judite pelo povo libertado, celebrando como Deus realiza grandes feitos por meio dos humildes.",
            example:
              "Agradecer a Deus pelas pessoas corajosas que protegem suas famílias e comunidades com fé.",
            source: "Jt 13,18; Lc 1,42 · CIC 491, 971",
          },
        ],
        questions: [
          {
            prompt: "Por que Judite corrigiu os líderes da cidade de Betúlia em Jt 8?",
            options: [
              "Porque eles queriam rezar demais",
              "Porque marcaram um prazo de cinco dias tentando impor condições a Deus",
              "Porque abriram os poços de água para os idosos",
              "Porque perdoaram os vizinhos",
            ],
            answer: 1,
            explanation:
              "Tentar a Deus é pôr à prova sua bondade impondo condições humanas em vez de confiar com humildade (CIC 2119).",
          },
          {
            prompt: "Onde Judite buscou força antes de enfrentar o exército inimigo?",
            options: [
              "Na oração humilde, no jejum e na confiança absoluta no Deus dos pequenos",
              "Em alianças secretas com ídolos",
              "Na fuga para outro país",
              "Em armas mais pesadas",
            ],
            answer: 0,
            explanation:
              "A oração de Judite mostra que a vitória pertence a Deus, protetor dos humildes e oprimidos (Jt 9; CIC 2559).",
          },
          {
            prompt:
              "Como a liturgia católica recorda o louvor dirigido a Judite ('Bendita és tu...')?",
            options: [
              "Aplicando-o como figura à Virgem Maria, cheia de graça e coragem na fé",
              "Apenas em aulas de geografia",
              "Nunca na tradição cristã",
              "Somente na festa de Pentecostes",
            ],
            answer: 0,
            explanation:
              "Na tipologia bíblica, mulheres salvadoras de Israel como Judite prefiguram a cooperação fiel de Maria na salvação (CIC 491, 971).",
          },
        ],
      },
      {
        id: "ester-coragem",
        title: "Ester: interceder pelo povo na hora decisiva",
        emoji: "👑",
        xp: 20,
        teachings: [
          {
            title: "Talvez tenhas chegado ao trono para um momento como este",
            text: "Ao saber do decreto que condenava seu povo à morte, Mardoqueu recordou à rainha Ester que sua posição não era para conforto egoísta, mas para interceder pelos irmãos.",
            example:
              "Usar nossa posição, influência ou espaço de fala para defender quem não tem voz.",
            source: "Est 4,14 · CIC 1913, 2444",
          },
          {
            title: "Jejum comunitário e oração sincera",
            text: "Antes de arriscar a vida diante do rei, Ester pediu que todo o povo jejuasse três dias com ela e rezou com temor e confiança no único Deus.",
            example:
              "Unir a comunidade em oração solidária quando um irmão enfrenta uma grande prova.",
            source: "Est 4,16 · CIC 2634-2636",
          },
          {
            title: "A intercessão que traz livramento",
            text: "A coragem humilde de Ester transformou ameaça de morte em alegria e preservação do povo. Orar pelos outros é missão sacerdotal de todo cristão.",
            example:
              "Manter uma pequena lista de pessoas pelas quais você intercede fielmente cada semana.",
            source: "Est 7,3-4 · CIC 2634",
          },
        ],
        questions: [
          {
            prompt:
              "Qual foi o pedido de Ester ao povo antes de se apresentar diante do rei para interceder?",
            options: [
              "Que fizessem uma grande festa luxuosa",
              "Que jejuassem e rezassem em solidariedade por três dias",
              "Que escondessem sua identidade para sempre",
              "Que atacassem o palácio à noite",
            ],
            answer: 1,
            explanation:
              "Ester buscou a força de Deus junto com toda a comunidade na oração e no jejum antes de agir (Est 4,16; CIC 2634).",
          },
          {
            prompt:
              "O que a frase 'talvez tenhas chegado à realeza exatamente para uma hora como esta' ensina?",
            options: [
              "Que privilégios existem apenas para conforto pessoal",
              "Que cargos e oportunidades devem servir ao bem e à defesa do próximo",
              "Que o acaso governa o mundo",
              "Que apenas reis podem interceder",
            ],
            answer: 1,
            explanation:
              "Os talentos e responsabilidades recebidos são chamados a servir o bem comum e proteger os vulneráveis (CIC 1913, 2634).",
          },
          {
            prompt: "Qual forma de oração a atitude de Ester exemplifica de modo especial?",
            options: [
              "A oração de intercessão em favor de todo o povo",
              "A oração apenas pelos próprios desejos",
              "O esquecimento da história",
              "A reclamação sem esperança",
            ],
            answer: 0,
            explanation:
              "Interceder é pedir em favor de outro, participando do coração de Cristo que intercede por todos (CIC 2634).",
          },
        ],
      },
    ],
  },
  {
    id: "macabeus-coragem",
    title: "Os Macabeus e a Coragem na Fé",
    emoji: "🛡️",
    lessons: [
      {
        id: "fidelidade-perseguicao",
        title: "Fidelidade à aliança em tempos de perseguição",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "Resistir quando a fé é proibida",
            text: "Quando governantes tentaram apagar a fé de Israel impondo cultos pagãos no Templo, Matatias e seus filhos escolheram permanecer fiéis à aliança mesmo em minoria.",
            example:
              "Manter as convicções cristãs com serenidade mesmo quando o ambiente ao redor pressiona ao contrário.",
            source: "1Mc 2,19-27 · CIC 1808, 2242",
          },
          {
            title: "Obedecer a Deus antes que aos homens",
            text: "Os livros dos Macabeus preparam a firmeza cristã diante de leis injustas: a consciência reta respeita as autoridades justas, mas nunca nega Deus.",
            example:
              "Recusar educadamente participar de fraudes ou injustiças mesmo quando alguém com autoridade pede.",
            source: "2Mc 7,2 · CIC 2242",
          },
          {
            title: "Purificação do Templo e a festa da Dedicação",
            text: "Após libertar Jerusalém, Judas Macabeu purificou e consagrou novamente o altar, instituindo a festa da Dedicação que o próprio Jesus celebrou em João 10.",
            example:
              "Cuidar com zelo e limpeza do espaço da própria igreja paroquial e, acima de tudo, do coração.",
            source: "1Mc 4,52-59; Jo 10,22 · CIC 583",
          },
        ],
        questions: [
          {
            prompt: "Qual princípio moral se destaca na resistência fiel dos Macabeus?",
            options: [
              "Adaptar a fé a qualquer decreto injusto para evitar incômodo",
              "Permanecer fiel à aliança com Deus mesmo diante da pressão ou perseguição",
              "Abandonar a oração em momentos de crise",
              "Destruir todos os livros antigos",
            ],
            answer: 1,
            explanation:
              "O cidadão deve obedecer às autoridades justas, mas em consciência deve recusar o que contraria a lei de Deus (CIC 2242).",
          },
          {
            prompt:
              "Que festa judaica mencionada em João 10,22 teve origem na purificação do Templo pelos Macabeus?",
            options: [
              "A Festa da Dedicação (Hanucá)",
              "O Dilúvio de Noé",
              "A ascensão de Elias",
              "O Pentecostes cristão",
            ],
            answer: 0,
            explanation:
              "A celebração da rededicação do Templo em 1 Macabeus 4 permaneceu viva até o tempo de Jesus em Jerusalém (Jo 10,22; CIC 583).",
          },
          {
            prompt: "Qual virtude cardeal sustenta a constância na fé em tempos hostis?",
            options: ["A fortaleza", "A avareza", "A vaidade", "A omissão"],
            answer: 0,
            explanation:
              "A fortaleza dá coragem para vencer o medo e manter a fidelidade ao bem e à verdade até o sacrifício (CIC 1808).",
          },
        ],
      },
      {
        id: "sete-irmaos-ressurreicao",
        title: "A mãe e os sete irmãos: fé na Ressurreição",
        emoji: "🌅",
        xp: 20,
        teachings: [
          {
            title: "Esperança que vence o medo da morte",
            text: "Em 2 Macabeus 7, sete irmãos e sua mãe preferiram morrer torturados a trair a fé, declarando com clareza: 'O Rei do universo nos ressuscitará para uma vida eterna'.",
            example:
              "Nutrir a fé na vida eterna para enfrentar as ameaças e perdas desta vida sem desespero.",
            source: "2Mc 7,9 · CIC 992, 2473",
          },
          {
            title: "A força materna na educação da fé",
            text: "A mãe encorajou cada filho lembrando que Deus criou suas vidas no ventre materno e tem poder para devolver-lhes o sopro e a vida na ressurreição.",
            example:
              "Transmitir às crianças e jovens a esperança firme no céu desde dentro da própria família.",
            source: "2Mc 7,22-29 · CIC 992, 2225",
          },
          {
            title: "Semente da fé cristã na ressurreição corporal",
            text: "Esse testemunho mostra como Deus revelou progressivamente no Antigo Testamento a fé na ressurreição dos mortos, confirmada plenamente em Cristo.",
            example:
              "Rezar o artigo do Credo 'creio na ressurreição da carne' com gratidão por quem nos precedeu na fé.",
            source: "2Mc 7,11.14 · CIC 992-996",
          },
        ],
        questions: [
          {
            prompt:
              "Qual verdade de fé sustentou a mãe e os sete irmãos diante do martírio em 2 Macabeus 7?",
            options: [
              "A esperança firme na ressurreição dos justos para a vida eterna",
              "A certeza de escapar por uma porta secreta",
              "A crença de que a alma desaparece na morte",
              "O desejo de vingança política imediata",
            ],
            answer: 0,
            explanation:
              "Os mártires de 2 Macabeus confessam com clareza que o Criador devolverá corpo e vida aos fiéis na ressurreição (CIC 992).",
          },
          {
            prompt: "Como a mãe dos sete irmãos relacionou a Criação com a Ressurreição?",
            options: [
              "Afirmou que os corpos não têm valor",
              "Lembrou que o mesmo Deus que formou os filhos no ventre tem poder para ressuscitá-los",
              "Pediu que negassem a fé só por fora",
              "Esqueceu o Deus de Israel",
            ],
            answer: 1,
            explanation:
              "A fé no Deus Criador fundamenta a esperança na nova criação e na ressurreição corporal (2Mc 7,22-23; CIC 992, 997).",
          },
          {
            prompt: "Qual atitude dos mártires antecipa o testemunho cristão?",
            options: [
              "Fingir obediência falsa",
              "Entregar a vida livremente com integridade de consciência e esperança na vida eterna",
              "Atacar civis inocentes",
              "Negar a ressurreição do corpo",
            ],
            answer: 1,
            explanation:
              "O testemunho dos Macabeus antecipa a fortaleza e a esperança pascal dos mártires cristãos (CIC 992, 2473).",
          },
        ],
      },
      {
        id: "oracao-pelos-mortos",
        title: "2 Macabeus 12 e a oração pelos falecidos",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Pensamento santo e salutar rezar pelos mortos",
            text: "Ao descobrir amuletos pagãos sob as túnicas de soldados caídos em combate, Judas Macabeu promoveu uma coleta e enviou a Jerusalém para oferecer sacrifício pelos pecados dos mortos.",
            example:
              "Mandar celebrar Missas ou rezar o Terço pelos avós, pais e amigos que já partiram.",
            source: "2Mc 12,39-46 · CIC 958, 1032",
          },
          {
            title: "Prova bíblica da comunhão além da morte",
            text: "O texto explica por que Judas agiu assim: se não esperasse que os mortos ressuscitassem, seria inútil rezar por eles. A oração pelos falecidos nasce da fé na ressurreição.",
            example:
              "Visitar o cemitério no Dia de Finados levando não só flores, mas oração confiante por todos os falecidos.",
            source: "2Mc 12,43-45 · CIC 958, 1032",
          },
          {
            title: "Ligação com a doutrina católica do Purgatório",
            text: "Desde os primeiros séculos, a Igreja apoia-se nessa passagem e na Tradição para ensinar que nossas orações e a Eucaristia auxiliam as almas em purificação.",
            example:
              "Incluir na oração da noite uma prece simples pelas almas esquecidas que ninguém lembra de rezar.",
            source: "2Mc 12,46 · CIC 1030-1032",
          },
        ],
        questions: [
          {
            prompt:
              "O que Judas Macabeu fez após encontrar objetos idolátricos com os soldados mortos?",
            options: [
              "Condenou-os ao esquecimento",
              "Promoveu orações e enviou oferta ao Templo para oferecer sacrifício pelos falecidos",
              "Proibiu qualquer funeral",
              "Distribuiu os amuletos aos sobreviventes",
            ],
            answer: 1,
            explanation:
              "A Escritura elogia o gesto santo e salutar de orar e oferecer sacrifício expiatório pelos mortos (2Mc 12,45-46; CIC 1032).",
          },
          {
            prompt: "A que crença a oração pelos mortos está diretamente ligada em 2 Macabeus 12?",
            options: [
              "À crença na ressurreição dos mortos e na misericórdia purificadora de Deus",
              "À reencarnação sucessiva",
              "À negação da vida após a morte",
              "Ao culto de ídolos",
            ],
            answer: 0,
            explanation:
              "Só faz sentido rezar pelos falecidos porque cremos na ressurreição e na purificação final para entrar na visão de Deus (CIC 958, 1032).",
          },
          {
            prompt:
              "Qual é a forma mais excelente de sufrágio pelos fiéis falecidos na Igreja Católica?",
            options: [
              "A oferta do Sacrifício Eucarístico (Santa Missa), unida a orações e obras de caridade",
              "Consultar médiuns ou adivinhos",
              "Guardar silêncio absoluto sem rezar",
              "Acender fogueiras de sorte",
            ],
            answer: 0,
            explanation:
              "A Igreja recomenda oferecer especialmente a Eucaristia, além de orações, esmolas e penitências em sufrágio dos mortos (CIC 1032).",
          },
        ],
      },
    ],
  },
  {
    id: "profeta-amos-oseias",
    title: "Amós e Oseias: Justiça e Amor Fiel",
    emoji: "⚖️",
    lessons: [
      {
        id: "amos-justica-pobres",
        title: "Amós: corra a justiça como água",
        emoji: "💧",
        xp: 20,
        teachings: [
          {
            title: "De pastor simples a profeta da justiça",
            text: "Amós era um simples criador de ovelhas e cultivador de figos bravos quando Deus o chamou para denunciar o luxo indiferente e a exploração dos pobres.",
            example:
              "Não ter medo de defender o que é justo mesmo sem ter títulos ou cargos importantes.",
            source: "Am 7,14-15 · CIC 2438, 2581",
          },
          {
            title: "Culto sem justiça não agrada ao Senhor",
            text: "Deus rejeitou festas barulhentas de quem fraudava balanças e oprimia os miseráveis, exortando: 'Corra a justiça como um rio que nunca seca!'.",
            example:
              "Conferir se nossas relações comerciais, notas, dívidas e tratos diários são limpos.",
            source: "Am 5,21-24 · CIC 2100, 2409",
          },
          {
            title: "Buscar o Senhor para viver",
            text: "O anúncio duro de Amós não busca destruir, mas despertar o arrependimento: 'Buscai o bem e não o mal, para que vivais!'.",
            example:
              "Acolher exortações da Palavra de Deus como remédio que desperta para a vida verdadeira.",
            source: "Am 5,4.14 · CIC 1430",
          },
        ],
        questions: [
          {
            prompt: "Qual denúncia social marca o livro do profeta Amós?",
            options: [
              "A existência de música nos templos",
              "A exploração dos pobres, fraudes no comércio e o culto hipócrita separado da justiça",
              "O cultivo de figos e ovelhas",
              "A oração silenciosa em casa",
            ],
            answer: 1,
            explanation:
              "Amós denuncia quem pisa o pobre durante a semana e oferece ritos vazios no santuário (Am 5,21-24; CIC 2100, 2409).",
          },
          {
            prompt:
              "O que significa a exortação de Amós 'Buscai o bem e não o mal, para que vivais'?",
            options: [
              "Que a justiça e a busca sincera de Deus trazem vida verdadeira à comunidade",
              "Que o culto exterior substitui a conversão",
              "Que os profetas odeiam o povo",
              "Que ninguém pode mudar",
            ],
            answer: 0,
            explanation:
              "O profeta chama o povo à conversão concreta para que receba a misericórdia do Senhor (CIC 1430, 2581).",
          },
          {
            prompt: "Qual era a profissão simples de Amós antes do chamado profético?",
            options: [
              "Pastor de ovelhas e cultivador de sicômoros",
              "Comandante militar",
              "Governador da Babilônia",
              "Sacerdote de Jerusalém",
            ],
            answer: 0,
            explanation:
              "Deus chamou um trabalhador simples do campo para recordar aos poderosos as exigências da aliança (Am 7,14-15; CIC 2581).",
          },
        ],
      },
      {
        id: "oseias-amor-esponsal",
        title: "Oseias: amor que perdoa e reconquista",
        emoji: "❤️",
        xp: 20,
        teachings: [
          {
            title: "A aliança comparada a um casamento fiel",
            text: "Através da própria vida familiar sofrida de Oseias, Deus revelou seu amor apaixonado e fiel por um povo que muitas vezes correu atrás de ídolos.",
            example:
              "Contemplar a fidelidade paciente de Deus que nunca se cansa de esperar nosso retorno.",
            source: "Os 2,16-22 · CIC 219, 1612",
          },
          {
            title: "Quero misericórdia, não sacrifícios",
            text: "Jesus mesmo citou Oseias 6,6 aos fariseus: Deus deseja amor leal e conhecimento de coração muito mais do que rituais mecânicos.",
            example:
              "Quando precisar escolher entre uma formalidade fria e socorrer alguém com misericórdia, escolher a misericórdia.",
            source: "Os 6,6; Mt 9,13 · CIC 2100, 2447",
          },
          {
            title: "Atrair com laços de bondade",
            text: "No capítulo 11, Deus fala como pai que ensina o filho pequeno a andar e o atrai com laços de ternura humana, mostrando que seu coração se comove por nós.",
            example:
              "Lembrar nos momentos de culpa que Deus não quer esmagar o pecador arrependido, mas curá-lo.",
            source: "Os 11,1-9 · CIC 218-219",
          },
        ],
        questions: [
          {
            prompt: "Qual frase do profeta Oseias foi citada diretamente por Jesus nos Evangelhos?",
            options: [
              "Construam torres mais altas",
              "Misericórdia quero, e não sacrifícios (Os 6,6)",
              "Afastem-se dos publicanos",
              "Fechem as portas do santuário",
            ],
            answer: 1,
            explanation:
              "Jesus retoma Oseias 6,6 para ensinar que o amor misericordioso é o coração da Lei de Deus (Mt 9,13; CIC 2100).",
          },
          {
            prompt:
              "Que imagens familiares Oseias utiliza para descrever o amor de Deus pelo povo?",
            options: [
              "Apenas de um juiz distante",
              "De um esposo fiel e de um pai carinhoso que ensina o filho a caminhar",
              "De um credor implacável",
              "De um rei estrangeiro",
            ],
            answer: 1,
            explanation:
              "Oseias revela a ternura esponsal e paternal do amor de Deus que atrai com laços de bondade (Os 2; 11; CIC 219, 1612).",
          },
          {
            prompt: "Como Deus reage diante da infidelidade humana em Oseias 11?",
            options: [
              "Com indiferença eterna",
              "Sua compaixão vence a cólera para curar e chamar o povo de volta",
              "Cancela toda possibilidade de conversão",
              "Destrói a criação inteira",
            ],
            answer: 1,
            explanation:
              "Deus declara 'sou Deus, e não homem; meu coração se comove', revelando a força curadora de sua misericórdia (CIC 218-219).",
          },
        ],
      },
      {
        id: "conversao-coracao-fiel",
        title: "Voltar ao Senhor e dar frutos de paz",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Semear justiça para colher misericórdia",
            text: "Oseias convida o povo a arar um campo novo no coração e buscar o Senhor até que Ele venha e faça chover justiça sobre a terra.",
            example: "Pedir a Deus coragem para deixar velhos hábitos que endurecem o coração.",
            source: "Os 10,12 · CIC 1430-1432",
          },
          {
            title: "Confiar mais em Deus do que em alianças humanas",
            text: "Os profetas alertavam contra buscar segurança absoluta em alianças militares ou riquezas passageiras em vez de confiar no Senhor.",
            example:
              "Colocar a segurança última da família em Deus, sem negligenciar o trabalho responsável.",
            source: "Os 14,4 · CIC 2098, 227",
          },
          {
            title: "Cura gratuita da infidelidade",
            text: "O livro de Oseias termina com uma promessa terna: 'Eu curarei a sua infidelidade e os amarei de todo o coração'. A conversão começa sempre pela graça de Deus.",
            example: "Agradecer a Deus a força que Ele dá para recomeçar depois de cada Confissão.",
            source: "Os 14,5 · CIC 1432, 1989",
          },
        ],
        questions: [
          {
            prompt: "De onde parte a iniciativa primeira da conversão humana segundo Oseias 14?",
            options: [
              "Do orgulho de provar que somos perfeitos",
              "Do amor gratuito de Deus que cura e atrai o coração de volta",
              "De acordos políticos com impérios",
              "De pagar multas no mercado",
            ],
            answer: 1,
            explanation:
              "A conversão é resposta à graça de Deus que primeiro nos ama, cura e move o coração ao arrependimento (CIC 1432, 1989).",
          },
          {
            prompt: "Qual erro político-espiritual Amós e Oseias denunciam nas lideranças?",
            options: [
              "Confiar mais em armas, riquezas e ídolos do que na fidelidade a Deus",
              "Construir casas simples",
              "Cuidar dos órfãos",
              "Ensinar as Escrituras às crianças",
            ],
            answer: 0,
            explanation:
              "A falsa confiança nos próprios recursos ou ídolos afasta da confiança viva no Deus da aliança (CIC 227, 2113).",
          },
          {
            prompt: "Como os dois profetas preparam a espiritualidade cristã?",
            options: [
              "Mostrando que amor a Deus, justiça com os pobres e misericórdia são inseparáveis",
              "Separando a fé da vida cotidiana",
              "Ensinando que o perdão é impossível",
              "Rejeitando o Antigo Testamento",
            ],
            answer: 0,
            explanation:
              "A pregação profética educa o coração para a fé viva que opera pela justiça e pela caridade (CIC 2100, 2443).",
          },
        ],
      },
    ],
  },
  {
    id: "profeta-miqueias-sofonias",
    title: "Miqueias, Sofonias e o Resto Fiel",
    emoji: "🌟",
    lessons: [
      {
        id: "miqueias-belem",
        title: "Miqueias: Belém e o que Deus pede de nós",
        emoji: "🏡",
        xp: 20,
        teachings: [
          {
            title: "O que Deus pede de ti em três atitudes",
            text: "Miqueias 6,8 resume toda a vida espiritual de modo inesquecível: praticar a justiça, amar com fidelidade (misericórdia) e caminhar humildemente com o teu Deus.",
            example:
              "Guardar Miqueias 6,8 como guia semanal para avaliar decisões e relacionamentos.",
            source: "Mq 6,8 · CIC 1807, 2559",
          },
          {
            title: "De Belém Efrata sairá o Pastor de Israel",
            text: "Embora pequena entre as cidades de Judá, Belém foi escolhida para o nascimento do Messias, mostrando que Deus prefere os pequenos lugares para realizar grandes obras.",
            example:
              "Valorizar a humildade da própria família ou paróquia simples onde Deus também age com poder.",
            source: "Mq 5,1-3; Mt 2,5-6 · CIC 437, 525",
          },
          {
            title: "Lançar os pecados no fundo do mar",
            text: "Miqueias exalta o Deus incomparável que perdoa a iniquidade, não guarda rancor para sempre e lança nossas culpas nas profundezas do mar.",
            example:
              "Confiar que um pecado sinceramente confessado está verdadeiramente perdoado e sepultado por Deus.",
            source: "Mq 7,18-19 · CIC 1441, 1468",
          },
        ],
        questions: [
          {
            prompt: "Quais três atitudes sintetizam o que Deus pede do ser humano em Miqueias 6,8?",
            options: [
              "Riqueza, fama e poder militar",
              "Praticar a justiça, amar a misericórdia e caminhar humildemente com Deus",
              "Isolamento, medo e orgulho",
              "Silêncio total, viagens e discursos",
            ],
            answer: 1,
            explanation:
              "Miqueias 6,8 resume a aliança em justiça para com todos, bondade misericordiosa e humildade diante de Deus (CIC 1807, 2559).",
          },
          {
            prompt: "Qual pequena cidade Miqueias anunciou como berço do futuro Pastor e Messias?",
            options: ["Belém Efrata", "Babilônia", "Nínive", "Damasco"],
            answer: 0,
            explanation:
              "Os Evangelhos de Mateus e Lucas confirmam o cumprimento de Miqueias 5,1 no nascimento de Jesus em Belém (CIC 437, 525).",
          },
          {
            prompt: "Que imagem consoladora Miqueias 7,19 usa sobre o perdão de Deus?",
            options: [
              "Deus anota as faltas em pedra eterna",
              "Deus tem compaixão e lança todos os nossos pecados no fundo do mar",
              "Deus só perdoa metade das culpas",
              "Deus espera vingança futura",
            ],
            answer: 1,
            explanation:
              "A misericórdia divina apaga e supera o pecado de quem se converte com humildade (CIC 1441, 1468).",
          },
        ],
      },
      {
        id: "sofonias-anawim",
        title: "Sofonias e os 'Pobres de Javé'",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "O povo humilde e modesto que confia no Senhor",
            text: "Sofonias descreveu os fiéis que esperam a salvação como um povo pobre e humilde que encontra seu refúgio no nome do Senhor, sem fraude nem arrogância.",
            example:
              "Cultivar simplicidade no coração e evitar depender de aparência ou status para ter paz.",
            source: "Sf 3,12-13 · CIC 716, 2546",
          },
          {
            title: "O Senhor está no meio de ti como Salvador",
            text: "Em Sofonias 3,14-17, o profeta anuncia alegria: 'Alegra-te, filha de Sião! O Senhor teu Deus está no meio de ti, poderoso salvador; Ele exulta de alegria por ti'.",
            example:
              "Lembrar que Deus não nos suporta a contragosto: Ele se alegra verdadeiramente com a nossa presença!",
            source: "Sf 3,14-17 · CIC 491, 716",
          },
          {
            title: "Eco na saudação do Anjo a Maria",
            text: "O 'Alegra-te!' do Anjo Gabriel em Nazaré retoma exatamente o convite de Sofonias à Filha de Sião: o Senhor está contigo em Jesus.",
            example:
              "Rezar a Ave-Maria reconhecendo o cumprimento da alegria prometida pelos profetas.",
            source: "Lc 1,28 · CIC 722, 2676",
          },
        ],
        questions: [
          {
            prompt: "Como Sofonias descreve o resto fiel que acolhe a salvação?",
            options: [
              "Como guerreiros orgulhosos e ricos",
              "Como um povo humilde e pobre em espírito que confia no nome do Senhor",
              "Como sábios que não precisam rezar",
              "Como mercadores poderosos",
            ],
            answer: 1,
            explanation:
              "Os 'pobres de Javé' (anawim) são os humildes e fiéis que preparam o coração para acolher o Messias (CIC 716, 2546).",
          },
          {
            prompt: "Qual anúncio de Sofonias 3,14-17 ressoa na Anunciação a Maria?",
            options: [
              "'Alegra-te! O Senhor está no meio de ti!'",
              "'Fugi para o deserto!'",
              "'Construam novos muros!'",
              "'Esquecei os cânticos!'",
            ],
            answer: 0,
            explanation:
              "A saudação do Anjo a Maria cumpre a promessa profética dirigida à Filha de Sião em Sofonias 3 (CIC 722, 2676).",
          },
          {
            prompt: "O que Sofonias revela sobre os sentimentos de Deus por seu povo convertido?",
            options: [
              "Frieza distante",
              "Deus renova no seu amor e exulta de alegria por seus filhos",
              "Desconfiança constante",
              "Silêncio indiferente",
            ],
            answer: 1,
            explanation:
              "Deus manifesta um amor terno e jubilante que renova a comunidade na paz (Sf 3,17; CIC 219).",
          },
        ],
      },
      {
        id: "habacuc-naum-fe",
        title: "Habacuc: o justo viverá pela sua fé",
        emoji: "⛰️",
        xp: 20,
        teachings: [
          {
            title: "Questionar com sinceridade e esperar na torre de vigia",
            text: "Habacuc perguntou a Deus por que o mal parecia vencer e subiu ao posto de vigia para esperar a resposta divina. Deus pediu paciência: a visão tem seu tempo marcado e não falhará.",
            example:
              "Quando uma injustiça parecer demorar a ser resolvida, esperar com fé perseverante sem perder a esperança.",
            source: "Hc 2,1-4 · CIC 1817, 2734",
          },
          {
            title: "O justo viverá pela sua fidelidade (fé)",
            text: "Em Habacuc 2,4 Deus declara que quem confia com retidão viverá pela sua fé. São Paulo retomará essa frase em Romanos e Gálatas para explicar a salvação em Cristo.",
            example:
              "Viver cada dia apoiado na fidelidade a Deus, mesmo quando os resultados imediatos não aparecem.",
            source: "Hc 2,4; Rm 1,17 · CIC 162, 1987",
          },
          {
            title: "Alegrar-se no Senhor mesmo se a figueira não florescer",
            text: "No hino final, Habacuc declara que, mesmo faltando colheitas e rebanhos, ainda assim exultará no Deus da sua salvação.",
            example: "Manter a gratidão a Deus em anos economicamente mais apertados ou difíceis.",
            source: "Hc 3,17-19 · CIC 1820, 2637",
          },
        ],
        questions: [
          {
            prompt:
              "Qual frase célebre de Habacuc 2,4 foi retomada por São Paulo no Novo Testamento?",
            options: [
              "O justo viverá pela sua fé",
              "Cada um por si mesmo",
              "Só os fortes sobrevivem",
              "A riqueza traz salvação",
            ],
            answer: 0,
            explanation:
              "Habacuc 2,4 fundamenta a doutrina paulina da justificação pela fé viva em Cristo (Rm 1,17; CIC 162, 1987).",
          },
          {
            prompt: "Como termina o livro de Habacuc diante de possíveis perdas materiais?",
            options: [
              "Com desistência total da religião",
              "Com um cântico de confiança: mesmo faltando frutos, alegrar-se no Deus salvador",
              "Com uma ordem de abandonar o país",
              "Com elogio à vingança",
            ],
            answer: 1,
            explanation:
              "A alegria cristã tem raízes mais fundas que a prosperidade externa: apoia-se em Deus Salvador (Hc 3,17-18; CIC 1820).",
          },
          {
            prompt: "O que ensina a postura de Habacuc na torre de vigia esperando Deus responder?",
            options: [
              "A escuta paciente e confiante na oração mesmo diante de dúvidas sobre o mal",
              "Que não podemos fazer perguntas a Deus",
              "Que Deus responde apenas por sorteios",
              "Que nunca devemos pensar sobre a justiça",
            ],
            answer: 0,
            explanation:
              "O profeta apresenta suas perplexidades diretamente a Deus e aguarda sua luz na vigilância orante (CIC 2734).",
          },
        ],
      },
    ],
  },
  {
    id: "profeta-daniel",
    title: "Daniel e a Fidelidade no Exílio",
    emoji: "🦁",
    lessons: [
      {
        id: "daniel-fornalha",
        title: "Os três jovens na fornalha ardente",
        emoji: "🔥",
        xp: 20,
        teachings: [
          {
            title: "Não adorar estátuas de ouro",
            text: "Ananias, Azarias e Misael recusaram adorar a estátua do rei Nabucodonosor, dizendo: nosso Deus pode livrar-nos; e mesmo que não o faça, não adoraremos deuses falsos!",
            example:
              "Permanecer firme na consciência reta sem negociar valores cristãos por medo ou interesse.",
            source: "Dn 3,16-18 · CIC 1808, 2113",
          },
          {
            title: "Deus caminha conosco no meio do fogo",
            text: "Na fornalha ardente, um quarto vulto semelhante a um mensageiro divino caminhou com os jovens no fogo. Deus nem sempre evita a prova, mas entra nela conosco.",
            example:
              "Rezar confiando que Jesus permanece ao nosso lado no meio das tribulações mais quentes.",
            source: "Dn 3,24-25 · CIC 2641",
          },
          {
            title: "O Cântico das Criaturas na liturgia",
            text: "Das chamas subiu o célebre louvor 'Obras todas do Senhor, bendizei ao Senhor!', rezado até hoje pela Igreja nas Laudes dos domingos e festas.",
            example:
              "Louvar a Deus pela beleza do sol, da chuva, das montanhas e de toda a criação.",
            source: "Dn 3,57-88 · CIC 293, 2641",
          },
        ],
        questions: [
          {
            prompt: "O que responderam os três jovens antes de serem lançados na fornalha?",
            options: [
              "Vamos adorar a estátua só por fora para escapar",
              "Nosso Deus pode nos livrar, mas mesmo que não nos livre, não serviremos a ídolos",
              "Precisamos consultar outros deuses primeiro",
              "Se nos salvarem, pagaremos ouro",
            ],
            answer: 1,
            explanation:
              "Sua resposta manifesta amor gratuito e fidelidade incondicional ao único Deus verdadeiro (Dn 3,17-18; CIC 2113).",
          },
          {
            prompt:
              "Onde a Igreja continua rezando o cântico dos três jovens na fornalha ('Bendizei ao Senhor')?",
            options: [
              "Na Liturgia das Horas (especialmente nas Laudes)",
              "Nunca fora do Antigo Testamento",
              "Apenas em funerais",
              "Somente na festa de Reis",
            ],
            answer: 0,
            explanation:
              "O Cântico das Criaturas de Daniel 3 integra a oração oficial da Igreja nas Laudes (CIC 293, 2641).",
          },
          {
            prompt: "O que mostra a presença do quarto vulto caminhando com eles na fornalha?",
            options: [
              "Que Deus não abandona seus fiéis dentro da provação",
              "Que o fogo não era real",
              "Que eles tinham armaduras mágicas",
              "Que ninguém sente dor no mundo",
            ],
            answer: 0,
            explanation:
              "Deus acompanha, protege e transforma em louvor a provação suportada com fidelidade (CIC 2641).",
          },
        ],
      },
      {
        id: "daniel-cova-leoes",
        title: "Daniel na cova dos leões: fidelidade diária na oração",
        emoji: "🦁",
        xp: 20,
        teachings: [
          {
            title: "Constância diária antes da crise",
            text: "Mesmo quando um decreto proibiu rezar a qualquer Deus além do rei por trinta dias, Daniel continuou ajoelhando-se três vezes ao dia com a janela aberta para Jerusalém.",
            example:
              "Manter horários fiéis de oração cotidiana mesmo em semanas corridas ou ambientes indiferentes.",
            source: "Dn 6,11 · CIC 2659, 2698",
          },
          {
            title: "Inocência diante das acusações",
            text: "Os inimigos de Daniel não acharam nenhuma corrupção em seu trabalho público; só puderam atacá-lo por sua fidelidade a Deus.",
            example:
              "Trabalhar e estudar com tamanha honestidade que ninguém encontre motivo justo de queixa moral.",
            source: "Dn 6,5-6 · CIC 2407, 2475",
          },
          {
            title: "O Deus vivo salva e fecha a boca dos leões",
            text: "Lançado na cova dos leões, Daniel saiu ileso porque confiou no seu Deus. Os antigos cristãos viam nisso uma imagem da vitória sobre a morte.",
            example:
              "Entregar a Deus os medos noturnos sabendo que sua proteção é maior que qualquer ameaça.",
            source: "Dn 6,23-24 · CIC 268, 992",
          },
        ],
        questions: [
          {
            prompt:
              "Por que os inimigos de Daniel só conseguiram armar uma cilada usando a fé dele?",
            options: [
              "Porque Daniel era preguiçoso no cargo",
              "Porque ele era íntegro e irrepreensível no trabalho público",
              "Porque ninguém gostava de oração no país",
              "Porque Daniel se gabava em praça pública",
            ],
            answer: 1,
            explanation:
              "A retidão profissional e moral de Daniel testemunhava o Deus vivo em terra estrangeira (Dn 6,5; CIC 2407).",
          },
          {
            prompt: "Como Daniel manteve sua vida de oração após o decreto injusto do rei?",
            options: [
              "Parou por trinta dias para esperar passar",
              "Continuou orando três vezes ao dia com fidelidade e serenidade",
              "Trocou o Deus de Israel pelo rei",
              "Organizou uma revolta armada",
            ],
            answer: 1,
            explanation:
              "A perseverança diária na oração em tempos fixos fortalece a fidelidade nas provas (Dn 6,11; CIC 2698).",
          },
          {
            prompt: "O que os primeiros cristãos viam na salvação de Daniel na cova dos leões?",
            options: [
              "Uma história sem sentido religioso",
              "Sinal do poder salvador de Deus que vence a morte e protege seus fiéis",
              "Que leões são animais domésticos",
              "Que reis nunca erram",
            ],
            answer: 1,
            explanation:
              "Desde as catacumbas, Daniel entre os leões simboliza a libertação divina e a esperança da ressurreição (CIC 268, 992).",
          },
        ],
      },
      {
        id: "filho-do-homem",
        title: "O Filho do Homem e o Reino eterno",
        emoji: "☁️",
        xp: 20,
        teachings: [
          {
            title: "Os reinos violentos passam; o Reino de Deus fica",
            text: "Em visões proféticas, Daniel mostrou impérios poderosos simbolizados por estátuas frágeis e feras ferozes que caem, enquanto o Reino de Deus permanece eternamente.",
            example:
              "Não se assustar demais com crises políticas ou históricas: todo poder humano é passageiro diante de Deus.",
            source: "Dn 2,44; 7,13-14 · CIC 664, 668",
          },
          {
            title: "Vindo sobre as nuvens do céu",
            text: "Daniel contemplou 'como um Filho do Homem' aproximando-se do Ancião de Dias e recebendo domínio eterno sobre todos os povos. Jesus assumiu esse título para si mesmo.",
            example:
              "Reconhecer em Jesus o Filho do Homem que une humildade terrena e glória divina eterna.",
            source: "Dn 7,13-14; Mc 14,62 · CIC 440, 664",
          },
          {
            title: "Os sábios brilharão como estrelas",
            text: "Daniel 12 anuncia claramente a ressurreição dos que dormem no pó da terra e promete que os que conduzem muitos à justiça brilharão para sempre.",
            example:
              "Ajudar amigos e familiares a conhecer o bem e a fé com paciência e bom exemplo.",
            source: "Dn 12,2-3 · CIC 992",
          },
        ],
        questions: [
          {
            prompt:
              "Que título messiânico de Daniel 7 Jesus aplicou frequentemente a si mesmo nos Evangelhos?",
            options: [
              "O Filho do Homem",
              "O Imperador de Babilônia",
              "O Escriba do Norte",
              "O Anjo da Água",
            ],
            answer: 0,
            explanation:
              "Jesus assumiu o título 'Filho do Homem', ligando-o tanto à sua entrega na cruz quanto à sua glória eterna (Dn 7,13; CIC 440, 664).",
          },
          {
            prompt: "Qual é a natureza do Reino recebido pelo Filho do Homem em Daniel 7,14?",
            options: [
              "Dura apenas setenta anos",
              "É um domínio eterno que nunca passará nem será destruído",
              "Restringe-se a uma única cidade",
              "Depende de armas de ferro",
            ],
            answer: 1,
            explanation:
              "O Reino de Cristo é eterno e universal, superando todos os impérios transitórios da história (CIC 664, 668).",
          },
          {
            prompt: "O que Daniel 12,2 afirma com clareza no Antigo Testamento?",
            options: [
              "A ressurreição dos mortos para a vida eterna ou para o juízo",
              "Que o tempo gira em círculos infinitos sem fim",
              "Que ninguém ressuscitará",
              "Que apenas reis têm alma",
            ],
            answer: 0,
            explanation:
              "Daniel 12 é um dos textos mais claros do Antigo Testamento sobre a esperança da ressurreição final (CIC 992).",
          },
        ],
      },
    ],
  },
  {
    id: "profeta-jonas",
    title: "Jonas e a Misericórdia Universal",
    emoji: "🐋",
    lessons: [
      {
        id: "jonas-fuga-tempestade",
        title: "Fugir de Deus e a oração no abismo",
        emoji: "⛵",
        xp: 20,
        teachings: [
          {
            title: "Ninguém pode fugir para longe do amor de Deus",
            text: "Mandado pregar aos inimigos de Nínive, Jonas tentou embarcar na direção oposta. Na tempestade, os próprios marinheiros pagãos acabaram invocando o Senhor.",
            example:
              "Quando perceber que está fugindo de um chamado ou responsabilidade justa, parar e rezar com honestidade.",
            source: "Jn 1,1-16 · CIC 279, 2577",
          },
          {
            title: "No ventre do peixe: do fundo do abismo eu clamei",
            text: "Na solidão profunda, Jonas lembrou-se do Senhor e rezou um salmo de ação de graças e entrega: 'Do Senhor vem a salvação!'.",
            example:
              "Nunca achar que foi longe demais para orar; mesmo no fundo do erro, Deus escuta quem clama.",
            source: "Jn 2,2-10 · CIC 2589, 2734",
          },
          {
            title: "O sinal de Jonas anunciado por Jesus",
            text: "Jesus comparou os três dias de Jonas no peixe aos três dias de sua morte e Ressurreição, tornando o livro um sinal pascal.",
            example:
              "Ler a história de Jonas lembrando que Cristo venceu a morte e nos resgata das trevas.",
            source: "Mt 12,39-41 · CIC 627, 639",
          },
        ],
        questions: [
          {
            prompt: "Por que Jonas tentou fugir de navio para Társis quando Deus o chamou?",
            options: [
              "Porque não queria que os inimigos de Nínive se convertessem e fossem perdoados",
              "Porque tinha medo de falar em público apenas",
              "Porque não sabia onde ficava o mar",
              "Porque queria visitar Jerusalém antes",
            ],
            answer: 0,
            explanation:
              "Jonas resistia à misericórdia de Deus aberta até aos pagãos inimigos de Israel (Jn 4,2; CIC 279, 851).",
          },
          {
            prompt:
              "A que mistério central de sua própria vida Jesus aplicou 'o sinal do profeta Jonas'?",
            options: [
              "Ao sermão sobre as flores do campo",
              "À sua morte, sepultamento e Ressurreição ao terceiro dia",
              "À viagem a Nazaré",
              "Ao casamento em Caná",
            ],
            answer: 1,
            explanation:
              "Em Mateus 12,40, Jesus anuncia sua descida à morte e sua Ressurreição ao terceiro dia através do sinal de Jonas (CIC 627, 639).",
          },
          {
            prompt: "O que mostra a oração de Jonas dentro do grande peixe?",
            options: [
              "Que mesmo na pior queda e angústia o clamor humilde chega aos ouvidos de Deus",
              "Que peixes entendem hebraico",
              "Que fugir de Deus sempre dá certo",
              "Que não precisamos pedir perdão",
            ],
            answer: 0,
            explanation:
              "Nenhuma profundidade de erro ou solidão impede a misericórdia de acolher quem invoca o Senhor (CIC 2734).",
          },
        ],
      },
      {
        id: "jonas-ninive-conversao",
        title: "A conversão de Nínive e a compaixão de Deus",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Uma grande cidade se converte pela escuta",
            text: "Quando Jonas enfim pregou em Nínive, desde o rei até o povo simples creram, jejuaram e abandonaram a violência. A Palavra tocou até uma cidade pagã.",
            example:
              "Nunca desistir de anunciar o bem achando que determinado ambiente é duro demais.",
            source: "Jn 3,4-9 · CIC 1430, 1434",
          },
          {
            title: "Deus se compadece de quem muda de caminho",
            text: "Vendo as obras de conversão de Nínive, Deus perdoou e não enviou o castigo anunciado. Deus não sente prazer na morte do pecador, mas que ele se converta e viva.",
            example:
              "Usar o perdão recebido para dar novas oportunidades a quem demonstra mudança real.",
            source: "Jn 3,10; Ez 18,23 · CIC 1422, 1432",
          },
          {
            title: "O jejum verdadeiro muda a violência em paz",
            text: "Em Nínive, jejuar não foi apenas passar fome: veio acompanhado de renúncia à violência e injustiça nas mãos.",
            example:
              "Unir qualquer renúncia na Quaresma ou sexta-feira a gestos concretos de paz e bondade.",
            source: "Jn 3,8 · CIC 1434, 1438",
          },
        ],
        questions: [
          {
            prompt: "Qual atitude dos habitantes de Nínive levou Deus a poupar a cidade?",
            options: [
              "Construíram muralhas mais altas",
              "Creram em Deus, jejuaram e abandonaram o mau caminho e a violência",
              "Expulsaram Jonas da cidade",
              "Fizeram promessas vazias sem mudar de vida",
            ],
            answer: 1,
            explanation:
              "O arrependimento verdadeiro manifestou-se no abandono do pecado e na busca de misericórdia (Jn 3,8-10; CIC 1430).",
          },
          {
            prompt: "O que a conversão de Nínive demonstra sobre o desígnio de Deus?",
            options: [
              "Que Deus deseja a salvação e o arrependimento de todos os povos, não apenas de um grupo",
              "Que judeus e gentios nunca podem orar ao mesmo Deus",
              "Que Deus muda de caráter moral",
              "Que o pecado não tem consequências",
            ],
            answer: 0,
            explanation:
              "Deus é Pai de todos e chama todas as nações à conversão e à vida em Cristo (CIC 851, 1422).",
          },
          {
            prompt: "Como Jesus usa o exemplo dos ninivitas nos Evangelhos?",
            options: [
              "Para elogiar quem nunca se arrepende",
              "Para alertar que quem se converte diante da pregação acolhe melhor a graça do que corações endurecidos",
              "Para proibir jejuns",
              "Para dizer que Jonas não existiu na tradição",
            ],
            answer: 1,
            explanation:
              "Jesus lembra a prontidão dos ninivitas para exortar seus ouvintes a acolherem o Reino com humildade (Mt 12,41; CIC 545).",
          },
        ],
      },
      {
        id: "jonas-mamona-coracao",
        title: "A planta de Jonas: educar o coração mesquinho",
        emoji: "🌱",
        xp: 20,
        teachings: [
          {
            title: "Quando a misericórdia de Deus incomoda o ciúme",
            text: "Jonas ficou irritado ao ver Nínive perdoada! Às vezes gostamos da misericórdia para nós, mas preferimos severidade para os outros.",
            example:
              "Examinar se não guardamos impaciência quando Deus abençoa alguém que não simpatizamos.",
            source: "Jn 4,1-4 · CIC 2539, 2840",
          },
          {
            title: "A lição da planta que secou",
            text: "Jonas teve pena de uma planta que lhe dava sombra e não plantou; quanto mais Deus não teria compaixão de cento e vinte mil seres humanos e até dos animais da cidade!",
            example:
              "Aprender a colocar a vida e a conversão das pessoas muito acima dos nossos confortos passageiros.",
            source: "Jn 4,5-11 · CIC 219, 2416",
          },
          {
            title: "Uma pergunta aberta para o leitor",
            text: "O livro de Jonas termina com uma pergunta de Deus sem resposta registrada — convidando cada um de nós a responder se queremos ter um coração largo como o do Pai.",
            example:
              "Rezar pedindo a Jesus um coração generoso que deseja o bem de todos, até de adversários.",
            source: "Jn 4,11 · CIC 1825, 2844",
          },
        ],
        questions: [
          {
            prompt: "Qual contraste Deus mostra a Jonas por meio da planta que nasceu e secou?",
            options: [
              "Que plantas valem mais que pessoas",
              "Que se Jonas teve pena de uma planta efêmera, quanto mais Deus se compadece das pessoas criadas por Ele",
              "Que o calor do deserto é sempre um castigo",
              "Que cidades grandes não têm valor",
            ],
            answer: 1,
            explanation:
              "Deus educa o coração do profeta mostrando a amplitude de sua compaixão criadora por toda vida humana (Jn 4,10-11; CIC 219).",
          },
          {
            prompt:
              "Qual vício espiritual aparece na revolta inicial de Jonas contra o perdão de Nínive?",
            options: [
              "A dureza de coração e o ciúme diante da bondade gratuita de Deus",
              "O excesso de caridade",
              "A humildade profunda",
              "O amor aos inimigos",
            ],
            answer: 0,
            explanation:
              "Assim como o irmão mais velho do filho pródigo, Jonas precisava vencer a mesquinhez pela misericórdia de Deus (CIC 1439, 2539).",
          },
          {
            prompt: "Por que Deus menciona até os muitos animais em Jonas 4,11?",
            options: [
              "Para mostrar o cuidado amoroso do Criador por toda a sua criação",
              "Por simples engano",
              "Para igualar animais a anjos",
              "Para criticar pastores",
            ],
            answer: 0,
            explanation:
              "Os animais são criaturas de Deus cercadas por sua solicitude providente (CIC 2416).",
          },
        ],
      },
    ],
  },
  {
    id: "profetas-pos-exilio",
    title: "Ageu, Zacarias e Malaquias",
    emoji: "🕊️",
    lessons: [
      {
        id: "ageu-prioridades",
        title: "Ageu: colocar a casa de Deus em primeiro lugar",
        emoji: "🏠",
        xp: 20,
        teachings: [
          {
            title: "Cuidar das próprias casas esquecendo Deus",
            text: "De volta do exílio, muitos diziam que não era hora de reconstruir o Templo enquanto construíam casas luxuosas para si. Ageu lembrou: revisai vossos caminhos!",
            example:
              "Não deixar que conforto, séries ou projetos pessoais empurrem sempre a oração e a Missa para 'depois'.",
            source: "Ag 1,2-7 · CIC 2098, 2544",
          },
          {
            title: "Eu estou convosco, diz o Senhor",
            text: "Quando os idosos choraram achando o novo Templo modesto perto do antigo, Deus animou: 'Coragem! Meu Espírito permanece no meio de vós!'.",
            example:
              "Não desanimar quando nossa comunidade ou iniciativa começa pequena: a presença de Deus faz toda diferença.",
            source: "Ag 2,4-5 · CIC 688, 711",
          },
          {
            title: "A paz prometida que ultrapassa pedras",
            text: "Ageu profetizou que a glória futura da casa seria maior que a primeira porque ali se manifestaria a paz do Messias esperado pelas nações.",
            example:
              "Acolher Jesus no templo vivo de nosso coração para sermos construtores da paz.",
            source: "Ag 2,7-9 · CIC 522, 583",
          },
        ],
        questions: [
          {
            prompt: "Qual erro de prioridades o profeta Ageu corrigiu no povo após o retorno?",
            options: [
              "Trabalharem demais no templo",
              "Adiar indefinidamente a casa de Deus enquanto cuidavam apenas do próprio conforto",
              "Rezarem em voz baixa",
              "Ajudarem os idosos da cidade",
            ],
            answer: 1,
            explanation:
              "Ageu exorta a recolocar Deus e seu culto no centro das prioridades da vida e da comunidade (Ag 1,4-8; CIC 2098).",
          },
          {
            prompt:
              "Como Deus encorajou os trabalhadores desanimados pela modéstia do novo Templo?",
            options: [
              "Mandando parar a construção",
              "Prometendo: 'Coragem, trabalhai, porque eu estou convosco e meu Espírito permanece no meio de vós'",
              "Prometendo ouro imediato sem esforço",
              "Substituindo os construtores",
            ],
            answer: 1,
            explanation:
              "A garantia da presença de Deus e de seu Espírito renova a esperança nas obras simples e fiéis (Ag 2,4-5; CIC 711).",
          },
          {
            prompt: "Como Cristo cumpre a promessa de uma glória maior para aquela casa?",
            options: [
              "Entrando pessoalmente no Templo de Jerusalém e oferecendo sua vida como novo Templo",
              "Construindo torres mais altas",
              "Proibindo orações ali",
              "Devolvendo o povo à Babilônia",
            ],
            answer: 0,
            explanation:
              "Ao entrar em Jerusalém e no Templo, Jesus — o Desejado das nações — traz a paz messiânica prometida (CIC 522, 583).",
          },
        ],
      },
      {
        id: "zacarias-rei-humilde",
        title: "Zacarias: o Rei manso sobre um jumentinho",
        emoji: "🌿",
        xp: 20,
        teachings: [
          {
            title: "Não pela violência, mas pelo meu Espírito",
            text: "Zacarias proclamou uma palavra essencial: 'Não pela força militar nem pelo poder humano, mas pelo meu Espírito!'. A obra de Deus cresce na graça.",
            example:
              "Confiar mais na força serena do Espírito Santo do que em imposições ou pressa ansiosa.",
            source: "Zc 4,6 · CIC 688, 709",
          },
          {
            title: "Eis que o teu Rei vem justo e humilde",
            text: "Zacarias 9,9 anunciou o Rei que entraria em Jerusalém sem carros de guerra, montado num humilde jumentinho, anunciando paz às nações — cumprido no Domingo de Ramos.",
            example:
              "Acolher o reinado manso de Jesus imitando sua humildade em vez de buscar prestígio.",
            source: "Zc 9,9; Mt 21,5 · CIC 559",
          },
          {
            title: "Olharão para Aquele que transpassaram",
            text: "O profeta também anunciou que Deus derramaria um espírito de graça e súplica, e o povo olharia para Aquele que foi transpassado — citado por São João aos pés da Cruz.",
            example:
              "Meditar diante de um crucifixo olhando com gratidão para o lado aberto de Jesus.",
            source: "Zc 12,10; Jo 19,37 · CIC 617, 713",
          },
        ],
        questions: [
          {
            prompt:
              "Qual profecia de Zacarias se cumpriu literalmente na entrada de Jesus em Jerusalém?",
            options: [
              "Um rei guerreiro chegando em cavalos de batalha",
              "O Rei justo e salvador chegando humilde, montado num jumentinho",
              "Um rei escondido no deserto",
              "A reconstrução de Babel",
            ],
            answer: 1,
            explanation:
              "No Domingo de Ramos, Jesus cumpre Zacarias 9,9 entrando como Rei humilde e pacífico em Jerusalém (Mt 21,4-5; CIC 559).",
          },
          {
            prompt:
              "Onde o Evangelho de São João cita Zacarias 12,10 ('Olharão para Aquele que transpassaram')?",
            options: [
              "Na pesca milagrosa",
              "Quando a lança do soldado abre o lado de Jesus morto na Cruz",
              "No nascimento em Belém",
              "Na multiplicação dos pães",
            ],
            answer: 1,
            explanation:
              "São João contempla no lado transpassado de Cristo na Cruz o cumprimento da profecia de Zacarias (Jo 19,34-37; CIC 617).",
          },
          {
            prompt: "O que ensina Zacarias 4,6 sobre a força que edifica o Reino de Deus?",
            options: [
              "Depende principalmente de força armada",
              "Realiza-se não pela violência humana, mas pelo Espírito do Senhor",
              "Depende apenas de sorte política",
              "Dispensa a oração",
            ],
            answer: 1,
            explanation:
              "É o Espírito Santo quem anima, sustenta e torna fecunda a missão da Igreja (Zc 4,6; CIC 688, 737).",
          },
        ],
      },
      {
        id: "malaquias-oferta-pura",
        title: "Malaquias: a oferta pura entre todas as nações",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Não dar a Deus as sobras",
            text: "Malaquias corrigiu quem oferecia animais cegos ou doentes a Deus, quando não ousaria dar presentes ruins a um governador humano. Deus merece o melhor de nosso coração e tempo.",
            example:
              "Reservar momentos de qualidade do dia para rezar, não apenas os cinco minutos quando já está caindo de sono.",
            source: "Ml 1,6-14 · CIC 2099-2100",
          },
          {
            title: "Do nascer ao pôr do sol, uma oferta pura",
            text: "Em Malaquias 1,11, Deus promete que entre todas as nações, do oriente ao ocidente, seria oferecido ao seu Nome um sacrifício puro — visto pela Igreja como figura da Eucaristia celebrada no mundo inteiro.",
            example:
              "Participar da Santa Missa lembrando que na mesma hora cristãos de todos os continentes oferecem Cristo ao Pai.",
            source: "Ml 1,11 · CIC 1330, 1367",
          },
          {
            title: "O Sol da Justiça e o precursor",
            text: "O último livro profético anuncia o envio de um mensageiro para preparar o caminho do Senhor e a vinda do Sol da Justiça trazendo cura.",
            example:
              "Preparar o coração pela reconciliação familiar ('converter o coração dos pais aos filhos').",
            source: "Ml 3,1.20-24 · CIC 718, 2214",
          },
        ],
        questions: [
          {
            prompt:
              "Qual sacramento a Igreja reconhece anunciado em Malaquias 1,11 ('oferta pura em todo lugar')?",
            options: [
              "A Santa Eucaristia, celebrada entre todas as nações",
              "Antigos sacrifícios de animais apenas em Jerusalém",
              "A circuncisão",
              "Apenas o sábado judaico",
            ],
            answer: 0,
            explanation:
              "Desde os Padres da Igreja e o Concílio de Trento, Malaquias 1,11 é lido como anúncio do sacrifício eucarístico universal (CIC 1330, 1367).",
          },
          {
            prompt: "Qual crítica prática Malaquias dirige às ofertas feitas no santuário?",
            options: [
              "Oferecer a Deus coisas defeituosas e desprezadas enquanto se guarda o melhor só para si",
              "Cantar salmos muito altos",
              "Chegar cedo demais",
              "Fazer ofertas aos pobres",
            ],
            answer: 0,
            explanation:
              "O amor verdadeiro a Deus exprime-se entregando-lhe com generosidade o melhor de nossa vida e adoração (Ml 1,8; CIC 2099).",
          },
          {
            prompt:
              "Quem cumpre a promessa de Malaquias 3 sobre o mensageiro no espírito de Elias que prepara o caminho?",
            options: ["São João Batista", "O rei Herodes", "Salomão", "Pilatos"],
            answer: 0,
            explanation:
              "Jesus e o anjo Gabriel identificam João Batista como o precursor vindo no espírito e poder de Elias (Lc 1,17; Mt 11,14; CIC 718).",
          },
        ],
      },
    ],
  },
  {
    id: "cantico-dos-canticos",
    title: "Cântico dos Cânticos: Amor Esponsal",
    emoji: "🌹",
    lessons: [
      {
        id: "beleza-amor-humano",
        title: "A bondade do amor entre homem e mulher",
        emoji: "💍",
        xp: 20,
        teachings: [
          {
            title: "Um canto bíblico que celebra o amor humano",
            text: "O Cântico dos Cânticos celebra em poesia a ternura, a admiração mútua e a alegria fiel entre o noivo e a noiva. Na Bíblia, o amor humano puro e fiel é bom e criado por Deus.",
            example: "Aprender a expressar apreço sincero e palavras de carinho na vida familiar.",
            source: "Ct 2,16; 8,6-7 · CIC 1604, 2331",
          },
          {
            title: "Forte como a morte é o amor",
            text: "No capítulo 8, o texto proclama que as águas torrentosas não podem apagar o amor verdadeiro, marcado por fidelidade e doação que dinheiro nenhum compra.",
            example:
              "Defender a fidelidade e a paciência no casamento ou no namoro cristão, em vez de tratar relações como descartáveis.",
            source: "Ct 8,6-7 · CIC 1644, 1646",
          },
          {
            title: "Amor que exige respeito e tempo certo",
            text: "O livro repete um refrão sábio pedindo que não se desperte o amor antes da hora, valorizando o amadurecimento, a castidade e a espera respeitosa.",
            example:
              "Respeitar o próprio coração e o do outro construindo primeiro amizade, respeito e responsabilidade.",
            source: "Ct 2,7 · CIC 2348-2350",
          },
        ],
        questions: [
          {
            prompt: "O que o Cântico dos Cânticos ensina sobre a visão bíblica do amor humano?",
            options: [
              "Que a afetividade e o corpo são ruins por natureza",
              "Que o amor fiel entre esposo e esposa é obra boa do Criador, marcada por ternura e doação",
              "Que o amor pode ser comprado com bens materiais",
              "Que o casamento é desnecessário",
            ],
            answer: 1,
            explanation:
              "A Escritura afirma a bondade originária do amor esponsal criado e abençoado por Deus (CIC 1604, 2331).",
          },
          {
            prompt:
              "O que o refrão 'não desperteis o amor antes que ele o queira' sugere aos jovens?",
            options: [
              "Nunca casar nem amar ninguém",
              "Valorizar a paciência, o amadurecimento e a castidade sem precipitações",
              "Esconder todo sentimento bom",
              "Brincar com os sentimentos alheios",
            ],
            answer: 1,
            explanation:
              "A castidade educa o coração para amar com liberdade, respeito ao tempo certo e fidelidade (Ct 2,7; CIC 2348).",
          },
          {
            prompt:
              "Por que Cântico 8,7 diz que ninguém pode comprar o amor com todas as riquezas de sua casa?",
            options: [
              "Porque o amor autêntico é dom livre e gratuito da pessoa, nunca mercadoria",
              "Porque pessoas pobres não sabem amar",
              "Porque presentes de casamento são proibidos",
              "Porque a poesia exagerou sem sentido",
            ],
            answer: 0,
            explanation:
              "O amor verdadeiro exige entrega livre de si mesmo, impossível de reduzir a interesse ou compra (CIC 1646, 2337).",
          },
        ],
      },
      {
        id: "cristo-esposo-igreja",
        title: "Cristo, Esposo fiel da Igreja",
        emoji: "⛪",
        xp: 20,
        teachings: [
          {
            title: "Do amor humano ao amor de Deus pela alma e pela Igreja",
            text: "Na Tradição judaica e cristã, o Cântico dos Cânticos também canta a aliança apaixonada de Deus com seu povo e de Cristo Esposo com a Igreja sua Esposa.",
            example: "Rezar sabendo que Jesus busca nosso coração com amor pessoal e fiel.",
            source: "Ef 5,25-32 · CIC 796, 1612",
          },
          {
            title: "Eis a voz do meu Amado",
            text: "Os santos e místicos da Igreja — como São Bernardo, Santa Teresa e São João da Cruz — meditaram o Cântico para expressar o desejo da alma de encontrar Jesus na oração.",
            example:
              "Responder prontamente aos pequenos convites interiores de Deus para rezar e fazer o bem.",
            source: "Ct 2,8-14; Ap 3,20 · CIC 2560, 2709",
          },
          {
            title: "As núpcias eternas do Cordeiro",
            text: "A Bíblia abre com o casamento da criação no Gênesis, passa pelo Cântico e culmina no Apocalipse com as bodas eternas de Cristo e da Igreja no céu.",
            example:
              "Participar da Eucaristia já como antecipação do banquete de comunhão com Cristo.",
            source: "Ap 19,7-9 · CIC 796, 1402",
          },
        ],
        questions: [
          {
            prompt:
              "Como os Padres da Igreja e os santos leem espiritualmente o Cântico dos Cânticos?",
            options: [
              "Como imagem da aliança amorosa entre Cristo Esposo, a Igreja e cada alma fiel",
              "Apenas como tratado agrícola",
              "Como texto contrário à oração contemplativa",
              "Como história militar",
            ],
            answer: 0,
            explanation:
              "A Igreja reconhece no Cântico a expressão poética da comunhão esponsal entre Cristo e sua Igreja (CIC 796, 1612).",
          },
          {
            prompt:
              "Que cena do Novo Testamento usa a mesma imagem das bodas entre Cristo e a Igreja?",
            options: [
              "O banquete das núpcias do Cordeiro em Efésios 5 e Apocalipse 19",
              "A fuga de Jonas",
              "O censo de César Augusto",
              "A prisão de João Batista",
            ],
            answer: 0,
            explanation:
              "São Paulo e o Apocalipse apresentam Cristo amando a Igreja como sua Esposa pura até o banquete eterno (CIC 796, 1402).",
          },
          {
            prompt: "Qual é o convite de Apocalipse 3,20 que ecoa o chamado do Amado no Cântico?",
            options: [
              "Eis que estou à porta e bato; se alguém abrir, entrarei e cearei com ele",
              "Fechem as janelas para o inverno",
              "Construam outro templo longe",
              "Esqueçam o passado",
            ],
            answer: 0,
            explanation:
              "Cristo bate com delicadeza à porta da nossa liberdade esperando nossa abertura amorosa na fé (CIC 2560).",
          },
        ],
      },
      {
        id: "fidelidade-paciencia-amor",
        title: "Cuidar das pequenas raposas no jardim do amor",
        emoji: "🦊",
        xp: 20,
        teachings: [
          {
            title: "Apanhar as pequenas raposas que destroem as vinhas",
            text: "Uma imagem encantadora do Cântico (2,15) pede para capturar 'as pequenas raposas que estragam a vinha em flor'. Pequenos descuidos, ironias e friezas desgastam o amor se ignorados.",
            example:
              "Corrigir logo pequenas grosserias, falta de escuta ou uso excessivo de telas durante conversas em casa.",
            source: "Ct 2,15 · CIC 1644, 1863",
          },
          {
            title: "Procurar quando parece ausente",
            text: "No Cântico, quando a amada perde de vista o amado na noite, não cruza os braços: levanta-se e sai à procura até encontrá-lo. A oração também exige busca ativa.",
            example:
              "Nos períodos em que Deus parecer distante, intensificar com calma a busca na Palavra e nos sacramentos.",
            source: "Ct 3,1-4 · CIC 2560, 2728",
          },
          {
            title: "O selo sobre o coração",
            text: "'Põe-me como selo sobre o teu coração' pede unidade entre afeto e ações concretas: amar não só em palavras, mas gravando o bem no agir diário.",
            example:
              "Transformar promessas bonitas feitas a Deus e à família em gestos fiéis durante a semana.",
            source: "Ct 8,6 · CIC 1646, 1825",
          },
        ],
        questions: [
          {
            prompt:
              "O que simbolizam 'as pequenas raposas que estragam as vinhas' na vida espiritual e familiar?",
            options: [
              "Animais proibidos na fazenda",
              "Pequenos descuidos, egoísmos ou maus hábitos que, se tolerados, corroem o amor",
              "Grandes tempestades no mar",
              "Amigos verdadeiros",
            ],
            answer: 1,
            explanation:
              "Assim como pequenas faltas não combatidas enfraquecem a caridade, pequenos descuidos desgastam a comunhão (Ct 2,15; CIC 1863).",
          },
          {
            prompt: "Que atitude ensina a cena da busca noturna em Cântico 3?",
            options: [
              "Desistir da oração ao primeiro sinal de aridez",
              "Perseverar buscando o Senhor ativamente mesmo nas noites de aparente ausência",
              "Dormir sem rezar nunca mais",
              "Substituir Deus por distrações",
            ],
            answer: 1,
            explanation:
              "O desejo orante persevera na procura amorosa de Cristo mesmo nos momentos de obscuridade (CIC 2560, 2728).",
          },
          {
            prompt:
              "Por que o versículo 'Põe-me como selo sobre o teu coração e sobre o teu braço' une dois símbolos?",
            options: [
              "Para unir a afeição íntima do coração com a fidelidade concreta das obras do braço",
              "Apenas por rima musical",
              "Para proibir anéis de casamento",
              "Para separar pensamento de atitude",
            ],
            answer: 0,
            explanation:
              "O amor verdadeiro une o interior do coração e a fidelidade visível nas obras concretas (Ct 8,6; CIC 1825).",
          },
        ],
      },
    ],
  },
  {
    id: "eclesiastes-eclesiastico",
    title: "Eclesiastes e Eclesiástico: Sentido do Tempo",
    emoji: "⏳",
    lessons: [
      {
        id: "eclesiastes-tempo",
        title: "Eclesiastes: tudo tem seu tempo debaixo do céu",
        emoji: "🕰️",
        xp: 20,
        teachings: [
          {
            title: "Vaidade das vaidades sem Deus",
            text: "O livro do Eclesiastes (Qohelet) mostra honestamente que dinheiro, prazer, prestígio e até ciência humana, quando buscados sem Deus, deixam o coração vazio como quem corre atrás do vento.",
            example:
              "Perceber que nenhuma compra ou curtida nas redes sociais consegue dar sentido eterno ao coração.",
            source: "Ecl 1,2; 2,11 · CIC 27, 2544",
          },
          {
            title: "Há um tempo para cada coisa",
            text: "Tempo de plantar e colher, chorar e rir, calar e falar: Deus ordenou os tempos humanos com beleza e espera que saibamos viver o presente com sabedoria.",
            example:
              "Respeitar o tempo de trabalhar, o tempo de descansar em família e o tempo sagrado de orar.",
            source: "Ecl 3,1-11 · CIC 302, 2172",
          },
          {
            title: "O resumo de tudo: teme a Deus e guarda seus mandamentos",
            text: "Depois de investigar todos os caminhos terrenos, Qohelet conclui: a alegria simples de cada dia é dom de Deus para quem o reverencia e vive na retidão.",
            example:
              "Agradecer o almoço simples, o trabalho honesto e o descanso como presentes das mãos de Deus.",
            source: "Ecl 12,13 · CIC 27, 1722",
          },
        ],
        questions: [
          {
            prompt: "O que significa a famosa expressão do Eclesiastes 'Vaidade das vaidades'?",
            options: [
              "Que não devemos escovar os cabelos",
              "Que bens passageiros e glória humana, sem Deus, são fugazes como sopro e não saciam o coração",
              "Que a vida humana não tem valor algum",
              "Que devemos abandonar toda alegria legítima",
            ],
            answer: 1,
            explanation:
              "Feito para Deus, o coração humano fica inquieto e vazio quando tenta se saciar apenas em bens efêmeros (CIC 27, 2544).",
          },
          {
            prompt: "Qual é a conclusão final do livro do Eclesiastes em 12,13?",
            options: [
              "Aproveitar sem limites morais",
              "Temer a Deus com reverência e guardar os seus mandamentos",
              "Nunca trabalhar",
              "Desprezar a família",
            ],
            answer: 1,
            explanation:
              "Todo o ser humano encontra seu eixo verdadeiro na reverência amorosa a Deus e na fidelidade moral (Ecl 12,13; CIC 1722).",
          },
          {
            prompt: "O que o poema 'Há um tempo para tudo' em Eclesiastes 3 nos ajuda a viver?",
            options: [
              "Aceitar com serenidade e sabedoria as estações alegres e difíceis da vida nas mãos de Deus",
              "Procrastinar para sempre as obrigações",
              "Rejeitar o consolo no luto",
              "Falar o tempo inteiro sem ouvir",
            ],
            answer: 0,
            explanation:
              "Deus faz tudo belo no seu tempo e convida a confiar em sua sabedoria ao atravessar cada estação da vida (Ecl 3,11; CIC 302).",
          },
        ],
      },
      {
        id: "eclesiastico-humildade",
        title: "Eclesiástico (Ben Sirac): humildade e temor de Deus",
        emoji: "📜",
        xp: 20,
        teachings: [
          {
            title: "Se queres servir ao Senhor, prepara-te para a provação",
            text: "O livro do Eclesiástico (Sirácida) adverte com realismo fraterno: como o ouro é provado no fogo, quem caminha com Deus enfrenta provas para fortalecer a fé.",
            example:
              "Não estranhar quando surgem dificuldades logo após decidir levar a vida cristã mais a sério.",
            source: "Eclo 2,1-6 · CIC 164, 2728",
          },
          {
            title: "Quanto maior fores, mais te humilha",
            text: "A grandeza verdadeira diante de Deus não está no orgulho de cargo ou saber, mas na mansidão humilde que atrai o favor divino.",
            example: "Ouvir com atenção um conselho de alguém mais simples ou mais jovem que nós.",
            source: "Eclo 3,17-20 · CIC 2559",
          },
          {
            title: "Honrar os pais e o médico",
            text: "Ben Sirac traz conselhos práticos preciosos: cuidar com paciência dos pais quando perdem a força na velhice e recorrer com gratidão aos médicos, pois Deus criou os remédios.",
            example:
              "Cuidar da saúde com prudência e rezar pelos médicos e profissionais da saúde.",
            source: "Eclo 3,12-16; 38,1-8 · CIC 2218, 2288",
          },
        ],
        questions: [
          {
            prompt: "Qual preparação prática Eclesiástico 2 recomenda a quem deseja servir a Deus?",
            options: [
              "Esperar que nunca haja dificuldades",
              "Preparar o coração para a provação com paciência e confiança firme em Deus",
              "Desistir se sentir cansaço",
              "Evitar compromissos comunitários",
            ],
            answer: 1,
            explanation:
              "Assim como o ouro se purifica no fogo, a provação purifica e fortalece a fé sincera (Eclo 2,5; CIC 164).",
          },
          {
            prompt: "Como Eclesiástico 38 apresenta a medicina e os cuidados com a saúde?",
            options: [
              "Como algo contrário à fé",
              "Com gratidão, reconhecendo que Deus deu sabedoria aos homens e recursos de cura na terra",
              "Como substitutos da oração",
              "Apenas para governantes",
            ],
            answer: 1,
            explanation:
              "Fé e ciência médica colaboram: cuidar da saúde é dever moral razoável unido à oração confiada (Eclo 38,1-9; CIC 2288).",
          },
          {
            prompt: "Qual conselho Eclesiástico 3,18 dá a quem ocupa posições de destaque?",
            options: [
              "Quanto maior fores, mais te humilha em tudo, e encontrarás graça diante de Deus",
              "Exibir superioridade diante dos subordinados",
              "Nunca pedir opinião de ninguém",
              "Esconder suas origens humildes",
            ],
            answer: 0,
            explanation:
              "A humildade protege quem tem autoridade ou talentos da armadilha da soberba (CIC 2559).",
          },
        ],
      },
      {
        id: "amizade-perdao-siracida",
        title: "Eclesiástico: perdoa ao próximo e escolhe bons amigos",
        emoji: "🤝",
        xp: 20,
        teachings: [
          {
            title: "Perdoa a ofensa do próximo antes de pedir perdão",
            text: "Séculos antes do Pai-Nosso, Eclesiástico 28 ensinou com clareza: 'Perdoa a injustiça ao teu próximo; então, quando orares, teus pecados serão perdoados'.",
            example:
              "Deixar ir o ressentimento antigo contra um parente ou colega antes de pedir paz a Deus.",
            source: "Eclo 28,2-5 · CIC 2840, 2844",
          },
          {
            title: "Um amigo fiel é abrigo seguro",
            text: "O livro distingue entre colegas de interesse que somem na crise e o amigo verdadeiro, que vale mais que tesouros e permanece leal na alegria e na dor.",
            example:
              "Ser você mesmo o amigo leal que visita ou liga quando um conhecido passa por dificuldades.",
            source: "Eclo 6,14-17 · CIC 2347",
          },
          {
            title: "Pensar nos novíssimos para evitar o pecado",
            text: "'Em todas as tuas ações lembra-te do teu fim, e jamais pecarás' convida a viver com consciência da eternidade e do encontro com Deus.",
            example:
              "Perguntar diante de uma escolha difícil: 'Como verei essa decisão diante de Deus no fim da vida?'.",
            source: "Eclo 7,36 · CIC 1021, 1038",
          },
        ],
        questions: [
          {
            prompt:
              "Qual ensinamento do Eclesiástico 28 prepara diretamente uma petição do Pai-Nosso?",
            options: [
              "A ligação entre perdoar as ofensas do próximo e receber o perdão de Deus na oração",
              "O pedido por terras extensas",
              "A proibição de comer carne",
              "O jejum de quarenta dias",
            ],
            answer: 0,
            explanation:
              "Eclesiástico 28,2 antecipa a regra evangélica da oração do Pai-Nosso: o rancor fecha o coração ao perdão divino (CIC 2840).",
          },
          {
            prompt: "Como se reconhece um amigo fiel segundo Eclesiástico 6?",
            options: [
              "Ele aparece apenas quando temos sucesso e dinheiro",
              "É proteção firme, leal na hora difícil e ajuda a permanecer no bem",
              "Incentiva o pecado para agradar",
              "Espalha seus segredos aos outros",
            ],
            answer: 1,
            explanation:
              "A amizade virtuosa permanece fiel nas adversidades e aproxima de Deus (Eclo 6,14-17; CIC 2347).",
          },
          {
            prompt:
              "O que significa recordar o próprio fim ('novíssimos') segundo Eclesiástico 7,36?",
            options: [
              "Viver em pânico paralisante",
              "Ter consciência serena do encontro definitivo com Deus para escolher o bem hoje",
              "Desprezar os deveres presentes",
              "Fugir da família",
            ],
            answer: 1,
            explanation:
              "A memória cristã da eternidade ordena nossas prioridades presentes para o amor e a santidade (CIC 1021, 1038).",
          },
        ],
      },
    ],
  },
  {
    id: "livro-sabedoria",
    title: "Livro da Sabedoria e Vida Eterna",
    emoji: "✨",
    lessons: [
      {
        id: "sabedoria-criacao-amor",
        title: "Deus ama tudo o que existe",
        emoji: "🌍",
        xp: 20,
        teachings: [
          {
            title: "Deus criou tudo porque ama, nada por ódio",
            text: "O livro da Sabedoria proclama uma das declarações mais belas de toda a Bíblia: 'Amas tudo o que existe e nada detestas do que fizeste; poupas tudo porque tudo é teu, Senhor amigo da vida!'.",
            example:
              "Olhar para a própria vida e para cada pessoa ao redor como algo amado e querido por Deus.",
            source: "Sb 11,24-26 · CIC 293-294, 301",
          },
          {
            title: "Pela grandeza das criaturas contemplar o Criador",
            text: "Diante do céu estrelado, da força dos ventos e da beleza da terra, a razão humana pode reconhecer por analogia a beleza ainda maior do Criador.",
            example:
              "Parar diante de um pôr do sol ou paisagem bonita para louvar a criatividade de Deus.",
            source: "Sb 13,1-5 · CIC 32, 341",
          },
          {
            title: "Deus não criou a morte",
            text: "Deus criou o ser humano para a incorruptibilidade e a vida; foi pela inveja do diabo que a morte entrou no mundo e ameaça quem segue o mal.",
            example:
              "Defender e cuidar da vida humana em todas as suas fases como aliada do 'Senhor amigo da vida'.",
            source: "Sb 1,13; 2,23-24 · CIC 391, 1008",
          },
        ],
        questions: [
          {
            prompt:
              "Por que motivo Deus conserva e sustenta todas as criaturas segundo Sabedoria 11,24?",
            options: [
              "Por obrigação externa",
              "Porque ama tudo o que existe e é amigo da vida",
              "Porque esqueceu de encerrar o universo",
              "Apenas para julgar os fracos",
            ],
            answer: 1,
            explanation:
              "O amor criador e gratuito de Deus mantém cada criatura na existência a cada instante (Sb 11,24-26; CIC 301).",
          },
          {
            prompt: "O que ensina Sabedoria 13,5 sobre o conhecimento de Deus através da criação?",
            options: [
              "Que a natureza não diz nada sobre Deus",
              "Que pela grandeza e beleza das criaturas pode-se conhecer por analogia o Criador",
              "Que devemos adorar o sol e as estrelas",
              "Que só cientistas conhecem a Deus",
            ],
            answer: 1,
            explanation:
              "A beleza e a ordem do universo refletem a sabedoria e beleza infinitas de seu Criador (Sb 13,5; CIC 32, 341).",
          },
          {
            prompt:
              "Segundo Sabedoria 1,13 e 2,24, a morte fazia parte do plano original desejado por Deus para o homem?",
            options: [
              "Não; Deus fez o homem para a vida incorruptível, e a morte entrou pela inveja do maligno e pelo pecado",
              "Sim, Deus criou a morte antes da luz",
              "Sim, Deus detesta suas criaturas",
              "Não existem anjos caídos",
            ],
            answer: 0,
            explanation:
              "Embora o corpo seja mortal na ordem física, Deus destinara o homem à imortalidade pela graça; a morte como salário do pecado entrou pela queda (CIC 391, 1008).",
          },
        ],
      },
      {
        id: "almas-justos-maos-deus",
        title: "As almas dos justos estão nas mãos de Deus",
        emoji: "🤲",
        xp: 20,
        teachings: [
          {
            title: "Aos olhos dos insensatos parecem ter morrido, mas estão em paz",
            text: "Sabedoria 3,1-9 consola quem sofre luto ou injustiça: os justos passam por provas breves, como ouro no crisol, mas suas almas estão nas mãos de Deus e nenhum tormento as atingirá.",
            example: "Meditar Sabedoria 3,1-9 ao rezar por familiares queridos falecidos.",
            source: "Sb 3,1-9 · CIC 992, 1020",
          },
          {
            title: "A retidão vale mais que uma vida longa sem Deus",
            text: "A verdadeira plenitude não se mede apenas pelo número de anos no calendário, mas pela maturidade no amor e fidelidade a Deus.",
            example: "Aproveitar o tempo presente para amar mais hoje em vez de adiar o bem.",
            source: "Sb 4,8-9 · CIC 1021",
          },
          {
            title: "Uma esperança cheia de imortalidade",
            text: "Este livro ilumina a transição entre o Antigo e o Novo Testamento, preparando a fé plena na vida eterna trazida pela Ressurreição de Cristo.",
            example:
              "Enfrentar a perda de entes queridos com lágrimas humanas sinceras, mas nunca como quem não tem esperança.",
            source: "Sb 3,4; 1Ts 4,13 · CIC 992, 1681",
          },
        ],
        questions: [
          {
            prompt: "Onde estão as almas dos justos segundo Sabedoria 3,1?",
            options: [
              "Perdidas no esquecimento",
              "Nas mãos de Deus, em paz e esperança cheia de imortalidade",
              "Presas na terra para sempre",
              "Dependentes de amuletos",
            ],
            answer: 1,
            explanation:
              "A Igreja lê Sabedoria 3 especialmente na liturgia dos santos e dos fiéis falecidos, proclamando a paz eterna com Deus (CIC 992, 1020).",
          },
          {
            prompt: "Como Sabedoria 3,6 descreve as provações sofridas pelos justos na terra?",
            options: [
              "Como sinal de abandono por Deus",
              "Como ouro provado no crisol e acolhido por Deus como oferta agradável",
              "Como castigo sem sentido",
              "Como derrota definitiva",
            ],
            answer: 1,
            explanation:
              "As dificuldades vividas em união com Deus purificam a fé como o ouro no fogo (Sb 3,5-6; CIC 164, 1502).",
          },
          {
            prompt: "Qual é a fonte última de nossa esperança cristã diante da morte?",
            options: [
              "O esquecimento gradual",
              "Cristo morto e ressuscitado, que abre a comunhão eterna com o Pai",
              "Apenas o esforço próprio",
              "O medo",
            ],
            answer: 1,
            explanation:
              "A morte cristã tem sentido pascal positivo porque em Cristo passamos para a vida que não termina (CIC 1010, 1681).",
          },
        ],
      },
      {
        id: "sabedoria-divina-espirito",
        title: "A Sabedoria que renova todas as coisas",
        emoji: "🌬️",
        xp: 20,
        teachings: [
          {
            title: "Reflexo da luz eterna e amiga dos homens",
            text: "Em Sabedoria 7, a Sabedoria divina é descrita como sopro do poder de Deus, espelho sem mancha e fonte de todas as virtudes: temperança, prudência, justiça e fortaleza.",
            example:
              "Pedir a Deus o dom da Sabedoria para enxergar pessoas e acontecimentos com os olhos dele.",
            source: "Sb 7,25-27; 8,7 · CIC 216, 1805, 1831",
          },
          {
            title: "De geração em geração passa às almas santas",
            text: "A Sabedoria forma amigos de Deus e profetas em cada época, ligando o Espírito Santo que nos guia hoje à mesma luz que inspirou os antigos justos.",
            example:
              "Ler a vida de santos de séculos diferentes percebendo a mesma ação do Espírito Santo.",
            source: "Sb 7,27 · CIC 688, 705",
          },
          {
            title: "Prece humilde pelo dom do Espírito",
            text: "Em Sabedoria 9, Salomão reconhece que sem a Sabedoria e o Espírito Santo enviados do céu nenhum ser humano compreende o plano de Deus.",
            example:
              "Rezar antes de estudar a Bíblia ou o Catecismo: 'Enviai, Senhor, o vosso Espírito de sabedoria!'.",
            source: "Sb 9,9-17 · CIC 2580, 2670",
          },
        ],
        questions: [
          {
            prompt: "Que lista famosa de quatro virtudes aparece claramente em Sabedoria 8,7?",
            options: [
              "Riqueza, fama, força física e sorte",
              "Temperança, prudência, justiça e fortaleza",
              "Orgulho, pressa, medo e dúvida",
              "Apenas estudo de línguas",
            ],
            answer: 1,
            explanation:
              "O Catecismo cita Sabedoria 8,7 ao apresentar as quatro virtudes cardeais ensinadas pela Sabedoria divina (CIC 1805).",
          },
          {
            prompt:
              "Por que Sabedoria 9,17 pede que Deus envie do alto a Sabedoria e o seu Santo Espírito?",
            options: [
              "Porque sem a luz do Espírito o ser humano não conhece plenamente os desígnios de Deus",
              "Para dispensar a leitura das Escrituras",
              "Para ganhar competições terrenas",
              "Porque Deus está longe do universo",
            ],
            answer: 0,
            explanation:
              "A fé e a compreensão profunda dos mistérios de Deus são dons da graça e do Espírito Santo (CIC 153, 2670).",
          },
          {
            prompt:
              "Como o Novo Testamento retoma as imagens de Sabedoria 7 sobre o 'esplendor da luz eterna'?",
            options: [
              "Aplicando-as a Jesus Cristo, Palavra e Sabedoria eterna do Pai (Hb 1,3; Cl 1,15)",
              "Esquecendo o texto completamente",
              "Aplicando-as ao templo de Roma",
              "Aplicando-as apenas ao clima",
            ],
            answer: 0,
            explanation:
              "A Carta aos Hebreus e São Paulo reconhecem em Jesus o resplendor da glória do Pai e a Sabedoria encarnada (CIC 241, 472).",
          },
        ],
      },
    ],
  },
];
