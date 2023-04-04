import * as React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import StatScore from "./statScore";
import { useState } from "react";

export default function CharacterScreen() {

  const [strength, setStrength] = useState("10");
  const strMod = Math.floor((strength - 10) / 2);

  const [dexterity, setDexterity] = useState("10");
  const dexMod = Math.floor((dexterity - 10) / 2);

  const [constitution, setConstitution] = useState("10");
  const conMod = Math.floor((constitution - 10)/2);

  const [intelligence, setIntelligence] = useState("10");
  const intMod = Math.floor((intelligence - 10)/2);

  const [wisdom, setWisdom] = useState("10");
  const wisMod = Math.floor((wisdom - 10)/2);

  const [charisma, setCharisma] = useState("10");
  const chaMod = Math.floor((charisma - 10)/2);

  let armor = 10
  const AC = (armor + dexMod);

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
          <Text
            style={styles.inputText}
          >{AC}</Text>
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
          <Text
            style={styles.inputText}
          >{"+"+dexMod}</Text>
        </View>

        <View style={styles.subContainerBar}>
          <Text style={styles.labelText}>Proficiency</Text>
          <TextInput
            placeholder="..."
            keyboardType="number-pad"
            style={styles.inputText}
          >+2</TextInput>
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
            onChangeText={(newStrength) => setStrength(newStrength)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {strength}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {strMod}
            </Text>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            onChangeText={(newDexterity) => setDexterity(newDexterity)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {dexterity}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {dexMod}
            </Text>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            onChangeText={(newConstitution) => setConstitution(newConstitution)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {constitution}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {conMod}
            </Text>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            onChangeText={(newIntelligence) => setIntelligence(newIntelligence)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {intelligence}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {intMod}
            </Text>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            onChangeText={(newWisdom) => setWisdom(newWisdom)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {wisdom}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {wisMod}
            </Text>
          </View>
        </View>
        <View style={styles.statScore}>
          <TextInput
            onChangeText={(newCharisma) => setCharisma(newCharisma)}
            style={[styles.inputText, { position: "absolute", left: 25 }]}
          >
            {charisma}
          </TextInput>
          <View style={styles.statBonus}>
            <Text style={styles.inputText}>
              {chaMod}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View>
          <StatScore skill="Acrobatics" />
        </View>
        <View>
          <StatScore skill="Stealth" />
        </View>
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
