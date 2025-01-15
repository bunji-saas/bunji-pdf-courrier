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
  toCivility?: Civility | null,
  toFirstName?: string | null,
  toLastName?: string | null,
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
