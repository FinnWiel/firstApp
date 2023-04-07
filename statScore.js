import * as React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

export default function StatScore(props) {
  const [checked, setChecked] = useState("second");

  let regularScore = Math.floor((props.type - 10) / 2)

  return (
    <View
      style={[
        styles.containerBar,
        { height: 50, borderRadius: 30, top: 50, margin: 5, width: 320 },
      ]}
    >
      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked(checked === "first" ? "second" : "first")}
          color="#005683"
        />
        <Text style={{ fontSize: 24 }}>{props.skill}</Text>
      </View>

      <View
        style={{
          height: 40,
          width: 60,
          margin: 10,
          borderRadius: 20,
          backgroundColor: "lightgray",
          flex: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput style={{ fontSize: 24 }}>
          {checked === "first"
            ? props.proficiency + regularScore >= 0
              ? "+" + (props.proficiency + regularScore)
              : props.proficiency + regularScore
            : regularScore >= 0
            ? "+" + regularScore
            : regularScore}
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBar: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
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
