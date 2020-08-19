import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Flexbox from 'flexbox-react';
import GameCards from './gameCards.jsx';


class TagGames extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      withTags: [],
      tags: [],
      tagIDs: [1, 3, 4, 5, 7],
      gameid: 0
    }
  }

  componentDidMount() {
    {var tagString = ''}
    {this.state.tagIDs.map((tag) => { tagString = tagString + tag  + '&'})}
    {tagString = tagString.substring(0, tagString.length-1)}
    axios.get('/api/getGamesByTags/' + this.props.gameid + '/' + tagString)
    .then(result =>
      {
        this.setState({withTags: result.data});
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
      <div style={{width: 609, overflowX: "scroll", fontsize: "2px", overflowY: "hidden"}}>
        <Flexbox padding="8px 0px .5px" overflow="hidden" display="flex" alignItems="flex-start"  flexWrap="nowrap">
          {this.state.withTags.map((game, index) => {
            return <Flexbox minWidth="200px" height="133px"  padding="1px" margin=".5px"  flex="0 0 50px"><div style={{backgroundColor: "#16202d", background: "#16202d", width: 200, height: 132}}><GameCards key={index} game={game}/></div></Flexbox>})}
        </Flexbox>
      </div>

    )
  }
}

export default TagGames;