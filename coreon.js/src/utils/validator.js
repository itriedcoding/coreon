// src/utils/validator.js

const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
};

const isNumber = (value) => {
    return typeof value === 'number' && !isNaN(value);
};

const isBoolean = (value) => {
    return typeof value === 'boolean';
};

const isArray = (value) => {
    return Array.isArray(value);
};

const isObject = (value) => {
    return value !== null && typeof value === 'object' && !isArray(value);
};

const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isString(value) && emailRegex.test(value);
};

const isURL = (value) => {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/[^\s]*)?$/i;
    return isString(value) && urlRegex.test(value);
};

const isPhoneNumber = (value) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return isString(value) && phoneRegex.test(value);
};

const validate = (value, type) => {
    switch (type) {
        case 'string':
            return isString(value);
        case 'number':
            return isNumber(value);
        case 'boolean':
            return isBoolean(value);
        case 'array':
            return isArray(value);
        case 'object':
            return isObject(value);
        case 'email':
            return isEmail(value);
        case 'url':
            return isURL(value);
        case 'phone':
            return isPhoneNumber(value);
        default:
            throw new Error(`Unknown validation type: ${type}`);
    }
};

export { validate, isString, isNumber, isBoolean, isArray, isObject, isEmail, isURL, isPhoneNumber };