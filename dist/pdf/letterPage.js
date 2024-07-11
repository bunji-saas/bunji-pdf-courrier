"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_pdf_html_1 = __importDefault(require("react-pdf-html"));
const renderer_1 = require("@react-pdf/renderer");
const footer_1 = __importDefault(require("./footer"));
const remplace_variables_1 = require("../utils/remplace-variables");
const tool_1 = require("../utils/tool");
const LetterPage = ({ pdf, agency, advSetting }) => {
    const useStyles = () => (0, react_1.useMemo)(() => renderer_1.StyleSheet.create({
        col4: { width: '25%' },
        col8: { width: '75%' },
        col6: { width: '50%' },
        mb4: { marginBottom: 4 },
        mb8: { marginBottom: 8 },
        mb40: { marginBottom: 40 },
        h3: { fontSize: 16, fontWeight: 700 },
        h4: { fontSize: 13, fontWeight: 700 },
        body1: { fontSize: 10, zIndex: 1 },
        body2: { fontSize: 9 },
        subtitle1: { fontSize: 10, fontWeight: 700 },
        subtitle2: { fontSize: 9, fontWeight: 700 },
        alignRight: { textAlign: 'right' },
        page: {
            fontSize: 9,
            lineHeight: 1.6,
            fontFamily: 'Roboto',
            backgroundColor: '#FFFFFF',
            padding: '40px 40px 120px 40px',
        },
        // https://www.mysendingbox.fr/guide/zones-decrasement/
        addressBox: {
            position: 'absolute',
            top: 112,
            height: 102,
            width: 276,
            textAlign: 'left',
            lineHeight: 1.6,
            right: 28,
            backgroundColor: tool_1.grey[200],
            // ...(variant === 'preview' && { backgroundColor: grey[200] }),
            borderRadius: '8px',
            zIndex: 0,
        },
        address: {
            paddingTop: 11,
            paddingBottom: 12,
            paddingRight: 11,
            paddingLeft: 28,
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        footer: {
            left: 0,
            right: 0,
            bottom: 0,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 24,
            paddingRight: 24,
            margin: 'auto',
            borderTopWidth: 1,
            borderStyle: 'solid',
            position: 'absolute',
            borderColor: '#DFE3E8',
        },
        gridContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    }), []);
    const styles = useStyles();
    return (react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
        react_1.default.createElement(renderer_1.View, { style: styles.addressBox },
            react_1.default.createElement(renderer_1.View, { style: styles.address },
                react_1.default.createElement(renderer_1.Text, null, (0, tool_1.createFullName)(pdf.toCivility, pdf.toFirstName, pdf.toLastName)),
                react_1.default.createElement(renderer_1.Text, null, pdf.toAddressLine1),
                react_1.default.createElement(renderer_1.Text, null, pdf.toAddressLine2),
                react_1.default.createElement(renderer_1.Text, null,
                    pdf.toZipCode,
                    " ",
                    pdf.toCity),
                react_1.default.createElement(renderer_1.Text, null, pdf.toCountry))),
        react_1.default.createElement(react_pdf_html_1.default, { style: styles.body1, stylesheet: {
                p: { margin: 0, fontWeight: 400 },
                strong: { fontWeight: 'bold' },
                ul: { margin: 0, padding: 0 },
                li: { margin: 0, padding: 0 },
                '.ql-align-right': { textAlign: 'right' },
            } }, pdf.content ? (0, remplace_variables_1.cleanText)((0, remplace_variables_1.remplaceVariables)(pdf.content, pdf, agency, advSetting)) : ''),
        react_1.default.createElement(footer_1.default, { agency: agency, advSetting: null })));
};
exports.default = LetterPage;
