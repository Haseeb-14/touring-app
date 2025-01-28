import React, { ReactElement } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { scale } from "react-native-size-matters";
import { useTheme } from "../hooks/useTheme";

const Indicator = ({
  currentIndex,
  totalSlides,
  onPress,
}: IndicatorProps): ReactElement => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(index)}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentIndex ? theme["primary"] : theme["inactive"],
              width: scale(index === currentIndex ? 20 : 8),
            },
          ]}
        />
      ))}
    </View>
  );
};

export default React.memo(Indicator);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: scale(8),
    borderRadius: scale(4),
    marginHorizontal: scale(4),
  },
});
