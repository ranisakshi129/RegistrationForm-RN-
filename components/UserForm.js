// App.js or FormComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Simple validation
    if (!name || !email) {
      Alert.alert('Error', 'Please complete all the fields');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    Alert.alert('Submitted', `Hello ${name}, your email is ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Info Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
