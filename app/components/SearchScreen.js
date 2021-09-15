import React, {useState,useRef,useEffect,useCallback} from 'react';
import {TextInput,SafeAreaView,Dimensions,StatusBar,PermissionsAndroid,Share,Text,View,Image,ImageBackground,ScrollView,TouchableOpacity,FlatList, Alert} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import styles from '../../stylesheet/styles';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AnimatedScrollView from './AnimatedScrollView';

const SearchScreen =({navigation,props,route})=>{

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
       }]
    return(
           <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            colors={['black','#2F0124','black','black']}
            style={[styles.container]}
            >
                <AnimatedScrollView style={{width:'90%',alignSelf:'center',padding:10,marginTop:'15%'}}>
                <TouchableOpacity onPress={()=>{
                             navigation.goBack()
                         }}>
                            <Ionicons
                                name="chevron-back"
                                color={'white'}
                                size={20}
                            />

                        </TouchableOpacity>


                     <View style={{
                         flexDirection:'row',
                         marginTop:'5%'
                     }}>
                          <TouchableOpacity
                          style={[styles.center,{
                              backgroundColor:'#DADADA',
                              width:'13%',
                              borderTopLeftRadius:5,
                              borderBottomLeftRadius:5
                          }]}
                          onPress={()=>{
                            //  navigation.goBack()
                         }}>
                            <Feather
                                name="search"
                                color={'black'}
                                size={17}
                            />

                        </TouchableOpacity>
                        <TextInput 
                        // onChangeText={}
        
                        // Making the Under line Transparent.
                        underlineColorAndroid='transparent'
                        placeholder="Genre, title or date"
                        placeholderTextColor='grey' 
                        
                        style={{fontFamily:'Prompt-Regular',height:40,backgroundColor:'#DADADA',borderTopRightRadius:5,borderBottomRightRadius:5,flex:1,fontSize:12}}
                        />


                    </View>  

                    <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-SemiBold',marginTop:'7%'}}>Search by</Text>
 
                
                         <View style={{
                             flexDirection:'row',
                             height:50,
                            //  backgroundColor:'green',
                             justifyContent:'space-between',
                             marginTop:'3%'
                         }}>
                             <TouchableOpacity style={[styles.center,{
                                 width:'48%',
                                 backgroundColor:'rgba(255,255,255,0.2)',
                                 borderRadius:5
                             }]}>

                             <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-Regular',}}>Kids</Text>

                             </TouchableOpacity>

                             <TouchableOpacity style={[styles.center,{
                                 width:'48%',
                                 backgroundColor:'rgba(255,255,255,0.2)',
                                 borderRadius:5
                             }]}>

                             <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-Regular',}}>New Movies</Text>

                             </TouchableOpacity>

                         </View>

                         <View style={{
                             flexDirection:'row',
                             height:50,
                            //  backgroundColor:'green',
                             justifyContent:'space-between',
                             marginTop:'3%'
                         }}>
                             <TouchableOpacity style={[styles.center,{
                                 width:'48%',
                                 backgroundColor:'rgba(255,255,255,0.2)',
                                 borderRadius:5
                             }]}>

                             <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-Regular',}}>Kids</Text>

                             </TouchableOpacity>

                             <TouchableOpacity style={[styles.center,{
                                 width:'48%',
                                 backgroundColor:'rgba(255,255,255,0.2)',
                                 borderRadius:5
                             }]}>

                             <Text style={{fontSize:13,color:'white',fontFamily:'Prompt-Regular',}}>New Movies</Text>

                             </TouchableOpacity>

                         </View>
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

                    </View>
                      
                        }
                            
                    />
                    <View style={{height:50}}>

                    </View>
                </AnimatedScrollView>

            </LinearGradient>
              );

};

export default SearchScreen;