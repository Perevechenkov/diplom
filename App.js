import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { userReducer } from './store/user-reducer';
import { AppNavigator } from './navigation/AppNavigator';

enableScreens();

//compose only in development!!!! more in 8.10
//const store = createStore(rootReducer, composeWithDevTools())

const rootReducer = combineReducers({
     user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
     return Font.loadAsync({
          'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
     });
};

export default function App() {
     const [fontLoaded, setFontLoaded] = useState(false);

     if (!fontLoaded) {
          return (
               <AppLoading
                    startAsync={fetchFonts}
                    onFinish={() => setFontLoaded(true)}
                    onError={err => console.log(err)}
               />
          );
     }

     return (
          <Provider store={store}>
               <AppNavigator />
          </Provider>
     );
}
