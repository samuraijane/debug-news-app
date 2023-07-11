import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../sectioning/Footer";
import Header from "../sectioning/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewsCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const NewsTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
`;

const NewsDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;

const NewsLink = styled.a`
  font-size: 14px;
  color: #0366d6;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
`;

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/headlines/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHeadlines(data.articles);
      })
      .catch((error) => {
        console.log("Error fetching headlines:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Title>Headlines News</Title>
        <NewsContainer>
          {headlines.map((headline, index) => (
            <NewsCard key={index}>
              {headline.urlToImage && (
                <NewsImage src={headline.urlToImage} alt="Article" />
              )}
              <NewsTitle>{headline.title}</NewsTitle>
              <NewsDescription>{headline.description}</NewsDescription>
              <NewsLink
                href={headline.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </NewsLink>
            </NewsCard>
          ))}
        </NewsContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Headlines;
