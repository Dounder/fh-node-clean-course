"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
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
exports.buildMakePerson = buildMakePerson;
