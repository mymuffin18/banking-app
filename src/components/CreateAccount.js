import React, {useState} from 'react'

function CreateAccount() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    return (
        <>
          <input type="email" placeholder="email" value={email} onChange = {e=>setEmail(e.target.value)} /><br/>
          <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/> <br/> 
          <button>Create Account</button>
        </>
    )
}

export default CreateAccount
