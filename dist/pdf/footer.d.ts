import React from "react";
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
type Props = {
    agency: Agency;
    advSetting: AdvSetting | null;
};
declare const Footer: ({ agency, advSetting }: Props) => React.JSX.Element;
export default Footer;
