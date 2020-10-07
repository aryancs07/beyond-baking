import React, { Component } from 'react';
// // import {  } from 'react-router-dom';
// import { Button} from 'reactstrap';
import Container from '../components/Container'
import Title from '../components/Title'
import CompanyInfo from '../views/Form/CompanyInfo'
import ContactForm from '../views/Form/ContactForm'


class Contact extends Component {

	render() {
		return (
            
            <Container>
                <br/>
            <Title text="Title" />
            <Container wrapper>
                
                <CompanyInfo />
                <ContactForm />
                <br/>
            </Container>
        </Container>
		);
	}
}

export default Contact;