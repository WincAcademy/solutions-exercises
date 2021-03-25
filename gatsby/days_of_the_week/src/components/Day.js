import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const getNextAndPrevLinks = number => {
  const previous =
    number > 1 ? <Link to={`/${number - 1}`}>Previous</Link> : null;
  const next = number < 7 ? <Link to={`/${number + 1}`}>Next</Link> : null;

  return (
    <nav className="next_and_prev">
      {previous}
      {next}
    </nav>
  );
};

export default function Day({ name, number, text, image, wikipediaURL }) {
  return (
    <Layout>
      <div className={`day day${number}`}>
        <h2>{name}</h2>
        {getNextAndPrevLinks(number)}
        <p>{text}</p>
        <img src={image} alt={`A fitting visual for the ${name}`} />
        <p>
          <a href={wikipediaURL}>The Wikipedia page for {name}</a>
        </p>
      </div>
    </Layout>
  );
}
