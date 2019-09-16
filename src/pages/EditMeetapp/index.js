import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { MdAddCircleOutline } from "react-icons/md";

import { createMeetappRequest } from "~/store/modules/meetapp/actions";

import Meetapp from "./MeetappInput";
import DatePicker from "./Datepicker";

import history from "~/services/history";

import { Container } from "./styles";

export default function EditMeetapp() {
  const dispatch = useDispatch();
  console.tron.log(useSelector(state => state));
  const meetapp =
    useSelector(state => state.user.meetapp) || history.location.state.meetapp;

  function handleSubmit(data) {
    dispatch(createMeetappRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetapp} onSubmit={handleSubmit}>
        <Meetapp name="file_id" />

        <Input name="title" placeholder="Título do meetapp" />
        <Input
          className="description"
          multiline
          cols="30"
          rows="5"
          name="description"
          placeholder="Descrição completa"
        />
        <DatePicker name="date" />

        <Input name="location" placeholder="Localização" />
        <button className="submit-button" type="submit">
          <MdAddCircleOutline color="#fff" size={20} />
          <p>Salvar meetup</p>
        </button>
      </Form>
    </Container>
  );
}
