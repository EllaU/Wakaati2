import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { useTabBar } from '../contexts/TabBarProvider';
import Tab from './Tab';
import LinearGradient from 'react-native-linear-gradient';

import {
    withSpringTransition,
    withTimingTransition
  } from "react-native-redash";
import { SpringUtils, useValue } from 'react-native-reanimated';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? 'white' : 'lightgrey');

  const { showTabBar } = useTabBar();

  const animation = useRef(new Animated.Value(0)).current;
  const [number,setNumber]=useState(0)

  const translateX =()=>{
      return 60 * number + 1
  }

  const handlePress = (activeTab, index) => {
    setNumber(index)
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  const toggleTabBarAnimation = () => {
    if (showTabBar) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    toggleTabBarAnimation();
  }, [showTabBar]);

  return (
    <View style={styles.wrapper}>

      <Animated.View
        style={[styles.container, { transform: [{ translateY: animation }] }]}
      >
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
        <LinearGradient 
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
        colors={['#B5088C', '#CD0B9F', '#B052CE']}
         style={{
            width: 60,
            height: 40,
            position: 'absolute',
            zIndex:-1,
            translateX:translateX(),
            backgroundColor:'red',
            borderRadius: 10,
        }}>

        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 300,
    borderRadius: 10,
    height:40
    // elevation: 2,
  },
});

export default TabBar;