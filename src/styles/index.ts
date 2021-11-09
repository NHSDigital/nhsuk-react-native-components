import { rgb } from 'color';
import { StyleSheet } from 'react-native';
import { shade, tint } from 'src/utils/color';

// These settings can be found at https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core/settings

const fontFamilies = {
  normal: 'FrutigerLTPro-Roman',
  bold: 'FrutigerLTPro-Bold',
  italic: 'FrutigerLTPro-Italic',
} as const;

const colours = {
  primary: {
    blue: '#005eb8',
    white: '#ffffff',
    black: '#212b32',
    green: '#007f3b',
    purple: '#330072',
    darkPink: '#7C2855',
    red: '#d5281b',
    yellow: '#ffeb3b',
    variations: {
      tintBlack10: '',
      shadeBlue20: '',
      shadeBlue35: '',
      shadeBlue50: '',
      shadeGreen35: '',
      shadeGreen50: '',
      transparentWhite20: '',
      transparentBlue50: '',
    },
  },
  secondary: {
    paleYellow: '#fff9c4',
    warmYellow: '#ffb81C',
    orange: '#ED8B00',
    aquaGreen: '#00A499',
    pink: '#AE2573',
  },
  greyscale: {
    grey1: '#4c6272',
    grey2: '#768692',
    grey3: '#aeb7bd',
    grey4: '#d8dde0',
    grey5: '#f0f4f5',
  },
  rgb: {
    grey1: 'rgb(66, 84, 98)',
  },
  alpha: {
    transparency50: 0.5,
  },
  text: {
    textColor: '',
    secondaryTextColor: '',
    printTextColor: '',
  },
  links: {
    linkColor: '',
    linkHoverColor: '',
    linkActiveColor: '',
    linkVisitedColor: '',
  },
  focus: {
    focusColor: '',
    focusTextColor: '',
  },
  border: {
    borderColor: '',
    secondaryBorderColor: '',
  },
  boxShadow: {
    boxShadow: '',
    boxShadowColor: '',
  },
  forms: {
    errorColor: '',
    formBorderColor: '',
    formElementBackgroundColor: '',
  },
  buttons: {
    buttonColor: '',
    buttonHoverColor: '',
    buttonActiveColor: '',
    buttonShadowColor: '',
    secondaryButtonColor: '',
    secondaryButtonHoverColor: '',
    secondaryButtonActiveColor: '',
    secondaryButtonShadowColor: '',
    reverseButtonColor: '',
    reverseButtonHoverColor: '',
    reverseButtonActiveColor: '',
    reverseButtonShadowColor: '',
    buttonTextColor: '',
    reverseButtonTextColor: '',
  },
};

// Some colours are set here in order to reference other colours.
colours.primary.variations.tintBlack10 = tint(colours.primary.black, 0.1);
colours.primary.variations.shadeBlue20 = shade(colours.primary.blue, 0.2);
colours.primary.variations.shadeBlue35 = shade(colours.primary.blue, 0.35);
colours.primary.variations.shadeBlue50 = shade(colours.primary.blue, 0.5);
colours.primary.variations.shadeGreen35 = shade(colours.primary.green, 0.35);
colours.primary.variations.shadeGreen50 = shade(colours.primary.green, 0.5);
colours.primary.variations.transparentWhite20 = `rgba(${rgb(colours.primary.white).toString()}, 0.2)`;
colours.primary.variations.transparentBlue50 = `rgba(${colours.primary.variations.shadeBlue50}, 0.1)`;

