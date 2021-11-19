# NHSBT component library transfer notes

Notes about the transfer of the existing component library work done by NHSBT, to be transferred to NHSDigital.

## Remaining repo installation instructions

- Next steps on setting up the rest of the repo (CI/CD, project structure, documentation, unit testing, config files, PR templates etc.)
- Providing access to the NHSDigital GitHub organisation if needed.
- TypeScript transpilation and general NPM module configuration
- Discuss if he wants to re-initialize the repo with React Native's official helper tool: <https://reactnative.dev/docs/native-modules-setup>. This will allow running the library on its own during development, as well as include native code (no native code is present yet).
- Add a CONTRIBUTING.md document

## Components built so far

The following list of components have been built to NHSBT's needs and are based on the NHS service manual, `nhsuk-frontend` and `nhsuk-react-components` repositories.

Whilst they do follow most of the rules and patterns of the service manual, they will need a review to bring them completely in line.
Most notably, the grid system and responsive styles are not present; the components have only been built for mobile views.

- [ActionLink](src/components/ActionLink.tsx)
- [BackLink](src/components/BackLink.tsx)
- [Button](src/components/Button.tsx)
- [Card](src/components/Card.tsx)
- [CardGroup](src/components/CardGroup.tsx)
- [DateInput](src/components/DateInput.tsx)
- [Details](src/components/Details.tsx)
- [ErrorMessage](src/components/ErrorMessage.tsx)
- [ErrorSummary](src/components/ErrorSummary.tsx)
- [Expander](src/components/Expander.tsx)
- [ExpanderGroup](src/components/ExpanderGroup.tsx)
- [FormGroup](src/components/FormGroup.tsx)
- [Input](src/components/Input.tsx)
- [InsetText](src/components/InsetText.tsx)
- [Link](src/components/Link.tsx)
- [Pressable](src/components/Pressable.tsx) *
- [Radios](src/components/Radios.tsx)
- [SectionBreak](src/components/SectionBreak.tsx)
- [Select](src/components/Select.tsx)
- [SummaryList](src/components/SummaryList.tsx)
- [Tag](src/components/Tag.tsx)
- [Text](src/components/Text.tsx)
- [WarningCallout](src/components/WarningCallout.tsx)

\* The Pressable component is not an NHS.UK component but rather serves as a wrapper and enforces a minimum "hit slop" for pressable components to meet accessibility standards.
