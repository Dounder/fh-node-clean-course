import { getAge } from '../../src/plugins';

describe('Tests in get-age.plugin', () => {
	test('getAge should return the age of a person', () => {
		const birthdate = '1990-01-01';
		const age = getAge(birthdate);

		expect(typeof age).toBe('number');
	});

	test('getAge should return current age', () => {
		const birthdate = '1990-01-01';
		const age = getAge(birthdate);

		const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

		expect(age).toBe(calculatedAge);
	});

	test('getAge should return 0 years old', () => {
		const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);
		const birhtdate = '1990-01-01';
		const age = getAge(birhtdate);

		expect(age).toBe(0);
		expect(spy).toHaveBeenCalled();
	});
});
