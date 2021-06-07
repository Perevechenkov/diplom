import React, { useReducer, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const INPUT_CAHNGE = 'INPUT_CAHNGE';
const INPUT_FOCUS = 'INPUT_FOCUS';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
     switch (action.type) {
          case INPUT_CAHNGE:
               return {
                    ...state,
                    value: action.value,
                    isValid: action.isValid,
               };
          case INPUT_BLUR:
               return {
                    ...state,
                    applied: true,
               };
          case INPUT_FOCUS:
               return {
                    ...state,
                    touched: true,
               };
          default:
               return state;
     }
};

export const Input = props => {
     const [inputState, dispatch] = useReducer(inputReducer, {
          value: props.initialValue ? props.initialValue : '',
          isValid: props.initiallyValid,
          touched: false,
          applied: false,
     });

     const { onInputChange, id } = props;

     useEffect(() => {
          if (inputState.touched) {
               props.onInputChange(id, inputState.value, inputState.isValid);
          }
     }, [inputState, onInputChange, id]);

     const textChangeHandler = text => {
          const emailRegex =
               /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let isValid = true;
          if (props.required && text.trim().length === 0) {
               isValid = false;
          }
          if (props.email && !emailRegex.test(text.toLowerCase())) {
               isValid = false;
          }
          if (props.min != null && +text < props.min) {
               isValid = false;
          }
          if (props.max != null && +text > props.max) {
               isValid = false;
          }
          if (props.minLength != null && text.length < props.minLength) {
               isValid = false;
          }

          //goes to inputReducer()
          dispatch({ type: INPUT_CAHNGE, value: text, isValid: isValid });
     };

     const lostFocusHandler = () => {
          dispatch({ type: INPUT_BLUR });
     };

     const onFocusHandler = () => {
          dispatch({ type: INPUT_FOCUS });
     };

     return (
          <View style={styles.formControl}>
               <Text style={styles.label}>{props.label}</Text>
               <TextInput
                    {...props}
                    style={styles.input}
                    value={inputState.value}
                    onChangeText={textChangeHandler}
                    onBlur={lostFocusHandler}
                    onFocus={onFocusHandler}
               />
               {!inputState.isValid && inputState.applied && (
                    <View style={styles.errorContainer}>
                         <Text style={styles.errorText}>{props.errorText}</Text>
                    </View>
               )}
          </View>
     );
};

const styles = StyleSheet.create({
     formControl: {
          width: '100%',
     },
     label: {
          fontFamily: 'open-sans',
          fontSize: 14,
          marginVertical: 6,
     },
     input: {
          paddingHorizontal: 2,
          paddingVertical: 5,
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
     },
     errorContainer: {
          marginVertical: 5,
     },
     errorText: {
          fontFamily: 'open-sans',
          color: 'red',
          fontSize: 13,
     },
});
