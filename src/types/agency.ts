export interface Agency {
  id: number;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  logo: string;
  website: string;
  colour: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  created_at: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  updated_at: string;
  estimationsEnabled: boolean;
  salesPredictionEnabled: boolean;
  //  stripeCustomerId?: string
  isStripeEnabled: boolean;
  hasStripePaymentMethod: boolean;
}
