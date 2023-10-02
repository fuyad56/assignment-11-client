import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newAccount, setNewAccount] = useState(false);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // User info
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        role: "admin",
        email: "",
        photo: "",
        password: "",
        success: "",
        error: "",
    });
    setLoggedInUser(user);

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                // Continue with your Firebase initialization code
            })
            .catch((error) => {
                console.error('Error configuring persistence:', error);
            });
    }, []);



    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const isLogin = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                    error: "",
                };
                setUser(isLogin);

                // Store user-related data in localStorage
                localStorage.setItem('userData', JSON.stringify(isLogin));

                console.log(isLogin);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = "";
                setUser(newUserInfo);
            });
    };


    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            setUser(parsedUserData);
        }
    }, []);

    // handle blur
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let isFieldValid = true;
        if (name === "name") {
            isFieldValid = value;
        }
        if (name === "email") {
            const re = /^\S+@\S+\.\S+$/;
            isFieldValid = re.test(value);
        }
        if (name === "password") {
            const isPasswordHasNumber = /\d{1}/.test(value);
            const isPasswordLengthValid = value.length >= 6;
            isFieldValid = isPasswordHasNumber && isPasswordLengthValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[name] = value;
            setUser(newUserInfo);
        }
        console.log(isFieldValid)
    };

    // handle submit
    const handleSubmit = (e) => {
        const { email, password } = user;
        if (email && password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((result) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo);
                    console.log(user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    };

    const handleAccount = () => {
        setNewAccount(!newAccount);
    }

    return (
        <div>
            <Navbar />
            <div className='text-2xl font-medium text-center mt-6'>
                {
                    !loggedInUser.error ? <p className='text-[#FF4545]'>{user.error}</p> : <p className='text-[#009444]'>User Login successful</p>
                }
            </div>
            <div className='flex justify-center items-center h-[80vh]'>
                {
                    !newAccount ? (
                        <div className='text-center'>
                            <h1 className='font-bold text-2xl mb-6'>Login with</h1>
                            <button onClick={handleLogin} className='border-2 py-1 px-4 rounded-full bg-[#F6F6F6] font-medium'><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
                            <p className='mt-2 text-[1rem] font-medium'>Don't have an account? <span className='text-[#251D58] cursor-pointer' onClick={handleAccount} >Create an account?</span></p>
                        </div>) : (
                        <form onSubmit={handleSubmit} action="" className='border rounded-3xl shadow-xl p-10 flex flex-col'>
                            <h1 className='text-2xl font-bold'>Sign up</h1>
                            <label htmlFor="name" className='text-lg font-medium mt-4'>Name</label>
                            <input onBlur={handleBlur} type="text" name='name' id='name' className='border-b-2 px-2 py-1 text-md bg-transparent' />
                            <label htmlFor="email" className='text-lg font-medium mt-4'>Email</label>
                            <input onBlur={handleBlur} type="email" name="email" id="email" className='border-b-2 px-2 py-1 text-md bg-transparent' />
                            <label htmlFor="password" className='text-lg font-medium mt-4'>Password</label>
                            <input onBlur={handleBlur} type="password" name="password" id="password" className='border-b-2 px-2 py-1 text-md bg-transparent' />
                            <input type="submit" value="Submit" className='mt-6 border-2 border-[#053B50] bg-white text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#053B50] hover:text-slate-300 hover:border-white' />
                            <p className='mt-2 text-[1rem] font-medium'>Already have an account? <span className='text-[#251D58] cursor-pointer' onClick={handleAccount}>Login?</span></p>
                        </form>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Login;