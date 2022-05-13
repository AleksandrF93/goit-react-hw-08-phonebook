import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';


const ContactListItem = ({ name, id, number }) => {
    const dispatch = useDispatch();
    const onDelete = id => dispatch(contactsOperations.deleteContacts(id)); 
    const [secondary, setSecondary] = React.useState(false);

  
    return (
      <ListItem  key={id}
      secondaryAction={
          <Button variant="outlined" onClick={() => onDelete(id)} startIcon={<DeleteIcon />}>Delete
      </Button>}
    >
      <ListItemAvatar>
        <Avatar>
          <PhoneIcon/>
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary= {name}
        secondary={secondary ? 'Secondary text' : null}
      />
       <ListItemText
        primary= {number}
        secondary={secondary ? 'Secondary text' : null}
      />
    </ListItem>
    )
      
  };

export default ContactListItem;

 ContactListItem.propTypes = {
   name: PropTypes.string,
   number: PropTypes.string,
  
 };

