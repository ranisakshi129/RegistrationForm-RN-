import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button } from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [display, setDisplayText] = useState(false);

  const resetFormData = () => {
    setDisplayText(false);
    setName('');
    setEmail('');
    setMobile('');
    setAddress('');
    setGender('');
    setStatus('');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.title}>Registration Form</Text>

      <TextInput
        style={styles.textBox}
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter your Mobile Number"
        value={mobile}
        onChangeText={setMobile}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter your Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter your Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.textBox}
        placeholder="Enter your Marital Status"
        value={status}
        onChangeText={setStatus}
      />

      <View style={styles.button}>
        <Button title="Print Details" onPress={() => setDisplayText(true)} />
      </View>
      <View style={styles.button}>
        <Button title="Clear Details" onPress={resetFormData} />
      </View>

      {display && (
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>User Name: {name}</Text>
          <Text style={styles.displayText}>User Email: {email}</Text>
          <Text style={styles.displayText}>Mobile Number: {mobile}</Text>
          <Text style={styles.displayText}>Address: {address}</Text>
          <Text style={styles.displayText}>Gender: {gender}</Text>
          <Text style={styles.displayText}>Marital Status: {status}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'purple',
    padding: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  },
  textBox: {
    borderRadius: 10,
    color: 'black',
    margin: 10,
    backgroundColor: 'pink',
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  button: {
    margin: 10,
  },
  displayContainer: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
  },
  displayText: {
    fontSize: 15,
    marginVertical: 2,
  },
});

export default Form;
