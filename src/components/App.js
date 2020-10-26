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
 
  return (
    <div className="container">
      <FormCategory />
      <TableWithInputs/>
      <MyTable/>
    </div>
 )
}

const mapStateToProps =  (reducers) =>{
  return reducers.datosReducer;

}; 

export default connect(mapStateToProps, datosActions)(App);
