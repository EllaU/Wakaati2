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
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import { ProgressBar, Colors } from 'react-native-paper';




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
      <View style={{width:'90%',alignSelf:'center',paddingVertical:0}}>
        <FlatList
                      horizontal={false}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      key={(item)=> item.id.toString()}
                      data={Originals}
                      keyExtractor={(item)=> item.id.toString()}
                      renderItem={({item})=>
                      <View style={{
                       height:200,
                       marginTop:'5%',
                       width:'47.5%',
                       borderRadius:10,
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
                            height:'100%',
                            width:'100%',
                           borderRadius:10
                         }}
                         source={{uri:item.poster}}
                       />  
                                         
               
                     </TouchableOpacity>
                     {/* <ProgressBar progress={0.3} style={{width:120,marginTop:10}} color={Colors.red800}/> */}
                     <View style={{
                       width:'100%',
                       height:'20%',
                       backgroundColor:'rgba(0,0,0,0.7)',
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
                         alignItems:'center',
                         paddingLeft:'2%',
                        //  justifyContent:'flex-end',
                         flexDirection:'row'
                       }}>
                           <View style={{width:'40%'}}>
                           <Text style={{fontSize:11,color:'#ffff',fontFamily:'Prompt-Regular'}}>{item.title}</Text>

                           </View>
                           <Entypo
                            name="dot-single"
                            color={'#ffff'}
                            size={13}
                            // style={{marginRight:5}}
                          />

                           <Text style={{fontSize:8,color:'#ffff',fontFamily:'Prompt-Light',marginRight:5}}>( 2020 )</Text>
                        
                           <Entypo
                            name="star"
                            color={'#ECCA43'}
                            size={10}
                            // style={{marginRight:5}}

                          />
                          <Text style={{fontSize:9,color:'#ECCA43',fontFamily:'Prompt-Regular',marginRight:5}}>4.5</Text>

                          <Feather
                            name="eye"
                            color={'grey'}
                            size={13}
                            style={{marginRight:5}}
                          />

                       </View>


                     </View> 

                    </View>
                      
                        }
                            
                    />
                    <View style={{height:50}}>

                    </View>

                    
      </View>
      
 
      
    </AnimatedScrollView>
  );
};


export default Profile;