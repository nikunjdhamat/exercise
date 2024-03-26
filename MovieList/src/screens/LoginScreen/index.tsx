import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {Button, TextInput} from 'react-native-paper';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ROUTE_HOME} from '../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail, setPassword} from '../../redux/reducers/loginSlice';
import {EMAIL_REGEX, PASSWORD_REGEX} from '../../utils/regex';
import {STORAGE_KEYS, setStorage} from '../../utils/storage';

const LoginScreen: React.FunctionComponent = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loginDisabled, setLoginDisabled] = useState(true);
  const {email, password} = useSelector((state: any) => state.login);

  useEffect(() => {
    if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [email, password]);

  const doLogin = () => {
    setStorage(STORAGE_KEYS.IS_LOGGED_IN, 'true');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: ROUTE_HOME}],
      }),
    );
  };

  const onEmailChange = (value?: string) => {
    dispatch(setEmail(value));
  };

  const onPasswordChange = (value?: string) => {
    dispatch(setPassword(value));
  };

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
          onPress={doLogin}
          style={styles.buttonStyle}
          disabled={loginDisabled}>
          {t('login.buttonTitle')}
        </Button>
      </>
    </ScrollView>
  );
};

export default LoginScreen;
