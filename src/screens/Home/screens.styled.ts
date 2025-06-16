import type { StyledColorProps } from "@/types/styled.types";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const Header = styled(Animated.View)<
  {
    height: number;
  } & StyledColorProps
>`
  padding-inline: 10px;
  flex-direction: row;
  background-color: ${(p) => p.colors?.primaryDark};
  height: ${(p) => p.height}px;
`;
export const HeaderRight = styled.View`
  align-items: center;
  flex-direction: row;
  height: 100%;
  gap: 14px;
  margin-left: auto;
`;
export const HeaderLeft = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HomeCard = styled.View`
  margin-inline: 9px;
  margin-top: -30px;
  padding: 20px;
  border-radius: 10px;
  border-width: 1;
`;
export { Header };
