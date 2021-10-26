import * as actions from "./actionTypes";

const initialState = {
  notes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.payload.id,
            text: action.payload.text,
            title: action.payload.title,
            image: action.payload.image,
            time: new Date().toLocaleString(),
          },
        ],
      };
    case actions.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id !== action.payload.id
            ? note
            : {
                ...note,
                text: action.payload.text,
                title: action.payload.title,
                image: action.payload.image,
                time: new Date().toLocaleString(),
              }
        ),
      };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
