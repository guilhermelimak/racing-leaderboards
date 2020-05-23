import React, { FC } from "react";

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export const LabeledInput: FC<Props> = ({
  value,
  onChange,
  label,
  type = "text"
}) => (
  <label>
    {label}
    <input type={type} value={value} onChange={e => onChange(e.target.value)} />
  </label>
);
