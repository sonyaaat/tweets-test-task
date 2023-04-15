import axios from "axios"
export const getAllUsers=()=>{
   return axios.get('https://639971e516b0fdad773ce5ba.mockapi.io/api/users')

}