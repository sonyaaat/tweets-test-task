import axios from "axios"
export const getAllUsers=()=>{
    axios.get('https://639971e516b0fdad773ce5ba.mockapi.io/api/users')
  .then(function (response) {
   return response
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}