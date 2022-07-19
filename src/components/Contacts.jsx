import React, { useEffect, useState } from "react";
import "../App.css";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog"; //same thing as a modal
// import { Card } from "primereact/card";

const Carp = (props) => {
  const { user } = props;

  return <div>
    <div>{user.gender}</div>
    <div>{user.name.title} {user.name.first} {user.name.last}</div>
    <hr />
  </div>;
};

export default function Contacts() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=5";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const { results } = json;
        // Only put the results in state, ie, the actual users array
        setUsers(results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  // for dialog (modal)
  const [displayResponsive, setDisplayResponsive] = useState(false);

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  return (
    <>
      <div className="card">
        <div className="p-fluid grid">
          <div className="field searchbox">
            <span className="p-float-label p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                className="contact-search"
                // id="lefticon" value={value2} onChange={(e) => setValue2(e.target.value)}
              />
              <label htmlFor="lefticon">Search for contact</label>
            </span>
          </div>
        </div>

        <Button
          className="btn-color"
          label="New Contact"
          icon="pi pi-user-plus"
          iconPos="right"
          onClick={() => onClick("displayResponsive")}
        />

        <Dialog
          className="dialogModal"
          header="New Contact"
          visible={displayResponsive}
          onHide={() => onHide("displayResponsive")}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "700px", height: "400px" }}
          //   footer={renderFooter("displayResponsive")}
        >
          <h5>Details</h5>
          <div className="text-input">
            <InputText
              // value={project_name}
              // onChange={(e) => setProjectName(e.target.value)}
              style={{ width: "315px" }}
              type="text"
              placeholder="First Name"
            ></InputText>
            <InputText
              // value={project_name}
              // onChange={(e) => setProjectName(e.target.value)}
              style={{ width: "315px" }}
              type="text"
              placeholder="Last Name"
            ></InputText>
          </div>

          <div>
            <InputText
              className="text-input2"
              // value={project_name}
              // onChange={(e) => setProjectName(e.target.value)}
              style={{ width: "640px" }}
              type="text"
              placeholder="Email"
            ></InputText>{" "}
            <Button
              className="btn-color create-btn"
              label="Create"
              //   onClick={() => onClick("displayResponsive")}
            />
          </div>
        </Dialog>
      </div>
      <div>
        {users.map((user) => (
           <Carp key={user.email} user={user} />
        ))}
      </div>
    </>
  );
}

// export default Contacts;
