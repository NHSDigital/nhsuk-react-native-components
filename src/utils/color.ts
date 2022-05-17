import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';

extend([mixPlugin]);

const white = colord('#fff');
const black = colord('#000');

export const shade = (colour: string, percentage: number) => colord(colour).mix(black, percentage).toHex();
export const tint = (colour: string, percentage: number) => colord(colour).mix(white, percentage).toHex();
