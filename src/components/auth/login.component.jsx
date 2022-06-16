import React, {useState, useEffect} from 'react';
import {
  TextField, Container, Card, Button,
} from '@mui/material';
import '../../assets/login.scss';
import {AuthService} from '../../services/index';
function Login() {

  let [errors, setErrors] = useState({});
  let [body, setBody] = useState({
    username: '',
    password: '',
  });

  const submitLogin = async () => {
    console.log(await AuthService.loginUser(body)); 
  }
  /**
   * handle input state change  
   */
  const handleChange = (e) => {
    
    switch(e.target.name){
      case 'username':
        setBody({...body, username: e.target.value});
        break;
      case 'password':
        setBody({...body, password: e.target.value});
        break;
      default: 
        break;
    }
    console.log(body);
  }


  return (
    <div>


        <section className=" centered-container  ">
        
            <div className="card border-2 border-solid p-24 px-32 flex flex-col gap-6 z-10">
            <h1 className="text-center mb-6 text-4xl">Zaloguj się</h1>
            <div>
                <TextField name="username" label="Username" variant="outlined" onChange={handleChange}/>

            </div>
            <div>
                <TextField name="password" label="Password" variant="outlined" onChange={handleChange} />

            </div>
            <div className="">
              
            </div>
            <div className="text-center mt-4">
                <Button onClick={submitLogin} variant="outlined"> Zaloguj się</Button>
            </div>
            

            </div>

        </section>

        </div>

  );
}

export { Login };
