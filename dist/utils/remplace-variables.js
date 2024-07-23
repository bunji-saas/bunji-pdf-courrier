"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanText = exports.remplaceVariables = exports.getAdvSettingInfo = void 0;
const moment_1 = __importDefault(require("moment"));
const property_types_1 = require("./property-types");
const roundUpToClosest10 = (number) => Math.round(number / 10) * 10;
const getAdvSettingInfo = (agency, advSetting) => {
    return {
        agencyName: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyName) || agency.name,
        agencyAddress: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyAddress) || agency.address,
        agencyZipCode: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyZipCode) || agency.zipCode,
        agencyCity: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyCity) || agency.city,
        agencyWebsite: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyWebsite) || agency.website,
        agencyLogo: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyLogo) || agency.logo,
        agencyColour: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.agencyColour) || agency.colour,
        customAdvStartPages: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.customAdvStartPages) || null,
        customAdvEndPages: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.customAdvEndPages) || null,
        estimateLowText: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.estimateLowText) || 'Estimation Basse',
        estimateHighText: (advSetting === null || advSetting === void 0 ? void 0 : advSetting.estimateHighText) || 'Estimation Haute',
    };
};
exports.getAdvSettingInfo = getAdvSettingInfo;
const remplaceVariables = (text, pdf, agency, advSetting) => {
    var _a, _b, _c, _d, _e, _f, _g;
    let replacedVariables = text;
    const advSettingsInfo = (0, exports.getAdvSettingInfo)(agency, advSetting);
    replacedVariables = replacedVariables
        .replace(/{{client_prenom}}/g, pdf.toFirstName || '')
        .replace(/{{client_nom}}/g, pdf.toLastName || '')
        .replace(/{{client_civilite}}/g, pdf.toCivility || '')
        .replace(/{{client_adresse_ligne1}}/g, pdf.toAddressLine1 || '')
        .replace(/{{client_adresse_ligne2}}/g, pdf.toAddressLine2 || '')
        .replace(/{{client_ville}}/g, pdf.toCity || '')
        .replace(/{{client_code_postal}}/g, pdf.toZipCode || '')
        .replace(/{{agent_prenom}}/g, ((_a = pdf.sender) === null || _a === void 0 ? void 0 : _a.firstname) || '')
        .replace(/{{agent_nom}}/g, ((_b = pdf.sender) === null || _b === void 0 ? void 0 : _b.lastname) || '')
        .replace(/{{agent_tel_mobile}}/g, ((_c = pdf.sender) === null || _c === void 0 ? void 0 : _c.telMobile) || '')
        .replace(/{{agent_email}}/g, ((_d = pdf.sender) === null || _d === void 0 ? void 0 : _d.email) || '')
        .replace(/{{agent_titre}}/g, ((_e = pdf.sender) === null || _e === void 0 ? void 0 : _e.title) || '')
        .replace(/{{agence_nom}}/g, advSettingsInfo.agencyName || '')
        .replace(/{{agence_adresse}}/g, advSettingsInfo.agencyAddress || '')
        .replace(/{{agence_ville}}/g, advSettingsInfo.agencyCity || '')
        .replace(/{{agence_code_postal}}/g, advSettingsInfo.agencyZipCode || '')
        .replace(/{{bien_surface}}/g, ((_f = pdf.surface) === null || _f === void 0 ? void 0 : _f.toString()) || '')
        .replace(/{{aujourdhui}}/g, (0, moment_1.default)().format('DD/MM/YYYY'))
        .replace(/{{bien_surface_arrondi_dizaine}}/g, pdf.surface ? roundUpToClosest10(pdf.surface).toString() : '')
        .replace(/{{bien_type}}/g, ((_g = property_types_1.courrierPropertyTypesOptions
        .find((prop) => prop.value === pdf.propertyType)) === null || _g === void 0 ? void 0 : _g.label.toLocaleLowerCase()) || '');
    return replacedVariables;
};
exports.remplaceVariables = remplaceVariables;
const cleanText = (text) => {
    const newText = text.replace(/\s+,+/g, ',').replace(/\s+\./g, '.');
    return newText;
};
exports.cleanText = cleanText;
