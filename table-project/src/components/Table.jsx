import React, { useEffect } from "react";
import TableRow from "./TableRow";

const Table = () => {
  useEffect(() => {
    const cells = document.querySelectorAll("[data-max-width]");
    cells.forEach((cell) => {
      const maxWidth = cell.getAttribute("data-max-width") + "ch";
      cell.style.maxWidth = maxWidth;
      cell.style.whiteSpace = "nowrap";
      cell.style.overflow = "hidden";
      cell.style.textOverflow = "ellipsis";
    });
  }, []);

  return (
    <div className="referral-table">
      <table>
        <caption className="caption-text">
          <strong>Referrals - 345</strong>
        </caption>
        <thead>
          <tr>
            <th>Referral event</th>
            <th>Advocate</th>
            <th>Friend</th>
            <th>Referral status</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            event="Purchase"
            date="06/17/2020 at 7:13 PM PDT"
            amount="$120.00"
            advocateEmail="autouser23926@gmail.com"
            advocateRole="Advocate"
            friendEmail="fr58272@gmail.com"
            friendRole="Friend"
            status="Pending"
            message="Passed fraud checks"
            maxWidthAdvocate="20"
            maxWidthFriend="21"
            className="success-message"
          />
          <TableRow
            event="Purchase"
            date="07/10/2020 at 4:05 AM PDT"
            amount="$100.00"
            advocateEmail="ad0379118142@gmail.com"
            advocateRole="Advocate"
            friendEmail="fr0379118142@gmail.com"
            friendRole="Friend"
            status="Flagged"
            message="Marked as fraud"
            maxWidthAdvocate="21"
            maxWidthFriend="23"
            className="error-message"
          />
          <TableRow
            event="Purchase"
            date="06/09/2020 at 12:42 PM PDT"
            amount="$28.00"
            advocateEmail="ad56991@gmail.com"
            advocateRole="Advocate"
            friendEmail="fr94250@gmail.com"
            friendRole="Friend"
            status="Approved"
            message="Passed fraud checks"
            maxWidthAdvocate="21"
            maxWidthFriend="21"
            className="success-message"
          />
          <TableRow
            event="Purchase"
            date="08/07/2020 at 4:20 AM PDT"
            amount="$100.00"
            advocateEmail="user.to.be.blocked92187@gmail.com"
            advocateRole="Advocate"
            friendEmail="user.to.be.blocked2682@gmail.com"
            friendRole="Friend"
            status="Blocked"
            message="Marked as fraud"
            maxWidthAdvocate="22"
            maxWidthFriend="21"
            className="error-message"
          />
          <TableRow
            event="Purchase"
            date="06/09/2020 at 2:08 AM PDT"
            amount="$100.00"
            advocateEmail="ad0693677382@gmail.com"
            advocateRole="Advocate"
            friendEmail="fr0693677382@gmail.com"
            friendRole="Friend"
            status="Voided"
            message="Marked as fraud"
            maxWidthAdvocate="20.5"
            maxWidthFriend="20"
            className="error-message"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
