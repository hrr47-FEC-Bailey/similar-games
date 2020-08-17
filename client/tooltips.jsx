import React from 'react';
import ReactDom from 'react-dom';
import Flexbox from 'flexbox-react';

class Tooltips extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: [],
      tags: [],
      images: [],
      currentImage: 0
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 2000);
    {console.log(this.props.images)}
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    const {images, currentImage} = this.state;
    const noOfImages = images.length;

    if (currentImage !== noOfImages - 1) {
      var newCurrentImage = currentImage + 1;
    }
    else if (currentImage = noOfImages - 1)
    {
      var newCurrentImage = 0;
    }
    this.setState({currentImage: newCurrentImage});
  }
  render() {
    return (
      <div style={{fontSize: "12px", padding: "2px", lineHeight: "1.7", letterSpacing: ".6px", textShadow: "none", margin: "2px"}}>
        <div style={{fontSize: "15px"}}>{this.props.game.name.charAt(0).toUpperCase() + this.props.game.name.slice(1)}</div>
        <div style={{fontSize: "10px"}}>{'Released: ' + this.props.game.releasedt.split('T')[0].toString()}</div>
        <div>
          <img src={this.props.images[this.state.currentImage]} width="250" height="125"/>
        </div>
        <div style={{background: "#6a7884", padding: "2px", width: "250px", height: "35px", lineHeight: "1.2", color: "white"}}>
          <div>
            Overall user reviews:
          </div>
          <div>
            {'Very positive ' + '(' + this.props.game.reviews + ' reviews)'}
          </div>
        </div>
        <div>
            {'User tags:'}
          </div>
          <div>
            {/* {console.log(this.state.tags)} */}
          <Flexbox flexDirection="row" flexWrap="wrap" display="flex" alignItems="center" flex="0 0 50px" justifyContent="space-between">
              <div style={{background: "#96a3ae", color: "white"}}><div style={{padding: "3px"}}>{this.props.game.tags.split(',')[0]}</div></div>
              <div style={{background: "#96a3ae", color: "white"}}><div style={{padding: "3px"}}>{this.props.game.tags.split(',')[1]}</div></div>
              <div style={{background: "#96a3ae", color: "white"}}><div style={{padding: "3px"}}>{this.props.game.tags.split(',')[2]}</div></div>
              <div style={{background: "#96a3ae", color: "white"}}><div style={{padding: "3px"}}>{this.props.game.tags.split(',')[3]}</div></div>
              <div style={{background: "#96a3ae", color: "white"}}><div style={{padding: "3px"}}>{this.props.game.tags.split(',')[4]}</div></div>
          </Flexbox>
          </div>
      </div>
    )
  }
}

export default Tooltips;