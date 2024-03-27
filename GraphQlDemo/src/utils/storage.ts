import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  IS_LOGGED_IN: 'IS_LOGGED_IN',
};
export const setStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
export const getStorage = async (key: string) => {
  return await AsyncStorage.getItem(key);
};
