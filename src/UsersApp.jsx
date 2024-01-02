import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"

export const UsersApp = () => {

    const initialUsers = [
        {
            id:1,
            userName: 'Pancho',
            password: '12345',
            email: 'pancho_alenda@yahoo.com.ar'
        },
    ]


    return (
        <>
            <div className="container my-4">
                <h2>User App</h2>
                <div className="row">
                    <div className="col">

                        <UserForm />
                    </div>
                    <div className="col">

                        <UsersList users={initialUsers}/>
                    </div>

                </div>
            </div>
        </>
    )
}