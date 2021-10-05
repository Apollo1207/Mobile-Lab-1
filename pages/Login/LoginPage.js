import React, {useEffect, useState} from 'react';
import {authorization} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './LoginPageStyles';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        authorization.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("HomePage")
            }
        })
    }, [])

    const handlerSignUp = () => {
        authorization
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('SignUp with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handlerSignIn = () => {
        authorization
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('SignIn with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">

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

export default LoginPage;

