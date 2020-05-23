import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const CollapseContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${props => (props.isOpen ? "auto" : 0)};
  overflow: hidden;
`;

const CollapseContainer = styled.div`
  width: 100%;
  border: 1px solid #333;
  border-bottom: 0;

  &:last-child {
    border-bottom: 1px solid #333;
  }
`;

const CollapseTitle = styled.div<{ isOpen: boolean }>`
  user-select: none;
  cursor: pointer;
  padding: 16px;
  border-bottom: ${props => (props.isOpen ? "1px solid #999" : "none")};
`;

interface Props {
  title: string;
}

export const Collapse: FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseContainer>
      <CollapseTitle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </CollapseTitle>
      <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
    </CollapseContainer>
  );
};
