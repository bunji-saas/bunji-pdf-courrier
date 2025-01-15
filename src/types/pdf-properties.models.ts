export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  telMobile?: string;
  title?: string;
}

export type Civility =
  | 'mister'
  | 'miss'
  | 'mister-and-miss'
  | 'company'
  | 'indivision'
  | 'madams'
  | 'sirs'
  | 'succession';

export type PropertyTypeForCourrier =
  | 'apartment'
  | 'basement'
  | 'boat'
  | 'building'
  | 'commercial'
  | 'house'
  | 'land'
  | 'office'
  | 'parking'
  | 'warehouse'
  | 'store';

export interface PdfProperties {
  content?: string;
  toCivility?: Civility;
  toFirstName?: string;
  toLastName?: string;
  toAddressLine1?: string;
  toAddressLine2?: string;
  toCity?: string;
  toZipCode?: string;
  toCountry?: string;
  sender?: User;
  surface?: number;
  propertyType?: PropertyTypeForCourrier;
}
