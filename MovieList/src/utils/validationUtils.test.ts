import 'react-native';

// Note: import explicitly to use the types shipped with jest.
import {test, describe, expect} from '@jest/globals';
import {isEmailValid, isPasswordValid} from './validationUtils';

describe('Validation Utils', () => {
  test('should not be valid email', () => {
    const input = 'nnnns';
    const result = isEmailValid(input);
    expect(result).toEqual(false);
  });
  test('should be valid email', () => {
    const input = 'test@test.com';
    const result = isEmailValid(input);
    expect(result).toEqual(true);
  });
  test('should not be valid password', () => {
    const input = 'test1234';
    const result = isPasswordValid(input);
    expect(result).toEqual(false);
  });
  test('should be valid password', () => {
    const input = 'Test@1234';
    const result = isPasswordValid(input);
    expect(result).toEqual(true);
  });
});
