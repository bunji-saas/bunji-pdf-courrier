import React from 'react';
import { PDFCourrierOptionsInternal } from '../generate';
import { PdfProperties } from '../types';
declare const LetterPage: ({ pdf, advSetting, styleOptions, }: {
    pdf: PdfProperties;
} & Required<Pick<PDFCourrierOptionsInternal, "advSetting">> & Pick<PDFCourrierOptionsInternal, "styleOptions">) => React.JSX.Element;
export default LetterPage;
