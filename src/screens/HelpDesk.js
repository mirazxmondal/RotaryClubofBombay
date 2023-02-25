import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Facebook from "react-native-vector-icons/FontAwesome5";
import Twitter from "react-native-vector-icons/Entypo";
// import Instagram from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HelpDesk = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      contentContainerStyle={{ justifyContent: "space-evenly" }}
    >
      <View style={{ marginBottom: 20, left: 10, top: 20 }}>
        <Icon
          name="arrowleft"
          size={30}
          color={"yellow"}
          onPress={() => navigation.replace("Transaction")}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "orange",
          fontSize: 25,
          fontWeight: "700",
        }}
      >
        CONTACT US
      </Text>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image source={require("../../assets/rotary-club-logo-1.jpeg")} />
      </View>
      <Text style={styles.content}>Rotary Club Of Bombay</Text>
      <Text style={styles.content}>97- B , Mittal Towers,</Text>
      <Text style={styles.content}> B Wing, 9th Floor, Nariman Point </Text>
      <Text style={styles.content}>Mumbai – 400021,</Text>
      <Text style={styles.content}>India.</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Facebook
          name="facebook"
          style={{ color: "#3b5998", marginHorizontal: 20 }}
          size={40}
          onPress={() => Linking.openURL("https://www.facebook.com/rcb1929")}
        />
        <Twitter
          name="twitter-with-circle"
          style={{ color: "#00acee", marginHorizontal: 20 }}
          size={40}
          onPress={() => Linking.openURL("https://twitter.com/rcb1929")}
        />
        {/* <Instagram
        name="instagram"
        style={{color:''}}
        size={35}
        onPress={() => Linking.openURL("https://www.instagram.com/rcb1929/")}
      /> */}
        <TouchableOpacity
          onPress={() => Linking.openURL("https://www.instagram.com/rcb1929/")}
        >
          <Image
            style={{ height: 50, width: 50, marginHorizontal: 20 }}
            source={require("../../assets/insta.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HelpDesk;

const styles = StyleSheet.create({
  content: {
    textAlign: "center",
    color: "black",
    fontSize: 22,
    lineHeight: 30,
  },
});
