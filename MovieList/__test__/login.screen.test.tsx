import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen/login.screen';

describe('login.screen', () => {
  it('renders correctly', () => {
    const tree = render(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
