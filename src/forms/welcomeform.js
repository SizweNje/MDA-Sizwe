import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native'

class WelcomeInputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ name: text })
   }
  
   login = (name) => {
      alert('Full Name : ' + name )
   }
   render() {
      return (
         <SafeAreaView style= {{
            flex:1,
            alignItems:'center',
            
         }}>
         <View style = {styles.container}>

      
            <View style = {styles.header}>
               <Text>Welcome to demo app.</Text>
               <Text>Please enter your name below</Text>
         </View>

        
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Full Name "
               placeholderTextColor = "#1A1A1A"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
           
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.name)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View></SafeAreaView>
      )
   }
}
export default WelcomeInputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#1A1A1A',
      borderWidth: 1,
      padding:10,
      borderRadius: 10
   },
   header: {
      margin: 15,
      height: 40,
      padding:10,
      alignContent: 'center',
      width: "90%"
   },
   submitButton: {
      backgroundColor: '#1A1A1A',
      padding: 10,
      margin: 15,
      height: 40,
      textAlign: 'center',
      borderRadius:20
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   }
})