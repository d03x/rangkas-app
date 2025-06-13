import AppScrollView from "@/components/ScrollView";
import Text from "@/components/Text";
import { memo } from "react";
import { useColors } from "@/utils/colors";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import ThemedView from "@/components/ThemedView";
import AppHeader from "./components/Header";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const colors = useColors();
  return (
    <ThemedView>
      <AppHeader navigation={navigation} />
      <AppScrollView>
        <Text>lorem*1000</Text>
      </AppScrollView>
    </ThemedView>
  );
};

export default memo(HomeTabScreen);
