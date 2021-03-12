import React, { useContext, useEffect } from "react";
import Note from "./Note";

import { getNotes } from "../redux/note/noteActions";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <Zoom>
      <div className="row ">
        {notes.notes.map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </Zoom>
  );
};
export default Notes;
