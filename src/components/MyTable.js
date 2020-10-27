import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'
import productLodash from 'lodash';
import 'lodash.product';

function MyTable(props) {
    let producto
    const productoColumnas = (producto) => {
        let productos= []
        for (let item in props.datos) {
           productos.push(props.datos[item].variables)             
        }
        let product = productLodash.product(  ...productos  );
        
        return product
    }
      producto= productoColumnas()

    return (
        <div>
            <h3> Visualización de producto de columnas  </h3>
         

            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>

                     { producto.map((item, id)=>(

                         <tr key={id}>
                             <td>
                             {`${item}`}
                             </td>
                             
                         </tr>
                     )) } 

                </tbody>
            </Table>
        </div>

    )
}


const mapStateToProps =  (reducers) =>{
    return reducers.datosReducer;
  
  }; 

export default connect(mapStateToProps, datosActions)(MyTable)