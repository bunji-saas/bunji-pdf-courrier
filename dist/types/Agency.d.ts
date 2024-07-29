interface Agency {
    id: number;
    name: string;
    address: string;
    zipCode: string;
    city: string;
    logo: string;
    website: string;
    colour: string;
    created_at: string;
    updated_at: string;
    estimationsEnabled: boolean;
    salesPredictionEnabled: boolean;
    isStripeEnabled: boolean;
    hasStripePaymentMethod: boolean;
}
export default Agency;
