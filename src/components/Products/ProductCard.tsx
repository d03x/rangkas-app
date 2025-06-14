import { Image, View } from "react-native";
import Text from "../Text";
import Shop from "@asset/icons/shop/shop.svg";
import * as Card from "./styles/ProductCardStyles";
import { Ionicons } from "@expo/vector-icons";
import { memo, type FC } from "react";
import { useAppTheme } from "@/contexts/AppThemeProvider";

const ProductCard: FC<{
  onPress?: (product_id: string) => void;
}> = ({ onPress }) => {
  const { theme: colors } = useAppTheme();

  const onPressHandler = () => {
    if (typeof onPress != "undefined") {
      onPress(Math.random().toString());
    }
  };

  return (
    <Card.Wrapper style={{ paddingInline: 6, paddingVertical: 4 }}>
      <Card.Container onPress={onPressHandler} colors={colors}>
        <Card.Media>
          <Card.Image
            colors={colors}
            source={{
              uri: `https://images.samsung.com/is/image/samsung/p6pim/id/sm-a366bzkuxid/gallery/id-galaxy-a36-5g-sm-a366-sm-a366bzkuxid-545346250?$684_547_JPG$`,
            }}
          />
          <Card.BadgePopular />
        </Card.Media>
        <Card.Info>
          <Card.Name>Samsung Galaxy 5 Pro 13/27 Like New</Card.Name>
          <Card.PriceInfo colors={colors}>
            <Card.PriceSymbol>Rp.</Card.PriceSymbol>
            <Card.Price>50.000,00</Card.Price>
          </Card.PriceInfo>
          <Card.ShopInfo>
            <Card.Row>
              {/* <Card.ShopIcon colors={colors} /> */}
              <Card.ShopName colors={colors}>Cimalaka</Card.ShopName>
            </Card.Row>
          </Card.ShopInfo>
        </Card.Info>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default memo(ProductCard);
