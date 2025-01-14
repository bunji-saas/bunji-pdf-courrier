// index.js
import { Document } from '@react-pdf/renderer';
import React from 'react';

import LetterPage from './pdf/letterPage';
import { AdvSetting, Agency, PdfProperties, StyleOptions } from './types';

export interface PDFCourrierOptions {
  pdfs: PdfProperties[];
  agency: Agency;
  advSetting: AdvSetting | null;
  styleOptions: StyleOptions;
}

const MemoDoc = React.memo(Document);

const PDF = ({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions) => {
  return (
    <MemoDoc>
      {pdfs.map((pdf, index) => (
        <React.Fragment key={index}>
          <LetterPage
            pdf={pdf}
            agency={agency}
            advSetting={advSetting}
            styleOptions={styleOptions}
          />
        </React.Fragment>
      ))}
    </MemoDoc>
  );
};

export default PDF;
