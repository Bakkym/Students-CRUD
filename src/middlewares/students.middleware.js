"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = exports.validateCedula = exports.validateData = void 0;
const validateData = (cedula, name) => {
    return (0, exports.validateCedula)(cedula) && (0, exports.validateName)(name);
};
exports.validateData = validateData;
const validateCedula = (cedula) => {
    let onlyNumbers = /^\d+$/.test(cedula);
    let correctLengthRange = true;
    if (cedula.length > 10 || cedula.length < 8) {
        correctLengthRange = false;
    }
    return onlyNumbers && correctLengthRange;
};
exports.validateCedula = validateCedula;
const validateName = (name) => {
    let onlyLetters = /^[a-zA-Z\s]*$/.test(name);
    return onlyLetters;
};
exports.validateName = validateName;
