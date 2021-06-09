import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { CONTENT } from '../../data/dummy-data';
import { CheckListItem } from '../../components/CheckListItem';

export const CheckListTask = props => {
     const content = CONTENT.filter(
          contentItem => props.task.id === contentItem.task
     );

     return (
          <View style={styles.screen}>
               <ScrollView style={styles.scrollView}>
                    {content.map(item => (
                         <CheckListItem key={item.id}>
                              <Text>{item.body}</Text>
                         </CheckListItem>
                    ))}
               </ScrollView>
          </View>
     );
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
     },
     scrollView: {
          paddingHorizontal: 10,
     },
});
