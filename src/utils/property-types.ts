// import mapKeys from 'lodash/mapKeys'
// import assets from 'Config/assets'

export const apartment: {
  value: 'apartment';
  label: string;
  labelShort: string;
  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'apartment',
  label: 'Appartement',
  labelShort: 'Appart',

  // icon: assets.icons.apartment,
  emoticon: '🏬',
  colour: undefined,
};

export const boat: {
  value: 'boat';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'boat',
  label: 'Bâteau',
  labelShort: 'Bâteau',
  // icon: assets.icons.office,
  emoticon: '🚢',
  colour: undefined,
};

export const building: {
  value: 'building';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'building',
  label: 'Immeuble',
  labelShort: 'Imm.',
  // icon: assets.icons.office,
  emoticon: '🏢',
  colour: undefined,
};

export const basement: {
  value: 'basement';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'basement',
  label: 'Cave',
  labelShort: 'Cave',
  // icon: assets.icons.downstairs,
  emoticon: '🍷',
  colour: undefined,
};

export const commercial: {
  value: 'commercial';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'commercial',
  label: 'Local commercial',
  labelShort: 'Loc. Com.',
  // icon: assets.icons.commercial,
  emoticon: '🛍',
  colour: undefined,
};

export const house: {
  value: 'house';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'house',
  label: 'Maison',
  labelShort: 'Maison',
  // icon: assets.icons.house,
  emoticon: '🏠',
  colour: undefined,
};

export const land: {
  value: 'land';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'land',
  label: 'Terrain',
  labelShort: 'Terr.',
  // icon: assets.icons.land,
  emoticon: '🌳',
  colour: undefined,
};

export const office: {
  value: 'office';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'office',
  label: 'Bureau',
  labelShort: 'Bur.',
  // icon: assets.icons.office,
  emoticon: '🏢',
  colour: undefined,
};

export const other: {
  value: 'other';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'other',
  label: 'Autre',
  labelShort: 'Autre',
  // icon: assets.icons.other,
  emoticon: '➕',
  colour: undefined,
};
export const parking: {
  value: 'parking';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'parking',
  label: 'Parking',
  labelShort: 'Park.',
  // icon: assets.icons.parking,
  emoticon: '🅿️',
  colour: undefined,
};

export const professional: {
  value: 'professional';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'professional',
  label: 'Boutique, Local, Bureau',
  labelShort: 'Boutique, local, bur.',
  // icon: assets.icons.office,
  emoticon: '🏢',
  colour: undefined,
};

export const store: {
  value: 'store';
  label: string;
  labelShort: string;

  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'store',
  label: 'Commerce',
  labelShort: 'Commerce',
  // icon: assets.icons.office,
  emoticon: '🛍',
  colour: undefined,
};

export const warehouse: {
  value: 'warehouse';
  label: string;
  labelShort: string;
  // icon: string
  emoticon: string;
  colour: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | undefined;
} = {
  value: 'warehouse',
  label: 'Entrepôt',
  labelShort: 'Entrepôt',
  // icon: assets.icons.office,
  emoticon: '📦',
  colour: undefined,
};

export const nullValue = {
  value: null,
  label: 'n.d.',
  // icon: assets.icons.downstairs,
  emoticon: '﹖',
  colour: undefined,
};

export const others = {
  value: null,
  label: 'Autre',

  // icon: assets.icons.downstairs,
  emoticon: '🏡',
  colour: undefined,
};

export const propertyTypes = [apartment, house, parking, land, commercial, office, basement]; // did not include other not part of Project['type']
// export const propertyTypesObj2 = mapKeys(propertyTypes, 'value')
// export const propertyTypesObj = (
//   type: Project['type'] | Listing['propertyType'] | 'terrain' | null,
// ) => {
//   switch (type) {
//     case 'apartment':
//       return apartment
//     case 'house':
//       return house
//     case 'commercial':
//       return commercial
//     case 'office':
//       return office
//     case 'basement':
//       return basement
//     case 'land':
//       return land
//     case 'terrain': // Moteur Immo throws back a Terrain value
//       return land
//     case 'professional':
//       return professional
//     case 'parking':
//       return parking
//     case 'building':
//       return building
//     case 'store':
//       return store
//     case null:
//       return nullValue

//     default:
//       return others
//   }
// }

export const types = [apartment, house, parking, other];
export const otherTypes = [land, commercial, office, basement];

export const propertyTypesInclOthers = [
  apartment,
  house,
  parking,
  other,
  land,
  commercial,
  office,
  basement,
];

export const buyerPropertyOptions = [
  apartment,
  house,
  parking,
  land,
  commercial,
  basement,
  building,
  office,
  // professional,
  //store,
  warehouse,
  boat,
  other,
];

export const rentalPropertyOptions = buyerPropertyOptions;

export const courrierPropertyTypesOptions = [
  apartment,
  house,
  parking,
  land,
  commercial,
  basement,
  building,
  office,
  // professional,
  store,
  warehouse,
  boat,
  //other,
];

export const estimationRentalsPropertyTypes = [apartment, house];
