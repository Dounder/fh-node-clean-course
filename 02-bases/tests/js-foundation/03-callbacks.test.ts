import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Tests in 03-callbacks', () => {
	test('getUserById should return an error if user does not exist', (done) => {
		const id = 10;

		getUserById(id, (err, user) => {
			expect(err).toBe(`User with id ${id} not found`);
			expect(user).toBeUndefined();

			done();
		});
	});

	test('getUserById should return a user object', (done) => {
		const id = 1;

		getUserById(id, (err, user) => {
			expect(err).toBeUndefined();
			expect(user).toEqual({ id, name: 'John Doe' });

			done();
		});
	});
});
