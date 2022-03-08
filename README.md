# NHS.UK React Native components

> **Note:** This package is currently pre-alpha. It is not yet ready for use in production.

NHS.UK React Native components contains the code you need to start building user interfaces for NHS apps written in React Native.

Originally created by [NHS Blood & Transplant](https://github.com/NHS-Blood-and-Transplant), maintained by NHS Digital.

## Table of contents

- [NHS.UK React Native components](#nhsuk-react-native-components)
  - [Table of contents](#table-of-contents)
  - [Guidance](#guidance)
  - [Installation](#installation)
    - [Dependency info](#dependency-info)
  - [Consumer app setup](#consumer-app-setup)
    - [Using the Frutiger font files](#using-the-frutiger-font-files)
  - [Contribute](#contribute)
  - [Get in touch](#get-in-touch)
  - [Licence](#licence)

## Guidance

Visit the [NHS digital service manual](https://service-manual.nhs.uk/) for examples of components and guidance for when to use them. If we haven’t yet published guidance on the component you want, please [email us](mailto:service-manual@nhs.net) or get in touch on the [NHS digital service manual Slack workspace](https://join.slack.com/t/nhs-service-manual/shared_invite/enQtNTIyOTEyNjU3NDkyLTk4NDQ3YzkwYzk1Njk5YjAxYTI5YTVkZmUxMGQ0ZjA3NjMyM2ZkNjBlMWMxODVjZjYzNzg1ZmU4MWY1NmE2YzE).

## Installation

To install:

```bash
npm install nhsuk-react-native-components
```

### Dependency info

|Dependency|Used for|
|-|-|
|`color`|Manipulating various colour styles.|
|`react-native-picker-select`|Implementing the native platform select component.|
|`react-native-svg`|Rendering SVG content.|

## Consumer app setup

### Using the Frutiger font files

> **IMPORTANT**: in order to use the Frutiger font in a production app, you must supply your app-specific own font licence for every variation of the font you wish to use (regular, bold, light etc.).

For a bare React Native app, a `react-native.config.js` file is needed with the following content to use the font files:

```javascript
module.exports = {
  assets: ['./node_modules/nhsuk-react-native-components/dist/assets/fonts/']
};
```

Then run `npx react-native link` to link the font files to the native platform config files.

## Contribute

Read our [contributing guidelines](CONTRIBUTING.md) to contribute to NHS.UK frontend.

## Get in touch

NHS.UK frontend is maintained by NHS Digital. [Email us](mailto:service-manual@nhs.net), open a [GitHub issue](https://github.com/nhsuk/nhsuk-frontend/issues/new) or get in touch on the [NHS digital service manual Slack workspace](https://join.slack.com/t/nhs-service-manual/shared_invite/enQtNTIyOTEyNjU3NDkyLTk4NDQ3YzkwYzk1Njk5YjAxYTI5YTVkZmUxMGQ0ZjA3NjMyM2ZkNjBlMWMxODVjZjYzNzg1ZmU4MWY1NmE2YzE).

## Licence

The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
