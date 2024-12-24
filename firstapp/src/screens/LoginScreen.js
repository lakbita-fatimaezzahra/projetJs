import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function LoginScreen() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch();

    function login() {
        const user = { email, password };
        console.log(user);
        dispatch(loginUser(user));
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    <div>
                        <input
                            required type="text" placeholder="Email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)}/>
                        <input
                            required type="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}/>
                        <button onClick={login} className="btn mt-3">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
