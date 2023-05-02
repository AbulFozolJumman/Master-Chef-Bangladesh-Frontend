import React from 'react';

const ShowError = (props) => {
    return (
        <div>
            {props.map(k=><h2>{k}</h2>)}
        </div>
    );
};

export default ShowError;