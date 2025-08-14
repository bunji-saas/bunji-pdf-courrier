import { Civility } from '../types';
export declare const civilityLabels: Record<Civility, string>;
export declare const civilityLabelsShorts: Record<Civility, string>;
export declare function createFullName(toCivility?: Civility | null, toFirstName?: string | null, toLastName?: string | null): string | null | undefined;
export declare function getAddressPartCutIfNeeded(addressPart?: string | null): string | null | undefined;
