export const primaryColours = {
  blue: '#005eb8',
  white: '#ffffff',
  black: '#212b32',
  green: '#007f3b',
  purple: '#330072',
  darkPink: '#7C2855',
  red: '#d5281b',
  yellow: '#ffeb3b',
};

export const secondaryColours = {
  paleYellow: '#fff9c4',
  warmYellow: '#ffb81C',
  orange: '#ED8B00',
  aquaGreen: '#00A499',
  pink: '#AE2573',
};

export const greyscaleColours = {
  grey1: '#4c6272',
  grey2: '#768692',
  grey3: '#aeb7bd',
  grey4: '#d8dde0',
  grey5: '#f0f4f5',
};

export type PrimaryColour = keyof typeof primaryColours;
export type SecondaryColour = keyof typeof secondaryColours;
export type GreyscaleColour = keyof typeof greyscaleColours;

const colours = {
  primary: primaryColours,
  secondary: secondaryColours,
  greyscale: greyscaleColours,
};

export default colours;
