import React from 'react';
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
export declare function getAdvSettingWithDefaultValues(advSetting: AdvSetting | undefined, agency: CourrierAgency): {
    agencyName: string;
    agencyAddress: string;
    agencyZipCode: string;
    agencyCity: string;
    agencyWebsite: string;
    agencyLogo: string;
    agencyColour: string;
    customAdvStartPages: string | null | undefined;
    customAdvEndPages: string | null | undefined;
    estimateLowText: string;
    estimateHighText: string;
};
export declare function generatePDFElement({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions): React.JSX.Element;
export declare function PdfPreview({ pdfs, agency, advSetting, styleOptions }: PDFCourrierOptions): React.JSX.Element;
export declare function generatePDFtoBuffer(pdfCourrierOptions: PDFCourrierOptions): Promise<Buffer<ArrayBufferLike>>;
export declare function generatePDFtoStream(pdfCourrierOptions: PDFCourrierOptions): Promise<NodeJS.ReadableStream>;
export declare function generatePDFtoBlob(pdfCourrierOptions: PDFCourrierOptions): Promise<Blob>;
export declare function countNbPages(pdfCourrierOptions: PDFCourrierOptions): Promise<number>;
