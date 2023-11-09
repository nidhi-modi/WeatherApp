import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../Constant';
import moment from 'moment';
import WeatherCurrent from '../../components/WeatherCurrent';
import WeatherCoordinates from '../../components/WeatherCoordinates';

const HomeScreen = () => {
  const now = moment(new Date());

  return (
    <LinearGradient
      colors={[Colors.LIGHT_GREY, Colors.DARKER_GREY]}
      testID="home-screen"
      style={styles.conatiner}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="home-screen-divider" style={styles.divider}>
        OR
      </Text>
      <WeatherCoordinates />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },

  title: {
    justifyContent: 'flex-end',
  },

  date: {
    color: 'white',
    fontSize: 13,
  },

  day: {
    color: 'white',
    fontSize: 21,
  },

  divider: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
