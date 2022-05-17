import { colord, extend } from 'colord';
import mixPlugin from 'colord/plugins/mix';
import React, { useState } from 'react';
import { PressableProps, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import nhsuk from '../../styles';
import Pressable from '../pressable';
import Text, { TextProps } from '../text';

extend([mixPlugin]);

export type ButtonProps = {
  title?: string;
  variant?: 'primary' | 'secondary' | 'reverse';
  noMarginBottom?: boolean;
  accessibilityLabel?: string;
  accessible?: boolean;
  styleButton?: ViewStyle;
  buttonRef?: React.Ref<any>;
  textProps?: TextProps;
} & PressableProps;

const Button = ({
  title,
  variant = 'primary',
  noMarginBottom,
  style,
  styleButton,
  accessibilityLabel,
  disabled,
  buttonRef,
  textProps,
  ...rest
}: ButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const containerStyle: StyleProp<ViewStyle> = [styles.container];
  const buttonStyle: StyleProp<ViewStyle> = [styles.button, styleButton];
  const shadowStyle: StyleProp<ViewStyle> = [styles.shadow];

  switch (variant) {
    case 'secondary':
      buttonStyle.push(styles.secondary);
      shadowStyle.push(styles.secondaryShadow);
      pressed && buttonStyle.push(styles.pressedSecondary);

      if (disabled) {
        buttonStyle.push(styles.disabledSecondary);
        shadowStyle.push(styles.disabledSecondaryShadow);
      }
      break;
    case 'reverse':
      buttonStyle.push(styles.reverse);
      shadowStyle.push(styles.reverseShadow);
      pressed && buttonStyle.push(styles.pressedReverse);

      if (disabled) {
        buttonStyle.push(styles.disabledReverse);
        shadowStyle.push(styles.disabledReverseShadow);
      }
      break;
    default:
      buttonStyle.push(styles.primary);
      shadowStyle.push(styles.primaryShadow);
      pressed && buttonStyle.push(styles.pressedPrimary);

      if (disabled) {
        buttonStyle.push(styles.disabledPrimary);
        shadowStyle.push(styles.disabledPrimaryShadow);
      }
      break;
  }

  if (noMarginBottom) {
    containerStyle.push(nhsuk.styles.noMarginBottom);
  }

  const textStyle: StyleProp<TextStyle> = {
    color: variant === 'reverse' ? nhsuk.colours.buttons.reverseButtonTextColor : nhsuk.colours.buttons.buttonTextColor,
    fontFamily: nhsuk.fontFamilies.bold,
    marginBottom: 0,
    textAlign: 'center',
  };

  return (
    <Pressable
      style={[containerStyle, style as any]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel || title}
      accessibilityRole="button"
      pressableRef={buttonRef}
      {...rest}>
      <View style={buttonStyle}>
        <Text style={textStyle} accessible={false} {...textProps}>
          {title}
        </Text>
      </View>
      <View style={shadowStyle} />
    </Pressable>
  );
};

const borderRadius = 4;
const shadowHeight = 4;
const backgroundMixColor = (color: string) => colord(color).mix(nhsuk.colours.greyscale.grey5, 0.5).toHex();

const styles = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5],
  },
  button: {
    borderRadius: borderRadius,
    paddingVertical: 12,
    paddingHorizontal: nhsuk.spacing.spacingPoints[3],
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  shadow: {
    height: shadowHeight * 2,
    marginTop: -shadowHeight,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  primary: {
    backgroundColor: nhsuk.colours.buttons.buttonColor,
  },
  secondary: {
    backgroundColor: nhsuk.colours.buttons.secondaryButtonColor,
  },
  reverse: {
    backgroundColor: nhsuk.colours.buttons.reverseButtonColor,
  },
  primaryShadow: {
    backgroundColor: nhsuk.colours.buttons.buttonShadowColor,
  },
  secondaryShadow: {
    backgroundColor: nhsuk.colours.buttons.secondaryButtonShadowColor,
  },
  reverseShadow: {
    backgroundColor: nhsuk.colours.buttons.reverseButtonShadowColor,
  },
  pressedPrimary: {
    top: shadowHeight,
    backgroundColor: nhsuk.colours.buttons.buttonActiveColor,
  },
  pressedSecondary: {
    top: shadowHeight,
    backgroundColor: nhsuk.colours.buttons.secondaryButtonActiveColor,
  },
  pressedReverse: {
    top: shadowHeight,
    backgroundColor: nhsuk.colours.buttons.reverseButtonActiveColor,
  },
  pressedSearch: {
    backgroundColor: nhsuk.colours.buttons.buttonActiveColor,
  },
  disabledPrimary: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.buttonColor),
  },
  disabledSecondary: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.secondaryButtonColor),
  },
  disabledReverse: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.reverseButtonColor),
  },
  disabledPrimaryShadow: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.buttonShadowColor),
  },
  disabledSecondaryShadow: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.secondaryButtonShadowColor),
  },
  disabledReverseShadow: {
    backgroundColor: backgroundMixColor(nhsuk.colours.buttons.reverseButtonShadowColor),
  },
});

export default Button;
