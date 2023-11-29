import { characters } from '../../src/js-foundation/02-destructuring';

describe('Tests in 02-destructuring', () => {
	test('characters should contain Batman, Robin and Joker', () => {
		expect(characters).toContain('Batman');
		expect(characters).toContain('Robin');
		expect(characters).toContain('Joker');
	});

	test('first character should be Batman', () => {
		const [batman] = characters;

		expect(batman).toBe('Batman');
	});
});
