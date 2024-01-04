export const userReducer = (state = [], action) => {

    switch (action.type) {
        case 'addUser':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(), //Como no traemos el id, creamos uno con el date que trae un long en milis desde el año 1970
                    //Esto lo hacemos como prueba. Luego este "id" vendrá desde la base de datos  
                }
            ];

        case 'updateUser':
            return state.map((u)=>{
                if (u.id === action.payload.id){
                    return {
                        ...action.payload,
                    };
                }
                return u;
            });

        case 'deleteUser':
            return state.filter((user) => user.id !== action.payload);

        default:
            state;
    }
}