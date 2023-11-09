import React from 'react';
import {
  StyleSheet,
  ViewProps,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../src/Constant';

type ButtonProps = {
  label: string;
  onPress: () => void;
  loading?: boolean;
} & ViewProps;

const Button = (props: ButtonProps) => {
  //decomposing props
  const {label, onPress, style, loading, ...others} = props;
  return (
    <TouchableOpacity onPress={onPress} testID="button">
      <LinearGradient
        {...others}
        colors={[Colors.LIGHTER_GREY, Colors.DARK_GREY]}
        style={[styles.container, style]}>
        {loading ? (
          <ActivityIndicator
            size={25}
            testID="button-loading"
            color={'#ffffff'}
          />
        ) : (
          <Text style={styles.label} testID="moc-label">
            {label}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 19,
    color: 'white',
  },
});

export default Button;
