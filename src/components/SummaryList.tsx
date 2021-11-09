import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import nhsuk from 'src/styles';
import Text, { TextProps, textStyles } from './Text';

type SummaryListProps = {
  children?: React.ReactNode;
  noBorder?: boolean;
} & ViewProps;

type SummaryViewProps = {
  children?: React.ReactNode;
  noBorder?: boolean;
  noMarginBottom?: boolean;
} & ViewProps;

type SummaryTextProps = {
  children?: React.ReactNode;
} & TextProps;

const SummaryList = ({ children, noBorder, style, ...rest }: SummaryListProps) => (
  <View style={[styles['nhsuk-summary-list'], style]} {...rest}>
    {React.Children.map(
      children,
      (child) => React.isValidElement(child) && React.cloneElement(child as any, { noBorder }),
    )}
  </View>
);

const Row = ({ children, noBorder, style, ...rest }: SummaryViewProps) => (
  <View
    style={[styles['nhsuk-summary-list__row'], noBorder && styles['nhsuk-summary-list--no-border'], style]}
    {...rest}>
    {children}
  </View>
);

const Key = ({ children, noMarginBottom, style, ...rest }: SummaryViewProps) => (
  <View style={[styles['nhsuk-summary-list__key'], noMarginBottom && styles.noMarginBottom, style]} {...rest}>
    {children}
  </View>
);

const Value = ({ children, noMarginBottom, style, ...rest }: SummaryViewProps) => (
  <View style={[styles['nhsuk-summary-list__value'], noMarginBottom && styles.noMarginBottom, style]} {...rest}>
    {children}
  </View>
);

const Actions = ({ children, noMarginBottom, style, ...rest }: SummaryViewProps) => (
  <View style={[styles['nhsuk-summary-list__actions'], noMarginBottom && styles.noMarginBottom, style]} {...rest}>
    {children}
  </View>
);

const KeyText = ({ children, ...rest }: SummaryTextProps) => (
  <Text bold noMarginBottom {...rest}>
    {children}
  </Text>
);

const ValueText = ({ children, ...rest }: SummaryTextProps) => (
  <Text noMarginBottom {...rest}>
    {children}
  </Text>
);

SummaryList.Row = Row;
SummaryList.Key = Key;
SummaryList.Value = Value;
SummaryList.Actions = Actions;
SummaryList.KeyText = KeyText;
SummaryList.ValueText = ValueText;

const styles = StyleSheet.create({
  'nhsuk-summary-list': {
    alignSelf: 'stretch',
    ...textStyles['nhsuk-body-m'],
  },
  'nhsuk-summary-list--no-border': {
    borderBottomWidth: 0,
  },
  'nhsuk-summary-list__row': {
    borderBottomWidth: 1,
    borderBottomColor: nhsuk.colours.border.borderColor,
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  'nhsuk-summary-list__key': {
    marginBottom: nhsuk.spacing.spacingPoints[1],
  },
  'nhsuk-summary-list__value': {
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  'nhsuk-summary-list__actions': {
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  noMarginBottom: {
    marginBottom: 0,
  },
});

export default SummaryList;
