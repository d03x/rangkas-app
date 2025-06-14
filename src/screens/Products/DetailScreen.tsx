import { Text } from "@rneui/themed";
import { View } from "react-native";
import * as Layout from "@/components/Layouts";
const ProductDetailScreen = () => {
  return (
    <Layout.ThemedView>
      <Layout.Header />
      <View>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          perferendis quia possimus porro animi quis culpa saepe harum impedit,
          fuga commodi, voluptatibus eaque delectus, earum aliquid ducimus et
          deleniti atque?
        </Text>
      </View>
    </Layout.ThemedView>
  );
};

export default ProductDetailScreen;
