import { Civility } from '../types';

export const civilityLabels: Record<Civility, string> = {
  miss: 'Madame',
  mister: 'Monsieur',
  'mister-and-miss': 'Monsieur et Madame',
  company: 'Société',
  indivision: 'Indivision',
  succession: 'Succession',
  madams: 'Mesdames',
  sirs: 'Messieurs',
};

export const createFullName = (
  toCivility?: Civility,
  toFirstName?: string,
  toLastName?: string,
) => {
  let fullName = '';

  if (toCivility) {
    fullName += `${civilityLabels[toCivility]} `;
  }

  if (toFirstName) {
    fullName += `${toFirstName} `;
  }

  if (toLastName) {
    fullName += toLastName;
  }

  if (!fullName) {
    return '';
  }

  return fullName.trim();
};

export const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161',
};
