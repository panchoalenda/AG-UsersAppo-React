import { useEffect, useState } from "react";




export const UserForm = ({handlerAddUser, initialForm, userSelected }) => {

  const [userForm, setUserForm] = useState(initialForm);

  const { id, userName, password, email } = userForm; //Desestructuro userForm

useEffect(()=>{
  setUserForm({
    ...userSelected,
    //password : '', //Porque el userSelected no trae el password
  });
}, [userSelected])



  const onInputChange = ({ target }) => {
    console.log(target.value);

    const { name, value } = target; //Desestructuro target

    setUserForm({
      ...userForm,
      [name]: value, // [name]-> propiedad computada del objeto, es variable segùn el campo o input del formuñario
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!userName || !password || !email) { //La negacion en cada atributo pregunta si no viene con datos
      console.log("Debe ingresar los datos");
      return;}

    console.log('Enviando el Formulario.. ');
    console.log(userForm);
    handlerAddUser(userForm);
    setUserForm(initialForm)
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">UserName</label>
          <input type="text" className="form-control" id="userName" name="userName" aria-describedby="userNameHelp"
            placeholder="Ingrese su nombre de usuario" onChange={onInputChange} value={userName} />
          <div id="userNameHelp" className="form-text">* Ingrese su nombre de usuario.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="paswword" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password"
            placeholder="Ingrese su password" onChange={onInputChange} value={password} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email"
            placeholder="Ingrese su email" onChange={onInputChange} value={email} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="check-admin" />
          <label className="form-check-label" htmlFor="check-admin">Administrador</label>
        </div>
        <div>
          <input type="hidden" name="id" value={id}/>
        </div>
        <button type="submit" className="btn btn-primary">Crear Usuario</button>
      </form>
    </>
  )
}