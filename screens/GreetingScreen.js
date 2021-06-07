import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
     StyleSheet,
     ScrollView,
     View,
     Alert,
     KeyboardAvoidingView,
     ActivityIndicator,
     Text,
     Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Card } from '../components/Card';

export const GreetingScreen = props => {
     return (
          <View style={styles.screen}>
               <View style={styles.textContainer}>
                    <Text style={styles.text}>
                         Данное приложение не является медицинской услугой. При
                         необходимости обратитесь к врачу. Предназначено для лиц
                         18+. Основная цель приложения - развитие адаптационных
                         психологических ресурсов после получения травмы
                         опорно-двигательного аппарата.{' '}
                    </Text>
               </View>
               <Card style={styles.buttonsContainer}>
                    <View style={styles.button}>
                         <Button title='Войти' />
                    </View>
                    <View style={styles.button}>
                         <Button title='Регистрация' />
                    </View>
               </Card>
          </View>
     );
};

GreetingScreen.navigationOptions = navData => {
     return {
          headerTitle: 'Добро пожаловть!',
     };
};

const styles = StyleSheet.create({
     screen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     textContainer: {
          marginHorizontal: 10,
          marginVertical: 20,
     },
     text: {
          fontFamily: 'open-sans',
          textAlign: 'center',
     },
     buttonsContainer: {
          width: '90%',
          alignItems: 'center',
          paddingVertical: 20,
     },
     button: {
          width: '80%',
          marginVertical: 10,
     },
});
