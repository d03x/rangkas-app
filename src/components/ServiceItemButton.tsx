import { TouchableOpacity, View } from "react-native";
import Button from "./Button";
import Text from "./Text";
import { Ionicons } from "@expo/vector-icons";
import { stylesUtil as s } from "@/styles";
import { Image } from "react-native";
const ServiceItemTabButton = ({ icon, label }: any) => {
  return (
    <View
      style={[
        s.flex_col,
        s.align_center,
        s.flex_1,
        s.mb_md,
        s.gap_sm,
        s.rounded_md,
        {
          aspectRatio: 1 / 1,
        },
      ]}
    >
      <TouchableOpacity style={[s.align_center, s.justify_center]}>
        <Image
          style={{
            height: 56,
            width: 56,
          }}
          source={{ uri: icon }}
        />
        <Text style={[s.text_xs,s.mt_xs, s.font_bold, s.tracking_normal]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export { ServiceItemTabButton };
