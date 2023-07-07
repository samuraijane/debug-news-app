import React, { useState, useEffect } from "react";
import Header from "../sectioning/Header";
import Footer from "../sectioning/Footer";
import { useParams, Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getNewsData = async () => {
      const url = `https://newsapi.org/v2/everything?q=${category}&apikey=97ff5fe754fd47b9830aa078f40a6acc`;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      setData(data.articles);
      console.log(category, ":", data);
    };

    getNewsData();
  }, [category]);

  return (
    <>
      <Header />
      <main className={`${category}Page`}>
        <div className="y-wrap">{category}</div>;
        <div className="newsContainer">
          {data.map((d, i) => {
            return (
              <div>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <p>{d.publishedAt}</p>
                <Link to={d.url}>See Details</Link>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;
