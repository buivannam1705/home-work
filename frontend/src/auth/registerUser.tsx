import axios from 'axios';
 

export const registerUser = async (username:string, password:string) => {
  try {
    const response = await axios.post(`http://register`, {
      username,
      password
    }).then(response => {
        console.log('success');
        console.log(response.data);
         return response.data;
        
    })
    
   
  } catch (error) {
    throw error;
  }
};