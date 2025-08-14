import { Civility } from '../types';

export const civilitiesMapByCivility: Record<Civility, string> = {
  miss: 'Madame',
  mister: 'Monsieur',
  'mister-and-miss': 'Monsieur et Madame',
  company: 'Société',
  indivision: 'Indivision',
  succession: 'Succession',
  madams: 'Mesdames',
  sirs: 'Messieurs',
};
