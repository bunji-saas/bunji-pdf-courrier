export const fNumber = (number: number) => {
  return number
}
export const fSqm = (number: number) => `${fNumber(number)} m²`
export const fCurr = (number: number) => `${fNumber(number)} €`
export const fPriceSqm = (number: number) => `${fNumber(number)} €/m²`

export const fMeters = (number: number) => `${fNumber(number)} m`
