import React from "react";
import styled from "styled-components";
import "../assets/css/main.css";

const Container = styled.div`
  width: 50vw;
  min-width: 500px;
  max-width: 98vw;
  margin: 0 auto;
  color: #111111;
`;

const BlogTitle = styled.h1`
  margin: 40px 0;
  font-size: 1em;
`;

const FeedContainer = styled.div`
  width: 44vw;
  margin: 0 auto;
`;

const IndexPage = () => (
  <Container>
    <BlogTitle style={{ textAlign: "center" }}>Pragmatic Artist</BlogTitle>
    <FeedContainer>
      <p>First blog post on timeline</p>
    </FeedContainer>
  </Container>
);

export default IndexPage;
