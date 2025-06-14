import type { ScaledSize } from "react-native";
import styled from "styled-components/native";
const BaseContainer = styled.View<{dimension:ScaledSize}>`
    width: ${prp=>prp.dimension.width - 20}px;
    margin: auto;
`

export {
    BaseContainer
}