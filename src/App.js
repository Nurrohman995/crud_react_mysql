import './App.css';
import React, {useState, useEffect} from 'react'
import UserTable from './table/userTable'
import axios from 'axios';
import EditUser from './forms/editUser';
import TambahUser from './forms/tambahUser';

const App = () => {
  const [user, setUser] = useState({user: []})
  const [refreshKey, setRefreshKey] = useState(0);
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const fetchData = async () =>{
      // const result = await axios(Modal.user)
      const result = await axios('url',)
      setUser(result.data)
    }
    fetchData()
  }, [refreshKey])


  const deleteUser = async(id) =>  {
    await axios('url').then(res => {
      setRefreshKey(oldKey => oldKey +1)
    })
  }

  const insertUser = async(user) => {
    const requestOptions = {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(user)
    };
    setEditing(false)
    fetch('url', requestOptions).then(res => {
      console.log(res);
      setRefreshKey(oldKey => oldKey +1)
    });
  }
  
  const updateUser = async(id, user) => {
    console.log(user)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    setEditing(false)
    fetch('url',requestOptions).then(res => {
      setRefreshKey(oldKey => oldKey+1)
    })
  }

  const initialForm = {id: null, name: '', email: ''}
  const [currentUser, setCurrentUser] = useState(initialForm)
  const editUser = async(user) => {
    setEditing(true)
    setCurrentUser({id : user.id, name: user.name, email: user.email})
  }

  return (
    <div className="container">
      <h1>Crud React Hooks</h1>
      <div className="flex-row">
        {editing ? (
          <div className="flex-large">
            <h2>Edit User</h2>
            <EditUser currentUser={currentUser} setEditing={setEditing} updateUser={updateUser} />
          </div>
        ) 
        : (
          <div className="flex-large">
          <h2>Tambah User</h2>
          <TambahUser insertUser={insertUser}/>
        </div>
        )}
        <div className="flex-large">
          <h2>Data User</h2>
          <UserTable user={user.user} editUser={editUser} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
