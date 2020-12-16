import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles/common.js';
// import { Camera } from 'expo-camera';

export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {


    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });


  };

  let uploadVedio = () => {
    let formData = new FormData();

    fetch('http://115.154.137.47:8080/souldancer/uploadvideo', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    }).then(res => {
      Alert.alert('上传成功', {
        position: 'bottom-left',
        effect: 'bouncyflip',
        timeout: 'none'
      });
      console.log(res)
    }).catch((error) => {
      Alert.alert("上传失败");
      console.error('error', error)
    });
  }

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={uploadVedio} style={styles.button}>
          <Text style={styles.buttonText}>Upload Vedio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.instructions}>
        Please pick a Video from your device
      </Text>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a Video</Text>
      </TouchableOpacity>
    </View>
  );
}

