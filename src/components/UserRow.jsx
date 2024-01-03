export const UserRow = ({id, userName, email, handlerDeleteUser, handlerUpdateUser}) => {

    const deleteUser = (id) => {
        handlerDeleteUser(id);
    }
    
    const updateUser = (id) => {
        handlerUpdateUser(id);
    }

    

    return (
        <>
            <tr> 
                <td>{id}</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td><button type="button" className="btn btn-secondary btn-sm" onClick={ ()=>updateUser(id) }>Update</button></td>
                <td><button type="button" className="btn btn-danger btn-sm" onClick={ ()=>deleteUser(id) }>Delete</button></td>
            </tr>
        </>
    )
}