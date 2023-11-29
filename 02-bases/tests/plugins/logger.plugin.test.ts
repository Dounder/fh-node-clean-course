import { buildLogger, logger as winstonLogger } from '../../src/plugins';

describe('Tests in logger.plugin', () => {
	test('buildLogger should return a logger function', () => {
		const logger = buildLogger('test');
		expect(typeof logger.log).toBe('function');
		expect(typeof logger.error).toBe('function');
	});

	test('logger.log should call logger.log from winston', () => {
		const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
		const message = 'test';
		const service = 'test';

		const logger = buildLogger(service);

		logger.log(message);

		expect(winstonLoggerMock).toHaveBeenCalledWith(
			'info',
			expect.objectContaining({
				level: 'info',
				message,
				service,
			})
		);
	});
});
