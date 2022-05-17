import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import nhsuk from '../../styles';
import Card, { CardProps } from '../card';
import Text from '../text';

export type WarningCalloutProps = CardProps;

const WarningCallout = ({ children, style, ...rest }: CardProps) => (
  <Card style={[styles.container, style]} {...rest}>
    {children}
  </Card>
);

export type WarningCalloutLabelProps = {
  children: ReactNode;
  accessibilityLabel?: string;
  visuallyHiddenText?: string;
};

const WarningCalloutLabel = ({ children, visuallyHiddenText = 'Information: ' }: WarningCalloutLabelProps) => (
  <View style={styles.labelContainer}>
    {!!visuallyHiddenText && (
      <Text noMarginBottom style={styles.visuallyHiddenText}>
        {visuallyHiddenText}
      </Text>
    )}
    <Text variant="nhsuk-heading-m" noMarginBottom>
      {children}
    </Text>
  </View>
);

WarningCallout.Label = WarningCalloutLabel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: nhsuk.colours.secondary.paleYellow,
    borderColor: nhsuk.colours.primary.yellow,
    paddingTop: 0,
  },
  labelContainer: {
    backgroundColor: nhsuk.colours.primary.yellow,
    top: -8,
    marginBottom: 8,
    marginLeft: -25,
    paddingHorizontal: nhsuk.spacing.spacingPoints[4],
    paddingVertical: nhsuk.spacing.spacingPoints[2],
    alignSelf: 'flex-start',
  },
  visuallyHiddenText: {
    opacity: 0,
    height: 0,
  },
});

export default WarningCallout;
