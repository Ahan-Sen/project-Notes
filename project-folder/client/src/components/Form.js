import React, { useState, useEffect } from "react";
import { addNote, updateNote, clearEdit } from "../redux/note/noteActions";
import { useDispatch, useSelector } from "react-redux";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    message: "",
  });

  const { title, message, selectedFile } = post;

  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notes.editAble !== null) {
      setPost(notes.editAble);
    } else {
      setPost({
        title: "",
        message: "",
      });
    }
  }, [notes.editAble]);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notes.editAble !== null) {
      dispatch(updateNote(post));
      dispatch(clearEdit());
    } else {
      dispatch(addNote(post));
      setPost({
        title: "",
        message: "",
      });
    }
  };

  return (
    <div className=" mt-3 bg-light border pt-3">
      <div className="text-center pb-2">
        <h1>{notes.editAble !== null ? "Edit Note" : "Add a New Note"}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container pl-0 pr-0 pb-0 ">
          <div className="form-group row mt-2">
            <label for="title" className="col-sm-2 col-form-label ">
              <div className="ml-3">Title</div>
            </label>
            <div className="col-sm-10">
              <input
                name="title"
                type="text"
                className="form-control "
                value={title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="message" className="col-sm-2 col-form-label">
              <div className="ml-3">Message</div>
            </label>
            <div className="col-sm-10">
              <textarea
                name="message"
                rows="3"
                type="text"
                className="form-control"
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {notes.editAble !== null ? (
            <div className="row">
              <div className="col-10 pr-0 ">
                <button className="btn btn-info btn-lg btn-block  rounded-0">
                  Update Note
                </button>
              </div>
              <div className="col-2 pl-0 ">
                <button
                  className="btn btn-danger btn-lg btn-block  rounded-0"
                  onClick={() => dispatch(clearEdit())}
                >
                  X
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-primary btn-lg btn-block rounded-10">
              Add Note
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
