export const phoneCountryCodes = ["USA", "DO"] as const;

export type PhoneCountryCode = (typeof phoneCountryCodes)[number];

export const phoneCountryCodesMapping = {
	USA: "+1",
	DO: "+1",
} as const satisfies Record<PhoneCountryCode, string>;
