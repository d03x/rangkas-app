import type { StyledColorProps } from "@/types/styled.types";
import { Container } from "@component/Layouts";
import Text from "@component/Text";
import { PlatformPressable } from "@react-navigation/elements";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const HomeCard = styled(Container).attrs((e) => ({
  style: {
    elevation: 1,
  },
}))<StyledColorProps>`
  overflow: hidden;
  margin-top: -50;
  border-color: ${(p) => p.colors?.surface};
  border-width: 1;
  border-radius: 10px;
  background-color: ${(p) => p.colors?.white};
`;

const width = Dimensions.get("window");

export const Card = {
  SaldoInfo: styled.View<StyledColorProps>`
    align-items: center;
    flex-direction: row;
    padding: 10px;
  `,
  SaldoValue: styled(Text)`
    margin-left: auto;
    font-weight: bold;
  `,
  SaldoInfoTitle: styled(Text)<StyledColorProps>`
    font-weight: bold;
    font-size: 16;
  `,

  Menu: {
    List: styled.View<StyledColorProps>`
      height: "auto";
      padding: 10px;
    `,
    Item: styled(PlatformPressable)`
      flex: 1;

      border-radius: 5px;
      padding: 5px;
      gap: 4;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
  },
  Feature: {
    Menu: styled(Container)`
      border-radius: 20px;
    `,
    MenuItem: styled.View<StyledColorProps>`
      align-items: center;
      flex: 1;

      gap: 4px;
      margin: 1px;
      padding: 15px 0px;
      border-radius: 10px;
      justify-content: center;
    `,
  },
};
