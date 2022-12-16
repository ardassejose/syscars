import React from 'react';
import { Fragment } from 'react';

const ImageRounded = (props) =>{
  return (
    <Fragment>
      <img className='rounded' src={props.img} alt=""></img>
    </Fragment>
  );
}

export default ImageRounded;