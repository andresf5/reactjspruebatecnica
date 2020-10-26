const INITIAL_STATE = {
    datos: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'traer_datos':
           return {...state, datos: action.payload}
        case 'crear_categoria':
          return {...state, datos: action.payload}
        case 'agregar_variable':
          return {...state, datos: action.payload}  
        default: return state;
        }
        
}