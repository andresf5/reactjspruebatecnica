const INITIAL_STATE = {
    datos: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'traer_datos':
           return {...state, name: action.payload} 
        default: return state;
        }
        
}