import AppScrollView from "@/components/ScrollView";
import Text from "@/components/Text";
import { memo } from "react";
import type { AppScreenProps } from "@/navigation/AppNavigation/AppScreensTypes";
import ThemedView from "@/components/ThemedView";
import AppHeader from "./components/Header";
import Input from "@/components/Input/Input";
import { FlatList, useWindowDimensions, View } from "react-native";
import { Button } from "@rneui/base";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import CategoryLists from "@/features/category/CategoryLists";
import { ListItem } from "react-native-elements";

const HomeTabScreen = ({ navigation }: AppScreenProps) => {
  const theme = useAppTheme();
  const Dimen = useWindowDimensions()
  return (
    <ThemedView>
      <AppHeader navigation={navigation} />
      <AppScrollView>
        <CategoryLists />

        <View
          style={{
            gap:1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
            
          {Array.from({ length: 4 }).map(({item,index}:any) => {
            return (
              <View
                key={index}
                style={{
                  width:(Dimen.width / 2),
                  backgroundColor: "white",
                  marginInline: 10,
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <Text>Loremed molbcaecati quia! Porro, ab quo !</Text>
              </View>
            );
          })}
        </View>
      </AppScrollView>
    </ThemedView>
  );
};

export default memo(HomeTabScreen);
