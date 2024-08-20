import React from 'react';

const Timetable = () => {
  const schedule = [
    { time: '8:30-8:35', monday: 'Register', tuesday: 'Register', wednesday: 'Register', thursday: 'Register', friday: 'Register' },
    { time: '8:35-9:05', monday: 'Guided Reading Rotation', tuesday: 'Guided Reading Rotation', wednesday: 'Guided Reading Rotation', thursday: 'Art', friday: 'Guided Reading Rotation' },
    { time: '9:05-10:00', monday: 'Literacy', tuesday: 'Literacy', wednesday: 'Literacy', thursday: 'Kiswahili', friday: 'Literacy' },
    { time: '10:00-10:30', monday: 'Morning Break', tuesday: 'Morning Break', wednesday: 'Morning Break', thursday: 'Morning Break', friday: 'Morning Break' },
    { time: '10:30-11:00', monday: 'Literacy', tuesday: 'Literacy', wednesday: 'Grammar', thursday: 'Literacy', friday: 'Literacy' },
    { time: '11:00-12:00', monday: 'Numeracy', tuesday: 'Numeracy', wednesday: 'Numeracy', thursday: 'Numeracy', friday: 'Numeracy' },
    { time: '12:00-13:00', monday: 'Lunch', tuesday: 'Lunch', wednesday: 'Lunch', thursday: 'Lunch', friday: 'Lunch' },
    { time: '13:00-13:15', monday: 'Philosophy', tuesday: 'Spellings', wednesday: 'Spellings', thursday: 'Spellings', friday: 'Spelling Test' },
    { time: '13:15-13:45', monday: 'Music (DCMA)', tuesday: 'Science', wednesday: 'Topic (History/Geography)', thursday: 'PSHE/Citizenship', friday: 'Golden Time' },
    { time: '13:45-14:30', monday: 'Music (DCMA)', tuesday: 'Science', wednesday: 'Topic (History/Geography)', thursday: 'PSHE/Citizenship', friday: 'PE (1:45-2:30)' },
  ];

  return (
    <div className="timetable">
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.monday}</td>
              <td>{row.tuesday}</td>
              <td>{row.wednesday}</td>
              <td>{row.thursday}</td>
              <td>{row.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
