import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import nhsuk from '../../styles';
import ErrorMessage from '../error-message';
import Text from '../text';

export type FormGroupProps = {
  children?: ReactNode;
  label?: string;
  hint?: string;
  error?: boolean | string;
  noMarginBottom?: boolean;
} & ViewProps;

const FormGroup = ({ children, label, hint, error, noMarginBottom, style, ...rest }: FormGroupProps) => {
  const formGroupStyle: StyleProp<ViewStyle> = [styles.base];

  if (error) {
    formGroupStyle.push(styles.error);
  }

  if (noMarginBottom) {
    formGroupStyle.push(nhsuk.styles.noMarginBottom);
  }

  return (
    <View style={[formGroupStyle, style]} {...rest}>
      {label && <Text style={styles.label}>{label}</Text>}
      {hint && <Text style={styles.hint}>{hint}</Text>}
      {typeof error === 'string' && error !== '' && <ErrorMessage label={error} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
    width: '100%',
  },
  error: {
    borderLeftWidth: nhsuk.globals.formElements.borderWidthFormGroupError,
    borderColor: nhsuk.colours.forms.errorColor,
    paddingLeft: nhsuk.spacing.spacingPoints[3],
  },
  label: {
    marginBottom: nhsuk.spacing.spacingPoints[1],
  },
  hint: {
    marginBottom: nhsuk.spacing.spacingPoints[1],
    color: nhsuk.colours.text.secondaryTextColor,
  },
});

export default FormGroup;
