import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Tests in 05-factory', () => {
	const getAge = () => 20;
	const getId = () => '1234567890';

	test('buildMakePerson should return a function', () => {
		const makePerson = buildMakePerson({ getAge, getId });

		expect(typeof makePerson).toBe('function');
	});

	test('makePerson should return a person', () => {
		const makePerson = buildMakePerson({ getAge, getId });

		const person = makePerson({ name: 'John', birthdate: '2000-01-01' });

		expect(person).toEqual({ id: '1234567890', name: 'John', birthdate: '2000-01-01', age: 20 });
	});
});
