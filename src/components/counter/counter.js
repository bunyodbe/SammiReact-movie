import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  inCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  resCounter = () => {
    this.setState({ counter: 0 });
  };

  setCounterValue = (e) => {
    const val = e.target.value;
    if (val.trim() !== "") {
      this.setState({ counter: e.target.value });
    } else {
      this.resCounter();
    }
  };

  render() {
    return (
      <div className="w-50 mx-auto">
        <h1>{this.state.counter}</h1>
        <button onClick={this.inCounter} className="btn btn-success">
          INC
        </button>
        <button onClick={this.decCounter} className="btn btn-danger mx-2">
          DEC
        </button>
        <button onClick={this.resCounter} className="btn btn-info">
          RES
        </button>
        <form>
          <input
            onChange={this.setCounterValue}
            type="text"
            className="form-control mt-3"
          />
        </form>
      </div>
    );
  }
}

export default Counter;
