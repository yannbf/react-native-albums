// Index.ios - Place code in here for Android

// Import a library to help create a component
import React from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

// Create a component
const App = () => (
  <Text>Some Text</Text>
);

// Render the component to the device
AppRegistry.registerComponent('Albums', () => App);
