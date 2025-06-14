import { Image, View } from "react-native";
import Text from "../Text";
import Shop from "@asset/icons/shop/shop.svg";
import * as Card from "./styles/ProductCardStyles";
import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";
import { useAppTheme } from "@/contexts/AppThemeProvider";

const ProductCard = () => {

    const {theme : colors} = useAppTheme()

  return (
    <Card.Wrapper style={{ paddingInline: 6, paddingVertical: 4 }}>
      <Card.Container colors={colors}>
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
          <Card.Name>Buah Sayur Enak Dimakan</Card.Name>
          <Card.PriceInfo  colors={colors}>
            <Card.PriceSymbol>Rp.</Card.PriceSymbol>
            <Card.Price>50.000,00</Card.Price>
          </Card.PriceInfo>
          <Card.ShopInfo>
            <Card.Row style={{ gap: 2 }}>
              <Ionicons size={15} name="star-half-outline" color={"orange"} />
              <Card.RatingCount style={{marginRight:4}}>4.4</Card.RatingCount>
              <Ionicons name="ellipse" size={5} color={"gray"}/>
              <Card.RatingCount style={{marginLeft:4}}>90+ Terjual</Card.RatingCount>
            </Card.Row>
            <Card.Row>
              <Card.ShopIcon />
              <Card.ShopName>Cimalaka</Card.ShopName>
              <Card.Verified />
            </Card.Row>
          </Card.ShopInfo>
        </Card.Info>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default memo(ProductCard);
