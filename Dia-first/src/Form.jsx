import { useState } from "react"



function form(){
    const [username, setUsername] = useState("");
    const[password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const userNameHandler = (e) =>{
        setUsername(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const ageHandler = (e) => {
        setAge(e.target.value);
    }
    const getDetails = () => {
        console.log({username, password, email, age});
    }
    

    return(
        <>
            <form action="#">
            <label htmlFor="username">Enter your username</label>
            <input type="text" name="username" placeholder="username" onChange={userNameHandler}/>
            <br></br>
            <br></br>
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" placeholder="password" onChange={passwordHandler}/>
            <br></br>
            <br></br>
            <label htmlFor="email">Enter your email</label>
            <input type="email" name="email" placeholder="email" onChange={emailHandler}/>
            <br></br>
            <br></br>
            <label htmlFor="age">Enter your age</label>
            <input type="age" name="age" placeholder="age" onChange={ageHandler}/>
            <br />
            <br />
            <button onClick={getDetails}>submit</button>
            </form>
        </>
    )
}

export default form