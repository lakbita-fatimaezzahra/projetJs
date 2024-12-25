import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterScreen() {
    const register = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        axios
            .post('http://localhost/projetJs/firstapp/public/index.php', formData)
            .then((response) => {
                alert(response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please check the console for details.');
            });
    };

    return (
        <div>
            <form onSubmit={register}>
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-5 text-left">
                        <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                        <div>
                            <input required type="text" name="name" placeholder="Name" className="form-control" />
                            <input required type="text" name="email" placeholder="Email" className="form-control" />
                            <input required type="password" name="password" placeholder="Password" className="form-control" />
                            <input required type="password" name="confirm_password" placeholder="Confirm Password" className="form-control" />
                            <button type="submit" className="btn mt-3">REGISTER</button>
                            <div className="mt-3 text-center">
                                <p>
                                    Already have an account?{' '}
                                    <Link to="/login" style={{ textDecoration: 'none', color: 'blue' }}>
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
