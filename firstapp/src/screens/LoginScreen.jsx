import React from 'react';
;

export default function LoginScreen() {


    return (
        <div style={{ marginTop: '90px',marginBottom:'40px' }}>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    <div>
                        <input
                            required type="text" placeholder="Email" className="form-control" />
                        <input
                            required type="password" placeholder="Password" className="form-control" />
                        <button className="btn mt-3">LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
