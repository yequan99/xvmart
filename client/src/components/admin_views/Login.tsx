import { useState, FormEvent } from 'react'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'
import xvmartLogo from '../../assets/images/xvmart.jpg';
import { TextField, Button } from '@mui/material';

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [invalid, setInvalid] = useState(false)

    const onLogin = (e: FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/admin")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            setInvalid(true)
        });
    }

    return (
        <div className="container m-auto mt-24">
            <div className="flex flex-col jutify-center items-center">
                {/* eslint-disable-next-line */}
                <img className="h-16 w-48" src={xvmartLogo} />
                <div className="p-4 mt-4 border-2 border-slate-400 rounded-lg h-fit">
                    <h1 className="text-lg font-bold">Admin User sign-in</h1>
                    <form className="flex flex-col items-center" onSubmit={onLogin}>
                        <div className="my-2">
                            <TextField
                                label="Email"
                                size="small"
                                type="email"
                                name="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-2">
                            <TextField
                                label="Password"
                                size="small"
                                type="password"
                                name="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="my-2">
                            <Button type="submit" color="success" variant="contained">Login</Button>
                        </div>
                        <h1 className={`text-red-500 ${invalid ? "" : "hidden"}`}>Invalid Email/Password!</h1>
                    </form>
                </div>
            </div>
        </div>
    )
}