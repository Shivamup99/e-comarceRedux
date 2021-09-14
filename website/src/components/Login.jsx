import React,{useState} from 'react'
import { useHistory } from 'react-router'
import './Login.css'
function Login() {
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const loginUser = ()=>{
    history.push('/')
  }
    return (
 <div>
 <div className="container mt-3">
  <div className="row">
    <div className="col-md-5 mx-auto">
      <div id="first">
        <div className="myform form ">
          <div className="logo mb-3">
            <div className="col-md-12 text-center">
              <h1>Login</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control"  placeholder="Enter Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="col-md-12 text-center ">
              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" disabled={!validateForm()} onClick={loginUser}>Login</button>
            </div>
            <div className="form-group">
              <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div> 
   </div>
    </div>
    )
}

export default Login
