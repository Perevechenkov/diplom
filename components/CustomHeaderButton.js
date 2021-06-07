import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

/*If TypeError: (0, _native.useTheme) is not a function. (In '(0, _native.useTheme)()', '(0, _native.useTheme)' is undefined)
Try to add npm i --save @react-navigation/native*/

export const CustomHeaderButton = props => {
     return (
          <HeaderButton
               {...props}
               IconComponent={Ionicons}
               iconSize={23}
               color={'white'}
          />
     );
};
