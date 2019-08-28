import React from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'

interface iClassComponentProps {
    // state: object,
    fetchTasks(): object
}

class ClassComponent extends React.Component <iClassComponentProps> {
    componentDidMount(): void {
        this.props.fetchTasks()
    }

    render() {
        return (
            <div>  

                <p>Class Component</p>

                {/* {this.props.state.tasks.map((el: object, i: number) => {
                    return (
                        <p key={i}>{el.title}</p>
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (state: object): object => {
    return { state }
}

export default connect (mapStateToProps, { fetchTasks })(ClassComponent)