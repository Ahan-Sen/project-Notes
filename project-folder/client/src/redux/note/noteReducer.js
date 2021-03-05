import {
  SEARCH_NOTE,
  CLEAR_SEARCH,
  REMOVE_NOTE,
  UPDATE_NOTE,
  EDIT_NOTE,
  CLEAR_EDIT,
  GET_NOTES,
  CLEAR_NOTES,
  NOTES_ERROR,
  ADD_NOTE,
} from "../types";

export const Notes = (
  state = {
    editAble: null,
    search: null,
    notes: [],
    errors: null,
  },
  action
) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case NOTES_ERROR:
      return {
        ...state,
        notes: [],
        errors: action.payload,
      };
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };

    case EDIT_NOTE:
      return { ...state, editAble: action.payload };

    case CLEAR_EDIT:
      return {
        ...state,
        editAble: null,
      };
    case CLEAR_NOTES:
      return {
        ...state,
        search: null,
        editable: null,
        notes: [],
        errors: null,
      };

    case SEARCH_NOTE:
      const reg = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        search: state.notes.filter((note) => note.name.match(reg)),
      };

    case CLEAR_SEARCH:
      return { ...state, search: null };
    default:
      return state;
  }
};
