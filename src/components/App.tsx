import React from 'react'

import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'
import Form from './Form'

class App extends React.Component {
    render() {
        return (
            <div>
                <FunctionalComponent />
                <ClassComponent />
                <hr />
                <Form />
            </div>
        )
    }
}

export default App