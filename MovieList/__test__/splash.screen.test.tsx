import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import SplashScreen from '../src/screens/SplashScreen/splash.screen';

describe('splash.screen', () => {
  it('renders correctly', () => {
    const tree = render(<SplashScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
