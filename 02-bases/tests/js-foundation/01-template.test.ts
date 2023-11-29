import { emailTemplate } from '../../src/js-foundation/01-template';

describe('Tests in 01-template', () => {
	test('emailTemplate should contain a greeting', () => {
		expect(emailTemplate).toContain('Hi, ');
	});

	test('emailTemplate should contain a name and orderId', () => {
		expect(emailTemplate).toContain('{{name}}');
		expect(emailTemplate).toContain('{{orderId}}');
	});
});
