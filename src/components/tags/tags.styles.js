import styled from 'styled-components';
import breakpoints from 'styles/breaking-points';
import colors from 'styles/global-colors';

export const Holder = styled.div`
  background-color: ${colors.concrete};
  border-radius: 0.25rem;
  height: fit-content;
  margin-left: 0;
  margin-top: 1.7rem;
  padding: 0.313rem 0.625rem 0.625rem 0.625rem;
  width: fit-content;

  @media screen and (min-width: ${breakpoints.LargeScreen}) {
    margin-left: 3rem;
  }

  @media screen and (max-width: ${breakpoints.desktopExtraWide}) {
    padding: 0;
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const Tags = styled.div`
  background-color: ${colors.aluminium};
  border-radius: 10rem;
  color: ${colors.white};
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  margin-right: 0.188rem;
  padding: 0.1rem 1rem;
  text-align: center;
  width: fit-content;

  &:hover {
    color: ${colors.darkBlue};
  }
`;

export const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding-right: 0.6em;
  width: fit-content;

  @media screen and (max-width: 73.75rem) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
