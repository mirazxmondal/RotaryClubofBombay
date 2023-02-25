import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header2 = () => {
  return (
    <View>
      <Text style={styles.header}>NAMASTE ADMIN</Text>
      <Image
        style={{ height: 220, width: 300 }}
        source={require("../../assets/Loginlogo.jpg")}
      />
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    bottom: 20,
    // left: -80,
    // marginBottom: 40,
    marginTop: 0,
    // position: "absolute",
    fontWeight: "bold",
    fontSize: 30,
    color: "#ffdf00",
  },
});
