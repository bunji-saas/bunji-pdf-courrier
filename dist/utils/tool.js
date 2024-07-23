"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grey = exports.createFullName = exports.civilityOptions = void 0;
exports.civilityOptions = [
    { value: 'miss', label: 'Madame' },
    { value: 'mister', label: 'Monsieur' },
    { value: 'mister-and-miss', label: 'Monsieur et Madame' },
    { value: 'company', label: 'Société' },
    { value: 'indivision', label: 'Indivision' },
    { value: 'succession', label: 'Succession' },
    { value: 'madams', label: 'Mesdames' },
    { value: 'sirs', label: 'Messieurs' },
];
const createFullName = (toCivility, toFirstName, toLastName) => {
    var _a;
    let fullName = '';
    if (toCivility) {
        fullName += `${(_a = exports.civilityOptions.find((option) => option.value === toCivility)) === null || _a === void 0 ? void 0 : _a.label} `;
    }
    if (toFirstName) {
        fullName += `${toFirstName} `;
    }
    if (toLastName) {
        fullName += toLastName;
    }
    if (!fullName) {
        return '';
    }
    return fullName.trim();
};
exports.createFullName = createFullName;
exports.grey = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
};
