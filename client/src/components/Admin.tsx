import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
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

    return (
        <div className="container m-auto mt-24">
            Hello
        </div>
    )
}