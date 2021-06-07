import React, { useState } from 'react';

import {
     StyleSheet,
     Text,
     View,
     TouchableOpacity,
     TouchableNativeFeedback,
     Platform,
     Image,
} from 'react-native';
import { IMAGES } from '../data/dummy-data';

export const ImagesGridTile = props => {
     

     return (
          <View style={styles.gridItem}>
               <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
                    <View style={styles.container}>
                         <Image
                              //source={{ uri: props.item.uri }}

                              source={{ uri: props.item.uri }}
                              style={styles.image}
                         />
                    </View>
               </TouchableOpacity>
          </View>
     );
};

const styles = StyleSheet.create({
     gridItem: {
          flex: 1,
          margin: 5,
          height: 150,
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 10,
     },
     container: {
          flex: 1,
          borderRadius: 10,
          //padding: 15,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
     },
     image: { width: '100%', height: '100%' },
});
