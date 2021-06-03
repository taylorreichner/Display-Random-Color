import React from 'react';
import propTypes from 'prop-types';

import style from './square.css';

const Colors = ({ color }) => {
   return (
   <div className={style.square} style={{background: color}}></div>
   )
}


Colors.propTypes = {
    color: propTypes.string.isRequired
}

export default Colors;