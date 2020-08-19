import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Flexbox from 'flexbox-react';
import ReactTooltip from 'react-tooltip';
import Tooltips from './tooltips.jsx';

class GameCards extends React.Component {
  constructor(props) {
    super(props)
    this.tooltip = React.createRef();

    this.state =  {
      game: [],
      showBow: false
    }
    this.hoverEffect = this.hoverEffect.bind(this);
  }
  hoverEffect() {
    this.setState({showBox: !this.state.showBox});
    {this.state.showBox ? this.tooltip.current.stopInterval() : null}

  }
  render() {
    return (

      <div data-tip data-for={this.props.game.name} onMouseEnter={this.hoverEffect} onMouseLeave={this.hoverEffect} style={{lineHeight: ".6", letterSpacing: "1px"}}>
        <ReactTooltip id={this.props.game.name} place="right" effect="solid" type="light"  >
          <Tooltips ref={this.tooltip} game={this.props.game} images={this.props.game.media.split(',')}/>
        </ReactTooltip>
        <div style={{height: "130px", borderStyle: "solid", borderColor: (this.state.showBox) ? '#86dbf5' : '#16202d', borderWidth:  "1px"}}>
        <Flexbox flexDirection="column" flexWrap="wrap" flex="1" display="flex" margin="12px"  alignItems="center" maxHeight="120px" justifyContent="center">
          <div>
            <img style={{maxHeight: "60px", width: "170px", justifyContent: "center" }} src={this.props.game.media.split(',')[0]}/><br/>
          </div>
          <br/>
            <div style={{fontSize: "12px", color: "#8f98a0", lineHeight: "1"}}>
              {this.props.game.name.charAt(0).toUpperCase() + this.props.game.name.slice(1) + '\u2122'}
            </div>
          <br/>
            <Flexbox flexDirection="row" flexWrap="wrap" display="flex" alignItems="center">

            <div style={{background: "#4c6b22", color: "#a4c818", letterSpacing: ".5px", fontSize: "13px", height: "16px", width: "40px", lineHeight:"1.2", textAlign: "center"}}>
              {(this.props.game.sale_percent >= 0) ? ('  -' + this.props.game.sale_percent * 100 + '%') : ''}
            </div>
            <div style={{color: "grey",  letterSpacing: ".5px", background: "black", height: "16px", fontSize: "12px", lineHeight:"1.5", width: "60px", textAlign: "center", textDecoration: "line-through"}}>
              {'$' + this.props.game.price}
            </div>
            <div style={{background: "black", color: "#86dbf5", height: "16px", fontSize: "12px", lineHeight:"1.5", width: "50px", textAlign: "center"}}>
              {'$' + (this.props.game.price - (this.props.game.price * this.props.game.sale_percent)).toFixed(2, 2)}

            </div>
          </Flexbox>
        </Flexbox>
        </div>
      </div>
    )
  }

}

export default GameCards;