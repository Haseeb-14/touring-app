// CustomButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { scale, vs } from "react-native-size-matters";
import { useTheme } from "../hooks/useTheme";

const IconButton: React.FC<CustomButtonProps> = ({ onPress, Icon }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        ...styles.socialButton,
        backgroundColor: theme["loginbackground"],
        borderColor: theme["signuptext"],
      }}
      onPress={onPress}
    >
      <View>{Icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    borderWidth: 1,
    padding: scale(10), // Adjust padding as needed
    borderRadius: scale(32), // Adjust for rounded corners
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IconButton;
