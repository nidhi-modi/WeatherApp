import React from 'react';
import AppNavigator from '../screens';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('../screens', () => jest.fn());

describe('AppComponent', () => {
  const {View} = require('react-native');

  it('Should render routes', () => {
    (AppNavigator as jest.Mock).mockReturnValueOnce(
      <View testID="mock-routes" />,
    );

    const wrapper = render(<App />);
    wrapper.getByTestId('mock-routes');
  });
});
