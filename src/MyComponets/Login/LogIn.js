import React from 'react'
import { useState } from 'react'
function LogIn({Login,error}){
    const [details, setDetails]=useState({ branch:"",password:""});

    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
  return (
    <>
    <form onSubmit={submitHandler}>
        <div className='App form-inner'>
            <h1 className='py-5'>Swastik Matrimonial</h1>
            <h3 className='py-2'><strong>Login</strong></h3>
            {(error!=="")?(<div><span  className='error py-2 px-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
                {error}</span></div>):""}
            <div className="my-2 form-group">
                <label for="formGroupExampleInput" className="form-label">Enter Branch</label>
                <input type="text" className="form-control width" id="formGroupExampleInput" onChange={e=>setDetails({...details, branch:e.target.value})} value={details.branch}/>
            </div>
            <div className="form-group ">
                <label for="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" className="form-control width" id="formGroupExampleInput2" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
            </div>
            <button type="submit" className="btn btn-primary my-3">LogIn</button>
        </div>
    </form>
    
    </>
  )
}
export default LogIn;