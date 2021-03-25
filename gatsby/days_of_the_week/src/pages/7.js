import React from "react";
import Day from "../components/Day";

const text = `Sunday is the day of the week between Saturday and Monday. Sunday is a day of rest in most Western countries, and a part of the weekend. In some Eastern countries such as Israel Sunday is a weekday.

For most observant Christians, Sunday is observed as a day of worship and rest, holding it as the Lord's Day and the day of Christ's resurrection; in the United States, Canada, China, Japan and the Philippines, as well as in South America, Sunday is the first day of the week.[1] According to the Hebrew calendar and traditional calendars (including Christian calendars) Sunday is the first day of the week; Quaker Christians call Sunday the "first day" in accordance with their testimony of simplicity.[2][3] The International Organization for Standardization ISO 8601, which is based in Switzerland, calls Sunday the seventh day of the week.[4] 
`;

const image = "sunday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Sunday";

const Sunday = () => (
  <Day
    name="Sunday"
    number={7}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Sunday;
