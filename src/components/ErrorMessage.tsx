import React from 'react';
import { StyleSheet } from 'react-native';
import nhsuk from 'src/styles';
import Text from './Text';

type ErrorMessageProps = {
  label: string;
  visuallyHiddenText?: boolean;
};

const ErrorMessage = ({ label, visuallyHiddenText = true }: ErrorMessageProps) => {
  const accessibilityLabel = visuallyHiddenText ? `Error: ${label}` : label;

  return (
    <Text accessibilityLabel={accessibilityLabel} style={styles.label}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    color: nhsuk.colours.forms.errorColor,
    fontFamily: nhsuk.fontFamilies.bold,
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
});

export default ErrorMessage;
