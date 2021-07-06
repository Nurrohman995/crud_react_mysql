import React, {useState} from "react"

const TambahUser = (props) =>{
    const[user, setUser] = useState([])

    const handleInput = (event) => {
        const {name, value} = event.target

        setUser({...user, [name] : value})
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            props.insertUser(user)
        }}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInput}></input>
            <label>Email</label>
            <input type="email" name="email" onChange={handleInput}></input>

            <button>Simpan</button>
        </form>
    )
}

export default TambahUser