import * as React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function CombatScreen() {

    const initialState = {
      checkboxFailOne: false,
      checkboxFailTwo: false,
      checkboxFailThree: false,
      checkboxSuccesOne: false,
      checkboxSuccesTwo: false,
      checkboxSuccesThree: false,
    };
  
    const [checked, setChecked] = useState(initialState);
  
    return (
      <View style={{flex: 1, alignItems: 'center', gap: 20}}> 
 
        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10, top: 50}}>
          <View style={styles.circle}>
            <Text style={styles.labelText}>AC</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
          </View>

          <View style={styles.circle}>
            <Text style={styles.labelText}>HP</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
            <Text style={{fontSize: 10}}>MAX HP 
              <TextInput placeholder='...' keyboardType='number-pad'></TextInput>
            </Text>
          </View>

          <View style={styles.circle}>
            <Text style={styles.labelText}>Hit Dice</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 0}}>
              <TextInput placeholder='.' keyboardType='number-pad' style={styles.inputText}></TextInput>
              <Text style={styles.inputText}>d</Text>
              <TextInput placeholder='.' keyboardType='number-pad' style={styles.inputText}></TextInput>
            </View>
          </View>
        </View>
  
        <View style={styles.containerBar}>
          <View style={styles.subContainerBar}>
            <Text style={styles.labelText}>Speed</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
          </View>

          <View style={styles.subContainerBar}>
            <Text style={styles.labelText}>Initiative</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
          </View>

          <View style={styles.subContainerBar}>
            <Text style={styles.labelText}>Proficiency</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
          </View>

          <View style={styles.subContainerBar}>
            <Text style={styles.labelText}>Passive Wis</Text>
            <TextInput placeholder='...' keyboardType='number-pad' style={styles.inputText}></TextInput>
          </View>
        </View>
  
        <View style={styles.containerBar}>
          <View style={[styles.subContainerBar, {width: '45%'}]}>
            <Text style={styles.labelText}>Saves</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 10,}}>
              <Checkbox value={checked.checkboxSuccesOne} onValueChange={value => setChecked({...checked, checkboxSuccesOne: value,})}/>
              <Checkbox value={checked.checkboxSuccesTwo} onValueChange={value => setChecked({...checked, checkboxSuccesTwo: value,})}/>
              <Checkbox value={checked.checkboxSuccesThree} onValueChange={value => setChecked({...checked, checkboxSuccesThree: value,})}/>
            </View>  
          </View>

          <View style={[styles.subContainerBar, {width: '45%'}]}>
            <Text style={styles.labelText} >Fails</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 10,}}>
              <Checkbox value={checked.checkboxFailOne} onValueChange={value => setChecked({...checked, checkboxFailOne: value,})}/>
              <Checkbox value={checked.checkboxFailTwo} onValueChange={value => setChecked({...checked, checkboxFailTwo: value,})}/>
              <Checkbox value={checked.checkboxFailThree} onValueChange={value => setChecked({...checked, checkboxFailThree: value,})}/>
            </View>
          </View>
        </View>

        <View style={[styles.containerBar, {height: 80,}]}>
          <View style={[styles.subContainerBar, {width: '45%', gap: 0}]}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Bonus</Text>
            <TextInput keyboardType='number-pad' placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Damage</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 0}}>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
              <Text style={styles.inputText}>d</Text>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
            </View>         
          </View>
        </View>

        <View style={[styles.containerBar, {height: 80,}]}>
          <View style={[styles.subContainerBar, {width: '45%', gap: 0}]}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Bonus</Text>
            <TextInput keyboardType='number-pad' placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Damage</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 0}}>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
              <Text style={styles.inputText}>d</Text>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
            </View>         
          </View>        
        </View>

        <View style={[styles.containerBar, {height: 80,}]}>
          <View style={[styles.subContainerBar, {width: '45%', gap: 0}]}>
            <Text style={styles.labelText}>Name</Text>
            <TextInput placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Bonus</Text>
            <TextInput keyboardType='number-pad' placeholder='...' style={[styles.inputText, {top: 0}]}></TextInput>
          </View>

          <View style={[styles.subContainerBar, {gap: 0}]}>
            <Text style={styles.labelText}>Damage</Text>
            <View style={{ flex: 0, flexDirection: 'row', gap: 0}}>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
              <Text style={styles.inputText}>d</Text>
              <TextInput keyboardType='number-pad' placeholder='.' style={[styles.inputText, {top: 0}]}></TextInput>
            </View>         
          </View>
        </View>
      </View>   
    );
  }

  const styles = StyleSheet.create({
    circle: {
      borderRadius: 50, height: 100, width: 100, backgroundColor: '#fff',  flex: 0,justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: {width: 0, height: 5}, shadowOpacity: 0.3, shadowRadius: 6, elevation: 6,
    },
    labelText: {
      color: '#000',
    },
    inputText: {
      fontSize: 32,
    },
    containerBar: {
      flex: 0, flexDirection: 'row', justifyContent:'center', alignItems: 'center', backgroundColor: '#fff', width: '90%', height: 100, top: 50, borderRadius: 20, shadowColor: '#000', shadowOffset: {width: 0, height: 5}, shadowOpacity: 0.3, shadowRadius: 6, elevation: 6,
    },
    subContainerBar : {
      flex: 0, justifyContent: 'center', alignItems:'center', gap: 10, margin: 5, height: '90%', width: '20%', backgroundColor: 'transparent'
    },
    checkbox: {
      margin: 5,
    },
  });