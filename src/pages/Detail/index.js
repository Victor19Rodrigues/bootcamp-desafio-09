import React from "react";
import { MdDeleteForever, MdModeEdit, MdEvent, MdPlace } from "react-icons/md";

import history from "~/services/history";

import { Container } from "./styles";

export default function Detail() {
  const informationMeetapp = history.location.state.meetapp.meetapp;
  const { time } = history.location.state.meetapp;

  console.tron.log(history.location);

  return (
    <Container>
      <header>
        <strong>{informationMeetapp.title}</strong>
        <div>
          <button className="edit-button" type="submit">
            <MdModeEdit color="#fff" size={20} />
            <p>Editar</p>
          </button>
          <button className="delete-button" type="submit">
            <MdDeleteForever color="#fff" size={20} />
            <p>Cancelar</p>
          </button>
        </div>
      </header>
      <content>
        <div>
          <img
            src={informationMeetapp.File.url}
            alt={informationMeetapp.title}
          />
          <p
            dangerouslySetInnerHTML={{ __html: informationMeetapp.description }}
          />
          <div>
            <MdEvent color="#999" size={20} />
            <p className="time">{time}</p>

            <MdPlace color="#999" size={20} />
            <p className="location">{informationMeetapp.location}</p>
          </div>
        </div>
      </content>
    </Container>
  );
}
