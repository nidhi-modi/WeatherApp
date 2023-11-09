import {render} from '@testing-library/react-native';
import React from 'react';
import WeatherScreen from '../screens/WeatherScreen';

describe('Weather Screenshot', () => {
  test('Should render correctly', () => {
    const {getByTestId} = render(<WeatherScreen />);
    getByTestId('weather-screen');
  });
});
