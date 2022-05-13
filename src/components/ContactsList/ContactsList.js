import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/';

const ContactList = () => {
  const filters = useSelector(state =>state.filter);
  const contacts = useSelector(state=>state.contacts.items);
  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));

return (
    
    <div>
      <ul>
        {filterContacts.map(({id,name,number}) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          />))}
      </ul>
    </div>
    
  );
  
};

export default ContactList;

 ContactList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
   
 };