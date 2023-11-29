describe('Test in the App File', () => {
	test('Should be 5', () => {
		//1. Arrange
		const num1 = 2;
		const num2 = 3;

		//2. Act
		const result = num1 + num2;

		//3. Assert
		expect(result).toBe(5);
	});
});
