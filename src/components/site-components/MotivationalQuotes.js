import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterQuote = styled.p`
  font-size: 1.5em;
  font-style: italic;
  margin: 0;
`;

const FooterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px 0;
`;

export const MotivationalQuotes = () => {
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('/quotes.json')
      .then(response => response.json())
      .then(data => {
        // Get a random quote from the quotes.json file
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.text);

        // Get a random image from the images array in quotes.json
        const randomImage = randomQuote.images[Math.floor(Math.random() * randomQuote.images.length)];
        setImage(randomImage);
      });
  }, []);

  return (
    <FooterWrapper>
      <FooterQuote>{quote}</FooterQuote>
      <FooterImage src={image} alt="" />
    </FooterWrapper>
  );
};

