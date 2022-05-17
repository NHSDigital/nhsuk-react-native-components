import React from 'react';
import { PressableProps, StyleSheet, View } from 'react-native';
import { ArrowRightCircle } from '../icons';
import nhsuk from '../../styles';
import Text from '../text';
import Pressable from '../pressable';

const iconSize = 36;

export type ActionLinkProps = {
  label: string;
  noMarginBottom?: boolean;
} & PressableProps;

const ActionLink = ({ label, noMarginBottom, ...rest }: ActionLinkProps) => (
  <Pressable accessibilityLabel={label} accessibilityRole="link" {...rest}>
    <View style={[styles.base, noMarginBottom && styles.noMarginBottom]}>
      <ArrowRightCircle width={iconSize} height={iconSize} fill={nhsuk.colours.primary.green} style={styles.icon} />
      <Text noMarginBottom variant="h4" style={styles.label}>
        {label}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  icon: {
    left: -3,
  },
  label: {
    // In the nhsuk-frontend library the value is 38, with a browser CSS rule accounting for removing the 36 (icon size).
    paddingLeft: 38 - iconSize,
    color: nhsuk.colours.links.linkColor,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
});

export default ActionLink;
