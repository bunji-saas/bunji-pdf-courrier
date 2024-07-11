"use strict";
// import mapKeys from 'lodash/mapKeys'
// import assets from 'Config/assets'
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimationRentalsPropertyTypes = exports.courrierPropertyTypesOptions = exports.rentalPropertyOptions = exports.buyerPropertyOptions = exports.propertyTypesInclOthers = exports.otherTypes = exports.types = exports.propertyTypes = exports.others = exports.nullValue = exports.warehouse = exports.store = exports.professional = exports.parking = exports.other = exports.office = exports.land = exports.house = exports.commercial = exports.basement = exports.building = exports.boat = exports.apartment = void 0;
exports.apartment = {
    value: 'apartment',
    label: 'Appartement',
    labelShort: 'Appart',
    // icon: assets.icons.apartment,
    emoticon: '🏬',
    colour: undefined,
};
exports.boat = {
    value: 'boat',
    label: 'Bâteau',
    labelShort: 'Bâteau',
    // icon: assets.icons.office,
    emoticon: '🚢',
    colour: undefined,
};
exports.building = {
    value: 'building',
    label: 'Immeuble',
    labelShort: 'Imm.',
    // icon: assets.icons.office,
    emoticon: '🏢',
    colour: undefined,
};
exports.basement = {
    value: 'basement',
    label: 'Cave',
    labelShort: 'Cave',
    // icon: assets.icons.downstairs,
    emoticon: '🍷',
    colour: undefined,
};
exports.commercial = {
    value: 'commercial',
    label: 'Local commercial',
    labelShort: 'Loc. Com.',
    // icon: assets.icons.commercial,
    emoticon: '🛍',
    colour: undefined,
};
exports.house = {
    value: 'house',
    label: 'Maison',
    labelShort: 'Maison',
    // icon: assets.icons.house,
    emoticon: '🏠',
    colour: undefined,
};
exports.land = {
    value: 'land',
    label: 'Terrain',
    labelShort: 'Terr.',
    // icon: assets.icons.land,
    emoticon: '🌳',
    colour: undefined,
};
exports.office = {
    value: 'office',
    label: 'Bureau',
    labelShort: 'Bur.',
    // icon: assets.icons.office,
    emoticon: '🏢',
    colour: undefined,
};
exports.other = {
    value: 'other',
    label: 'Autre',
    labelShort: 'Autre',
    // icon: assets.icons.other,
    emoticon: '➕',
    colour: undefined,
};
exports.parking = {
    value: 'parking',
    label: 'Parking',
    labelShort: 'Park.',
    // icon: assets.icons.parking,
    emoticon: '🅿️',
    colour: undefined,
};
exports.professional = {
    value: 'professional',
    label: 'Boutique, Local, Bureau',
    labelShort: 'Boutique, local, bur.',
    // icon: assets.icons.office,
    emoticon: '🏢',
    colour: undefined,
};
exports.store = {
    value: 'store',
    label: 'Commerce',
    labelShort: 'Commerce',
    // icon: assets.icons.office,
    emoticon: '🛍',
    colour: undefined,
};
exports.warehouse = {
    value: 'warehouse',
    label: 'Entrepôt',
    labelShort: 'Entrepôt',
    // icon: assets.icons.office,
    emoticon: '📦',
    colour: undefined,
};
exports.nullValue = {
    value: null,
    label: 'n.d.',
    // icon: assets.icons.downstairs,
    emoticon: '﹖',
    colour: undefined,
};
exports.others = {
    value: null,
    label: 'Autre',
    // icon: assets.icons.downstairs,
    emoticon: '🏡',
    colour: undefined,
};
exports.propertyTypes = [exports.apartment, exports.house, exports.parking, exports.land, exports.commercial, exports.office, exports.basement]; // did not include other not part of Project['type']
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
exports.types = [exports.apartment, exports.house, exports.parking, exports.other];
exports.otherTypes = [exports.land, exports.commercial, exports.office, exports.basement];
exports.propertyTypesInclOthers = [
    exports.apartment,
    exports.house,
    exports.parking,
    exports.other,
    exports.land,
    exports.commercial,
    exports.office,
    exports.basement,
];
exports.buyerPropertyOptions = [
    exports.apartment,
    exports.house,
    exports.parking,
    exports.land,
    exports.commercial,
    exports.basement,
    exports.building,
    exports.office,
    // professional,
    //store,
    exports.warehouse,
    exports.boat,
    exports.other,
];
exports.rentalPropertyOptions = exports.buyerPropertyOptions;
exports.courrierPropertyTypesOptions = [
    exports.apartment,
    exports.house,
    exports.parking,
    exports.land,
    exports.commercial,
    exports.basement,
    exports.building,
    exports.office,
    // professional,
    exports.store,
    exports.warehouse,
    exports.boat,
    //other,
];
exports.estimationRentalsPropertyTypes = [exports.apartment, exports.house];
