import React, { useEffect, useState } from "react";
import "../App.css";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog"; //same thing as a modal
// import { Card } from "primereact/card";

export default function Contacts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const url = "https://randomuser.me/api/?results=20";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const { results } = json;
        // Only put the results in state, ie, the actual users array
        setAPIData(results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

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
                type="text"
                className="contact-search"
                onChange={(e) => searchItems(e.target.value)}
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
        >
          <h5>Details</h5>
          <div className="text-input">
            <InputText
              style={{ width: "315px" }}
              type="text"
              placeholder="First Name"
            ></InputText>
            <InputText
              style={{ width: "315px" }}
              type="text"
              placeholder="Last Name"
            ></InputText>
          </div>

          <div>
            <InputText
              className="text-input2"
              style={{ width: "640px" }}
              type="text"
              placeholder="Email"
            ></InputText>
            <Button className="btn-color create-btn" label="Create" />
          </div>
        </Dialog>
      </div>
      <div>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <Button
                  className="p-button-raised p-button-plain p-button-text"
                  style={{ width: "17rem", height: "15rem", margin: ".5em" }}
                >
                  <div className="textcard">
                    <img src={item.picture.thumbnail} alt="Profile Picture" />
                    {item.name.first} {item.name.last}
                    <br />
                    {item.email}
                  </div>
                </Button>
              );
            })
          : APIData.map((item) => {
              return (
                <Button
                  className="p-button-raised p-button-plain p-button-text"
                  style={{ width: "17rem", height: "15rem", margin: ".5em" }}
                >
                  <div className="textcard">
                    <img
                      className="profilepic"
                      src={item.picture.thumbnail}
                      alt="Profile Picture"
                    />
                    {item.name.first} {item.name.last}
                    <br />
                    {item.email}
                  </div>
                </Button>
              );
            })}
      </div>
    </>
  );
}
