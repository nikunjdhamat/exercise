import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  IS_LOGGED_IN: 'IS_LOGGED_IN',
};
export const setItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (_) {
    return false;
  }
};
export const getItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (_) {
    return undefined;
  }
};
