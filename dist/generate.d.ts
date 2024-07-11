import React from "react";
interface PDFProps {
    pdfs: PdfProps[];
    agency: Agency;
    advSetting: AdvSetting | null;
}
declare const PDF: ({ pdfs, agency, advSetting }: PDFProps) => React.JSX.Element;
export default PDF;
