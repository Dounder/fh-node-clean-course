const buildMakePerson = ({ getAge, getId }) => {
	return ({ name, birthdate }) => {
		return {
			id: getId(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
};

// const obj = { name: 'John', birthdate: '04/05/2000' };

// const jhon = buildPerson(obj);

// console.log(jhon);

module.exports = {
	buildMakePerson,
};
