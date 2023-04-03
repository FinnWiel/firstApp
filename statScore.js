import * as React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function statScore(props) {
    return(
        <View style={[styles.containerBar, {height: 50, borderRadius: 30, top: 50, margin: 5, width: 320}]}>
          <Text style={{position:'absolute', left: 20, fontSize: 24,}}>props</Text>
          <View style={{height: 40, width: 60, position: 'absolute', right: 0, margin: 10, borderRadius: 20, backgroundColor: 'lightgray', flex: 0, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput placeholder="..." style={{fontSize: 24,}}></TextInput>
          </View>
        </View>
    );
}


const styles = StyleSheet.create( {
    containerBar: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        width: "90%",
        height: 100,
        top: 50,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
      },
});
