import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const Content = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${props => (props.isOpen ? "auto" : 0)};
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  border: 1px solid #333;
`;

const Title = styled.div<{ isOpen: boolean }>`
  user-select: none;
  cursor: pointer;
  padding: 16px;
  border-bottom: ${props => (!props.isOpen ? "1px solid #ccc" : "none")};
`;

interface Props {
  title: string;
}

export const Collapse: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Title isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </Title>
      <Content isOpen={isOpen}>{children}</Content>
    </Container>
  );
};
