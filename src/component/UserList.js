import {Link} from 'react-router-dom'

export const UserList = ({users}) => {
  return (
    <div>
      <h1 className=" text-center text-bg-secondary mt-1 m-80 rounded-2 mb-1">User List</h1>

      {users.map((user) => (
        <ul className="list-group list-group-horizontal row-cols-2 d-flex justify-content-center ml-70 ">
          <li className=" list-group-item text-bg-info">
            <h6 className=" d-flex justify-content-between">
              {user.firstName} {user.lastName}
              <Link to={"/users/" + user.id}>[...more info]</Link>
            </h6>
          </li>
        </ul>
      ))}
    </div>
  );
}
