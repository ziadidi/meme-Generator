import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg: randMemeImg})
  }

  render() {
    return (
        <div className="header--project">
            <form className="form" onSubmit={this.handleSubmit}>
                <input 
                className="form--input"
                type="text"
                name="topText"
                placeholder="Top Text" 
                value= {this.state.topText}
                onChange={this.handleChange}
                />
            
                <input 
                className="form--input"
                type="text"
                name="bottomText" 
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
                />
                <button className="form--button">Gen</button>
            </form>
            <div className="meme">
                <img className="meme--image" src={this.state.randomImg} />
                <h2 className="meme--text top">{this.state.topText}</h2>
                <h2 className="meme--text bottom">{this.state.bottomText}</h2>
            </div>
        </div>
    )
  }
}

export default MemeGenerator;
