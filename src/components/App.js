import React, { useState } from 'react';
import FormCategory from './FormCategory';
import MyTable from './MyTable';
import TableWithInputs from './TableWithInputs'

const dataCategories = [
  {
    name: 'Categoria1',
    variables: ['v1','v2', 'v5']
  },
  {
    name: 'Categoria2',
    variables: ['v1','v2']
  },
  {
    name: 'Categoria3',
    variables: ['v1','v2','drill']
  },  
]
const App = () => {
  
  const [data,setData] = useState(dataCategories)

  return (
    <div className="container">
      <FormCategory data={data} setData={setData} />
      <TableWithInputs data={data}  setData={setData} />
      <MyTable info={data} />
    </div>

  )
}

export default App;
