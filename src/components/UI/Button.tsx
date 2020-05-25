import React, { FC } from "react";
import styled from "@emotion/styled";
import { styles } from "../../styles";

export enum ButtonKind {
  Default = "default",
  Primary = "primary",
  Danger = "danger"
}

const buttonBg = {
  [ButtonKind.Default]: styles.colors.background,
  [ButtonKind.Primary]: styles.colors.background,
  [ButtonKind.Danger]: styles.colors.danger
};

const buttonFg = {
  [ButtonKind.Default]: styles.colors.foreground,
  [ButtonKind.Primary]: styles.colors.foreground,
  [ButtonKind.Danger]: styles.colors.white
};

const BaseButton = styled.button<{ kind: ButtonKind }>`
  border-radius: 1px;
  border: none;
  outline: none;
  height: 34px;
  cursor: pointer;
  padding: 8px 16px;
  background-color: ${props => buttonBg[props.kind]};
  color: ${props => buttonFg[props.kind]};
`;

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  kind?: ButtonKind;
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  onClick,
  children,
  disabled,
  kind = ButtonKind.Default
}) => (
  <BaseButton disabled={disabled} onClick={onClick} kind={kind}>
    {children}
  </BaseButton>
);
