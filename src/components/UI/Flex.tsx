import styled from "@emotion/styled";

interface FlexProps {
  justifyContent?:
    | "space-around"
    | "space-between"
    | "center"
    | "flex-start"
    | "flex-end";
  alignItems?: "center" | "flex-start" | "baseline" | "stretch" | "flex-end";
  flexDirection?: "row" | "column";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent || "center"};
  align-items: ${props => props.alignItems || "center"};
`;
