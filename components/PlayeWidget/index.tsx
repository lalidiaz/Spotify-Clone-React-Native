import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio/Sound";

const song = {
  id: "1",
  uri: "http://jPlayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
  title: "Miaiw Tempered Song",
  artist: "Agnes"
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound != null) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>•{song.artist}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Feather name="heart" size={24} color="white" />
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome5
                name={isPlaying ? "pause" : "play"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PlayerWidget;
