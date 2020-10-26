const INITIAL_STATE = {
    datos: [
        {
          name: 'Categoria ejemplo',
          variables: ['v1','v2', 'v5']
        },
        {
          name: 'Categoria2',
          variables: ['v1','v2']
        },
        {
          name: 'Categoria3',
          variables: ['v1','v2','drill']
        },  
      ]
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'traer_datos':
           return {...state, datos: action.payload} 
        default: return state;
        }
        
}