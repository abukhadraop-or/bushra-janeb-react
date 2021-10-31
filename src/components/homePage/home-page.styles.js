import styled from 'styled-components';
import breakpoints from 'styles/breaking-points';

export const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: ${breakpoints.mobile}) {
    padding: 0 0.813rem;
  }

  @media screen and (max-width: ${breakpoints.LargeScreen}) {
    flex-direction: column-reverse;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
