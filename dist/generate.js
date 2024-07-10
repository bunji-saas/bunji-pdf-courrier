"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.js
const react_1 = __importDefault(require("react"));
const renderer_1 = require("@react-pdf/renderer");
const styles = renderer_1.StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 600,
        color: "#131925",
        marginBottom: 8
    },
    statement: {
        fontSize: 20,
        color: "#131925",
        lineHeight: 1.4,
        marginBottom: 4,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#999999",
        margin: "24px 0 24px 0"
    },
    paragraph: {
        fontSize: 12,
        color: "#212935",
        lineHeight: 1.67,
    },
    columnParent: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    columnStart: {
        flex: 1,
    },
    columnEnd: {
        flex: 1,
        alignItems: "flex-end"
    },
});
const PDF = ({ data }) => {
    return (react_1.default.createElement(renderer_1.Document, null,
        react_1.default.createElement(renderer_1.Page, { size: "A4", style: styles.page },
            react_1.default.createElement(renderer_1.View, { style: styles.section },
                react_1.default.createElement(renderer_1.View, { style: styles.columnParent },
                    react_1.default.createElement(renderer_1.View, { style: styles.columnStart },
                        react_1.default.createElement(renderer_1.Text, { style: styles.heading }, data.companyName),
                        react_1.default.createElement(renderer_1.Text, { style: styles.paragraph }, data.companyPhone),
                        react_1.default.createElement(renderer_1.Text, { style: styles.paragraph }, data.companyEmail)),
                    react_1.default.createElement(renderer_1.View, { style: styles.columnEnd },
                        react_1.default.createElement(renderer_1.Text, { style: styles.heading }, "Receipt"),
                        react_1.default.createElement(renderer_1.Text, { style: styles.paragraph },
                            "Receipt number: ",
                            data.receiptNumber),
                        react_1.default.createElement(renderer_1.Text, { style: styles.paragraph },
                            "Date paid: ",
                            data.datePaid),
                        react_1.default.createElement(renderer_1.Text, { style: styles.paragraph },
                            "Payment method: ",
                            data.paymentMethod))),
                react_1.default.createElement(renderer_1.View, { style: styles.divider }),
                react_1.default.createElement(renderer_1.View, null,
                    react_1.default.createElement(renderer_1.Text, { style: styles.statement }, `${data.amount} paid on ${data.datePaid}`),
                    react_1.default.createElement(renderer_1.Text, { style: styles.paragraph }, "Thank you for your business!"))))));
};
exports.default = PDF;
