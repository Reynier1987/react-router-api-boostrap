import {Link, useParams} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const UserDetails = () => {
  const {userid} = useParams();
  const [user, setuser] = useState([])

  useEffect(() => {
      axios.get("https://dummyjson.com/users/"+ userid)
      .then (res=>setuser(res.data))
  }, [userid])
  
  
  return (
    <>
      <div className=" card">
        <div className=" card-body text-bg-secondary m-44 mt-1 p-4 mb-0">
          <div className=" card-title">
            <p className=" text-3xl text-center text-dark font-bold fon">User Details</p>
          </div>
          <div className="row">
            <div className=" col-7">
              <ul className=" list-group">
                <li className=" list-group-item list-group-item-danger">NAME:{user.firstName}</li>
                <li className=" list-group-item list-group-item-info">LAST NAME:{user.lastName}</li>
                <li className=" list-group-item list-group-item-primary">EMAIL:{user.email}</li>
                <li className=" list-group-item list-group-item-secondary">AGE:{user.age}</li>

                <li className=" list-group-item list-group-item-success">PHONE:{user.phone}</li>
                <li className=" list-group-item list-group-item-warning">GENDER:{user.gender}</li>
              </ul>
            </div>
            <div className="col-5 border-2 border-dark bg-warning rounded-2">
              <h3 className="text-center text-dark">Photo:</h3>
              <img src={user.image} style={{ width: 350 }}></img>
            </div>
          </div>
        </div>
        
          <Link className=' btn btn-light' to="/users/">Back to Users Page</Link>
       
      </div>
    </>
  );
}
