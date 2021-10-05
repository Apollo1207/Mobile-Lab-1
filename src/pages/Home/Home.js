import React from 'react';
import {authorization} from "../../../firebase";
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

function Home({navigation}) {

    const handleSignOut = () => {
        authorization
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.userEmail}>Your email: {authorization.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}>
                <Text style={styles.buttonTitle}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Home


