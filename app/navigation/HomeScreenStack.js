import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

const HomeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
      );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreenStack;