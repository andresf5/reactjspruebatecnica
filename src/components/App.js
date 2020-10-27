import React, { useEffect } from 'react';
import FormCategory from './FormCategory';
import MyTable from './MyTable';
import TableWithInputs from './TableWithInputs'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'
import SnackbarProvider from 'react-simple-snackbar'

const App = (props) => {
 
  useEffect(() => {
    props.traerTodos();
  },[]); 

 
  return (
    <div className="container">
      <SnackbarProvider>
        <FormCategory />
        <TableWithInputs/>
        <MyTable/>
      </SnackbarProvider>
     
    </div>
 )
}

const mapStateToProps =  (reducers) =>{
  return reducers.datosReducer;
}; 

export default connect(mapStateToProps, datosActions)(App);
