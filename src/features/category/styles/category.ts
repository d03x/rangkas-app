import Text from "@/components/Text";
import styled from "styled-components/native";

const Wrapper = styled.Pressable`
  flex: 1;
  overflow: hidden;
  margin: 3px;
`;
const Name = styled(Text)`
  font-size: 12;
  text-align: center;
`;
export { Name, Wrapper };
