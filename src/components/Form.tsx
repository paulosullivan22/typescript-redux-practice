import React from 'react'
import { connect } from 'react-redux'
import { fetchFormData } from '../actions'

interface IFormProps {
    fetchFormData(): object,
    state: object
}

class Form extends React.Component <IFormProps> {

    componentDidMount(): void {
        this.props.fetchFormData()
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value }: {name: string, value: string} = e.target

        this.props.fetchFormData()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input
                    name="name"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: object) => {
    return { state }
}

export default connect(mapStateToProps, { fetchFormData })(Form)