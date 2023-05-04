import React from 'react';

// This is default Error testing page
const ShowError = (props) => {
    return (
        <div>
            {props.map(k=><h2>{k}</h2>)}
        </div>
    );
};

export default ShowError;