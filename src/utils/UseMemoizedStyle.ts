import { DependencyList, useMemo } from 'react';
import { StyleProp, StyleSheet, StyleSheetProperties } from 'react-native';

const useMemoizedStyle = <T extends StyleSheetProperties>(
  styles: Array<StyleProp<StyleSheetProperties>>,
  deps: DependencyList,
): StyleProp<T> => useMemo(() => StyleSheet.flatten(styles), deps);

export default useMemoizedStyle;
