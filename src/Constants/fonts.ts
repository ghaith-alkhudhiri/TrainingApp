import { isIOS } from "../Utils/PlatformUtil";

export const fontFamilies = {
    Inter: {
        thin: isIOS() ? 'Inter-Thin': 'InterThin',
        normal: isIOS() ? 'Inter-Regular' : 'InterRegular',
        medium: isIOS() ? 'Inter-Medium' : 'InterMedium',
        bold: isIOS() ? 'Inter-Bold' : 'InterBold',
        extraBold: isIOS() ? 'Inter-ExtraBold': 'InterExtraBold'
    }
}