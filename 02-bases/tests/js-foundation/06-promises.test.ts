import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('Tests in 06-promises', () => {
	test('getPokemonById should return a pokemon', async () => {
		const id = 1;

		const pokemonName = await getPokemonById(id);

		expect(pokemonName).toBe('bulbasaur');
	});

	test('getPokemonById should return an error if the pokemon does not exist', async () => {
		const id = 100000000;

		try {
			await getPokemonById(id);
			expect(true).toBeFalsy();
		} catch (error) {
			expect(error).toEqual(new Error(`Pokemon with id ${id} does not exist`));
		}
	});
});
