import React from 'react';
import { PressableProps, StyleSheet } from 'react-native';
import nhsuk from '../../styles';
import { ChevronLeft } from '../icons';
import Pressable from '../pressable';
import Text from '../text';

export type BackLinkProps = {
  title: String;
} & PressableProps;

const BackLink = ({ title, style, ...rest }: BackLinkProps) => (
  <Pressable accessibilityRole="link" style={[styles.pressable, style as any]} {...rest}>
    <ChevronLeft width={24} height={24} fill={nhsuk.colours.links.linkColor} />
    <Text linkStyling noMarginBottom variant="nhsuk-body-s" style={styles.backLinkText}>
      {title}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  backLinkText: {
    textDecorationLine: 'none',
  },
});

export default BackLink;
