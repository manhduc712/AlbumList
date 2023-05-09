import React, { useState, useRef, memo, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'



function Login({ setToken, setTokens }) {

    const [account, setAccount] = useState([])

    const nameRef = useRef();

    const emailRef = useRef();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((res) => {
                setAccount(res);
            });
    }, []);

    const check = param => {
        if (typeof param === 'undefined' || param.toString() === '')
            return false
        return true

    }

    const navigate = useNavigate();

    const handleLogin = () => {
        const userName = nameRef.current.value
        const email = emailRef.current.value

        if (check(userName)) {
            if (check(email)) {

                const process = account.find(e => e?.username === userName && e?.email === email);

                if (!process) {
                    alert('UserName or Email Không đúng !')
                } else {
                    const user = { ...process }
                    setTokens(user)
                    setToken(user)
                    navigate("/posts")
                }
            } else {
                alert('Chưa Nhập Email !')
                emailRef.current.focus()
            }
        } else {
            alert('Chưa Nhập UserName !')
            nameRef.current.focus()
        }
    }

    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="w-50">
                <h2 className="text-center">Login User</h2>
                <form >
                    <div className="form-group">
                        <label forhtml="UserName">UserName:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="UserName"
                            placeholder="Enter UserName"
                            name="UserName"
                            ref={nameRef}
                        />
                    </div>
                    <div className="form-group">
                        <label forhtml="Email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            placeholder="Enter Email"
                            name="Email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <button type="button" onClick={handleLogin} className="btn btn-primary ">Login</button>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default memo(Login);

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}