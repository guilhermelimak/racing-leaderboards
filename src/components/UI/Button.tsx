import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

const BaseButton = styled.button``;

export const Button: FC<Props> = ({ onClick, children, disabled }) => (
  <BaseButton disabled={disabled} onClick={onClick}>
    {children}
  </BaseButton>
);
