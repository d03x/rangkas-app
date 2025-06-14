import { Image, Text } from "@rneui/themed";
import * as Layout from "@/components/Layouts";
import * as Card from "./styles/category";
import { StyleSheet } from "react-native";
export default function CategoryItem({
  title,
  img,
}: {
  title: string;
  img?: string;
}) {
  return (
    <Card.Wrapper>
      <Layout.Col style={styles.content}>
        <Image
          style={{
            objectFit: "cover",
            width: 45,
            aspectRatio: 1 / 1,
          }}
          source={{
            uri: img,
          }}
        />
        <Card.Name>{title}</Card.Name>
      </Layout.Col>
    </Card.Wrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
});
