import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled, {css} from 'styled-components';
//import App from './components/App';

// const StyledView = styled.div`
// background-color: #1b2838
// `

class SimilarGames extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  // componentDidMount() {
  //   // const {data} = axios.get('/getCurrentGame')
  //   // .then()

  // }
  render() {
    return (
      <div>
        <h1>Similar Games</h1>
      {/* <StyledView></StyledView> */}
      </div>


    )

    }
}

export default SimilarGames;
