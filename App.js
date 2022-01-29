import React, {useState,useEffect} from 'react';
import {useSelector, Provider} from 'react-redux'

import WelcomeScreen from './src/Welcome';
import {store} from './src/store/store'
import SwipeButton from './src/widgets/SwipeButton';

import styles from './src/assets/customStyles'
import LinearGradient from 'react-native-linear-gradient';

 import {
   SafeAreaView, View, Text, Button,TouchableOpacity, Alert,Pressable,Vibration
 } from 'react-native';

  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import DeviceInfo from 'react-native-device-info'
 
 
 const App = (props) => {
   
  const Stack = createNativeStackNavigator()

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //alert(DeviceInfo.isEmulator())

     if(DeviceInfo.isEmulator()){
   
       Alert.alert(
        "Device Type",
        "Emulator",
        [
          {
            text: "Close",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          
        ]
      );
     }else{
      Alert.alert(
        "Device Type",
        "Device",
        [
          {
            text: "Close",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          
        ]
      );
     }
     
  });

  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen 
        options={
          {headerShadowVisible: false,
            title:'MDAInvest',
            headerTitleStyle:{color:'#fff'}
            ,headerStyle:{backgroundColor:'#000',
            color:'#fff'},
          }} 
        name="Home" 
        component={HomeScreen} />
      <Stack.Screen 
      options={{
        headerShadowVisible: false,
        title:'Welcome Form',
        headerTitleStyle:{color:'#fff'},
        headerStyle:{backgroundColor:'#000',
        color:'#fff'},
        headerBackTitle:" "
        
      }} 
      name="Welcome" component={Welcome} />
      <Stack.Screen 
      options={{
        headerShadowVisible: false,
        title:'Detail View',
        headerTitleStyle:{color:'#fff'},
        headerStyle:{backgroundColor:'#000',
        color:'#fff'},
        headerBackTitle:" "
      }} 
      name="Details" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  );
};


function Welcome() {
  return (
    <SafeAreaView  style = {styles.containerTop} >
        <WelcomeScreen/>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {

  const data = useSelector((state) => state);
  const {userName} = data

  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value) => {
    
    setToggleState(value)

  if(value){
    Vibration.vibrate()
    Alert.alert(
      "Swipe successful",
      userName,
      [
        /*{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },*/
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    setToggleState(!value)
  }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.nameHeader}>{userName} </Text>
      <Button
        style={styles.buttonOne}
        title="Start Here"
        color="#06d6a0"
        onPress={() => navigation.navigate('Welcome')}
      />
      <TouchableOpacity
               style = {styles.buttonTwo}
               onPress = {
                () => navigation.navigate('Details')
                
             }>
               <Text style = {styles.buttonTextTwo}> Press Me </Text>
      </TouchableOpacity>
      
      
      
    <LinearGradient colors={['#06d6a0', '#1b9aaa']}
    style={styles.buttonThree} 
    start={{x: 0.0, y: 0.5}}
    end={{x: 1, y: 0.5}}>

<Pressable  onPress={() =>navigation.navigate('Welcome')}>
      <Text style={styles.buttonTextThree}>Press Me</Text>
    </Pressable>


</LinearGradient>
      <SwipeButton onToggle={handleToggle} />
    </View>
  );
}


function DetailScreen({ navigation }) {

  const data = useSelector((state) => state);
  const {userName} = data

  return (
    <View style={styles.container}>
      <Text style={styles.nameHeader}>{userName} </Text>
      
      <Text style={styles.homeHeader}> We see your name is stored as  </Text>
      <Text style={styles.homeHeaderSub}>  {userName} </Text>
      <View style={styles.fixToText}> 
           

           
            <TouchableOpacity
               style = {styles.removeButton}
               onPress = {
                () =>navigation.navigate('Home')
                  
               }>
               <Text style = {styles.submitButtonText}> Home </Text>
            </TouchableOpacity>
           


            <LinearGradient colors={['#06d6a0', '#1b9aaa']}
              style={styles.submitButton} 
              start={{x: 0.0, y: 0.5}}
              end={{x: 1, y: 0.5}}>

            <TouchableOpacity
               onPress = {
                  () => navigation.navigate('Welcome')
                  
               }>
               <Text style = {styles.submitButtonText}> Update Name </Text>
            </TouchableOpacity>


</LinearGradient>

            </View>
    </View>
  );
}

//

export default App;


