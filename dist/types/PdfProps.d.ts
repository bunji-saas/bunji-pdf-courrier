interface PdfProps {
    content: string | null;
    toCivility: 'mister' | 'miss' | 'mister-and-miss' | 'company' | 'indivision' | 'madams' | 'sirs' | 'succession' | null;
    toFirstName: string | null;
    toLastName: string | null;
    toAddressLine1: string | null;
    toAddressLine2: string | null;
    toCity: string | null;
    toZipCode: string | null;
    toCountry: string | null;
    sender: any | null;
    surface: number | null;
    propertyType: 'apartment' | 'basement' | 'boat' | 'building' | 'commercial' | 'house' | 'land' | 'office' | 'parking' | 'warehouse' | null;
}
export default PdfProps;
