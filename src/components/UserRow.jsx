export const UserRow = ({
  id,
  userName,
  email,
  handlerDeleteUser,
  handlerUserSelectedForm,
}) => {


  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() =>
                handlerUserSelectedForm({
                id: id, //Si el campo se llama igual que el valor (id: id)se puede omitir, como lo hago en los siguientes campos. 
                userName, // <-- Esto es igual a poner esto --> userName: userName 
                email, // <-- Esto es igual a poner esto --> email: email
              })
            }
          >
            Update
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handlerDeleteUser(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
