import { buildLogger } from './plugins';

const logger = buildLogger('app');

logger.log('Hello world!');
logger.error('This is an error');

// getPokemonById(1)
// 	.then((pokemon) => console.log(pokemon))
// 	.catch((error) => console.log(error))
// 	.finally(() => console.log('done'));

//! Factory function reference
// const makePerson = buildMakePerson({ getAge, getId });

// const obj = { name: 'John', birthdate: '04/05/2000' };

// const jhon = makePerson(obj);

// console.log(jhon);
