import React, { useEffect, useState } from 'react';
import FormCategory from './FormCategory';
import MyTable from './MyTable';
import TableWithInputs from './TableWithInputs'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'


const App = (props) => {
 
  useEffect(() => {
    
    props.traerTodos();
  
  
  },[]);   

  
  //se pasan los datos a data mientras se realizan los
  //los Actions para usar redux en toda la app 
  //de forma adecuada

  const [data,setData] = useState(props.datos)
  console.log(props) 
  
  return (
    <div className="container">
      <FormCategory data={data} setData={setData} />
      <TableWithInputs data={data}  setData={setData} />
      <MyTable info={data} />
    </div>

  )
}

const mapStateToProps =  (reducers) =>{
  return reducers.datosReducer;

}; 

export default connect(mapStateToProps, datosActions)(App);
