// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getAge, getId } = require('./plugins');
const { getPokemonById } = require('./js-foundation/06-promises');

getPokemonById(1)
	.then((pokemon) => console.log(pokemon))
	.catch((error) => console.log(error))
	.finally(() => console.log('done'));

//! Factory function reference
// const makePerson = buildMakePerson({ getAge, getId });

// const obj = { name: 'John', birthdate: '04/05/2000' };

// const jhon = makePerson(obj);

// console.log(jhon);
