"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdvSettingInfo = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const renderer_1 = require("@react-pdf/renderer");
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
const useStyles = () => (0, react_2.useMemo)(() => renderer_1.StyleSheet.create({
    col4: { width: '25%' },
    col8: { width: '75%' },
    col6: { width: '50%' },
    mb4: { marginBottom: 4 },
    mb8: { marginBottom: 8 },
    mb40: { marginBottom: 40 },
    h3: { fontSize: 16, fontWeight: 700 },
    h4: { fontSize: 13, fontWeight: 700 },
    body1: { fontSize: 10 },
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
const Footer = ({ agency, advSetting }) => {
    const advSettingInfo = (0, exports.getAdvSettingInfo)(agency, advSetting);
    const styles = useStyles();
    return (react_1.default.createElement(renderer_1.View, { style: [styles.gridContainer, styles.footer], fixed: true },
        react_1.default.createElement(renderer_1.View, null, (advSettingInfo === null || advSettingInfo === void 0 ? void 0 : advSettingInfo.agencyLogo) && (react_1.default.createElement(renderer_1.Image, { source: advSettingInfo.agencyLogo, style: { height: 40, objectFit: 'scale-down' } }))),
        react_1.default.createElement(renderer_1.View, { style: [styles.col4, styles.alignRight] },
            react_1.default.createElement(renderer_1.Text, { style: styles.subtitle2 }, advSettingInfo.agencyName),
            react_1.default.createElement(renderer_1.Text, null, advSettingInfo.agencyAddress),
            react_1.default.createElement(renderer_1.Text, null,
                advSettingInfo.agencyZipCode,
                " ",
                advSettingInfo.agencyCity))));
};
exports.default = Footer;
