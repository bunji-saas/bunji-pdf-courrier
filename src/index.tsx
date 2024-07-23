import React from "react";
import { Document, Font } from "@react-pdf/renderer";

import LetterPage from "./pdf/letterPage";

// Register fonts
Font.register({
  family: "Roboto",
  fonts: [
    { src: `dist/assets/fonts/Roboto-Regular.ttf` },
    { src: `dist/assets/fonts/Roboto-Bold.ttf`, fontWeight: "bold" },
  ],
});

interface PDFProps {
  pdfs: PdfProps[];
  agency: Agency;
  advSetting: AdvSetting | null;
}

const MemoDoc = React.memo(Document);

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
