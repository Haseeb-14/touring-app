import React, { ReactElement, useRef, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import OnboardingCard from "../components/OnboardingCard";
import { WIDTH } from "../utlis/constants";
import { useTheme } from "../hooks/useTheme";
import { useTranslation } from "react-i18next";

const onboardingData = [
  {
    title: "Your Ultimate Van life and Camping Companion",
    description:
      "Search for campsites, parking spots, and services effortlessly. Our geolocation feature brings nearby attractions right to your fingertips—so you spend less time searching and more time adventuring.",
    image: require("../../assets/images/FirstCard.png"), // Replace with your image path
  },
  {
    title: "Find the Perfect Spot",
    description:
      "Discover legal spots, essential services, and hidden gems tailored for vanlifers, campers, and nomadic travelers like you. Wherever your journey takes you, we’ve got the road covered.",
    image: require("../../assets/images/SecondCard.png"), // Replace with your image path
  },
  {
    title: "Customize Your Journey",
    description:
      "Choose between dark and light modes, tailor the map details to your preferences, and filter what you want to see. Loko Road adapts to how you like to travel.",
    image: require("../../assets/images/ThirdCard.png"), // Replace with your image path
  },
  {
    title: "Start Your Adventure",
    description:
      "Discover the best camping spots, essential services, and scenic routes. Whether you're a solo traveler or exploring with family, let Loko Road guide you to the perfect destination.",
    image: require("../../assets/images/FourthCard.png"), // Replace with your image path
  },
];

const Onboarding = ({ navigation }: OnboardingProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const theme = useTheme();

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset?.x;
    const currentIndex = Math.round(offsetX / WIDTH);
    setCurrentIndex(currentIndex);
  };
  const handleIndicatorPress = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index });
    }
  };
  return (
    <SafeAreaView
      style={{ ...styles.listContainer, backgroundColor: theme["background"] }}
    >
      <FlatList
        ref={flatListRef} // Pass the ref here
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <OnboardingCard
              title={item.title}
              description={item.description}
              image={item.image}
              currentIndex={currentIndex}
              totalSlides={onboardingData.length}
              onPress={handleIndicatorPress}
              setCurrentIndex={setCurrentIndex}
              flatListRef={flatListRef} // Pass the flatListRef
            />
          </View>
        )}
        onScroll={handleScroll}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: WIDTH,
 
  },
});
