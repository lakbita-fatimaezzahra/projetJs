import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux'

export default function RegisterScreen(){
    const[name , setname] = useState('')
    const[email , setemail] = useState('')
    const[password , setpassword] = useState('')
    const[cpassword , setcpassword] = useState('')

    const dispatch = useDispatch()
    function register(){

        if(password!=cpassword)
        {
            alert("passwords are not matched")
        }
        else{
            const user={
                name,
                email,
                password,
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }       

    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 text-left">
                    <h2 className="text-center m-2" style={{fontSize:'35px'}}>Register</h2>
                    <div>    
                    <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />                   
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> setemail(e.target.value)}/>
                    <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <input required type="password" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e)=>setcpassword(e.target.value)}/>
                    
                    <button onClick={register} className="btn mt-3">REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}