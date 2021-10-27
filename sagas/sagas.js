import { takeEvery, put, call } from "redux-saga/effects";
import * as api from "../api/client/client-api";
import * as actions from "../redux/actionTypes";
import { fetchNotes, fetchNotesSuccess } from "../redux/actions";
import { fork } from "redux-saga/effects";

export function* fetchNotesSaga() {
  try {
    const res = yield api.getNotes();
    const notes = res.data;

    console.log("Json " + notes);
    yield put(fetchNotesSuccess(notes));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchSaga() {
  yield takeEvery(actions.FETCH_NOTES, fetchNotesSaga);
}

// export default function* rootSaga() {
//   yield fork(fetchSaga);
// }
