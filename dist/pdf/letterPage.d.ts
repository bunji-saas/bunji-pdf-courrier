import React from "react";
import { Agency, AdvSetting, PdfProps } from "../types";
declare const LetterPage: ({ pdf, agency, advSetting, }: {
    pdf: PdfProps;
    agency: Agency;
    advSetting: AdvSetting | null;
}) => React.JSX.Element;
export default LetterPage;
