import { UserRow } from "./UserRow"

export const UsersList = ({ users = [], handlerDeleteUser, handlerUpdateUser }) => {
    return (
        <>
            <p>Listado de usuarios</p>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Remover</th>

                    </tr>
                </thead>

                <tbody>
                    {users.map(({id, userName, email}, index) =>

                        <UserRow 
                        id={id} 
                        userName={userName} 
                        email={email} 
                        key={index} 
                        handlerDeleteUser={ handlerDeleteUser }
                        handlerUpdateUser={ handlerUpdateUser }
                        />
                    )}

                </tbody>
                <tfoot>

                </tfoot>


            </table>
        </>
    )
}