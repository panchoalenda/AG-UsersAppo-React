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


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Está seguro que quiere eliminar el usuario?",
            text: "Cuidado, el usuario será eliminado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar usuario!",
            cancelButtonText: "No, cancelar!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                dispatch({
                    type: "deleteUser",
                    payload: id,
                });
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: "btn btn-success",
                        cancelButton: "btn btn-danger"
                    },
                    buttonsStyling: false
                });
                swalWithBootstrapButtons.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel!",
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire({
                            title: "Cancelled",
                            text: "Your imaginary file is safe :)",
                            icon: "error"
                        });
                    }
                });
                swalWithBootstrapButtons.fire({
                    title: "Eliminado!",
                    text: "",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelado",
                    text: "No se eliminó el usuario",
                    icon: "error"
                });
            }
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