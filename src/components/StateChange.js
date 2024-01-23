import React, { useEffect, useRef, useState } from 'react';

const StateChange = () => {
    const inputRef = useRef();
    const [myName, setMyName] = useState('');
    const [updated, setUpdated] = useState();

    const handleSubmit = (e) => {
        setMyName(e.target.value)
    }
    const changeState = (e) => {
        setUpdated(myName)
    }

    const handleClick = () => {
        setUpdated(inputRef.current.value);
    }

    return (
        <div>
            <h2>React State Change</h2>
            {/* <div>
          <input
                type="text"
                onChange={handleSubmit}
            />

            <h3>Messeage: {myName}</h3>
            <h3>Update Msg: {updated}</h3>
            <button onClick={changeState}>Update</button>
          </div> */}
            <div>
                <input
                    type="text"
                    ref={inputRef} />

                <h3>{updated}</h3>
                <button onClick={handleClick}>Update</button>
            </div>



        </div>
    );
};

export default StateChange;