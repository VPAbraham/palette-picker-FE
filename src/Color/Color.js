import React from 'react';
import './Color.scss';

export const Color = (props) => {
  const style = {
    background: props.color
  }
  return (
    <div className={props.position} style={style} id="color">
    </div>
  )
}

export default Color;
