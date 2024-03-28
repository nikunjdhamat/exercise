import {EMAIL_REGEX, PASSWORD_REGEX} from './regex';

export const isEmailValid = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const isPasswordValid = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};
