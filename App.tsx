import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppearanceProvider } from "react-native-appearance";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import PlayerWidget from "./components/PlayeWidget";

import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

import { AppContext } from "./AppContext";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<String | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppearanceProvider>
        <SafeAreaProvider>
          <AppContext.Provider
            value={{
              songId,
              setSongId: (id: string) => setSongId(id)
            }}
          >
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <PlayerWidget />
          </AppContext.Provider>
        </SafeAreaProvider>
      </AppearanceProvider>
    );
  }
}
