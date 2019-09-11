import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";

import logo from "~/assets/logo.png";

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          name="email"
          id=""
        />
        <Input
          type="password"
          placeholder="Sua senha secreta"
          name="password"
          id=""
        />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
