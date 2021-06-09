import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { CONTENT } from '../../data/dummy-data';
import { CheckListItem } from '../../components/CheckListItem';
import { Warning } from '../../components/Warning';
import { Advice } from '../../components/Advice';

export const CheckListTask = props => {
     const [checksCount, setChecksCount] = useState(0);

     const content = CONTENT.filter(
          contentItem => props.task.id === contentItem.task
     );

     const checks = content.filter(contentItem => 'check' === contentItem.type);
     const warning = content.find(
          contentItem => 'warning' === contentItem.type && checksCount >= 0
     );
     const advices = content.filter(
          contentItem => 'advice' === contentItem.type
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
                    {warning && (
                         <Warning>
                              <Text>{warning.body}</Text>
                         </Warning>
                    )}
                    {advices &&
                         advices.map(item => (
                              <Advice key={item.id}>
                                   <Text>{item.body}</Text>
                              </Advice>
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
