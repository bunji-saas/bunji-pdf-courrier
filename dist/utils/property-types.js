import { mapKeys } from 'lodash';
export const apartment = {
    value: 'apartment',
    label: 'Appartement',
    labelShort: 'Appart',
    icon: "",
    emoticon: '🏬',
    colour: undefined,
};
export const boat = {
    value: 'boat',
    label: 'Bâteau',
    labelShort: 'Bâteau',
    icon: "",
    emoticon: '🚢',
    colour: undefined,
};
export const building = {
    value: 'building',
    label: 'Immeuble',
    labelShort: 'Imm.',
    icon: "",
    emoticon: '🏢',
    colour: undefined,
};
export const basement = {
    value: 'basement',
    label: 'Cave',
    labelShort: 'Cave',
    icon: "",
    emoticon: '🍷',
    colour: undefined,
};
export const commercial = {
    value: 'commercial',
    label: 'Local commercial',
    labelShort: 'Loc. Com.',
    icon: "",
    emoticon: '🛍',
    colour: undefined,
};
export const house = {
    value: 'house',
    label: 'Maison',
    labelShort: 'Maison',
    icon: "",
    emoticon: '🏠',
    colour: undefined,
};
export const land = {
    value: 'land',
    label: 'Terrain',
    labelShort: 'Terr.',
    icon: "",
    emoticon: '🌳',
    colour: undefined,
};
export const office = {
    value: 'office',
    label: 'Bureau',
    labelShort: 'Bur.',
    icon: "",
    emoticon: '🏢',
    colour: undefined,
};
export const other = {
    value: 'other',
    label: 'Autre',
    labelShort: 'Autre',
    icon: "",
    emoticon: '➕',
    colour: undefined,
};
export const parking = {
    value: 'parking',
    label: 'Parking',
    labelShort: 'Park.',
    icon: "",
    emoticon: '🅿️',
    colour: undefined,
};
export const professional = {
    value: 'professional',
    label: 'Boutique, Local, Bureau',
    labelShort: 'Boutique, local, bur.',
    icon: "",
    emoticon: '🏢',
    colour: undefined,
};
export const store = {
    value: 'store',
    label: 'Commerce',
    labelShort: 'Commerce',
    icon: "",
    emoticon: '🛍',
    colour: undefined,
};
export const warehouse = {
    value: 'warehouse',
    label: 'Entrepôt',
    labelShort: 'Entrepôt',
    icon: "",
    emoticon: '📦',
    colour: undefined,
};
export const nullValue = {
    value: null,
    label: 'n.d.',
    icon: "",
    emoticon: '﹖',
    colour: undefined,
};
export const others = {
    value: null,
    label: 'Autre',
    icon: "",
    emoticon: '🏡',
    colour: undefined,
};
export const propertyTypes = [apartment, house, parking, land, commercial, office, basement]; // did not include other not part of Project['type']
export const propertyTypesObj2 = mapKeys(propertyTypes, 'value');
export const propertyTypesObj = (type) => {
    switch (type) {
        case 'apartment':
            return apartment;
        case 'house':
            return house;
        case 'commercial':
            return commercial;
        case 'office':
            return office;
        case 'basement':
            return basement;
        case 'land':
            return land;
        case 'terrain': // Moteur Immo throws back a Terrain value
            return land;
        case 'professional':
            return professional;
        case 'parking':
            return parking;
        case 'building':
            return building;
        case 'store':
            return store;
        case null:
            return nullValue;
        default:
            return others;
    }
};
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
    // other,
];
export const estimationRentalsPropertyTypes = [apartment, house];
