import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase';

export default function Admin() {

    const navigate = useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                console.log("uid", uid)
            } else {
                // redirect to login page if not logged in
                navigate("/login")
            }
        });
        // eslint-disable-next-line
    }, [])

    const SignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/login")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container m-auto mt-24">
            <div className="border-2 bg-slate-300 p-4 w-fit rounded-lg cursor-pointer" onClick={SignOut}>Sign Out</div>
        </div>
    )
}