import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2},
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#fff'
  }
}

export { Card };