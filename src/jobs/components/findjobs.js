import Styles from "../styles/findjobs.module.css";
import { useState } from "react";
import Joblist from './joblist.js';
import Postjob from './postjob.js';
import React from "react";
export default function Findjobs() {
  const [type, setType] = useState("find");
  return (
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
      {type==="find"?
      <Joblist/>
      :<Postjob/>}
    </div>
  );
}
