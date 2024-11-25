import { fontFamilies } from "./fonts";

export const getFontFamily = (
    isLTR: boolean,
    weight: 'thin' | 'normal' | 'medium' | 'bold' | 'extra-bold'
) => {
    const selectedFontFamily = isLTR
    ? fontFamilies.Inter
    : fontFamilies.Inter

    return selectedFontFamily[weight]
}