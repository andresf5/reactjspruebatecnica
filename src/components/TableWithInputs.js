import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


export default function TableWithInputs(props) {

    const { data, setData } = props
    const [value, setValue] = useState(null)


    const updateData = (e) => {

        setValue(e.target.value)
        if (value === null) {
            setValue(e.target.value)
            let init = e.target.value
            console.log(init)

        }
        let idCategoria = e.target.id
        let idVariable = e.target.name

        if (idCategoria === '') {
            idCategoria = 0
        }
        idCategoria = parseInt(idCategoria, 10)
        idVariable = parseInt(idVariable, 10)

        let categoria = data[idCategoria].name
        let myData = [...data]

        let newArray = []
        newArray = myData[idCategoria].variables

        newArray[idVariable] = value

        console.log(newArray)
        myData[idCategoria] = {
            name: categoria,
            variables: newArray,
        }
        //console.log(myData)
        setData(myData)

    }


    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label><h3> Tabla de variables modificable </h3></Form.Label>

                    <Row>
                        {props.data.map((info, idx) => (
                            <Col key={idx} >
                                <Row>   {info.name} </Row>
                                { info.variables ? info.variables.map((variable, id) =>
                                    <Row key={id}>
                                        <Form.Control defaultValue={variable} id={idx} name={id} onChange={updateData} type="text" />
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