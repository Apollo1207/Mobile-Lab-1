import React from 'react';
import {authorization} from '../../firebase';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './HomePageStyles';

function HomePage() {
    const navigation = useNavigation()

    const handleSignOut = () => {
        authorization
            .signOut()
            .then(() => {
                navigation.replace("LoginPage")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.userEmail}>Your email: {authorization.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonTitle}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}


export default HomePage


