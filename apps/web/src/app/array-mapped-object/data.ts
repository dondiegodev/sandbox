// NOT ALLOWED - ENUMS CANNOT HAVE OBJECT VALUES
// export enum CarBrandEnum {
//   toyota = { displayName: "Toyota", founded: 1937 },
//   ford = { displayName: "Ford", founded: 1903 },
//   bmw = { displayName: "BMW", founded: 1916 },
// }

export const carBrandList = ["toyota", "ford", "bmw"] as const;

export type CarBrand = (typeof carBrandList)[number];

type CarMetadata = { displayName: string; founded: number };

type CarBrands = Record<CarBrand, CarMetadata>;

export const carBrands = {
  toyota: { displayName: "Toyota", founded: 1937 },
  ford: { displayName: "Ford", founded: 1903 },
  bmw: { displayName: "BMW", founded: 1916 },
} as const satisfies CarBrands;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// BAD EXAMPLE - lacks type safety
export const badCarBrandMeta = {
  toyota: { displayName: "Toyota", founded: 1937 },
  ford: { displayName: "Ford", founded: 1903 },
  bmw: { displayName: "BMW", founded: 1916 },
} as const;

export const carBrandsNoTypeInference = Object.keys(badCarBrandMeta);

export const nestedArrayCarBrands = [
  ["toyota", { displayName: "Toyota", founded: 1937 }],
  ["ford", { displayName: "Ford", founded: 1903 }],
  ["bmw", { displayName: "BMW", founded: 1916 }],
] as const;

// Map
export const carBrandMap = new Map<
  CarBrand,
  { displayName: string; founded: number }
>([
  ["toyota", { displayName: "Toyota", founded: 1937 }],
  ["ford", { displayName: "Ford", founded: 1903 }],
  ["bmw", { displayName: "BMW", founded: 1916 }],
]);
