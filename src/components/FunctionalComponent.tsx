import React, {useEffect, useState} from "react";


const FunctionalComponent: React.FC = () => {
    const [date, setDate] = useState(new Date());

    const tick: Function = () => {
        setDate(new Date());
    }

    useEffect(() => {
        let timerId = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerId);
        }
    });

    return (
        <div>
            <br/>
            <h5>#### In this app we use State in Functional Component</h5>
            <h3>Date is {date.toLocaleDateString()}.</h3>
            <h3>Time is {date.toLocaleTimeString()}.</h3>
            <h3>DateTime is {date.toLocaleString()}.</h3>
        </div>
    );
}

export default FunctionalComponent;
