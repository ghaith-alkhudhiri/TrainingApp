import { Platform } from "react-native";

export const isIOS = () => {
    return Platform.OS === 'ios';
}

export const isAndroid = () => {
    return Platform.OS === 'android';
}

export const isWeb = () => {
    return Platform.OS === 'web';
}