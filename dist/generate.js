"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.js
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const letterPage_1 = __importDefault(require("./pdf/letterPage"));
renderer_1.Font.register({
    family: 'Roboto',
    fonts: [
        { src: `./public/fonts/Roboto-Regular.ttf` },
        { src: `./public/fonts/Roboto-Bold.ttf`, fontWeight: 'bold' },
    ],
});
const MemoDoc = react_1.default.memo(renderer_1.Document);
const PDF = ({ pdfs, agency, advSetting }) => {
    return (react_1.default.createElement(MemoDoc, null, pdfs.map((pdf, index) => (react_1.default.createElement(react_1.default.Fragment, { key: index },
        react_1.default.createElement(letterPage_1.default, { pdf: pdf, agency: agency, advSetting: advSetting }))))));
};
exports.default = PDF;
