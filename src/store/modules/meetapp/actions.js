export function createMeetappRequest(data) {
  return {
    type: "@meetapp/CREATE_MEETAPP_REQUEST",
    payload: { data }
  };
}

export function createMeetappSuccess(meetapp) {
  return {
    type: "@meetapp/CREATE_MEETAPP_SUCCESS",
    payload: { meetapp }
  };
}

export function createMeetappFailure() {
  return {
    type: "@meetapp/CREATE_MEETAPP_FAILURE"
  };
}
