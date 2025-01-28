import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { scale, vs } from "react-native-size-matters";
import { useTheme } from "../hooks/useTheme";

const Input: React.FC<CustomTextInputProps> = ({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry = false,
  leftIcon,
}) => {
  const theme = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.inputContainer}>
          <View style={styles.iconTextInputContainer}>
            {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: theme["loginbackground"],
                borderColor: theme["signuptext"],
                paddingLeft: leftIcon ? scale(40) : scale(12), // Padding to make space for icon
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={theme["signuptext"]}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: scale(10),
  },
  iconTextInputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    left: scale(10),
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    paddingVertical: scale(12),
    paddingRight: scale(12), // Standard padding on the right
    borderRadius: scale(30),
    height: scale(45),
    maxHeight: scale(45),
    flex: 1,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: scale(4),
    maxWidth: scale(150),
  },
});

export default Input;
