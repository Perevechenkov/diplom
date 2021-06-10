import React, { useEffect, useState } from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import { cond } from 'react-native-reanimated';

import { ImagesGridTile } from '../../components/ImagesGridTile';
import { CONDITIONS, IMAGES, TASKS } from '../../data/data';

const areEqualArrays = (a, b) => {
     for (const v of new Set([...a, ...b]))
          if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
               return false;
     return true;
};

export const DiagnosticTask = props => {
     const [selectedPics, setSelectedPics] = useState([]);
     let condition;
     if (selectedPics.length > 0) {
          condition = CONDITIONS.find(condObj =>
               areEqualArrays(condObj.requirements, selectedPics)
          );
     }

     useEffect(() => {
          if (condition) {
               const taskObj = TASKS.find(
                    task => condition.nextTask === task.id
               );

               props.onNextTask(taskObj);
          } else if (selectedPics.length <= 0) {
               props.onNextTask(null);
          } else {
               props.onNextTask(TASKS.find(task => 'cl3' === task.id));
          }
     }, [selectedPics]);

     const selectPicHandler = picId => {
          const index = selectedPics.indexOf(picId);
          if (index < 0) {
               setSelectedPics(currentSelectedPics => [
                    picId,
                    ...currentSelectedPics,
               ]);
          } else {
               setSelectedPics(currentSelectedPics =>
                    currentSelectedPics.filter(pic => pic !== picId)
               );
          }
     };

     const renderGridItem = itemData => {
          return (
               <ImagesGridTile
                    item={itemData.item}
                    selectedPics={selectedPics}
                    onSelect={selectPicHandler}
               />
          );
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
