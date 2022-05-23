import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';
import colours from 'src/styles/colours';
import typography from 'src/styles/typography';
import { shade } from 'src/utils';

extend([mixPlugin]);

// Constants - Move these out!
const shadowHeight = 4;
const backgroundMixColor = (color: string) => colord(color).mix(nhsuk.colours.greyscale.grey5, 0.5).toHex();

type ButtonVariant = 'primary' | 'secondary' | 'reverse';

// Potentially move these out
const buttonColours: Record<ButtonVariant, { background: string; pressed: string; shadow: string }> = {
  primary: {
    background: colours.primary.green,
    pressed: shade(colours.primary.green, 0.5),
    shadow: shade(colours.primary.green, 0.5),
  },
  secondary: {
    background: colours.greyscale.grey1,
    pressed: shade(colours.greyscale.grey1, 0.5),
    shadow: shade(colours.greyscale.grey1, 0.5),
  },
  reverse: {
    background: colours.primary.white,
    pressed: shade(colours.primary.white, 0.2),
    shadow: colours.primary.black,
  },
};

/**
 * Button Styles
 */
const baseButton: StyleProp<ViewStyle> = {
  borderRadius: 4,
  paddingVertical: 12,
  paddingHorizontal: nhsuk.spacing.spacingPoints[3],
  zIndex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
};

export const button = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5],
  },
  primary: { ...baseButton, backgroundColor: buttonColours.primary.background },
  secondary: { ...baseButton, backgroundColor: buttonColours.secondary.background },
  reverse: { ...baseButton, backgroundColor: buttonColours.reverse.background },
});

export const pressed = StyleSheet.create({
  primary: { top: shadowHeight, backgroundColor: buttonColours.primary.pressed },
  secondary: { top: shadowHeight, backgroundColour: buttonColours.secondary.pressed },
  reverse: { top: shadowHeight, backgroundColour: buttonColours.reverse.pressed },
});

export const disabled = StyleSheet.create({
  primary: { backgroundColor: backgroundMixColor(buttonColours.primary.background) },
  secondary: { backgroundColor: backgroundMixColor(buttonColours.secondary.background) },
  reverse: { backgroundColor: backgroundMixColor(buttonColours.reverse.background) },
});

/**
 * Button Shadow Styles
 */
const baseShadow: StyleProp<ViewStyle> = {
  height: shadowHeight * 2,
  marginTop: -shadowHeight,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
};

export const shadow = StyleSheet.create({
  primary: { ...baseShadow, backgroundColor: buttonColours.primary.shadow },
  secondary: { ...baseShadow, backgroundColor: buttonColours.secondary.shadow },
  reverse: { ...baseShadow, backgroundColor: buttonColours.reverse.shadow },
});

export const disabledShadow = StyleSheet.create({
  primary: { backgroundColor: backgroundMixColor(buttonColours.primary.shadow) },
  secondary: { backgroundColor: backgroundMixColor(buttonColours.secondary.shadow) },
  reverse: { backgroundColor: backgroundMixColor(buttonColours.reverse.shadow) },
});

/**
 * Button Text Styles
 */
const baseText: StyleProp<TextStyle> = {
  color: colours.primary.white,
  fontFamily: typography.fontFamily.bold,
  marginBottom: nhsuk.spacing.spacingPoints[0],
  textAlign: 'center',
};

export const text = StyleSheet.create({
  primary: { ...baseText },
  secondary: { ...baseText },
  reverse: { ...baseText, color: colours.primary.black },
});
