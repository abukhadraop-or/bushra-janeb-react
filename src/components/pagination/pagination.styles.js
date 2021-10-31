import styled from 'styled-components';
import colors from 'styles/global-colors';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 62rem;
  padding: 0 1rem;
`;

export const UnorderedListPagination = styled.ul`
  border-radius: 0.25rem;
  display: flex;
  list-style-type: none;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-left: 0;
`;

export const PageButton = styled.button`
  background-color: ${(props) =>
    props.isActive ? `${colors.fern}` : `${colors.white}`};
  border: 0.063rem solid ${colors.veryLightGrey};
  color: ${(props) => (props.isActive ? `${colors.white}` : `${colors.fern}`)};
  cursor: pointer;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  text-decoration: none;

  &:hover {
    background-color: ${colors.aliceBlue};
  }

  &:first-child {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;
