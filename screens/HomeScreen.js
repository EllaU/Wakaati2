/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import {useState,useEffect,useRef} from 'react';
 import {FlatListSlider} from 'react-native-flatlist-slider';
 import {
  ActivityIndicator,
  FlatList,
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
  TouchableOpacity,
  Dimensions
} from 'react-native';
import styles from '../stylesheet/styles';
import Stars from 'react-native-stars';
import Feather from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { CommonActions } from "@react-navigation/native";



const App = ({navigation}) => {
 
    useEffect(() => {   

    }, []);

    const data = [
      {
       image:'https://wakaati.com/posters/gameover.png',
       desc: 'Silent Waters in the mountains in midst of Himilayas',
      },
     {
       image:'https://wakaati.com/posters/hurdles.png',
       desc:
         'Red fort in India New Delhi is a magnificient masterpeiece of humans',
     },
     {
      image:'https://wakaati.com/posters/gameover.png',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:'https://wakaati.com/posters/hurdles.png',
      desc:
        'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
     ]

     const [isRender ,setIsRender]=useState(false)
     const [categoryList,setCategoryList] = useState([
      {
       title:'Recommended',
       isSelect:true,
       image: require('../assets/recommended.png')
      },
      {
        title:'Tv Shows',
        isSelect:false,
        image: require('../assets/tvshows.png')
       },
       //ay picture
       {
        title:'New Movies',
        isSelect:false,
        image: require('../assets/newmovies.png')

       },
       {
        title:'Kids',
        isSelect:false,
        image: require('../assets/kids.png')

       },
       {
        title:'Documentaries',
        isSelect:false,
        image: require('../assets/documentaries.png')

       },
       {
        title:'Coming Soon',
        isSelect:false,
        image: require('../assets/comingsoon.png')

       },
     ])

     const Originals = [
       {
          id: 'movie1',
          title:'Stranger Things',
          poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg',
      }, {
          id: 'movie2',
          title:'The IrishMan',
          poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie2.jpg',
      }, {
          id: 'movie3',
          title:'La Casa de Papel',
          poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie3.jpg',
      }, {
          id: 'movie4',
          title:'Narcos',
          poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie4.jpg',
      }, {
          id: 'movie5',
          title:'Stranger Things',
          poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie5.jpg',
      }]

     const selectItem=(selectedItem)=>{
      console.log(selectedItem);

      // setSelectedCategory(selectedItem.title)
      const newData = categoryList.map(item=>{
        if(item.isSelect == true){
          item.isSelect = false;
            return item;
        }else{
          if(item.title == selectedItem.title){
            item.isSelect = !item.isSelect;
            return item;
          }
        }
        return item;
      })

      setCategoryList(newData);
      setIsRender(!isRender);
    }

    const onScrollHandler = (e) => {
        let offsetY = 0;
        const newOffset = e. nativeEvent.contentOffset.y;
        const distance = offsetY < newOffset ? 'down' : 'up';
        offsetY = newOffset;
        console.log(distance);
    };

    const getWidth=()=>{
      let width = Dimensions.get('window').width;
      return width;
    }
    const getHeight=()=>{
      let height = Dimensions.get('window').height;
      return height/2;
    }
    const ImagePreview = ({
      style,
      item,
      imageKey,
      onPress,
      index,
      active,
      local,
    }) => {
      return (
        <View
        style={{
          width:getWidth(),
          // marginLeft:5
        }}
          // onPress={() => onPress(item)}
          onPress={()=>console.log(item)}
          >
            <View>
              <Image
                // style={[ active ? {} : {height: 300}]}
                style={{height:"100%",resizeMode:'cover'}}
                source={{ uri: item[imageKey]}}
                // source={require('../assets/dish.jpg')}
              />
              <View style={{
                width:'100%',
                height:'25%',
                position: 'absolute',
                bottom: 0
              }}>
                <View style={{
                  paddingHorizontal:'5%',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  height: '40%',
                  width: '100%'
                }}>
                  <TouchableOpacity style={{
                    paddingHorizontal:7,
                    paddingVertical:3,
                    backgroundColor:'rgba(255,255,255,0.4)',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5
                  }}>
                    <Feather
                      name="airplay"
                      color={'white'}
                      size={12}
                    />
                    <Text style={{fontSize:8,color:'white',fontFamily:'Prompt-Light',marginLeft:5}}>Trailer</Text>

                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    padding:5,
                    backgroundColor:'rgba(255,255,255,0.4)',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:50
                  }}>
                    <Feather
                      name="volume-x"
                      color={'white'}
                      size={13}
                    />

                  </TouchableOpacity>

                </View>

                <View style={{
                  flexDirection:'row',
                  alignItems:'center',
                  height: '60%',
                  backgroundColor:'rgba(0,0,0,0.4)',
                  width: '100%'
                }}>
                  <View style={{
                    width:'85%',
                    height: '100%',
                    justifyContent:'space-between',
                    paddingHorizontal:'5%',
                    // paddingVertical:10

                  }}>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      marginTop:7
                    }}>
                      <Text style={{fontSize:20,color:'white',fontFamily:'Prompt-Regular',marginRight:10}}>Arranged</Text>
                      <Stars
                        default={3.5}
                        count={5}
                        disabled={true}
                        half={true}
                        starSize={50}
                        fullStar={<MIcon size={13} color={'#ECCA43'} name={'star'} />}
                        emptyStar={<Feather size={13} color={'#ECCA43'} name={'star'} />}
                        halfStar={<MIcon size={13} color={'#ECCA43'} name={'star-half'}/>}
                      />
                    </View>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      // backgroundColor:'red',
                      marginBottom:7
                    }}>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular',marginRight:10}}>Romance</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Comedy</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Drama</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Action</Text>

                      </View>
                      <View style={{
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular',marginHorizontal:10}}>1h:45m</Text>

                      </View>
                      <View style={{
                        paddingHorizontal:5,borderWidth:1,borderColor:'lightgrey',borderRadius:5
                      }}>
                        <Text style={{fontSize:10,color:'white',fontFamily:'Prompt-Regular'}}>16+</Text>

                      </View>

                    </View>


                  </View>

                  <TouchableOpacity style={{
                    width:'10%',
                    height: '100%',
                    justifyContent:'center',
                    alignItems:'center'
                  }}>
                      <Feather
                        name="bell"
                        color={'white'}
                        size={20}
                      />
                  </TouchableOpacity>

                </View>

              </View>
            </View>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      );
    };
  
    return (

        
         
          <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(e)=>onScrollHandler(e)}
          >
                 <LinearGradient
                start={{x: 0.0, y: 0.25}} end={{x: 0.9, y: 1.0}}
                locations={[0,0.25]}
                // colors={['#4c669f', '#3b5998', '#192f6a']}
                colors={['#B5088C','#111111']}
                style={styles.container}>  
                <StatusBar
                        backgroundColor={'black'}
                        barStyle={'light-content'}
                    /> 
           
         
            <View style={{height:getHeight(),marginTop:StatusBar.currentHeight}}>
              <FlatListSlider
                data={data}
                indicator={false}
                loop={false}
                autoscroll={false}
                timer={5000}
                component={<ImagePreview/>}
                onPress={item => console.log(item)
                  }
                contentContainerStyle={{height:'100%'}}
              />
                <View style={{
                  width:'100%',
                  backgroundColor:'rgba(0,0,0,0.4)',
                  height:'10%',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  paddingHorizontal:'5%',
                
                  position: 'absolute'
                }}>

                <Image
                  source={require('../assets/logo.png')}
                  style={{
                      resizeMode: 'contain',
                    width:40,
                    height:30

                  }}

                  /> 

              <TouchableOpacity>
                <Feather
                    name="align-right"
                    color={'white'}
                    size={22}
                  />
              </TouchableOpacity>

                </View>
            </View>
           

                  <View style={{
                    marginTop:'5%',
                    marginLeft:'3%'

                  }}>
                  <FlatList
                    horizontal={true}
                    // style={{marginLeft:'3%'}}
                    // contentContainerStyle={{alignItems:'center'}}
                    data={categoryList}
                    extraData={isRender}
                    keyExtractor={(item)=> item.title.toString()}
                    renderItem={({item})=>
                    <View style={{
                      // marginLeft:10
                    }}>
                      {
                       item.isSelect?
                       <TouchableOpacity 
                       onPress={() => selectItem(item)}
                       style={{
                         alignItems:'center',
                         justifyContent:'center',
                        
                        //  marginTop:10

                       }}
                       >
                       <Image
                         style={{
                           resizeMode:'cover',
                           marginRight:10,
                           
                          //  backgroundColor:'pink'
                         }}
                         source={item.image}
                       />                      
               
                     </TouchableOpacity>
                     :
                    
                       <TouchableOpacity style={{
                         borderWidth:1,
                         borderColor:'lightgrey',
                         height:60,
                         width: 130,
                         borderRadius:5,
                         marginTop:15,
                         backgroundColor:'rgba(255,255,255,0.3)',
                         marginRight:10,
                         elevation:22.5,
                         shadowColor:'white',
                         alignItems:'center',
                         justifyContent:'center'
                       }}
                       onPress={() => selectItem(item)}
                       >
                        <Text style={{fontSize:13,color:'lightgrey',fontFamily:'Prompt-Regular'}}>{item.title}</Text>

                         

                       </TouchableOpacity>

                     }

                  </View>
                     
                      }
                          
                  />
                  </View>
                  <View style={{
                      // marginTop:'5%',
                      marginLeft:'3%'
                    }}>
                      <View style={{
                        borderLeftWidth:3,
                        borderColor:'#B5088C',
                        marginVertical:'3%'
                      }}>
                        <Text style={{fontSize:16,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:'2%'}}>Wakaati Originals</Text>

                      </View>
                    <FlatList
                      horizontal={true}
                      // style={{marginLeft:'3%'}}
                      // contentContainerStyle={{alignItems:'center'}}
                      data={Originals}
                      extraData={isRender}
                      keyExtractor={(item)=> item.id.toString()}
                      renderItem={({item})=>
                      <View style={{
                        // marginLeft:10
                      }}>
                      <TouchableOpacity 
                        //  onPress={() => selectItem(item)}
                        style={{
                          alignItems:'center',
                          justifyContent:'center',
                        }}
                        >
                        <Image
                          style={{
                              resizeMode:'cover',
                              marginRight:5,
                              height:170,
                              width:130,
                            backgroundColor:'pink',
                            borderRadius:10
                          }}
                          source={{uri:item.poster}}
                        />                      
                
                      </TouchableOpacity>

                      </View>
                      
                        }
                            
                    />
                    </View>
                  <View style={{
                    // marginTop:'5%',
                    marginLeft:'3%'
                  }}>
                    <View style={{
                      borderLeftWidth:3,
                      borderColor:'#B5088C',
                      marginVertical:'3%'
                    }}>
                      <Text style={{fontSize:16,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:'2%'}}>Series</Text>

                    </View>
                  <FlatList
                    horizontal={true}
                    // style={{marginLeft:'3%'}}
                    // contentContainerStyle={{alignItems:'center'}}
                    data={Originals}
                    extraData={isRender}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=>
                    <View style={{
                      marginRight:5,
                      // marginLeft:10
                    }}>
                     <TouchableOpacity 
                      //  onPress={() => selectItem(item)}
                       style={{
                         alignItems:'center',
                         justifyContent:'center',
                       }}
                       >
                       <Image
                         style={{
                            resizeMode:'cover',
                            height:130,
                            width:170,
                           backgroundColor:'pink',
                           borderRadius:5
                         }}
                         source={{uri:item.poster}}
                       />  
                                         
               
                     </TouchableOpacity>
                     <View style={{
                       width:'100%',
                       height:'30%',
                       backgroundColor:'rgba(0,0,0,0.4)',
                       position: 'absolute',
                       bottom:0,
                       borderBottomLeftRadius:5,
                       borderBottomRightRadius:5,
                       flexDirection:'row',
                       justifyContent:'space-around'
                      //  marginRight:5,
                     }}>
                       <View style={{
                         height:'100%',
                         justifyContent:'space-around',
                        //  paddingHorizontal:'5%',
                         paddingVertical:'2%'
                       }}>
                          <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Regular'}}>{item.title}</Text>
                          <Text style={{fontSize:8,color:'#ffff',fontFamily:'Prompt-Light'}}>2020</Text>


                       </View>
                       <View style={{
                         height:'100%',
                         alignItems:'flex-end',
                         paddingVertical:'2%',
                        //  justifyContent:'flex-end',
                         flexDirection:'row'
                       }}>
                         <Feather
                            name="eye"
                            color={'#E11515'}
                            size={13}
                            style={{marginRight:5}}
                          />
                           <Feather
                            name="star"
                            color={'#ECCA43'}
                            size={13}
                            style={{marginRight:5}}

                          />
                          <Text style={{fontSize:10,color:'#ECCA43',fontFamily:'Prompt-Regular'}}>4.5</Text>

                       </View>


                     </View> 

                    </View>
                     
                      }
                          
                  />
                  </View>
                  <View style={{
                      // marginTop:'5%',
                      marginLeft:'3%'
                    }}>
                      <View style={{
                        borderLeftWidth:3,
                        borderColor:'#B5088C',
                        marginVertical:'3%'
                      }}>
                        <Text style={{fontSize:16,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:'2%'}}>Hausa</Text>

                      </View>
                    <FlatList
                      horizontal={true}
                      // style={{marginLeft:'3%'}}
                      // contentContainerStyle={{alignItems:'center'}}
                      data={Originals}
                      extraData={isRender}
                      keyExtractor={(item)=> item.id.toString()}
                      renderItem={({item})=>
                      <View style={{
                        // marginLeft:10
                      }}>
                      <TouchableOpacity 
                        //  onPress={() => selectItem(item)}
                        style={{
                          alignItems:'center',
                          justifyContent:'center',
                        }}
                        >
                        <Image
                          style={{
                              resizeMode:'cover',
                              marginRight:5,
                              height:170,
                              width:130,
                            backgroundColor:'pink',
                            borderRadius:10
                          }}
                          source={{uri:item.poster}}
                        />                      
                
                      </TouchableOpacity>

                      </View>
                      
                        }
                            
                    />
                    </View>
                    <View style={{
                      // marginTop:'5%',
                      marginLeft:'3%'
                    }}>
                      <View style={{
                        borderLeftWidth:3,
                        borderColor:'#B5088C',
                        marginVertical:'3%'
                      }}>
                        <Text style={{fontSize:16,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:'2%'}}>Documentary</Text>

                      </View>
                    <FlatList
                      horizontal={true}
                      // style={{marginLeft:'3%'}}
                      // contentContainerStyle={{alignItems:'center'}}
                      data={Originals}
                      extraData={isRender}
                      keyExtractor={(item)=> item.id.toString()}
                      renderItem={({item})=>
                      <View style={{
                        // marginLeft:10
                      }}>
                      <TouchableOpacity 
                        //  onPress={() => selectItem(item)}
                        style={{
                          alignItems:'center',
                          justifyContent:'center',
                        }}
                        >
                        <Image
                          style={{
                              resizeMode:'cover',
                              marginRight:5,
                              height:130,
                              width:170,
                            backgroundColor:'pink',
                            borderRadius:10
                          }}
                          source={{uri:item.poster}}
                        />                      
                
                      </TouchableOpacity>

                      </View>
                      
                        }
                            
                    />
                    </View>
                    <View style={{
                      height:50
                    }}>

                    </View>
                    </LinearGradient>

           
          </ScrollView>


    
    );
  };



export default App;
