import React, {useState,useRef,useEffect,useCallback} from 'react';
import {TouchableWithoutFeedback,SafeAreaView,Dimensions,StatusBar,PermissionsAndroid,Share,Text,View,Image,ImageBackground,ScrollView,TouchableOpacity,FlatList, Alert} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import styles from '../../stylesheet/styles';
import LinearGradient from 'react-native-linear-gradient';
import TTopMovies from '../../app/components/TTopMovies';
import TTvShows from '../../app/components/TTvShows';
import TComedy from '../../app/components/TComedy';
import TSeries from '../../app/components/TSeries';
import TKids from '../../app/components/TKids';

const initialLayout = { width: Dimensions.get('window').width  };

const PostScreen =({navigation,props,route})=>{

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Top Movies' },
    { key: '2', title: 'tv shows' },
    { key: '3', title: 'comedy' },
    { key: '4', title: 'series' },
    { key: '5', title: 'Kids' },

  ]);

  const renderScene = SceneMap({
    1: TTopMovies,
    2: TTvShows,
    3: TComedy,
    4: TSeries,
    5: TKids
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#76045B'}}
      style={{ backgroundColor: 'rgba(118, 4, 91, 0.2)',marginTop:60,elevation:0,height:50}}
      pressOpacity={0}
      // tabStyle={{height:'100%'}}
      labelStyle={{fontSize:10,fontFamily:'Prompt-Regular',textTransform:'capitalize',textAlign:'center'}}
      indicatorContainerStyle={{alignItems:'center',justifyContent:'center'}}
    />
  );

    return(
           <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            colors={['black','#2F0124','black','black']}
            style={[styles.container]}
            >
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              onIndexChange={setIndex}
              initialLayout={initialLayout}
              // style={{width:200}}
            />
            </LinearGradient>
              );

};

export default PostScreen;