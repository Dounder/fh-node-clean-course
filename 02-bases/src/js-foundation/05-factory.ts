interface MakePersonArgs {
	getAge: (birthdate: string) => number;
	getId: () => number;
}

interface PersonArgs {
	name: string;
	birthdate: string;
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
