import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'

interface iClassComponentProps {
    fetchTasks(): object 
}

class ClassComponent extends React.Component <iClassComponentProps> {
    componentDidMount(): void {
        this.props.fetchTasks()
    }

    render() {
        console.log(this.props)
        return (
            <div>  

                <p>Class Component</p>

                {/* {this.props.state.tasks.map((el, i) => {
                    return (
                        <p key={i}>{el}</p>
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (state: object) => {
    return { state }
}

export default connect (mapStateToProps, { fetchTasks })(ClassComponent)