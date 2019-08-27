import React from 'react'

import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

class App extends React.Component {
    render() {
        return (
            <div>
                <FunctionalComponent />
                <ClassComponent />
            </div>
        )
    }
}

export default App