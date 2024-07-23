export declare const getAdvSettingInfo: (agency: Agency, advSetting: AdvSetting | null) => {
    agencyName: string;
    agencyAddress: string;
    agencyZipCode: string;
    agencyCity: string;
    agencyWebsite: string;
    agencyLogo: string;
    agencyColour: string;
    customAdvStartPages: string | null;
    customAdvEndPages: string | null;
    estimateLowText: string;
    estimateHighText: string;
};
export declare const remplaceVariables: (text: string, pdf: PdfProps, agency: Agency, advSetting: AdvSetting | null) => string;
export declare const cleanText: (text: string) => string;
