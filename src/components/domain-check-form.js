import React from "react";
import isValidDomain from "is-valid-domain";
import { Control, Form, actions } from "react-redux-form";

class UserForm extends React.Component {
  handleSubmit(userInput) {
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form model="user" onSubmit={userInput => this.handleSubmit(userInput)}>
        <label htmlFor="user.domain">Domain:</label>
        <Control.text model="user.domain" id="user.domain" />

        <label htmlFor="user.email">Email:</label>
        <Control.text model="user.email" id="user.email" />

        <button type="submit">נצא לחפש</button>
      </Form>
    );
  }
}

export default UserForm;
