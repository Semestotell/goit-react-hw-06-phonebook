import PropTypes from 'prop-types';
import {ContactItem} from './Contacts.styled.jsx'
import { ContactList,Contact,ContactButton } from './Contacts.styled.jsx';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from 'redux/Slise';


export const ContactsList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);
    const normFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normFilter)
    );
    

    return (
        <ContactList>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <Contact>
                        {name} : {number}
                    </Contact>
                    <ContactButton type='button' onClick={()=>dispatch(remove(id))}>
                        Delete
                    </ContactButton>
                </ContactItem>   
            ))}
        </ContactList>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    ),
};