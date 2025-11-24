import type { Cities } from "@/lists/dr/city";

const municipalities = [
  // Azua
  "azua",
  "estebania",
  "guayabal",
  "las-charcas",
  "las-yayas-de-viajama",
  "padre-las-casas",
  "peralta",
  "pueblo-viejo",
  "sabana-yegua",
  "tabara-arriba",

  // Bahoruco
  "galvan",
  "los-rios",
  "neiba",
  "tamayo",
  "villa-jaragua",

  // Barahona
  "barahona",
  "cabral",
  "el-penon",
  "enriquillo",
  "fundacion",
  "jaquimeyes",
  "la-cienaga",
  "las-salinas",
  "paraiso",
  "polo",
  "vicente-noble",

  // Dajabón
  "dajabon",
  "el-pino",
  "loma-de-cabrera",
  "partido",
  "restauracion",

  // Distrito Nacional
  "santo-domingo",

  // Duarte
  "arenoso",
  "castillo",
  "hostos",
  "las-guaranas",
  "pimentel",
  "san-francisco-de-macoris",
  "villa-riva",

  // El Seibo
  "el-seibo",
  "miches",

  // Elías Piña
  "banica",
  "comendador",
  "el-llano",
  "hondo-valle",
  "juan-santiago",
  "pedro-santana",

  // Espaillat
  "cayetano-germosen",
  "gaspar-hernandez",
  "jamao-al-norte",
  "moca",
  "san-victor",

  // Hato Mayor
  "el-valle",
  "hato-mayor",
  "sabana-de-la-mar",

  // Hermanas Mirabal
  "salcedo",
  "tenares",
  "villa-tapia",

  // Independencia
  "cristobal",
  "duverge",
  "jimani",
  "la-descubierta",
  "mella",
  "postrer-rio",

  // La Altagracia
  "higuey",
  "san-rafael-del-yuma",
  "guaymate",

  // La Romana
  "la-romana",
  "villa-hermosa",

  // La Vega
  "constanza",
  "jarabacoa",
  "jima-abajo",
  "la-vega",

  // María Trinidad Sánchez
  "cabrera",
  "el-factor",
  "nagua",
  "rio-san-juan",

  // Monseñor Nouel
  "bonao",
  "maimon",
  "piedra-blanca",

  // Monte Cristi
  "castanuelas",
  "guayubin",
  "las-matas-de-santa-cruz",
  "monte-cristi",
  "pepillo-salcedo",
  "villa-vasquez",

  // Monte Plata
  "bayaguana",
  "monte-plata",
  "peralvillo",
  "sabana-grande-de-boya",
  "yamasa",

  // Pedernales
  "oviedo",
  "pedernales",

  // Peravia
  "bani",
  "matanzas",
  "nizao",

  // Puerto Plata
  "altamira",
  "guananico",
  "imbert",
  "los-hidalgos",
  "luperon",
  "puerto-plata",
  "sosua",
  "villa-isabela",
  "villa-montellano",

  // Samaná
  "las-terrenas",
  "samana",
  "sanchez",

  // San Cristóbal
  "cambita-garabitos",
  "haina",
  "los-cacaos",
  "nigua",
  "sabana-grande-de-palenque",
  "san-cristobal",
  "villa-altagracia",
  "yaguate",

  // San José de Ocoa
  "rancho-arriba",
  "sabana-larga",
  "san-jose-de-ocoa",

  // San Juan
  "bohechio",
  "el-cercado",
  "juan-de-herrera",
  "las-matas-de-farfan",
  "san-juan",
  "vallejuelo",

  // San Pedro de Macorís
  "consuelo",
  "guayacanes",
  "los-llanos",
  "quisqueya",
  "ramon-santana",
  "san-pedro-de-macoris",

  // Sánchez Ramírez
  "cevicos",
  "cotui",
  "fantino",
  "la-mata",

  // Santiago
  "baitoa",
  "janico",
  "licey-al-medio",
  "punal",
  "sabana-iglesia",
  "san-jose-de-las-matas",
  "santiago-de-los-caballeros",
  "tamboril",
  "villa-bisono-navarrete",
  "villa-gonzalez",

  // Santiago Rodríguez
  "moncion",
  "sabaneta",
  "villa-los-almacigos",

  // Santo Domingo
  "boca-chica",
  "los-alcarrizos",
  "pedro-brand",
  "san-antonio-de-guerra",
  "santo-domingo-este",
  "santo-domingo-norte",
  "santo-domingo-oeste",

  // Valverde
  "esperanza",
  "laguna-salada",
  "mao",
] as const;

type Municipalities = (typeof municipalities)[number];

