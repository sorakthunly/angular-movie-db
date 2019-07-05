import { MovieDurationPipe } from './movie-duration.pipe';

describe('MovieDurationPipe', () => {
	it('should correctly transform a runtime numeric value to formatted string display', () => {
		const pipe = new MovieDurationPipe();

		const runtime = 120;
		const expectedDuration = '2h 0 min';
		const transformedValue = pipe.transform(runtime);
		expect(transformedValue).toEqual(expectedDuration);
	});
});
