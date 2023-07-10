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

const HeadlineContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const HeadlineImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 10px;
`;

const HeadlineContent = styled.div`
  flex-grow: 1;
`;

const HeadlineTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const HeadlineDescription = styled.p`
  font-size: 14px;
  color: #666;
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
        {headlines.map((headline, index) => (
          <HeadlineContainer key={index}>
            {headline.urlToImage && (
              <HeadlineImage src={headline.urlToImage} alt="Article" />
            )}
            <HeadlineContent>
              <HeadlineTitle>{headline.title}</HeadlineTitle>
              <HeadlineDescription>{headline.description}</HeadlineDescription>
            </HeadlineContent>
          </HeadlineContainer>
        ))}
      </Main>
      <Footer />
    </>
  );
};

export default Headlines;
