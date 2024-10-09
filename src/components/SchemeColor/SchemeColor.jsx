import React from 'react';
import './SchemeColor.css';

export const SchemeColor = ( {color} ) => (
    <div className="scheme-color" key={color}  style={ {backgroundColor: color} } >
                        {color}
    </div>
) 