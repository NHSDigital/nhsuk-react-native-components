import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { InlinePressableProps } from 'src/utils/InlinePressableProps';
import nhsuk from '../../styles';
import { ArrowRightCircle } from '../icons';
import Text from '../text';

const iconSize = 36;

// export type ActionLinkProps = { noMarginBottom?: boolean } & Omit<PressableProps, 'children'>;

export interface ActionLinkProps extends InlinePressableProps {
  /** Component for enclosing element (eg: TouchableHighlight, View, etc).
   *
   * @default `Pressable`
   */
  Component: typeof React.Component;

  children: ReactNode;
}

const ActionLink: React.FunctionComponent<ActionLinkProps> = ({
  Component = Pressable,
  children,
  accessibilityLabel,
  pressableProps,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
}) => (
  <Component
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="link"
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    onLongPress={onLongPress}
    {...pressableProps}>
    <View style={[styles.base, noMarginBottom && styles.noMarginBottom]}>
      <ArrowRightCircle width={iconSize} height={iconSize} fill={nhsuk.colours.primary.green} style={styles.icon} />
      <Text noMarginBottom variant="h4" style={styles.label}>
        {children}
      </Text>
    </View>
  </Component>
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
