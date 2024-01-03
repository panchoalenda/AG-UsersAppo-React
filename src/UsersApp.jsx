import { useReducer } from "react";
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { userReducer } from "./components/reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        userName: 'Pancho',
        password: '12345',
        email: 'pancho_alenda@yahoo.com.ar'
    },
];

const initialForm = {
    userName: '',
    password: '',
    email: '',
};

export const UsersApp = () => {

    const [users, dispatch] = useReducer(userReducer, initialUsers);


    const handlerAddUser = (user) => {
        //console.log('Desde handler');
        //console.log(user);

        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    
    const handlerDeleteUser = (id) => {
        
        dispatch({
            type: 'deleteUser',
            payload: id,
        })
    }
    
    const handlerUpdateUser = (id) => {
        dispatch({
            type: 'updateUser',
            payload: id,
        })
    }
    
    return (
        <>
            <div className="container my-4">
                <h2>User App</h2>
                <div className="row">
                    <div className="col">

                        <UserForm handlerAddUser={handlerAddUser} initialForm={initialForm} />
                    </div>
                    <div className="col">

                        {users.length === 0 ?
                            (<div className="alert alert-warning">No hay usuarios para mostrar</div>)
                            :
                            (<UsersList users={users} handlerDeleteUser={handlerDeleteUser} />)
                        }

                    </div>

                </div>
            </div>
        </>
    )
}