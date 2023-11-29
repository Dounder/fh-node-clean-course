export type User = { id: number; name: string };

export const users: User[] = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
];

export interface Callback {
	(err?: string, user?: User): void;
}

export const getUserById = (id: number, callback: Callback): void => {
	const user = users.find((user) => user.id === id);

	if (!user) return callback(`User with id ${id} not found`);

	return callback(undefined, user);
};
