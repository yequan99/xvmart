import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../../firebase';

import xvmartLogo from '../../assets/images/xvmart.jpg';
import AdminPanel from './AdminPanel'
import { ApiProps } from '../../types/mainTypes';

export default function Admin({ apiData }: { apiData: ApiProps}) {

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
        <div className="container m-auto mt-4">
            <div className="flex flex-row justify-between items-center">
                <Link to="/">
                    {/* eslint-disable-next-line */}
                    <img className="h-16 w-48" src={xvmartLogo} />
                </Link>
                <div className="flex items-center border-2 border-slate-400 bg-slate-300 p-2 w-fit h-10 rounded-lg cursor-pointer" onClick={SignOut}>Sign Out</div>
            </div>
            <div className="mt-4">
                <AdminPanel apiData={apiData} />
            </div>
        </div>
    )
}