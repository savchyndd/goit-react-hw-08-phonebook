import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/constacts/operations';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
  UserIcon,
  UserDeletedIcon,
  PhoneIcon,
} from './ContactListItem.module';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <ContactItem key={id}>
      <ContactName>
        <UserIcon />
        {name}
      </ContactName>
      <ContactNumber>
        <PhoneIcon />
        {number}
      </ContactNumber>
      <Button onClick={() => handleDeleteContact(id)}>
        <UserDeletedIcon />
        Delete
      </Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
