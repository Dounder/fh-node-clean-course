import { getId } from '../../src/plugins';

describe('Tests in get-id.plugin', () => {
	test('getId should return a valid uuid', () => {
		const id = getId();

		expect(typeof id).toBe('string');
		expect(id.length).toBe(36);
	});
});
