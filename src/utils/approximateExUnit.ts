import { textStyles } from 'src/components/text';
const inputFontStyle = textStyles['nhsuk-body-m'];

/**
 * An approximate conversion from ex to unitless for input components only.
 * @param ex The number of ex units.
 * @returns An approximate translation.
 */

const approximateExUnit = (ex: number) => ex * (inputFontStyle.fontSize / 2);

export default approximateExUnit;
