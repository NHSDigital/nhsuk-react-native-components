import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import nhsuk from '../../styles';
import Card, { CardProps } from '../card';

const ItemSeparator = () => <View style={styles.separator} />;

export type CardGroupProps = {
  items: CardProps[];
} & ViewProps;

const CardGroup = ({ items: slots, ...rest }: CardGroupProps) => {
  return (
    <View style={styles.view} {...rest}>
      {slots.map((item, index) => (
        <View key={index}>
          <Card {...item} />
          <ItemSeparator />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  view: {
    alignSelf: 'stretch',
  },
});

export default CardGroup;
