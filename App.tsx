import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppearanceProvider } from "react-native-appearance";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PlayerWidget from "./components/PlayeWidget";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppearanceProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </SafeAreaProvider>
      </AppearanceProvider>
    );
  }
}
