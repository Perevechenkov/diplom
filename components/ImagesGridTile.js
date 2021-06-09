import React, { useState, useEffect } from 'react';

import {
     StyleSheet,
     Text,
     View,
     TouchableOpacity,
     TouchableNativeFeedback,
     Platform,
     Image,
} from 'react-native';

export const ImagesGridTile = props => {
     const [isSelected, setIsSelected] = useState(false);

     const selectCurrentPicHandler = id => {
          props.onSelect(id);

          if (props.selectedPics.indexOf(props.item.id)) {
               setIsSelected(true);
          } else {
               setIsSelected(false);
          }
     };

     const flattenStyle = () => {
          if (isSelected) {
               return StyleSheet.flatten([
                    styles.gridItem,
                    styles.gridItemOpacity,
               ]);
          } else return styles.gridItem;
     };

     return (
          <View style={flattenStyle()}>
               <TouchableOpacity
                    activeOpacity={0.9}
                    style={{ flex: 1 }}
                    onPress={selectCurrentPicHandler.bind(null, props.item.id)}
               >
                    <View style={styles.container}>
                         <Image
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
          margin: 10,
          height: 200,
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 10,
     },
     gridItemOpacity: {
          opacity: 0.6,
     },
     container: {
          flex: 1,
          borderRadius: 10,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
     },
     image: { width: '100%', height: '100%' },
});
