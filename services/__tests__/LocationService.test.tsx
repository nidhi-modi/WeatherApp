import React from 'react';
import LocationService from '../LocationService';

describe('Location Service', () => {
  test('Should retuen latitute & longitude from current location', async () => {
    const position = await LocationService.getCurrentPosition();
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    });
  });
});
