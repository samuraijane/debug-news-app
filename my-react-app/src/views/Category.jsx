import React, { useState, useEffect } from "react";
import Header from "../sectioning/Header";
import Footer from "../sectioning/Footer";
import { useParams, Link } from "react-router-dom"; // need this for url information/changes to used in line 8
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Category = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  // post function to send to article route
  const saveHandler = async (url) => {
    console.log("myKey", url);
    const response = await fetch("http://localhost:8080/api/articles/", {
      // server/api/articles
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1,
        articleId: url,
      }),
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    const getNewsData = async () => {
      const url = `http://localhost:8080/api/articles/category/${category}`;
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
              <div key={i}>
                <h2>{d.title}</h2>
                <p>{d.description}</p>
                <p>{d.publishedAt}</p>
                <Link to={d.url}>See Details</Link>
                <AiOutlineHeart
                  style={{ cursor: "pointer" }}
                  onClick={() => saveHandler(d.url)}
                />
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
