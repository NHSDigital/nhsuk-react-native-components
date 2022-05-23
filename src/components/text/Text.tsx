import React, { ReactNode } from 'react';
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { TextSize } from 'src/styles/typography';
import { textStyles } from '../../styles/typography';

// See: https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core/styles/_typography.scss

export type TextProps = {
  // variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | keyof typeof textStyles;
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

type NewTextProps = {
  children: ReactNode;
  style: StyleProp<TextStyle>;
  size: TextSize;
};

const NewText: React.FC<NewTextProps> = ({ children, size, style, ...rest }) => {
  return (
    <RNText style={[textStyles[size], style]} {...rest}>
      {children}
    </RNText>
  );
};

// const Text: React.FC<TextProps> = ({
//   children,
//   accessibilityLabel,
//   variant = 'nhsuk-body-m',
//   bold,
//   smallMarginBottom,
//   noMarginBottom,
//   linkStyling,
//   capitalize,
//   uppercase,
//   caption,
//   captionAccessibilityLabel,
//   style,
//   textRef,
//   ...rest
// }: TextProps) => {
//   let fontStyle: StyleProp<TextStyle> = [styles.base, nhsuk.styles.flexShrink];

//   if (variant in textStyles) {
//     fontStyle.push(textStyles[variant as keyof typeof textStyles]);
//   } else {
//     switch (variant) {
//       case 'h1':
//         fontStyle.push(textStyles['nhsuk-heading-xl']);
//         break;
//       case 'h2':
//         fontStyle.push(textStyles['nhsuk-heading-l']);
//         break;
//       case 'h3':
//         fontStyle.push(textStyles['nhsuk-heading-m']);
//         break;
//       case 'h4':
//         fontStyle.push(textStyles['nhsuk-heading-s']);
//         break;
//       case 'h5':
//         fontStyle.push(textStyles['nhsuk-heading-xs']);
//         break;
//       case 'h6':
//         fontStyle.push(textStyles['nhsuk-heading-xxs']);
//         break;
//       default:
//         fontStyle.push(textStyles['nhsuk-body-m']);
//         break;
//     }
//   }

//   const isHeading = [
//     'h1',
//     'h2',
//     'h3',
//     'h4',
//     'h5',
//     'h6',
//     'nhsuk-heading-xxs',
//     'nhsuk-heading-xs',
//     'nhsuk-heading-s',
//     'nhsuk-heading-m',
//     'nhsuk-heading-l',
//     'nhsuk-heading-xl',
//   ].includes(variant);

//   if (bold) {
//     fontStyle.push(styles.bold);
//   }

//   if (linkStyling) {
//     fontStyle.push(styles.linkStyling);
//   }

//   if (capitalize) {
//     fontStyle.push(styles.capitalize);
//   }

//   if (uppercase) {
//     fontStyle.push(styles.uppercase);
//   }

//   if (smallMarginBottom) {
//     fontStyle.push(styles.smallMarginBottom);
//   }

//   if (noMarginBottom) {
//     fontStyle.push(nhsuk.styles.noMarginBottom);
//   }

//   /**
//    * The accessibility label is either the explicit label or the child node if it is a string. It it strictly set as
//    * an optional prop, without defaulting to undefined, in order to prevent screen readers from reading 'Object object'
//    * for some complex components such as the Donor Info card blood group link.
//    */
//   const extraProps: RNTextProps = {};

//   if (accessibilityLabel) {
//     extraProps.accessibilityLabel = accessibilityLabel;
//   } else if (typeof children === 'string') {
//     extraProps.accessibilityLabel = children?.toString();
//   }

//   return (
//     <>
//       {!!caption && (
//         <RNText
//           accessibilityLabel={captionAccessibilityLabel || caption}
//           style={textStyles['nhsuk-caption-l']}
//           accessibilityRole={isHeading ? 'header' : 'text'}
//           ref={textRef}>
//           {caption}
//         </RNText>
//       )}
//       <RNText
//         // accessibilityLabel={textAccessibilityLabel}
//         {...extraProps}
//         style={[fontStyle, style]}
//         accessibilityRole={isHeading ? 'header' : 'text'}
//         ref={textRef}
//         {...rest}>
//         {children}
//       </RNText>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   base: {
//     color: nhsuk.colours.text.textColor,
//   },
//   bold: {
//     fontFamily: nhsuk.fontFamilies.bold,
//   },
//   smallMarginBottom: {
//     marginBottom: 10,
//   },
//   linkStyling: {
//     color: nhsuk.colours.links.linkColor,
//     textDecorationLine: 'underline',
//     textDecorationColor: nhsuk.colours.links.linkColor,
//   },
//   capitalize: {
//     textTransform: 'capitalize',
//   },
//   uppercase: {
//     textTransform: 'uppercase',
//   },
// });

/**
 * Each font style should have:
 * - font family
 * - font size
 * - line height
 * - margin bottom (all values have been multiplied by 4 for demonstration purposes)
 */

export default NewText;
