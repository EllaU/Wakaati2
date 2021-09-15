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
import Animated from 'react-native-reanimated';
import styles from '../../stylesheet/styles'
import AnimatedScrollView from './AnimatedScrollView';



const Profile = ({ navigation }) => {

  const Originals = [
    {
       id: '1',
       title:'Stranger Things',
       poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg',
   }, {
       id: '2',
       title:'The IrishMan',
       poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie2.jpg',
   }, {
       id: '3',
       title:'La Casa de Papel',
       poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie3.jpg',
   }, {
       id: '4',
       title:'Narcos',
       poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie4.jpg',
   }, {
       id: '5',
       title:'Stranger Things',
       poster: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie5.jpg',
   }]

  return (
    <AnimatedScrollView style={styles.container}>
      <View style={{width:'90%',alignSelf:'center',paddingVertical:15}}>
        <View style={{alignItems:'flex-end'}}>
          <View style={[styles.center,{
            borderWidth:0.7,
            borderColor:'white',
            width:'7%',
            borderRadius:5,
            // height:12
          }]}>
            <Text style={{fontSize:9,color:'#ffff',fontFamily:'Prompt-Light'}}>Top</Text>
            <Text style={{fontSize:12,color:'#ffff',fontFamily:'Prompt-Regular'}}>10</Text>


          </View>

        </View>


        <FlatList
                      horizontal={false}
                      data={Originals}
                      keyExtractor={(item)=> item.id.toString()}
                      renderItem={({item})=>
                      <View style={{
                       height:150,
                       marginTop:10
                      }}>
                        <View style={{
                          width:'100%',
                          flexDirection:'row',
                          height:'80%'
                        }}>
                           <View style={{
                              width:'80%',
                              flexDirection:'row',
                              justifyContent:'space-between'
                            }}>
                              <TouchableOpacity 
                              style={{
                                width:'60%',
                              }}
                              >
                                <Image
                                  style={{
                                      resizeMode:'cover',
                                      flex:1,
                                  }}
                                  source={{uri:item.poster}}
                                />                      
                
                              </TouchableOpacity>
                              <View style={{
                                width:'35%',
                                height:'80%',
                                alignSelf:'center'
                              }}>
                                <Text style={{fontSize:15,color:'#ffff',fontFamily:'Prompt-SemiBold'}}>{item.title}</Text>

                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                  <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular'}}>Romance</Text>
                                  <View style={{
                                    borderWidth:0.6,
                                    height:10,
                                    marginHorizontal:3,
                                    borderColor:'#B5088C'
                                  }}>

                                  </View>
                                  <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular'}}>Drama</Text>

                                </View>
                                <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular'}}>August 2017</Text>
                                <Text style={{fontSize:10,color:'lightgrey',fontFamily:'Prompt-Regular'}}>1h: 45m</Text>


                              </View>

                          </View>
                          <View style={[styles.center,{width:'20%'}]}>

                             <Text style={{fontSize:45,color:'#ffff',fontFamily:'LondrinaOutline-Regular'}}>{item.id}</Text>

                          </View>

                        </View>
                        <View style={{
                          width:'60%',
                          height:'20%',
                          // backgroundColor:'yellow'
                          marginTop:5
                        }}>
                          <Text numberOfLines={2} style={{fontSize:9,color:'lightgrey',fontFamily:'Prompt-Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et tristique quis urna risus sit ut semper erat.</Text>


                        </View>


                      </View>
                      
                        }
                            
                    />

                    
      </View>
      
 
      
    </AnimatedScrollView>
  );
};


export default Profile;