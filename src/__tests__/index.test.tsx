jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Directions: {},
    State: {},
    PanGestureHandler: View,
    BaseButton: View,
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
  };
});

import React, {useEffect} from 'react';
import {render, waitFor} from '@testing-library/react-native';
import AppNavigator from '../screens';
import HomeScreen from '../screens/HomeScreen';
import {useNavigation} from '@react-navigation/native';
import WeatherScreen from '../screens/WeatherScreen';

jest.mock('../screens/HomeScreen', () => jest.fn());
jest.mock('../screens/WeatherScreen', () => jest.fn());

describe('App Navigator', () => {
  const {View} = require('react-native');
  test('Should render HomeScreen by default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-home-screen');
    });
  });

  test('Should render WeatherScreen on "Weather" route', async () => {
    (HomeScreen as jest.Mock).mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate('Weather');
      }, [navigation]);
      return null;
    });

    (WeatherScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-weather-screen" />,
    );
    const wrapper = render(<AppNavigator />);

    await waitFor(() => wrapper.getByTestId('mock-weather-screen'));
  });
});
