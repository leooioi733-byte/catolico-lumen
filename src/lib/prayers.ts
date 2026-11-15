import type { Prayer } from "./prayer-types";

const COMPENDIO = {
  label: "Compêndio do Catecismo · Apêndice: orações comuns",
  url: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_po.html",
};
const COMPENDIO_LA = {
  label: "Compendium Catechismi Ecclesiae Catholicae · Appendix: Preces communes",
  url: "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_lt.html",
};
const ROSARIO = {
  label: "Vaticano · O Santo Rosário",
  url: "https://www.vatican.va/special/rosary/rosary_po.html",
};
const PATRIS_CORDE = {
  label: "Devoção tradicional a São José · cf. Carta Apostólica Patris Corde (2020)",
  url: "https://www.vatican.va/content/francesco/pt/apost_letters/documents/papa-francesco-lettera-ap_20201208_patris-corde.html",
};

export const PRAYERS: Prayer[] = [
  {
    id: "sinal-da-cruz",
    title: "Sinal da Cruz",
    category: "traditional",
    source: COMPENDIO,
    text: "Pelo sinal da santa Cruz, livrai-nos, Deus, nosso Senhor, dos nossos inimigos.\n\nEm nome do Pai e do Filho e do Espírito Santo. Amém.",
  },
  {
    id: "pai-nosso",
    title: "Pai-Nosso",
    category: "traditional",
    source: COMPENDIO,
    text: "Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu.\n\nO pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
  },
  {
    id: "ave-maria",
    title: "Ave-Maria",
    category: "traditional",
    source: COMPENDIO,
    text: "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.\n\nSanta Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
  },
  {
    id: "gloria-ao-pai",
    title: "Glória ao Pai",
    category: "traditional",
    source: COMPENDIO,
    text: "Glória ao Pai e ao Filho e ao Espírito Santo.\n\nComo era no princípio, agora e sempre. Amém.",
  },
  {
    id: "credo",
    title: "Credo (Símbolo dos Apóstolos)",
    category: "traditional",
    source: COMPENDIO,
    text: "Creio em Deus Pai todo-poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos.\n\nCreio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
  },
  {
    id: "salve-rainha",
    title: "Salve-Rainha",
    category: "traditional",
    source: COMPENDIO,
    text: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas.\n\nEia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria.",
  },
  {
    id: "fatima",
    title: "Oração de Fátima",
    category: "traditional",
    source: ROSARIO,
    text: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o céu e socorrei principalmente as que mais precisarem.",
  },
  {
    id: "responsorio",
    title: "Rogai por nós",
    category: "traditional",
    source: ROSARIO,
    text: "V. Rogai por nós, santa Mãe de Deus.\nR. Para que sejamos dignos das promessas de Cristo.",
  },
  {
    id: "agradecimento",
    title: "Oração final do Rosário",
    category: "traditional",
    source: ROSARIO,
    text: "Oremos. Ó Deus, cujo Filho Unigênito, por sua vida, morte e ressurreição, nos alcançou o prêmio da salvação eterna, concedei-nos, vos pedimos, que, meditando estes mistérios no santo Rosário da Bem-aventurada Virgem Maria, imitemos o que contêm e alcancemos o que prometem. Por Cristo, nosso Senhor. Amém.",
  },
  {
    id: "anjo-da-guarda",
    title: "Oração do Anjo da Guarda",
    category: "traditional",
    source: COMPENDIO,
    text: "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa e me ilumina. Amém.",
  },
  {
    id: "angelus",
    title: "Angelus (O Anjo do Senhor)",
    category: "traditional",
    source: COMPENDIO,
    text: "V. O Anjo do Senhor anunciou a Maria.\nR. E ela concebeu do Espírito Santo.\nAve, Maria...\n\nV. Eis aqui a serva do Senhor.\nR. Faça-se em mim segundo a vossa palavra.\nAve, Maria...\n\nV. E o Verbo se fez carne.\nR. E habitou entre nós.\nAve, Maria...\n\nV. Rogai por nós, santa Mãe de Deus.\nR. Para que sejamos dignos das promessas de Cristo.\n\nOremos. Infundi, Senhor, nós vos pedimos, a vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Cristo, vosso Filho, pela sua paixão e cruz sejamos conduzidos à glória da ressurreição. Pelo mesmo Cristo, nosso Senhor. Amém.",
  },
  {
    id: "regina-caeli",
    title: "Rainha do Céu (Regina Caeli)",
    category: "traditional",
    source: COMPENDIO,
    text: "Rezada no Tempo Pascal, no lugar do Angelus.\n\nV. Rainha do céu, alegrai-vos, aleluia!\nR. Porque quem merecestes trazer em vosso seio, aleluia!\nV. Ressuscitou como disse, aleluia!\nR. Rogai a Deus por nós, aleluia!\nV. Exultai e alegrai-vos, ó Virgem Maria, aleluia!\nR. Porque o Senhor ressuscitou verdadeiramente, aleluia!\n\nOremos. Ó Deus, que vos dignastes alegrar o mundo com a ressurreição do vosso Filho, nosso Senhor Jesus Cristo, concedei-nos, vos pedimos, que, por sua Mãe, a Virgem Maria, alcancemos as alegrias da vida eterna. Pelo mesmo Cristo, nosso Senhor. Amém.",
  },
  {
    id: "ato-de-contricao",
    title: "Ato de Contrição",
    category: "traditional",
    source: COMPENDIO,
    text: "Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, pesa-me de Vos ter ofendido e, com o auxílio da vossa divina graça, proponho firmemente emendar-me e nunca mais Vos tornar a ofender. Peço e espero o perdão das minhas culpas pela vossa infinita misericórdia. Amém.",
  },
  {
    id: "vinde-espirito-santo",
    title: "Vinde, Espírito Santo",
    category: "traditional",
    source: COMPENDIO,
    text: "Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor.\n\nV. Enviai o vosso Espírito e tudo será criado.\nR. E renovareis a face da terra.\n\nOremos. Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, concedei-nos que no mesmo Espírito saibamos o que é reto e gozemos sempre da sua consolação. Por Cristo, nosso Senhor. Amém.",
  },
  {
    id: "eterno-descanso",
    title: "Pelos fiéis defuntos (Eterno descanso)",
    category: "traditional",
    source: COMPENDIO,
    text: "Dai-lhes, Senhor, o eterno descanso, e brilhe para eles a luz perpétua. Descansem em paz. Amém.",
  },
  {
    id: "lembrai-vos",
    title: "Lembrai-Vos (São Bernardo)",
    category: "traditional",
    source: COMPENDIO,
    text: "Lembrai-Vos, ó piíssima Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado o vosso socorro, fosse por Vós desamparado. Animado eu, pois, com igual confiança, a Vós, ó Virgem entre todas singular, como a Mãe recorro, de Vós me valho e, gemendo sob o peso dos meus pecados, me prostro aos vossos pés. Não desprezeis as minhas súplicas, ó Mãe do Verbo de Deus humanado, mas dignai-Vos de as ouvir propícia e de me alcançar o que Vos rogo. Amém.",
  },
  {
    id: "sao-miguel",
    title: "Oração a São Miguel Arcanjo",
    category: "saints",
    source: {
      label:
        "Oração do Papa Leão XIII · recomendada por São João Paulo II (Regina Caeli, 24/4/1994)",
      url: "https://www.vatican.va/content/john-paul-ii/it/angelus/1994/documents/hf_jp-ii_reg_19940424.html",
    },
    text: "São Miguel Arcanjo, defendei-nos no combate; sede o nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos; e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e aos outros espíritos malignos que andam pelo mundo para perder as almas. Amém.",
  },
  {
    id: "ave-jose",
    title: "Ave José",
    subtitle: "Oração tradicional a São José, Patrono da Igreja",
    category: "saints",
    source: PATRIS_CORDE,
    text: "Ave, José, homem justo, a Sabedoria está convosco; bendito sois vós entre todos os homens e bendito é Jesus, o fruto de Maria, vossa fiel esposa.\n\nSão José, digno pai adotivo de Jesus Cristo, rogai por nós, pecadores, e obtende-nos de Deus a divina sabedoria, agora e na hora de nossa morte. Amém.",
    explanation:
      "Inspirada na saudação da Ave-Maria, a oração da Ave José recorda a fidelidade silenciosa do esposo de Maria e pai adotivo de Jesus. O Evangelho chama José de “homem justo” (Mt 1,19). Por sua obediência, trabalho e cuidado com a Sagrada Família, recorremos à sua intercessão pelas famílias, pelos trabalhadores e para crescer na sabedoria divina.",
  },
  {
    id: "latin-signum-crucis",
    title: "Signum Crucis (Sinal da Cruz)",
    subtitle: "Oração em latim · Invocação da Santíssima Trindade",
    category: "latin",
    source: COMPENDIO_LA,
    latinText: "In nómine Patris, et Fílii, et Spíritus Sancti. Amen.",
    text: "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    explanation:
      "O Sinal da Cruz é a profissão de fé mais breve do cristão. Em latim, “In nómine” significa “Em nome” (no singular, indicando que há um só Deus), seguido das três Pessoas divinas: Patris (do Pai), Fílii (do Filho) e Spíritus Sancti (do Espírito Santo). Ao traçar a cruz da fronte ao peito e dos ombros, entregamos mente, coração e obras a Deus.",
  },
  {
    id: "latin-pater-noster",
    title: "Pater Noster (Pai-Nosso)",
    subtitle: "Oração em latim · A oração que o Senhor ensinou",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Pater noster, qui es in cælis, sanctificétur nomen tuum; advéniat regnum tuum; fiat volúntas tua, sicut in cælo et in terra.\n\nPanem nostrum quotidiánum da nobis hódie; et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris; et ne nos indúcas in tentatiónem, sed líbera nos a malo. Amen.",
    text: "Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu.\n\nO pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
    explanation:
      "Rezamos o Pater Noster em latim em celebrações universais da Igreja, unindo católicos de todas as línguas numa só voz. Repare na expressão “débita nostra” (“nossas dívidas/ofensas”), que recorda o Evangelho de Mateus: o perdão recebido de Deus nos compromete a perdoar também os irmãos.",
  },
  {
    id: "latin-ave-maria",
    title: "Ave Maria (Ave-Maria em Latim)",
    subtitle: "Oração em latim · Saudação angélica a Nossa Senhora",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Ave, María, grátia plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus ventris tui, Iesus.\n\nSancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.",
    text: "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.\n\nSanta Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
    explanation:
      "A primeira parte une as palavras do Anjo Gabriel (“Ave, grátia plena, Dóminus tecum” — Lc 1,28) e as de Santa Isabel (Lc 1,42). A segunda parte é uma súplica da Igreja que reconhece Maria como “Mater Dei” (Mãe de Deus) e pede sua oração (“ora pro nobis”) no momento presente (“nunc”) e na hora derradeira.",
  },
  {
    id: "latin-gloria-patri",
    title: "Gloria Patri (Glória ao Pai)",
    subtitle: "Oração em latim · Doxologia menor à Trindade",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Glória Patri, et Fílio, et Spirítui Sancto.\n\nSicut erat in princípio, et nunc, et semper, et in sǽcula sæculórum. Amen.",
    text: "Glória ao Pai e ao Filho e ao Espírito Santo.\n\nComo era no princípio, agora e sempre, e pelos séculos dos séculos. Amém.",
    explanation:
      "Esta breve aclamação chama-se doxologia (palavra de louvor). É rezada ao final de cada salmo na Liturgia das Horas e após cada dezena do Rosário. A fórmula final “in sǽcula sæculórum” expressa a eternidade de Deus: pelos séculos sem fim.",
  },
  {
    id: "latin-salve-regina",
    title: "Salve Regina (Salve-Rainha)",
    subtitle: "Oração em latim · Antífona mariana tradicional",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Salve, Regína, Mater misericórdiæ, vita, dulcédo et spes nostra, salve! Ad te clamámus, éxsules fílii Evæ. Ad te suspirámus, geméntes et flentes in hac lacrimárum valle.\n\nEia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte. Et Iesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María.",
    text: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas.\n\nEia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e, depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce Virgem Maria.",
    explanation:
      "Composta no século XI e ligada à tradição monástica e ao canto gregoriano, a Salve Regina conclui frequentemente a oração do Terço e as Completas (oração da noite). Chama Maria de “Mater misericórdiæ” e “advocáta nostra”, pedindo que ela nos mostre Jesus ao fim de nossa peregrinação terrestre.",
  },
  {
    id: "latin-angele-dei",
    title: "Angele Dei (Anjo da Guarda)",
    subtitle: "Oração em latim · Confiança no santo anjo protetor",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Ángele Dei, qui custos es mei, me, tibi commíssum pietáte supérna, illúmina, custódi, rege et gubérna. Amen.",
    text: "Santo Anjo do Senhor, meu zeloso guardador, já que a ti me confiou a piedade divina, ilumina-me, guarda-me, rege-me e governa-me. Amém.",
    explanation:
      "Em quatro verbos precisos (“illúmina, custódi, rege, gubérna”), esta antiga oração pede ao Anjo da Guarda que ilumine nossa inteligência, proteja nossos passos e nos conduza no caminho do bem. Recorda o ensinamento do Catecismo (CIC 336) de que cada fiel tem um anjo como protetor e pastor.",
  },
  {
    id: "latin-sub-tuum",
    title: "Sub Tuum Praesidium (À Vossa Proteção)",
    subtitle: "Oração em latim · A mais antiga oração mariana conhecida",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Sub tuum præsídium confúgimus, sancta Dei Génitrix; nostras deprecatiónes ne despícias in necessitátibus, sed a perículis cunctis líbera nos semper, Virgo gloriósa et benedícta.",
    text: "À vossa proteção recorremos, santa Mãe de Deus; não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita.",
    explanation:
      "Encontrada originalmente em um papiro egípcio do século III (em grego) e traduzida para o latim na antiguidade cristã, é a oração mais antiga dirigida a Nossa Senhora que chegou até nós. Já nela a Igreja invoca Maria como “Dei Génitrix” (Mãe de Deus), título solenemente proclamado no Concílio de Éfeso em 431.",
  },
  {
    id: "latin-veni-sancte-spiritus",
    title: "Veni, Sancte Spiritus (Vinde, Espírito Santo)",
    subtitle: "Oração em latim · Invocação ao Espírito Santo",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Veni, Sancte Spíritus, reple tuórum corda fidélium, et tui amóris in eis ignem accénde.\n\nV. Emítte Spíritum tuum et creabúntur.\nR. Et renovábis fáciem terræ.",
    text: "Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor.\n\nV. Enviai o vosso Espírito e tudo será criado.\nR. E renovareis a face da terra.",
    explanation:
      "Antífona rezada em Pentecostes e antes de estudos, reuniões e decisões importantes. O verbo “accénde” evoca o fogo do amor divino que aquece e purifica os corações, enquanto o versículo do Salmo 104 (“Emítte Spíritum tuum”) pede que Deus renove toda a criação.",
  },
  {
    id: "latin-sancte-michael",
    title: "Sancte Michaël Archangele (São Miguel)",
    subtitle: "Oração em latim · Súplica de proteção espiritual",
    category: "latin",
    source: {
      label: "Oração composta pelo Papa Leão XIII (1886)",
      url: "https://www.vatican.va/content/john-paul-ii/it/angelus/1994/documents/hf_jp-ii_reg_19940424.html",
    },
    latinText:
      "Sancte Míchaël Archángele, defénde nos in prœlio; contra nequítiam et insídias diáboli esto præsídium. Ímperet illi Deus, súpplices deprecámur: tuque, Princeps milítiæ cæléstis, Sátanam aliósque spíritus malígnos, qui ad perditiónem animárum pervagántur in mundo, divína virtúte, in inférnum detrúde. Amen.",
    text: "São Miguel Arcanjo, defendei-nos no combate; sede o nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos; e vós, príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e aos outros espíritos malignos que andam pelo mundo para perder as almas. Amém.",
    explanation:
      "Redigida em latim pelo Papa Leão XIII no final do século XIX, esta oração pede auxílio no combate espiritual cotidiano contra as tentações e o mal. Lembra que toda vitória espiritual acontece “divína virtúte” — pela força de Deus, e nunca por poder humano.",
  },
  {
    id: "latin-anima-christi",
    title: "Anima Christi (Alma de Cristo)",
    subtitle: "Oração em latim · Ação de graças após a Comunhão",
    category: "latin",
    source: COMPENDIO_LA,
    latinText:
      "Ánima Christi, sanctífica me. Corpus Christi, salva me. Sanguis Christi, inébria me. Aqua láteris Christi, lava me. Pássio Christi, confórta me.\n\nO bone Iesu, exáudi me. Intra tua vúlnera abscónde me. Ne permíttas me separári a te. Ab hoste malígno defénde me. In hora mortis meæ voca me. Et iube me veníre ad te, ut cum Sanctis tuis laudem te in sǽcula sæculórum. Amen.",
    text: "Alma de Cristo, santificai-me. Corpo de Cristo, salvai-me. Sangue de Cristo, inebriai-me. Água do lado de Cristo, lavai-me. Paixão de Cristo, confortai-me.\n\nÓ bom Jesus, ouvi-me. Dentro das vossas chagas, escondei-me. Não permitais que eu me separe de vós. Do espírito maligno, defendei-me. Na hora da minha morte, chamai-me. E mandai-me ir para vós, para que vos louve com os vossos Santos pelos séculos dos séculos. Amém.",
    explanation:
      "Oração medieval do século XIV, muito amada por Santo Inácio de Loyola nos Exercícios Espirituais e tradicionalmente rezada após a Comunhão Eucarística. Cada frase curta une o fiel à Paixão e à presença de Jesus, culminando no desejo de nunca se separar dele (“Ne permíttas me separári a te”).",
  },
];

export const PRAYER_TEXTS: Record<string, string> = Object.fromEntries(
  PRAYERS.map((p) => [p.id, p.text]),
);
export const getPrayer = (id: string) => PRAYERS.find((p) => p.id === id);
