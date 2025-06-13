import { Badge } from "react-native-elements";
import styled from "styled-components/native";

const Header = styled.View`
  background-color: red;
  height: 60px;
  align-items: center;
  padding-inline: 10px;
  flex-direction: row;
`;
const HeaderRight = styled.View`
  flex: 1;
  align-items: center;
  margin-left: 14px;
  flex-direction: row;
  height: 100%;
`;
export const SearchInput = styled.Pressable`
  background-color: rgba(245, 250, 255, 0.3);
  width: 100%;
  padding: 8px 10px;
  border: 1px solid rgba(184, 217, 250, 0.6);
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
`;
export const HeaderSearch = styled.View`
  flex: 2.5;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
export const HeaderRightButton = styled.Pressable`
  flex: 1;
`;
export const UserAvatarLeft = styled.View`
  margin-right: 10;
  border-radius: 100%;
  background-color: rgba(245, 250, 255, 0.3);
  aspect-ratio: 1/1;
`;
export const HeaderRightButtonBadge = styled(Badge).attrs({
    containerStyle : {
        position:"absolute",
        top: -9,
        left: 13,
    }
})`

`
export { Header, HeaderRight };
