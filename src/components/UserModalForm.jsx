import { UserForm } from "./UserForm";

export const UserModalform = ({
  handlerAddUser,
  initialForm,
  userSelected,
  openCloseForm,
  valueOpenCloseForm,
}) => {
  return (
    <>
      {!valueOpenCloseForm || (
        <div className="abrir-modal animacion fadeIn">
          {" "}
          <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            {" "}
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {userSelected.id > 0 ? "Editar " : "Crear "}Modal Usuarios
                  </h5>
                </div>
                <div className="modal-body">
                  <UserForm
                    handlerAddUser={handlerAddUser}
                    initialForm={initialForm}
                    userSelected={userSelected}
                    openCloseForm={openCloseForm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
