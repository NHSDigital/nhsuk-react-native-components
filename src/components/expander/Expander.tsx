import React, { ReactNode, useState } from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import nhsuk from '../../styles';
import { Minus, Plus } from '../icons';

// This component is a subset of the Details component: https://nhsdigital.github.io/nhsuk-react-components/?path=/story/details--expander

export type ExpanderProps = {
  id: string;
  summary: ReactNode;
  text: ReactNode;
  defaultValue?: boolean;
  onExpand?: (id: string) => void;
} & ViewProps;

const Expander = ({ id, summary, text, defaultValue, onExpand, accessibilityLabel, ...rest }: ExpanderProps) => {
  const [expanded, setExpanded] = useState(defaultValue || false);

  const summaryStyle: StyleProp<ViewStyle> = [styles.summary];

  if (expanded) {
    summaryStyle.push(styles.summaryExpanded);
  }

  return (
    <View style={styles.container} {...rest}>
      <Pressable
        style={summaryStyle}
        onPress={() => {
          setExpanded(!expanded);
          if (onExpand) {
            onExpand(id);
          }
        }}
        accessible
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ expanded }}>
        {expanded ? <Minus {...iconProps} /> : <Plus {...iconProps} />}
        {summary}
      </Pressable>
      {expanded && <View style={styles.summaryExpandedText}>{text}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: nhsuk.colours.greyscale.grey4,
    backgroundColor: nhsuk.colours.primary.white,
    padding: nhsuk.spacing.spacingResponsiveScale[4],
    borderBottomWidth: nhsuk.spacing.spacingPoints[1],
  },
  summary: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryExpanded: {
    paddingBottom: 0,
  },
  summaryExpandedText: {
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
});

const iconProps: SvgProps = {
  width: 32,
  height: 32,
  fill: nhsuk.colours.primary.blue,
  style: styles.icon,
};

export default Expander;
