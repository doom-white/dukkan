import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/98955-hexagon-loading.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
