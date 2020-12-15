import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      text: ''
    };
  }

  handleOnInput = (event) => {
    const textContent = event.target.value
    console.log(textContent)
    // console.log(textContent)
    if (textContent.length > this.state.maxChars) return
    this.setState({
      text: textContent
    })
  }

  remainingCharacters() {
    return this.state.maxChars - this.state.text.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.text} type="text" name="message" id="message" onChange={ this.handleOnInput } />
        <p>Remaining Characters: { this.remainingCharacters() }</p>
      </div>
    );
  }
}

export default TwitterMessage;
