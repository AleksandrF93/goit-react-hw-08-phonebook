import { useState } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';


 function  ContactForm(){ 
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const onSaveContactClicked = (data) => {
    const message = `${data.name} is alredy in contacts`;
    const findName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    const findNumber = contacts.find(contact => contact.number === data.number);
  
    if (findName || findNumber !== undefined) {
      alert(message);
      return
    };
    
    if (contacts) {
      dispatch(contactsOperations.addContacts(name, number));
       
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveContactClicked ({name, number});
    reset();
  };

   const reset = () => {
     setName('');
     setNumber(''); 
  };
  const handleChangeName = (e) => {
    setName(e.currentTarget.value);
    };
    
   const handleChangeNumber = (e) => {
       setNumber(e.currentTarget.value);
     };
  

    return (
      <div>
      <form type="submit"
      onSubmit={handleSubmit}>
            <TextField
              htmlFor={nameInputId}
             margin="normal"
              fullWidth
              label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            aria-label="Input for your name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
          <TextField
          htmlFor={numberInputId}
            label="Number"
           margin="normal"
           fullWidth
            type="tel"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          
        <Button fullWidth variant="contained" margin="normal"  type='submit'>Add contact</Button>
      </form>
      </div>
    );
};

export default ContactForm;

 ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };
