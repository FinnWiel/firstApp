import React from "react";
import { Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function DeathSaves() {
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
    <View style={styles.containerBar}>
      <View style={[styles.subContainerBar, { width: "45%" }]}>
        <Text style={styles.labelText}>Saves</Text>
        <View style={{ flex: 0, flexDirection: "row", gap: 10 }}>
          <Checkbox
            value={checked.checkboxSuccesOne}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxSuccesOne: value })
            }
            color="#005683"
          />
          <Checkbox
            value={checked.checkboxSuccesTwo}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxSuccesTwo: value })
            }
            color="#005683"
          />
          <Checkbox
            value={checked.checkboxSuccesThree}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxSuccesThree: value })
            }
            color="#005683"
          />
        </View>
      </View>

      <View style={{height: 70, width: 2, backgroundColor: 'lightgray'}}></View>

      <View style={[styles.subContainerBar, { width: "45%" }]}>
        <Text style={styles.labelText}>Fails</Text>
        <View style={{ flex: 0, flexDirection: "row", gap: 10 }}>
          <Checkbox
            value={checked.checkboxFailOne}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxFailOne: value })
            }
            color="#005683"
          />
          <Checkbox
            value={checked.checkboxFailTwo}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxFailTwo: value })
            }
            color="#005683"
          />
          <Checkbox
            value={checked.checkboxFailThree}
            onValueChange={(value) =>
              setChecked({ ...checked, checkboxFailThree: value })
            }
            color="#005683"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    labelText: {
      color: "#000",
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
  });
  