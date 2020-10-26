import React from 'react'
import { Table, TextField } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'

function MyTable(props) {

    return (
        <div>
            <h3> Tabla solo para visualización  </h3>

            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {props.datos.map((category, idx) => (
                        <tr key={idx}>
                            <td> {category.name} </td>
                            { category.variables ? category.variables.map((variable, id) => <td key={id}> {variable} </td>) : null}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}


const mapStateToProps =  (reducers) =>{
    return reducers.datosReducer;
  
  }; 

export default connect(mapStateToProps, datosActions)(MyTable)