import css from './contactListItem.module.css'

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li key={id} className={css.item}>
            <p className={css.name}>
                {name}<span className={css.number}>{number}</span>
            </p>
            <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </li>
    );
};