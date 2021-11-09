import React from 'react';
import { StyleSheet, Switch as RNSwitch, SwitchProps } from 'react-native';
import nhsuk from 'src/styles';

const Switch = (props: SwitchProps) => {
  return (
    <RNSwitch
      thumbColor={nhsuk.colours.greyscale.grey5}
      trackColor={{ false: nhsuk.colours.greyscale.grey5, true: nhsuk.colours.primary.green }}
      style={styles.switch}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
});

export default Switch;
