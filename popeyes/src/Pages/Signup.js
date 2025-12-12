import React from 'react'
import Signup_css from './Signup'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const Signup = () => {

  const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
 
        const firstname=form.fname.value;
        const lastname=form.lname.value;
        const email=form.email.value;
        const password=form.password.value;
        
        
        
                if(firstname===" " || lastname===" " || email===""|| password==="")
                {
                    toast.warn('Fill All  fields  ');
                }else{
                    const foods={firstname,lastname,email,password};
                   
                    
                    fetch('http://localhost:6002/createaccount',{
                        method:"POST",
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(foods),
                    })
                    .then((res)=>res.json())
                    .then((data)=>{
                      if(data.message==="User already exists"){
                        toast.error(data.message);
                        form.reset();
                      }
                      else{
                        toast.success(data.message);
                        window.location.href="/login";
                        form.reset()

                      }
                       
                    }
                    )
        
                }
        
                }


  return (
    <>
    <Navbar/>
    <ToastContainer/>
     <div class="container  ">
      <div class="  d-flex flex-column">
    <div>
        <h2 class="pt-5 mb-4 text-center">Create Account</h2>
    </div>

    <form onSubmit={handleSubmit} class="d-flex flex-column align-items-lg-center align-items-sm-center">
        <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" name="fname" class="form-control" id="exampleInputEmail1" placeholder="First Name" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="text" name="lname" class="form-control" id="exampleInputEmail1" placeholder="Last Name" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-2 ">
    <label for="exampleInputEmail1" class="form-label">email *</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-4 ">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" name="password"class="form-control input-lg" placeholder="password" id="example"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Email me with news and offers</label>
  </div>
 
  <button type="submit" class="btn ">Register Account</button>
  </form>
</div>
  <div class="  d-flex flex-column align-items-sm-center align-items-lg-center ">
  
  
<Link to="/Login"   class="text-dark credential pt-4"><i class="fa-solid fa-right-to-bracket"></i>Log In</Link>
<Link to="/" class="text-dark credential pt-2"><i class="fa-solid fa-box-open"></i>Return to store</Link>
</div>
</div>
<Footer/>
</>
  )
}

export default Signup