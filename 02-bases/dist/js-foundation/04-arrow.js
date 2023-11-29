"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const _03_callbacks_1 = require("./03-callbacks");
const getUserById = (id, callback) => {
    const user = _03_callbacks_1.users.find((user) => user.id === id);
    if (!user)
        return callback(`User with id ${id} not found`);
    return callback(undefined, user);
};
exports.getUserById = getUserById;
