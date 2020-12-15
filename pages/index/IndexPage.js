import React, { Component } from 'react';
import { View, Text, ImageBackground, Button, Image, Alert } from 'react-native';
// import  ImagePicker from 'react-native-image-picker';
import { Entypo } from '@expo/vector-icons';
// 引入css样式
import styles from '../../styles/common.js';
import colors from '../../styles/color.js'; 
import * as ImagePicker from 'expo-image-picker'

const img_local = require('../../assets/image/bg.png')

class IndexPage extends Component {
    constructor(props) {
        super(props);
        //保存图片信息
        this.state = {
            image: {},
        }
    }

    // 选择图片或相册
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };

    //上传图片
    UploadVedio = () => {
        console.log("111")
        
        let formData = new FormData();
        fetch('http://115.154.137.47:8080/souldancer/uploadvideo', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then(res => {
            Alert.info('上传成功', {
                position: 'bottom-left',
                effect: 'bouncyflip',
                timeout: 'none'
            });
            console.log(res)
        }).catch((error) => {
            console.error('error', error)
        });

    }


    render() {
        let { image } = this.state;

        return (    
            <View style={styles.container}>
                <ImageBackground source={img_local} style={styles.image}>
                    {/*展示图片*/}
                    <Image source={this.state.avatarSource} style={styles.uploadImage} />

                    <View style={styles.fixToText}>
                        <View style={styles.verticalContainer}>
                            <Entypo name="folder-video" size={32} color={colors.blue} />
                            <Button
                                title="选择视频"
                                onPress={this._pickImage}
                            />
                        </View>

                        <View style={styles.verticalContainer}>
                            <Entypo name="video-camera" size={32} color={colors.blue} />
                            <Button
                                title="上传视频"
                                onPress={() => this.UploadVedio()}
                            />
                        </View>

                    </View>

                </ImageBackground>
            </View >
        )
    }
}

export default IndexPage;