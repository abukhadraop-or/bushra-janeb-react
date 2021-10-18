import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  ArticleBody,
  ArticleContainer,
  ArticleTitle,
  ArticleWrapper,
  AuthorDetails,
  AuthorInfo,
  AuthorName,
  Avatar,
  HeartIcon,
  Holder,
  LikeButton,
  PublishDate,
  ReadMore,
  ToggleList,
  ToggleListItem,
} from "./articles.styles";

/**
 * Render an <Article> component.
 *
 * @param {Object}     props                 Props.
 * @param {Array}      props.newArticles     The new articles passed by the homepage.
 *
 * @return {JSX.Element}
 */
export const Article = ({ newArticles }) => {
  const [count, setCounter] = useState(0);

  /**
   * Handles the like event.
   */
  const handleLike = () => {
    setCounter(count + 1);
  };

  return (
    <Holder>
      <div>
        <ToggleList>
          <ToggleListItem>
            <div> Global Feed</div>
          </ToggleListItem>
        </ToggleList>
      </div>
      <div>
        {newArticles.map((article) => (
          <ArticleContainer key={article._id}>
            <ArticleWrapper>
              <AuthorInfo>
                <div>
                  <Avatar src={article.imgUrl}></Avatar>
                </div>
                <AuthorDetails>
                  <AuthorName> {article.name}</AuthorName>
                  <PublishDate>{article.publishDate}</PublishDate>
                </AuthorDetails>
              </AuthorInfo>
              <LikeButton onClick={() => handleLike()}>
                <div>{count}</div>
                <HeartIcon />
              </LikeButton>
            </ArticleWrapper>
            <div>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleBody>{article.body}</ArticleBody>
              <ReadMore>Read More...</ReadMore>
            </div>
          </ArticleContainer>
        ))}
      </div>
    </Holder>
  );
};

Article.propTypes = {
  newArticles: PropTypes.arrayOf(Object).isRequired,
};

export default Article;
