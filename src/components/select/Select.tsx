import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import Text, { textStyles } from '../text';
import { DropdownArrow } from '../icons';
import FormGroup, { FormGroupProps } from '../form-group';

export type SelectProps = {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
} & FormGroupProps &
  PickerSelectProps;

const Select = ({
  placeholder,
  containerStyle,
  label,
  hint,
  error,
  noMarginBottom,
  value,
  accessibilityLabel,
  ...rest
}: SelectProps) => {
  const selectContainerStyle: StyleProp<ViewStyle> = [styles.activeItem];

  if (error) {
    selectContainerStyle.push(styles.error);
  }

  return (
    <FormGroup label={label} hint={hint} error={error} noMarginBottom={noMarginBottom} style={containerStyle}>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        value={value}
        placeholder={placeholder ? { label: placeholder } : {}}
        touchableWrapperProps={{
          accessibilityLabel: accessibilityLabel,
        }}
        fixAndroidTouchableBug={true}
        {...rest}>
        <View style={selectContainerStyle}>
          <Text noMarginBottom style={styles.activeItemText} numberOfLines={1}>
            {value || placeholder}
          </Text>
          <DropdownArrow width={10} height={10} fill={nhsuk.colours.text.textColor} style={styles.dropdownArrow} />
        </View>
      </RNPickerSelect>
    </FormGroup>
  );
};

const styles = StyleSheet.create({
  activeItem: {
    borderWidth: nhsuk.globals.formElements.borderWidthFormElement,
    borderColor: nhsuk.colours.forms.formBorderColor,
    backgroundColor: nhsuk.colours.primary.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 40,
    padding: nhsuk.spacing.spacingPoints[1],
    paddingHorizontal: nhsuk.spacing.spacingPoints[2],
  },
  activeItemText: {
    // fix center alignment
    marginTop: 3,
    lineHeight: textStyles['nhsuk-body-m'].fontSize,
  },
  error: {
    borderWidth: nhsuk.globals.formElements.focusWidth,
    borderColor: nhsuk.colours.forms.errorColor,
  },
  dropdownArrow: {
    marginLeft: nhsuk.spacing.spacingPoints[1],
  },
});

export default Select;
