export const  traerTodos = () => (dispatch) =>{
    dispatch({
        type: 'traer_datos', 
        payload: [1, 2 ,3]
    })

}