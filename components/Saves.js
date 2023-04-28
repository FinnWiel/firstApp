import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Saves(props) {

  return (
    <View>
      <View style={styles.statScore}>
        <Text style={{ color: "#fff", fontSize: 12, marginBottom: 3 }}>
          {props.stat} Save
        </Text>
        <View
          style={{
            height: "80%",
            width: "100%",
            backgroundColor: "white",
            borderRadius: 10,
            flex: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput style={{ fontSize: 32 }}>{Math.floor((props.mod - 10) / 2)}</TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statScore: {
    flex: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 100,
    width: 100,
    marginTop: 10,
    backgroundColor: "#005683",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderRadius: 10,
  },
});
