import { ReactNode } from "react";

declare global {

  interface LoginFormInputs {
    email: string;
    password: string;
  }
  type CustomTextInputProps = {
    control: any;
    name: string;
    rules?: object;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon:ReactNode;
    rightIcon:ReactNode;
  };
  type CustomButtonProps = {
    Icon: React.ReactElement;
    onPress: () => void;
    buttonStyle?: object;
    textStyle?: object;
  };
  
  interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
  }
  
  interface LanguageDetector {
    type: 'languageDetector';
    async: boolean;
    detect: (callback: (lng: string) => void) => void;
    init: () => void;
    cacheUserLanguage: (lng: string) => void;
  }
  interface IndicatorProps {
    currentIndex: number;
    totalSlides: number;
    onPress: (index: number) => void;
  }
  
  interface OnboardingCardProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
    currentIndex: number;
    totalSlides: number;
    onPress: (index: number) => void;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    flatListRef: React.RefObject<FlatList<any>>; // Add the ref for FlatList here
  }
  
  interface OnboardingProps {
    navigation: OnboardingScreenNavigationProp;
    route: OnboardingScreenRouteProp;
  }
  
  interface ISlides {
    title: string;
    description: string;
  }

  // navigation
  type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
  };

  type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, Screen>;
}

export type OnboardingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
>;
