import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/UI/Layout";
import { Container } from "../components/UI/Container";
import { LabeledInput } from "../components/UI/LabeledInput";
import { Button } from "../components/UI/Button";
import { api } from "../api";

const FormContainer = styled.div`
  display: Flex;
  flex-direction: column;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await api.login({ email, password });
  };

  return (
    <Layout>
      <Container>
        <FormContainer>
          <LabeledInput label="Email" value={email} onChange={setEmail} />
          <LabeledInput
            label="Password"
            value={password}
            onChange={setPassword}
          />
          <Button onClick={() => login()}>Login</Button>
        </FormContainer>
      </Container>
    </Layout>
  );
};
