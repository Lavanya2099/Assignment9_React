import React, { useCallback,useState} from 'react'

import Count from './Count'
import Button from './Button'

function Parent() {

    const [age, setage] = useState(10);
    const [salary, setsalary] = useState(1000)


//use call back 
   let incrementAge=useCallback(()=>{
       setage(age+1)
   },[age])

   let incrementSalary=useCallback(()=>{
       setsalary(salary+1000)
   },[salary])

    return (
        <div>
            <h2>by using useCallback</h2>
            
            <Count text='Age' count={age}/>
            <Button handleClick={incrementAge}>increment Age</Button>
            
            <Count text='Salary' count={salary}/>
            <Button handleClick={incrementSalary}>increment Salary</Button>
            

       
        </div>
    );
}

export default Parent
