import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        // console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues= { _.pick(this.props.stream, 'title', 'description') } 
                    onSubmit={this.onSubmit} 
                />
                {/* initialValues is a special value property name with Redux form */}
                {/* variables-- title and description are as defined in the StreamForm */}
                {/*  stream is an object with our title and description */}
                {/* pick -- (objectName, Values we want to use from that object) */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)