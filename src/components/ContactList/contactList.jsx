import { ContactListItem } from "components/ContactListItem/contactListItem";
import css from './contactList.module.css'


export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.list}>
            {
                contacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
                ))
            }
        </ul>
    );
};