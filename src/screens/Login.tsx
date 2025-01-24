import React, { ReactElement } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { scale, vs } from "react-native-size-matters";
import { Apple, Facebook, Google, Logo,MessageIcon,BagIcon } from "../utlis/icons";
import Input from "../components/Input";
import Button from "../components/PrimaryButton";
import { useTranslation } from "react-i18next";
import { WIDTH } from "../utlis/constants";
import { useTheme } from "../hooks/useTheme";
import IconButton from "../components/IconButton";

const Login = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const theme = useTheme();
  const { t } = useTranslation();
  const handleLogin = () => {
    // Handle login logic here
  };
  return (
    <SafeAreaView
      style={{ ...styles.safeArea, backgroundColor: theme["background"] }}
    >
      <View style={styles.logo}>
        <Logo />
        <Text style={{ ...styles.topText, color: theme["secondaryText"] }}>
          {t("loginInfo")}
        </Text>
      </View>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Input
          leftIcon={<MessageIcon width={scale(15)} height={scale(15)} />}
          control={control}
          name="email"
          rules={{
            required: "*Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Enter a valid email address",
            },
          }}
          placeholder="Enter your email"
        />

        {/* Password Input */}

        <Input
          leftIcon={<BagIcon width={scale(15)} height={scale(15)} />}
        //   rightIcon={
        //     <TouchableOpacity
        //         style={{ padding: scale(4) }}
        //         onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        //     >
        //         {isPasswordVisible ? (
        //             <ShowIcon width={scale(15)} height={scale(15)} />
        //         ) : <HideIcon width={scale(15)} height={scale(15)} />}
        //     </TouchableOpacity>
        // }
          control={control}
          name="password"
          rules={{
            required: "*Password is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Enter a valid password",
            },
          }}
          placeholder="Enter your email"
        />
        <View style={styles.forgotPassword}>
          <Text style={{ color: theme["signuptext"] }}>Forgot Password?</Text>
        </View>
        <Button
          title="Login"
          onPress={handleSubmit(handleLogin)}
          style={{
            ...styles.customButtonStyle,
            backgroundColor: theme["primary"],
          }}
          textStyle={{ color: theme["white"] }}
        />
      </View>

      <View style={styles.speratorContainer}>
        <View
          style={{ ...styles.separtor, borderColor: theme["signuptext"] }}
        />
        <Text style={{...styles.or,color:theme["signuptext"]}}>OR</Text>
        <View
          style={{ ...styles.separtor, borderColor: theme["signuptext"] }}
        />
      </View>

      <View style={styles.socialLogins}>
      <IconButton Icon={<Facebook/>}  onPress={handleSubmit(handleLogin)}/>

      <IconButton Icon={<Google/>}  onPress={handleSubmit(handleLogin)}/>
  
      <IconButton Icon={<Apple/>}  onPress={handleSubmit(handleLogin)}/>
      </View>


      <View style={styles.textWrapper}>   
      <Text style={{ ...styles.DontHaveAccount, color: theme["signuptext"] }}>
      {'Don’t have an account?'}
      </Text>
       <Text style={{ ...styles.signUpText, color: theme["signuptext"]}}>
      {' Sign up'}
      </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    gap: scale(25),
  },

  safeArea: {
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: scale(20),
  },
  topText: {
    textAlign: "center",
    paddingHorizontal: scale(20),
    fontFamily: "NunitoSans-Regular",
  },
  separtor: {
    borderWidth: 0.5,
    width: "40%",
    alignSelf: "center",
  },
  or: {
    marginHorizontal: scale(10),
  },
  speratorContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  inputContainer: {
    gap: scale(10),
    alignSelf: "center",
  },
  customButtonStyle: {
    width: WIDTH * 0.9,
    borderRadius: 30,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    padding: scale(10),
    borderRadius: scale(20),
  },
  socialLogins: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  forgotPassword: {
    alignItems: "flex-end",
    bottom: scale(15),
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  DontHaveAccount: {
    alignSelf: "center",
    top: scale(15),
  },
  textWrapper:{
    flexDirection:'row',
    alignItems:"center",
    alignSelf:'center'
  },
  signUpText:{
  textDecorationLine:'underline',
  top: scale(15),
  }
  
});

export default Login;
