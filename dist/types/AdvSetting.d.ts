interface AdvSetting {
    id: number;
    agencyName: string | null;
    agencyAddress: string | null;
    agencyZipCode: string | null;
    agencyCity: string | null;
    agencyWebsite: string | null;
    agencyLogo: string | null;
    agencyColour: string | null;
    customAdvStartPages: string | null;
    customAdvEndPages: string | null;
    estimateLowText: string | null;
    estimateHighText: string | null;
    userId: number;
}
export default AdvSetting;
