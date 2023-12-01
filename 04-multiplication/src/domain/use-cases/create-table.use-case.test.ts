import { CreateTable } from './create-table.use-case';

describe('Tests in create-table.use-case', () => {
	const createTable = new CreateTable();

	test('should return a multiplication table with default values', () => {
		const table = createTable.execute({ base: 2 });
		const rows = table.split('\n');

		expect(createTable).toBeInstanceOf(CreateTable);
		expect(table).toContain('2 x 1 = 2');
		expect(table).toContain('2 x 10 = 20');
		expect(rows.length).toBe(10);
	});

	test('should create with custom values', () => {
		const options = { base: 3, limit: 20 };

		const table = createTable.execute(options);
		const rows = table.split('\n').length;

		expect(table).toContain('3 x 1 = 3');
		expect(table).toContain(`3 x ${options.limit} = ${3 * options.limit}`);
		expect(rows).toBe(options.limit);
	});
});
