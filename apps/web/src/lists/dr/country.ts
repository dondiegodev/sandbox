// ISO 3661-1 alpha-2
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
export const iso36611Alpha2 = ["DO"] as const;

export type iso36611Alpha2 = (typeof iso36611Alpha2)[number];

export const iso36611Alpha2Map = {
	DO: { displayName: "República Dominicana" },
} as const satisfies Record<iso36611Alpha2, { displayName: string }>;
