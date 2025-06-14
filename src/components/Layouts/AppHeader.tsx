import { Header } from "@rneui/base";
import { useAppTheme } from "@/contexts/AppThemeProvider";
import { Input } from "react-native-elements";
import Text from "../Text";
import { View } from "react-native";
import { Avatar } from "@rneui/themed";

const AppHeader = () => {
  const { theme } = useAppTheme();
  return (
    <Header
      placement="left"
      leftComponent={{
        type: "ionicon",
        icon: "arrow-back-outline",
        onPress() {
          alert("BACK");
        },
      }}
      barStyle="dark-content"
      rightComponent={{
        icon: "share",
      }}
      centerComponent={{
        children: (
          <View>
            <Text>Lorem ipsum dolor...</Text>
          </View>
        ),
        color: theme.text,
      }}
      backgroundColor={theme.background}
    />
  );
};

export default AppHeader;
