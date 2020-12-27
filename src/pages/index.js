import React from "react";
import styled from "styled-components";
import "../styles/index.css";

const Container = styled.div`
  width: 50vw;
  min-width: 300px;
  max-width: 1240px;
  margin: 0 auto;
  color: #111111;
`;

const BlogTitleSvg = styled.svg`
  width: 100%;
  margin: 40px 0;

  font-family: ImmortalMemory;
`;

const FeedContainer = styled.div``;

const IndexPage = () => (
  <Container>
    <BlogTitleSvg viewBox='0 0 73 20'>
      <text x='1' y='13'>
        Pragmatic Artist
      </text>
    </BlogTitleSvg>
    <FeedContainer>
      <p>First blog post on timeline</p>
    </FeedContainer>
  </Container>
);

export default IndexPage;
