import React from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ImagesGridTile } from '../../components/ImagesGridTile';
import { IMAGES } from '../../data/dummy-data';

export const DiagnosticTask = props => {
     const renderGridItem = itemData => {
          return <ImagesGridTile item={itemData.item} onSelect={() => {}} />;
     };

     return (
          <View style={styles.screen}>
               <Text>
                    Выберите рисунок, который наиболее соответствует Вашему
                    настроения здесь-и-сейчас:
               </Text>
               <FlatList data={IMAGES} renderItem={renderGridItem} />
          </View>
     );
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
     },
     button: {
          marginTop: 5,
          alignSelf: 'center',
          width: '60%',
     },
});