// Used to calculate distances between cities
const municipalitiesMeta = {
  // Azua
  azua: { displayName: "Azua", city: "azua" },
  estebania: { displayName: "Estebanía", city: "azua" },
  guayabal: { displayName: "Guayabal", city: "azua" },
  "las-charcas": { displayName: "Las Charcas", city: "azua" },
  "las-yayas-de-viajama": { displayName: "Las Yayas de Viajama", city: "azua" },
  "padre-las-casas": { displayName: "Padre Las Casas", city: "azua" },
  peralta: { displayName: "Peralta", city: "azua" },
  "pueblo-viejo": { displayName: "Pueblo Viejo", city: "azua" },
  "sabana-yegua": { displayName: "Sabana Yegua", city: "azua" },
  "tabara-arriba": { displayName: "Tábara Arriba", city: "azua" },

  // Bahoruco
  galvan: { displayName: "Galván", city: "neiba" },
  "los-rios": { displayName: "Los Ríos", city: "neiba" },
  neiba: { displayName: "Neiba", city: "neiba" },
  tamayo: { displayName: "Tamayo", city: "neiba" },
  "villa-jaragua": { displayName: "Villa Jaragua", city: "neiba" },

  // Barahona
  barahona: { displayName: "Barahona", city: "barahona" },
  cabral: { displayName: "Cabral", city: "barahona" },
  "el-penon": { displayName: "El Peñón", city: "barahona" },
  enriquillo: { displayName: "Enriquillo", city: "barahona" },
  fundacion: { displayName: "Fundación", city: "barahona" },
  jaquimeyes: { displayName: "Jaquimeyes", city: "barahona" },
  "la-cienaga": { displayName: "La Ciénaga", city: "barahona" },
  "las-salinas": { displayName: "Las Salinas", city: "barahona" },
  paraiso: { displayName: "Paraíso", city: "barahona" },
  polo: { displayName: "Polo", city: "barahona" },
  "vicente-noble": { displayName: "Vicente Noble", city: "barahona" },

  // Dajabón
  dajabon: { displayName: "Dajabón", city: "dajabon" },
  "el-pino": { displayName: "El Pino", city: "dajabon" },
  "loma-de-cabrera": { displayName: "Loma de Cabrera", city: "dajabon" },
  partido: { displayName: "Partido", city: "dajabon" },
  restauracion: { displayName: "Restauración", city: "dajabon" },

  // Distrito Nacional
  "santo-domingo": { displayName: "Santo Domingo", city: "santo-domingo" },

  // Duarte
  arenoso: { displayName: "Arenoso", city: "san-francisco-de-macoris" },
  castillo: { displayName: "Castillo", city: "san-francisco-de-macoris" },
  hostos: { displayName: "Hostos", city: "san-francisco-de-macoris" },
  "las-guaranas": {
    displayName: "Las Guáranas",
    city: "san-francisco-de-macoris",
  },
  pimentel: { displayName: "Pimentel", city: "san-francisco-de-macoris" },
  "san-francisco-de-macoris": {
    displayName: "San Francisco de Macorís",
    city: "san-francisco-de-macoris",
  },
  "villa-riva": { displayName: "Villa Riva", city: "san-francisco-de-macoris" },

  // El Seibo
  "el-seibo": { displayName: "El Seibo", city: "el-seibo" },
  miches: { displayName: "Miches", city: "miches" },

  // Elías Piña
  banica: { displayName: "Bánica", city: "comendador" },
  comendador: { displayName: "Comendador", city: "comendador" },
  "el-llano": { displayName: "El Llano", city: "comendador" },
  "hondo-valle": { displayName: "Hondo Valle", city: "comendador" },
  "juan-santiago": { displayName: "Juan Santiago", city: "comendador" },
  "pedro-santana": { displayName: "Pedro Santana", city: "comendador" },

  // Espaillat
  "cayetano-germosen": { displayName: "Cayetano Germosén", city: "moca" },
  "gaspar-hernandez": { displayName: "Gaspar Hernández", city: "moca" },
  "jamao-al-norte": { displayName: "Jamao Al Norte", city: "moca" },
  moca: { displayName: "Moca", city: "moca" },
  "san-victor": { displayName: "San Víctor", city: "moca" },

  // Hato Mayor
  "el-valle": { displayName: "El Valle", city: "sabana-de-la-mar" },
  "hato-mayor": { displayName: "Hato Mayor", city: "sabana-de-la-mar" },
  "sabana-de-la-mar": {
    displayName: "Sabana de la Mar",
    city: "sabana-de-la-mar",
  },

  // Hermanas Mirabal
  salcedo: { displayName: "Salcedo", city: "salcedo" },
  tenares: { displayName: "Tenares", city: "salcedo" },
  "villa-tapia": { displayName: "Villa Tapia", city: "salcedo" },

  // Independencia
  cristobal: { displayName: "Cristóbal", city: "jimani" },
  duverge: { displayName: "Duvergé", city: "duverge" },
  jimani: { displayName: "Jimaní", city: "jimani" },
  "la-descubierta": { displayName: "La Descubierta", city: "jimani" },
  mella: { displayName: "Mella", city: "jimani" },
  "postrer-rio": { displayName: "Postrer Río", city: "jimani" },

  // La Altagracia
  higuey: { displayName: "Higüey", city: "higuey" },
  "san-rafael-del-yuma": { displayName: "San Rafael del Yuma", city: "higuey" },
  guaymate: { displayName: "Guaymate", city: "higuey" },

  // La Romana
  "la-romana": { displayName: "La Romana", city: "la-romana" },
  "villa-hermosa": { displayName: "Villa Hermosa", city: "la-romana" },

  // La Vega
  constanza: { displayName: "Constanza", city: "constanza" },
  jarabacoa: { displayName: "Jarabacoa", city: "jarabacoa" },
  "jima-abajo": { displayName: "Jima Abajo", city: "la-vega" },
  "la-vega": { displayName: "La Vega", city: "la-vega" },

  // María Trinidad Sánchez
  cabrera: { displayName: "Cabrera", city: "nagua" },
  "el-factor": { displayName: "El Factor", city: "nagua" },
  nagua: { displayName: "Nagua", city: "nagua" },
  "rio-san-juan": { displayName: "Río San Juan", city: "nagua" },

  // Monseñor Nouel
  bonao: { displayName: "Bonao", city: "bonao" },
  maimon: { displayName: "Maimón", city: "bonao" },
  "piedra-blanca": { displayName: "Piedra Blanca", city: "bonao" },

  // Monte Cristi
  castanuelas: { displayName: "Castañuelas", city: "monte-cristi" },
  guayubin: { displayName: "Guayubín", city: "monte-cristi" },
  "las-matas-de-santa-cruz": {
    displayName: "Las Matas de Santa Cruz",
    city: "monte-cristi",
  },
  "monte-cristi": { displayName: "Monte Cristi", city: "monte-cristi" },
  "pepillo-salcedo": { displayName: "Pepillo Salcedo", city: "monte-cristi" },
  "villa-vasquez": { displayName: "Villa Vásquez", city: "monte-cristi" },

  // Monte Plata
  bayaguana: { displayName: "Bayaguana", city: "monte-plata" },
  "monte-plata": { displayName: "Monte Plata", city: "monte-plata" },
  peralvillo: { displayName: "Peralvillo", city: "monte-plata" },
  "sabana-grande-de-boya": {
    displayName: "Sabana Grande de Boyá",
    city: "monte-plata",
  },
  yamasa: { displayName: "Yamasá", city: "monte-plata" },

  // Pedernales
  oviedo: { displayName: "Oviedo", city: "pedernales" },
  pedernales: { displayName: "Pedernales", city: "pedernales" },

  // Peravia
  bani: { displayName: "Baní", city: "bani" },
  matanzas: { displayName: "Matanzas", city: "bani" },
  nizao: { displayName: "Nizao", city: "bani" },

  // Puerto Plata
  altamira: { displayName: "Altamira", city: "puerto-plata" },
  guananico: { displayName: "Guananico", city: "puerto-plata" },
  imbert: { displayName: "Imbert", city: "puerto-plata" },
  "los-hidalgos": { displayName: "Los Hidalgos", city: "puerto-plata" },
  luperon: { displayName: "Luperón", city: "puerto-plata" },
  "puerto-plata": { displayName: "Puerto Plata", city: "puerto-plata" },
  sosua: { displayName: "Sosúa", city: "sosua" },
  "villa-isabela": { displayName: "Villa Isabela", city: "puerto-plata" },
  "villa-montellano": { displayName: "Villa Montellano", city: "puerto-plata" },

  // Samaná
  "las-terrenas": { displayName: "Las Terrenas", city: "las-terrenas" },
  samana: { displayName: "Samaná", city: "samana" },
  sanchez: { displayName: "Sánchez", city: "samana" },

  // San Cristóbal
  "cambita-garabitos": {
    displayName: "Cambita Garabitos",
    city: "san-cristobal",
  },
  haina: { displayName: "Haina", city: "san-cristobal" },
  "los-cacaos": { displayName: "Los Cacaos", city: "san-cristobal" },
  nigua: { displayName: "Nigua", city: "san-cristobal" },
  "sabana-grande-de-palenque": {
    displayName: "Sabana Grande de Palenque",
    city: "san-cristobal",
  },
  "san-cristobal": { displayName: "San Cristóbal", city: "san-cristobal" },
  "villa-altagracia": {
    displayName: "Villa Altagracia",
    city: "san-cristobal",
  },
  yaguate: { displayName: "Yaguate", city: "san-cristobal" },

  // San José de Ocoa
  "rancho-arriba": { displayName: "Rancho Arriba", city: "san-jose-de-ocoa" },
  "sabana-larga": { displayName: "Sabana Larga", city: "san-jose-de-ocoa" },
  "san-jose-de-ocoa": {
    displayName: "San José de Ocoa",
    city: "san-jose-de-ocoa",
  },

  // San Juan
  bohechio: { displayName: "Bohechío", city: "san-juan" },
  "el-cercado": { displayName: "El Cercado", city: "san-juan" },
  "juan-de-herrera": { displayName: "Juan de Herrera", city: "san-juan" },
  "las-matas-de-farfan": {
    displayName: "Las Matas de Farfán",
    city: "san-juan",
  },
  "san-juan": { displayName: "San Juan", city: "san-juan" },
  vallejuelo: { displayName: "Vallejuelo", city: "san-juan" },

  // San Pedro de Macorís
  consuelo: { displayName: "Consuelo", city: "san-pedro-de-macoris" },
  guayacanes: { displayName: "Guayacanes", city: "san-pedro-de-macoris" },
  "los-llanos": { displayName: "Los Llanos", city: "san-pedro-de-macoris" },
  quisqueya: { displayName: "Quisqueya", city: "san-pedro-de-macoris" },
  "ramon-santana": {
    displayName: "Ramón Santana",
    city: "san-pedro-de-macoris",
  },
  "san-pedro-de-macoris": {
    displayName: "San Pedro de Macorís",
    city: "san-pedro-de-macoris",
  },

  // Sánchez Ramírez
  cevicos: { displayName: "Cevicos", city: "cotui" },
  cotui: { displayName: "Cotuí", city: "cotui" },
  fantino: { displayName: "Fantino", city: "cotui" },
  "la-mata": { displayName: "La Mata", city: "cotui" },

  // Santiago
  baitoa: { displayName: "Baitoa", city: "santiago" },
  janico: { displayName: "Jánico", city: "santiago" },
  "licey-al-medio": { displayName: "Licey al Medio", city: "santiago" },
  punal: { displayName: "Puñal", city: "santiago" },
  "sabana-iglesia": { displayName: "Sabana Iglesia", city: "santiago" },
  "san-jose-de-las-matas": {
    displayName: "San José de las Matas",
    city: "santiago",
  },
  "santiago-de-los-caballeros": {
    displayName: "Santiago de los Caballeros",
    city: "santiago",
  },
  tamboril: { displayName: "Tamboril", city: "santiago" },
  "villa-bisono-navarrete": {
    displayName: "Villa Bisonó (Navarrete)",
    city: "santiago",
  },
  "villa-gonzalez": { displayName: "Villa González", city: "santiago" },

  // Santiago Rodríguez
  moncion: { displayName: "Monción", city: "santiago-rodriguez" },
  sabaneta: { displayName: "Sabaneta", city: "santiago-rodriguez" },
  "villa-los-almacigos": {
    displayName: "Villa Los Almácigos",
    city: "santiago-rodriguez",
  },

  // Santo Domingo
  "boca-chica": { displayName: "Boca Chica", city: "boca-chica" },
  "los-alcarrizos": { displayName: "Los Alcarrizos", city: "santo-domingo" },
  "pedro-brand": { displayName: "Pedro Brand", city: "santo-domingo" },
  "san-antonio-de-guerra": {
    displayName: "San Antonio de Guerra",
    city: "santo-domingo",
  },
  "santo-domingo-este": {
    displayName: "Santo Domingo Este",
    city: "santo-domingo",
  },
  "santo-domingo-norte": {
    displayName: "Santo Domingo Norte",
    city: "santo-domingo",
  },
  "santo-domingo-oeste": {
    displayName: "Santo Domingo Oeste",
    city: "santo-domingo",
  },

  // Valverde
  esperanza: { displayName: "Esperanza", city: "mao" },
  "laguna-salada": { displayName: "Laguna Salada", city: "mao" },
  mao: { displayName: "Mao", city: "mao" },
} as const satisfies Record<
  Municipalities,
  {
    displayName: string;
    city: Cities;
  }
>;

export { municipalitiesMeta, municipalities };

export type { Municipalities };
