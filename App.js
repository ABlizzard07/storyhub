import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Read from "./screens/Read";
import Write from "./screens/Write";
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screens: Write},
  Read: {screens: Read}
})

const AppContainer = createAppContainer(TabNavigator);
