import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles/baseStyles';


//Hiding does not work as secureTextEntry cannot be used as it disables emoji's, also cant seem to get it working by manually updating with • .
export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleLoginPress = () => {
    setUsername('');
    setPassword('');
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
      </View>

      
      <TouchableOpacity style={styles.signUpAndloginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

