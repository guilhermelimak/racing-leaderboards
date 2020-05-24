import React, { FC } from "react";
import styled from "@emotion/styled";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  display: block;
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
