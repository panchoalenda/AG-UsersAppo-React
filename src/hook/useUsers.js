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

    const handlerAddUser = (user) => {
        //console.log('Desde handler');
        //console.log(user);
        let type;

        if (user.id == 0) {
            type = "addUser";
        } else {
            type = "updateUser";
        }
        dispatch({
            type, //Esto es lo mismo que colocar type:type, se abrevia porque la propiedad se llama igual que el valor
            payload: user,
        });

        //Ventana modal
        
            Swal.fire({
                title: user.id == 0 ? "Se agregó correctamente el Usuario" : "Se actualizó correctamente el Usuario",
                text: "",
                icon: "success"
            });
        
    };

    const handlerDeleteUser = (id) => {
        dispatch({
            type: "deleteUser",
            payload: id,
        });
    };

    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user });
    };

    return {
        //Atributos que devolvemos
        users,
        userSelected,
        initialForm,

        //Funciones que devolvemos
        handlerAddUser,
        handlerDeleteUser,
        handlerUserSelectedForm,
    }
}