import ReactPDFLayout from '@react-pdf/layout';
import * as ReactPDF from '@react-pdf/renderer';
import React from 'react';

import LetterPage from './pdf/letterPage';
import { AdvSetting, CourrierAgency, PdfProperties, StyleOptions } from './types';

export interface PDFCourrierOptionsInternal {
  pdfs: PdfProperties[];
  agency: CourrierAgency;
  advSetting?: AdvSetting;
  styleOptions?: StyleOptions;
}

export interface PDFCourrierOptions extends Omit<PDFCourrierOptionsInternal, 'advSetting'> {
  advSetting?: AdvSetting | null;
}

export function getAdvSettingWithDefaultValues(
  advSetting: AdvSetting | undefined,
  agency: CourrierAgency,
) {
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

export function generatePDFElement({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions) {
  const advSettingsWithDefaultValues = getAdvSettingWithDefaultValues(
    advSetting ?? undefined,
    agency,
  );

  return (
    <MemoDoc>
      {pdfs.map((pdf, index) => (
        <React.Fragment key={index}>
          <LetterPage
            pdf={pdf}
            advSetting={advSettingsWithDefaultValues}
            styleOptions={styleOptions}
          />
        </React.Fragment>
      ))}
    </MemoDoc>
  );
}

export function PdfPreview({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions) {
  return (
    <MemoizedPDFViewer
      showToolbar={false}
      style={{
        width: '100%',
        height: '100%',
        fontFamily: 'Roboto',
      }}
    >
      {generatePDFElement({
        pdfs,
        agency,
        advSetting,
        styleOptions: styleOptions ?? {
          addressBox: {
            backgroundGrey: true,
          },
        },
      })}
    </MemoizedPDFViewer>
  );
}

export async function generatePDFtoBuffer(pdfCourrierOptions: PDFCourrierOptions) {
  return await ReactPDF.renderToBuffer(generatePDFElement(pdfCourrierOptions));
}

export async function generatePDFtoStream(pdfCourrierOptions: PDFCourrierOptions) {
  return await ReactPDF.renderToStream(generatePDFElement(pdfCourrierOptions));
}

export async function generatePDFtoBlob(pdfCourrierOptions: PDFCourrierOptions) {
  return await ReactPDF.pdf(generatePDFElement(pdfCourrierOptions)).toBlob();
}

export async function countNbPages(pdfCourrierOptions: PDFCourrierOptions) {
  const pdfDocument = generatePDFElement(pdfCourrierOptions);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const layout = (await ReactPDFLayout(ReactPDF.pdf(pdfDocument).container.document)) as {
    children: { type: string }[];
  };
  return layout.children.filter((child) => child.type === 'PAGE').length;
}
