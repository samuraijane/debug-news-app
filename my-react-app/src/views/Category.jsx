
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../sectioning/Header";
import Footer from "../sectioning/Footer";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";



const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
};

const Category = () => {
  const [data, setData] = useState([]);
  const { category } = useParams();

  const [likedArticles, setLikedArticles] = useState([]);

  const saveHandler = async (url) => {
    console.log("myKey", url);
    const response = await fetch("http://localhost:8080/api/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        article_id: url,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
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

  const handleLikeArticle = (event, url) => {
    event.preventDefault(); // Prevent link behavior
    if (likedArticles.includes(url)) {
      setLikedArticles(likedArticles.filter((article) => article !== url));
    } else {
      setLikedArticles([...likedArticles, url]);
    }
  };

  const isArticleLiked = (url) => {
    return likedArticles.includes(url);
  };

  return (
    <>
      <Header />
      <Main className={`${category}Page`}>
        <CategoryTitle>{category}</CategoryTitle>
        <NewsContainer>
          {data.map((article, index) => (
            <NewsCard to={article.url} key={index}>
              {article.urlToImage && (
                <NewsImage src={article.urlToImage} alt="Article" />
              )}
              <NewsTitle>{article.title}</NewsTitle>
              <NewsDescription>{article.description}</NewsDescription>
              <NewsPublishedAt>{formatDate(article.publishedAt)}</NewsPublishedAt>
              <HeartContainer>
                {isArticleLiked(article.url) ? (
                  <FilledHeartIcon
                    onClick={(event) => handleLikeArticle(event, article.url)}
                  />
                ) : (
                  <HeartIcon
                    isLiked={isArticleLiked(article.url)}
                    onClick={(event) => handleLikeArticle(event, article.url)}
                  />
                )}
              </HeartContainer>
            </NewsCard>
          ))}
        </NewsContainer>
      </Main>
      <Footer />
    </>
  );
};
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CategoryTitle = styled.h1`
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

const NewsCard = styled(Link)`
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
text-decoration: none;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const NewsTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;

`;

const NewsDescription = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`;

const NewsPublishedAt = styled.p`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 5px;
`;

const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

const HeartIcon = styled(AiOutlineHeart)`
  font-size: 20px;
  color: ${({ isLiked }) => (isLiked ? "#ff4081" : "#666")};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;

const FilledHeartIcon = styled(AiFillHeart)`
  font-size: 20px;
  color: #ff4081;
  cursor: pointer;
  transition: color 0.3s ease;
`;

export default Category;

