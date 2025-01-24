import { Alert, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { ReactElement } from "react";
import Button from "../components/PrimaryButton";

const Home = (): ReactElement => {
  const handlePress = () => {
    Alert.alert("Button pressed!", "You pressed the button!");
  };

  return (
    <SafeAreaView>
      <Button title="Next" onPress={handlePress} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
