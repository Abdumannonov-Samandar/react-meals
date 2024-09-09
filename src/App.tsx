// import React from 'react'

import Header from "./components/Header"
import ListGroup from "./components/ListGroup"
// import FormSelect from "./components/FormSelect"

const App = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-100 via-white to-sky-300">
        <Header/>
        {/* <FormSelect/> */}
        <ListGroup/>
    </div>
  )
}

export default App