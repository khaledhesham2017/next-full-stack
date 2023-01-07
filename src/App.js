import './App.css';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {useState} from "react";

function App() {
    const [userList,setUserList] = useState([]);
    const addUserHandler = (uName,uAge) => {
      setUserList((prevUserList)=>{
          return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}]
      })
    }
  return (
    <div >
      <AddUser onAddUser={addUserHandler}/>
        <UsersList users={ userList }/>
    </div>
  );
}

export default App;
