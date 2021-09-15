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
import styles from '../../stylesheet/styles'
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'





const Profile = ({ navigation }) => {

   return(
    <LinearGradient
     start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
     colors={['black','#2F0124','black','black']}
     style={[styles.container]}
     >
         <View style={{width:'90%',justifyContent:'center',marginTop:'15%',backgroundColor:'red',alignSelf:'center'}}>
            <Text style={{fontSize:20,alignSelf:'center',color:'black',fontFamily:'Quicksand-SemiBold'}}>Products</Text>
            <TouchableOpacity  onPress={() => navigation.goBack()} style={{position:'absolute',marginLeft:"5%"}}>
                <Ionicons name="chevron-back" size={20} color={"white"} />
            </TouchableOpacity>
        </View>

     </LinearGradient>
       );
};


export default Profile;