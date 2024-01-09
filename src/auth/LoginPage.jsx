export const LoginPage = () => {
  return (
    <>
      <div className="abrir-modal animacion fadeIn">
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">LoginPage</h5>
              </div>
              <form action="">
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      userName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      aria-describedby="userNameHelp"
                    />
                    <div id="userNameHelp" className="form-text">
                      Introduzca un nombre de usuario.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      aria-describedby="passwordHelp"
                    />
                    <div id="passwordHelp" className="form-text">
                      Introduzca un password.
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
