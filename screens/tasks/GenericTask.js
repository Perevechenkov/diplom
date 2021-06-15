import React, { useEffect, useState } from 'react';

import { StyleSheet, FlatList, View, Text, Button } from 'react-native';

import { ImagesGridTile } from '../../components/ImagesGridTile';
import { CONDITIONS, IMAGES, TASKS } from '../../data/data';

export const GenericTask = props => {
     return (
          <View style={styles.screen}>
               <Text>{props.task.body}</Text>
          </View>
     );
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
     },
});
