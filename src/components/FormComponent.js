import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { BrowserRouter, Link } from 'react-router-dom'

import { Formik, Field, Form } from "formik";

import { getUsers, putUsers } from "../store/actions/usersActions";

import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	Button,
	Flex,
  } from "@chakra-ui/react"

  
const mapStateToProps = (state) => ({
	users: state.users,
	// posts: state.posts,
	// comments: state.comments,
});

class FormComponent extends Component {

	constructor(props) {
    super(props);
    this.state = {
      isFormShow: true,
    };
  }
	
	componentDidMount(){
		this.props.getUsers();
	}
	
	validateForm(value) {
		let error
		if (!value) {
			error = 'Form value is required'
		}
		return error
	}
	
	handleEdit(data, uid){
		console.log("handle edit", data,uid)
		this.props.dispatch(putUsers(data, uid))
	}	

	render() {
		const { users } = this.props.users;
		
		const selectedId = this.props.match.params.id
		const selectedUser = users.find(u => u.id === parseInt(selectedId))

		return (
			<BrowserRouter>
				<div>
				{this.state.isFormShow && 
					<Flex bg="whitesmoke" flexDir="column" p={4}>
						<Formik
							initialValues={{ name: selectedUser.name }}
							onSubmit={(values, actions) => {
								setTimeout(() => {
									this.handleEdit(values,selectedId)
									actions.setSubmitting(false)
								}, 1000)
							}}
						>
						{(props) => (
							<Form>
								<Field name="name" validate={this.validateForm}>
									{({ field, form }) => (
										<FormControl isInvalid={form.errors.name && form.touched.name}>
											<FormLabel htmlFor="name">First name</FormLabel>
											<Input {...field} id="name" placeholder="name" />
											<FormErrorMessage>{form.errors.name}</FormErrorMessage>
										</FormControl>
									)}
									</Field>
									<Button
										mt={4}
										colorScheme="teal"
										isLoading={props.isSubmitting}
										type="submit"
										float="right"
									>
										Submit
									</Button>
									<Link to='/'>
										<Button
											mt={4}
											mx={2}
											colorScheme="red"
											isLoading={props.isSubmitting}
											float="right"
											onClick={()=>this.setState({isFormShow: false})}
										>
											Close
										</Button>
									</Link>
								</Form>
							)}
						</Formik>
					</Flex>
				}
			</div>
			</BrowserRouter>
		)
	}
}

FormComponent = reduxForm({
	form: "formEditUser",
})(FormComponent);

export default connect(mapStateToProps, {
	getUsers,
})(FormComponent)
