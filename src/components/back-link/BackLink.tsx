import React from 'react';
import { PressableProps, StyleSheet } from 'react-native';
import Text from '../text';
import ChevronLeftIcon from 'assets/icons/icon-chevron-left.svg';
import nhsuk from 'src/styles';
import Pressable from '../pressable';

export type BackLinkProps = {
  title: String;
} & PressableProps;

const BackLink = ({ title, style, ...rest }: BackLinkProps) => (
  <Pressable accessibilityRole="link" style={[styles.pressable, style as any]} {...rest}>
    <ChevronLeftIcon width={24} height={24} fill={nhsuk.colours.links.linkColor} />
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
