export const unit = [
  // UNIT
  "unit",
] as const;

export const mass = [
  // MASS
  "mg",
  "g",
  "oz",
  "lb",
  "kg",
  "qntl",
  "ton",
] as const;

export const length = [
  // LENGTH
  "mm",
  "cm",
  "in",
  "yd",
  "ft",
  "m",
  "km",
  "mi",
] as const;

export const area = [
  // AREA
  "cm2",
  "in2",
  "ft2",
  "m2",
  "km2",
  "mi2",
] as const;

export const volume = [
  // VOLUME
  "ml",
  "cm3",
  "in3",
  "ft3",
  "m3",
  "l",
  "gal",
] as const;

export const time = [
  // TIME
  "sec",
  "min",
  "hr",
  "day",
  "wk",
  "yy",
] as const;

export const unitTuples = [
  ["Unit", unit],
  ["Mass", mass],
  ["Length", length],
  ["Area", area],
  ["Volume", volume],
  ["Time", time],
] as const;

export const units = [
  ...unit,
  ...mass,
  ...length,
  ...area,
  ...volume,
  ...time,
] as const;

export type Units = (typeof units)[number];
