import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('should render correctly', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} />);
    wrapper.getByTestId('button');
  });

  it('should render loader when loading', () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} loading />);
    wrapper.getByTestId('button-loading');
  });

  it('should call given onPress when clicked', () => {
    const mocOnPress = jest.fn();
    const wrapper = render(<Button label="" onPress={mocOnPress} />);
    const button = wrapper.getByTestId('button');

    fireEvent.press(button);
    expect(mocOnPress).toHaveBeenCalled();
  });

  it('should render label', () => {
    const wrapper = render(<Button label="moc-label" onPress={jest.fn()} />);
    wrapper.getByTestId('moc-label');
  });

  it('should accept custom view props', () => {
    const wrapper = render(
      <Button label="" onPress={jest.fn()} testID="mock-test-id" />,
    );
    wrapper.getByTestId('mock-test-id');
  });
});
