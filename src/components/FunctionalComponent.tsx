import React, {useEffect, useState} from "react";

interface FunctionalComponentState {
    date: Date;
    timerId: any;
}

const FunctionalComponent: React.FC = () => {
    const [data, setData] = useState({
        date: new Date(),
    });

    const tick: Function = () => {
        setData({
            date: new Date(),
        });
    }

    useEffect(() => {
      let timerId=setInterval(
            () => tick(),
            1000
        );
      return()=>{
          clearInterval(timerId);
      }
    });

    return (
        <div>
            <br/>
            <h5>#### In this app we use State in Functional Component</h5>
            <h3>Date is {data.date.toLocaleDateString()}.</h3>
            <h3>Time is {data.date.toLocaleTimeString()}.</h3>
            <h3>DateTime is {data.date.toLocaleString()}.</h3>
        </div>
    );
}

export default FunctionalComponent;
