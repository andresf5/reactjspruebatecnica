export const  traerTodos = () =>  (dispatch) =>{

  const datosprueba=  [
    {
      name: 'PRUEBA1',
      variables: ['v4','v1', 'v3']
    },
    {
      name: 'PRUEBA2',
      variables: ['v2']
    },
    {
      name: 'PRUEBA3',
      variables: ['v3','drill']
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

export const actualizar = (data) => (dispatch) =>{
  const newData=  data
   dispatch({
    type: 'actualizar', 
    payload: newData
})

};