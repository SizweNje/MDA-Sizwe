import React, {useState} from 'react';
import {View,Text, StyleSheet, Button,UselessTextInput}  from  'react-native';
import {useSelector, useDispatch} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';


import WelcomeInputs from './forms/welcomeform'
 

import {store,remove} from './store/action';

const WelcomeScreen  = (props) => { 
    const data = useSelector((state) => state);
    const {userName} = data
    const dispatch = useDispatch();
    return (
        
      <NavigationContainer>
      {
        <WelcomeInputs/>
        }
       </NavigationContainer>
           

    )
}

export default WelcomeScreen;


const styles  = StyleSheet.create({
    texts:{
        marginBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
      }
})
