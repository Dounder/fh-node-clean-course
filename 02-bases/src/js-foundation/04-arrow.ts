import { Callback, users } from './03-callbacks';

export const getUserById = (id: number, callback: Callback) => {
	const user = users.find((user) => user.id === id);

	if (!user) return callback(new Error(`User with id ${id} not found`));

	return callback(null, user);
};
