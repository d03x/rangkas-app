import { Image, View } from "react-native";
import Text from "../Text";
import Shop from "@asset/icons/shop/shop.svg";
import * as Card from "./styles/ProductCardStyles";
import { Ionicons } from "@expo/vector-icons";
import { memo } from "react";

const ProductCard = () => {
  return (
    <Card.Wrapper style={{ paddingInline: 6, paddingVertical: 4 }}>
      <Card.Container>
        <Card.Media>
          <Card.Image
            source={{
              uri: `https://picsum.photos/200/300?random=${Math.random()}`,
            }}
          />
          <Card.BadgePopular />
        </Card.Media>
        <Card.Info>
          <Card.Name>Buah Sayur Enak Dimakan</Card.Name>
          <Card.PriceInfo>
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
            <Card.Row style={{ gap: 4 }}>
              <Card.ShopIcon />
              <Card.ShopName>Sentra Kuliner</Card.ShopName>
              <Card.Verified />
            </Card.Row>
          </Card.ShopInfo>
        </Card.Info>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default memo(ProductCard);
