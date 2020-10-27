import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'

function FormCategory(props) {
    
    const [categoria, setCategoria] = useState(null)
    const [value, setValue] = useState(null)

    const handleCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleVariable = (e) => {
        setValue(e.target.value)
    }

    const searchIdx = () => {
        for (let item in props.datos) {
            if (props.datos[item].name === categoria) {
                return item
            }
        }
    }
    const handleValues = (e) => {
        const index = searchIdx()
        if (index) {
            let myData = [...props.datos]
            myData[index] = {
                name: categoria,
                variables: [...props.datos[index].variables, value]
            }
            props.agregarVariable(myData)
        } else { alert("Debes seleccionar la categoria"); }
    }

    return (
        <div className="margin-top">
            <Form className='my-4'>
                <h3>Formulario para la creación de categorias y variables</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Nueva categoria</Form.Label>
                    <Form.Control onChange={handleCategoria} type="text" placeholder="Inserte aqui la nueva categoria" name='categoria' />

                </Form.Group>

                <Button variant="primary" type="button" 
                 onClick={() => { props.agregarCategoria([...props.datos, {name: categoria, variables: []}]) 
                    }} >
                Crear categoria
                </Button>

                <Form.Group controlId="seleccionarCategoria">
                    <Form.Label>Seleccionar categoria  </Form.Label>
                    <Form.Control as="select" onChange={(e) => setCategoria(e.target.value)} >
                        <option value="" > Selecciona la categoria </option>
                        {props.datos.map((info, id) => (
                            <option key={id} value={info.name}> {info.name} </option>
                        ))}

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="agregarVariable">
                    <Form.Label>Agregar Variable a la categoria seleccionada</Form.Label>
                    <Form.Control onChange={handleVariable} type="text" placeholder="Inserte aqui la nueva variable" />

                </Form.Group>


                <Button variant="primary" type="button" onClick={handleValues} name='variables' >
                    Crear variable
                </Button>
            </Form>
        </div>
    )
}
const mapStateToProps =  (reducers) =>{
    return reducers.datosReducer;
 
  }; 

export default connect(mapStateToProps, datosActions)(FormCategory)