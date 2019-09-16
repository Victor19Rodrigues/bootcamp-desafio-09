import produce from "immer";

const INITIAL_STATE = {
  meetapp: null
};

export default function meetapp(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@meetapp/CREATE_MEETAPP_SUCCESS": {
        draft.meetapp = action.payload.meetapp;
        break;
      }
      //   case "@user/UPDATE_PROFILE_SUCCESS": {
      //     draft.profile = action.payload.profile;
      //     break;
      //   }
      //   case "@meetapp/SIGN_OUT": {
      //     draft.profile = null;
      //     break;
      //   }

      default:
    }
  });
}
