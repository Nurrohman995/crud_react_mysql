import React, { useState} from 'react'

const EditUser = (props) =>{

    const [user, setUser] = useState(props.currentUser)
    const handleInput = (event) => {
        const {name, value} = event.target

        setUser({...user, [name]: value})
    }
    return (
        <form onSubmit={(event) =>{
            event.preventDefault()
            props.updateUser(user.id, user)
        }}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleInput}></input>
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInput}></input>

            <button>Update</button>
        </form>
    )
}

export default EditUser