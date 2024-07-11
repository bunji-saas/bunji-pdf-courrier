// index.js
import React from "react";
import  {
    Document,
} from "@react-pdf/renderer";

import LetterPage from "./pdf/letterPage";

interface PDFProps {
    pdfs: PdfProps[];
    agency: Agency;
    advSetting: AdvSetting | null;
}

const MemoDoc = React.memo(Document)

const PDF = ({ pdfs, agency, advSetting }: PDFProps) => {
    return (
        <MemoDoc>
            {pdfs.map((pdf, index) => (
                <React.Fragment key={index}>
                    <LetterPage pdf={pdf} agency={agency} advSetting={advSetting} />
                </React.Fragment>
            ))}
        </MemoDoc>
    );
};

export default PDF;