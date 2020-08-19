import React from 'react';
import ReactDom from 'react-dom';
import SimilarGames from './similargames.jsx';
import GlobalStyle from './globalStyles.js';

function SimilarGamesApp() {
  return (
    <React.Fragment>
    <GlobalStyle />
    <SimilarGames  gameid={5}/>
  </React.Fragment>
  )
}

ReactDom.render(<SimilarGamesApp/>, document.getElementById('similar-games'));

