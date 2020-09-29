import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled, {css} from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import SeriesGames from './seriesGames.jsx';
import TagGames from './tagGames.jsx';
import Flexbox from 'flexbox-react';
//import App from './components/App';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #1b2838;
//   }
// `

class SimilarGames extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      currentGame: [
        {id: 1,
        name: "Voom Voom Motorcycle",
        price: 95,
        sale_percent: 0.25,
        series: "Product Creative Assistant",
        seriesID: 1,
        releasedt: "2020-02-14",
        reviews: 143,
        average_review: 4.5,
        tags: "auxiliary, wireless , open-source, solid state"
      }
      ]

    }
  }

  componentDidMount() {
    axios.get('/api/getGameByID/' + this.props.gameid)
    .then(result =>
      {
        {console.log(result.data)}
        this.setState({currentGame: result.data});
      })
      .catch(function(error)
      {
        console.log(error);
        console.log('Axios request fail');
        return Promise.reject(error);
      })
  }


  render() {
    return (

      <div style={{lineHeight: '10%'}}>

        <Flexbox display="flex" overflow="none" flexWrap="wrap" flex="1" width="400px" flexDirection="column">
          {this.state.currentGame[0].seriesName &&
           (
              <Flexbox flexDirection="row" justifyContent="space-between" margin="10px 5px 0 0">
              <h2 style={{fontSize: "13px" }}>{'MORE FROM ' + this.state.currentGame[0].seriesName.toUpperCase()}</h2>
              <div style={{float: "right", backgroundColor: "rgba( 103, 193, 245, 0.2 )", borderRadius: "1px", color: "#67c1f5", fontSize: "11px", width: "52px", height: "15px"}}><div style={{padding: "7px", textShadow: "none",  letterSpacing: ".4px"}}>{'S' + ('ee all').toLowerCase()}</div></div>
              </Flexbox>
          ) }


        <br/>
        <div style={{height: '1px', background: 'linear-gradient(to right, rgba(58,109,138,255), rgba(58,109,138,0))'}}>
          </div>
        <div>
          {(this.state.currentGame[0].seriesID) ? <SeriesGames key={this.state.currentGame[0].seriesID} seriesID={this.state.currentGame[0].seriesID} series={this.state.currentGame[0].series} /> : null} <p></p>
        </div>
        <Flexbox flexDirection="row" justifyContent="space-between" margin="50px 5px 0 0">
          <h2 style={{fontSize: "13px" }}>{this.state.currentGame[0] ? 'MORE LIKE THIS' : ''}</h2>
          <div style={{float: "right", backgroundColor: "rgba( 103, 193, 245, 0.2 )", borderRadius: "1px", color: "#67c1f5", fontSize: "11px", width: "52px", height: "15px"}}><div style={{padding: "7px", textShadow: "none",  letterSpacing: ".4px"}}>{'S' + ('ee all').toLowerCase()}</div></div>
        </Flexbox>
        <div style={{height: '1px', background: 'linear-gradient(to right, rgba(58,109,138,255), rgba(58,109,138,0))'}}>
          </div>
        <div>
          <TagGames tags={this.state.currentGame[0].tags} gameid={this.state.currentGame[0].id}/> <p></p>
        </div>
        </Flexbox>

      </div>


    )

    }
}

export default SimilarGames;
        //  width="800px" flexWrap="wrap" flex="1" overflow="scroll" alignContent="flex-start">