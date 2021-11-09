import React from 'react';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import nhsuk from 'src/styles';
import Text from './Text';

type InsetTextProps = {
  children: ReactNode;
  accessibilityLabel?: string;
  visuallyHiddenText?: string;
  // optional parameter to improve accessibility when passing children containing links.
  renderChildrenOnly?: boolean;
};

const InsetText = ({
  children,
  renderChildrenOnly,
  accessibilityLabel = '',
  visuallyHiddenText = 'Information: ',
}: InsetTextProps) => (
  <View style={styles.container} accessibilityLabel={accessibilityLabel} accessible={accessibilityLabel !== ''}>
    {!!visuallyHiddenText && (
      <Text noMarginBottom style={styles.visuallyHiddenText}>
        {visuallyHiddenText}
      </Text>
    )}
    {!renderChildrenOnly && <Text noMarginBottom>{children}</Text>}
    {renderChildrenOnly && <>{children}</>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5], // marginTop is also set as this in the nhsuk-frontend but it is omitted here because element margins do not overlap in React Native.
    padding: nhsuk.spacing.spacingResponsiveScale[4],
    borderLeftWidth: nhsuk.globals.borderSizing.borderWidthInsetText,
    borderLeftColor: nhsuk.colours.primary.blue,
  },
  visuallyHiddenText: {
    opacity: 0,
    height: 0,
  },
});

export default InsetText;
