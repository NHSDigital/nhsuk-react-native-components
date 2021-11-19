import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import nhsuk from 'src/styles';
import FormGroup, { FormGroupProps } from '../form-group';
import Text, { TextProps } from '../text';

const nhsukRadiosSize = nhsuk.spacing.spacingPoints[6];
const nhsukRadiosLabelPaddingLeftRight = 12;
const selectedSize = 10;

export type RadiosProps = {
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
} & FormGroupProps;

const Radios = ({ label, hint, error, noMarginBottom, containerStyle, children, ...rest }: RadiosProps) => (
  <FormGroup label={label} hint={hint} error={error} noMarginBottom={noMarginBottom} style={containerStyle}>
    <View accessibilityRole="radiogroup" {...rest}>
      {children}
    </View>
  </FormGroup>
);

export type RadioProps = {
  label: string;
  selected?: boolean;
  noMarginBottom?: boolean;
} & PressableProps;

const Radio = React.forwardRef(
  ({ label, selected, noMarginBottom, style, ...rest }: RadioProps, ref: React.Ref<View>) => {
    return (
      <Pressable
        ref={ref}
        accessibilityLabel={label}
        accessibilityRole="radio"
        accessibilityState={{ selected }}
        style={[styles.item, noMarginBottom && styles.noMarginBottom, style as any]}
        {...rest}>
        <View style={styles.input} />
        {selected && <View style={styles.selected} />}
        <Text noMarginBottom style={styles.label}>
          {label}
        </Text>
      </Pressable>
    );
  },
);

const Divider = ({ style, ...rest }: TextProps) => <Text style={[styles.divider, style]} {...rest} />;

Radios.Radio = Radio;
Radios.Divider = Divider;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: nhsuk.spacing.spacingPoints[2],
  },
  input: {
    height: nhsukRadiosSize,
    width: nhsukRadiosSize,
    backgroundColor: nhsuk.colours.forms.formElementBackgroundColor,
    borderWidth: nhsuk.globals.formElements.borderWidthFormElement,
    borderColor: nhsuk.colours.forms.formBorderColor,
    borderRadius: nhsukRadiosSize / 2,
  },
  selected: {
    position: 'absolute',
    height: selectedSize,
    width: selectedSize,
    top: selectedSize,
    left: selectedSize,
    backgroundColor: nhsuk.colours.forms.formBorderColor,
    borderWidth: selectedSize,
    borderColor: nhsuk.colours.text.textColor,
    borderRadius: selectedSize,
  },
  label: {
    paddingHorizontal: nhsukRadiosLabelPaddingLeftRight,
    paddingTop: 8,
    paddingBottom: nhsuk.spacing.spacingPoints[1],
  },
  divider: {
    marginBottom: nhsuk.spacing.spacingPoints[2],
    textAlign: 'center',
    width: nhsukRadiosSize,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
});

export default Radios;
