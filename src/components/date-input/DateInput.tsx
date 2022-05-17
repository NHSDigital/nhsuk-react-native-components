import React from 'react';
import { StyleSheet, View } from 'react-native';
import nhsuk from '../../styles';
import FormGroup, { FormGroupProps } from '../form-group';
import Input, { InputProps } from '../input';

export type DateInputProps = {
  dayProps?: InputProps;
  monthProps?: InputProps;
  yearProps?: InputProps;
} & FormGroupProps;

const DateInput = ({ dayProps, monthProps, yearProps, ...rest }: DateInputProps) => (
  <FormGroup {...rest}>
    <View removeClippedSubviews={false} style={styles.allInputsContainer}>
      <View style={styles.inputContainer}>
        <Input label="Day" noFormGroup keyboardType="numeric" width="2" {...dayProps} />
      </View>
      <View style={styles.inputContainer}>
        <Input label="Month" noFormGroup keyboardType="numeric" width="2" {...monthProps} />
      </View>
      <View style={styles.inputContainer}>
        <Input label="Year" noFormGroup keyboardType="numeric" width="4" {...yearProps} />
      </View>
    </View>
  </FormGroup>
);

const styles = StyleSheet.create({
  allInputsContainer: {
    flexDirection: 'row',
  },
  inputContainer: {
    marginRight: nhsuk.spacing.spacingPoints[4],
  },
  label: {
    marginBottom: nhsuk.spacing.spacingPoints[1],
  },
});

export default DateInput;
