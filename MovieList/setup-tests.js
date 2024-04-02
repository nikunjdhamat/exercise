jest.useFakeTimers();

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  RN.NativeModules.SettingsManager = {
    settings: {
      AppleLocale: 'en',
      AppleLanguages: ['ar', 'en'],
    },
  };
  return RN;
});

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    CommonActions: {
      reset: jest.fn(),
    },
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: () => {
      return {
        login: {},
      };
    },
  };
});

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

jest.mock('react-i18next', () => {
  return {
    useTranslation: () => ({t: key => key}),
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  };
});

jest.mock('@reduxjs/toolkit/query/react', () => {
  return {
    createApi: jest.fn(),
    fetchBaseQuery: jest.fn(),
  };
});
