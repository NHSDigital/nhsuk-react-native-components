import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { nhsuk } from 'nhsuk-react-native-components';
import { RootTabScreenProps } from '../types';

const KitchenSinkScreen: React.FC<RootTabScreenProps<'KitchenSink'>> = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Text size={14}>Hello</Text> */}
      {/* <Text style={styles.sectionTitle}>Form Elements</Text>
      <Text style={styles.subtitle}>Input</Text>
      <Input label="First Name" hint="A hint for first name" />
      <Input label="Last Name" hint="Some other hint for last name" error="An error occurred!" />
      <SectionBreak />
      <Text style={styles.subtitle}>DateInput</Text>
      <DateInput label="Date of Birth" />
      <SectionBreak />
      <Text style={styles.subtitle}>Radios</Text>
      <Radios label="Do you know your NHS number?" hint="An NHS number takes the format 999 999 9999.">
        <Radios.Radio label="Yes, I know my NHS number" selected />
        <Radios.Radio label="No, I do not know my NHS number" />
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio label="I have no idea what I'm being asked" />
      </Radios>
      <SectionBreak />
      <Text style={styles.subtitle}>Select</Text>
      <Select
        placeholder="Select an option"
        items={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
        onValueChange={console.log}
      />
      <SectionBreak />
      <Text style={styles.subtitle}>Button</Text>
      <Button title="Click me!" />
      <SectionBreak />
      <Text style={styles.sectionTitle}>Links</Text>
      <ActionLink label="Take me away ernie!" />
      <BackLink title="No, take me back!" />
      <Link onPress={console.log}>Regular ol' link!</Link>
      <SectionBreak />
      <Text style={styles.sectionTitle}>Display</Text>
      <Text style={styles.subtitle}>Card</Text>
      <Card onPress={console.log}>
        <Text style={styles.normalText}>Hello, I'm a card!</Text>
      </Card>
      <SectionBreak />
      <Text style={styles.subtitle}>CardGroup</Text>
      <CardGroup
        items={[
          { children: <Text style={styles.normalText}>Hello, I'm in a CardGroup</Text> },
          { children: <Text style={styles.normalText}>Hello, I'm also in a CardGroup</Text> },
        ]}
      />
      <SectionBreak />
      <Text style={styles.subtitle}>Details</Text>
      <Details summary="Click me to show a bit more!" text="I'm that bit more text that link was on about." />
      <SectionBreak />
      <Text style={styles.subtitle}>ErrorSummary</Text>
      <ErrorSummary
        errorSummary={{
          title: 'Something went wrong!',
          links: [{ id: 'some-id', label: 'Fix this error to continue' }],
          messages: [
            <Text style={styles.normalText}>
              Hello there! I'm here to give you a bit more information on what went wrong.
            </Text>,
          ],
          timestamp: 0,
        }}
      />
      <SectionBreak />
      <Text style={styles.subtitle}>Expander</Text>
      <Expander
        id="expander"
        summary={<Text>Your GP's opening hours</Text>}
        text={<Text style={styles.normalText}>"9-5, Monday to Friday"</Text>}
      />
      <SectionBreak />
      <Text style={styles.subtitle}>ExpanderGroup</Text>
      <ExpanderGroup
        items={[
          {
            id: 'expandergroup-1',
            summary: <Text>First Expander</Text>,
            text: <Text style={styles.normalText}>I'm the text of the first expander</Text>,
          },
          {
            id: 'expandergroup-2',
            summary: <Text>Second Expander</Text>,
            text: <Text style={styles.normalText}>I'm the text of the second expander</Text>,
          },
        ]}
      />
      <SectionBreak />
      <Text style={styles.subtitle}>InsetText</Text>
      <InsetText>
        <Text style={styles.normalText}>Call 111 for advice if you are concerned.</Text>
      </InsetText>
      <SectionBreak />
      <Text style={styles.subtitle}>SummaryList</Text>
      <SummaryList>
        <SummaryList.Row style={styles.summaryListRow}>
          <SummaryList.Key>
            <SummaryList.KeyText>Name</SummaryList.KeyText>
          </SummaryList.Key>
          <SummaryList.Value>
            <SummaryList.ValueText>Thomas Judd-Cooper</SummaryList.ValueText>
          </SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row style={styles.summaryListRow}>
          <SummaryList.Key>
            <SummaryList.KeyText>Date of birth</SummaryList.KeyText>
          </SummaryList.Key>
          <SummaryList.Value>
            <SummaryList.ValueText>01 01 1990</SummaryList.ValueText>
          </SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row style={styles.summaryListRow}>
          <SummaryList.Key>
            <SummaryList.KeyText>NHS Number</SummaryList.KeyText>
          </SummaryList.Key>
          <SummaryList.Value>
            <SummaryList.ValueText>999 999 9999</SummaryList.ValueText>
          </SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
      <SectionBreak />
      <Text style={styles.subtitle}>Tag</Text>
      <Tag style={styles.tagMargin}>Default</Tag>
      <Tag style={styles.tagMargin} color="white">
        White
      </Tag>
      <Tag style={styles.tagMargin} color="grey">
        Grey
      </Tag>
      <Tag style={styles.tagMargin} color="green">
        Green
      </Tag>
      <Tag style={styles.tagMargin} color="aqua-green">
        Aqua-Green
      </Tag>
      <Tag style={styles.tagMargin} color="blue">
        Blue
      </Tag>
      <Tag style={styles.tagMargin} color="purple">
        Purple
      </Tag>
      <Tag style={styles.tagMargin} color="pink">
        Pink
      </Tag>
      <Tag style={styles.tagMargin} color="red">
        Red
      </Tag>
      <Tag style={styles.tagMargin} color="orange">
        Orange
      </Tag>
      <Tag style={styles.tagMargin} color="yellow">
        Yellow
      </Tag>
      <Text style={styles.subtitle}>WarningCallout</Text>
      <WarningCallout>
        <WarningCallout.Label>Important COVID-19 Information</WarningCallout.Label>
        <Text style={styles.normalText}>Some important information here! Someone will probably read this.</Text>
      </WarningCallout> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: nhsuk.spacing.spacingPoints[3],
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
  },
  sectionTitle: {
    ...nhsuk.typography.typographyScale[32],
    fontWeight: 'bold',
    fontFamily: nhsuk.fontFamilies.bold,
    marginBottom: nhsuk.spacing.spacingPoints[2],
  },
  subtitle: {
    ...nhsuk.typography.typographyScale[24],
    fontFamily: nhsuk.fontFamilies.normal,
    marginTop: nhsuk.spacing.spacingPoints[3],
    marginBottom: nhsuk.spacing.spacingPoints[3],
  },
  normalText: {
    fontFamily: nhsuk.fontFamilies.normal,
    marginBottom: nhsuk.spacing.spacingPoints[3],
    ...nhsuk.typography.typographyScale[19],
  },
  boldText: {
    fontFamily: nhsuk.fontFamilies.bold,
    marginBottom: nhsuk.spacing.spacingPoints[3],
    ...nhsuk.typography.typographyScale[19],
  },
  summaryListRow: {
    flex: 2,
    justifyContent: 'center',
  },
  tagMargin: {
    marginBottom: nhsuk.spacing.spacingPoints[2],
  },
});

export default KitchenSinkScreen;
