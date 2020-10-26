import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'

function TableWithInputs(props) {
       
    const updateData = (e, idx, id) => {
        let myData = [...props.datos]
        myData[idx].variables[id] = e.target.value
        props.actualizar(myData)
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label><h3> Tabla de variables modificable </h3></Form.Label>
                    <Row>
                        {props.datos.map((info, idx) => (
                            <Col lg={2} sm={6} key={idx} >
                                <Row>   {info.name} </Row>
                                { info.variables ? info.variables.map((variable, id) =>
                                    <Row key={id}>
                                        <Form.Control value={props.datos[idx].variables[id]} id={idx} name={id} onChange={(e) => updateData(e, idx, id)} type="text" />
                                    </Row>
                                ) : null}
                            </Col>
                        ))}
                    </Row>
                </Form.Group>
            </Form>
        </div>
    )
}
const mapStateToProps =  (reducers) =>{
    return reducers.datosReducer;
  }; 

export default  connect(mapStateToProps, datosActions)(TableWithInputs) 
