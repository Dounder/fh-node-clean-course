const { http } = require('../plugins');

const getPokemonById = async (id) => {
	const url = new URL(`https://pokeapi.co/api/v2/pokemon/${id}`);

	const pokemon = await http.get(url);

	return pokemon.name;
};

module.exports = {
	getPokemonById,
};
