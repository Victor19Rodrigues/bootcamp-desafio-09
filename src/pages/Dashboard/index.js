import React from "react";
import { MdAddCircleOutline, MdChevronRight } from "react-icons/md";

import api from "~/services/api";

import { Container, Time, Scroll } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          <p>Novo meetup</p>
        </button>
      </header>

      <ul>
        <Scroll>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
          <Time past available>
            <strong>Titulo Meetup</strong>
            <button type="button">
              <span>24 de Junho, às 20h</span>
              <MdChevronRight size={25} color="#fff" />
            </button>
          </Time>
        </Scroll>
      </ul>
    </Container>
  );
}
