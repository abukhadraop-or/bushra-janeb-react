import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Container,
  PageButton,
  UnorderedListPagination,
} from './pagination.styles';

/**
 * Render the <Pagination> component.
 *
 * @param {Object} props              Props.
 * @param {number} props.currentPage  The current page that the user is in.
 * @param {number} props.itemCount    Number of articles.
 * @param {func}   props.onPageChange Function that handles the page change when clicking on the pagination.
 * @param {number} props.pageSize     Capacity of the page.
 *
 * @return {JSX.Element}
 */
export const Pagination = ({
  currentPage,
  itemCount,
  onPageChange,
  pageSize,
}) => {
  const pagesCount = Math.ceil(itemCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Container>
      <UnorderedListPagination>
        <li>
          {pages.map((page) => (
            <PageButton
              isActive={page === currentPage}
              key={page}
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </PageButton>
          ))}
        </li>
      </UnorderedListPagination>
    </Container>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
