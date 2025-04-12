// App.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Form from './components/Form';
import Lists from './components/Lists';
import ListWithMapFunction from './components/ListWithMapFunction';
import DynamicGridUsingStaticData from './components/DynamicGridUsingStaticData';
import DynamicGridUsingDynamicData from './components/DynamicGridUsingDynamicData';
import ComponentsInLoopUsingFlatList from './components/ComponentsInLoopUsingFlatlist';
import SectionListDemo from './components/SectionListDemo';
import ClassComponent from './components/ClassComponent'
import StateAndPropsInClassComponent from './components/StateAndPropsInClassComponent';
import LifeCycleWithUseEffect from './components/LifeCycleWithUseEffect';
import UserForm from './components/UserForm';
import CardComponent from './components/CardComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
<CardComponent/>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
