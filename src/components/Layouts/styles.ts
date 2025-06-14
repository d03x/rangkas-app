import type { ScaledSize } from "react-native";
import styled from "styled-components/native";
const BaseContainer = styled.View<{ dimension: ScaledSize }>`
  width: ${(prp) => prp.dimension.width - 24}px;
  margin: auto;
`;
const Row = styled.View`
  flex-direction: row;
`;
const Column = styled.View`
  flex-direction: column;
`;
const Col = styled.View<{ col?: number }>`
  flex: ${(prop) => prop.col};
`;
export { Col, Column, Row, BaseContainer };
