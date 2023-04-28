import * as React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { backgrounds } from "./Data/BackgroundData";
import { classes } from "./Data/ClassData";
import { races } from "./Data/RaceData";
import StatBar from "./components/statBar";
import Saves from "./components/Saves";
import StatBlock from "./components/statBlock";
import StatScore from "./components/statScore";
import DeathSaves from "./components/Deathsave";

export default function CharacterScreen() {
  //Class
  const [characterClass, setCharacterClass] = useState();
  const classIdx = classes.filter((clas) => clas.name === characterClass);
  const selectedSavingthrows = classes
    .find((cls) => cls.name === characterClass)
    ?.savingThrow.map((sub) => sub.save);

  //Subclass
  const selectedSubclasses = classes
    .find((cls) => cls.name === characterClass)
    ?.subclass.map((sub) => sub.subname);
  const [characterSubclass, setCharacterSublass] = useState();

  //Race
  const [characterRace, setCharacterRace] = useState();
  const raceIdx = races.filter((race) => race.name === characterRace);

  //Background
  const [characterBackground, setCharacterBackground] = useState();

  //Stats
  const [strenghtBonus, setStrenghtBonus] = useState("10");
  const [dexterityBonus, setDexterityBonus] = useState("10");
  const [constitutionBonus, setConstitutionBonus] = useState("10");
  const [intelligenceBonus, setIntelligenceBonus] = useState("10");
  const [wisdomBonus, setWisdomBonus] = useState("10");
  const [charismaBonus, setCharismaBonus] = useState("10");

  //Mods
  const strMod = Math.floor((strenghtBonus - 10) / 2);
  const dexMod = Math.floor((dexterityBonus - 10) / 2);
  const conMod = Math.floor((constitutionBonus - 10) / 2);
  const intMod = Math.floor((intelligenceBonus - 10) / 2);
  const wisMod = Math.floor((wisdomBonus - 10) / 2);
  const chaMod = Math.floor((charismaBonus - 10) / 2);

  //Level
  const [level, setLevel] = useState(1);

  //AC
  let armor = 10;
  const AC = armor + Math.floor((dexterityBonus - 10) / 2);

  //Profficiency
  let proficiencyBonus =
    level <= 5
      ? 2
      : level < 9
      ? 3
      : level < 13
      ? 4
      : level < 17
      ? 5
      : level < 21
      ? 6
      : 0;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, alignItems: "center", gap: 20 }}
    >
      <View
        style={[
          styles.containerBar,
          { height: 40, justifyContent: "space-around" },
        ]}
      >
        <TextInput style={{ fontSize: 20 }} placeholder="Name"></TextInput>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Level</Text>
          <TextInput
            style={{ fontSize: 20 }}
            keyboardType="number-pad"
            onChangeText={(newLevel) => setLevel(newLevel)}
          >
            {level}
          </TextInput>
        </View>
      </View>
      <View
        style={{
          flex: 0,
          justifyContent: "space-between",
          height: 40,
          width: "90%",
          flexDirection: "row",
          top: 50,
          gap: 15,
        }}
      >
        <View>
          <SelectDropdown
            defaultButtonText="Class"
            buttonStyle={[
              styles.containerBar,
              { top: 0, height: 40, width: "90%" },
            ]}
            dropdownStyle={{ marginTop: -25, borderRadius: 10 }}
            selectedRowStyle={{ backgroundColor: "#005683" }}
            selectedRowTextStyle={{ color: "#fff" }}
            data={classes.map((x) => x.name)}
            onSelect={(newCharacterClass) =>
              setCharacterClass(newCharacterClass)
            }
          ></SelectDropdown>
        </View>
        <View>
          <SelectDropdown
            defaultButtonText="Race"
            buttonStyle={[
              styles.containerBar,
              { top: 0, height: 40, width: "90%" },
            ]}
            dropdownStyle={{ marginTop: -25, borderRadius: 10 }}
            selectedRowStyle={{ backgroundColor: "#005683" }}
            selectedRowTextStyle={{ color: "#fff" }}
            data={races.map((x) => x.name)}
            onSelect={(newCharacterRace) => setCharacterRace(newCharacterRace)}
          ></SelectDropdown>
        </View>
      </View>
      <View
        style={{
          flex: 0,
          justifyContent: "space-between",
          height: 40,
          width: "90%",
          flexDirection: "row",
          top: 50,
          gap: 15,
        }}
      >
        <View>
          <SelectDropdown
            defaultButtonText="Subclass"
            buttonStyle={[
              styles.containerBar,
              { top: 0, height: 40, width: "90%" },
            ]}
            dropdownStyle={{ marginTop: -25, borderRadius: 10 }}
            selectedRowStyle={{ backgroundColor: "#005683" }}
            selectedRowTextStyle={{ color: "#fff" }}
            buttonTextStyle={{ fontSize: 12 }}
            rowTextStyle={{ fontSize: 12 }}
            data={selectedSubclasses}
            onSelect={(newCharacterSublass) =>
              setCharacterSublass(newCharacterSublass)
            }
          ></SelectDropdown>
        </View>
        <View>
          <SelectDropdown
            defaultButtonText="Background"
            buttonStyle={[
              styles.containerBar,
              { top: 0, height: 40, width: "90%" },
            ]}
            dropdownStyle={{ marginTop: -25, borderRadius: 10 }}
            buttonTextStyle={{ fontSize: 12 }}
            selectedRowStyle={{ backgroundColor: "#005683" }}
            selectedRowTextStyle={{ color: "#fff" }}
            data={backgrounds.map((x) => x.name)}
            onSelect={(newCharacterBackground) =>
              setCharacterBackground(newCharacterBackground)
            }
          ></SelectDropdown>
        </View>
      </View>

      <View style={{ flex: 0, flexDirection: "row", top: 50, gap: 10 }}>
        <View style={styles.circle}>
          <Text style={styles.labelText}>AC</Text>
          <Text style={styles.inputText}>{AC}</Text>
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
            >
              {classIdx.map((x) => x.hitDice) || 0}
            </TextInput>
          </View>
        </View>
      </View>

      <DeathSaves></DeathSaves>

      <StatBar
        raceId={raceIdx}
        classId={classIdx}
        dexMod={dexMod}
        proficiency={proficiencyBonus}
        wisMod={wisMod}
      />

      <View style={styles.statContainer}>
        <StatBlock
          stat="Strenght"
          state={strenghtBonus}
          setState={setStrenghtBonus}
        />
        <StatBlock
          stat="Dexterity"
          state={dexterityBonus}
          setState={setDexterityBonus}
        />
        <StatBlock
          stat="Constitution"
          state={constitutionBonus}
          setState={setConstitutionBonus}
        />
        <StatBlock
          stat="Intelligence"
          state={intelligenceBonus}
          setState={setIntelligenceBonus}
        />
        <StatBlock
          stat="Wisdom"
          state={wisdomBonus}
          setState={setWisdomBonus}
        />
        <StatBlock
          stat="Charisma"
          state={charismaBonus}
          setState={setCharismaBonus}
        />
      </View>

      <View style={[styles.statContainer, { marginHorizontal: 10, gap: 5 }]}>
        <Saves stat="Strenght" mod={strenghtBonus}/>
        <Saves stat="Dexterity" mod={dexterityBonus}/>
        <Saves stat="Constitution" mod={constitutionBonus}/>
        <Saves stat="Intelligence" mod={intelligenceBonus}/>
        <Saves stat="Wisdom" mod={wisdomBonus}/>
        <Saves stat="Charisma" mod={charismaBonus}/>
      </View>

      <View
        style={{
          flex: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <StatScore
          skill="Acrobatics"
          proficiency={proficiencyBonus}
          type={dexterityBonus}
        />
        <StatScore
          skill="Animal Handiling"
          proficiency={proficiencyBonus}
          type={wisdomBonus}
        />
        <StatScore
          skill="Arcana"
          proficiency={proficiencyBonus}
          type={intelligenceBonus}
        />
        <StatScore
          skill="Athletics"
          proficiency={proficiencyBonus}
          type={strenghtBonus}
        />
        <StatScore
          skill="Deception"
          proficiency={proficiencyBonus}
          type={charismaBonus}
        />
        <StatScore
          skill="History"
          proficiency={proficiencyBonus}
          type={intelligenceBonus}
        />
        <StatScore
          skill="Insight"
          proficiency={proficiencyBonus}
          type={wisdomBonus}
        />
        <StatScore
          skill="Intimidation"
          proficiency={proficiencyBonus}
          type={charismaBonus}
        />
        <StatScore
          skill="Investigation"
          proficiency={proficiencyBonus}
          type={intelligenceBonus}
        />
        <StatScore
          skill="Medicine"
          proficiency={proficiencyBonus}
          type={wisdomBonus}
        />
        <StatScore
          skill="Nature"
          proficiency={proficiencyBonus}
          type={intelligenceBonus}
        />
        <StatScore
          skill="Perception"
          proficiency={proficiencyBonus}
          type={wisdomBonus}
        />
        <StatScore
          skill="Performance"
          proficiency={proficiencyBonus}
          type={charismaBonus}
        />
        <StatScore
          skill="Persuasion"
          proficiency={proficiencyBonus}
          type={charismaBonus}
        />
        <StatScore
          skill="Religion"
          proficiency={proficiencyBonus}
          type={intelligenceBonus}
        />
        <StatScore
          skill="Sleight of Hand"
          proficiency={proficiencyBonus}
          type={dexterityBonus}
        />
        <StatScore
          skill="Stealth"
          proficiency={proficiencyBonus}
          type={dexterityBonus}
        />
        <StatScore
          skill="Survival"
          proficiency={proficiencyBonus}
          type={wisdomBonus}
        />
      </View>

      <View style={[styles.containerBar, { width: 0 }]}></View>
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
