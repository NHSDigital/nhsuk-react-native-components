import React from 'react';
import { StyleSheet } from 'react-native';
import nhsuk from 'src/styles';
import { shade, tint } from 'src/utils/color';
import Text, { TextProps } from '../text';

export type TagProps = {
  color?: 'white' | 'grey' | 'green' | 'aqua-green' | 'blue' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow';
} & TextProps;

const Tag = ({ color, style, ...rest }: TagProps) => (
  <Text
    style={[styles.tag, color && styles[color as keyof typeof styles], style]}
    noMarginBottom
    {...rest}
    maxFontSizeMultiplier={2.3}
  />
);

const styles = StyleSheet.create({
  tag: {
    ...nhsuk.typography.typographyScale[16],
    lineHeight: nhsuk.typography.typographyScale[16].fontSize + 2,
    fontFamily: nhsuk.fontFamilies.bold,
    backgroundColor: shade(nhsuk.colours.primary.blue, 0.1),
    borderColor: shade(nhsuk.colours.primary.blue, 0.1),
    borderWidth: 1,
    color: nhsuk.colours.primary.white,
    paddingHorizontal: nhsuk.spacing.spacingPoints[2],
    paddingVertical: nhsuk.spacing.spacingPoints[1],
    textAlignVertical: 'center',
    flexShrink: 0,
  },
  white: {
    backgroundColor: nhsuk.colours.primary.white,
    borderColor: nhsuk.colours.primary.black,
    color: nhsuk.colours.primary.black,
  },
  grey: {
    backgroundColor: tint(nhsuk.colours.greyscale.grey1, 0.8),
    borderColor: shade(nhsuk.colours.greyscale.grey1, 0.4),
    color: shade(nhsuk.colours.greyscale.grey1, 0.4),
  },
  green: {
    backgroundColor: tint(nhsuk.colours.primary.green, 0.8),
    borderColor: shade(nhsuk.colours.primary.green, 0.4),
    color: shade(nhsuk.colours.primary.green, 0.4),
  },
  'aqua-green': {
    backgroundColor: tint(nhsuk.colours.secondary.aquaGreen, 0.8),
    borderColor: shade(nhsuk.colours.secondary.aquaGreen, 0.5),
    color: shade(nhsuk.colours.secondary.aquaGreen, 0.5),
  },
  blue: {
    backgroundColor: tint(nhsuk.colours.primary.blue, 0.8),
    borderColor: shade(nhsuk.colours.primary.blue, 0.3),
    color: shade(nhsuk.colours.primary.blue, 0.3),
  },
  purple: {
    backgroundColor: tint(nhsuk.colours.primary.purple, 0.8),
    borderColor: shade(nhsuk.colours.primary.purple, 0.3),
    color: shade(nhsuk.colours.primary.purple, 0.3),
  },
  pink: {
    backgroundColor: tint(nhsuk.colours.secondary.pink, 0.8),
    borderColor: shade(nhsuk.colours.secondary.pink, 0.5),
    color: shade(nhsuk.colours.secondary.pink, 0.5),
  },
  red: {
    backgroundColor: tint(nhsuk.colours.primary.red, 0.8),
    borderColor: shade(nhsuk.colours.primary.red, 0.5),
    color: shade(nhsuk.colours.primary.red, 0.5),
  },
  orange: {
    backgroundColor: tint(nhsuk.colours.secondary.warmYellow, 0.5),
    borderColor: shade(nhsuk.colours.secondary.warmYellow, 0.7),
    color: shade(nhsuk.colours.secondary.warmYellow, 0.7),
  },
  yellow: {
    backgroundColor: tint(nhsuk.colours.primary.yellow, 0.5),
    borderColor: shade(nhsuk.colours.primary.yellow, 0.7),
    color: shade(nhsuk.colours.primary.yellow, 0.7),
  },
});

export default Tag;
