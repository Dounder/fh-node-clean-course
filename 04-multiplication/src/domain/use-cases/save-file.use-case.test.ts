import fs from 'fs';
import { SaveFile } from './save-file.use-case';

describe('Tests in save-file.use-case', () => {
	const saveFile = new SaveFile();

	afterEach(() => {
		const outputFolderExists = fs.existsSync('outputs');
		if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

		const customOutputFolderExists = fs.existsSync('custom-outputs');
		if (customOutputFolderExists) fs.rmSync('custom-outputs', { recursive: true });
	});

	test('should save file with default values', () => {
		const filePath = 'outputs/table.txt';
		const options = { fileContent: 'Hello World' };

		const result = saveFile.execute(options);
		const fileExists = fs.existsSync(filePath);
		const fileContent = fs.readFileSync(filePath, 'utf-8');

		expect(result).toBeTruthy();
		expect(fileExists).toBeTruthy();
		expect(fileContent).toBe(options.fileContent);
	});

	test('should save file with custom values', () => {
		const options = {
			fileContent: 'Custom content',
			fileDestination: 'custom-outputs/file-destination',
			fileName: 'custom-table-name',
		};
		const filePath = `${options.fileDestination}/${options.fileName}.txt`;

		const result = saveFile.execute(options);
		const fileExists = fs.existsSync(filePath);
		const fileContent = fs.readFileSync(filePath, 'utf-8');

		expect(result).toBeTruthy();
		expect(fileExists).toBeTruthy();
		expect(fileContent).toBe(options.fileContent);
	});

	test('should return false when directory could not be created', () => {
		const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
			throw new Error('This is an custom error from testing');
		});

		const result = saveFile.execute({ fileContent: 'Hello World' });

		expect(result).toBeFalsy();

		mkdirSpy.mockRestore();
	});

	test('should return false when file could not be created', () => {
		const writeFileSyncSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
			throw new Error('This is an custom writeFileSync error from testing');
		});

		const result = saveFile.execute({ fileContent: 'Hello World' });

		expect(result).toBeFalsy();

		writeFileSyncSpy.mockRestore();
	});
});
