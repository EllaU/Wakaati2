import React, {useState,useRef,useEffect,useCallback} from 'react';
import {TouchableWithoutFeedback,SafeAreaView,Dimensions,StatusBar,PermissionsAndroid,Share,Text,View,Image,ImageBackground,ScrollView,TouchableOpacity,FlatList, Alert} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import styles from '../../stylesheet/styles';
import LinearGradient from 'react-native-linear-gradient';
import WResume from '../../app/components/WResume';
import TTvShows from '../../app/components/TTvShows';
import TComedy from '../../app/components/TComedy';
import TSeries from '../../app/components/TSeries';
import TKids from '../../app/components/TKids';

const initialLayout = { width: Dimensions.get('window').width  };

const PostScreen =({navigation,props,route})=>{

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: '1', title: 'Resume' },
    { key: '2', title: 'tv shows' },
    { key: '3', title: 'comedy' },
    { key: '4', title: 'series' },
    { key: '5', title: 'Kids' },

  ]);

  const renderScene = SceneMap({
    1: WResume,
    2: WResume,
    3: WResume,
    4: WResume,
    5: WResume
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#B5088C',width:30,marginLeft:20,height:2,borderRadius:20}}
      style={{ backgroundColor: 'transparent',elevation:0,height:37}}
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
                <View style={{
                    height:'9%',
                    backgroundColor: 'rgba(118, 4, 91, 0.3)',
                    marginTop:'20%'
                }}>
                    <View style={{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-between',height:'100%'}}>
                        <View style={{
                            height:'100%',
                            justifyContent:'center'
                        }}>
                            <Text style={{fontSize:12,color:'#ffff',fontFamily:'Prompt-Light'}}>Since last visit: 4 new movies added</Text>
                            <Text style={{fontSize:17,color:'#ffff',fontFamily:'Prompt-Regular'}}>Watchlist</Text>
                        </View>
                        <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={['#2F0124', '#B5088C']}
                        style={[styles.center,{width:'20.5%',height:'100%',borderRadius:100}]}>
                             <Image
                            style={{
                                resizeMode:'cover',
                                width:'95%',
                                height:'95%',
                                borderRadius:100
                            }}
                            source={require('../../assets/cast.png')}
                        /> 
                        
                    </LinearGradient>
                    </View>

                </View>
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