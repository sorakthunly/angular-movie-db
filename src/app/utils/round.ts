/**
 * @description
 * Round a decimal value down to exact integer.
 *
 * @param {number} decimal	Decimal value to round down
 */
export function roundDown(decimal: number): number {
	if (Number.isInteger(decimal)) {
		return decimal;
	}

	const roundedValue = Math.round(decimal);
	const roundedDownValue = decimal > roundedValue ? roundedValue : roundedValue - 1;

	return roundedDownValue;
}
