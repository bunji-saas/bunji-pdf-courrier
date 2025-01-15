// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as ReactPDFLayout from '@react-pdf/layout';
import * as ReactPDF from '@react-pdf/renderer';
import React from 'react';

import LetterPage from './pdf/letterPage';
import { AdvSetting, CourrierAgency, PdfProperties, StyleOptions } from './types';

export interface PDFCourrierOptions {
  pdfs: PdfProperties[];
  agency: CourrierAgency;
  advSetting?: AdvSetting;
  styleOptions?: StyleOptions;
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

export function generatePDFElement({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions) {
  const advSettingsWithDefaultValues = getAdvSettingWithDefaultValues(advSetting, agency);

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

export async function generatePDFtoBuffer(pdfCourrierOptions: PDFCourrierOptions) {
  return await ReactPDF.renderToBuffer(generatePDFElement(pdfCourrierOptions));
}

export async function generatePDFtoStream(pdfCourrierOptions: PDFCourrierOptions) {
  return await ReactPDF.renderToStream(generatePDFElement(pdfCourrierOptions));
}

export async function countNbPages(pdfCourrierOptions: PDFCourrierOptions) {
  const pdfDocument = generatePDFElement(pdfCourrierOptions);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const layout = (await ReactPDFLayout.default(ReactPDF.pdf(pdfDocument).container.document)) as {
    children: { type: string }[];
  };
  return layout.children.filter((child) => child.type === 'PAGE').length;
}
