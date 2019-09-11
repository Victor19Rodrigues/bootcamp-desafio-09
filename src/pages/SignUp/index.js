import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.png";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input type="text" placeholder="Nome completo" name="" id="" />
        <input type="email" placeholder="Digite seu e-mail" name="" id="" />
        <input type="password" placeholder="Sua senha secreta" name="" id="" />

        <button type="submit">Entrar</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
