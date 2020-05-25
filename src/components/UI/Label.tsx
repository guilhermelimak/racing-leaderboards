import styled from "@emotion/styled";

export const Label = styled.label<{ marginLess?: boolean }>`
  display: block;
  margin-bottom: ${props => (props.marginLess ? "0" : "8px")};
  font-weight: bold;
`;
