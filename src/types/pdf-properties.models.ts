export interface User {
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  telMobile?: string | null;
  title?: string | null;
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
  content?: string | null;
  toCivility?: Civility | null;
  toFirstName?: string | null;
  toLastName?: string | null;
  toAddressLine1?: string | null;
  toAddressLine2?: string | null;
  toCity?: string | null;
  toZipCode?: string | null;
  toCountry?: string | null;
  sender?: User | null;
  surface?: number | null;
  propertyType?: PropertyTypeForCourrier | null;
}
