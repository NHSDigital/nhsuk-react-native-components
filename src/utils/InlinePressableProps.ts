import { GestureResponderEvent, PressableProps } from 'react-native';

export interface InlinePressableProps {
  /**
   * Called when a single tap gesture is detected.
   * @type GestureResponderEventHandler
   */
  onPress?: (event: GestureResponderEvent) => unknown;

  /**
   * Called when a touch is engaged before `onPress`.
   * @type GestureResponderEventHandler
   */
  onPressIn?: (event: GestureResponderEvent) => unknown;

  /**
   * Called when a touch is released before `onPress`.
   * @type GestureResponderEventHandler
   */
  onPressOut?: (event: GestureResponderEvent) => unknown;

  /**
   * Called when a long-tap gesture is detected.
   * @type GestureResponderEventHandler
   */
  onLongPress?: (event: GestureResponderEvent) => unknown;

  /**
   * @default None
   * @type PressableProps except press handlers
   */
  pressableProps?: Omit<PressableProps, 'onPress' | 'onLongPress' | 'onPressIn' | 'onPressOut'>;

  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * @default None
   */
  accessibilityLabel?: string;
}
