import type { LessonUnit } from "./lesson-types";

// Conteúdos catequéticos completos sobre os 10 Mandamentos, 7 Sacramentos,
// 5 Mandamentos da Igreja, 7 Dons do Espírito Santo e 7 Pecados Capitais.
// Fontes: Bíblia Sagrada e Catecismo da Igreja Católica (CIC).
export const CATECHESIS_EXPANSION_UNITS: LessonUnit[] = [
  {
    id: "dez-mandamentos",
    title: "Os Dez Mandamentos",
    emoji: "📜",
    lessons: [
      {
        id: "mandamentos-deus",
        title: "Amar a Deus (1º ao 3º Mandamento)",
        emoji: "🙏",
        xp: 20,
        teachings: [
          {
            title: "1º: Amar a Deus sobre todas as coisas",
            text: "O primeiro mandamento nos chama a crer em Deus, esperar nele e amá-lo acima de tudo. Adoração é devida somente a Deus; por isso rejeitamos a idolatria e a superstição.",
            example:
              "Antes de decisões importantes, confiar na oração a Deus em vez de recorrer a horóscopos, amuletos ou buscar segurança absoluta no dinheiro.",
            illustration: "tablets-god",
            source: "Ex 20,2-5 · CIC 2083-2117",
          },
          {
            title: "2º: Não tomar seu santo nome em vão",
            text: "O nome de Deus é santo. Esse mandamento pede reverência ao falar de Deus, cumprir promessas feitas em seu nome e evitar blasfêmias ou juramentos levianos.",
            example:
              "Falar o nome de Jesus com respeito na oração e evitar usá-lo como expressão de raiva ou piada.",
            illustration: "tablets-god",
            source: "Ex 20,7 · CIC 2142-2155",
          },
          {
            title: "3º: Guardar domingos e festas de guarda",
            text: "O domingo celebra a Ressurreição de Cristo. A Igreja nos convida a participar da Santa Missa dominical e reservar tempo para o descanso, a família e a caridade.",
            example:
              "Organizar o fim de semana para ir à Missa com a comunidade e almoçar com calma em família, descansando do trabalho.",
            illustration: "tablets-god",
            source: "Ex 20,8-11 · CIC 2168-2188",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Relacione os três primeiros mandamentos",
            instruction: "Ligue cada mandamento ao exemplo que o coloca em prática no dia a dia.",
            pairs: [
              {
                id: "m1",
                left: "1º Mandamento",
                right: "Adorar só a Deus e rejeitar superstições",
              },
              { id: "m2", left: "2º Mandamento", right: "Pronunciar o nome de Deus com respeito" },
              {
                id: "m3",
                left: "3º Mandamento",
                right: "Participar da Missa e descansar no domingo",
              },
            ],
            explanation:
              "Os três primeiros mandamentos orientam diretamente nossa relação de amor, reverência e culto a Deus (CIC 2067, 2083-2188).",
            source: "CIC 2067, 2083-2188",
          },
        ],
        questions: [
          {
            prompt: "O que o 1º Mandamento pede em relação a Deus?",
            options: [
              "Temer Deus como um tirano",
              "Adorá-lo acima de todas as coisas",
              "Rezar apenas nos momentos difíceis",
              "Confiar em amuletos da sorte",
            ],
            answer: 1,
            explanation:
              "O 1º Mandamento ordena crer, esperar e amar a Deus sobre todas as coisas, adorando somente a Ele (CIC 2083-2097).",
          },
          {
            prompt: "Qual atitude fere o 2º Mandamento?",
            options: [
              "Louvar a Deus na liturgia",
              "Cumprir uma promessa justa",
              "Usar o nome de Deus de modo leviano ou em blasfêmia",
              "Fazer o Sinal da Cruz com fé",
            ],
            answer: 2,
            explanation:
              "O 2º Mandamento proíbe o abuso do nome de Deus, a blasfêmia e o juramento falso (CIC 2146-2150).",
          },
          {
            prompt: "Por que o domingo é santificado pelos cristãos segundo o 3º Mandamento?",
            options: [
              "Porque é o dia da Ressurreição de Cristo",
              "Porque é proibido fazer o bem nesse dia",
              "Apenas por costume civil",
              "Para substituir todos os outros dias de oração",
            ],
            answer: 0,
            explanation:
              "O domingo é o dia da Ressurreição do Senhor, celebrado especialmente pela Eucaristia e pelo descanso (CIC 2174-2185).",
          },
        ],
      },
      {
        id: "mandamentos-familia-vida",
        title: "Família, vida e pureza (4º ao 6º)",
        emoji: "🏡",
        xp: 20,
        teachings: [
          {
            title: "4º: Honrar pai e mãe",
            text: "Deus quer que tratemos nossos pais com amor, gratidão, respeito e cuidado, inclusive na velhice. Também ensina respeito às autoridades legítimas que servem ao bem comum.",
            example:
              "Ouvir os conselhos dos pais, ajudar nas tarefas de casa e cuidar deles com carinho quando envelhecem.",
            illustration: "tablets-neighbor",
            source: "Ex 20,12 · CIC 2196-2233",
          },
          {
            title: "5º: Não matar",
            text: "Toda vida humana é sagrada desde a concepção até a morte natural. Esse mandamento protege a vida, rejeita a violência e a vingança, e pede o cuidado com a saúde e a paz.",
            example:
              "Perdoar quem nos ofendeu, evitar brigas e defender a dignidade das pessoas vulneráveis.",
            illustration: "tablets-neighbor",
            source: "Ex 20,13 · Mt 5,21-24 · CIC 2258-2306",
          },
          {
            title: "6º: Guardar a pureza e a fidelidade",
            text: "Não cometer adultério chama todos à castidade, que é integrar a sexualidade no amor verdadeiro e no respeito pela dignidade própria e do outro, com fidelidade no matrimônio.",
            example:
              "Tratar as pessoas com respeito, fugir de conteúdos que rebaixam a dignidade humana e viver o namoro ou o casamento com fidelidade.",
            illustration: "tablets-neighbor",
            source: "Ex 20,14 · CIC 2331-2365",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Conecte mandamento e atitude cristã",
            instruction: "Associe o 4º, o 5º e o 6º mandamento aos valores que eles protegem.",
            pairs: [
              {
                id: "m4",
                left: "4º Mandamento",
                right: "Gratidão, respeito e cuidado com os pais",
              },
              {
                id: "m5",
                left: "5º Mandamento",
                right: "Defesa da vida humana e construção da paz",
              },
              {
                id: "m6",
                left: "6º Mandamento",
                right: "Castidade, respeito ao corpo e fidelidade",
              },
            ],
            explanation:
              "Do 4º ao 6º mandamento, Deus protege a família, o dom sagrado da vida e o amor verdadeiro (CIC 2196-2365).",
            source: "CIC 2196-2365",
          },
        ],
        questions: [
          {
            prompt: "O que significa honrar pai e mãe no 4º Mandamento?",
            options: [
              "Apenas morar na mesma casa",
              "Amar, respeitar e cuidar dos pais ao longo da vida",
              "Obedecer mesmo a ordens injustas contra Deus",
              "Desconsiderar os mais velhos",
            ],
            answer: 1,
            explanation:
              "Honrar os pais inclui respeito, gratidão e amparo material e moral, especialmente na velhice (CIC 2214-2218).",
          },
          {
            prompt: "Além de proibir o homicídio, o 5º Mandamento pede…",
            options: [
              "Indiferença com o próximo",
              "Guarda de rancor silencioso",
              "Promoção da paz, perdão e cuidado com a vida",
              "Vingança proporcional",
            ],
            answer: 2,
            explanation:
              "Jesus ensina que até o ódio fere o 5º Mandamento; somos chamados à reconciliação e à paz (Mt 5,21-24; CIC 2302).",
          },
          {
            prompt: "Qual virtude o 6º Mandamento propõe a todos os cristãos?",
            options: [
              "Castidade, vivida segundo o estado de vida",
              "Desconfiança no amor",
              "Isolamento completo da família",
              "Uso egoísta das pessoas",
            ],
            answer: 0,
            explanation:
              "Todos os batizados são chamados à castidade, vivida no respeito e na doação sincera de si (CIC 2348-2349).",
          },
        ],
      },
      {
        id: "mandamentos-justica-verdade",
        title: "Justiça, verdade e coração (7º ao 10º)",
        emoji: "⚖️",
        xp: 20,
        teachings: [
          {
            title: "7º: Não furtar e viver a justiça",
            text: "Proíbe roubar, fraudar ou reter bens alheios injustamente. Convida à honestidade no trabalho, ao pagamento justo, ao cuidado com os pobres e à restituição do que foi tirado.",
            example:
              "Devolver o troco errado que recebeu a mais e cumprir honestamente o trabalho combinado.",
            illustration: "tablets-heart",
            source: "Ex 20,15 · CIC 2401-2449",
          },
          {
            title: "8º: Não levantar falso testemunho",
            text: "Chama à verdade, à lealdade e à guarda da boa fama do próximo. Por isso proíbe mentira, calúnia, difamação e fofocas que destroem a reputação dos outros.",
            example:
              "Não repassar boatos sem saber se são verdadeiros e defender quem está sendo julgado injustamente.",
            illustration: "tablets-heart",
            source: "Ex 20,16 · CIC 2464-2487",
          },
          {
            title: "9º e 10º: Pureza do coração e desprendimento",
            text: "Os dois últimos mandamentos olham para dentro do coração: o 9º pede pureza nos desejos afetivos; o 10º combate a inveja e a cobiça pelos bens do próximo, ensinando gratidão.",
            example:
              "Alegrar-se com a conquista de um amigo em vez de sentir inveja ou desejar o que pertence a outra família.",
            illustration: "tablets-heart",
            source: "Ex 20,17 · Mt 5,28 · CIC 2514-2550",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Prática dos mandamentos finais",
            instruction:
              "Classifique cada atitude entre fiel ao Evangelho ou contrária aos mandamentos 7º ao 10º.",
            categories: ["Fidelidade ao bem", "Falta contra o mandamento"],
            items: [
              { id: "c1", text: "Devolver um objeto perdido ao dono", category: 0 },
              { id: "c2", text: "Espalhar fofoca para prejudicar um colega", category: 1 },
              { id: "c3", text: "Alegrar-se com o sucesso do próximo", category: 0 },
              { id: "c4", text: "Adulterar notas ou fraudar um contrato", category: 1 },
            ],
            explanation:
              "Honestidade (7º), verdade (8º) e retidão do coração (9º e 10º) constroem comunidades justas e fraternas (CIC 2401-2550).",
            source: "CIC 2401-2550",
          },
        ],
        questions: [
          {
            prompt: "O que exige o 7º Mandamento além de não roubar?",
            options: [
              "Acumular bens sem partilhar",
              "Honestidade, justiça e restituição do que é devido",
              "Desprezar o trabalho humano",
              "Esconder falhas em negócios",
            ],
            answer: 1,
            explanation:
              "O 7º Mandamento ordena a justiça, a caridade na gestão dos bens e a reparação da injustiça cometida (CIC 2407, 2412).",
          },
          {
            prompt:
              "Contar defeitos reais de alguém sem necessidade justa para manchar sua fama é…",
            options: [
              "Sinceridade virtuosa",
              "Maledicência, contrária ao 8º Mandamento",
              "Conselho fraterno",
              "Caridade",
            ],
            answer: 1,
            explanation:
              "Tanto a calúnia (mentira) quanto a maledicência (expor faltas sem motivo válido) ferem o 8º Mandamento (CIC 2477).",
          },
          {
            prompt: "O que o 10º Mandamento combate diretamente no coração?",
            options: [
              "A alegria pelos dons alheios",
              "A inveja e a cobiça desordenada dos bens dos outros",
              "O planejamento do orçamento familiar",
              "O trabalho honesto",
            ],
            answer: 1,
            explanation:
              "O 10º Mandamento proíbe a avidez, a cobiça e a inveja pela riqueza ou bens do próximo (CIC 2534-2539).",
          },
        ],
      },
    ],
  },
  {
    id: "sete-sacramentos",
    title: "Os Sete Sacramentos",
    emoji: "💧",
    lessons: [
      {
        id: "sacramentos-iniciacao-detalhe",
        title: "Iniciação: Batismo, Crisma e Eucaristia",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "Batismo: água e Palavra que geram vida nova",
            text: "No Batismo, a imersão ou infusão com água acompanhada da fórmula trinitária apaga o pecado original e os pecados pessoais, fazendo-nos filhos de Deus e membros da Igreja.",
            example:
              "Assim como o nascimento nos dá a vida natural, o Batismo é o novo nascimento espiritual que inicia nossa caminhada cristã.",
            illustration: "sacraments-initiation",
            source: "Jo 3,5 · Mt 28,19 · CIC 1213-1245",
          },
          {
            title: "Crisma: óleo do crisma e força do Espírito",
            text: "Pela unção com o santo crisma na fronte e a imposição das mãos do bispo (ou sacerdote delegado), o crismando recebe a plenitude dos dons do Espírito Santo para testemunhar Cristo.",
            example:
              "Um jovem crismado que passa a servir na comunidade e explica sua fé com serenidade e coragem.",
            illustration: "sacraments-initiation",
            source: "At 8,14-17 · CIC 1285-1305",
          },
          {
            title: "Eucaristia: pão e vinho consagrados",
            text: "Pela oração eucarística e as palavras de Cristo, o pão de trigo e o vinho de uva tornam-se o Corpo e o Sangue do Senhor. É o alimento espiritual que nos une a Jesus e aos irmãos.",
            example:
              "Participar da Missa em estado de graça, receber a comunhão com recolhimento e levar essa caridade para a semana.",
            illustration: "sacraments-initiation",
            source: "Mt 26,26-28 · CIC 1322-1405",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Sinais dos sacramentos da iniciação",
            instruction: "Relacione cada sacramento ao sinal sensível que o caracteriza.",
            pairs: [
              { id: "si1", left: "Batismo", right: "Água e invocação da Santíssima Trindade" },
              {
                id: "si2",
                left: "Crisma",
                right: "Unção com o óleo do crisma e imposição das mãos",
              },
              {
                id: "si3",
                left: "Eucaristia",
                right: "Pão e vinho consagrados no Corpo e Sangue de Cristo",
              },
            ],
            explanation:
              "Cada sacramento une um sinal visível instituído por Cristo à graça invisível que ele realiza (CIC 1131, 1212).",
            source: "CIC 1212-1375",
          },
        ],
        questions: [
          {
            prompt: "Quais são os três sacramentos da iniciação cristã?",
            options: [
              "Batismo, Confissão e Ordem",
              "Batismo, Crisma e Eucaristia",
              "Crisma, Matrimônio e Unção",
              "Eucaristia, Ordem e Confissão",
            ],
            answer: 1,
            explanation:
              "Os fundamentos de toda vida cristã lançam-se no Batismo, na Confirmação (Crisma) e na Eucaristia (CIC 1212).",
          },
          {
            prompt: "Qual é o óleo perfumado usado na unção da Crisma?",
            options: [
              "Óleo de oliva comum sem bênção",
              "Santo Crisma consagrado pelo bispo",
              "Água benta",
              "Incenso",
            ],
            answer: 1,
            explanation:
              "O sacramento da Confirmação confere-se pela unção com o santo crisma e imposição das mãos (CIC 1300).",
          },
          {
            prompt: "Por que a Eucaristia é chamada “fonte e ápice da vida cristã”?",
            options: [
              "Porque contém o próprio Cristo, nossa Páscoa",
              "Porque substitui o Batismo",
              "Porque só acontece uma vez na vida",
              "Porque é apenas um símbolo cultural",
            ],
            answer: 0,
            explanation:
              "Na Eucaristia está contido todo o tesouro espiritual da Igreja: o próprio Cristo (CIC 1324).",
          },
        ],
      },
      {
        id: "sacramentos-cura-detalhe",
        title: "Cura: Confissão e Unção dos Enfermos",
        emoji: "🤍",
        xp: 20,
        teachings: [
          {
            title: "Os passos de uma boa Confissão",
            text: "O sacramento da Penitência (Confissão) pede: exame de consciência, contrição (arrependimento), propósito de não pecar, confissão dos pecados ao padre e cumprimento da penitência.",
            example:
              "Fazer um breve exame do dia ou da semana antes de ir ao confessionário, pedindo a Deus humildade e sinceridade.",
            illustration: "sacraments-healing",
            source: "Jo 20,21-23 · CIC 1450-1460",
          },
          {
            title: "A graça da absolvição",
            text: "Quando o sacerdote diz “Eu te absolvo dos teus pecados”, é o próprio Cristo que perdoa, devolve a paz interior e reconcilia o fiel com Deus e com a Igreja.",
            example:
              "Sair do confessionário reconciliado, com o coração leve e pronto para reparar qualquer dano causado.",
            illustration: "sacraments-healing",
            source: "2Cor 5,18 · CIC 1468-1470",
          },
          {
            title: "Unção dos Enfermos: amparo na fragilidade",
            text: "Ungindo a fronte e as mãos do enfermo com o óleo dos enfermos, o sacerdote reza pela força espiritual, serenidade, perdão dos pecados e alívio do doente.",
            example:
              "Chamar o padre para visitar um avô internado ou idoso em casa, levando conforto espiritual a toda a família.",
            illustration: "sacraments-healing",
            source: "Tg 5,14-15 · CIC 1511-1525",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Atitudes nos sacramentos de cura",
            instruction:
              "Classifique cada elemento de acordo com o sacramento de cura correspondente.",
            categories: ["Confissão (Reconciliação)", "Unção dos Enfermos"],
            items: [
              { id: "sc1", text: "Exame de consciência e contrição", category: 0 },
              { id: "sc2", text: "Óleo dos enfermos na fronte e nas mãos", category: 1 },
              { id: "sc3", text: "Absolvição sacramental e penitência", category: 0 },
              { id: "sc4", text: "Conforto em doença grave ou velhice", category: 1 },
            ],
            explanation:
              "Cristo instituiu a Confissão e a Unção dos Enfermos para curar a alma e confortar o fiel na enfermidade (CIC 1421).",
            source: "CIC 1421, 1450-1525",
          },
        ],
        questions: [
          {
            prompt: "Qual é o ato mais importante do penitente na Confissão?",
            options: [
              "Falar muito rápido",
              "A contrição (arrependimento sincero com propósito de mudar)",
              "Comparar-se com outras pessoas",
              "Escolher só pecados leves",
            ],
            answer: 1,
            explanation:
              "Entre os atos do penitente, ocupa o primeiro lugar a contrição: dor pelo pecado e propósito de não mais pecar (CIC 1451).",
          },
          {
            prompt: "Quem pode ministrar o sacramento da Unção dos Enfermos?",
            options: [
              "Qualquer amigo da família",
              "Somente bispos e padres (presbíteros)",
              "Apenas médicos cristãos",
              "Somente diáconos",
            ],
            answer: 1,
            explanation:
              "Apenas os sacerdotes (bispos e presbíteros) são ministros da Unção dos Enfermos (Tg 5,14; CIC 1516).",
          },
          {
            prompt: "O que a absolvição sacramental produz na alma?",
            options: [
              "Reconciliação com Deus e com a Igreja",
              "Esquecimento mágico de toda responsabilidade",
              "Permissão para repetir o erro",
              "Substituição da oração diária",
            ],
            answer: 0,
            explanation:
              "A absolvição perdoa os pecados, restaura a graça e reconcilia com Deus e com a comunidade eclesial (CIC 1468-1469).",
          },
        ],
      },
      {
        id: "sacramentos-servico-detalhe",
        title: "Serviço: Ordem e Matrimônio",
        emoji: "💍",
        xp: 20,
        teachings: [
          {
            title: "Ordem: pastores a serviço do povo",
            text: "No sacramento da Ordem, homens chamados por Deus recebem a imposição das mãos do bispo para servir como diáconos, presbíteros (padres) ou bispos, agindo em nome de Cristo Cabeça.",
            example:
              "Um padre que celebra a Missa, atende confissões e visita os enfermos da paróquia.",
            illustration: "sacraments-service",
            source: "1Tm 4,14 · CIC 1536-1589",
          },
          {
            title: "Matrimônio: aliança de amor fiel",
            text: "Os próprios noivos batizados são os ministros do Matrimônio ao expressarem livremente o consentimento diante da Igreja. Deus abençoa sua união indissolúvel e fecunda.",
            example:
              "Marido e mulher que rezam juntos, perdoam-se nas dificuldades diárias e educam os filhos na fé.",
            illustration: "sacraments-service",
            source: "Ef 5,25-32 · CIC 1601-1642",
          },
          {
            title: "Vocações complementares",
            text: "Ordem e Matrimônio ordenam-se à salvação dos outros: um edifica o Corpo de Cristo pelo ministério pastoral; o outro edifica a Igreja doméstica na família.",
            example:
              "Paróquia e família caminham juntas: os pais transmitem a fé em casa e os pastores alimentam a comunidade com os sacramentos.",
            illustration: "sacraments-service",
            source: "CIC 1534-1535, 1655-1657",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Os sete sacramentos em três grupos",
            instruction: "Associe cada grupo aos sacramentos que fazem parte dele.",
            pairs: [
              { id: "sg1", left: "Iniciação Cristã", right: "Batismo, Crisma e Eucaristia" },
              {
                id: "sg2",
                left: "Sacramentos de Cura",
                right: "Penitência (Confissão) e Unção dos Enfermos",
              },
              { id: "sg3", left: "Serviço da Comunhão", right: "Ordem e Matrimônio" },
            ],
            explanation:
              "O Catecismo organiza os sete sacramentos em três grandes grupos que acompanham toda a vida cristã (CIC 1211).",
            source: "CIC 1211",
          },
        ],
        questions: [
          {
            prompt:
              "Quem são os ministros que realizam o sacramento do Matrimônio pelo consentimento?",
            options: [
              "Apenas as testemunhas",
              "Os próprios esposos batizados, diante da Igreja",
              "Somente os pais dos noivos",
              "O coral da celebração",
            ],
            answer: 1,
            explanation:
              "Na tradição latina, os próprios esposos conferem mutuamente o sacramento ao manifestarem seu consentimento (CIC 1623).",
          },
          {
            prompt: "Qual é o gesto central na ordenação de bispos, padres e diáconos?",
            options: [
              "A imposição das mãos do bispo e a oração consecratória",
              "A assinatura de um contrato comercial",
              "Uma eleição por maioria simples",
              "A entrega de chaves materiais",
            ],
            answer: 0,
            explanation:
              "O rito essencial da Ordem é a imposição das mãos do bispo sobre a cabeça do ordenando com a oração própria (CIC 1573).",
          },
          {
            prompt: "Por que Ordem e Matrimônio são chamados sacramentos de serviço?",
            options: [
              "Porque são opcionais para a Igreja",
              "Porque conferem missão para edificar a comunhão e o bem dos outros",
              "Porque substituem a Eucaristia",
              "Porque valem apenas por um ano",
            ],
            answer: 1,
            explanation:
              "Ambos os sacramentos ordenam-se especialmente à edificação do Povo de Deus e à missão de serviço (CIC 1534).",
          },
        ],
      },
    ],
  },
  {
    id: "cinco-mandamentos-igreja",
    title: "Os Cinco Mandamentos da Igreja",
    emoji: "⛪",
    lessons: [
      {
        id: "preceitos-igreja-culto",
        title: "Missa, Confissão e Eucaristia (1º ao 3º)",
        emoji: "🕯️",
        xp: 20,
        teachings: [
          {
            title: "Para que existem os Mandamentos da Igreja?",
            text: "Os cinco mandamentos da Igreja garantem o mínimo indispensável no espírito de oração e na vida moral cristã, ajudando o fiel a permanecer unido a Cristo e aos sacramentos.",
            example:
              "Não são o máximo que podemos amar, mas o piso mínimo que sustenta nossa vida espiritual durante o ano inteiro.",
            illustration: "church-precepts-worship",
            source: "CIC 2041",
          },
          {
            title: "1º: Participar da Missa aos domingos e festas",
            text: "O primeiro preceito pede participar da Missa todos os domingos e nos dias santos de guarda (como Natal, Corpus Christi e outras solenidades conforme a conferência episcopal), evitando trabalhos que impeçam o culto.",
            example:
              "Se viajar no fim de semana, procurar o horário da Missa na paróquia local para não perder o encontro com o Senhor.",
            illustration: "church-precepts-worship",
            source: "CIC 2042, 2180",
          },
          {
            title: "2º e 3º: Confissão anual e Comunhão Pascal",
            text: "O 2º pede confessar os pecados ao menos uma vez por ano (e sempre que houver pecado grave antes de comungar). O 3º pede receber a Eucaristia ao menos uma vez no Tempo Pascal.",
            example:
              "Na preparação para a Páscoa, buscar a Confissão com calma para viver a Semana Santa e comungar em paz.",
            illustration: "church-precepts-worship",
            source: "CIC 2042",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Os três primeiros preceitos da Igreja",
            instruction: "Ligue cada preceito da Igreja à sua frequência mínima.",
            pairs: [
              {
                id: "ci1",
                left: "1º Mandamento da Igreja",
                right: "Missa nos domingos e festas de guarda",
              },
              {
                id: "ci2",
                left: "2º Mandamento da Igreja",
                right: "Confissão ao menos uma vez ao ano",
              },
              {
                id: "ci3",
                left: "3º Mandamento da Igreja",
                right: "Comunhão eucarística ao menos pela Páscoa",
              },
            ],
            explanation:
              "Esses três preceitos asseguram a participação constante no sacrifício eucarístico e na reconciliação (CIC 2042).",
            source: "CIC 2041-2042",
          },
        ],
        questions: [
          {
            prompt: "Qual é o objetivo dos Cinco Mandamentos da Igreja?",
            options: [
              "Criar regras burocráticas",
              "Garantir o mínimo necessário na vida de oração e sacramentos",
              "Substituir os Dez Mandamentos",
              "Proibir a alegria cristã",
            ],
            answer: 1,
            explanation:
              "Os preceitos da Igreja situam-se na linha da vida moral e litúrgica, garantindo o mínimo indispensável (CIC 2041).",
          },
          {
            prompt: "Com que frequência mínima o 2º Mandamento da Igreja pede a Confissão?",
            options: [
              "Apenas uma vez na vida",
              "Ao menos uma vez por ano",
              "Somente na velhice",
              "A cada dez anos",
            ],
            answer: 1,
            explanation:
              "A Igreja pede confessar ao menos uma vez ao ano, assegurando a preparação para a Eucaristia (CIC 2042).",
          },
          {
            prompt: "Em que tempo litúrgico o 3º Mandamento pede especialmente a comunhão?",
            options: [
              "Somente no Advento",
              "Ao menos pela Páscoa",
              "Apenas em agosto",
              "Somente no dia do aniversário",
            ],
            answer: 1,
            explanation:
              "O 3º preceito garante o recebimento do Corpo e Sangue do Senhor ao menos pelas festas pascais (CIC 2042).",
          },
        ],
      },
      {
        id: "preceitos-igreja-penitencia-partilha",
        title: "Jejum e sustento da Igreja (4º e 5º)",
        emoji: "🍞",
        xp: 20,
        teachings: [
          {
            title: "4º: Jejuar e abster-se de carne nos dias indicados",
            text: "A Igreja estabelece dias de penitência para nos unir ao sacrifício de Cristo e educar o coração: jejum e abstinência na Quarta-feira de Cinzas e Sexta-feira Santa, e abstinência ou penitência nas sextas-feiras.",
            example:
              "Na Sexta-feira Santa, fazer uma refeição simples sem carne e dedicar o tempo economizado à oração e a uma obra de caridade.",
            illustration: "church-precepts-charity",
            source: "CIC 2043, 1438",
          },
          {
            title: "Sentido da penitência cristã",
            text: "Jejuar não é dieta nem desprezo pela comida: é treinar a liberdade interior, lembrar que só Deus sacia e partilhar com quem tem fome o que deixamos de consumir.",
            example:
              "Abrir mão de um lanche ou gasto supérfluo na sexta-feira e destinar esse valor para ajudar uma família necessitada.",
            illustration: "church-precepts-charity",
            source: "Mt 6,16-18 · CIC 1434, 2043",
          },
          {
            title: "5º: Atender às necessidades materiais da Igreja",
            text: "Cada fiel é convidado a contribuir, segundo suas possibilidades, para o sustento da comunidade, do culto, da evangelização e das obras de caridade com os pobres.",
            example:
              "Participar do dízimo ou contribuir nas coletas da paróquia para manter a catequese, a liturgia e a pastoral social.",
            illustration: "church-precepts-charity",
            source: "2Cor 9,7 · CIC 2043",
          },
        ],
        activities: [
          {
            type: "classify",
            title: "Viver o 4º e o 5º Mandamentos da Igreja",
            instruction:
              "Classifique cada prática entre penitência/jejum (4º) ou sustento/partilha (5º).",
            categories: ["4º Mandamento (Penitência)", "5º Mandamento (Sustento)"],
            items: [
              { id: "cp1", text: "Abster-se de carne na Sexta-feira Santa", category: 0 },
              { id: "cp2", text: "Contribuir com o dízimo e manutenção da paróquia", category: 1 },
              { id: "cp3", text: "Praticar jejum na Quarta-feira de Cinzas", category: 0 },
              {
                id: "cp4",
                text: "Apoiar obras de caridade e evangelização da Igreja",
                category: 1,
              },
            ],
            explanation:
              "O 4º preceito nos prepara espiritualmente pela penitência; o 5º nos responsabiliza pela missão comum da Igreja (CIC 2043).",
            source: "CIC 2043",
          },
        ],
        questions: [
          {
            prompt:
              "Quais são os dois principais dias de jejum e abstinência obrigatórios para os católicos?",
            options: [
              "Natal e Páscoa",
              "Quarta-feira de Cinzas e Sexta-feira Santa",
              "Todos os domingos do ano",
              "Epifania e Ascensão",
            ],
            answer: 1,
            explanation:
              "Quarta-feira de Cinzas e Sexta-feira Santa são os dias principais de jejum e abstinência na Igreja (CIC 2043).",
          },
          {
            prompt: "Qual é o sentido autêntico do jejum cristão?",
            options: [
              "Exibir esforço diante dos outros",
              "Unir-se a Cristo, fortalecer a liberdade interior e praticar a caridade",
              "Substituir a confissão",
              "Seguir uma moda estética",
            ],
            answer: 1,
            explanation:
              "A penitência interior expressa-se no jejum, na oração e na esmola, ligados à conversão do coração (CIC 1434, 2043).",
          },
          {
            prompt: "O que pede o 5º Mandamento da Igreja?",
            options: [
              "Viver apenas para si",
              "Ajudar às necessidades da Igreja segundo as próprias possibilidades",
              "Comprar privilégios religiosos",
              "Deixar toda despesa para o clero",
            ],
            answer: 1,
            explanation:
              "Os fiéis têm o dever de prover às necessidades da Igreja conforme suas possibilidades (CIC 2043).",
          },
        ],
      },
    ],
  },
  {
    id: "sete-dons-espirito",
    title: "Os Sete Dons do Espírito Santo",
    emoji: "🔥",
    lessons: [
      {
        id: "dons-sabedoria-ciencia",
        title: "Sabedoria, Entendimento, Conselho e Ciência",
        emoji: "💡",
        xp: 20,
        teachings: [
          {
            title: "Sabedoria e Entendimento",
            text: "A Sabedoria faz saborear as coisas de Deus e julgar a vida à luz do seu amor. O Entendimento abre nossa mente para penetrar com profundidade as verdades da fé reveladas nas Escrituras.",
            example:
              "Ao ler o Evangelho, não vê-lo só como história antiga, mas sentir paz e clareza sobre o amor de Deus hoje.",
            illustration: "spirit-gifts-wisdom",
            source: "Is 11,1-2 · CIC 1830-1831",
          },
          {
            title: "Conselho: luz para as decisões",
            text: "O dom do Conselho ajuda a discernir com prontidão qual é a vontade de Deus em situações concretas e difíceis, orientando nossas palavras para também ajudar o próximo.",
            example:
              "Em um conflito no trabalho ou na família, parar, rezar e escolher a resposta mais justa e pacificadora.",
            illustration: "spirit-gifts-wisdom",
            source: "Is 11,2 · CIC 1831",
          },
          {
            title: "Ciência: ver a criação como sinal de Deus",
            text: "O dom da Ciência nos permite reconhecer o valor verdadeiro das coisas criadas em relação a Deus, distinguindo o que nos aproxima do Criador do que nos afasta dele.",
            example:
              "Contemplar a natureza ou usar a tecnologia reconhecendo que são bens criados para servir ao bem humano, nunca ídolos.",
            illustration: "spirit-gifts-wisdom",
            source: "Sb 13,1-5 · CIC 1831",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Reconheça os quatro primeiros dons",
            instruction: "Relacione cada dom do Espírito Santo ao seu fruto na mente e no coração.",
            pairs: [
              {
                id: "dg1",
                left: "Sabedoria",
                right: "Saborear a Deus e ver a vida segundo o Evangelho",
              },
              {
                id: "dg2",
                left: "Entendimento",
                right: "Compreender mais fundo as verdades da fé",
              },
              {
                id: "dg3",
                left: "Conselho",
                right: "Discernir a escolha certa em momentos difíceis",
              },
              {
                id: "dg4",
                left: "Ciência",
                right: "Enxergar as criaturas e bens do mundo à luz de Deus",
              },
            ],
            explanation:
              "Esses quatro dons iluminam nossa inteligência e discernimento para acolher os caminhos de Deus (CIC 1830-1831).",
            source: "Is 11,1-2 · CIC 1831",
          },
        ],
        questions: [
          {
            prompt: "Onde a tradição bíblica enumera os Sete Dons do Espírito Santo?",
            options: [
              "No livro do profeta Isaías (Is 11,1-2)",
              "No livro de Rute",
              "No livro dos Juízes",
              "Na carta a Filemon",
            ],
            answer: 0,
            explanation:
              "A tradição da Igreja recolhe os sete dons a partir de Isaías 11,1-2 sobre o Messias (CIC 1831).",
          },
          {
            prompt: "Qual dom ajuda especialmente a discernir o que fazer em uma escolha delicada?",
            options: ["Conselho", "Preguiça", "Soberba", "Curiosidade"],
            answer: 0,
            explanation:
              "O dom do Conselho orienta a consciência e as decisões concretas segundo Deus (CIC 1831).",
          },
          {
            prompt: "O que realiza o dom da Sabedoria na vida do cristão?",
            options: [
              "Torná-lo orgulhoso do que sabe",
              "Fazê-lo saborear e amar a Deus acima de tudo",
              "Afastá-lo da comunidade",
              "Evitar qualquer estudo bíblico",
            ],
            answer: 1,
            explanation:
              "A sabedoria dá gosto pelas coisas divinas e harmoniza a vida na caridade (CIC 1831).",
          },
        ],
      },
      {
        id: "dons-fortaleza-temor",
        title: "Fortaleza, Piedade e Temor de Deus",
        emoji: "🕊️",
        xp: 20,
        teachings: [
          {
            title: "Fortaleza: coragem na provação",
            text: "O dom da Fortaleza sustenta a alma diante do medo, das tentações e das perseguições, dando perseverança para permanecer fiel a Cristo até o fim.",
            example:
              "Não ceder à pressão de um grupo para fazer algo injusto e seguir praticando a fé mesmo quando parece impopular.",
            illustration: "spirit-gifts-courage",
            source: "2Tm 1,7 · CIC 1831",
          },
          {
            title: "Piedade: coração de filho e de irmão",
            text: "A Piedade desperta em nós a confiança amorosa diante de Deus Pai e a ternura fraterna para com todos os homens, acolhendo-os como filhos do mesmo Pai.",
            example:
              "Rezar o Pai-Nosso com confiança filial e tratar cada pessoa com gentileza e respeito verdadeiro.",
            illustration: "spirit-gifts-courage",
            source: "Rm 8,15 · CIC 1831",
          },
          {
            title: "Temor de Deus: reverência amorosa",
            text: "O Temor de Deus não é medo de castigo nem pavor: é o respeito cheio de amor que não quer ferir o coração do Pai nem se separar de sua graça.",
            example:
              "Como um filho que evita magoar quem o ama, fugindo do pecado não por terror, mas por amor a Deus.",
            illustration: "spirit-gifts-courage",
            source: "Sl 111,10 · CIC 1831",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Os dons da vontade e do coração",
            instruction: "Associe Fortaleza, Piedade e Temor de Deus às atitudes que os expressam.",
            pairs: [
              {
                id: "dc1",
                left: "Fortaleza",
                right: "Perseverar no bem mesmo diante de pressões e medo",
              },
              {
                id: "dc2",
                left: "Piedade",
                right: "Relacionar-se com Deus como Pai e com todos como irmãos",
              },
              {
                id: "dc3",
                left: "Temor de Deus",
                right: "Reverência amorosa que evita ofender a Deus",
              },
            ],
            explanation:
              "Os sete dons tornam o cristão dócil às inspirações do Espírito Santo em todas as situações (CIC 1830).",
            source: "CIC 1830-1831",
          },
        ],
        questions: [
          {
            prompt: "O que é o dom do Temor de Deus?",
            options: [
              "Pavor que impede de rezar",
              "Reverência amorosa e respeito filial que teme ofender a Deus",
              "Desconfiança da misericórdia divina",
              "Medo de frequentar a igreja",
            ],
            answer: 1,
            explanation:
              "O temor filial de Deus nasce do amor: é a reverência diante da santidade de Deus (CIC 1831).",
          },
          {
            prompt: "Como o dom da Piedade transforma nossas relações?",
            options: [
              "Torna-nos frios com os vizinhos",
              "Alimenta a ternura filial com Deus e a fraternidade com o próximo",
              "Faz desprezar o trabalho",
              "Limita a fé a gestos externos sem amor",
            ],
            answer: 1,
            explanation:
              "Pela Piedade, o Espírito nos faz clamar 'Abba, Pai' e reconhecer os outros como irmãos (Rm 8,15; CIC 1831).",
          },
          {
            prompt: "Qual é a lista completa dos Sete Dons do Espírito Santo?",
            options: [
              "Sabedoria, Entendimento, Conselho, Fortaleza, Ciência, Piedade e Temor de Deus",
              "Fé, Esperança, Caridade, Prudência, Justiça, Fortaleza e Temperança",
              "Amor, Alegria, Paz, Paciência, Bondade, Mansidão e Domínio próprio",
              "Oração, Jejum, Esmola, Missa, Confissão, Batismo e Crisma",
            ],
            answer: 0,
            explanation:
              "Os sete dons são: sabedoria, entendimento, conselho, fortaleza, ciência, piedade e temor de Deus (CIC 1831).",
          },
        ],
      },
    ],
  },
  {
    id: "sete-pecados-capitais",
    title: "Os Sete Pecados Capitais",
    emoji: "🛡️",
    lessons: [
      {
        id: "pecados-orgulho-ira",
        title: "Soberba, Avareza, Inveja e Ira",
        emoji: "⚔️",
        xp: 20,
        teachings: [
          {
            title: "Por que se chamam “pecados capitais”?",
            text: "São chamados capitais (de 'caput', cabeça) porque funcionam como raízes que geram muitos outros pecados e vícios. Reconhecê-los ajuda a vigiar o coração e cultivar as virtudes opostas.",
            example:
              "Quando cuidamos da raiz de uma planta, evitamos que frutos ruins voltem a crescer; assim é no exame de consciência.",
            illustration: "capital-sins-pride",
            source: "Mc 7,21-23 · CIC 1866",
          },
          {
            title: "Soberba e Avareza",
            text: "A soberba (orgulho) coloca o próprio eu acima de Deus e dos outros; sua virtude oposta é a humildade. A avareza é o apego desordenado ao dinheiro e às posses; vence-se com a generosidade.",
            example:
              "Vencer a soberba pedindo desculpas quando erra; vencer a avareza partilhando com quem precisa.",
            illustration: "capital-sins-pride",
            source: "Lc 12,15; 18,14 · CIC 1866",
          },
          {
            title: "Inveja e Ira",
            text: "A inveja é a tristeza pelo bem do outro como se diminuísse o nosso; opõe-se à caridade fraterna. A ira é a raiva descontrolada e o desejo de vingança; vence-se com a mansidão e a paciência.",
            example:
              "Parabenizar sinceramente um colega promovido e respirar em oração antes de responder a uma provocação.",
            illustration: "capital-sins-pride",
            source: "Tg 3,16; Ef 4,26 · CIC 1866, 2302, 2539",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Cada vício tem uma virtude que o cura",
            instruction: "Ligue estes quatro pecados capitais à virtude cristã que os vence.",
            pairs: [
              { id: "ps1", left: "Soberba (Orgulho)", right: "Humildade" },
              { id: "ps2", left: "Avareza", right: "Generosidade" },
              { id: "ps3", left: "Inveja", right: "Caridade fraterna" },
              { id: "ps4", left: "Ira", right: "Mansidão e paciência" },
            ],
            explanation:
              "A vida cristã não combate o mal apenas com proibições, mas cultivando as virtudes opostas com a graça de Deus (CIC 1810, 1866).",
            source: "CIC 1866",
          },
        ],
        questions: [
          {
            prompt: "Por que esses sete vícios recebem o nome de “capitais”?",
            options: [
              "Porque acontecem apenas nas grandes cidades",
              "Porque são cabeças ou raízes que dão origem a muitos outros pecados",
              "Porque não têm perdão na Confissão",
              "Porque só existem na idade adulta",
            ],
            answer: 1,
            explanation:
              "São chamados capitais porque geram outros pecados e outros vícios no comportamento humano (CIC 1866).",
          },
          {
            prompt: "Qual é a tristeza pelo bem alheio e qual virtude a cura?",
            options: [
              "Avareza, curada pela pressa",
              "Inveja, curada pela caridade fraterna",
              "Gula, curada pelo orgulho",
              "Preguiça, curada pela ira",
            ],
            answer: 1,
            explanation:
              "A inveja entristece-se com o bem do próximo; vence-se com a benevolência e a caridade (CIC 2539-2540).",
          },
          {
            prompt: "Qual virtude combate diretamente a soberba?",
            options: ["Humildade", "Vaidade", "Rancor", "Cobiça"],
            answer: 0,
            explanation:
              "A humildade reconhece que tudo recebemos de Deus e nos coloca a serviço dos outros (CIC 1866, 2559).",
          },
        ],
      },
      {
        id: "pecados-desejos-preguica",
        title: "Luxúria, Gula e Preguiça",
        emoji: "🌱",
        xp: 20,
        teachings: [
          {
            title: "Luxúria e a virtude da Castidade",
            text: "A luxúria é o desejo desordenado do prazer sexual separado do amor verdadeiro e do respeito à pessoa. A castidade e a pureza de coração integram a afetividade na doação autêntica.",
            example:
              "Guardar o olhar e os pensamentos, valorizando a pessoa inteira em vez de tratá-la como objeto.",
            illustration: "capital-sins-temperance",
            source: "Mt 5,8 · CIC 1866, 2351",
          },
          {
            title: "Gula e a virtude da Temperança",
            text: "A gula é o excesso ou apego desmedido na comida e na bebida. A temperança nos ensina o equilíbrio, a gratidão pelos alimentos e a liberdade frente aos impulsos.",
            example:
              "Agradecer antes das refeições, comer com moderação e saber dizer não ao exagero.",
            illustration: "capital-sins-temperance",
            source: "Fl 3,19 · CIC 1809, 1866",
          },
          {
            title: "Preguiça (Acídia) e o Zelo no bem",
            text: "Na tradição espiritual, a preguiça ou acídia vai além do cansaço físico: é o desânimo e a fuga dos deveres e da vida de Deus. Vence-se com a diligência, a oração fiel e o serviço alegre.",
            example:
              "Não confundir descanso saudável com preguiça: cumprir os deveres com alegria e reservar um tempo fiel para rezar.",
            illustration: "capital-sins-temperance",
            source: "Rm 12,11 · CIC 1866, 2094, 2733",
          },
        ],
        activities: [
          {
            type: "match",
            title: "Luxúria, Gula e Preguiça frente às virtudes",
            instruction:
              "Associe cada um destes três pecados capitais à virtude que devolve equilíbrio ao coração.",
            pairs: [
              { id: "pd1", left: "Luxúria", right: "Castidade e pureza de coração" },
              { id: "pd2", left: "Gula", right: "Temperança e moderação" },
              { id: "pd3", left: "Preguiça (Acídia)", right: "Diligência e zelo no bem" },
            ],
            explanation:
              "Castidade, temperança e diligência ordenam nossos desejos e nossa vontade para amar melhor a Deus e ao próximo (CIC 1809, 1866, 2337).",
            source: "CIC 1809, 1866, 2337",
          },
        ],
        questions: [
          {
            prompt: "Qual é a diferença entre descanso necessário e preguiça espiritual (acídia)?",
            options: [
              "Não há diferença nenhuma",
              "O descanso renova as forças para servir; a acídia foge dos deveres e de Deus",
              "Dormir é sempre pecado",
              "Só padres precisam descansar",
            ],
            answer: 1,
            explanation:
              "O descanso pertence à dignidade humana (CIC 2184); a acídia é a tristeza e recusa diante do esforço espiritual e dos deveres (CIC 2094).",
          },
          {
            prompt: "Qual virtude modera a alimentação e os prazeres sensíveis, combatendo a gula?",
            options: ["Temperança", "Soberba", "Inveja", "Avareza"],
            answer: 0,
            explanation:
              "A temperança é a virtude cardeal que modera a atração dos prazeres e dá equilíbrio no uso dos bens (CIC 1809).",
          },
          {
            prompt: "Quais são os Sete Pecados Capitais na tradição católica?",
            options: [
              "Soberba, avareza, luxúria, ira, gula, inveja e preguiça",
              "Fé, esperança, caridade, prudência, justiça, fortaleza e temperança",
              "Batismo, crisma, eucaristia, confissão, unção, ordem e matrimônio",
              "Medo, dúvida, tristeza, cansaço, pressa, silêncio e choro",
            ],
            answer: 0,
            explanation:
              "Segundo São João Cassiano e São Gregório Magno, os sete vícios capitais são: soberba, avareza, luxúria, ira, gula, inveja e preguiça (CIC 1866).",
          },
        ],
      },
    ],
  },
];
