"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var remplace_variables_in_template_exports = {};
__export(remplace_variables_in_template_exports, {
  cleanText: () => cleanText,
  replaceVariablesInTemplate: () => replaceVariablesInTemplate
});
module.exports = __toCommonJS(remplace_variables_in_template_exports);
var import_dayjs = __toESM(require("dayjs"));
var import_civilities = require("./civilities");
var import_property_types = require("./property-types");
function roundUpToClosest10(value) {
  if (value === null || value === void 0) return;
  return Math.round(value / 10) * 10;
}
function replace(text, replacementValues) {
  let result = text;
  for (const replacementValue of replacementValues) {
    result = result.replaceAll(`{{${replacementValue[0]}}}`, replacementValue[1]?.toString() || "");
  }
  return result;
}
function replaceVariablesInTemplate(text, pdf, advSetting) {
  if (!text) return "";
  return replace(text, [
    ["client_prenom", pdf.toFirstName],
    ["client_nom", pdf.toLastName],
    ["client_civilite", pdf.toCivility ? import_civilities.civilitiesMapByCivility[pdf.toCivility] : ""],
    ["client_adresse_ligne1", pdf.toAddressLine1],
    ["client_adresse_ligne2", pdf.toAddressLine2],
    ["client_ville", pdf.toCity],
    ["client_code_postal", pdf.toZipCode],
    ["agent_prenom", pdf.sender?.firstname],
    ["agent_nom", pdf.sender?.lastname],
    ["agent_tel_mobile", pdf.sender?.telMobile],
    ["agent_email", pdf.sender?.email],
    ["agent_titre", pdf.sender?.title],
    ["bien_surface", pdf.surface?.toString()],
    ["bien_surface_arrondi_dizaine", roundUpToClosest10(pdf.surface)?.toString()],
    ["agence_nom", advSetting.agencyName],
    ["agence_adresse", advSetting.agencyAddress],
    ["agence_ville", advSetting.agencyCity],
    ["agence_code_postal", advSetting.agencyZipCode],
    ["aujourdhui", (pdf.sendingAt ? (0, import_dayjs.default)(pdf.sendingAt) : (0, import_dayjs.default)()).format("DD/MM/YYYY")],
    [
      "bien_type",
      pdf.propertyType ? import_property_types.courrierPropertyTypesLabels[pdf.propertyType]?.toLocaleLowerCase() : ""
    ],
    [`nombre_pieces`, pdf.nbRooms ?? ""]
  ]);
}
const cleanText = (text) => {
  return text.replace(/\s+,+/g, ",").replace(/\s+\./g, ".");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cleanText,
  replaceVariablesInTemplate
});
