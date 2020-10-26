export const  traerTodos = () =>  (dispatch) =>{

  const datosprueba=  [
    {
      name: 'Cat example',
      variables: ['v1','v2', 'v3']
    },
 
  ]
    dispatch({
        type: 'traer_datos', 
        payload: datosprueba
    })

};  

export const agregarCategoria = (data) => (dispatch) =>{
  const newData=  data
   dispatch({
    type: 'crear_categoria', 
    payload: newData
})

};

export const agregarVariable = (data) => (dispatch) =>{
  const newData=  data
   dispatch({
    type: 'agregar_variable', 
    payload: newData
})

};