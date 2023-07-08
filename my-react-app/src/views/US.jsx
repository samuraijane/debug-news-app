import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Footer from "../sectioning/Footer";
import Header from "../sectioning/Header";

const US = () => {
  const [usNews, setUsNews] = useState([])
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=97ff5fe754fd47b9830aa078f40a6acc")
    .then((response) => response.json())
    .then((data) => {
      setUsNews(data.articles);
    })
    .catch((error)=> {
      console.log("Error fetching US news:", error)

    });
  }, []);
  

  return <div className="y-wrap">US news updates</div>;
};

export default US;
