import React, { Dispatch, SetStateAction } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Indicator from "./Indicator";
import { scale } from "react-native-size-matters";
import Button from "./PrimaryButton";
import { WIDTH } from "../utlis/constants";
import { useTheme } from "../hooks/useTheme";
import { useDispatch } from "react-redux";
import { setFirstLaunch } from "../redux/slices/onboardingSlice";
import { useTranslation } from "react-i18next";

const OnboardingCard: React.FC<OnboardingCardProps> = ({
  image,
  currentIndex,
  totalSlides,
  onPress,
  setCurrentIndex,
  flatListRef,
}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  const isLastSlide = currentIndex === totalSlides - 1;
  const dispatch = useDispatch();
  const handleNextPress = () => {
    if (!isLastSlide && flatListRef.current) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setCurrentIndex(nextIndex); // Update the index state
    }
    if (currentIndex === 3) {
      dispatch(setFirstLaunch(false));
    }
  };
  const handleSkipPress = () => {
    if (flatListRef.current) {
      const lastIndex = totalSlides - 1;
      flatListRef.current.scrollToIndex({ animated: true, index: lastIndex });
      setCurrentIndex(lastIndex);
    }
  };

  return (
    <SafeAreaView
      style={styles.card}
    >
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={{...styles.title,color: theme["primaryText"]}}>{t('welcome')}</Text>
          <Text style={{...styles.description,color: theme["secondaryText"]}}>{t('description')}</Text>
        </View>
        <Indicator
          currentIndex={currentIndex}
          totalSlides={totalSlides}
          onPress={onPress}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={isLastSlide ? "Let's Get Started" : "Next"} // Change button text on last slide
          onPress={handleNextPress} // Trigger the scroll on Next press
          style={{
            ...styles.customButtonStyle,
            backgroundColor: theme["primary"],
          }}
          textStyle={{ color: theme["white"] }}
        />
        {!isLastSlide && (
          <Button
            title="Skip"
            onPress={handleSkipPress} // Trigger the scroll on Skip press
            // style={styles.skipButtonStyle}
            textStyle={{
              ...styles.customButtonTextStyle,
              color: theme["primaryText"],
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingCard;

const styles = StyleSheet.create({
  customButtonTextStyle: {
    fontSize: scale(16),
  },

  customButtonStyle: {
    width: WIDTH * 0.9,
    borderRadius: 30,
    padding: 15,
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center", 
    height: scale(80),
  },
  card: {
    flex: 1,
    alignItems: "center",
    paddingVertical: scale(8),
    justifyContent: "space-between",
  },
  image: {
    width: scale(320),
    height: scale(300),
    borderRadius: scale(20),
    alignSelf:"center"
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontFamily:'NunitoSans-Bold',
    paddingHorizontal:scale(10)
  },
  description: {
    fontSize: scale(13),
    textAlign: "center",
    marginTop: scale(20),
    fontFamily:'NunitoSans-Regular'
    
  },
  textContainer: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
