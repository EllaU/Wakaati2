import React from 'react';
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
  import Stars from 'react-native-stars';
  import Feather from 'react-native-vector-icons/Feather';
  import LinearGradient from 'react-native-linear-gradient';
  import styles from '../../stylesheet/styles';
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import AntDesign from 'react-native-vector-icons/AntDesign'
  import MIcon from 'react-native-vector-icons/MaterialCommunityIcons'
  import F5 from 'react-native-vector-icons/FontAwesome5'

const getHeight=()=>{
let height = Dimensions.get('window').height;
return 0.65 * height;
}

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

const Test = ({navigation}) => {
  return (
    <ScrollView style={[styles.container,{backgroundColor:'black'}]}>
         <StatusBar
            translucent={true}
            backgroundColor={'rgba(0,0,0,0)'}
            barStyle={'light-content'}
        /> 
        <ImageBackground
        source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie2.jpg"}}
        style={{
            height:getHeight(),
            // backgroundColor:'red'
        }}> 
           <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']}
                style={[styles.container,{justifyContent:'space-between'}]}>

                    <View style={{
                        width:'100%',
                        height:'13%',
                        alignItems:'flex-end',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        paddingHorizontal:'5%'
                    }}>
                         <TouchableOpacity onPress={()=>{
                             navigation.goBack()
                         }}>
                            <Feather
                                name="x"
                                color={'white'}
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather
                                name="cast"
                                color={'white'}
                                size={20}
                            />
                        </TouchableOpacity>


                    </View>
                    <View style={{
                        width:'100%',
                        height:'20%',
                        justifyContent:'flex-end',
                        alignItems:'center'
                    }}>
                        <View 
                        // start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        // colors={['#B5088C', '#CD0B9F', '#B052CE']}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius:50,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1.5,
                            borderColor:'#B5088C'
                            // padding:2
                        }}>
                             <Feather
                                name="play"
                                color={'white'}
                                size={22}
                                // style={{
                                //     padding:30
                                // }}
                            />

                        </View>

                    </View>
                    <View style={{
                        width:'100%',
                        height:'25%',
                        paddingHorizontal:'5%'
                    }}>
                        <View style={{height:'30%'}}>
                            <Text style={{fontSize:22,color:'white',fontFamily:'Prompt-Regular'}}>Living In Bondage</Text>
                        </View>
                        <View style={{height:'27%'}}>
                        <LinearGradient 
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#B5088C', '#CD0B9F', '#B052CE']}
                        style={[styles.container,{
                            justifyContent:'center',
                            alignItems:'center',
                            flexDirection:'row',
                            borderRadius:7,

                            // marginVertical:10
                        }]}>
                             <Ionicons
                                name="ios-play"
                                color={'white'}
                                size={22}
                            />
                            <Text style={{fontSize:15,color:'white',fontFamily:'Prompt-Regular',marginLeft:7}}>Play</Text>


                        </LinearGradient>

                        </View>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                            <TouchableOpacity style={{
                                width:'30%',
                                height: 40,
                                alignSelf:'center',
                                backgroundColor:'rgba(255,255,255,0.15)',
                                borderRadius:5,
                                alignItems:'center',
                                justifyContent:'center',
                                flexDirection:'row'
                            }}>
                                <Ionicons
                                name="arrow-down"
                                color={'white'}
                                size={18}
                            />
                                <Text style={{fontSize:12,color:'white',fontFamily:'Prompt-Regular',marginLeft:5}}>Download</Text>


                            </TouchableOpacity>
                            <View style={{
                                width:'35%',
                                height: '100%',
                                alignSelf:'center',
                                alignItems:'center',
                                justifyContent:'space-between',
                                flexDirection:'row'
                            }}>
                                   <TouchableOpacity style={{
                                        width:40,
                                        height: 40,
                                        alignSelf:'center',
                                        backgroundColor:'rgba(255,255,255,0.15)',
                                        borderRadius:5,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row'
                                    }}>
                                        <Feather
                                        name="plus"
                                        color={'white'}
                                        size={15}
                                    />

                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        width:40,
                                        height: 40,
                                        alignSelf:'center',
                                        backgroundColor:'rgba(255,255,255,0.15)',
                                        borderRadius:5,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        flexDirection:'row'
                                    }}>
                                        <AntDesign
                                        name="sharealt"
                                        color={'white'}
                                        size={15}
                                    />

                                    </TouchableOpacity>
                              
                            </View>

                        </View>

                    </View>
            </LinearGradient>

        </ImageBackground>
        <View style={{
            alignSelf:'center',
            width:'90%',
            paddingVertical:'3%'
        }}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
            }}>
                <Text style={{fontSize:11,color:'grey',fontFamily:'Prompt-Regular',marginRight:10}}>March 2020</Text>
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
                <Text style={{fontSize:12,color:'#ECCA43',fontFamily:'Prompt-Regular',marginLeft:5}}>4.5</Text>
            </View>

            <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      marginTop:10,
                      width: '100%',
                      justifyContent:'space-between'
                    }}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular',marginRight:10}}>Romance</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Comedy</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Drama</Text>

                      </View>
                      <View style={{
                        borderRightWidth:1,
                        borderColor:'#B5088C'
                      }}>
                        <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular',marginHorizontal:10}}>Action</Text>

                      </View>

                        </View>
                     
                      <View style={{
                          alignSelf:'flex-end'
                      }}>
                        <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular',marginHorizontal:10}}>1h:45m</Text>

                      </View>


            </View>

            <View>
            <Text style={{fontSize:11,color:'grey',fontFamily:'Prompt-Regular',marginTop:10}}>Synopsis</Text>
            <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-Light',marginTop:5}}>
            Her mother dies and leaves property for her, the only condition being that she has to leave with Jimmy for 30days before she gets her inheritance. 
            </Text>

            </View>



        </View>
        <View
         style={{
                // marginTop:'5%',
                marginLeft:'5%'
            }}>
                    <View style={{
                borderLeftWidth:2,
                borderColor:'#B5088C',
            //   marginR:2
                marginVertical:'3%',
                flexDirection:'row'
            }}>
                <Text style={{fontSize:14,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:5}}>Similar Movies</Text>
                <Text style={{fontSize:14,color:'lightgrey',fontFamily:'Prompt-Regular',marginLeft:15}}>More</Text>

            </View>

            <FlatList
                horizontal={true}
            //   style={{marginLeft:'3%'}}
                // contentContainerStyle={{alignItems:'center'}}
                data={Originals}
            //   extraData={isRender}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=>
                <View style={{
                // marginLeft:10
                }}>
                <TouchableOpacity 
                //  onPress={() => navigation.navigate('MovieScreen')}
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                }}
                >
                <Image
                    style={{
                        resizeMode:'cover',
                        marginRight:10,
                        height:130,
                        width:130,
                    borderRadius:10
                    }}
                    source={{uri:item.poster}}
                />                      
        
                </TouchableOpacity>

                </View>
                
                }
                    
            />
        </View>

        <View
         style={{
                marginTop:'10%',
            }}>
                <Text style={{fontSize:13,color:'#ffff',fontFamily:'Prompt-Regular',marginLeft:'5%'}}>Cast</Text>

        </View>

        <View style={{
            marginTop:'3%',
            flexDirection:'row',
            width: '100%',
            height:120,
            alignItems:'center',
        }}>
           <View style={{
                width:'20%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'4%',
            }}>
                 <Image
                    style={{
                        resizeMode:'cover',
                        height:'65%',
                        width:'100%',
                    borderRadius:100
                    }}
                    source={require('../../assets/cast.png')}
                /> 
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                }}>
                    <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light'}}>Akin Brown </Text>


                </View>


            </View>
            <View style={{
                width:'20%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'4%',
            }}>
                 <Image
                    style={{
                        resizeMode:'cover',
                        height:'65%',
                        width:'100%',
                    borderRadius:100
                    }}
                    source={require('../../assets/cast.png')}
                /> 
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                }}>
                    <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light'}}>Akin Brown </Text>


                </View>


            </View>
            <View style={{
                width:'20%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'4%',
            }}>
                 <Image
                    style={{
                        resizeMode:'cover',
                        height:'65%',
                        width:'100%',
                    borderRadius:100
                    }}
                    source={require('../../assets/cast.png')}
                /> 
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                }}>
                    <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light'}}>Akin Brown </Text>


                </View>


            </View>
            <View style={{
                width:'20%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',
                marginLeft:'4%',
            }}>
                 <Image
                    style={{
                        resizeMode:'cover',
                        height:'65%',
                        width:'100%',
                    borderRadius:100
                    }}
                    source={require('../../assets/cast.png')}
                /> 
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    width:'100%',
                }}>
                    <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light'}}>Akin Brown </Text>


                </View>


            </View>
        </View>
      
                <View style={{
                    width:'100%',
                    paddingHorizontal:'5%',
                    flexDirection:'row',
                    height:150,
                    marginTop:'5%'
                }}>

                          <Image
                            style={{
                                resizeMode:'cover',
                                width:'30%',
                                height:'100%',
                                marginRight:'3%'
                            }}
                            source={require('../../assets/cast.png')}
                        /> 
                        <View style={{
                            width:'68%',
                            height:'100%'
                        }}>
                            <View style={{
                                width:'20%',
                                borderBottomWidth:1,
                                borderColor:'white',
                                marginTop:'5%'
                            }}>
                                <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light'}}>Director</Text>
                            </View>
                            <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-SemiBold',marginTop:'3%'}}>Teddy Bear</Text>
                            <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Light',marginTop:'5%'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lectus orci adipiscing accumsan.
                            </Text>



                        </View>
                </View>
                <View style={{
                    width:'100%',
                    paddingHorizontal:'5%',
                    marginTop:'10%'
                }}>
                    <Text style={{fontSize:12,color:'#ffff',fontFamily:'Prompt-Regular'}}>Behind the scenes</Text>


                </View>
                <View style={{
                    width:'100%',
                    paddingHorizontal:'5%',
                    height:200,
                    marginTop:'2%'
                }}>
<ImageBackground
        source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie2.jpg"}}
        style={{
            height:'100%',
            // backgroundColor:'red'
        }}> 
           <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                colors={['rgba(181, 8, 140, 0.15)', 'rgba(rgba(181, 8, 140, 0.15)']}
                style={[styles.container,{justifyContent:'center',alignItems:'center'}]}>
                     <View 
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius:50,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1.5,
                            borderColor:'#B5088C'
                            // padding:2
                        }}>
                             <F5
                                name="play"
                                color={'white'}
                                size={15}
                            />

                        </View>
                 
            </LinearGradient>

        </ImageBackground>

                </View>
                <View 
                style={{
                    height:50
                }}>

                </View>
    </ScrollView>
  );
};

export default Test;