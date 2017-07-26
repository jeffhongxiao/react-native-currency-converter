import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyle = [styles.container];
  if (backgroundColor) {
    containerStyle.push({ backgroundColor });
  }

  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
};

export default Container;
