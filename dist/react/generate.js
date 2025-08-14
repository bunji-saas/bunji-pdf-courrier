import ReactPDFLayout from '@react-pdf/layout';
import * as ReactPDF from '@react-pdf/renderer';
import React from 'react';
import LetterPage from './pdf/letterPage';
export function getAdvSettingWithDefaultValues(advSetting, agency) {
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
        estimateLowText: advSetting?.estimateLowText || 'Estimation Basse',
        estimateHighText: advSetting?.estimateHighText || 'Estimation Haute',
    };
}
const MemoDoc = React.memo(ReactPDF.Document);
const MemoizedPDFViewer = React.memo(ReactPDF.PDFViewer);
export function generatePDFElement({ pdfs, agency, advSetting, styleOptions }) {
    const advSettingsWithDefaultValues = getAdvSettingWithDefaultValues(advSetting ?? undefined, agency);
    return (React.createElement(MemoDoc, null, pdfs.map((pdf, index) => (React.createElement(React.Fragment, { key: index },
        React.createElement(LetterPage, { pdf: pdf, advSetting: advSettingsWithDefaultValues, styleOptions: styleOptions }))))));
}
export function PdfPreview({ pdfs, agency, advSetting, styleOptions }) {
    return (React.createElement(MemoizedPDFViewer, { showToolbar: false, style: {
            width: '100%',
            height: '100%',
            fontFamily: 'Roboto',
        } }, generatePDFElement({
        pdfs,
        agency,
        advSetting,
        styleOptions: styleOptions ?? {
            addressBox: {
                backgroundGrey: true,
            },
        },
    })));
}
export async function generatePDFtoBuffer(pdfCourrierOptions) {
    return await ReactPDF.renderToBuffer(generatePDFElement(pdfCourrierOptions));
}
export async function generatePDFtoStream(pdfCourrierOptions) {
    return await ReactPDF.renderToStream(generatePDFElement(pdfCourrierOptions));
}
export async function generatePDFtoBlob(pdfCourrierOptions) {
    return await ReactPDF.pdf(generatePDFElement(pdfCourrierOptions)).toBlob();
}
export async function countNbPages(pdfCourrierOptions) {
    const pdfDocument = generatePDFElement(pdfCourrierOptions);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const layout = (await ReactPDFLayout(ReactPDF.pdf(pdfDocument).container.document));
    return layout.children.filter((child) => child.type === 'PAGE').length;
}
