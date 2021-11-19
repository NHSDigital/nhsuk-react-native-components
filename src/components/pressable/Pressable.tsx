import React from 'react';
import { useState } from 'react';
import { Insets, Pressable as RNPressable, PressableProps as RNPressableProps, View } from 'react-native';
import calculateMinHitSlop from 'src/utils/calculateMinHitSlop';

export type PressableProps = {
  pressableRef?: React.Ref<View>;
} & RNPressableProps;

/**
 * This custom Pressable component includes a minimum width/height pressable area
 * based on accessibility requirements. See the calculateMinHitSlop function for more info.
 */
const Pressable = ({ pressableRef, accessibilityRole, ...rest }: PressableProps) => {
  const [hitSlop, setHitSlop] = useState<Insets>();

  return (
    <RNPressable
      hitSlop={hitSlop}
      ref={pressableRef}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout;
        setHitSlop(calculateMinHitSlop(width, height));
      }}
      accessibilityRole={accessibilityRole || 'link'}
      {...rest}
    />
  );
};

export default Pressable;
