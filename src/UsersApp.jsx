import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";


export const UsersApp = () => {

const {
    //Atributos que devolvemos
    users,
    userSelected,
    initialForm,

    //Funciones que devolvemos
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelectedForm,
} = useUsers();

  return (
    <>
      <div className="container my-4">
        <h2>User App</h2>
        <div className="row">
          <div className="col">
            <UserForm
              handlerAddUser={handlerAddUser}
              initialForm={initialForm}
              userSelected={userSelected}
            />
          </div>
          <div className="col">
            {users.length === 0 ? (
              <div className="alert alert-warning">
                No hay usuarios para mostrar
              </div>
            ) : (
              <UsersList
                users={users}
                handlerDeleteUser={handlerDeleteUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
