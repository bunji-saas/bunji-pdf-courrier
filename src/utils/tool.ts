import { Civility } from '../types';

/**
 * Src : https://docs.mysendingbox.fr/#address-object
 */
const maxAddressPartLength = 45;

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

export const civilityLabelsShorts: Record<Civility, string> = {
  miss: 'Mme',
  mister: 'M.',
  'mister-and-miss': 'M. & Mme',
  company: 'Sté',
  indivision: 'Indiv.',
  succession: 'Succ.',
  madams: 'Mmes',
  sirs: 'MM.',
};

function buildFullName(
  civilityLabelsMap: Record<Civility, string>,
  toCivility?: Civility | null,
  toFirstName?: string | null,
  toLastName?: string | null,
) {
  const fullName = [toCivility ? civilityLabelsMap[toCivility] : '', toFirstName, toLastName]
    .filter((e) => e)
    .map((e) => e?.trim() || '')
    .join(' ')
    .trim();
  if (fullName === '') {
    return '.';
  }
  return fullName;
}

export function createFullName(
  toCivility?: Civility | null,
  toFirstName?: string | null,
  toLastName?: string | null,
) {
  const fullName = buildFullName(civilityLabels, toCivility, toFirstName, toLastName);
  if (fullName.length <= maxAddressPartLength) return fullName;
  return getAddressPartCutIfNeeded(
    buildFullName(civilityLabelsShorts, toCivility, toFirstName, toLastName),
  );
}

export function getAddressPartCutIfNeeded(addressPart?: string | null): string | null | undefined {
  if (!addressPart) return;
  if (addressPart.length <= maxAddressPartLength) return addressPart;
  return `${addressPart.slice(0, 44)}…`;
}
