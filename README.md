# NHS.UK React Native components

NHS.UK React Native components contains the code you need to start building user interfaces for NHS apps written in React Native.

## Table of contents

- [NHS.UK React Native components](#nhsuk-react-native-components)
  - [Table of contents](#table-of-contents)
  - [Guidance](#guidance)
  - [Installation](#installation)
    - [Dependency info](#dependency-info)
  - [Consumer app setup](#consumer-app-setup)
    - [Using the Frutiger font files](#using-the-frutiger-font-files)
    - [Using NHS.UK icons](#using-nhsuk-icons)
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
|`react-native-svg`|Importing SVG files.|

## Consumer app setup

### Using the Frutiger font files

> **IMPORTANT**: in order to use the Frutiger font in a production app, you must supply your app-specific own font licence for every variation of the font you wish to use (regular, bold, light etc.).

For a bare React Native app, a `react-native.config.js` file is needed with the following content to use the font files:

```javascript
module.exports = {
  assets: ['./node_modules/nhsuk-react-native-components/assets/fonts/']
};
```

Then run `npx react-native link` to link the font files to the native platform config files.

### Using NHS.UK icons

The NHS.UK icons are represented as SVG files. A bare React Native app needs extra setup to import them. Configure `metro.config.js` with the following content:

```javascript
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

If using TypeScript, a type needs to be declared in `declarations.d.ts` to allow SVG imports:

```typescript
declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
```

Icons can now be imported as React components:

```typescript
import ChevronLeftIcon from 'nhsuk-react-native-components/icons/icon-chevron-left.svg';
```

For more detailed installation instructions, visit the [react-native-svg](https://github.com/react-native-svg/react-native-svg#use-with-svg-files) repo.

## Contribute

Read our [contributing guidelines](CONTRIBUTING.md) to contribute to NHS.UK frontend.

## Get in touch

NHS.UK frontend is maintained by NHS Digital. [Email us](mailto:service-manual@nhs.net), open a [GitHub issue](https://github.com/nhsuk/nhsuk-frontend/issues/new) or get in touch on the [NHS digital service manual Slack workspace](https://join.slack.com/t/nhs-service-manual/shared_invite/enQtNTIyOTEyNjU3NDkyLTk4NDQ3YzkwYzk1Njk5YjAxYTI5YTVkZmUxMGQ0ZjA3NjMyM2ZkNjBlMWMxODVjZjYzNzg1ZmU4MWY1NmE2YzE).

## Licence

The codebase is released under the MIT Licence, unless stated otherwise. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
