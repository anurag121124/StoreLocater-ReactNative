import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Image } from 'react-native'; // Import Image
import Header from '../Components/Header';

export default function LoginScreen() {

    const buttonClick = () => {
        console.log("Button is clicked");
    };


    return (
        <View>
            <View>
                <Header />
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Welcome to FuelBuddy</Text>
                <Text style={styles.bottomLoginText}>Doorstep Fuel Delivery</Text>
            </View>
            <View style={styles.ViewofGoogle}>
            <TouchableOpacity style={styles.googleStyle} activeOpacity={0.5}>
                         <Image
                        source={require('../../assets/Images/googleicon.png')}
                        style={styles.ImageIconStyle}
                    />
                    <View />
                    <View style={styles.SeparatorLine} />
                    <Text style={styles.TextStyle} onPress={buttonClick}> Login Using Google </Text>
                </TouchableOpacity>

                
            <View style={styles.createNewAccount}>
                <Text style={styles.createNewAccountTextButton}>
                    New here?
                    <Text style={styles.createNewAccountText}> Create New Account</Text>
                </Text>


            </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    bottomLoginText: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
    },
    ViewofGoogle: {
        alignItems: 'center',
        marginTop: 30,
    },
    googleStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#0E2F34',
        borderRadius: 20,
        marginTop: 40,
    },
    ImageIconStyle: {
        height: 40,
        width: 40,
        marginRight: 10,
        resizeMode: 'contain',
    },
    TextStyle: {
        fontSize: 18,
        color: 'white'// Google Blue Color
    },
    createNewAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 80
    },
    createNewAccountText: {
        fontSize: 16,
        color: '#44B877',
        fontWeight: 'bold',


    },
    createNewAccountTextButton: {
        fontSize: 16,
        color: '#333333',


    },
});
