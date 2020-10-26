const INITIAL_STATE = {
    datos: [
        {
          name: 'Cat example',
          variables: ['v1','v2', 'v3']
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