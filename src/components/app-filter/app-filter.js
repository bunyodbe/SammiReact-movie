import "./app-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnsArr.map((item) => (
        <button
          key={item.name}
          className={`btn ${
            filter == item.name ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => updateFilterHandler(item.name)}
        >
          {item.label}
        </button>
      ))}
      {/* <button className="btn btn-dark">Barcha kinolar</button>
      <button className="btn btn-outline-dark">Yoqtirgan kinolar</button>
      <button className="btn btn-outline-dark">
        Eng ko'p ko'rilgan kinolar
      </button> */}
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "Barcha kinolar" },
  { name: "like", label: "Yoqtirgan kinolar" },
  { name: "popular", label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;
