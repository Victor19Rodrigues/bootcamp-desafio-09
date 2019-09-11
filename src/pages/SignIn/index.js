import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.png";

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input type="email" placeholder="Digite seu e-mail" name="" id="" />
        <input type="password" placeholder="Sua senha secreta" name="" id="" />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </>
  );
}
