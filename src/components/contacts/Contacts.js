import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { GET_CONTACTS } from "./../../actions/types";
import { getContacts } from "./../../actions/contactsAction";

class Contacts extends Component {
  //Here we are calling getContacts method
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

//Here we get Data from Store
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});
//Here passing dipatch which inform store which action to work with
// const mapDispatchToProps = dispatch => ({
//   getContacts: () => dispatch({ type: GET_CONTACTS })
// });
//this above part im moving it to action foler importing from there

export default connect(
  mapStateToProps,
  //mapDispatchToProps
  { getContacts }
  //Note: Pass object with action creator
)(Contacts);
//connect(anything to map from redux state to props in the component,any actions to dipatch)
