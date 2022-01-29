import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity}  from  'react-native';

import styles from './assets/customStyles'

import {useSelector} from 'react-redux';


const DetailScreen  = (props) => { 

    const data = useSelector((state) => state);
    const {userName} = data
   

    return (
        
      
         <View style = {styles.containerTop}>

      
            <View style = {styles.header}>
               <Text>Welcome to demo app.</Text>
               <Text>Please enter your name below</Text>
         </View>

        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Full Name "
               defaultValue = {userName}
               placeholderTextColor = "#1A1A1A"
               autoCapitalize = "none"
               onChangeText = {(value) => name = value}/>
           
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    //store local name value for state of application
                      dispatch(store(name))
                      
                  }
                  
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>


            {userName!=null?
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    //remove local name value for state of application and hide button
                      dispatch(remove())
                  }
                  
               }>
               <Text style = {styles.submitButtonText}> Reset </Text>
            </TouchableOpacity>
            :null}
         </View>
           

    )
}

export default DetailScreen;



