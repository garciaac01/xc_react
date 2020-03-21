import React from 'react';

const runner = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Grade: {props.grade}</p>
            <p>Age: {props.age}</p>
            <p>PR: {props.pr}</p>
        </div>
    )
};

export default runner;