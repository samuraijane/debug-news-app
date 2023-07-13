import React, { useState, useEffect } from "react";
import Header from "../sectioning/Header";
import Footer from "../sectioning/Footer";
import { useParams, Link } from "react-router-dom"; // need this for url information/changes to used in line 8
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


import GlobalStyles from "../components/GlobalStyles";




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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const NewsCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const NewsPublishedAt = styled.p`
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-bottom: 10px;
`;

const SeeDetailsLink = styled(Link)`
  font-size: 14px;
  color: #0366d6;
  text-decoration: none;
  margin-bottom: 10px;
  text-align: center;
`;

const HeartIcon = styled(AiOutlineHeart)`
  cursor: pointer;
  font-size: 24px;
  color: #666;
`;


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
