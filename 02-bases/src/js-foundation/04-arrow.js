const { users } = require('./03-callbacks');

const getUserById = (id, callback) => {
	const user = users.find((user) => user.id === id);

	if (!user) return callback(new Error(`User with id ${id} not found`));

	return callback(null, user);
};

module.exports = {
	getUserById,
};
