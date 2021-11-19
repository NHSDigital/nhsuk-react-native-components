import color from 'color';

const white = color('#fff');
const black = color('#000');

export const shade = (colour: string, percentage: number) => color(colour).mix(black, percentage).hex();
export const tint = (colour: string, percentage: number) => color(colour).mix(white, percentage).hex();
