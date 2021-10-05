import React, {useEffect, useState} from 'react';
import {authorization} from "../../../firebase";
import {Platform, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';
import styles from './styles';

const keyboardAvoidingBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        authorization.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
    }, [])

    const handlerSignUp = () => {
        authorization
            .createUserWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))

    }

    const handlerSignIn = () => {
        authorization
            .signInWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))

    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={keyboardAvoidingBehavior}>

            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}/>
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry/>
            </View>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    onPress={handlerSignIn}
                    style={styles.button}>
                    <Text style={styles.buttonTitle}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handlerSignUp}
                    style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

