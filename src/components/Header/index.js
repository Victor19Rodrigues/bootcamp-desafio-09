import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo.png";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meetapp" />
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Victor Rodrigues</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
