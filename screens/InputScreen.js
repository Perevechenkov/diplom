import React, { useState, useEffect, useCallback, useReducer } from 'react';
import {
     StyleSheet,
     ScrollView,
     View,
     Alert,
     KeyboardAvoidingView,
     ActivityIndicator,
     Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Input } from '../components/Input';

const FORM_INPUT = 'INPUT';

const formReducer = (state, action) => {
     if (action.type === FORM_INPUT) {
          const updatedValues = {
               ...state.inputValues,
               [action.input]: action.value,
          };
          const updatedValidities = {
               ...state.inputValidities,
               [action.input]: action.isValid,
          };
          let updatedFormIsValid = true;
          for (const key in updatedValidities) {
               updatedFormIsValid =
                    updatedFormIsValid && updatedValidities[key];
          }
          return {
               inputValues: updatedValues,
               inputValidities: updatedValidities,
               formIsValid: updatedFormIsValid,
          };
     }
     return state;
};

export const InputScreen = props => {
     const [formState, dispatchFormState] = useReducer(formReducer, {
          inputValues: {
               name: '',
          },
          inputValidities: {
               name: false,
          },
          formIsValid: false,
     });

     const inputChangeHandler = useCallback(
          (inputIdentifier, inputValue, inputValidity) => {
               //goes to form reducer
               dispatchFormState({
                    type: FORM_INPUT,
                    value: inputValue,
                    isValid: inputValidity,
                    input: inputIdentifier,
               });
          },
          [dispatchFormState]
     );

     const submitHandler = useCallback(() => {
          if (!formState.formIsValid) {
               Alert.alert('Wrong input', 'Check errors', [{ text: 'ok' }]);
               return;
          }
          console.log('submit');
     }, [formState]);

     return (
          <ScrollView>
               <View style={styles.form}>
                    <Input
                         id='name'
                         label='Ваше имя'
                         errorText='Введите имя'
                         onInputChange={inputChangeHandler}
                         initialValue={''}
                         initiallyValid={false}
                         required
                    />
               </View>
               <View style={styles.form}>
                    <Input
                         id='email'
                         label='Ваша почта'
                         errorText='Введите почту'
                         onInputChange={inputChangeHandler}
                         initialValue={''}
                         initiallyValid={false}
                         required
                    />
               </View>
               <View style={styles.form}>
                    <Input
                         id='pass'
                         label='Пароль'
                         errorText='Pls enter valid pass'
                         onInputChange={inputChangeHandler}
                         initialValue={''}
                         initiallyValid={false}
                         required
                    />
               </View>
               <View style={styles.form}>
                    <Input
                         id='passConfirm'
                         label='Повторите пароль'
                         errorText='Pls enter valid pass'
                         onInputChange={inputChangeHandler}
                         initialValue={''}
                         initiallyValid={false}
                         required
                    />
               </View>
               <View style={styles.button}>
                    <Button title='Apply' onPress={submitHandler} />
               </View>
          </ScrollView>
     );
};

export const InputScreenOptions = navData => {
     return {
          headerTitle: 'Регистрация',
     };
};

const styles = StyleSheet.create({
     form: {
          marginHorizontal: 20,
          marginVertical: 10,
     },
     centered: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     button: {
          alignSelf: 'center',
          width: '60%',
     },
});
