import React, { FC } from "react";
import styled from "@emotion/styled";
import { styles } from "../../styles";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  background-color: ${styles.colors.background30};
  border: 1px solid ${styles.colors.background20};
  width: 100%;
  padding: 6px 3px;
  color: ${styles.colors.foreground20};
`;

export const LabeledInput: FC<Props> = ({
  value,
  onChange,
  label,
  type = "text"
}) => (
  <Label>
    {label}
    <Input type={type} value={value} onChange={e => onChange(e.target.value)} />
  </Label>
);
