import axios from 'axios'; 


    const loginUser = async (body) => {
        const response = await axios.post('http://localhost:3001/auth/login', {
           body, 
           method: 'POST' 
        });
        return response.data;    
    
    
    
    }
    

let AuthService = {
        loginUser
    }; 
export {AuthService};
