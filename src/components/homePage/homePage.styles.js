import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (min-width: 19.625rem) {
    padding: 0 0.813rem;
  }
  @media screen and (max-width: 68.188rem) {
    flex-direction: column-reverse;
  }
`;
