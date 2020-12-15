import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import colors from './color.js'

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    verticalContainer:{
        display:'flex',
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        justifyContent:'center'
    },
    fixToText: {
        marginHorizontal:48,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: colors.midnightBlue,
        padding: 16,
        borderRadius: 24,
        marginHorizontal: 80
    },
    textStyle: {
        color: colors.white,
        fontSize: 20
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    countText: {
        color: "#FF00FF"
    },
    uploadImage:{
        width: 150,
        height: 150,
    }
})

export default styles;