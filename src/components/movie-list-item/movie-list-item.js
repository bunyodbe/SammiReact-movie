import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fovourite: false,
      like: false,
    };
  }

  onFovourite = () => {
    this.setState(({ fovourite }) => ({ fovourite: !fovourite }));
  };

  onLike = () => {
    this.setState(({ like }) => ({ like: !like }));
  };

  render() {
    const { name, viewers } = this.props;
    const { fovourite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex justify-content-between ${
          fovourite && "fovourite"
        } ${like && "like"}`}
      >
        <span onClick={this.onLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input "
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.onFovourite}
            type="button"
            className="btn-cookie btn-sm"
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

// const MovieListItem = ({ name, viewers, fovourite }) => {
//   return (
//     <li
//       className={`list-group-item d-flex justify-content-between ${
//         fovourite && "fovourite"
//       }`}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="number"
//         className="list-group-item-input "
//         defaultValue={viewers}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm">
//           <i className="fas fa-cookie"></i>
//         </button>
//         <button type="button" className="btn-trash btn-sm">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

export default MovieListItem;
