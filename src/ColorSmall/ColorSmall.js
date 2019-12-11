import React from 'react';
import './ColorSmall.scss';

export const ColorSmall = (props) => {
  const style = {
    background: props.color
  }
  return (
    <div style={style} id="color-small">
    </div>
  )
}

export default ColorSmall;