colours.text.textColor = colours.primary.black;
colours.text.secondaryTextColor = colours.greyscale.grey1;
colours.text.printTextColor = colours.primary.black;
colours.links.linkColor = colours.primary.blue;
colours.links.linkHoverColor = colours.primary.darkPink;
colours.links.linkActiveColor = shade(colours.links.linkColor, 0.5);
colours.links.linkVisitedColor = colours.primary.purple;
colours.focus.focusColor = colours.primary.yellow;
colours.focus.focusTextColor = colours.primary.black;
colours.border.borderColor = colours.greyscale.grey4;
colours.border.secondaryBorderColor = colours.primary.variations.transparentWhite20;
colours.boxShadow.boxShadow = 'rgba(33, 43, 50, .16)';
colours.boxShadow.boxShadowColor = colours.rgb.grey1;

colours.forms.errorColor = colours.primary.red;
colours.forms.formBorderColor = colours.greyscale.grey1;
colours.forms.formElementBackgroundColor = colours.primary.white;

colours.buttons.buttonColor = colours.primary.green;
colours.buttons.buttonHoverColor = shade(colours.buttons.buttonColor, 0.2);
colours.buttons.buttonActiveColor = shade(colours.buttons.buttonColor, 0.5);
colours.buttons.buttonShadowColor = shade(colours.buttons.buttonColor, 0.5);
colours.buttons.secondaryButtonColor = colours.greyscale.grey1;
colours.buttons.secondaryButtonHoverColor = shade(colours.buttons.secondaryButtonColor, 0.2);
colours.buttons.secondaryButtonActiveColor = shade(colours.buttons.secondaryButtonColor, 0.5);
colours.buttons.secondaryButtonShadowColor = shade(colours.buttons.secondaryButtonColor, 0.5);
colours.buttons.reverseButtonColor = colours.primary.white;
colours.buttons.reverseButtonHoverColor = shade(colours.buttons.reverseButtonColor, 0.2);
colours.buttons.reverseButtonActiveColor = colours.primary.black;
colours.buttons.reverseButtonShadowColor = colours.primary.black;
colours.buttons.buttonTextColor = colours.primary.white;
colours.buttons.reverseButtonTextColor = colours.primary.black;

const globals = {
  fontSizing: {
    baseFontSize: 16,
    baseLineHeight: 24,
  },
  iconSizing: {
    iconSize: 34,
  },
  gridSpacing: {
    pageWidth: 960,
    gutter: 32,
    gutterHalf: 16,
  },
  borderSizing: {
    borderWidthInsetText: 12,
    careCardTriangleBorder: 16,
    heroContentTriangleBorder: 16,
    heroBorder: 1,
    borderListPanel: 2,
    borderListPanelItem: 1,
    borderTableHeaderWidth: 2,
    borderTableCellWidth: 2,
    borderRadius: 4,
  },
  boxShadow: {
    boxShadowSpread: 4,
    boxShadowBlur: 4,
    boxShadowLink: 4,
    boxDetails: 8,
    boxExpander: 4,
    boxShadowPagination: 16,
  },
  header: {
    headerSpacing: 20,
  },
  formElements: {
    borderWidthFormElement: 2,
    borderWidthFormElementError: 4,
    focusWidth: 4,
    borderWidth: 4,
    borderWidthMobile: 4,
    borderWidthFormGroupError: 4,
  },
} as const;

const spacing = {
  spacingPoints: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  spacingResponsiveScale: [0, 4, 8, 8, 16, 24, 32, 40, 48, 56],
} as const;

const typography = {
  typographyScale: {
    14: { fontSize: 12, lineHeight: 20 },
    16: { fontSize: 14, lineHeight: 24 },
    19: { fontSize: 16, lineHeight: 24 },
    22: { fontSize: 18, lineHeight: 28 },
    24: { fontSize: 20, lineHeight: 28 },
    32: { fontSize: 24, lineHeight: 32 },
    48: { fontSize: 32, lineHeight: 40 },
    64: { fontSize: 48, lineHeight: 56 },
  },
} as const;

// Custom styles
const styles = StyleSheet.create({
  flexShrink: {
    flexShrink: 1,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
});

const nhsuk = {
  fontFamilies,
  colours,
  globals,
  spacing,
  typography,
  styles,
};

export default nhsuk;
