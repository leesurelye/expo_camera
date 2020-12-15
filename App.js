import React, { useState,useEffect } from 'react';
import {Text,TouchableOpacity ,Button, Tesxt, StyleSheet, StatusBar, View, Alert } from 'react-native';

import  IndexPage from './pages/IndexPage.js';

// 导入摄像机API
// import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios';


export default function App() {
    let video=null;
    const handleUpdate = () => {
        console.log("onClick start")
        
        axios.post("http://115.154.137.47:8080/souldancer/uploadvideo",video)
            .then(res => {
                console.log(1111);
            })
            .catch(err => {
                console.log("error");
            })
    }



    return (
        <div className="containerStyle">
            <IndexPage></IndexPage>
        </div>
    );
    const styles=StyleSheet.create({
        container: {
          flex: 1,
        },
        camera: {
          flex: 1,
        },
        buttonContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          flexDirection: 'row',
          margin: 20,
        },
        button: {
          flex: 0.1,
          alignSelf: 'flex-end',
          alignItems: 'center',
        },
        text: {
          fontSize: 18,
          color: 'white',
        },
      })
}

