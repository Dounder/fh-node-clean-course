interface MakePersonArgs {
	getAge: (birthdate: string) => number;
	getId: () => string;
}

interface PersonArgs {
	name: string;
	birthdate: string;
}

export interface Person {
	id: string;
	name: string;
	birthdate: string;
	age: number;
}

export const buildMakePerson = ({ getAge, getId }: MakePersonArgs) => {
	return ({ name, birthdate }: PersonArgs) => {
		return {
			id: getId(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
};
