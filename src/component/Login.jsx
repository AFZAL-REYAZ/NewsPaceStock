import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-8 offset-4">
                <div className="card">
                    <h5 className="card-header"> Login</h5>
                    <div className="card-body">
                    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <Link to="">Create Account</Link>
    <Link to="" className='float-end'> Forget Password</Link>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login