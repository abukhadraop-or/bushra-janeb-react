import Article from "components/articles/Articles";
import Banner from "components/banner/Banner";
import Pagination from "components/pagination/Pagination";
import Tag from "components/tags/Tags";
import React, { useState } from "react";
import { getArticles } from "services/fakeArticlesService";
import { getTags } from "services/fakeTagsService";
import { paginate } from "utils/paginate";
import { HomePageContainer } from "./homePage.styles";

/**
 * Render the <HomePage> component.
 *
 * @return {JSX.Element}
 */
export const Home = () => {
  const [articles] = useState(getArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTag, setCurrentTag] = useState("");
  const filtered = currentTag
    ? articles.filter((article) => article.title === currentTag.name)
    : articles;
  const [pageSize] = useState(10);
  const newArticles = paginate(filtered, currentPage, pageSize);
  const [tags] = useState(getTags);

  /**
   * Handle onPageChange event.
   *
   * @param {Number} page The number of the current page.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };

  /**
   * Handle tagSelect event.
   *
   * @param {Object} tag The selected tag.
   */
  const handleTagSelect = (tag) => {
    setCurrentTag(tag);
    setCurrentPage(1);
  };
  return (
    <>
      <Banner />
      <HomePageContainer>
        <Article newArticles={newArticles} />
        <Tag
          onTagSelect={handleTagSelect}
          selectedTag={currentTag}
          tags={tags}
        />
      </HomePageContainer>
      <Pagination
        currentPage={currentPage}
        itemCount={filtered.length}
        onPageChange={handlePageChange}
        pageSize={pageSize}
      />
    </>
  );
};

export default Home;
