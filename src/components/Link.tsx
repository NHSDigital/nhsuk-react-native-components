import React, { ReactNode } from 'react';
import { TouchableWithoutFeedbackProps, StyleSheet } from 'react-native';
import nhsuk from 'src/styles';
import Pressable from './Pressable';
import Text, { TextProps } from './Text';

/**
 * The Link component includes an "inline" prop that renders the component inline without using the Pressable component.
 * This is because the Pressable component can only render content in a box, with the whole box being pressable. The
 * inline version mitigates this limitation, but it means a minimum hit slop cannot be applied.
 */

export type LinkProps = {
  children?: ReactNode;
  noMarginBottom?: boolean;
  inline?: boolean;
  textProps?: TextProps;
} & TouchableWithoutFeedbackProps;

const Link = ({ children, noMarginBottom, inline, style, accessibilityLabel, textProps, ...rest }: LinkProps) => {
  if (!accessibilityLabel) {
    accessibilityLabel = children?.toString();
  }

  return inline ? (
    <Text
      linkStyling
      noMarginBottom
      accessibilityRole="link"
      accessibilityLabel={accessibilityLabel}
      style={style}
      {...rest}
      {...textProps}>
      {children}
    </Text>
  ) : (
    <Pressable
      accessibilityRole="link"
      style={[styles.container, noMarginBottom && styles.noMarginBottom]}
      accessibilityLabel={accessibilityLabel}
      {...rest}>
      <Text linkStyling noMarginBottom style={style} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  noMarginBottom: {
    marginBottom: 0,
  },
});

export default Link;
