import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Saves(props) {
    return (
        <View>
            <View style={{height: 100, aspectRatio: 1, backgroundColor: '#005683', borderRadius: 10, flex: 0, alignItems: 'center', justifyContent: 'flex-end', marginTop: 10}}>
                <Text style={{color: '#fff', fontSize: 12, marginBottom: 2}}>{props.stat} Save</Text>
                <View style={{height: "80%", width: '100%', backgroundColor: 'lightgray', borderRadius: 10, flex: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput style={{fontSize: 32,}}>10</TextInput>
                </View>     
            </View>
        </View>
    )
}