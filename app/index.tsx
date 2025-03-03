import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../assets/styles/baseStyles';
import  {useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Hiding does not work as secureTextEntry cannot be used as it disables emoji's, also cant seem to get it working by manually updating with • .
export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [start, setStart] = useState(null);

  const router = useRouter();

  useLayoutEffect(() => {
  }, []);

  const limitedEmojis = [
    '😀', '😁', '😂', '🤣', '😃',
    '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '😘', '😗',
    '😙', '😚', '🙂'
  ];

  const handleSignUp = async () => {
    if (username && password) {

      const end = Date.now();
      if (start) { 
        const timeTaken = (end - start) / 1000; 
        console.log("Time taken to enter password correctly (sign-up): " + timeTaken);
      }

      await AsyncStorage.setItem('start', JSON.stringify(start));
      await AsyncStorage.setItem('user', JSON.stringify({username, password}));
      Alert.alert('Signed up successfully', 'Please log in', [{text: 'Ok', onPress: () => router.push('/login')}]);
    } else {
      Alert.alert('Missing information', 'Enter both the username and password');
    }
  }

  const handlePassword = (text) => {
    if (!start && text.length > 0) {
      setStart(Date.now());
    }
    setPassword(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      
      <View style={[styles.inputContainer, styles.spacing]}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Username"
          placeholderTextColor="gray"
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>

      
      <View style={[styles.inputContainer, styles.spacing]}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter Password"
          placeholderTextColor="gray"
          keyboardType="default"
          autoCapitalize="none"
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon 
            name={showPassword ? "eye-off" : "eye"} 
            size={24} 
            color="gray" 
            style={styles.icon} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowEmoji(!showEmoji)} style={styles.emojiButton}>
          <Text style={{ fontSize: 20 }}>😀</Text>
        </TouchableOpacity>
      </View>

      <View>
      {showEmoji && (
        <View style={styles.emojiPickerOverlay}>
          <View style={styles.emojiPicker}>
            {limitedEmojis.map((emoji, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  setPassword(password + emoji);
                  setShowEmoji(false);
                }}
                style={styles.emojiItem}
              >
                <Text style={{ fontSize: 20 }}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      </View>

      
      <TouchableOpacity style={styles.signUpAndloginButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>  
  );
}

