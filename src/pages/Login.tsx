import React, { useState } from "react";
import { Layout } from "../components/UI/Layout";
import { Button, Flex, Container, Input, Label } from "theme-ui";
import { api } from "../api";
import toast from "react-hot-toast";

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
        <Flex sx={{ flexDirection: "column" }}>
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
        </Flex>
      </Container>
    </Layout>
  );
};
