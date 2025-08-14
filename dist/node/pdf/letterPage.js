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
var letterPage_exports = {};
__export(letterPage_exports, {
  default: () => letterPage_default
});
module.exports = __toCommonJS(letterPage_exports);
var import_renderer = require("@react-pdf/renderer");
var import_react = __toESM(require("react"));
var import_react_pdf_html = __toESM(require("react-pdf-html"));
var import_remplace_variables_in_template = require("../utils/remplace-variables-in-template");
var import_tool = require("../utils/tool");
var import_footer = __toESM(require("./footer"));
const LetterPage = ({
  pdf,
  advSetting,
  styleOptions
}) => {
  const useStyles = () => (0, import_react.useMemo)(
    () => import_renderer.StyleSheet.create({
      col4: { width: "25%" },
      col8: { width: "75%" },
      col6: { width: "50%" },
      mb4: { marginBottom: 4 },
      mb8: { marginBottom: 8 },
      mb40: { marginBottom: 40 },
      h3: { fontSize: 16, fontWeight: 700 },
      h4: { fontSize: 13, fontWeight: 700 },
      body1: { fontSize: 10, zIndex: 1 },
      body2: { fontSize: 9 },
      subtitle1: { fontSize: 10, fontWeight: 700 },
      subtitle2: { fontSize: 9, fontWeight: 700 },
      alignRight: { textAlign: "right" },
      page: {
        fontSize: 9,
        lineHeight: 1.6,
        fontFamily: "Helvetica",
        backgroundColor: "#FFFFFF",
        padding: "40px 40px 120px 40px"
      },
      // https://www.mysendingbox.fr/guide/zones-decrasement/
      addressBox: {
        position: "absolute",
        top: 112,
        height: 102,
        width: 276,
        textAlign: "left",
        right: 28,
        backgroundColor: styleOptions?.addressBox?.backgroundGrey ? "#eeeeee" : "#ffffff",
        borderRadius: "8px",
        zIndex: 0
      },
      address: {
        paddingTop: 11,
        paddingBottom: 12,
        paddingRight: 11,
        paddingLeft: 28,
        position: "absolute",
        bottom: 0,
        left: 0,
        lineHeight: 0.8
      },
      footer: {
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        margin: "auto",
        borderTopWidth: 1,
        borderStyle: "solid",
        position: "absolute",
        borderColor: "#DFE3E8"
      },
      gridContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
      }
    }),
    []
  );
  const styles = useStyles();
  return /* @__PURE__ */ import_react.default.createElement(import_renderer.Page, { size: "A4", style: styles.page }, /* @__PURE__ */ import_react.default.createElement(import_renderer.View, { style: styles.addressBox }, /* @__PURE__ */ import_react.default.createElement(import_renderer.View, { style: styles.address }, /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, (0, import_tool.createFullName)(pdf.toCivility, pdf.toFirstName, pdf.toLastName)), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, (0, import_tool.getAddressPartCutIfNeeded)(pdf.toAddressLine1)), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, (0, import_tool.getAddressPartCutIfNeeded)(pdf.toAddressLine2)), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, (0, import_tool.getAddressPartCutIfNeeded)(pdf.toZipCode), " ", (0, import_tool.getAddressPartCutIfNeeded)(pdf.toCity)), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, (0, import_tool.getAddressPartCutIfNeeded)(pdf.toCountry)))), /* @__PURE__ */ import_react.default.createElement(
    import_react_pdf_html.default,
    {
      style: styles.body1,
      stylesheet: {
        p: { margin: 0, fontWeight: 400 },
        strong: { fontFamily: "Helvetica-Bold" },
        ul: { margin: 0, padding: 0 },
        li: { margin: 0, padding: 0 },
        ".ql-align-right": { textAlign: "right" }
      }
    },
    (0, import_remplace_variables_in_template.cleanText)((0, import_remplace_variables_in_template.replaceVariablesInTemplate)(pdf.content, pdf, advSetting))
  ), /* @__PURE__ */ import_react.default.createElement(import_footer.default, { advSetting }));
};
var letterPage_default = LetterPage;
