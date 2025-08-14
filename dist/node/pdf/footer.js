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
var footer_exports = {};
__export(footer_exports, {
  default: () => footer_default
});
module.exports = __toCommonJS(footer_exports);
var import_renderer = require("@react-pdf/renderer");
var import_react = __toESM(require("react"));
const Footer = ({ advSetting }) => {
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
      body1: { fontSize: 10 },
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
  return /* @__PURE__ */ import_react.default.createElement(import_renderer.View, { style: [styles.gridContainer, styles.footer], fixed: true }, /* @__PURE__ */ import_react.default.createElement(import_renderer.View, null, advSetting?.agencyLogo && /* @__PURE__ */ import_react.default.createElement(import_renderer.Image, { source: advSetting.agencyLogo, style: { height: 40, objectFit: "scale-down" } })), /* @__PURE__ */ import_react.default.createElement(import_renderer.View, { style: [styles.col4, styles.alignRight] }, /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, { style: styles.subtitle2 }, advSetting.agencyName), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, advSetting.agencyAddress), /* @__PURE__ */ import_react.default.createElement(import_renderer.Text, null, advSetting.agencyZipCode, " ", advSetting.agencyCity)));
};
var footer_default = Footer;
