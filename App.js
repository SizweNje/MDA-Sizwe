import React from 'react';
import { Provider} from 'react-redux'

import WelcomeScreen from './src/Welcome';
import {store} from './src/store/store'

 import {
   SafeAreaView, View, Text, Button, StyleSheet,TouchableOpacity
 } from 'react-native';

  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 
 const App: () => Node = () => {
   
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Test" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


function Welcome() {
  return (
    <SafeAreaView >
      <Provider store={store}>
        <WelcomeScreen/>
      </Provider>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeHeader}>4 vartiations of buttons </Text>
      <Button
        style={styles.button}
        title="Press me"
        onPress={() => navigation.navigate('Welcome')}
      />
      <TouchableOpacity
               style = {styles.buttonTwo}
               onPress = {
                  () => {
                   navigation.navigate('Home')
                  }
               }>
               <Text style = {styles.buttonTextTwo}> Press Me </Text>
      </TouchableOpacity>
      <TouchableOpacity
               style = {styles.buttonThree}
               onPress = {
                  () => {
                   navigation.navigate('Home')
                  }
               }>
               <Text style = {styles.buttonTextThree}> Press Me </Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;


const styles  = StyleSheet.create({
 
  container:{
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end' 
  },
  homeHeader:{
      marginBottom: 20,
      fontSize:20,
      fontWeight:'bold',
      color: '#0000ff'
  }
  ,
    buttonTwo: {
      backgroundColor: '#A9A9A9',
      padding: 10,
      margin: 10,
      height: 40,
      textAlign: 'center',
      borderRadius:7,
      width:'100%',
      
    },
    buttonTextTwo:{
      color: '#1A1A1A',
      textAlign: 'center',
   }
    ,
    buttonThree: {
      backgroundColor: '#1A1A1A',
      padding: 10,
      margin: 15,
      height: 40,
      textAlign: 'center',
      borderRadius:7,
      width:'100%'
    },
     buttonTextThree:{
      color: 'white',
      textAlign: 'center',
   }
    ,
    buttonOne: {
      backgroundColor: 'green',
      width: '100%',
      height: 40,
      margin: 10,
    }
    ,

   
})


