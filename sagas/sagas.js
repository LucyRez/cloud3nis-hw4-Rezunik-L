import { takeEvery, put, all } from "redux-saga/effects";
import * as api from "../api/client/client-api";
import * as actions from "../redux/actionTypes";
import { fetchNotesSuccess } from "../redux/actions";

function* fetchNotesSaga() {
  try {
    const res = yield api.getNotes();
    const notes = res.data;

    console.log("Json " + notes);

    yield put(fetchNotesSuccess(notes === undefined ? [] : notes));
  } catch (error) {
    console.log(error);
  }
}

function* submitNoteSaga(action) {
  try {
    const tmp_note = JSON.stringify(action.payload);
    const res = yield api.submitNote(tmp_note);
  } catch (error) {
    console.log(error);
  }
}

function* updateNoteSaga(action) {
  try {
    const tmp_note = JSON.stringify(action.payload);
    console.log(action.payload.id);
    const res = yield api.updateNote(action.payload.id, tmp_note);
  } catch (error) {
    console.log(error);
  }
}

function* removeNoteSaga(action) {
  try {
    console.log(action.payload.id);
    const res = yield api.removeNote(action.payload.id);
  } catch (error) {
    console.log(error);
  }
}

function* fetchSaga() {
  yield takeEvery(actions.FETCH_NOTES, fetchNotesSaga);
}

function* submitSaga() {
  yield takeEvery(actions.SUBMIT_NOTE, submitNoteSaga);
}

function* updateSaga() {
  yield takeEvery(actions.UPDATE_NOTE, updateNoteSaga);
}

function* removeSaga() {
  yield takeEvery(actions.REMOVE_NOTE, removeNoteSaga);
}

export function* rootSaga() {
  yield all([fetchSaga(), submitSaga(), updateSaga(), removeSaga()]);
}
