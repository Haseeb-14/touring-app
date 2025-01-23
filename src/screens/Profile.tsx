import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";
import { RootState } from "../redux/store";
import { useTheme } from "../hooks/useTheme";

const Profile = (): ReactElement => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme["background"], flex: 1 }}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(setTheme("dark"))}
        >
          <Text style={styles.buttonText}>Dark Mode</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(setTheme("light"))}
        >
          <Text style={styles.buttonText}>Light Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#000", // Adjust the text color as needed
  },
  buttonContainer: {
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50", // A green background color
    padding: 12,
    borderRadius: 8,
    width: "80%", // Button width relative to container
    alignItems: "center", // Center text horizontally
    marginVertical: 8, // Space between buttons
  },
  buttonText: {
    color: "#fff", // White text color
    fontSize: 18,
    fontWeight: "600",
  },
});
