/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import {useState,useEffect,useRef} from 'react';
 import styles from "./stylesheet/styles";
 import MovieScreen from './app/components/MovieScreen' ;
 import MoreScreen from './app/components/MoreScreen';
 import OnboardingScreen from './app/components/OnboardingScreen'

 import {
  ActivityIndicator,
  Dimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Linking,
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';

import TabNavigator from './app/navigation/TabNavigator';
import MaterialNavigator from './app/navigation/TrendingStack';

import TabBarProvider from './app/contexts/TabBarProvider';

import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  const Stack = createStackNavigator();


  const SplashScreen = ({navigation}) => {
    useEffect(() => {   
        setTimeout(() => {
          navigation.navigate('OnboardingScreen')
         }, 0);
    }, []);
  
    return (
      <View style={styles.container}>
        <StatusBar translucent={true}
          backgroundColor={'#102133'}
        />
      </View>
    );
  };


  return (
    
    <>
    <TabBarProvider>
    <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} /> 
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: false}} /> 
          <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} /> 
          <Stack.Screen name="MovieScreen" component={MovieScreen} options={{headerShown: false}} /> 
          <Stack.Screen name="MoreScreen" component={MoreScreen} options={{headerShown: false}} /> 
          <Stack.Screen name="MaterialNavigator" component={MaterialNavigator}/> 
        </Stack.Navigator>
    </NavigationContainer>
  </TabBarProvider>
    </>
  );
};

export default App;
