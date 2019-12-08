import React from 'react';
import './Color.scss';

const Color = (props) => {
  console.log(props)
  const bgColor = {
    background: props.color
  }
  return (
    <div className="color" style={bgColor}>
    </div>
  )
}

export default Color;
