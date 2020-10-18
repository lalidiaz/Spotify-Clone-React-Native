import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import { useRoute } from "@react-navigation/native";

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return <Text style={{ color: "white" }}>Hello i am the album screen</Text>;
};

export default AlbumScreen;
