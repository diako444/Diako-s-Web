// componont composition
// lifting state up 

import { useState, useEffect } from "react"



function Newform(){

    const [count, setCount] = useState(0);
    function increase(){
        setCount(count+1)
    }

    useEffect(()=> {
        document.title = count
    }, [count])

    return(
        <>
            <p>count: {count}</p>
            <button onClick={increase}>increase</button>
            
        </>
    )
}

export default Newform