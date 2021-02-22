import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const CollapseContainer = styled.div`
  width: 100%;
  border: 1px solid background;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Content = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${(props) => (props.isOpen ? "auto" : 0)};
  background-color: background;
  overflow: hidden;
`;

const Title = styled.div<{ isOpen: boolean }>`
  user-select: none;
  cursor: pointer;
  padding: 16px;
  color: foreground;
  border-bottom: ${(props) => (props.isOpen ? `1px solid background` : "none")};
`;

interface Props {
  title: JSX.Element;
}

export const Collapse: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseContainer>
      <Title isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </Title>
      <Content isOpen={isOpen}>{children}</Content>
    </CollapseContainer>
  );
};
