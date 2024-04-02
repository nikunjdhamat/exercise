import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect, jest} from '@jest/globals';
import {getItem, setItem} from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const mockedSetItem = AsyncStorage.setItem as jest.Mock;
const mockedGetItem = AsyncStorage.getItem as jest.Mock;

describe('AsyncStorage test', () => {
  it('should save data to AsyncStorage', async () => {
    const key = 'testKey';
    const value = 'testValue';
    await setItem(key, value);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(key, value);
  });

  it('should return true when data is saved successfully', async () => {
    const key = 'testKey';
    const value = 'testValue';
    const result = await setItem(key, value);
    expect(result).toBe(true);
  });

  it('should return false when an error occurs while saving data', async () => {
    const key = 'testKey';
    const value = 'testValue';
    mockedSetItem.mockRejectedValueOnce('Error' as never);
    const result = await setItem(key, value);
    expect(result).toBe(false);
  });

  it('should retrieve data from AsyncStorage', async () => {
    const key = 'testKey';
    const expectedValue = 'testValue';
    mockedGetItem.mockResolvedValueOnce(expectedValue as never);
    const result = await getItem(key);
    expect(result).toBe(expectedValue);
  });

  it('should return undefined if the key does not exist in AsyncStorage', async () => {
    const key = 'nonExistentKey';
    mockedGetItem.mockResolvedValueOnce(undefined as never);
    const result = await getItem(key);
    expect(result).toBeUndefined();
  });

  it('should return undefined when an error occurs while retrieving data', async () => {
    const key = 'testKey';
    mockedGetItem.mockRejectedValueOnce('Error' as never);
    const result = await getItem(key);
    expect(result).toBeUndefined();
  });
});
