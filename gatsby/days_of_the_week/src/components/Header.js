import React from "react";
import Link from "gatsby-link";

const generateDayLink = ({ number, name }) => (
  <li key={number} className="day_link">
    <Link className={`day${number}`} to={`/${number}`}>
      {name}
    </Link>
  </li>
);

const Header = () => {
  const dayLinks = [
    { number: 1, name: "Monday" },
    { number: 2, name: "Tuesday" },
    { number: 3, name: "Wednesday" },
    { number: 4, name: "Thursday" },
    { number: 5, name: "Friday" },
    { number: 6, name: "Saturday" },
    { number: 7, name: "Sunday" },
  ].map(generateDayLink);
  return (
    <header>
      <Link to="/">
        <h1>Days of the week</h1>
      </Link>
      <ul className="dayLinks">{dayLinks}</ul>
    </header>
  );
};

export default Header;
