import React from 'react';

interface ReRenderDomProps {
    date: Date;
}

function ReRenderDom(props: ReRenderDomProps) {
    return (
        <div>
            <h2>Current Date Time!!!!</h2>
            <h5>#### In this app we render element in DOM everytime</h5>
            <h3>Date is {props.date.toLocaleDateString()}.</h3>
            <h3>Time is {props.date.toLocaleTimeString()}.</h3>
            <h3>DateTime is {props.date.toLocaleString()}.</h3>
        </div>
    );
}

export default ReRenderDom;
