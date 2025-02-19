import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useLayoutEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


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
          value={password}
          onChangeText={setPassword}
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
      </View>

      
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginTop: -100, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: '#222',
    width: '70%',
    paddingHorizontal: 10,
  },
  spacing: {
    marginBottom: 20, 
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    color: 'white',
  },
  icon: {
    padding: 10,
  },
  loginButton: {
    marginTop: 30, 
    backgroundColor: '#555', 
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
