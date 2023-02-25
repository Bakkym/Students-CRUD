"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateName = exports.validateCedula = exports.validateData = void 0;
const validateData = (cedula, name, email, phone, career) => {
    if (email && phone && career) {
        return (0, exports.validateCedula)(cedula) && (0, exports.validateName)(name);
    }
    return false;
};
exports.validateData = validateData;
const validateCedula = (cedula) => {
    if (cedula) {
        let onlyNumbers = /^\d+$/.test(cedula);
        let correctLengthRange = true;
        if (cedula.length > 10 || cedula.length < 8) {
            correctLengthRange = false;
        }
        return onlyNumbers && correctLengthRange;
    }
    return false;
};
exports.validateCedula = validateCedula;
const validateName = (name) => {
    if (name) {
        let onlyLetters = /^[a-zA-Z\s]*$/.test(name);
        return onlyLetters;
    }
    return false;
};
exports.validateName = validateName;
