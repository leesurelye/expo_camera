import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import colors from './color.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
      },
      instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
      },
      button: {
        backgroundColor: colors.blue,
        padding: 20,
        borderRadius: 5,
        margin:16
      },
      buttonGroup:{
          
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignContent:'space-between',
          margin:8
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      },
      thumbnail: {
        width: 320,
        height: 560,
        backgroundColor:colors.grey,
        resizeMode:'cover'
        
      }
})

export default styles;