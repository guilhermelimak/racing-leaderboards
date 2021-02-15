import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { styles } from "../../styles";

const CollapseContent = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: ${(props) => (props.isOpen ? "auto" : 0)};
  background-color: ${styles.colors.background};
  overflow: hidden;
`;

const CollapseContainer = styled.div`
  width: 100%;
  border: 1px solid ${styles.colors.background20};
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CollapseTitle = styled.div<{ isOpen: boolean }>`
  user-select: none;
  cursor: pointer;
  padding: 16px;
  color: ${styles.colors.foreground};
  border-bottom: ${(props) =>
    props.isOpen ? `1px solid ${styles.colors.background20}` : "none"};
`;

interface Props {
  title: JSX.Element;
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
