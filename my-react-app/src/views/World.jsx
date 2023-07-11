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
  margin-top: 20px;
`;

const HeadlineTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const HeadlineDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const World = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [headlines, setHeadlines] = useState([]);

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
    }
  }, [selectedCountry]);
  

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleSearchInputChange = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <>
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
            {headlines.map((headline, index) => (
              <div key={index}>
                <HeadlineTitle>{headline.title}</HeadlineTitle>
                <HeadlineDescription>{headline.description}</HeadlineDescription>
              </div>
            ))}
          </NewsContainer>
        )}
      </Main>
      <Footer />
    </>
  );
};

export default World;
