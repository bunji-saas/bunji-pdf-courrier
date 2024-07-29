import React from "react";
import { AdvSetting, Agency, PdfProps } from './types';
interface PDFProps {
    pdfs: PdfProps[];
    agency: Agency;
    advSetting: AdvSetting | null;
}
declare const PDF: ({ pdfs, agency, advSetting }: PDFProps) => React.JSX.Element;
export default PDF;
