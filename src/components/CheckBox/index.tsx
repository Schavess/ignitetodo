import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AppText as Text } from "../../components/AppText";

import { styles } from "./styles";

type CheckboxProps = {
  label?: string;
  onCheck: (checked: boolean) => void;
  isChecked: boolean;
};

export const Checkbox = ({ label, onCheck, isChecked }: CheckboxProps) => {
  const handlePress = () => {
    onCheck(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={handlePress}>
      <View
        style={[styles.checkbox, isChecked ? styles.checkedCheckbox : null]}
      >
        {isChecked && <Text style={styles.checkboxLabel}>✓</Text>}
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
};
