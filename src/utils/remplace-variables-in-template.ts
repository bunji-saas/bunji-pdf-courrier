import dayjs from 'dayjs';

import { AdvSetting, PdfProperties } from '../types';
import { courrierPropertyTypesLabels } from './property-types';

function roundUpToClosest10(value: number | undefined) {
  if (!value) return;
  return Math.round(value / 10) * 10;
}

function replace(text: string, replacementValues: [string, string | undefined][]) {
  let result: string = text;
  for (const replacementValue of replacementValues) {
    result = result.replaceAll(`{{${replacementValue[0]}}}`, replacementValue[1] || '');
  }
  return result;
}

export function replaceVariablesInTemplate(
  text: string | undefined,
  pdf: PdfProperties,
  advSetting: AdvSetting,
) {
  if (!text) return '';

  return replace(text, [
    ['client_prenom', pdf.toFirstName],
    ['client_nom', pdf.toLastName],
    ['client_civilite', pdf.toCivility],
    ['client_adresse_ligne1', pdf.toAddressLine1],
    ['client_adresse_ligne2', pdf.toAddressLine2],
    ['client_ville', pdf.toCity],
    ['client_code_postal', pdf.toZipCode],
    ['agent_prenom', pdf.sender?.firstname],
    ['agent_nom', pdf.sender?.lastname],
    ['agent_tel_mobile', pdf.sender?.telMobile],
    ['agent_email', pdf.sender?.email],
    ['agent_titre', pdf.sender?.title],
    ['bien_surface', pdf.surface?.toString()],
    ['bien_surface_arrondi_dizaine', roundUpToClosest10(pdf.surface)?.toString()],
    ['agence_nom', advSetting.agencyName],
    ['agence_adresse', advSetting.agencyAddress],
    ['agence_ville', advSetting.agencyCity],
    ['agence_code_postal', advSetting.agencyZipCode],
    ['aujourdhui', dayjs().format('DD/MM/YYYY')],
    [
      'bien_type',
      pdf.propertyType ? courrierPropertyTypesLabels[pdf.propertyType]?.toLocaleLowerCase() : '',
    ],
  ]);
}

export const cleanText = (text: string) => {
  return text.replace(/\s+,+/g, ',').replace(/\s+\./g, '.');
};
