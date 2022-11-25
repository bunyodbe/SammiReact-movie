import "./app-info.css";
const AppInfo = (props) => {
  const { fovouriteMovieCount, allMovieCount } = props;
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">
        Barcha kinolar soni: {allMovieCount}
      </p>
      <p className="fs-4 text-uppercase">
        Sevimli kinolar soni: {fovouriteMovieCount}
      </p>
    </div>
  );
};

export default AppInfo;
