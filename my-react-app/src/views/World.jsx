import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  margin-bottom: 10px;
  color: black;
`;
const CountryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  background-color: grey;
`;

const CountryItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
`;

const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const NewsCard = styled.a`
  text-decoration: none;
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

const World = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [headlines, setHeadlines] = useState([]);
  const [selectedCountryArticles, setSelectedCountryArticles] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.log("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`http://localhost:8080/api/world/${selectedCountry.name.common}`)
        .then((response) => response.json())
        .then((data) => {
          setHeadlines(data.articles);
        })
        .catch((error) => {
          console.log("Error fetching headlines:", error);
        });

      const apiKey = "97ff5fe754fd47b9830aa078f40a6acc";
      fetch(
        `https://newsapi.org/v2/top-headlines?q=${selectedCountry.name.common}&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSelectedCountryArticles(data.articles);
        })
        .catch((error) => {
          console.log("Error fetching country articles:", error);
        });
    }
  }, [selectedCountry]);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    const apiKey = "97ff5fe754fd47b9830aa078f40a6acc";
    fetch(
      `https://newsapi.org/v2/top-headlines?q=${country.name.common}&apiKey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedCountryArticles(data.articles);
      })
      .catch((error) => {
        console.log("Error fetching country articles:", error);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Title>World News</Title>
        <SearchInput
          type="text"
          placeholder="Search for a country"
          value={searchCountry}
          onChange={handleSearchInputChange}
        />
        {searchCountry.length > 0 && (
          <CountryList>
            {filteredCountries.map((country, index) => (
              <CountryItem
                key={index}
                onClick={() => handleCountryClick(country)}
              >
                {country.name.common}
              </CountryItem>
            ))}
          </CountryList>
        )}
        {selectedCountry && (
          <NewsContainer>
            <h2>{selectedCountry.name.common} News</h2>
            {selectedCountryArticles ? (
              selectedCountryArticles.map((article, index) => (
                <NewsCard
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.urlToImage && (
                    <NewsImage src={article.urlToImage} alt="Article" />
                  )}
                  <NewsTitle>{article.title}</NewsTitle>
                  <NewsDescription>{article.description}</NewsDescription>
                </NewsCard>
              ))
            ) : (
              <p>Loading articles...</p>
            )}
          </NewsContainer>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default World;
