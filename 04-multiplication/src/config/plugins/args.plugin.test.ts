const runCommand = async (args: string[]) => {
	process.argv = [...process.argv, ...args];

	const { yarg } = await import('./args.plugin');

	return yarg;
};

describe('Tests in args.plugin', () => {
	const originalProcessArgv = process.argv;

	beforeEach(() => {
		process.argv = [...originalProcessArgv];
		jest.resetModules();
	});

	test('should return default values', async () => {
		const yarg = await runCommand(['-b', '5']);

		expect(yarg).toMatchObject({
			b: 5,
			l: 10,
			s: false,
			n: 'multiplication-table',
			d: 'outputs',
		});
	});

	test('should return with custom values', async () => {
		const yarg = await runCommand(['-b', '10', '-l', '5', '-s', '-n', 'custom-name', '-d', 'custom-destination']);

		expect(yarg).toMatchObject({
			b: 10,
			l: 5,
			s: true,
			n: 'custom-name',
			d: 'custom-destination',
		});
	});
});
