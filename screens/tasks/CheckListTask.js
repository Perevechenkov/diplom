import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { CONTENT } from '../../data/dummy-data';
import { CheckListItem } from '../../components/CheckListItem';

export const CheckListTask = props => {
     const [checksCount, setChecksCount] = useState(0);

     const content = CONTENT.filter(
          contentItem => props.task.id === contentItem.task
     );

     const checks = content.filter(contentItem => 'check' === contentItem.type);
     const advice = content.find(
          contentItem => 'advice' === contentItem.type && checksCount >= 0
     );

     const counterHandler = value => {
          setChecksCount(curValue => (value ? curValue + 1 : curValue - 1));
     };

     return (
          <View style={styles.screen}>
               <ScrollView style={styles.scrollView}>
                    {checks.map(item => (
                         <CheckListItem
                              key={item.id}
                              onCheckHandler={counterHandler}
                         >
                              <Text>{item.body}</Text>
                         </CheckListItem>
                    ))}
                    {advice && (
                         <View>
                              <Text>{advice.body}</Text>
                         </View>
                    )}
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
