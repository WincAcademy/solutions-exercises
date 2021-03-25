import React from "react";
import Day from "../components/Day";

const text = `Thursday is the day of the week between Wednesday and Friday. According to the ISO 8601 international standard, it is the fourth day of the week. In countries that adopt the "Sunday-first" convention, it is the fifth day of the week.[1] 
`;

const image = "thursday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Thursday";

const Thursday = () => (
  <Day
    name="Thursday"
    number={4}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Thursday;
