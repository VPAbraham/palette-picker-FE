import React from 'react';
import './Color.scss';

const Color = (props) => {
  console.log(props)
  return (
    <div className={props.position} id="color">
    </div>
  )
}

export default Color;
