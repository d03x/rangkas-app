import { Text } from "@rneui/themed";
import * as Layout from "@/components/Layouts";
import * as Card from "./styles/category";
import { StyleSheet } from "react-native";
export default function CategoryItem({title,icon}:{title:string,icon : any}) {
  return (
    <Card.Wrapper>
      <Layout.Col style={styles.content}>
        {icon}
        <Card.Name>{ title }</Card.Name>
      </Layout.Col>
    </Card.Wrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
});
