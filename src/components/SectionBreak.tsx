import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';

type SectionBreakProps = {
  variant?: 'xl' | 'l' | 'm';
};

const SectionBreak = ({ variant = 'l' }: SectionBreakProps) => {
  let style: StyleProp<ViewStyle> = [styles.base];

  switch (variant) {
    case 'xl':
      style.push(styles['nhsuk-section-break--xl']);
      break;
    case 'l':
      style.push(styles['nhsuk-section-break--l']);
      break;
    case 'm':
      style.push(styles['nhsuk-section-break--m']);
      break;
    default:
      style.push(styles['nhsuk-section-break--l']);
      break;
  }

  return <View style={style} />;
};

export const styles = StyleSheet.create({
  base: {
    borderBottomWidth: 1,
    borderBottomColor: nhsuk.colours.border.borderColor,
    alignSelf: 'stretch',
  },
  'nhsuk-section-break--xl': {
    marginVertical: nhsuk.spacing.spacingResponsiveScale[8],
  },
  'nhsuk-section-break--l': {
    marginVertical: nhsuk.spacing.spacingResponsiveScale[6],
  },
  'nhsuk-section-break--m': {
    marginVertical: nhsuk.spacing.spacingResponsiveScale[4],
  },
});

export default SectionBreak;
