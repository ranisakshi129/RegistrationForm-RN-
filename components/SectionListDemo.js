import React from 'react';
import { Text, View, SectionList, StyleSheet } from 'react-native';

const SectionListDemo = () => {
  const users = [
    { title: 'Anil', data: ['PHP', 'ReactJs', 'Angular'] },
    { title: 'Kamal', data: ['PHP', 'ReactNative', 'Android'] },
    { title: 'Vimal', data: ['Android', 'ReactJs', 'Flutter'] },
    { title: 'Vishal', data: ['DSA', 'Golang', 'Angular'] },
    { title: 'Harish', data: ['Flutter', 'MERN', 'HTML'] },
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.heading}>Section List in React Native</Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 24,
    color: 'red',
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    marginLeft: 20,
    marginVertical: 2,
  },
});

export default SectionListDemo;
