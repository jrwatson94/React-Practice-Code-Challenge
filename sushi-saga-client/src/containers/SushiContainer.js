import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{
  state ={
    x: 0,
    y: 4
  }
  moreButtonHandler = (x,y) => {
    this.setState({
      x: x,
      y: y
    })
  }
  onlyRenderFour = (x,y) => {
    const sushis = this.renderSushi()
    return sushis.slice(this.state.x,this.state.y)
  }
  renderSushi = () => {
    return this.props.sushis.map(sushi => <Sushi {...sushi} key={sushi.id} buySushi ={this.props.buySushi}/>)
  }
  render(){

    return (
      <Fragment>
        <div className="belt">
          {this.onlyRenderFour()}
          <MoreButton x={this.state.x} y={this.state.y} moreButtonHandler={this.moreButtonHandler}/>
        </div>
      </Fragment>
    )
  }
  
}

export default SushiContainer