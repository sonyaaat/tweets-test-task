import Card from 'components/Card/Card';
import css from "./List.module.css"
import axios from "axios"
import { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
const List = () => {
    const [users,setUsers]=useState()
    useEffect(()=>{
 axios.get('https://639971e516b0fdad773ce5ba.mockapi.io/api/users')
  .then(function (response) {
    
    console.log(response.data);
    setUsers(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


    },[])
  return (
    <div >
      <div >
       {users ? <ul className={css.box}>
           {users.map((data) => {
            return <Card data={data}/>;
          })
        }
        </ul>: <div className={css.centered}><FadeLoader color="#5736A3" /></div>
}
      </div>
    </div>
  );
};
export default List;
