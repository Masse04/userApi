import { useEffect, useState } from "react";
//import axios from 'axios' ;
import logo from '../logo192.png'

const UserList = () => {
  const userLien = 'https://jsonplaceholder.typicode.com/users' ;
  const [listOfUser,setListOfUser] = useState([]) ;
  
  useEffect(()=> {

    // methode fetch avec promise et async
    const promise01 = fetch(userLien)
    promise01.then(async(res) => {
      try {
        const res2 = await res.json()
        setListOfUser(res2)
      } catch (error) {
        console.error(error.message)
      }
    })
    // methode fetch
    /* fetch(userLien)
      .then(res => res.json())
      .then(res2 => setListOfUser(res2))
      .catch(err => console.error(err.message)) */

      // methode axios
      /*axios(userLien)
      .then(res => setListOfUser(res.data))
      .catch(err => console.error(err.message))*/
  },[listOfUser])
    
  
  return (
    <div className='Users'> {listOfUser.map(el => (
      <div key={el.id} className = 'User'>
            <div className="card border-primary" style={{width: '18rem'}}>
              <img src= {logo} className="card-img-top" alt="..." style={{height : '10rem'}}/>
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">{el.username}</p>
                <p className="card-text">{el.email}</p>
              </div>
            </div>
      </div>
    ))}
  </div>
  )
}

export default UserList ;