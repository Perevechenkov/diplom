import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { CONTENT } from '../../data/data';
import { CheckListItem } from '../../components/CheckListItem';
import { Advice } from '../../components/Advice';

export const CheckListTask = props => {
     const [checksArr, setChecksArr] = useState([]);

     let warning;

     const content = CONTENT.filter(
          contentItem => props.task.id === contentItem.task
     );

     const checks = content.filter(contentItem => 'check' === contentItem.type);

     if (checksArr.length >= 3) {
          warning = content.find(contentItem => 'warning' === contentItem.type);
     }

     const advices = content.filter(
          contentItem => 'advice' === contentItem.type
     );

     const counterHandler = (value, id) => {
          if (value) {
               setChecksArr(curArr => [...curArr, id]);
          } else {
               setChecksArr(curArr => curArr.filter(itemId => itemId !== id));
          }
     };

     return (
          <View style={styles.screen}>
               <ScrollView style={styles.scrollView}>
                    <Text style={styles.bodyText}>{props.task.body}</Text>
                    {checks.map(item => (
                         <CheckListItem
                              key={item.id}
                              id={item.id}
                              onCheckHandler={counterHandler}
                         >
                              {item.body}
                         </CheckListItem>
                    ))}
                    {warning && (
                         <Advice isWarning={true}>
                              <Text>{warning.body}</Text>
                         </Advice>
                    )}
                    <Text style={styles.bodyText}>Рекомендации:</Text>
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
     scrollView: {},
     bodyText: {
          fontSize: 18,
          paddingVertical: 5,
          paddingHorizontal: 10,
     },
});
