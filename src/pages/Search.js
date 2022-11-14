import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { UserList} from '../component/UserList'

export const Search = () => {
    const [searchParams] = useSearchParams()
    let search = (searchParams.get('keyword'))
    const [users, setuser] = useState("")

    useEffect(() => {
        axios
          .get("https://dummyjson.com/users/search?q=" + search)
          .then((resp) => setuser(resp.data.users));
      
    }, [search])
    
    
  return (
    <>
      <h1 className="text-center">Search Result</h1>
      {users == 0 && (
        <h3 className=" text-center bg-warning">
          user not found with that name
        </h3>
      )}

      {users && <UserList users={users} />}
    </>
  );
}
