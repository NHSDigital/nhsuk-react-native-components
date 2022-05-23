import React, { ReactNode, useState } from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, View, ViewProps, ViewStyle } from 'react-native';
import { TextSize } from 'src/styles/typography';
import { InlinePressableProps } from 'src/utils/InlinePressableProps';
import Pressable from '../pressable';
import Text, { TextProps } from '../text';
import * as styles from './styles';

export interface ButtonProps extends InlinePressableProps {
  /** Component for enclosing element (eg: TouchableHighlight, View, etc).
   *
   * @default `Pressable`
   */
  Component: typeof React.Component;

  /**
   * Variant (style) of the button
   * @default `primary`
   */
  variant: 'primary' | 'secondary' | 'reverse';

  /** Children */
  children: ReactNode;

  /** Add additional styling for container component */
  containerStyle?: StyleProp<ViewStyle>;

  /** Disabled */
  disabled?: boolean;

  /** Add additional props for button component */
  buttonProps?: ViewProps;

  /** Add additional styling for button component */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Change the text size of the button
   * @default `14`
   */
  textSize: TextSize;

  /** Add additional props for text component */
  textProps?: TextProps;

  /** Add additional styles for text component */
  textStyle?: StyleProp<TextStyle>;

  /** Add additional props for shadow component */
  shadowProps?: ViewProps;

  /** Add additional styles for shadow component */
  shadowStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  variant,
  accessibilityLabel,
  containerStyle,
  pressableProps,
  buttonProps,
  buttonStyle,
  textSize,
  textStyle,
  shadowStyle,
  textProps,
  Component = Pressable,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
}) => {
  const [pressed, setPressed] = useState<boolean>(false);

  const handlePressIn = (event: GestureResponderEvent) => {
    event.persist();
    setPressed(true);
    if (onPressIn) {
      return onPressIn(event);
    }
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    event.persist();
    setPressed(false);
    if (onPressOut) {
      return onPressOut(event);
    }
  };

  return (
    <Component
      style={[styles.button.container, containerStyle]}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={onLongPress}
      {...pressableProps}>
      <View
        style={[
          styles.button[variant],
          disabled && styles.disabled[variant],
          pressed && styles.pressed[variant],
          buttonStyle,
        ]}
        {...buttonProps}>
        <Text size={textSize} style={(styles.text[variant], textStyle)} {...textProps}>
          {children}
        </Text>
      </View>
      <View style={[styles.shadow[variant], disabled && styles.disabledShadow[variant], shadowStyle]} />
    </Component>
  );
};

Button.defaultProps = {
  variant: 'primary',
  textSize: 14,
};

export default Button;
