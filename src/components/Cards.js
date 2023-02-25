import {
  TextView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { auth } from "../../firebase/firebase";

const Cards = ({ value }) => {
  const names = [
    {
      index: "3",
      name: "HOME",
      listner: " ",
    },
    {
      index: "1",
      name: "PAY",
      listner: " ",
    },
    {
      index: "2",
      name: "DONATE",
      listner: " ",
    },

    {
      index: "4",
      name: "HELPDESK",
      listner: " ",
    },
    {
      index: "5",
      name: "ABOUT",
      listner: " ",
    },

    {
      index: "7",
      name: "SIGN OUT",
      listner: "handleSignOut",
    },
  ];

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const onPress = (index) => {
    if (index == 1) {
      navigation.replace("Payment");
    }
    if (index == 2) {
      navigation.replace("Donate");
    }
    if (index == 3) {
      navigation.replace("Transaction");
    }
    if (index == 4) {
      navigation.replace("Helpdesk");
    }
    if (index == 5) {
      navigation.replace("About");
    }
    if (index == 7) {
      handleSignOut();
    }
    console.log(index);
  };

  return (
    // <View style={styles.shadowProp}>
    //   <TouchableOpacity
    //     // onPress={handleSignOut}
    //     style={styles.card}
    //   >
    //     <Text style={styles.cardText}>{value}</Text>
    //   </TouchableOpacity>
    // </View>

    <FlatList
      //   contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      keyExtractor={(key) => {
        return key.index;
      }}
      showsVerticalScrollIndicator={false}
      data={names}
      style={{
        width: 300,
        backgroundColor: "#FFEF00",
        borderRadius: 15,
        zIndex: 5,
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => onPress(item.index)}
            // onPress={onPress(item.index)}
            style={[styles.card, styles.shadowProp]}
          >
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: "80%",
    height: 80,
    padding: 0,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 28,
    borderColor: "gray",
    border: 1,
    // position: "absolute",
    bottom: 5,
    marginTop: 20,
  },
  cardText: {
    fontWeight: "500",
    fontSize: 22,
    color: "#FFA500",
  },
  shadowProp: {
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
