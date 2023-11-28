const users = [
	{ id: 1, name: 'John Doe' },
	{ id: 2, name: 'Jane Doe' },
];

function getUserById(id, callback) {
	const user = users.find(function (user) {
		return user.id === id;
	});

	if (!user) return callback(new Error(`User with id ${id} not found`));

	return callback(null, user);
}

module.exports = {
	getUserById,
	users,
};
