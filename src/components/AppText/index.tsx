import React from "react";
import { Text, TextProps } from "react-native";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  style,
  ...props
}) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Considerando que o SplashScreen está cuidando do carregamento
  }

  return (
    <Text style={[{ fontFamily: "Inter_400Regular" }, style]} {...props}>
      {children}
    </Text>
  );
};
