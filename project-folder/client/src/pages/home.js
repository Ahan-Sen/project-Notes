import React, { useState, useEffect } from "react";
import Notes from "../components/Notes";
import PostForm from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/auth/authActions";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div className="back">
      <div className="container ">
        <div className="row">
          <div className=" col-10 offset-1 col-sm-6 offset-sm-3 ">
            <PostForm />
          </div>
        </div>
        <div className="row">
          <div className="col-12  offset-1  text-center ml-0 mt-4">
            <h1>
              <u>Your Notes</u>
            </h1>
          </div>
        </div>

        <div className="row back">
          <div className="col-12">
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
