import * as React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CombatScreen from './Combat';


const Tab = createBottomTabNavigator();


function CharacterScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}

function InventoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}


function SpellScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}

function NoteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName= "Combat"
    screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        height: 60,
      },
      tabBarActiveTintColor: '#005683',
      tabBarShowLabel: false,
      headerShown: false,
    }} >
      <Tab.Screen name="Combat" component={CombatScreen} options={{headertabBarLabel: 'Combat', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sword" color={color} size={size} />
          )}}/>
      <Tab.Screen name="Inventory" component={InventoryScreen} options={{tabBarLabel: 'Inventory', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bag-personal-outline" color={color} size={size} />
          )}}/>
      <Tab.Screen name="Character" component={CharacterScreen} options={{tabBarLabel: 'Character', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          )}}/>
      <Tab.Screen name="Spells" component={SpellScreen} options={{tabBarLabel: 'Spells', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size} />
          )}}/>
      <Tab.Screen name="Notes" component={NoteScreen} options={{tabBarLabel: 'Notes', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={size} />
          )}}/>
    </Tab.Navigator> 
  );
}


export default function App() {
  
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}