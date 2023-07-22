import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Footer from "../sectioning/Footer";
import Header from "../sectioning/Header";
import GlobalStyles from "../components/GlobalStyles";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
  font-style: italic;
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
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
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

const NewsDate = styled.p`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 5px;
`;

const HeartIcon = styled(AiOutlineHeart)`
  font-size: 20px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e74c3c;
  }
`;

const FilledHeartIcon = styled(AiFillHeart)`
  font-size: 20px;
  color: #e74c3c;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
`;

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);

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

  const handleArticleClick = (url) => {
    window.location.href = url;
  };

  const saveArticle = async (url) => {
    try {
      const response = await fetch("http://localhost:8080/api/articles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1, // Replace with the actual user ID
          article_id: url, // Replace with the actual article ID or data
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error saving article:", error);
    }
  };

  const handleLikeArticle = (event, url) => {
    event.stopPropagation(); // Stop propagation to prevent card click event
    if (likedArticles.includes(url)) {
      setLikedArticles(likedArticles.filter((article) => article !== url));
    } else {
      setLikedArticles([...likedArticles, url]);
      saveArticle(url); // Save the article when it is liked
    }
  };

  const isArticleLiked = (url) => {
    return likedArticles.includes(url);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Title>Headline News</Title>
        <NewsContainer>
          {headlines.map((headline, index) => (
            <NewsCard
              key={index}
              onClick={() => handleArticleClick(headline.url)}
            >
              {headline.urlToImage && (
                <NewsImage src={headline.urlToImage} alt="Article" />
              )}
              <NewsTitle>{headline.title}</NewsTitle>
              <NewsDescription>{headline.description}</NewsDescription>
              <NewsDate>{headline.publishedAt.substring(0, 10)}</NewsDate>
              {isArticleLiked(headline.url) ? (
                <FilledHeartIcon
                  onClick={(event) => handleLikeArticle(event, headline.url)}
                />
              ) : (
                <HeartIcon
                  onClick={(event) => handleLikeArticle(event, headline.url)}
                />
              )}
            </NewsCard>
          ))}
        </NewsContainer>
      </Main>
      <Footer />
    </>
  );
};

export default Headlines;
