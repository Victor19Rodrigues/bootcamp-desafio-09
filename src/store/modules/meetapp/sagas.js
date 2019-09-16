import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "~/services/api";

import { createMeetappSuccess, createMeetappFailure } from "./actions";

export function* createMeetapp({ payload }) {
  try {
    const { file_id, title, description, date, location } = payload.data;

    const meetapp = {
      title,
      description,
      date,
      location,
      file_id
    };

    const response = yield call(api.post, "meetups", meetapp);

    toast.success("Meetapp criado com sucesso!");

    yield put(createMeetappSuccess(response.data));
  } catch (err) {
    toast.error("Erro ao criar meetapp, confira seus dados!");

    yield put(createMeetappFailure());
  }
}

export default all([
  takeLatest("@meetapp/CREATE_MEETAPP_REQUEST", createMeetapp)
]);
