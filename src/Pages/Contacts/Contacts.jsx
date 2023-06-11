import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/constacts/operations';
import { selectError, selectIsLoading } from 'redux/constacts/selectors';

import { Section } from '../../components/Section/Section';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  Button,
  ContactNavWrapper,
  FilterWrapper,
  Title,
} from './Contacts.module';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleClickBtn = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <>
      <Section>
        <ContactNavWrapper>
          <Title>Contacts</Title>
          <FilterWrapper>
            <Filter />
            <Button type="button" onClick={handleClickBtn}>
              New Contact
            </Button>
          </FilterWrapper>
        </ContactNavWrapper>
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Section>
      {isShowModalAddUser && (
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      )}
    </>
  );
};

export default Contacts;
