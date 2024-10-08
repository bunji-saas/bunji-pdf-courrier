import moment from 'moment'

import { courrierPropertyTypesOptions } from './property-types'
import { Agency, AdvSetting, PdfProps } from '../types'

const roundUpToClosest10 = (number: number) => Math.round(number / 10) * 10

export const getAdvSettingInfo = (agency: Agency, advSetting: AdvSetting | null) => {
  return {
    agencyName: advSetting?.agencyName || agency.name,
    agencyAddress: advSetting?.agencyAddress || agency.address,
    agencyZipCode: advSetting?.agencyZipCode || agency.zipCode,
    agencyCity: advSetting?.agencyCity || agency.city,
    agencyWebsite: advSetting?.agencyWebsite || agency.website,
    agencyLogo: advSetting?.agencyLogo || agency.logo,
    agencyColour: advSetting?.agencyColour || agency.colour,
    customAdvStartPages: advSetting?.customAdvStartPages || null,
    customAdvEndPages: advSetting?.customAdvEndPages || null,
    estimateLowText: advSetting?.estimateLowText || 'Estimation Basse',
    estimateHighText: advSetting?.estimateHighText || 'Estimation Haute',
  }
}

export const remplaceVariables = (
  text: string,
  pdf: PdfProps,
  agency: Agency,
  advSetting: AdvSetting | null,
) => {
  let replacedVariables = text

  const advSettingsInfo = getAdvSettingInfo(agency, advSetting)

  replacedVariables = replacedVariables
    .replace(/{{client_prenom}}/g, pdf.toFirstName || '')
    .replace(/{{client_nom}}/g, pdf.toLastName || '')
    .replace(/{{client_civilite}}/g, pdf.toCivility || '')
    .replace(/{{client_adresse_ligne1}}/g, pdf.toAddressLine1 || '')
    .replace(/{{client_adresse_ligne2}}/g, pdf.toAddressLine2 || '')
    .replace(/{{client_ville}}/g, pdf.toCity || '')
    .replace(/{{client_code_postal}}/g, pdf.toZipCode || '')
    .replace(/{{agent_prenom}}/g, pdf.sender?.firstname || '')
    .replace(/{{agent_nom}}/g, pdf.sender?.lastname || '')
    .replace(/{{agent_tel_mobile}}/g, pdf.sender?.telMobile || '')
    .replace(/{{agent_email}}/g, pdf.sender?.email || '')
    .replace(/{{agent_titre}}/g, pdf.sender?.title || '')
    .replace(/{{agence_nom}}/g, advSettingsInfo.agencyName || '')
    .replace(/{{agence_adresse}}/g, advSettingsInfo.agencyAddress || '')
    .replace(/{{agence_ville}}/g, advSettingsInfo.agencyCity || '')
    .replace(/{{agence_code_postal}}/g, advSettingsInfo.agencyZipCode || '')
    .replace(/{{bien_surface}}/g, pdf.surface?.toString() || '')
    .replace(/{{aujourdhui}}/g, moment().format('DD/MM/YYYY'))
    .replace(
      /{{bien_surface_arrondi_dizaine}}/g,
      pdf.surface ? roundUpToClosest10(pdf.surface).toString() : '',
    )
    .replace(
      /{{bien_type}}/g,
      courrierPropertyTypesOptions
        .find((prop: any) => prop.value === pdf.propertyType)
        ?.label.toLocaleLowerCase() || '',
    )

  return replacedVariables
}

export const cleanText = (text: string) => {
  const newText = text.replace(/\s+,+/g, ',').replace(/\s+\./g, '.')
  return newText
}
