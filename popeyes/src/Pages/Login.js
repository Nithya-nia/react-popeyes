import React from 'react'
import Login_css from './Login.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'

const Login = () => {

   const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
 
        const email=form.email.value;
        const password=form.password.value;
        
        
        
                if(email==="" || password==="" )
                {
                    toast.warn('Fill All Required fields  ');
                }else{
                    const foods={email,password};
                   
                    
                    fetch('http://localhost:6002/loginpage',{
                        method:"POST",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(foods),
                    })
                     .then((res)=>res.json())
                    .then((data)=>{
                      if(data.message=== "User not found. Please register."){
                          toast.error(data.message);
                        form.reset();
                      }
                      else if(data.message==="Invalid password"){
                        toast.error(data.message);
                        form.reset();
                        
                      }
                    

                      else{
                        toast.success(data.message);
                        form.reset();
                        localStorage.setItem("token",JSON.stringify(data.token))
                        window.location.href="/"
                      }
                    }
                    )
                  
                        
                       
                   
        
                }
        
                }
              

  return (
<>
<div id="Login-section">
<Navbar/>
<ToastContainer/>
   <div class="container-fluid  ">
      <div class=" row">
    <div class="col ">
        <h2 class="pt-5 mb-4 text-center">Login</h2>
    </div>
    <div>
    <form onSubmit={handleSubmit} class="d-flex flex-column align-items-lg-center align-items-sm-center">
      
  <div class=" col mb-2 ">
    <label for="exampleInputEmail1" class="form-label">Email *</label>
    <input type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
  </div>
  <div class=" col mb-4 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control input-lg" name="password" placeholder="password" id="example"/>
  </div>
 <div class="col">
  <button type="submit" class="btn ">Log In</button>
</div>
</form>
</div>



  <div class="d-flex flex-column align-items-center  ">
  
  <a href="#" class="text-dark credential"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="50" fill="currentColor" class="bi bi-key text-dark" viewBox="0 0 16 16">
  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>Forget Your Password ?</a>
<Link to="/Signup"   class="text-dark credential"><i class="fa-solid fa-user-plus"></i>Create Account</Link>
<Link to="/"  class="text-dark credential pt-2"><i class="fa-solid fa-box-open"></i>Return to store</Link>
</div>
</div>
</div>
<Footer/>
</div>
</>

  )
}

export default Login