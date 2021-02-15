import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/UI/Layout";
import { Container } from "../components/UI/Container";
import { LabeledInput } from "../components/UI/LabeledInput";
import { Button } from "../components/UI/Button";
import { api } from "../api";
import toast, { Toaster } from "react-hot-toast";

const FormContainer = styled.div`
  display: Flex;
  flex-direction: column;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await api.login({ email, password });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const register = () =>
    toast.promise(api.register({ email, password }), {
      loading: "Creating account...",
      success: "Account created successfully",
      error: (error) => `Error: ${error.message}`,
    });

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
          <Button css={{ marginBottom: "2px" }} onClick={login}>
            Login
          </Button>
          <Button onClick={register}>Register</Button>
        </FormContainer>
      </Container>
    </Layout>
  );
};
