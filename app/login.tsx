import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import styles from '../assets/styles/baseStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Hiding does not work as secureTextEntry cannot be used as it disables emoji's, also cant seem to get it working by manually updating with • .
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const router = useRouter();

  useLayoutEffect(() => {
  }, []);

  const limitedEmojis = [
    '😀', '😁', '😂', '🤣', '😃',
    '😄', '😅', '😆', '😉', '😊',
    '😋', '😎', '😍', '😘', '😗',
    '😙', '😚', '🙂'
  ];

  const handleLoginPress = async () => {
    const userStored = await AsyncStorage.getItem('user')
    if (userStored) {
      const { username: storedUsername, password: storedPassword } = JSON.parse(userStored);
      console.log('Stored Password:', storedPassword);
      console.log('Entered Password:', password);
      if (username == storedUsername && password == storedPassword) {
        Alert.alert('Successful', 'You are now logged in', [ {text: 'Ok', onPress: () => router.push('/profile')}]);
      } else {
        Alert.alert('Wrong Details', 'Please try again');
      }
    } else {
      Alert.alert('User does not exist', 'Please sign up')
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      
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
          value={showPassword ? password : '•'.repeat(password.length)}
          onChangeText={(text) => {
            if (!showPassword) {
              setPassword((prev) => text.length >= prev.length ? prev + text[text.length - 1] : prev.slice(0, -1));
            } else {
              setPassword(text);
            }
          }}
          placeholder="Enter Password"
          placeholderTextColor="gray"
          keyboardType="default"
          autoCapitalize="none"
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

      
      <TouchableOpacity style={styles.signUpAndloginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpAndloginButton} onPress={() => router.push('/')}>
        <Text style={styles.buttonText}>Need a account ? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

