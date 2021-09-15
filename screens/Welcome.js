// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image, Dimensions, Text} from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from '@react-navigation/material-top-tabs';

import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './HomeScreen';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const BottomTabStack = () => {
  return (
      <>
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarShowLabel:false,
        tabBarHideKeyboard: true,
        tabBarActiveTintColor: '#ffff',
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle:{
            height:50,
            borderRadius:20,
            backgroundColor:'#B5088C'
        },
        swipeEnabled:false,
        tabBarContentContainerStyle:{
          backgroundColor:'transparent'
        },

        tabBarStyle:{
          backgroundColor: 'rgba(255,255,255,0.3)',
          position: 'absolute',
          left: 20,
          right: 20,
          bottom: 50,
          borderRadius:20,
          height: 50,
          marginHorizontal:40,
          justifyContent:'center',
            
        },
        
      })}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={{
          tabBarLabel: 'Home Screen',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="settings"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Test Screen',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="settings"
                color={color}
                size={24}
              />
            ),
          }}

      />
         <Tab.Screen
        name="ThirdStack"
        component={HomeScreenStack}
        options={{
            tabBarLabel: 'Test Screen',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="settings"
                color={color}
                size={24}
              />
            ),
          }}

      />
         <Tab.Screen
        name="FourthStack"
        component={HomeScreenStack}
        options={{
            tabBarLabel: 'Test Screen',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="settings"
                color={color}
                size={24}
              />
            ),
          }}

      />
       <Tab.Screen
        name="FifthStack"
        component={HomeScreenStack}
        options={{
            tabBarLabel: 'Test Screen',
            tabBarIcon: ({ color, size }) => (
              <Feather
                name="settings"
                color={color}
                size={24}
              />
            ),
          }}
      />
    </Tab.Navigator>

    </>
  );
};

const HomeScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown:false,
            }}
            />
        </Stack.Navigator>
      );
};


const ExploreScreenStack = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown:false,
            }}
            />
        </Stack.Navigator>
      );
};

const App = () => {
  return (
    <NavigationContainer independent={true} >
        <Stack.Navigator
            initialRouteName="BottomTabStack"
            >
            <Stack.Screen name="BottomTabStack" component={BottomTabStack} options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;