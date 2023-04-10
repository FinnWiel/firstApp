import * as React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";


export default function StatBar(props) {
    return (
        <View style={styles.containerBar}>
        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Speed</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          >
            {props.raceId.map((x) => x.speed) * 5 || 0}
          </TextInput>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Initiative</Text>
          <Text style={styles.inputText}>
            {props.dexMod < 0 ? props.dexMod : "+" + props.dexMod}
          </Text>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Proficiency</Text>
          <Text style={styles.inputText}>+{props.proficiency}</Text>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Passive Wis</Text>
          <Text style={styles.inputText}>{props.wisMod + 10}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    circle: {
      borderRadius: 50,
      height: 100,
      width: 100,
      backgroundColor: "#fff",
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 6,
    },
    labelText: {
      color: "#000",
    },
    inputText: {
      fontSize: 32,
    },
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
    subContainerBar: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      margin: 5,
      height: "90%",
      width: "20%",
      backgroundColor: "transparent",
    },
    checkbox: {
      margin: 5,
    },
    statContainer: {
      flex: 0,
      flexDirection: "row",
      gap: 20,
      top: 50,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    statScore: {
      flex: 0,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
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
  