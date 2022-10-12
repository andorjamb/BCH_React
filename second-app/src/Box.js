import React from 'react';

const Box = (props) => {
    return (
        <div className="box">
            <div>
                <h2>{props.name}</h2>
                <p>Title: {props.title}</p>
                <p>Age: {props.age}</p>
            </div>
        </div>

    );
};

export default Box;