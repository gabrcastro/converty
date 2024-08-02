export interface FunctionType {
  index: string;
  value: string;
}

export enum languages {
  TITLES = "titles",
  PAGES = "pages",
  INFO = "info",
  FUNCTIONS = "functions",
  FUNCTIONS_A = "functions.acceleration",
  FUNCTIONS_V = "functions.volume",
}

export enum functionType {
  ACCELERATION = "acceleration",
  VOLUME = "volume",
  DENSITY = "density",
  ENERGY = "energy",
  FORCE = "force",
  LENGTH = "length",
  MASS = "mass",
  POWER = "power",
  SPEED = "speed",
  TIME = "time",
}
