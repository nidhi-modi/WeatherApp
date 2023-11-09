import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import WeatherCurrent from '../WeatherCurrent';
import {useNavigation} from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual<object>('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('Weather Current', () => {
  it('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });

  it('Should navigate to weather screen with location', async () => {
    const mocNavigate = jest.fn();
    (useNavigation as jest.Mock).mockReturnValueOnce({navigate: mocNavigate});

    const wrapper = render(<WeatherCurrent />);
    const button = wrapper.getByTestId('weather-current');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mocNavigate).toHaveBeenCalledWith('Weather', {
        latitude: 0,
        longitude: 0,
      });
    });
  });
});
