import React from 'react';
import './ContactListItem.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="ContactListItem">
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
