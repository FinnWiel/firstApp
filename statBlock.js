import * as React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export function StatBlock(props) {
  let statBonusMod = Math.floor((props.state - 10) / 2);

  return (
    <View
      style={{
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#005683",
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 16, color: "#fff", padding: 5 }}>
        {props.stat}
      </Text>
      <View style={styles.statScore}>
        <TextInput
          onChangeText={(newStatBonus) => props.setState(newStatBonus)}
          style={[styles.inputText, { position: "absolute", left: 25 }]}
        >
          {props.state}
        </TextInput>
        <View style={styles.statBonus}>
          <Text style={styles.inputText}>
            {statBonusMod > 0 ? "+" + statBonusMod : statBonusMod}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    fontSize: 32,
  },
  statScore: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderRadius: 10,
  },
  statBonus: {
    backgroundColor: "lightgray",
    height: 130,
    width: 65,
    position: "absolute",
    right: 0,
    borderRadius: 5,
    margin: 10,
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
