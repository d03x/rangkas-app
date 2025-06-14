import { memo, useCallback } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import * as Layout from "@/components/Layouts";
import AppHeader from "./components/Header";
import { useAppTheme } from "@/contexts/AppThemeProvider";
const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  return (
    <Layout.ThemedView>
      <AppHeader navigation={navigation} />
    </Layout.ThemedView>
  );
};

export default memo(HomeTabScreen);
