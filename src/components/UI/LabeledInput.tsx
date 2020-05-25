import React, { FC } from "react";
import styled from "@emotion/styled";
import { styles } from "../../styles";
import { Label } from "./Label";
import Cleave from "cleave.js/react";
import { CleaveOptions } from "cleave.js/options";

const inputStyles = {
  display: "block",
  boxSizing: "border-box",
  backgroundColor: styles.colors.background30,
  border: `1px solid ${styles.colors.background20}`,
  width: "100%",
  padding: "6px 3px",
  color: styles.colors.foreground20
};

const Input = styled.input(inputStyles as any);

interface Props {
  label: string;
  type?: string;
  value: string;
  marginLess?: boolean;
  onChange: (value: string) => void;
}

export const LabeledInput: FC<Props> = ({
  value,
  marginLess,
  onChange,
  label,
  type = "text"
}) => (
  <Label marginLess={marginLess}>
    {label}
    <Input type={type} value={value} onChange={e => onChange(e.target.value)} />
  </Label>
);

interface CleaveProps extends Props {
  options: CleaveOptions;
}

const CleaveInput = styled(Cleave)(inputStyles as any);

export const LabeledCleaveInput: FC<CleaveProps> = ({
  value,
  onChange,
  label,
  options,
  type = "text"
}) => (
  <Label>
    {label}
    <CleaveInput
      type={type}
      value={value}
      options={options}
      onChange={e => onChange(e.target.value)}
    />
  </Label>
);
