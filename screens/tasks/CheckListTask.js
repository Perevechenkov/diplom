import React from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CONTENT } from '../../data/dummy-data';

export const CheckListTask = props => {
     const content = CONTENT.filter(
          contentItem => props.task.id === contentItem.task
     );

     return (
          <View style={styles.screen}>
               <ScrollView>
                    {content.map(item => (
                         <Text key={item.id}>{item.body}</Text>
                    ))}
               </ScrollView>
          </View>
     );
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
     },
});
