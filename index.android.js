// Index.ios - Place code in here for Android

// Import a library to help create a component
import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render the component to the device
AppRegistry.registerComponent('Albums', () => App);
