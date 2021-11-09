import React, { useState } from 'react';
import { Platform, StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';
import FormGroup, { FormGroupProps } from './FormGroup';
import Pressable from './Pressable';
import Text, { textStyles } from './Text';
import approximateExUnit from 'src/utils/approximateExUnit';

export const inputFontStyle = textStyles['nhsuk-body-m'];

export type InputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
  noFormGroup?: boolean;
  width?: '30' | '20' | '12' | '10' | '5' | '4' | '3' | '2';
  password?: boolean; // Turn this input input into a password field. The show/hide password toggle is uncontrolled unless the passwordVisible and onPasswordTogglePress props are set.
  passwordVisible?: boolean;
  onPasswordTogglePress?: (passwordVisible: boolean) => void;
} & FormGroupProps &
  TextInputProps;

const Input = ({
  containerStyle,
  label,
  hint,
  error,
  noMarginBottom,
  style,
  inputRef,
  textContentType,
  autoComplete,
  autoCapitalize,
  secureTextEntry,
  noFormGroup,
  accessibilityLabel,
  accessible,
  width,
  password,
  passwordVisible,
  onPasswordTogglePress,
  maxLength,
  ...rest
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  const [passwordVisibleInternal, setPasswordVisibleInternal] = useState(false);
  const isPasswordVisible = onPasswordTogglePress ? passwordVisible : passwordVisibleInternal;

  const inputStyle: StyleProp<TextStyle> = [styles.input];
  const focusContainerStyle: StyleProp<ViewStyle> = [];

  if (error) {
    inputStyle.push(styles.error);
  }

  if (focused) {
    inputStyle.push(styles.inputFocused);
    focusContainerStyle.push(styles.focusContainer);
  }

  if (width) {
    switch (width) {
      case '30':
        inputStyle.push(styles['nhsuk-input--width-30']);
        break;
      case '20':
        inputStyle.push(styles['nhsuk-input--width-20']);
        break;
      case '12':
        inputStyle.push(styles['nhsuk-input--width-12']);
        break;
      case '10':
        inputStyle.push(styles['nhsuk-input--width-10']);
        break;
      case '5':
        inputStyle.push(styles['nhsuk-input--width-5']);
        break;
      case '4':
        inputStyle.push(styles['nhsuk-input--width-4']);
        break;
      case '3':
        inputStyle.push(styles['nhsuk-input--width-3']);
        break;
      case '2':
        inputStyle.push(styles['nhsuk-input--width-2']);
        break;
      default:
        break;
    }
  }

  // Annoying solution to ensure correct width of the focus view when the element has a defined width.
  if (width || (style as any)?.width) {
    focusContainerStyle.push({
      alignSelf: 'flex-start',
    });
  }

  let textContentTypeValue = textContentType;
  let autoCompleteValue = autoComplete;
  let secureTextEntryValue = secureTextEntry;

  // Force the content type to be password if password toggle is used and is currently hiding the password.
  if (password && !isPasswordVisible && textContentTypeValue !== 'newPassword') {
    textContentTypeValue = 'password';
    autoComplete = 'password';
  }

  if (password) {
    secureTextEntryValue = !isPasswordVisible;
    autoCapitalize = 'none';
  }

  const textInputProps: TextInputProps = {
    style: [inputStyle, style],
    numberOfLines: 1,
    onFocus: () => setFocused(true),
    onEndEditing: () => setFocused(false),
    accessible: !!accessibilityLabel || accessible,
    accessibilityLabel: accessibilityLabel || `${label} input`,
    textContentType: textContentTypeValue,
    autoComplete: autoCompleteValue,
    autoCapitalize: autoCapitalize,
    secureTextEntry: secureTextEntryValue,
    maxLength: maxLength,
    ...rest,
  };

  if (noFormGroup) {
    return (
      <>
        {label && <Text style={styles.label}>{label}</Text>}
        <View style={focusContainerStyle} removeClippedSubviews={false}>
          <TextInput ref={inputRef} {...textInputProps} />
        </View>
      </>
    );
  }

  return (
    <FormGroup label={label} hint={hint} error={error} noMarginBottom={noMarginBottom} style={containerStyle}>
      <View style={[styles.container, focusContainerStyle]} removeClippedSubviews={false}>
        <TextInput ref={inputRef} {...textInputProps} />
        {password && (
          <Pressable
            style={styles.passwordToggleButton}
            accessibilityRole="button"
            onPress={() => {
              if (onPasswordTogglePress) {
                onPasswordTogglePress(!isPasswordVisible);
              } else {
                setPasswordVisibleInternal(!isPasswordVisible);
              }
            }}>
            <Text noMarginBottom bold accessibilityLabel={`${isPasswordVisible ? 'Hide' : 'Show'} password`}>
              {isPasswordVisible ? 'Hide' : 'Show'}
            </Text>
          </Pressable>
        )}
      </View>
    </FormGroup>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  label: {
    marginBottom: nhsuk.spacing.spacingPoints[1],
  },
  input: {
    ...inputFontStyle,
    lineHeight: inputFontStyle.fontSize * 1.25, // multipliers allow text to center align
    minHeight: inputFontStyle.fontSize * 2.5, // adjust height based on font size (+ extra vertical space) to accommodate scaled font sizes in phone settings
    borderWidth: nhsuk.globals.formElements.borderWidthFormElement,
    borderColor: nhsuk.colours.forms.formBorderColor,
    color: nhsuk.colours.primary.black,
    backgroundColor: nhsuk.colours.primary.white,
    padding: nhsuk.spacing.spacingPoints[1],
    paddingHorizontal: nhsuk.spacing.spacingPoints[2],
    marginBottom: 0,
  },
  inputFocused: {
    borderWidth: nhsuk.globals.formElements.focusWidth,
    borderColor: nhsuk.colours.focus.focusTextColor,
    paddingHorizontal:
      Platform.OS === 'android'
        ? nhsuk.spacing.spacingPoints[2]
        : nhsuk.spacing.spacingPoints[2] - nhsuk.globals.formElements.focusWidth / 2,
  },
  focusContainer: {
    margin: -nhsuk.globals.formElements.focusWidth,
    borderWidth: nhsuk.globals.formElements.focusWidth,
    borderColor: nhsuk.colours.focus.focusColor,
  },
  error: {
    borderWidth: nhsuk.globals.formElements.focusWidth,
    borderColor: nhsuk.colours.forms.errorColor,
  },
  passwordToggleButton: {
    backgroundColor: nhsuk.colours.greyscale.grey4,
    position: 'absolute',
    minHeight: inputFontStyle.fontSize * 2.5 - 12,
    justifyContent: 'center',
    right: 7,
    paddingHorizontal: 12,
  },
  'nhsuk-input--width-30': {
    width: approximateExUnit(59),
  },
  'nhsuk-input--width-20': {
    width: approximateExUnit(41),
  },
  'nhsuk-input--width-12': {
    width: approximateExUnit(27),
  },
  'nhsuk-input--width-10': {
    width: approximateExUnit(23),
  },
  'nhsuk-input--width-5': {
    width: approximateExUnit(10.8),
  },
  'nhsuk-input--width-4': {
    width: approximateExUnit(9),
  },
  'nhsuk-input--width-3': {
    width: approximateExUnit(7.2),
  },
  'nhsuk-input--width-2': {
    width: approximateExUnit(5.4),
  },
});

export default Input;
