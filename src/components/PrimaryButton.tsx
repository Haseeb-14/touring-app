// CustomButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    // color: LIGHT_THEME.white,
  },
});

export default Button;
