import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

const  mapSettings = {
        center: {lat: 37.775, lng: -122.42},
        zoom: 8,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      };


class Map extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 300
  },
  mapStyle: {
    flex: 1
  }
}

export { Map };