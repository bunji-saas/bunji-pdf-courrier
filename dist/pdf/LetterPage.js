import { useMemo } from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
const Html = require('react-pdf-html');
// import { grey } from '@mui/material/colors'
const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
};
export const civilityOptions = [
    { value: 'miss', label: 'Madame' },
    { value: 'mister', label: 'Monsieur' },
    { value: 'mister-and-miss', label: 'Monsieur et Madame' },
    { value: 'company', label: 'Société' },
    { value: 'indivision', label: 'Indivision' },
    { value: 'succession', label: 'Succession' },
    { value: 'madams', label: 'Mesdames' },
    { value: 'sirs', label: 'Messieurs' },
];
import Footer from './Footer';
import { remplaceVariables, cleanText } from './remplace-variables';
import React from 'react';
export const createFullName = (toCivility, toFirstName, toLastName) => {
    var _a;
    let fullName = '';
    if (toCivility) {
        fullName += `${(_a = civilityOptions.find((option) => option.value === toCivility)) === null || _a === void 0 ? void 0 : _a.label} `;
    }
    if (toFirstName) {
        fullName += `${toFirstName} `;
    }
    if (toLastName) {
        fullName += toLastName;
    }
    if (!fullName) {
        return '';
    }
    return fullName.trim();
};
const PdfPage = ({ pdf, agency, advSetting }) => {
    const useStyles = () => useMemo(() => StyleSheet.create({
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
            backgroundColor: grey[200],
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
    return (React.createElement(Page, { size: "A4", style: styles.page },
        React.createElement(View, { style: styles.addressBox },
            React.createElement(View, { style: styles.address },
                React.createElement(Text, null, createFullName(pdf.toCivility, pdf.toFirstName, pdf.toLastName)),
                React.createElement(Text, null, pdf.toAddressLine1),
                React.createElement(Text, null, pdf.toAddressLine2),
                React.createElement(Text, null,
                    pdf.toZipCode,
                    " ",
                    pdf.toCity),
                React.createElement(Text, null, pdf.toCountry))),
        React.createElement(Html, { style: styles.body1, stylesheet: {
                p: { margin: 0, fontWeight: 400 },
                strong: { fontWeight: 'bold' },
                ul: { margin: 0, padding: 0 },
                li: { margin: 0, padding: 0 },
                ['.ql-align-right']: { textAlign: 'right' },
            } }, pdf.content ? cleanText(remplaceVariables(pdf.content, pdf, agency, advSetting)) : ''),
        React.createElement(Footer, { agency: agency, advSetting: advSetting })));
};
export default PdfPage;
