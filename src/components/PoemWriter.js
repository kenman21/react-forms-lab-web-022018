import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: true
    };
  }

  isValid = (poem) => {
    let poem_array = poem.split("\n").map(line => line.trim());

    if (poem_array.length === 3){
      if ((poem_array[0].split(" ").length === 5) && (poem_array[1].split(" ").length === 3) && (poem_array[2].split(" ").length === 5)){
        return true
      }
    }
    return false
  }

  handleChange = (e) => {
    const poem = e.target.value
    this.setState({
      poem: e.target.value,
      valid: this.isValid(poem)
    })

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {this.state.valid === false ? <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>: null}
      </div>
    );
  }
}

export default PoemWriter;
