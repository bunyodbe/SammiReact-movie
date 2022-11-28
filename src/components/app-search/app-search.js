import { useState } from "react";
import "./app-search.css";
const AppSearch = (props) => {
  const [term, setTerm] = useState("");
  const updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    props.updateTermHandler(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Kinolarni qidirish"
      value={term}
      onChange={updateTermHandler}
    />
  );
};

export default AppSearch;
