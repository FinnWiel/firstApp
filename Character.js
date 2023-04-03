import * as React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import statScore from "./statScore";

export default function CharacterScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, alignItems: "center", gap: 20 }}
    >
      <View style={[styles.containerBar, { height: 40 }]}>
        <TextInput placeholder="Name"></TextInput>
      </View>
      <View
        style={{
          flex: 0,
          height: 40,
          width: "90%",
          flexDirection: "row",
          top: 50,
          gap: 30,
        }}
      >
        <View
          style={[styles.containerBar, { height: 40, width: "45%", top: 0 }]}
        >
          <TextInput placeholder="Race"></TextInput>
        </View>
        <View
          style={[styles.containerBar, { height: 40, width: "45%", top: 0 }]}
        >
          <TextInput placeholder="Class"></TextInput>
        </View>
      </View>

      <View style={{ flex: 0, flexDirection: "row", top: 50, gap: 10 }}>
        <View style={styles.circle}>
          <Text style={styles.labelText}>AC</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
        </View>

        <View style={styles.circle}>
          <Text style={styles.labelText}>HP</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
          <Text style={{ fontSize: 10 }}>
            MAX HP
            <TextInput placeholder="..." keyboardType="number-pad"></TextInput>
          </Text>
        </View>

        <View style={styles.circle}>
          <Text style={styles.labelText}>Hit Dice</Text>
          <View style={{ flex: 0, flexDirection: "row", gap: 0 }}>
            <TextInput
              placeholder="."
              keyboardType="number-pad"
              style={styles.inputText}
            ></TextInput>
            <Text style={styles.inputText}>d</Text>
            <TextInput
              placeholder="."
              keyboardType="number-pad"
              style={styles.inputText}
            ></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.containerBar}>
        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Speed</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Initiative</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Proficiency</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Passive Wis</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          ></TextInput>
        </View>
      </View>
      <View style={styles.statContainer}>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            placeholder="..."
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          ></TextInput>
          <View style={styles.statBonus}>
            <TextInput placeholder="..." style={styles.inputText}></TextInput>
          </View>
        </View>
      </View>

      <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', width: '100%',}}>
        <View>{statScore()}</View>
        <View>{statScore()}</View>
        <View>{statScore()}</View>
        <View>{statScore()}</View>
        <View>{statScore()}</View>
      </View>
      

      <View style={[styles.containerBar, { width: 0, height: 400 }]}></View>
    </ScrollView>
  );
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
