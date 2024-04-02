import React, {useEffect, useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {ROUTE_HOME} from '../../../navigation/routes';
import {useDispatch, useSelector} from 'react-redux';
import {setEmail, setPassword} from '../../../redux/reducers/loginSlice';
import {STORAGE_KEYS, setItem} from '../../../utils/storage';
import LoginComponent from '../components/login.component';
import {isEmailValid, isPasswordValid} from '../../../utils/validationUtils';

const LoginContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loginDisabled, setLoginDisabled] = useState(true);
  const {email, password} = useSelector((state: any) => state.login);

  useEffect(() => {
    if (isEmailValid(email) && isPasswordValid(password)) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [email, password]);

  const doLogin = () => {
    setItem(STORAGE_KEYS.IS_LOGGED_IN, 'true');
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
    <LoginComponent
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onLogin={doLogin}
      loginDisabled={loginDisabled}
    />
  );
};

export default LoginContainer;
