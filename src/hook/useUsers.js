import { useReducer, useState } from "react";
import { userReducer } from "../components/reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 1,
        userName: "Pancho",
        password: "12345",
        email: "pancho_alenda@yahoo.com.ar",
    },
];

const initialForm = {
    id: 0,
    userName: "",
    password: "",
    email: "",
};

export const useUsers = () => {
    const [users, dispatch] = useReducer(userReducer, initialUsers);

    const [userSelected, setUserSelected] = useState(initialForm);

    const [valueOpenCloseForm, setValueOpenCloseForm] = useState(false);

    const handlerAddUser = (user) => {
        //console.log('Desde handler');
        //console.log(user);

        dispatch({
            type: (user.id == 0) ? "addUser" : "updateUser", //Esto es lo mismo que colocar type:type, se abrevia porque la propiedad se llama igual que el valor
            payload: user,
        });

        //Ventana modal

        Swal.fire({
            title: user.id == 0 ? "Se agregó correctamente el Usuario" : "Se actualizó correctamente el Usuario",
            text: "",
            icon: "success"
        });

        setValueOpenCloseForm(false);   
        setUserSelected(initialForm);
        console.log(userSelected);

    };

    const handlerDeleteUser = (id) => {

        Swal.fire({
            title: "Está seguro que quiere eliminar el usuario?",
            text: "Cuidado, el usuario será eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: "deleteUser",
                    payload: id,
                });
                Swal.fire({
                    title: "Eliminado con éxito!",
                    text: "El usuario se elimino correctamente",
                    icon: "success"
                });
            }else{
                Swal.fire({
                    title: "Cancelado",
                    text: "No se eliminó el usuario",
                    icon: "error"
                });
            }
        });
    };

    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
        setValueOpenCloseForm(true);
    };

    const openCloseForm = (value) => {
        setValueOpenCloseForm(value ? true : false);
        setUserSelected(initialForm);
    }

    return {
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
    }
}