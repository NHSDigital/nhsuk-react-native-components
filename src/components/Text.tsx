import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import nhsuk from 'src/styles';

// See: https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core/styles/_typography.scss

export type TextProps = {
  children?: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | keyof typeof textStyles;
  bold?: boolean;
  smallMarginBottom?: boolean;
  noMarginBottom?: boolean;
  linkStyling?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  caption?: string;
  captionAccessibilityLabel?: string;
  flexShrink?: boolean;
  textRef?: React.Ref<any>;
} & RNTextProps;

const Text = ({
  children,
  accessibilityLabel,
  variant = 'nhsuk-body-m',
  bold,
  smallMarginBottom,
  noMarginBottom,
  linkStyling,
  capitalize,
  uppercase,
  caption,
  captionAccessibilityLabel,
  style,
  textRef,
  ...rest
}: TextProps) => {
  let fontStyle: StyleProp<TextStyle> = [styles.base, nhsuk.styles.flexShrink];

  if (variant in textStyles) {
    fontStyle.push(textStyles[variant as keyof typeof textStyles]);
  } else {
    switch (variant) {
      case 'h1':
        fontStyle.push(textStyles['nhsuk-heading-xl']);
        break;
      case 'h2':
        fontStyle.push(textStyles['nhsuk-heading-l']);
        break;
      case 'h3':
        fontStyle.push(textStyles['nhsuk-heading-m']);
        break;
      case 'h4':
        fontStyle.push(textStyles['nhsuk-heading-s']);
        break;
      case 'h5':
        fontStyle.push(textStyles['nhsuk-heading-xs']);
        break;
      case 'h6':
        fontStyle.push(textStyles['nhsuk-heading-xxs']);
        break;
      default:
        fontStyle.push(textStyles['nhsuk-body-m']);
        break;
    }
  }

  const isHeading = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'nhsuk-heading-xxs',
    'nhsuk-heading-xs',
    'nhsuk-heading-s',
    'nhsuk-heading-m',
    'nhsuk-heading-l',
    'nhsuk-heading-xl',
  ].includes(variant);

  if (bold) {
    fontStyle.push(styles.bold);
  }

  if (linkStyling) {
    fontStyle.push(styles.linkStyling);
  }

  if (capitalize) {
    fontStyle.push(styles.capitalize);
  }

  if (uppercase) {
    fontStyle.push(styles.uppercase);
  }

  if (smallMarginBottom) {
    fontStyle.push(styles.smallMarginBottom);
  }

  if (noMarginBottom) {
    fontStyle.push(nhsuk.styles.noMarginBottom);
  }

  /**
   * The accessibility label is either the explicit label or the child node if it is a string. It it strictly set as
   * an optional prop, without defaulting to undefined, in order to prevent screen readers from reading 'Object object'
   * for some complex components such as the Donor Info card blood group link.
   */
  const extraProps: RNTextProps = {};

  if (accessibilityLabel) {
    extraProps.accessibilityLabel = accessibilityLabel;
  } else if (typeof children === 'string') {
    extraProps.accessibilityLabel = children?.toString();
  }

  return (
    <>
      {!!caption && (
        <RNText
          accessibilityLabel={captionAccessibilityLabel || caption}
          style={textStyles['nhsuk-caption-l']}
          accessibilityRole={isHeading ? 'header' : 'text'}
          ref={textRef}>
          {caption}
        </RNText>
      )}
      <RNText
        // accessibilityLabel={textAccessibilityLabel}
        {...extraProps}
        style={[fontStyle, style]}
        accessibilityRole={isHeading ? 'header' : 'text'}
        ref={textRef}
        {...rest}>
        {children}
      </RNText>
    </>
  );
};

export const styles = StyleSheet.create({
  base: {
    color: nhsuk.colours.text.textColor,
  },
  bold: {
    fontFamily: nhsuk.fontFamilies.bold,
  },
  smallMarginBottom: {
    marginBottom: 10,
  },
  linkStyling: {
    color: nhsuk.colours.links.linkColor,
    textDecorationLine: 'underline',
    textDecorationColor: nhsuk.colours.links.linkColor,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
});

/**
 * Each font style should have:
 * - font family
 * - font size
 * - line height
 * - margin bottom (all values have been multiplied by 4 for demonstration purposes)
 */
export const textStyles = StyleSheet.create({
  'nhsuk-heading-xl': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[48],
    // Requested by designer - different to NHS design.
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5],
  },
  'nhsuk-heading-l': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[32],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-heading-m': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[24],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-heading-s': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[22],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-heading-xs': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[19],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-heading-xxs': {
    fontFamily: nhsuk.fontFamilies.bold,
    ...nhsuk.typography.typographyScale[19],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-body-l': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[24],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5],
  },
  'nhsuk-body-m': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[19],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-body-s': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[16],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-64': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[64],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-48': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[48],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-32': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[32],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-24': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[24],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-22': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[22],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-19': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[19],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-16': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[16],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-u-font-size-14': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[14],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  'nhsuk-caption-xl': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[32],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[1],
    color: nhsuk.colours.text.secondaryTextColor,
  },
  'nhsuk-caption-l': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[24],
    marginBottom: nhsuk.spacing.spacingResponsiveScale[1],
    color: nhsuk.colours.text.secondaryTextColor,
  },
  'nhsuk-caption-m': {
    fontFamily: nhsuk.fontFamilies.normal,
    ...nhsuk.typography.typographyScale[19],
    color: nhsuk.colours.text.secondaryTextColor,
  },
});

export default Text;
