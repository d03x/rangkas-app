import styled from "styled-components/native";
import { CheckBox as CheckBoxBase } from "@rneui/themed";
export const CheckBox = styled(CheckBoxBase).attrs({
  iconType: "ionicon",
  checkedIcon: "checkbox",
  uncheckedIcon:"checkbox-outline",
  containerStyle: {
    paddingVertical: 0,
    margin: 0,
    marginLeft: 0,
    marginTop: 0,
    marginRight: 0,
    paddingHorizontal: 0,
  },
  textStyle: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: 600,
  },
})`
  border: 1px solid red;
`;
