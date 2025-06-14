import { Text } from "react-native-gesture-handler";
import { BaseContainer } from "./styles";
import { useWindowDimensions, type ViewProps } from "react-native";
import { type FC, type ReactNode } from "react";

const Container: FC<
  {
    children: ReactNode;
  } & ViewProps
> = ({ children, ...rest }) => {
  const dimension = useWindowDimensions();
  return (
    <BaseContainer dimension={dimension} {...rest}>
      {children}
    </BaseContainer>
  );
};

export default Container;
