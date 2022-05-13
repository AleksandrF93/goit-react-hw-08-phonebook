import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import Container from 'components/Container';
import styles from './ContactsView.module.css'

import contactsOperations  from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactsList';

export default function ContctsView(params) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    function fetchContact(){
       dispatch(contactsOperations.fetchContacts())
 }
 fetchContact()
 }, [dispatch]);

  return (
    <Container>
      <main className={styles.contacts} >
        <h1>Contacts book</h1>
        <ContactForm/>
        <h2 className={styles.title}>Contacts</h2>
        <ContactFilter />
       <ContactList/>
       </main>
    </Container>
  );
}