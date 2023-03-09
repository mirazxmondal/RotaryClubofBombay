import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useCallback, useEffect } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
// fonts
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import { loadFonts } from "../components/Fonts";

// SplashScreen.preventAutoHideAsync();

const FirstScreen = () => {
  // let [fontsLoaded] = useFonts({
  //   "Montserrat-MediumItalic": require("../../assets/fonts/Montserrat-MediumItalic.ttf"),
  // });
  const navigation = useNavigation();

  useEffect(() => {
    loadFonts();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: 35,
        backgroundColor: "#02529c",
      }}
    >
      <View
        style={{ alignItems: "center", paddingTop: 100, paddingBottom: 40 }}
      >
        <Image
          style={{ borderRadius: 7, width: 350, height: 120 }}
          source={require("../../assets/rotary-club-logo-1.jpeg")}
        />
      </View>
      {/* <Text style={{ textAlign: "center" }}>Logo</Text> */}
      <View style={{ paddingHorizontal: 40, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 22,
            textAlign: "justify",
            color: "white",
            // fontFamily: "Montserrat",
          }}
        >
          Rotary International is the most territorial organisation in the
          world. It exists in 184 different countries and territories and cuts
          across dozens of languages, political and social structures, customs,
          religions and traditions. How is it that all of the more than 25,500
          Rotary Clubs of the world operate in almost identical style? The
          primary answer is the Standard Rotary Club Constitution.
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          right: 40,
        }}
      >
        {/* <TouchableOpacity style={[styles.button, styles.buttonOutline]}> */}
        {/* <Text style={{ color: "blue" }}>Button</Text> */}
        <Icon
          name="rightcircle"
          style={{ color: "#FFA500", marginBottom: 20 }}
          size={60}
          onPress={() => navigation.replace("GetStarted")}
        />
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0782F9",
    width: 60,
    height: 60,
    padding: 15,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFA500",
    borderWidth: 2,
  },
  //   {
  //     backgroundColor: "blue",
  //     width: 100,
  //     height: 100,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     borderRadius: 100,
  //   }
});
