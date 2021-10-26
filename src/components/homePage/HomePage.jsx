import { Article } from "components/Articles/Articles";
import Banner from "components/Banner/Banner";
import { Pagination } from "components/Pagination/Pagination";
import Tag from "components/Tags/Tags";
import React, { useEffect, useState } from "react";
import { getArticles } from "services/fake-articles-service";
import { getTags } from "services/fake-tags-service";
import paginate from "utils/paginate";
import HomePageContainer from "./home-page.styles";

/**
 * Render the <HomePage> component.
 *
 * @return {JSX.Element}
 */
export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTag, setCurrentTag] = useState("");
  const filtered = currentTag
    ? articles.filter((article) => article.title === currentTag.name)
    : articles;
  const [pageSize] = useState(10);
  const filteredArticles = paginate(filtered, currentPage, pageSize);
  const [tags, setTags] = useState([]);

  // Handles initial state.
  useEffect(() => {
    const getData = async () => {
      const result = await getArticles();
      const tag = await getTags();
      setArticles(result);
      setTags(tag);
    };

    getData();
  }, []);

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
        <Article filteredArticles={filteredArticles} />
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
