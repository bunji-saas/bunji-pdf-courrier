"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tool_exports = {};
__export(tool_exports, {
  civilityLabels: () => civilityLabels,
  civilityLabelsShorts: () => civilityLabelsShorts,
  createFullName: () => createFullName,
  getAddressPartCutIfNeeded: () => getAddressPartCutIfNeeded
});
module.exports = __toCommonJS(tool_exports);
const maxAddressPartLength = 45;
const civilityLabels = {
  miss: "Madame",
  mister: "Monsieur",
  "mister-and-miss": "Monsieur et Madame",
  company: "Soci\xE9t\xE9",
  indivision: "Indivision",
  succession: "Succession",
  madams: "Mesdames",
  sirs: "Messieurs"
};
const civilityLabelsShorts = {
  miss: "Mme",
  mister: "M.",
  "mister-and-miss": "M. & Mme",
  company: "St\xE9",
  indivision: "Indiv.",
  succession: "Succ.",
  madams: "Mmes",
  sirs: "MM."
};
function buildFullName(civilityLabelsMap, toCivility, toFirstName, toLastName) {
  const fullName = [toCivility ? civilityLabelsMap[toCivility] : "", toFirstName, toLastName].filter((e) => e).map((e) => e?.trim() || "").join(" ").trim();
  if (fullName === "") {
    return ".";
  }
  return fullName;
}
function createFullName(toCivility, toFirstName, toLastName) {
  const fullName = buildFullName(civilityLabels, toCivility, toFirstName, toLastName);
  if (fullName.length <= maxAddressPartLength) return fullName;
  return getAddressPartCutIfNeeded(
    buildFullName(civilityLabelsShorts, toCivility, toFirstName, toLastName)
  );
}
function getAddressPartCutIfNeeded(addressPart) {
  if (!addressPart) return;
  if (addressPart.length <= maxAddressPartLength) return addressPart;
  return `${addressPart.slice(0, 44)}\u2026`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  civilityLabels,
  civilityLabelsShorts,
  createFullName,
  getAddressPartCutIfNeeded
});
