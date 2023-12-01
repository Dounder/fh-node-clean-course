import { ServerApp } from './presentation/server-app';

describe('Tests in app', () => {
	test('Should call Server.run with values', async () => {
		const serverAppMock = jest.fn();
		ServerApp.run = serverAppMock;
		process.argv = ['node', 'app', '-b', '5', '-l', '10', '-s', '-n', 'test-filename', '-d', 'test-destination'];

		await import('./app');

		expect(serverAppMock).toHaveBeenCalledWith({
			base: 5,
			limit: 10,
			showTable: true,
			fileName: 'test-filename',
			fileDestination: 'test-destination',
		});
	});
});
