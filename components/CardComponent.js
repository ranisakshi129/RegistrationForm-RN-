// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>React Native Card</Text>
      <Text style={styles.content}>
        This is a beautiful card with shadow, padding, and rounded corners!
      </Text>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'pink',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Elevation for Android
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
});
