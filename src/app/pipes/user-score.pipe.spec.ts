import { UserScorePipe } from './user-score.pipe';

describe('UserScorePipe', () => {
	it('create an instance', () => {
		const pipe = new UserScorePipe();
		expect(pipe).toBeTruthy();
	});
});
