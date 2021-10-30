import Styles from "../styles/findjobs.module.css";
import { useState, useEffect, useReducer } from "react";
import Joblist from "./joblist.js";
import Postjob from "./postjob.js";
import Searchbar from "./searchbar.js";
import List from "./list.js";
import React from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    state = action.value;
    state = [...state];
    return state;
  } else if (action.type === "search") {
    const arr = state.filter((item) => {
      return item.name.toLowerCase().includes(action.value.toLowerCase());
    });
    return arr;
  } else if (action.type === "location") {
    const arr = state.filter((item) => {
      return item.locations[0].name.includes(action.value);
    });
    return arr;
  }
  return state;
};
export default function Findjobs() {
  const [list, dispatch] = useReducer(reducer, []);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("find");
  const [all, setAll] = useState([]);
  const [location, setLocation] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let response = await fetch(
      "https://www.themuse.com/api/public/jobs?page=1"
    );
    response = await response.json();
    setAll(response.results);
    dispatch({ type: "add", value: response.results });
  };
  useEffect(() => {
    if (search === "") {
      dispatch({ type: "add", value: all });
    }
  }, [search]);
  useEffect(() => {
    if (location === "") {
      dispatch({ type: "add", value: all });
    }
  }, [location]);
  console.log(list);
  return (
    <div>
      <div className="container-fluid" id={Styles.container}>
        <div id={Styles.nav}>
          <div id={Styles.hunt}>
            <i className="fas fa-briefcase"></i> Job Hunt
          </div>
          {type === "find" ? (
            <React.Fragment>
              <div id={Styles.find} style={{ borderBottom: "2px solid white" }}>
                Find Jobs
              </div>
              <div
                id={Styles.post}
                onClick={() => {
                  setType("post");
                }}
              >
                Post a Job
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div
                id={Styles.find}
                onClick={() => {
                  setType("find");
                }}
              >
                Find Jobs
              </div>
              <div id={Styles.post} style={{ borderBottom: "2px solid white" }}>
                Post a Job
              </div>
            </React.Fragment>
          )}
          <div id={Styles.signout}>Sign Out</div>
        </div>
        {type === "find" ? <Joblist /> : <Postjob />}
      </div>
      <div class="container-fluid">
        <Searchbar value={{ search, setSearch, dispatch, setLocation }} />
        <List value={{ list }} />
      </div>
    </div>
  );
}
