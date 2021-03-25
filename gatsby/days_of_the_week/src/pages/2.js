import React from "react";
import Day from "../components/Day";

const text = `Tuesday is the day of the week between Monday and Wednesday. According to international standard ISO 8601, Monday is the first day of the week; thus, Tuesday is the second day of the week. According to some commonly used calendars, however, especially in the United States, Sunday is the first day of the week, so Tuesday is the third day of the week. The English name is derived from Old English Tiwesdæg and Middle English Tewesday, meaning "Tīw's Day", the day of Tiw or Týr, the god of single combat, and law and justice in Norse mythology. Tiw was equated with Mars in the interpretatio germanica, and the name of the day is a translation of Latin dies Martis. `;

const image = "tuesday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Tuesday";

const Tuesday = () => (
  <Day
    name="Tuesday"
    number={2}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Tuesday;
