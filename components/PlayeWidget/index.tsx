import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "Love you!",
  artist: "Helen"
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>•{song.artist}</Text>
        </View>

        <View style={styles.iconsContainer}>
          <Feather name="heart" size={24} color="white" />
          <FontAwesome5 name="play" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};
export default PlayerWidget;
