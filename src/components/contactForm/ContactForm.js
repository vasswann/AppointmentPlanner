import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern='\+44\s?7\d{3}\s?\d{6}'
          required
        />
        <small>Format: +44 7123 123456</small>
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
};
