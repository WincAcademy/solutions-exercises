import React from "react";

class InputField extends React.Component {
  state = {
    input: ""
  };

  render() {
    const onInput = event => {
      this.setState({
        input: event.target.value
      });
    };

    const onSubmit = e => {
      e.preventDefault();
      this.props.onSubmit(this.state.input);
      this.setState({
        input: ""
      });
    };

    return (
      <form className="groceries-input" onSubmit={onSubmit}>
        <input
          placeholder="Vul je boodschappen in"
          type="search"
          onChange={onInput}
          value={this.state.input}
          className="input-primary"
        ></input>
        <button className="button-primary" type="submit">
          Voeg toe
        </button>
      </form>
    );
  }
}

export default InputField;
