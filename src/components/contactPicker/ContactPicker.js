import React from 'react';

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <label>
      Contact:
      <select name={name} value={value} onChange={onChange} required>
        <option value=''>No Contact Selected</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    </label>
  );
};
