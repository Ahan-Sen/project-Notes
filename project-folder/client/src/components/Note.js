import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./post.css";
import { removeNote, updateNote, editNote } from "../redux/note/noteActions";
import { useDispatch, useSelector } from "react-redux";
//import Moment from "react-moment";
import moment from "moment";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const { _id, createdAt, title, message } = note;

  const handleRemove = () => {
    dispatch(removeNote(_id));
  };

  return (
    <div className="col-sm-4 col-10 mt-4 offset-1 offset-sm-0 mb-4 ">
      <Card className="">
        <CardHeader className="pb-0 pr-0 ">
          <CardTitle tag="h5">{title} </CardTitle>
          <div className="container ">
            <div className="row ">
              <div className="col-9 pl-0">
                <CardText className="font-weight-light small">
                  {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </CardText>
              </div>
              <div className="col-3  d-flex flex-row-reverse ">
                <div>
                  <div className="row ">
                    <button
                      className="border-0"
                      onClick={() => dispatch(editNote(note))}
                    >
                      <i class="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="border-0" onClick={handleRemove}>
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <div className="post">
          <CardBody className="">
            <CardText>{message}</CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default Note;
