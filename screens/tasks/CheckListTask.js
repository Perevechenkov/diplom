import React from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const CheckListTask = props => {
     return (
          <View style={styles.screen}>
               <ScrollView>
                    {props.task.content.map(item => (
                         <Text key={Date.now()}>{item}</Text>
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
