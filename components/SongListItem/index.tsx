import React, { useContext, useState } from "react";
import { Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Song } from "../../types";
import styles from "./styles";
import { AppContext } from "../../AppContext";

export type SongListProps = {
  song: Song;
};

const SongListItem = (props: SongListProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.id);
  };

  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SongListItem;
