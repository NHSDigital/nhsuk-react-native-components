import { Insets } from 'react-native';

export const MIN_TAP_TARGET_SIZE = 48;

/**
 * Calculate the minimum hit slop area for a given width and height. The width and height
 * represent an element's pressable area, which must have a minimum width and height of 48
 * in order to pass accessibility requirements. The returned hit slop object represents the
 * extra insets the element requires. See more: https://reactnative.dev/docs/pressable#hitslop
 * @param width The element's width
 * @param height The element's height
 * @returns a hit slop area that represents the extra insets the element requires.
 */
const calculateMinHitSlop = (width: number, height: number) => {
  const hitSlop: Insets = { top: 0, bottom: 0, left: 0, right: 0 };

  if (width < MIN_TAP_TARGET_SIZE) {
    const extraHitSlop = (MIN_TAP_TARGET_SIZE - width) / 2;
    hitSlop.left = extraHitSlop;
    hitSlop.right = extraHitSlop;
  }

  if (height < MIN_TAP_TARGET_SIZE) {
    const extraHitSlop = (MIN_TAP_TARGET_SIZE - height) / 2;
    hitSlop.top = extraHitSlop;
    hitSlop.bottom = extraHitSlop;
  }

  return hitSlop;
};

export default calculateMinHitSlop;
