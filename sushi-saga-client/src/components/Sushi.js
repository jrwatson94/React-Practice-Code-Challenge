import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }
  clickHandler = ()=> {
    if (!this.state.eaten && this.props.money >= this.props.price){
      this.setState({eaten:true})
      this.props.buySushi(this.props.price,this.props.id)
    }else {
      null
    }

  }
  render(){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.clickHandler}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.state.eaten ? null : <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
}

export default Sushi