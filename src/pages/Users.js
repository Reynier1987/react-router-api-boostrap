import {useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import {UserList} from '../component/UserList'
import {UserDetails} from '../component/UserDetails'

export const Users = () => {
  const [users, setusers] = useState([])

  useEffect(() => {
     axios.get("https://dummyjson.com/users")
      .then(res=> setusers(res.data.users))
  }, [])
  console.log(users)
  return (
    <>
    <Routes>
      <Route index element={<UserList users={users}/>}/>
      <Route path=':userid' element={<UserDetails/>}/>
    </Routes>
    </>
  );
}
