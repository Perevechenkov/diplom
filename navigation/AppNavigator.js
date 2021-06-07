import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './Navigator';

export const AppNavigator = props => {
     return (
          <NavigationContainer>
               <MainNavigator />
          </NavigationContainer>
     );
};
