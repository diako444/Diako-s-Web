import { useState } from "react"

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState('');
history
function form(){
    return(
        <>
            <label htmlFor="firstName">Enter your First Name</label>
            <input type="text" name="firstName" placeholder="First Name"/>
            <label htmlFor="password">Enter your First Name</label>
            <input type="password" name="password" placeholder="password"/>
        </>
    )
}

export default form