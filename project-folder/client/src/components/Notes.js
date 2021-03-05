import React, { useContext, useEffect } from "react";
import Note from "./Note";

import { getNotes } from "../redux/note/noteActions";
import { useDispatch, useSelector } from "react-redux";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div className="row ">
      {notes.notes.map((note) => (
        <Note key={note._id} note={note} />
      ))}
    </div>
  );
};
export default Notes;
