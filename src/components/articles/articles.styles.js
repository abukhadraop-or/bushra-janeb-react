import styled from 'styled-components';
import colors from 'styles/global-colors';
import breakpoints from '../../styles/breaking-points';

export const ToggleList = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;
`;

export const ToggleListItem = styled.li`
  border-bottom: 0.125rem solid ${colors.fern};
  color: ${colors.fern};
  cursor: pointer;
  padding: 0.625rem 0;
  width: fit-content;
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40rem;

  @media screen and (max-width: ${breakpoints.desktop}) {
    min-width: 30rem;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    min-width: 25rem;
  }

  @media screen and (min-width: ${breakpoints.mobile}) {
    min-width: 10rem;
  }
`;
