import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import styles from '../assets/styles/baseStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Hiding does not work as secureTextEntry cannot be used as it disables emoji's, also cant seem to get it working by manually updating with • .
export default function profile() {

  const router = useRouter();

  const handleSignOut = async () => {
    console.log("-----------------------------------");
    router.push('/');
  };

  const handleDeleteAccount = async () => {
    console.log("-----------------------------------");
    await AsyncStorage.removeItem('user');
    router.push('/');
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Options</Text>

      
      <TouchableOpacity style={styles.signUpAndloginButton} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signUpAndloginButton, styles.deleteButton]} onPress={handleDeleteAccount}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

