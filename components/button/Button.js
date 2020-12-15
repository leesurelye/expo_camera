import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import colors from '../../styles/color.js'


class Button extends React.Component {

    constructor(props) {
        super(props);
      
    }

    onPress = () => {
        console.log("111")
        let formData = new FormData();
        fetch('http://115.154.137.47:8080/souldancer/uploadvideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then(res=>{
            console.log(res)
        }).catch((error) => {
            console.error('error', error) 
        });

    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.onPress}>
                    <View style={styles.button}>
                        <Text style={styles.text}>上传视频</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: colors.midnightBlue,
        padding: 10

    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    text: {
        color: colors.white,
        fontSize: 16,
        padding: 8
    }
});

export default Button;