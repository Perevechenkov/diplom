import React from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/CustomHeaderButton';
import { ImagesGridTile } from '../components/ImagesGridTile';
import { IMAGES } from '../data/dummy-data';

export const ImagesScreen = props => {
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
               <View style={styles.button}>
                    <Button
                         title='Следующее задание'
                         onPress={() => {
                              props.navigation.goBack();
                         }}
                    />
               </View>
          </View>
     );
};

export const ImagesScreenOptions = navData => {
     return {
          headerTitle: navData.route.params.taskTitle,
          headerLeft: () => (
               <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                         title='Menu'
                         iconName={'md-menu'}
                         onPress={() => {
                              navData.navigation.toggleDrawer('Tasks');
                         }}
                    />
               </HeaderButtons>
          ),
     };
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
          padding: 10,
     },
     button: {
          marginTop: 5,
          alignSelf: 'center',
          width: '60%',
     },
});
