// index.js
import { Document } from '@react-pdf/renderer';
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

const MemoDoc = React.memo(Document);

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
