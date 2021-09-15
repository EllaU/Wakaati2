import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Create from '../components/Create';
import Profile from '../components/Profile';
import TabBar from '../components/TabBar';
import ProfileNavigator from './ProfileNavigator';
import HomeScreenStack from './HomeScreenStack';
import TrendingStack from './TrendingStack';
import WatchListStack from './WatchListStack';
import SearchScreen from '../components/SearchScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={HomeScreenStack}
        initialParams={{ icon: 'home' }}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Trending'
        component={TrendingStack}
        initialParams={{ icon: 'plus' }}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name='Text'
        component={WatchListStack}
        initialParams={{ icon: 'user' }}
        options={{headerShown: false}}
      />
       <Tab.Screen
        name='Explore'
        component={SearchScreen}
        initialParams={{ icon: 'user' }}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;