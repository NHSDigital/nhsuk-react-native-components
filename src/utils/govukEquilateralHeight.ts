/**
 * source: https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_shape-arrow.scss
 * Calculate the height of an equilateral triangle
 * @param base Length of the base of the triangle
 * @returns Calculated height of the triangle
 */
const govukEquilateralHeight = (base: number) => (base / 2) * Math.sqrt(3);

export default govukEquilateralHeight;
