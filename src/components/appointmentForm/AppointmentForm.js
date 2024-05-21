import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker'; // Import ContactPicker

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Appointment Name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Date:
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={getTodayString()}
          required
        />
      </label>
      <label>
        Time:
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
