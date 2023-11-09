import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

jest.mock('../../components/WeatherCoordinates', () => {
  const {View} = require('react-native');
  return {
    __esModule: true,
    default: jest
      .fn()
      .mockReturnValue(<View testID="mock-weather-coordinates" />),
  };
});

jest.mock('../../components/WeatherCurrent', () => {
  const {View} = require('react-native');

  return {
    __esModule: true,
    default: jest.fn().mockReturnValue(<View testID="mock-weather-current" />),
  };
});

describe('Home Screen', () => {
  test('Should render correctly', () => {
    const {getAllByTestId} = render(<HomeScreen />);
    getAllByTestId('home-screen');
  });
});

describe('Title section', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2000-01-01').getTime());
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  test('should contain current date', () => {
    const {getByText} = render(<HomeScreen />);
    getByText('Jan 01, 2000');
  });

  test('Should contain current day', () => {
    const {getByText} = render(<HomeScreen />);
    getByText('Saturday');
  });

  test('Should contain a section to get current weather', () => {
    const {getByTestId} = render(<HomeScreen />);
    getByTestId('mock-weather-current');
  });

  test('should contain a divider', () => {
    const {getByTestId} = render(<HomeScreen />);
    getByTestId('home-screen-divider');
  });

  test('Should contain a section to get weather coordinates', () => {
    const {getByTestId} = render(<HomeScreen />);
    getByTestId('mock-weather-coordinates');
  });
});
