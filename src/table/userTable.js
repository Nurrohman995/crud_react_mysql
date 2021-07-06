const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Nama</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {props.user.length > 0 ? (
                    props.user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="button muted-button" onClick={() => props.editUser(user)}>Edit</button>
                                <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Hapus</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">Tidak ada User</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserTable