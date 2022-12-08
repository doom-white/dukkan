import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/95614-error-occurred.json')}
      autoPlay
      loop
    />
  );
};

export default Error;
