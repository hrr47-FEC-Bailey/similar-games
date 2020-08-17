import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Flexbox from 'flexbox-react';


class TagGames extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      withTags: []
    }
  }


  render() {
    return (
      <div style={{width: 609, overflowX: "scroll", fontsize: "2px"}}>

  {/* <Flexbox element="header" height="60px">
    Header
  </Flexbox> */}
  <Flexbox padding="8px 0px .5px" overflow="hidden" display="flex" alignItems="flex-start"  flexWrap="nowrap">
    {/* <Flexbox flexDirection="row" overflow="hidden" display="flex"  flex="0 0 50px" > */}
      {this.state.inSeries.map((game, index) => {
        return <Flexbox minWidth="200px" height="127px"  padding="1px" margin=".5px"  flex="0 0 50px"><div style={{backgroundColor: "#16202d", background: "#16202d", width: 200, height: 126}}><GameCards key={index} game={game}/></div></Flexbox>})}
    </Flexbox>
  </div>

    )
  }
}

export default TagGames;