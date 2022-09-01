import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Keyboard, Alert } from 'react-native';

let count = 0;

export default function GuessNumber() {
    const [number, setNumber] = useState(Math.round((Math.random() * 100) + 1));
    const [message, setMessage] = useState('Guess a number between 1-100');
    const [guess, setGuess] = useState('');

    const guessPressed = () => {
        count++;
        Keyboard.dismiss();

        if (parseInt(guess) === number) {
            setMessage('Guess a number between 1-100');
            setNumber(Math.round((Math.random() * 100) + 1));
            setGuess('');
            Alert.alert('Correct! You guessed the number in ' + count + ' guesses');
        }
        if (parseInt(guess) < number) {
            setMessage('Your guess ' + guess + ' is too low');
        }
        if (parseInt(guess) > number) {
            setMessage('Your guess ' + guess + ' is too high');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            <TextInput style={styles.input} onChangeText={guess => setGuess(guess)} value={guess} keyboardType="number-pad"/>
            <View style={styles.button}>
              <Button onPress={guessPressed} style={styles.button} color="white" title="Guess the Number"/>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
      marginBottom: 5
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 250,
      height: 40,
      padding: 10,
      margin: 5,
      borderColor: 'gray', 
      borderWidth: 1
    },
    button: {
      padding: 5,
      margin: 10,
      backgroundColor: 'blue',
    }
  });