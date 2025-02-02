import React from 'react';

import '../pages/styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import iconPerfile from "../images/iconPerfile.png";
import api from '../api';
import PageLoading from '../components/PageLoading';
class BadgeNew extends React.Component {
    state ={ form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};
    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading: true, error: null})
        try{
            await api.badges.create(this.state.form)
            this.setState({loading: false})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName = {this.state.form.firstName || 'FIRST NAME'}
                            lastName = {this.state.form.lastName || 'LAST NAME'}
                            twitter= {this.state.form.twitter || 'twitter'}
                            jobTitle= {this.state.form.jobTitle || 'JOB TITLE'}
                            email = {this.state.form.email || 'EMAIL'}
                            avatarUrl={iconPerfile}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange = {this.handleChange} 
                                        onSubmit = {this.handleSubmit}
                                       formValues= {this.state.form  } />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;