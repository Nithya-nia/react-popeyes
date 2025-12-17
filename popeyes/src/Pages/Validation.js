import React, { useState } from 'react'

const Form= () => {

    const[form,setForm]=useState({
        username:"",
        email:"",
        password:"",
    
      })

      const[error,setError]=useState({})


      const validation=()=>{
        const newError={}
        if(!form.username) newError.username="Kindly enter username";

        if(!form.email) newError.email="invalid email";
        else
        if(!/\S+@\S+\.\S+/.test(form.email)) newError.email=" missing error";

         if(!form.password) newError.password="invalid password";
        else{
          if(form.password.length<6) newError.password="must in 6 character";
          if(!/[a-z]/.test(form.password)) newError.password="must one lowercase character";
          if(!/[A-Z]/.test(form.password)) newError.password="must one uppercase character";
          if(!/[!@#$%&*?]/.test(form.password)) newError.password="must one in special character";
    
        }
        return newError;
      }

       const handleChange=(e)=>{ 

        const{name,value}=e.target;

        setForm(

            {
          ...form,
          [name]:value,
        }
    )
       }

       const handleSumbit=(e)=>{
        e.preventDefault();
        
        const validationerror=validation();
        
        if(Object.keys(validationerror).length===0)
        {
          console.log("form valid",form)
          setForm({
            username:"",
            email:"",
            password:"",
          })
          setError({});
        }
          
          else{
            setError(validationerror)
          }
        
       }   

      return (
        <div class="container"> 
        <div class="row">
            <div class="col">
            <h1 class="text-center pt-5 mt-4">Validation</h1>
            </div>
            <div>
      <form onSubmit={handleSumbit} class="d-flex flex-column align-items-lg-center align-items-sm-center">

            <div class="col mb-2">
                <br/>
                <label>USERNAME</label><br/>
                <input type="text" name='username' className='form-control'  placeholder='username' onChange={handleChange} value={form.username} />
                {error.username&&<p>{error.username}</p>}
    
            </div>
            
            <div className='col mb-2'>
            <label>EMAIL</label><br/>
            <input type="email" class="form-control" name='email' placeholder='Enter email' onChange={handleChange} value={form.email} />
            {error.email&&<p>{error.email}</p>}
            </div>

            <div class="col mb-2">
                <label>PASSWORD</label><br/>
                <input type="password"name='password'class="form-control" placeholder='Enter Password'onChange={handleChange} value={form.password}  />
                {error.password&&<p>{error.password}</p>}
                <br/>
            </div>
             <br/>
            <button class="btn btn-primary">submit</button>
            
            
            </form>
            </div>
        </div>
        </div>
      )
}

export default Form
 

