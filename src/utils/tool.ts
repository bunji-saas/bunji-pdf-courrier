export const civilityOptions = [
  { value: 'miss', label: 'Madame' },
  { value: 'mister', label: 'Monsieur' },
  { value: 'mister-and-miss', label: 'Monsieur et Madame' },
  { value: 'company', label: 'Société' },
  { value: 'indivision', label: 'Indivision' },
  { value: 'succession', label: 'Succession' },
  { value: 'madams', label: 'Mesdames' },
  { value: 'sirs', label: 'Messieurs' },
]

export const createFullName = (
  toCivility: 'mister'
    | 'miss'
    | 'mister-and-miss'
    | 'company'
    | 'indivision'
    | 'sirs'
    | 'madams'
    | 'succession'
    | null,
  toFirstName: string | null,
  toLastName: string | null,
) => {
  let fullName = ''

  if (toCivility) {
    fullName += `${civilityOptions.find((option) => option.value === toCivility)?.label} `
  }

  if (toFirstName) {
    fullName += `${toFirstName} `
  }

  if (toLastName) {
    fullName += toLastName
  }

  if (!fullName) {
    return ''
  }

  return fullName.trim()
}

export const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
}