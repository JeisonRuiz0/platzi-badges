import React from 'react';

class BadgeForm extends React.Component{

    state = {};
    //handleChange = (e) => {
        //console.log({
        //    name: e.target.name,
        //    value: e.target.value
        //});

        //this.setState({
            //...this.state.form,
            //[e.target.name]: e.target.value,
        //})
    //};

    handleClick = () => {
        console.log('Button was clicked')
    };



    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value = {this.props.formValues.fistName}
                        />
                    </div>

                     <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value = {this.props.formValues.lastName}
                        />
                    </div>

                     <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="email"
                            value = {this.props.formValues.email}
                        />
                    </div>

                     <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value = {this.props.formValues.jobTitle}
                        />
                    </div>

                     <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="Twitter"
                            value = {this.props.formValues.twitter}
                        />
                    </div>

                    <button
                    onClick={this.handleClick}
                    className="btn btn-primary">
                    Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;