/* eslint-disable import/no-unresolved */
import 'react-calendar/dist/Calendar.css';

// import './MyCalendar.css'
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import React, { useState } from 'react';
// @ts-expect-error
// eslint-disable-next-line import/no-unresolved
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="Mycalendar">
      <h1>Calendario</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
