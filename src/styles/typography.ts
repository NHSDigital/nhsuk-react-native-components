import type { StyleSheet, TextStyle } from 'react-native';
import nhsuk from '.';
import { shade } from '../utils';
import colours from './colours';

const typography = {
  text: {
    textColour: colours.primary.black,
    secondaryTextColour: colours.greyscale.grey1,
    printTextColour: colours.primary.black,
  },
  links: {
    linkColour: colours.primary.blue,
    linkHoverColour: colours.primary.darkPink,
    linkActiveColour: shade(colours.primary.blue, 0.5),
    linkVisitedColour: colours.primary.purple,
    focusBackgroundColour: colours.primary.yellow,
    focusTextColour: colours.primary.black,
  },
  fontFamily: {
    normal: 'FrutigerLTPro-Roman',
    bold: 'FrutigerLTPro-Bold',
    italic: 'FrutigetLTPro-Italic',
  },
  scale: {
    14: { fontSize: 12, lineHeight: 20 },
    16: { fontSize: 14, lineHeight: 24 },
    19: { fontSize: 16, lineHeight: 24 },
    22: { fontSize: 18, lineHeight: 28 },
    24: { fontSize: 20, lineHeight: 28 },
    32: { fontSize: 24, lineHeight: 32 },
    48: { fontSize: 32, lineHeight: 40 },
    64: { fontSize: 48, lineHeight: 56 },
  },
} as const;

/**
 * Text Styles
 */
export type TextSize = keyof typeof typography.scale;

const baseTextStyle: TextStyle = {
  fontFamily: typography.fontFamily.normal,
  marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
} as const;

export const textStyles: StyleSheet.NamedStyles<Record<TextSize, TextStyle>> = {
  [14]: { ...typography.scale[14], ...baseTextStyle },
  [16]: { ...typography.scale[16], ...baseTextStyle },
  [19]: { ...typography.scale[19], ...baseTextStyle },
  [22]: { ...typography.scale[22], ...baseTextStyle },
  [24]: { ...typography.scale[24], ...baseTextStyle },
  [32]: { ...typography.scale[32], ...baseTextStyle },
  [48]: { ...typography.scale[48], ...baseTextStyle },
  [64]: { ...typography.scale[64], ...baseTextStyle },
} as const;

/**
 * Heading Styles
 */
export type HeadingSize = 'xl' | 'l' | 'm' | 's' | 'xs' | 'xs';

const baseHeadingStyle: TextStyle = {
  fontFamily: typography.fontFamily.bold,
  marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
};

export const headingStyles: StyleSheet.NamedStyles<Record<HeadingSize, TextStyle>> = {
  xs: { ...baseHeadingStyle, ...typography.scale[19] },
  s: { ...baseHeadingStyle, ...typography.scale[22] },
  m: { ...baseHeadingStyle, ...typography.scale[24] },
  l: { ...baseHeadingStyle, ...typography.scale[32] },
  xl: { ...baseHeadingStyle, ...typography.scale[48] }, // TODO: Investigate marginBottom spacing 5
};

/**
 * Body Styles
 */
export type BodySize = 'l' | 'm' | 's';

const baseBodyStyle: TextStyle = {
  fontFamily: typography.fontFamily.normal,
  marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
};

export const bodyStyles: StyleSheet.NamedStyles<Record<BodySize, TextStyle>> = {
  l: { ...baseBodyStyle, ...typography.scale[24] }, // TODO: Investigate marginBottom spacing 5
  m: { ...baseBodyStyle, ...typography.scale[19] },
  s: { ...baseBodyStyle, ...typography.scale[16] },
};

/**
 * Caption Styles
 */
export type CaptionSize = 'xl' | 'l' | 'm';

const baseCaptionStyle = {
  fontFamily: typography.fontFamily.normal,
  marginBottom: nhsuk.spacing.spacingResponsiveScale[1],
  color: typography.text.secondaryTextColour,
} as const;

export const captionStyles: StyleSheet.NamedStyles<Record<CaptionSize, TextStyle>> = {
  xl: { ...baseCaptionStyle, ...typography.scale[32] },
  l: { ...baseCaptionStyle, ...typography.scale[24] },
  m: { ...baseCaptionStyle, ...typography.scale[19] },
} as const;

export default typography;
