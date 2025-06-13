import type { ThemeColorTypes } from "@/contexts/AppThemeProvider";
import { Badge } from "react-native-elements";
import styled from "styled-components/native";
const Header = styled.View.attrs<{ themeColor: ThemeColorTypes }>({
  style: { elevation: 2 },
})`
  height: ${80}px;
  justify-content:"center";
  padding-inline: 10px;
  align-items:'center';
  border-bottom-width: 1;
  border-bottom-color: ${(prop) => prop.themeColor.border};
`;
const HeaderRight = styled.View`
  flex: 1;
  align-items: center;
  margin-left: 14px;
  flex-direction: row;
  height: 100%;
`;
export const HeaderCurrentLocation = styled.TouchableOpacity<{colorTheme:ThemeColorTypes}>`
background-color: ${prop=>prop.colorTheme.background};
margin-top: 4px;
flex-direction: row;
align-items: center;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10;
`;
export const SearchInput = styled.Pressable<{ themeColor: ThemeColorTypes }>`
  background-color: ${(prop) => prop.themeColor.surface};
  width: 100%;
  padding: 8px 10px;
  border-width: 1;
  border-color: ${(prop) => prop.themeColor.border};
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
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
  containerStyle: {
    position: "absolute",
    top: -9,
    left: 13,
  },
})``;
export { Header, HeaderRight };
