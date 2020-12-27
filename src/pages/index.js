import React from "react";
import styled from "styled-components";
import "../styles/index.css";

const BlogContainer = styled.div`
  width: 40vw;
  min-width: 300px;
  max-width: 1080px;
  margin: 0 auto;

  font-family: Lora;
  color: #111111;
`;

const BlogTitleSvg = styled.svg`
  width: 100%;
  margin: 40px 0 77px;

  font-family: ImmortalMemory;
`;

const WritingsContainer = styled.div`
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

const WritingTitle = styled.h1`
  margin-bottom: 25px;
  font-weight: bold;
`;

const IndexPage = () => (
  <BlogContainer>
    <BlogTitleSvg viewBox='0 0 73 20'>
      <text x='1' y='13'>
        Pragmatic Artist
      </text>
    </BlogTitleSvg>
    <WritingsContainer>
      <WritingTitle>First blog post on timeline</WritingTitle>
      <p>
        Writings will look like this. Super awesome! Add some more words and it
        gets even better. Type quietly though. People are sleeping because
        you're up at 3 in the morning dingus.
      </p>
    </WritingsContainer>
  </BlogContainer>
);

export default IndexPage;
