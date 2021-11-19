import React, { FC, useState } from 'react';
import { PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';
import Pressable from '../pressable';

const cardBorderWidth = 1;
const cardBorderBottomWidth = nhsuk.spacing.spacingPoints[1];
const cardBorderColor = nhsuk.colours.greyscale.grey4;
const cardBorderHoverColor = nhsuk.colours.greyscale.grey3;

export type CardProps = {
  noMarginBottom?: boolean;
  pressableStyle?: boolean;
  style?: StyleProp<any>;
  containerStyle?: StyleProp<any>;
  cardRef?: React.Ref<any>;
  testID?: string;
} & PressableProps;

const Card: FC<CardProps> = ({
  children,
  noMarginBottom,
  pressableStyle,
  onPress,
  style,
  containerStyle,
  cardRef,
  testID,
  ...rest
}: CardProps) => {
  const [pressed, setPressed] = useState(false);
  const appliedContainerStyle: StyleProp<ViewStyle> = [
    styles.container,
    noMarginBottom && nhsuk.styles.noMarginBottom,
    containerStyle,
  ];

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="link"
        onPress={onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        style={appliedContainerStyle}
        pressableRef={cardRef}
        {...rest}>
        <View
          style={[styles.base, pressableStyle && styles.pressable, pressableStyle && pressed && styles.pressed, style]}
          testID={testID}>
          {children}
        </View>
      </Pressable>
    );
  }

  return (
    <View
      style={[
        styles.base,
        styles.container,
        pressableStyle && styles.pressable,
        pressableStyle && pressed && styles.pressed,
        noMarginBottom && nhsuk.styles.noMarginBottom,
        style,
      ]}
      testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[7],
    alignSelf: 'stretch',
  },
  base: {
    borderWidth: cardBorderWidth,
    borderColor: cardBorderColor,
    backgroundColor: nhsuk.colours.primary.white,
    padding: nhsuk.spacing.spacingResponsiveScale[5],
  },
  pressable: {
    borderBottomWidth: cardBorderBottomWidth,
  },
  pressed: {
    borderColor: cardBorderHoverColor,
    bottom: -cardBorderWidth,
  },
});

export default Card;
