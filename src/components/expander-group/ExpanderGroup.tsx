import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Expander, { ExpanderProps } from '../expander';

const ItemSeparator = () => <View style={styles.separator} />;

export type ExpanderGroupProps = {
  items: ExpanderProps[];
} & ViewProps;

const ExpanderGroup = ({ items: slots, style, ...rest }: ExpanderGroupProps) => {
  return (
    <View style={style} {...rest}>
      {slots.map((item, index) => (
        <View key={index}>
          <Expander key={item.id} {...item} />
          <ItemSeparator />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginBottom: 10,
  },
});

export default ExpanderGroup;
