import React from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contacts = () => {
  return (
    <div className="container1">
      <div className="container2">
        <Button className="btn" variant="primary">
          New User
        </Button>{" "}
      </div>
    </div>
  );
};

export default Contacts;
