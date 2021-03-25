import React from "react";
import Day from "../components/Day";

const text = `Saturday is the day of the week between Friday and Sunday. The Romans named Saturday Sāturni diēs ("Saturn's Day") no later than the 2nd century for the planet Saturn, which controlled the first hour of that day, according to Vettius Valens.[1][2] The day's name was introduced into West Germanic languages and is recorded in the Low German languages such as Middle Low German sater(s)dach, Middle Dutch saterdag (Modern Dutch zaterdag) and Old English Sætern(es)dæġ and Sæterdæġ.[3] In Old English, Saturday was also known as sunnanæfen ("sun" + "eve" cf. dialectal German Sonnabend).[4] 
`;

const image = "saturday.jpg";

const wikipediaURL = "https://en.wikipedia.org/wiki/Saturday";

const Saturday = () => (
  <Day
    name="Saturday"
    number={6}
    text={text}
    image={image}
    wikipediaURL={wikipediaURL}
  />
);

export default Saturday;
