import React, { Component } from 'react';
import { View, Text, ImageBackground, Button, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Entypo } from '@expo/vector-icons';
// 引入css样式
import styles from '../../styles/common.js';
import colors from '../../styles/color.js';

const img_local = require('../../assets/image/bg.png')

class IndexPage extends Component {
    constructor(props) {
        super(props);
        //保存图片信息
        this.state = {
            avatarSource: {},
        }
    }

    // 选择图片或相册
    onClickChoosePicture = () => {
        const options = {
            title: '',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        };


        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source,
                });
                console.warn(this.state.avatarSource.uri);
            }
        });
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
        }).then(res => {
            console.log(res)
        }).catch((error) => {
            console.error('error', error)
        });

    }


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={img_local} style={styles.image}>
                    {/*展示图片*/}
                    <Image source={this.state.avatarSource} style={styles.uploadImage} />
                    
                    <View style={styles.fixToText}>
                        <View style={styles.verticalContainer}>
                            <Entypo name="folder-video" size={24} color={colors.blue} />
                            <Button
                                title="选择视频"
                                onPress={() => this.onClickChoosePicture()}
                            />
                        </View>

                        <View style={styles.verticalContainer}>
                            <Entypo name="video-camera" size={24} color={colors.blue} />
                            <Button
                                title="上传视频"
                                onPress={() => Alert.alert('Right button pressed')}
                            />
                        </View>

                    </View>

                </ImageBackground>
            </View >
        )
    }
}

export default IndexPage;