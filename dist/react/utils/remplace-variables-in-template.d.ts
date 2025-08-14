import { AdvSetting, PdfProperties } from '../types';
export declare function replaceVariablesInTemplate(text: string | undefined | null, pdf: PdfProperties, advSetting: AdvSetting): string;
export declare const cleanText: (text: string) => string;
