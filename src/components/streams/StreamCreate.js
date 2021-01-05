import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        // console.log(formProps);
        // return (
        //     <input
        //         onChange={formProps.input.onChange}
        //         value={formProps.input.value}
        //     />
        // )
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" />
                {this.renderError(meta)}
                
            </div>
        )
        // this will take all th formProps.input properties
        // and assign it to the input. like onChange, value, focus, etc...
    }

    onSubmit (formValues) {
        // console.log(formValues)
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }

}

// this will go to input as meta properties.
// and the connection is the name property.
const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a title'
    }

    return errors
}


export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)

// form generates lots of helper props that we can use in our application
// Field is basically a list of input from a user.
// It can be input field, checkbox, radio button, etc.