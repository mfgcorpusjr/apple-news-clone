import { useState } from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { Menu } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

type DropdownProps = {
  options: string[];
  value: string;
  onChange: (option: string) => void;
};

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleOptionChange = (option: string) => {
    onChange(option);
    setIsVisible(false);
  };

  return (
    <Menu
      visible={isVisible}
      onDismiss={() => setIsVisible(false)}
      mode="flat"
      anchorPosition="bottom"
      contentStyle={{ backgroundColor: "white" }}
      anchor={
        <Pressable
          style={styles.anchorContainer}
          onPress={() => setIsVisible(true)}
        >
          <Text style={styles.anchorText}>{value}</Text>
          <Ionicons name="chevron-down-outline" size={24} color="orangered" />
        </Pressable>
      }
    >
      {options.map((option) => (
        <Menu.Item
          key={option}
          onPress={() => handleOptionChange(option)}
          title={option}
        />
      ))}
    </Menu>
  );
}

const styles = StyleSheet.create({
  anchorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  anchorText: {
    color: "orangered",
    fontSize: 16,
    fontWeight: "bold",
  },
});
