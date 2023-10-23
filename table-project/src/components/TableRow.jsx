import React from "react";

const TableRow = ({
  event,
  date,
  amount,
  advocateEmail,
  advocateRole,
  friendEmail,
  friendRole,
  status,
  message,
  maxWidthAdvocate,
  maxWidthFriend,
  className,
}) => {
  return (
    <tr>
      <td>
        <p>
          <strong>{event}</strong>
        </p>
        <p className="date">{date}</p>
        <p>
          <strong>{amount}</strong>
        </p>
      </td>
      <td>
        <p data-max-width={maxWidthAdvocate}>
          <strong>{advocateEmail}</strong>
        </p>
        <p>{advocateRole}</p>
      </td>
      <td>
        <p data-max-width={maxWidthFriend}>
          <strong>{friendEmail}</strong>
        </p>
        <p>{friendRole}</p>
      </td>
      <td>
        <p>
          <strong>{status}</strong>
        </p>
        <p className={className}>{message}</p>
      </td>
    </tr>
  );
};

export default TableRow;
