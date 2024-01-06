import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";
import "./styles.css";

export const UsersApp = () => {
  //Utilizamos el hook personalizado de useUsers
  const {
    //Atributos que devolvemos
    users,
    userSelected,
    initialForm,
    valueOpenCloseForm,

    //Funciones que devolvemos
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelectedForm,
    openCloseForm,
  } = useUsers();

  return (
    <>
      <div className="d-flex d-flex justify-content-center my-2">
        <div className="bg-success-subtle p-2 text-dark bg-opacity-50 text-white col-md-10 d-flex d-flex justify-content-center align-items-center">
          <img
            className="banner"
            src="https://tramite.sanjuan.gob.ar/tpf//img/logoguiatramites.png"
          />
          <div className="text-center">
            <h3 className="text-dark">SECRETARÍA DE TRÁNSITO Y TRANSPORTE</h3>
          </div>
        </div>
      </div>
      <div className="d-flex d-flex justify-content-center my-5">
        <h2 className="text-dark">REGISTRO DE USUARIOS</h2>
      </div>
      <div className="container my-4 ">
        <div className="row my-5 ">
          {valueOpenCloseForm ? (
            <div className="col border border-1 p-5">
              <UserForm
                handlerAddUser={handlerAddUser}
                initialForm={initialForm}
                userSelected={userSelected}
                openCloseForm={openCloseForm}
              />
            </div>
          ) : (
            ""
          )}
          <div className="col">
            {!valueOpenCloseForm ? (
              <button
                className="btn btn-primary m-3"
                type="button"
                onClick={() => openCloseForm(true)}
              >
                Agregar Usuario
              </button>
            ) : (
              ""
            )}
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
