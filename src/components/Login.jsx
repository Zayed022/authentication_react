import React, { useEffect, useState } from 'react'

import { auth} from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]= useState(null)

    const loginAccount=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            const loggedInUser = userCredentials.user;
            setUser(loggedInUser)
            console.log(userCredentials)
        })
        .catch((error)=>{
            console.log(error)
        })
    };

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser(null)
            console.log("sign out")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null);
            }
    });
    return()=> unsubscribe();
    },[])


  return (
    <div>
      <form onSubmit={loginAccount}>
        <h1>Login  Account</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
        <button type='submit'>Login</button>
      </form>
      {user?(
        <div>
        <p>Welcome ,{user.email}</p>
        <button onClick={logOut}>Log out</button>
        </div>
      ):(
        <p>You are not logged in</p>
      )}
    </div>
  )
}

export default Login
