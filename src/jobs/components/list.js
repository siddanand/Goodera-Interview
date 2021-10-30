import Styles from "../styles/list.module.css";
import { useEffect, useState } from "react";

export default function List(props) {
  const [current, setCurrent] = useState();
  const truncate = (str) => {
    return str.length > 10 ? str.substring(0, 100) + "..." : str;
  };
  console.log(current);
  return (
    <div>
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">{current.id}</h4>
            </div>
            <div class="modal-body">
              <p>{current.contents}.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid" id={Styles.container}>
        {props.value.list.map((item) => {
          return (
            <div key={item.id} id={Styles.box}>
              <img
                id={Styles.image}
                alt=""
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80"
              />
              <div style={{ marginLeft: "10px" }}>
                <p id={Styles.heading}>{item.name}</p>
                <p id={Styles.location}>
                  Location: {item.locations[0].name} | Company:{" "}
                  {item.company.name}
                </p>
                <p id={Styles.bio}>{truncate(item.contents)}</p>
                <button
                  id={Styles.button}
                  onClick={() => setCurrent(item)}
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
