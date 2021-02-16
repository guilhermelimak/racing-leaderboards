import React, { useState } from "react";
import styled from "@emotion/styled";
import { Layout } from "../components/UI/Layout";
import { Container, Input, Label } from "theme-ui";
import { Button } from "theme-ui";
import { api } from "../api";
import toast from "react-hot-toast";

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
          <Label>
            Email
            <Input
              value={email}
              type="email"
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </Label>
          <Button css={{ marginBottom: "2px" }} onClick={login}>
            Login
          </Button>
          <Button onClick={register}>Register</Button>
        </FormContainer>
      </Container>
    </Layout>
  );
};
