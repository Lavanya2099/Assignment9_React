import React, {useState, useMemo} from 'react'

function Counter() {

    const [counterone, setcounterone] = useState(0)
    const [countertwo, setcountertwo] = useState(0)
   
    let incrementone=()=>{
        setcounterone(counterone+1);

    }
   
    let incrementtwo=()=>{
        setcountertwo(countertwo+1);

    }

    let isEven=useMemo(()=>{
        console.log('evenodd function executed');

        let i= 0;
        while(i< 2000000000) i++;
        return counterone % 2 === 0

    },[counterone]);


return (
        <div>
            <div>
            <h2>by using useMemo</h2>
            <button onClick={incrementone}>Counter one: {counterone}</button>
           
            <span>{isEven ? 'even' : 'odd'}</span>
            </div>

            <button onClick={incrementtwo}>Counter two: {countertwo}</button>
        </div>
    )
}

export default Counter;
