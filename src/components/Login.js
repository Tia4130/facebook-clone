import React from 'react'
import '../style/Login.css';
import facebookLogo from '../image/facebookLogo.png';
import facebook from '../image/facebook.png';
// import { auth, provider } from '../../src/firebase';
import { auth, provider } from "./firebase";
import { actionTypes } from '../reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login_logo'>
                <img src={facebookLogo} />
                <img src={facebook} />
            </div>
            <button type="submit" onClick={signIn}>
                SignIn
            </button>
        </div>
    )
}

export default Login