import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // backgroundColor:'black'
      },

      videoContainer: {
        width: 275,
        justifyContent: 'center',
        marginRight: 20,
        backgroundColor:'red'
      },
      videoPreview: {
        resizeMode: 'cover',
      },
      desc: {
        fontSize: 13,
        marginTop: 6,
        fontFamily:'Quicksand-Regular',
        alignSelf:'flex-start'
      },
      buttonContainer: {
        width: 200,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 200
    },
    center:{
      alignItems:'center',
      justifyContent:'center'
    }

})
 
export default styles;