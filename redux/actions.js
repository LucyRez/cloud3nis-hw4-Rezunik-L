import * as actions from "./actionTypes";

export function createNote(id, note, title, image) {
  return {
    type: actions.ADD_NOTE,
    payload: {
      id: id,
      text: note,
      title: title,
      image: image,
      time: new Date().toLocaleString(),
    },
  };
}

export function editNote(id, note, title, image) {
  return {
    type: actions.EDIT_NOTE,
    payload: {
      id: id,
      text: note,
      title: title,
      image: image,
      time: new Date().toLocaleString(),
    },
  };
}

export function deleteNote(id) {
  return {
    type: actions.DELETE_NOTE,
    payload: {
      id: id,
    },
  };
}
