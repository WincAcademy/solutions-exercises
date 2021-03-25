import React from "react";
import Day from "../components/Day";

const text = `Monday is the day of the week between Sunday and Tuesday.[1] According to the international standard ISO 8601 it is the first day of the week. In countries that adopt the "Sunday-first" convention, it is the second day of the week. The name of Monday is derived from Old English Mōnandæg and Middle English Monenday, originally a translation of Latin dies lunae "day of the Moon". `;

const image = "monday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Monday";

const Monday = () => (
  <Day
    name="Monday"
    number={1}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Monday;
