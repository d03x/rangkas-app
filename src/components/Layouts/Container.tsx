import { Text } from "react-native-gesture-handler";
import { BaseContainer } from "./styles";
import { useWindowDimensions } from "react-native";
import { type FC, type ReactNode } from "react";

const Container: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dimension = useWindowDimensions();
  return <BaseContainer dimension={dimension}>{children}</BaseContainer>;
};

export default Container;
