import React, { ReactNode, useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import nhsuk from 'src/styles';
import govukEquilateralHeight from 'src/utils/govukEquilateralHeight';
import Link from '../link';
import Pressable from '../pressable';
import Text from '../text';

type ArrowProps = {
  size?: number;
  down?: boolean;
};

const Arrow = ({ size = 14, down }: ArrowProps) => {
  const height = govukEquilateralHeight(size);

  return (
    <Svg height={size} width={size} style={{ transform: [{ rotate: (down ? '180' : '90') + 'deg' }] }}>
      <Polygon points={`0,${size} ${size / 2},${size - height} ${size},${size}`} fill={nhsuk.colours.primary.blue} />
    </Svg>
  );
};

export type DetailsProps = {
  summary: string;
  text: string | ReactNode;
  defaultValue?: boolean;
} & ViewProps;

const Details = ({ summary, text, defaultValue, style, accessibilityLabel, ...rest }: DetailsProps) => {
  const [expanded, setExpanded] = useState(defaultValue || false);

  return (
    <View style={[styles.container, style]} {...rest}>
      <Pressable
        style={styles.summaryContainer}
        onPress={() => setExpanded(!expanded)}
        accessible
        accessibilityRole="link"
        accessibilityLabel={accessibilityLabel || summary}
        accessibilityState={{ expanded }}>
        <Arrow down={expanded} />
        <Link noMarginBottom style={styles.summary} onPress={() => setExpanded(!expanded)}>
          {summary}
        </Link>
      </Pressable>
      {expanded && <View style={styles.text}>{typeof text === 'string' ? <Text>{text}</Text> : text}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: nhsuk.spacing.spacingResponsiveScale[4],
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summary: {
    marginHorizontal: 10,
  },
  text: {
    marginTop: nhsuk.spacing.spacingPoints[2],
    padding: nhsuk.spacing.spacingPoints[3],
    paddingLeft: 20,
    borderLeftWidth: nhsuk.spacing.spacingPoints[1],
    borderLeftColor: nhsuk.colours.greyscale.grey4,
  },
});

export default Details;
