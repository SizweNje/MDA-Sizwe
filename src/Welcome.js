import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity}  from  'react-native';

import styles from './assets/customStyles'

import LinearGradient from 'react-native-linear-gradient';

import {
  useSelector,
  useDispatch} from 'react-redux';


import {store,remove} from './store/action';

const WelcomeScreen  = (props) => { 

    const data = useSelector((state) => state);
    const {userName} = data
    const dispatch = useDispatch();
    
    let name = userName;

   handleUserName = (text) => {
      name = text
   }

    return (
        
      
         <View style={styles.paddding20}>
            <Text style={styles.nameHeader}>{userName} </Text>

      
            <Text style = {styles.header} >Please enter your name below</Text>
        

        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Full Name "
               defaultValue = {userName}
               placeholderTextColor = "#000000"
               autoCapitalize = "none"
               onChangeText = {(value) => name = value}/>
           
           <View style={styles.fixToText}> 
           

            {userName!=null?
            <TouchableOpacity
               style = {styles.removeButton}
               onPress = {
                  () => {
                    //remove local name value for state of application and hide button
                      dispatch(remove())
                  }
                  
               }>
               <Text style = {styles.submitButtonText}> Reset </Text>
            </TouchableOpacity>
            :null}

            <LinearGradient colors={['#06d6a0', '#1b9aaa']}
               style={styles.submitButton} 
               start={{x: 0.0, y: 0.5}}
               end={{x: 1, y: 0.5}}>

            <TouchableOpacity
                           onPress = {
                              () => {
                              //store local name value for state of application
                                 dispatch(store(name))
                                 
                              }
                              
                           }>
                           <Text style = {styles.submitButtonText}> Submit </Text>
                        </TouchableOpacity>


            </LinearGradient>
            

            </View>

            
            
         </View>
           

    )
}

export default WelcomeScreen;



