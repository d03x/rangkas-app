import { Input } from "react-native-elements";
import styled from "styled-components/native";

const TextInput = styled(Input).attrs({
  labelStyle: {
    fontSize: 13,
    marginBottom: 3,
  },
  containerStyle: {
    margin: 0,
    padding: 0,
  },
  inputStyle: {
    borderWidth: 0,
    fontSize: 13,
  },

  inputContainerStyle: {
    borderWidth: 1,
    marginBottom: 0,
    borderColor: "gray",
    paddingInline: 5,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
})``;

export { TextInput };
