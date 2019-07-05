import { roundDown } from './round';

describe('Utils - Round', () => {
	describe('Round – roundDown Function', () => {
		it('should correctly round the value down', () => {
			const decimalValue = 12.2;
			const expectedRoundedValue = 12;

			const roundedValue = roundDown(decimalValue);
			expect(roundedValue).toEqual(expectedRoundedValue);
		});

		it('should not round the value up', () => {
			const decimalValue = 12.9;
			const expectedRoundedValue = 12;

			const roundedValue = roundDown(decimalValue);
			expect(roundedValue).toEqual(expectedRoundedValue);
		});
	});
});
