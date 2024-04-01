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

jest.mock('@react-native-async-storage/async-storage', () => {
  const items = {};
  return {
    setItem: jest.fn((item, value) => {
      return new Promise((resolve, reject) => {
        items[item] = value;
        resolve(value);
      });
    }),
    getItem: jest.fn(item => {
      return items[item];
    }),
  };
});

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
