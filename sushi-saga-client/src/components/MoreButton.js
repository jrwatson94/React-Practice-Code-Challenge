import React from 'react'

const MoreButton = (props) => {
  const render = () => {
    console.log(props)
    props.moreButtonHandler(props.x+4,props.y+4)
  }

  return <button onClick={render}>
          More sushi!
        </button>
}

export default MoreButton