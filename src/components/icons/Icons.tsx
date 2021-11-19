import React from 'react';
import { SvgProps, SvgXml } from 'react-native-svg';

const arrowLeftXml = `
<svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
</svg>
`;

const arrowRightXml = `
<svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
</svg>
`;

const arrowRightCircleXml = `
<svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
</svg>
`;

const chevronLeftXml = `
<svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
</svg>
`;

const chevronRightXml = `
<svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
</svg>
`;

const closeXml = `
<svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
</svg>
`;

const crossXml = `
<svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"></path>
  <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"></path>
</svg>
`;

const smallEmdashXml = `
<svg class="nhsuk-icon nhsuk-icon__emdash" xmlns="http://www.w3.org/2000/svg" width="16" height="1" aria-hidden="true">
  <path d="M0 0h16v1H0z"></path>
</svg>
`;

const emdashXml = `
<svg class="nhsuk-icon nhsuk-icon__emdash" xmlns="http://www.w3.org/2000/svg" width="19" height="1" aria-hidden="true">
  <path d="M0 0h19v1H0z"></path>
</svg>
`;

const minusXml = `
<svg class="nhsuk-icon nhsuk-icon__minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" aria-hidden="true">
  <circle cx="12" cy="12" r="10"></circle>
  <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M8 12h8"></path>
</svg>
`;

const plusXml = `
<svg class="nhsuk-icon nhsuk-icon__plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" aria-hidden="true">
  <circle cx="12" cy="12" r="10"></circle>
  <path fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M12 8v8M8 12h8"></path>
</svg>
`;

const searchXml = `
<svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
</svg>
`;

const tickXml = `
<svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="none">
  <path stroke-width="4" stroke-linecap="round" stroke="#007f3b" d="M18.4 7.8l-8.5 8.4L5.6 12"></path>
</svg>
`;

/**
 * On the web the dropdown icon is rendered via CSS, so this icon has been produced to render it as an SVG in React Native.
 */
const dropdownArrowXml = `
<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.00001 6.99933C5.73439 7.00086 5.47909 6.89658 5.2905 6.70953L0.293914 1.71294C0.0404281 1.45946 -0.058569 1.08999 0.034213 0.743727C0.126995 0.39746 0.397461 0.126995 0.743728 0.0342126C1.09 -0.0585694 1.45946 0.0404278 1.71294 0.293913L6.00001 4.59097L10.2871 0.293913C10.6789 -0.0979408 11.3143 -0.0979407 11.7061 0.293913C12.098 0.685768 12.098 1.32109 11.7061 1.71294L6.70953 6.70953C6.52094 6.89658 6.26563 7.00086 6.00001 6.99933Z" fill="#282828"/>
</svg>
`;

export const ArrowLeft = (props: SvgProps) => <SvgXml xml={arrowLeftXml} {...props} />;
export const ArrowRight = (props: SvgProps) => <SvgXml xml={arrowRightXml} {...props} />;
export const ArrowRightCircle = (props: SvgProps) => <SvgXml xml={arrowRightCircleXml} {...props} />;
export const ChevronLeft = (props: SvgProps) => <SvgXml xml={chevronLeftXml} {...props} />;
export const ChevronRight = (props: SvgProps) => <SvgXml xml={chevronRightXml} {...props} />;
export const Close = (props: SvgProps) => <SvgXml xml={closeXml} {...props} />;
export const Cross = (props: SvgProps) => <SvgXml xml={crossXml} {...props} />;
export const SmallEmdash = (props: SvgProps) => <SvgXml xml={smallEmdashXml} {...props} />;
export const Emdash = (props: SvgProps) => <SvgXml xml={emdashXml} {...props} />;
export const Minus = (props: SvgProps) => <SvgXml xml={minusXml} {...props} />;
export const Plus = (props: SvgProps) => <SvgXml xml={plusXml} {...props} />;
export const Search = (props: SvgProps) => <SvgXml xml={searchXml} {...props} />;
export const Tick = (props: SvgProps) => <SvgXml xml={tickXml} {...props} />;
export const DropdownArrow = (props: SvgProps) => <SvgXml xml={dropdownArrowXml} {...props} />;
