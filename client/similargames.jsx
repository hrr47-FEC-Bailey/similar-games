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
    axios.get('http://localhost:3003/api/getGameByID/' + this.props.gameid)
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

        <Flexbox display="flex" overflow="hidden" flexWrap="wrap" flex="1" width="400px" position="absolute" flexDirection="column">
        <h2 style={{fontSize: "13px"}}>{this.state.currentGame[0].seriesName ? 'MORE FROM ' + this.state.currentGame[0].seriesName.toUpperCase() : ''}</h2> <br/>
        <div style={{height: '1px', background: 'linear-gradient(to right, rgba(58,109,138,255), rgba(58,109,138,0))'}}>
          </div>
        <div>
          {(this.state.currentGame[0].seriesID) ? <SeriesGames seriesID={this.state.currentGame[0].seriesID} series={this.state.currentGame[0].series} /> : null} <p></p>
        </div>
        <h2 style={{fontSize: "13px"}}>{this.state.currentGame[0] ? 'MORE LIKE THIS' : ''}</h2><br/>
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