import type { ThemeColorTypes } from "@/contexts/AppThemeProvider";
import styled from "styled-components/native";

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  gap: 17;
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
