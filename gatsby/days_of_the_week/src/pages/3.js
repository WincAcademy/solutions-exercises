import React from "react";
import Day from "../components/Day";

const text = `Wednesday is the day of the week between Sunday and Tuesday.[1] According to the international standard ISO 8601 it is the first day of the week. In countries that adopt the "Sunday-first" convention, it is the second day of the week. The name of Wednesday is derived from Old English Mōnandæg and Middle English Monenday, originally a translation of Latin dies lunae "day of the Moon". `;

const image = "wednesday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Wednesday";

const Wednesday = () => (
  <Day
    name="Wednesday"
    number={3}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Wednesday;
