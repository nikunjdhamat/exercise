import React from 'react';
import {ScrollView} from 'react-native';
import styles from '../styles';
import {useTranslation} from 'react-i18next';
import {Button, TextInput} from 'react-native-paper';

interface LoginComponentPropType {
  email: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onLogin: () => void;
  loginDisabled: boolean;
}
const LoginComponent = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
  loginDisabled,
}: LoginComponentPropType) => {
  const {t} = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <>
        <TextInput
          label={t('login.emailLable')}
          placeholder={t('login.emailPlaceholder')}
          mode="outlined"
          value={email}
          onChangeText={onEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.textInputStyle}
        />
        <TextInput
          label={t('login.passwordLable')}
          placeholder={t('login.passwordPlaceholder')}
          mode="outlined"
          value={password}
          onChangeText={onPasswordChange}
          secureTextEntry
          maxLength={15}
          style={styles.textInputStyle}
        />
        <Button
          mode="contained"
          onPress={onLogin}
          style={styles.buttonStyle}
          disabled={loginDisabled}>
          {t('login.buttonTitle')}
        </Button>
      </>
    </ScrollView>
  );
};

export default LoginComponent;
