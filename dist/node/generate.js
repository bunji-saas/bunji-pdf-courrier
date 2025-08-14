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
var generate_exports = {};
__export(generate_exports, {
  PdfPreview: () => PdfPreview,
  countNbPages: () => countNbPages,
  generatePDFElement: () => generatePDFElement,
  generatePDFtoBlob: () => generatePDFtoBlob,
  generatePDFtoBuffer: () => generatePDFtoBuffer,
  generatePDFtoStream: () => generatePDFtoStream,
  getAdvSettingWithDefaultValues: () => getAdvSettingWithDefaultValues
});
module.exports = __toCommonJS(generate_exports);
var import_layout = __toESM(require("@react-pdf/layout"));
var ReactPDF = __toESM(require("@react-pdf/renderer"));
var import_react = __toESM(require("react"));
var import_letterPage = __toESM(require("./pdf/letterPage"));
function getAdvSettingWithDefaultValues(advSetting, agency) {
  return {
    agencyName: advSetting?.agencyName || agency.name,
    agencyAddress: advSetting?.agencyAddress || agency.address,
    agencyZipCode: advSetting?.agencyZipCode || agency.zipCode,
    agencyCity: advSetting?.agencyCity || agency.city,
    agencyWebsite: advSetting?.agencyWebsite || agency.website,
    agencyLogo: advSetting?.agencyLogo || agency.logo,
    agencyColour: advSetting?.agencyColour || agency.colour,
    customAdvStartPages: advSetting?.customAdvStartPages,
    customAdvEndPages: advSetting?.customAdvEndPages,
    estimateLowText: advSetting?.estimateLowText || "Estimation Basse",
    estimateHighText: advSetting?.estimateHighText || "Estimation Haute"
  };
}
const MemoDoc = import_react.default.memo(ReactPDF.Document);
const MemoizedPDFViewer = import_react.default.memo(ReactPDF.PDFViewer);
function generatePDFElement({ pdfs, agency, advSetting, styleOptions }) {
  const advSettingsWithDefaultValues = getAdvSettingWithDefaultValues(
    advSetting ?? void 0,
    agency
  );
  return /* @__PURE__ */ import_react.default.createElement(MemoDoc, null, pdfs.map((pdf, index) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, { key: index }, /* @__PURE__ */ import_react.default.createElement(
    import_letterPage.default,
    {
      pdf,
      advSetting: advSettingsWithDefaultValues,
      styleOptions
    }
  ))));
}
function PdfPreview({ pdfs, agency, advSetting, styleOptions }) {
  return /* @__PURE__ */ import_react.default.createElement(
    MemoizedPDFViewer,
    {
      showToolbar: false,
      style: {
        width: "100%",
        height: "100%",
        fontFamily: "Roboto"
      }
    },
    generatePDFElement({
      pdfs,
      agency,
      advSetting,
      styleOptions: styleOptions ?? {
        addressBox: {
          backgroundGrey: true
        }
      }
    })
  );
}
async function generatePDFtoBuffer(pdfCourrierOptions) {
  return await ReactPDF.renderToBuffer(generatePDFElement(pdfCourrierOptions));
}
async function generatePDFtoStream(pdfCourrierOptions) {
  return await ReactPDF.renderToStream(generatePDFElement(pdfCourrierOptions));
}
async function generatePDFtoBlob(pdfCourrierOptions) {
  return await ReactPDF.pdf(generatePDFElement(pdfCourrierOptions)).toBlob();
}
async function countNbPages(pdfCourrierOptions) {
  const pdfDocument = generatePDFElement(pdfCourrierOptions);
  const layout = await (0, import_layout.default)(ReactPDF.pdf(pdfDocument).container.document);
  return layout.children.filter((child) => child.type === "PAGE").length;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PdfPreview,
  countNbPages,
  generatePDFElement,
  generatePDFtoBlob,
  generatePDFtoBuffer,
  generatePDFtoStream,
  getAdvSettingWithDefaultValues
});
