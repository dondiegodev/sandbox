import type { Municipalities } from "@/lists/dr/municipality";

export const provinces = [
  "azua",
  "bahoruco",
  "barahona",
  "dajabon",
  "distrito-nacional",
  "duarte",
  "elias-pina",
  "el-seibo",
  "espaillat",
  "hato-mayor",
  "hermanas-mirabal",
  "independencia",
  "la-altagracia",
  "la-romana",
  "la-vega",
  "maria-trinidad-sanchez",
  "monsenor-nouel",
  "monte-cristi",
  "monte-plata",
  "pedernales",
  "peravia",
  "puerto-plata",
  "samana",
  "san-cristobal",
  "san-jose-de-ocoa",
  "san-juan",
  "san-pedro-de-macoris",
  "sanchez-ramirez",
  "santiago",
  "santiago-rodriguez",
  "santo-domingo",
  "valverde",
] as const;

export type Provinces = (typeof provinces)[number];

export const provincesMeta = {
  azua: {
    displayName: "Azua",
    municipalities: [
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
    ],
  },
  bahoruco: {
    displayName: "Bahoruco",
    municipalities: ["galvan", "los-rios", "neiba", "tamayo", "villa-jaragua"],
  },
  barahona: {
    displayName: "Barahona",
    municipalities: [
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
    ],
  },
  dajabon: {
    displayName: "Dajabón",
    municipalities: [
      "dajabon",
      "el-pino",
      "loma-de-cabrera",
      "partido",
      "restauracion",
    ],
  },
  "distrito-nacional": {
    displayName: "Distrito Nacional",
    municipalities: ["santo-domingo"],
  },
  duarte: {
    displayName: "Duarte",
    municipalities: [
      "arenoso",
      "castillo",
      "hostos",
      "las-guaranas",
      "pimentel",
      "san-francisco-de-macoris",
      "villa-riva",
    ],
  },
  "elias-pina": {
    displayName: "Elías Piña",
    municipalities: [
      "banica",
      "comendador",
      "el-llano",
      "hondo-valle",
      "juan-santiago",
      "pedro-santana",
    ],
  },
  "el-seibo": {
    displayName: "El Seibo",
    municipalities: ["el-seibo", "miches"],
  },
  espaillat: {
    displayName: "Espaillat",
    municipalities: [
      "cayetano-germosen",
      "gaspar-hernandez",
      "jamao-al-norte",
      "moca",
      "san-victor",
    ],
  },
  "hato-mayor": {
    displayName: "Hato Mayor",
    municipalities: ["el-valle", "hato-mayor", "sabana-de-la-mar"],
  },
  "hermanas-mirabal": {
    displayName: "Hermanas Mirabal",
    municipalities: ["salcedo", "tenares", "villa-tapia"],
  },
  independencia: {
    displayName: "Independencia",
    municipalities: [
      "cristobal",
      "duverge",
      "jimani",
      "la-descubierta",
      "mella",
      "postrer-rio",
    ],
  },
  "la-altagracia": {
    displayName: "La Altagracia",
    municipalities: ["higuey", "san-rafael-del-yuma", "guaymate"],
  },
  "la-romana": {
    displayName: "La Romana",
    municipalities: ["la-romana", "villa-hermosa"],
  },
  "la-vega": {
    displayName: "La Vega",
    municipalities: ["constanza", "jarabacoa", "jima-abajo", "la-vega"],
  },
  "maria-trinidad-sanchez": {
    displayName: "María Trinidad Sánchez",
    municipalities: ["cabrera", "el-factor", "nagua", "rio-san-juan"],
  },
  "monsenor-nouel": {
    displayName: "Monseñor Nouel",
    municipalities: ["bonao", "maimon", "piedra-blanca"],
  },
  "monte-cristi": {
    displayName: "Monte Cristi",
    municipalities: [
      "castanuelas",
      "guayubin",
      "las-matas-de-santa-cruz",
      "monte-cristi",
      "pepillo-salcedo",
      "villa-vasquez",
    ],
  },
  "monte-plata": {
    displayName: "Monte Plata",
    municipalities: [
      "bayaguana",
      "monte-plata",
      "peralvillo",
      "sabana-grande-de-boya",
      "yamasa",
    ],
  },
  pedernales: {
    displayName: "Pedernales",
    municipalities: ["oviedo", "pedernales"],
  },
  peravia: {
    displayName: "Peravia",
    municipalities: ["bani", "matanzas", "nizao"],
  },
  "puerto-plata": {
    displayName: "Puerto Plata",
    municipalities: [
      "altamira",
      "guananico",
      "imbert",
      "los-hidalgos",
      "luperon",
      "puerto-plata",
      "sosua",
      "villa-isabela",
      "villa-montellano",
    ],
  },
  samana: {
    displayName: "Samaná",
    municipalities: ["las-terrenas", "samana", "sanchez"],
  },
  "san-cristobal": {
    displayName: "San Cristóbal",
    municipalities: [
      "cambita-garabitos",
      "haina",
      "los-cacaos",
      "nigua",
      "sabana-grande-de-palenque",
      "san-cristobal",
      "villa-altagracia",
      "yaguate",
    ],
  },
  "san-jose-de-ocoa": {
    displayName: "San José de Ocoa",
    municipalities: ["rancho-arriba", "sabana-larga", "san-jose-de-ocoa"],
  },
  "san-juan": {
    displayName: "San Juan",
    municipalities: [
      "bohechio",
      "el-cercado",
      "juan-de-herrera",
      "las-matas-de-farfan",
      "san-juan",
      "vallejuelo",
    ],
  },
  "san-pedro-de-macoris": {
    displayName: "San Pedro de Macorís",
    municipalities: [
      "consuelo",
      "guayacanes",
      "los-llanos",
      "quisqueya",
      "ramon-santana",
      "san-pedro-de-macoris",
    ],
  },
  "sanchez-ramirez": {
    displayName: "Sánchez Ramírez",
    municipalities: ["cevicos", "cotui", "fantino", "la-mata"],
  },
  santiago: {
    displayName: "Santiago",
    municipalities: [
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
    ],
  },
  "santiago-rodriguez": {
    displayName: "Santiago Rodríguez",
    municipalities: ["moncion", "sabaneta", "villa-los-almacigos"],
  },
  "santo-domingo": {
    displayName: "Santo Domingo",
    municipalities: [
      "boca-chica",
      "los-alcarrizos",
      "pedro-brand",
      "san-antonio-de-guerra",
      "santo-domingo-este",
      "santo-domingo-norte",
      "santo-domingo-oeste",
    ],
  },
  valverde: {
    displayName: "Valverde",
    municipalities: ["esperanza", "laguna-salada", "mao"],
  },
} as const satisfies Record<
  Provinces,
  {
    displayName: string;
    municipalities: Municipalities[];
  }
>;
