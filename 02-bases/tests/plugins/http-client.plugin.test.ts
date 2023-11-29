import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('Tests in http-client.plugin', () => {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	test('get should return a valid response', async () => {
		const response = await httpClientPlugin.get(url);
		const obj = {
			userId: expect.any(Number),
			id: expect.any(Number),
			title: expect.any(String),
			completed: expect.any(Boolean),
		};

		expect(response).toEqual(obj);
	});

	test('http plugin should have post, put, patch and delete methods', () => {
		expect(typeof httpClientPlugin.post).toBe('function');
		expect(typeof httpClientPlugin.put).toBe('function');
		expect(typeof httpClientPlugin.patch).toBe('function');
		expect(typeof httpClientPlugin.delete).toBe('function');
	});
});
