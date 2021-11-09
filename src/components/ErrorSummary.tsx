import React, { Fragment, ReactNode, useEffect, useRef } from 'react';
import { AccessibilityInfo, findNodeHandle, GestureResponderEvent, StyleSheet, View } from 'react-native';
import nhsuk from 'src/styles';
import Pressable from './Pressable';
import Text from './Text';

export type ErrorSummaryLink = {
  id: string;
  label: string;
  noMarginBottom?: boolean;
  onPress?: null | ((event: GestureResponderEvent) => void);
};

/**
 * An error summary is represented by a title, optional messages and optional links to page errors.
 */
export type ErrorSummaryType = {
  timestamp: number; // Used to keep track of summary updates to focus on the summary component.
  title: string;
  messages: (string | ReactNode)[];
  links: ErrorSummaryLink[];
};

const ErrorLink = ({ label, noMarginBottom, ...rest }: ErrorSummaryLink) => (
  <Pressable accessibilityRole="link" {...rest}>
    <Text noMarginBottom={noMarginBottom} style={styles.errorLink}>
      {label}
    </Text>
  </Pressable>
);

type ErrorSummaryProps = {
  errorSummary: ErrorSummaryType;
};

const ErrorSummary = ({ errorSummary }: ErrorSummaryProps) => {
  const headingRef = useRef<any>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const reactTag = findNodeHandle(headingRef.current);
    if (reactTag) {
      // Timeout needed as otherwise focus gets set on the first field in the form.
      timeout = setTimeout(() => {
        // Check the react tag again in case it has been removed from the UI after the time delay.
        const reactTagCheckAgain = findNodeHandle(headingRef.current);
        reactTagCheckAgain && AccessibilityInfo.setAccessibilityFocus(reactTag);
      }, 300);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <View style={styles.base}>
      {errorSummary.title && (
        <Text
          variant="nhsuk-body-l"
          style={styles.title}
          accessible={true}
          accessibilityRole="header"
          accessibilityLabel={'Error:' + errorSummary.title}
          textRef={headingRef}>
          {errorSummary.title}
        </Text>
      )}
      {errorSummary.messages.map((message, index) =>
        typeof message === 'string' ? (
          <Text
            key={index}
            noMarginBottom={index === errorSummary.messages.length - 1 && errorSummary.links.length === 0}>
            {message}
          </Text>
        ) : (
          <Fragment key={index}>{message}</Fragment>
        ),
      )}
      {errorSummary.links.map((link, index) => (
        <ErrorLink {...link} key={index} noMarginBottom={index === errorSummary.links.length - 1} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    padding: nhsuk.spacing.spacingResponsiveScale[4],
    // Requested by designer - different to NHS design.
    marginBottom: nhsuk.spacing.spacingResponsiveScale[5],
    borderWidth: nhsuk.globals.formElements.borderWidth,
    borderColor: nhsuk.colours.forms.errorColor,
    width: '100%',
  },
  title: {
    fontFamily: nhsuk.fontFamilies.bold,
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  body: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  flatList: {
    flexGrow: 0,
  },
  errorLink: {
    color: nhsuk.colours.forms.errorColor,
    fontFamily: nhsuk.fontFamilies.bold,
    textDecorationLine: 'underline',
    textDecorationColor: nhsuk.colours.forms.errorColor,
  },
});

export default ErrorSummary;
