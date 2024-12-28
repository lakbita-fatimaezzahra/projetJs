import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
    return (
        <div style={{ marginTop: '90px', marginBottom: '40px' }}>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    <div>
                        <input
                            required type="text" placeholder="Email" className="form-control" />
                        <input
                            required type="password" placeholder="Password" className="form-control" />
                        <button className="btn mt-3">LOGIN</button>
                        <div className="mt-3 text-center">
                            <p>
                                Don't have an account?{' '}
                                <Link to="/register" style={{ textDecoration: 'none', color: 'blue' }}>
                                    Register here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
