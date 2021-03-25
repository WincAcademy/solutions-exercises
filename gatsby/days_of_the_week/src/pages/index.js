import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const generateDayLink = ({ number, name }) => (
  <li key={number} className="day_link">
    <Link className={`day${number}`} to={`/${number}`}>
      {name}
    </Link>
  </li>
);

export default function Home() {
  return (
    <Layout>
      <p>This site features the days of the week.</p>
    </Layout>
  );
}
