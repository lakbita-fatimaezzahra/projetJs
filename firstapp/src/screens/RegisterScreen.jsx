import React  from 'react';


export default function RegisterScreen(){
  
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{fontSize:'35px'}}>Register</h2>
                    <div>    
                    <input required type="text" placeholder="name" className="form-control"  />                   
                    <input required type="text" placeholder="email" className="form-control" />
                    <input required type="password" placeholder="password" className="form-control" />
                    <input required type="password" placeholder="confirm password" className="form-control" />
                    
                    <button  className="btn mt-3">REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}