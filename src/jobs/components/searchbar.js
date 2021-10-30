import Styles from "../styles/search.module.css";

export default function Searchbar(props) {
  return (
    <div id={Styles.container}>
      <div id={Styles.box}>
        <div id={Styles.contain}>
          <i id={Styles.icon} className="fas fa-search"></i>
          <input
            type="text"
            id={Styles.text}
            placeholder="Search"
            onChange={(e) => props.value.setSearch(e.target.value)}
          />
        </div>
        <div id={Styles.contain}>
          <i id={Styles.icon} className="far fa-map"></i>
          <select
            id={Styles.text}
            onChange={(e) => {
              props.value.setLocation(e.target.value);
              props.value.dispatch({ type: "location", value: e.target.value });
            }}
          >
            <option value="">Select Location</option>
            <option value="Nashville, TN">Nashville, TN</option>
            <option value="New York, NY">New York, NY</option>
            <option value="Bengaluru, India">Bengaluru, India</option>
            <option value="Berlin, Germany">Berlin, Germany</option>
          </select>
        </div>
        <button
          id={Styles.button}
          onClick={() => {
            props.value.dispatch({
              type: "search",
              value: props.value.search,
            });
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
