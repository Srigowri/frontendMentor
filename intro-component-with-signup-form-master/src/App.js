import React from "react";
import error from "./images/icon-error.svg"
function App() {
  const [formData, setFormData] = React.useState({
    "firstName":"",
    "lastName":"",
    "email":"",
    "password":""
  })
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };
  const [Fn,setFn] = React.useState("");
  const [Ln,setLn] = React.useState("");
  const [Em,setEm] = React.useState("");
  const [Pw,setPw] = React.useState("");
  function valid(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }      
      return (false)    
  }
  const handleSubmit = e =>{  
    e.preventDefault();
    if (formData.firstName===""){
      setFn("First name can not be empty")
    }else{
      setFn("")
    }
    if (formData.lastName===""){
      setLn("Last name can not be empty")
    }else{
      setLn("")
    }
    if (formData.email===""){
      setEm("Email can not be empty")
    }else{
      if (!valid(formData.email)){
        setEm("Looks like this is not an email");
      }else{
        setEm("")
      }
      
    }
    
    if (formData.password===""){
      setPw("Password can not be empty")
    }else{
      setPw("")
    }
  }
  return (
    <div className="App">
      <div>
        <h1>
        Learn to code by  <br/> watching others     
        </h1>
        <p>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
  but understanding how  developers think is invaluable.    
        </p>
      
      </div>

      <div>        
          <div className="box box-blue">
            <p>
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>
          </div>
          <div className="box">
            <div className="form-control">
              <input className={Fn?"error":""} type="text" name="firstName" value = {formData['firstName']} placeholder="First Name" onChange={handleChange}/>
              {Fn && <img  className ="error-img" src={error}/> }
              {Fn && <small>{Fn}</small>}
            </div>
            <div className="form-control">
              <input  className={Ln?"error":""} type="text" name="lastName" value = {formData['lastName']} placeholder="Last Name" onChange={handleChange}/>
              {Ln && <small>{Ln}</small>}
            </div>
            <div className="form-control">
              <input className={Em?"error":""} type="email" name="email" value = {formData['email']} placeholder="Email" onChange={handleChange}/>
              {Em && <small>{Em}</small> }
            </div>
            <div className="form-control">
              <input className={Pw?"error":""} type="password" name="password" value = {formData['password']} placeholder="Password" onChange={handleChange}/>
              {Pw && <small>{Pw}</small>}
            </div>                                                                                    
            <button onClick={handleSubmit}>CLAIM YOUR FREE TRIAL</button> 
            <small className="disclaimer">By Clicking the button, you are  agreeing our <a href="#">Terms and Services</a></small>          
          </div>
      </div>

    </div>
  );
}

export default App;
