import React from 'react';
import { Provider} from 'react-redux'

import WelcomeScreen from './src/Welcome';
import {store} from './src/store/store'

 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <WelcomeScreen/>
      </Provider>
    </SafeAreaView>
  );
};


export default App;

