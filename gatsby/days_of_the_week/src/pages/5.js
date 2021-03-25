import React from "react";
import Day from "../components/Day";

const text = `Friday is the day of the week between Thursday and Saturday. In countries adopting the "Monday-first" convention it is the fifth day of the week. In countries that adopt the "Sunday-first" convention, it is the sixth day of the week.

In most Western countries, Friday is the fifth and final day of the working week. In some other countries, Friday is the first day of the weekend, with Saturday the second. In Israel, Friday is the sixth day of the week. In Iran, Friday is the last day of the weekend, with Saturday as the first day of the working week. Bahrain, the United Arab Emirates (UAE), Saudi Arabia and Kuwait also followed this convention until they changed to a Friday–Saturday weekend on September 1, 2006 in Bahrain and the UAE,[1] and a year later in Kuwait.[2] In Iran, Thursday and Friday are weekend days. 
`;

const image = "friday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Friday";

const Friday = () => (
  <Day
    name="Friday"
    number={5}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Friday;
